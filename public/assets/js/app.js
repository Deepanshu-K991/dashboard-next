// Template Core Script (vanilla JS)
(function () {
    'use strict';
    function ready(fn) { if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }

    // Options
    var submenu_animation_speed = 100;
    var submenu_opacity_animation = true;
    var page_boxed = false;
    var page_sidebar_fixed = true;
    var page_sidebar_collapsed = false;
    var page_header_fixed = false;

    ready(function () {
        var body = document.body;
        var sidebarBackdrop = null;

        function ensureSidebarBackdrop() {
            if (sidebarBackdrop) return sidebarBackdrop;
            sidebarBackdrop = document.createElement('div');
            sidebarBackdrop.className = 'sidebar-backdrop';
            document.body.appendChild(sidebarBackdrop);
            // Close on backdrop click
            sidebarBackdrop.addEventListener('click', function () { setSidebarVisible(false); });
            return sidebarBackdrop;
        }

        function setSidebarVisible(visible) {
            if (visible) {
                body.classList.add('page-sidebar-visible');
                ensureSidebarBackdrop();
                if (sidebarBackdrop) sidebarBackdrop.style.display = 'block';
            } else {
                body.classList.remove('page-sidebar-visible');
                if (sidebarBackdrop) sidebarBackdrop.style.display = 'none';
            }
        }
        function boxed_page() { if (page_boxed) { var c = document.querySelector('.page-container'); if (c) c.classList.add('container'); } }
        function fixed_header() { if (page_header_fixed) { body.classList.add('page-header-fixed'); } }

        function page_sidebar_init() {
            var inner = document.querySelector('.page-sidebar-inner');
            if (inner) { inner.style.overflowY = 'auto'; inner.style.maxHeight = '100%'; }
            function fixed_sidebar() {
                if (body.classList.contains('page-sidebar-fixed') && page_sidebar_fixed === false) { page_sidebar_fixed = true; }
                if (page_sidebar_fixed) {
                    body.classList.add('page-sidebar-fixed');
                    var btn = document.getElementById('fixed-sidebar-toggle-button');
                    if (btn) {
                        btn.classList.remove('icon-radio_button_unchecked');
                        btn.classList.add('icon-radio_button_checked');
                        btn.addEventListener('click', function (e) { e.preventDefault(); body.classList.toggle('page-sidebar-fixed'); this.classList.toggle('icon-radio_button_unchecked'); this.classList.toggle('icon-radio_button_checked'); page_sidebar_fixed = body.classList.contains('page-sidebar-fixed'); });
                    }
                }
            }
            function collapsed_sidebar() {
                if (page_sidebar_collapsed) { body.classList.add('page-sidebar-collapsed'); }
                var toggle = document.getElementById('collapsed-sidebar-toggle-button');
                if (toggle) { toggle.addEventListener('click', function (e) { e.preventDefault(); body.classList.toggle('page-sidebar-collapsed'); page_sidebar_collapsed = body.classList.contains('page-sidebar-collapsed'); }); }
                // In collapsed mode, rely on CSS-only flyout menus; do not widen sidebar on hover
            }
            function small_screen_sidebar() {
                var openBtn = document.getElementById('sidebar-toggle-button');
                var closeBtn = document.getElementById('sidebar-toggle-button-close');
                ensureSidebarBackdrop();
                if (openBtn) { openBtn.addEventListener('click', function (e) { e.preventDefault(); setSidebarVisible(!body.classList.contains('page-sidebar-visible')); }); }
                if (closeBtn) { closeBtn.addEventListener('click', function (e) { e.preventDefault(); setSidebarVisible(!body.classList.contains('page-sidebar-visible')); }); }
                // Close with ESC when open
                document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setSidebarVisible(false); } });
                // Close when clicking links inside sidebar (useful on mobile)
                var sidebar = document.querySelector('.page-sidebar');
                if (sidebar) {
                    sidebar.addEventListener('click', function (e) {
                        var link = e.target && (e.target.closest && e.target.closest('a'));
                        if (link && body.classList.contains('page-sidebar-visible')) { setSidebarVisible(false); }
                    });
                }
            }
            fixed_sidebar();
            collapsed_sidebar();
            small_screen_sidebar();
        }

        function accordion_menu() {
            var menu = document.querySelector('.accordion-menu');
            if (!menu) return;
            var subMenus = document.querySelectorAll('.page-sidebar li:not(.open) .sub-menu');
            subMenus.forEach(function (s) { s.style.display = 'none'; });
            if (!submenu_opacity_animation) {
                Array.prototype.forEach.call(document.querySelectorAll('.sub-menu li'), function (li) { li.classList.add('animation'); });
            }
            menu.addEventListener('click', function (ev) {
                var a = ev.target.closest('a');
                if (!a) return;
                var sub = a.nextElementSibling && a.nextElementSibling.classList.contains('sub-menu') ? a.nextElementSibling : null;
                var parentLi = a.parentElement;
                var activeOpen = menu.querySelector(':scope > li.open');
                function slideDown(el) { el.style.display = 'block'; parentLi.classList.add('open'); if (submenu_opacity_animation) { Array.prototype.forEach.call(el.querySelectorAll('li'), function (li, i) { setTimeout(function () { li.classList.add('animation'); }, (i + 1) * 15); }); } }
                function slideUp(el) { if (submenu_opacity_animation) { Array.prototype.forEach.call(el.querySelectorAll('li'), function (li, i) { setTimeout(function () { li.classList.remove('animation'); }, (i + 1) * 5); }); } el.style.display = 'none'; parentLi.classList.remove('open'); }
                function hideActive() { var open = menu.querySelector(':scope > li.open > .sub-menu'); if (open) { open.style.display = 'none'; activeOpen && activeOpen.classList.remove('open'); } }
                if (sub && !body.classList.contains('page-sidebar-collapsed')) {
                    ev.preventDefault();
                    if (!parentLi.classList.contains('open')) { if (activeOpen) { hideActive(); } slideDown(sub); } else { slideUp(sub); }
                }
                if (sub && body.classList.contains('page-sidebar-collapsed')) { ev.preventDefault(); }
            });
            if (document.querySelector('.active-page > .sub-menu')) {
                var link = document.querySelector('.page-sidebar li.active-page > a'); if (link) link.click();
            }
        }

        function matchQueryInit() {
            var mql = window.matchMedia('(min-width:992px) and (max-width: 1199px)');
            function doMinimize(e) { if (e.matches) { document.body.classList.add('page-sidebar-collapsed'); } else { document.body.classList.remove('page-sidebar-collapsed'); } }
            if (mql.addEventListener) { mql.addEventListener('change', doMinimize); } else { mql.addListener(doMinimize); }
            doMinimize(mql);
        }

        page_sidebar_init();
        boxed_page();
        fixed_header();
        accordion_menu();
        navbar_init();
        right_sidebar();
        plugins_init();
        matchQueryInit();
    });
})();



