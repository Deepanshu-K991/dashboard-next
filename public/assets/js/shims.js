window.navbar_init = window.navbar_init || function () { };
window.right_sidebar = window.right_sidebar || function () { };
window.plugins_init = window.plugins_init || function () { };

(function () {
    if (typeof window === 'undefined') return;
    function ready(fn) { if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }

    // Minimal Toastr-like shim (jQuery-free)
    if (!window.toastr) {
        var toastOptions = { positionClass: 'toast-top-right', timeOut: 5000, closeButton: true, progressBar: true };
        function ensureContainer() {
            var id = 'toast-container';
            var container = document.getElementById(id);
            if (!container) {
                container = document.createElement('div');
                container.id = id;
                container.className = toastOptions.positionClass;
                document.body.appendChild(container);
            } else {
                container.className = toastOptions.positionClass;
            }
            return container;
        }
        function createToast(type, message, title) {
            var container = ensureContainer();
            var toast = document.createElement('div');
            toast.className = 'toast toast-' + (type || 'info');
            if (toastOptions.closeButton) {
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'toast-close-button';
                btn.innerHTML = '&times;';
                btn.addEventListener('click', function () { container.removeChild(toast); });
                toast.appendChild(btn);
            }
            if (title) {
                var titleEl = document.createElement('div');
                titleEl.className = 'toast-title';
                titleEl.textContent = title;
                toast.appendChild(titleEl);
            }
            var msgEl = document.createElement('div');
            msgEl.className = 'toast-message';
            msgEl.textContent = message;
            toast.appendChild(msgEl);
            container.appendChild(toast);
            if (toastOptions.progressBar) {
                var bar = document.createElement('div');
                bar.className = 'toast-progress';
                toast.appendChild(bar);
                var start = Date.now();
                var dur = toastOptions.timeOut;
                var raf;
                function step() {
                    var p = Math.min(1, (Date.now() - start) / dur);
                    bar.style.width = ((1 - p) * 100).toFixed(2) + '%';
                    if (p < 1) raf = requestAnimationFrame(step);
                }
                raf = requestAnimationFrame(step);
            }
            if (toastOptions.timeOut > 0) {
                setTimeout(function () { if (toast.parentNode) toast.parentNode.removeChild(toast); }, toastOptions.timeOut);
            }
            return toast;
        }
        window.toastr = {
            options: toastOptions,
            clear: function () {
                var c = document.getElementById('toast-container');
                if (c) c.innerHTML = '';
            },
            info: function (m, t) { return createToast('info', m, t); },
            success: function (m, t) { return createToast('success', m, t); },
            warning: function (m, t) { return createToast('warning', m, t); },
            error: function (m, t) { return createToast('error', m, t); }
        };
    }

    // Simple counterUp
    if (!window.counterUp) {
        window.counterUp = function (el, opts) {
            var duration = (opts && opts.duration) || 1200;
            var delay = (opts && opts.delay) || 16;
            var target = parseFloat((el.getAttribute('data-target') || el.textContent || '0').toString().replace(/[^0-9.\-]/g, '')) || 0;
            var start = 0;
            var startTime = null;
            function tick(ts) {
                if (!startTime) startTime = ts;
                var p = Math.min(1, (ts - startTime) / duration);
                var val = Math.floor(start + (target - start) * p);
                el.textContent = val.toLocaleString();
                if (p < 1) { setTimeout(function () { requestAnimationFrame(tick); }, delay); }
            }
            requestAnimationFrame(tick);
        };
    }

    // Minimal carousel (prev/next + interval) for .carousel
    function initCarousels() {
        var carousels = document.querySelectorAll('.carousel');
        carousels.forEach(function (carousel) {
            var inner = carousel.querySelector('.carousel-inner');
            if (!inner) return;
            var items = Array.prototype.slice.call(inner.querySelectorAll('.carousel-item'));
            if (!items.length) return;
            var idx = items.findIndex(function (i) { return i.classList.contains('active'); });
            if (idx < 0) { idx = 0; items[0].classList.add('active'); }
            function go(to) {
                items[idx].classList.remove('active');
                idx = (to + items.length) % items.length;
                items[idx].classList.add('active');
            }
            var intervalAttr = carousel.getAttribute('data-interval');
            var interval = intervalAttr ? parseInt(intervalAttr, 10) : 0;
            if (interval > 0) {
                setInterval(function () { go(idx + 1); }, interval);
            }
            // Controls
            var id = carousel.id ? ('#' + carousel.id) : null;
            if (id) {
                var nexts = document.querySelectorAll('a[href="' + id + '"][data-slide="next"]');
                var prevs = document.querySelectorAll('a[href="' + id + '"][data-slide="prev"]');
                prevs.forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); go(idx - 1); }); });
                nexts.forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); go(idx + 1); }); });
            }
        });
    }

    // Dropdowns (jQuery-free Bootstrap-like behavior)
    function initDropdowns() {
        function closeAllDropdowns() {
            document.querySelectorAll('.dropdown.show').forEach(function (dd) {
                dd.classList.remove('show');
                var menu = dd.querySelector('.dropdown-menu.show');
                if (menu) menu.classList.remove('show');
                var toggle = dd.querySelector('[data-toggle="dropdown"], [data-bs-toggle="dropdown"]');
                if (toggle) toggle.setAttribute('aria-expanded', 'false');
            });
        }

        // Toggle on click
        document.querySelectorAll('[data-toggle="dropdown"], [data-bs-toggle="dropdown"]').forEach(function (toggle) {
            if (toggle._dropdownBound) return;
            toggle._dropdownBound = true;
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var dropdown = (this.closest && this.closest('.dropdown')) || this.parentElement;
                if (!dropdown) return;
                var isShown = dropdown.classList.contains('show');
                closeAllDropdowns();
                if (!isShown) {
                    dropdown.classList.add('show');
                    var menu = dropdown.querySelector('.dropdown-menu');
                    if (menu) menu.classList.add('show');
                    this.setAttribute('aria-expanded', 'true');
                }
            });
        });

        // Close when clicking a menu item
        document.querySelectorAll('.dropdown .dropdown-menu').forEach(function (menu) {
            if (menu._closeOnClickBound) return;
            menu._closeOnClickBound = true;
            menu.addEventListener('click', function (e) {
                var item = e.target && (e.target.closest && e.target.closest('.dropdown-item, a, button'));
                if (!item) return;
                var dd = menu.closest('.dropdown');
                if (!dd) return;
                dd.classList.remove('show');
                var m = dd.querySelector('.dropdown-menu');
                if (m) m.classList.remove('show');
                var t = dd.querySelector('[data-toggle="dropdown"], [data-bs-toggle="dropdown"]');
                if (t) t.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on outside click or ESC
        document.addEventListener('click', function (e) {
            var inOpenDropdown = e.target && (e.target.closest && e.target.closest('.dropdown.show'));
            if (!inOpenDropdown) closeAllDropdowns();
        });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAllDropdowns(); });

        // Expose for manual control if needed
        window.closeAllDropdowns = closeAllDropdowns;
    }

    // Tooltips (jQuery-free minimal implementation)
    function initTooltips() {
        var selector = '[data-toggle="tooltip"], [data-bs-toggle="tooltip"]';
        function positionTooltip(target, tip, placement) {
            var r = target.getBoundingClientRect();
            var scrollY = window.pageYOffset || document.documentElement.scrollTop;
            var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
            var tw = tip.offsetWidth;
            var th = tip.offsetHeight;
            var top = 0, left = 0;
            if (placement === 'top') {
                top = r.top + scrollY - th - 8;
                left = r.left + scrollX + (r.width - tw) / 2;
            } else if (placement === 'bottom') {
                top = r.bottom + scrollY + 8;
                left = r.left + scrollX + (r.width - tw) / 2;
            } else if (placement === 'left') {
                top = r.top + scrollY + (r.height - th) / 2;
                left = r.left + scrollX - tw - 8;
            } else { // right
                top = r.top + scrollY + (r.height - th) / 2;
                left = r.right + scrollX + 8;
            }
            tip.style.position = 'absolute';
            tip.style.top = Math.round(top) + 'px';
            tip.style.left = Math.round(left) + 'px';
        }

        function bind(el) {
            if (el._tooltipBound) return;
            el._tooltipBound = true;
            function show() {
                var title = el.getAttribute('data-original-title') || el.getAttribute('title') || '';
                if (!title) return;
                // prevent native tooltip
                if (!el.getAttribute('data-original-title')) el.setAttribute('data-original-title', title);
                el.removeAttribute('title');
                var placement = el.getAttribute('data-placement') || 'top';
                var tip = document.createElement('div');
                tip.className = 'tooltip bs-tooltip-' + placement + ' show';
                tip.setAttribute('role', 'tooltip');
                var arrow = document.createElement('div'); arrow.className = 'arrow';
                var inner = document.createElement('div'); inner.className = 'tooltip-inner'; inner.textContent = title;
                tip.appendChild(arrow); tip.appendChild(inner);
                document.body.appendChild(tip);
                positionTooltip(el, tip, placement);
                el._tooltip = tip;
            }
            function hide() {
                if (el._tooltip && el._tooltip.parentNode) {
                    el._tooltip.parentNode.removeChild(el._tooltip);
                    el._tooltip = null;
                }
            }
            el.addEventListener('mouseenter', show);
            el.addEventListener('focus', show);
            el.addEventListener('mouseleave', hide);
            el.addEventListener('blur', hide);
        }

        // Bind current and future tooltip elements
        document.querySelectorAll(selector).forEach(bind);
        var mo = new MutationObserver(function (mutationList) {
            for (var i = 0; i < mutationList.length; i++) {
                var m = mutationList[i];
                if (!m.addedNodes) continue;
                Array.prototype.forEach.call(m.addedNodes, function (node) {
                    if (!(node instanceof HTMLElement)) return;
                    if (node.matches && node.matches(selector)) bind(node);
                    var matches = node.querySelectorAll ? node.querySelectorAll(selector) : [];
                    Array.prototype.forEach.call(matches, bind);
                });
            }
        });
        mo.observe(document.documentElement, { subtree: true, childList: true });

        // Expose to re-init manually
        window.reinitTooltips = function () { document.querySelectorAll(selector).forEach(bind); };
    }

    ready(function () {
        // Basic search open/close
        var searchButton = document.getElementById('search-button');
        var closeSearch = document.getElementById('close-search');
        var pageHeader = document.querySelector('.page-header');
        var searchForm = pageHeader && pageHeader.querySelector('.search-form');
        if (searchForm) {
            function openSearch(e) { e && e.preventDefault(); document.body.classList.add('search-open'); }
            function hideSearch(e) { e && e.preventDefault(); document.body.classList.remove('search-open'); }
            if (searchButton) searchButton.addEventListener('click', openSearch);
            if (closeSearch) closeSearch.addEventListener('click', hideSearch);
        }

        // Auto-init counters
        document.querySelectorAll('.counter').forEach(function (el) { window.counterUp(el); });

        // Init carousels
        initCarousels();

        // Init dropdowns and tooltips
        initDropdowns();
        initTooltips();

        // One-time welcome toast (top-left) similar to light template
        try {
            if (window.toastr && !sessionStorage.getItem('welcome_shown')) {
                var prev = Object.assign({}, window.toastr.options || {});
                window.toastr.options = Object.assign({}, prev, { positionClass: 'toast-top-left', timeOut: 5000, closeButton: true, progressBar: true, showMethod: 'slideDown' });
                setTimeout(function () { window.toastr.info('Multipurpose Admin Template', 'Hi, welcome to Metrical'); }, 300);
                sessionStorage.setItem('welcome_shown', '1');
            }
        } catch (e) { /* no-op */ }
    });
})();


