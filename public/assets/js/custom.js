"use strict";

/***************************************************
****************************************************
// Counter Active Js
****************************************************
***************************************************/
(function () {
	function ready(fn) { if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
	ready(function () { document.querySelectorAll('.counter').forEach(function (el) { if (window.counterUp) window.counterUp(el); }); });
})();

/***************************************************
****************************************************
// Feather Active Js
****************************************************
***************************************************/
(function () {
	function ready(fn) { if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
	ready(function () { if (window.feather && typeof window.feather.replace === 'function') { window.feather.replace(); } });
})();

/***************************************************
****************************************************
// Show and hide Search Form JS
****************************************************
***************************************************/
var handleSearchForm = function () {
	var openBtn = document.getElementById('search-button');
	var closeBtn = document.getElementById('close-search');
	if (openBtn) { openBtn.addEventListener('click', function () { document.body.classList.add('search-open'); }); }
	if (closeBtn) { closeBtn.addEventListener('click', function () { document.body.classList.remove('search-open'); }); }
};

/***************************************************
****************************************************
// Web Ticker Active Js (removed dependency)
****************************************************
***************************************************/
(function () {
	function ready(fn) { if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
	ready(function () { var t = document.getElementById('webticker'); if (t) { /* no-op */ } });
})();

/***************************************************
****************************************************
// Setting Sidebar (replacing simplerSidebar)
****************************************************
***************************************************/
(function () {
	function ready(fn) { if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
	ready(function () {
		var mainSidebar = document.getElementById('settingSidebar');
		var trigger = document.getElementById('settingSidebarTrigger');
		if (mainSidebar && trigger) { trigger.addEventListener('click', function (e) { e.preventDefault(); mainSidebar.classList.toggle('open'); }); }
		document.addEventListener('click', function (e) {
			if (!mainSidebar) return;
			var within = e.target.closest && e.target.closest('#settingSidebar, #settingSidebarTrigger');
			if (!within && mainSidebar.classList.contains('open')) { mainSidebar.classList.remove('open'); }
		});
		document.querySelectorAll('#settingSidebar .quitter').forEach(function (q) { q.addEventListener('click', function (e) { e.preventDefault(); if (mainSidebar) { mainSidebar.classList.remove('open'); } }); });
	});
})();

(function () {
	function ready(fn) { if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
	ready(function () {
		var mainSidebar = document.getElementById('demoSettingSidebar');
		var trigger = document.getElementById('demoSettingSidebarTrigger');
		if (mainSidebar && trigger) { trigger.addEventListener('click', function (e) { e.preventDefault(); mainSidebar.classList.toggle('open'); }); }
		document.addEventListener('click', function (e) {
			if (!mainSidebar) return;
			var within = e.target.closest && e.target.closest('#demoSettingSidebar, #demoSettingSidebarTrigger');
			if (!within && mainSidebar.classList.contains('open')) { mainSidebar.classList.remove('open'); }
		});
		document.querySelectorAll('#demoSettingSidebar .quitter').forEach(function (q) { q.addEventListener('click', function (e) { e.preventDefault(); if (mainSidebar) { mainSidebar.classList.remove('open'); } }); });
	});
})();

/***************************************************
****************************************************
// Dropdown Animation (no-op without Bootstrap JS)
****************************************************
***************************************************/
var handleDropdownAnimation = function () {
	// Intentionally left as a placeholder
};

/***************************************************
****************************************************
// Toster Notifications (vanilla + toastr shim)
****************************************************
***************************************************/
var handleTosterNotifications = function () {
	var toastCount = 0;
	var lastToast;
	var getMessage = function () { return 'Hi, welcome to Metrical. This is example of Toastr notification box.'; };
	var showsimple = document.getElementById('showsimple');
	if (showsimple) { showsimple.addEventListener('click', function () { toastr.success('Without any options', 'Simple notification!'); }); }
	var showtoast = document.getElementById('showtoast');
	if (showtoast) {
		showtoast.addEventListener('click', function () {
			var selectedType = document.querySelector('#toastTypeGroup input:radio:checked');
			var shortCutFunction = selectedType ? selectedType.value : 'success';
			var msgEl = document.getElementById('message');
			var titleEl = document.getElementById('title');
			var msg = msgEl ? msgEl.value : '';
			var title = titleEl ? (titleEl.value || '') : '';
			toastCount++;
			var closeButton = document.getElementById('closeButton');
			var debugInfo = document.getElementById('debugInfo');
			var progressBar = document.getElementById('progressBar');
			var preventDuplicates = document.getElementById('preventDuplicates');
			var positionRadio = document.querySelector('#positionGroup input:radio:checked');
			toastr.options = Object.assign(toastr.options || {}, {
				closeButton: !!(closeButton && closeButton.checked),
				debug: !!(debugInfo && debugInfo.checked),
				progressBar: !!(progressBar && progressBar.checked),
				preventDuplicates: !!(preventDuplicates && preventDuplicates.checked),
				positionClass: positionRadio ? positionRadio.value : 'toast-top-right',
				onclick: null
			});
			['showDuration', 'hideDuration', 'timeOut', 'extendedTimeOut', 'showEasing', 'hideEasing', 'showMethod', 'hideMethod'].forEach(function (id) { var el = document.getElementById(id); if (el && el.value) { toastr.options[id] = el.value; } });
			if (!msg) { msg = getMessage(); }
			var optEl = document.getElementById('toastrOptions');
			if (optEl) { optEl.textContent = "Command: toastr[" + shortCutFunction + "](\"" + msg + (title ? "\", \"" + title : '') + "\")\n\ntoastr.options = " + JSON.stringify(toastr.options, null, 2); }
			lastToast = (toastr[shortCutFunction] || toastr.info)(msg, title);
		});
	}
	var clearLast = document.getElementById('clearlasttoast');
	if (clearLast) { clearLast.addEventListener('click', function () { toastr.clear(lastToast); }); }
	var clearAll = document.getElementById('cleartoasts');
	if (clearAll) { clearAll.addEventListener('click', function () { toastr.clear(); }); }
};

/***************************************************
****************************************************
// Mask Formatter (removed)
****************************************************
***************************************************/
var handleMaskFormatter = function () { };

/***************************************************
****************************************************
// Card - Remove / Reload / Collapse / Expand (vanilla)
****************************************************
***************************************************/
var cardActionRunning = false;
var handleCardAction = function () {
	"use strict";
	if (cardActionRunning) { return false; }
	cardActionRunning = true;
	// collapse: add title on hover
	document.addEventListener('mouseover', function (e) { var el = e.target.closest('[data-toggle=collapse]'); if (!el) return; if (!el.getAttribute('data-init')) { el.setAttribute('title', 'Collapse/Expand'); el.setAttribute('data-init', 'true'); } });
	// reload
	document.addEventListener('mouseover', function (e) { var el = e.target.closest('[data-toggle=refresh]'); if (!el) return; if (!el.getAttribute('data-init')) { el.setAttribute('title', 'Refresh'); el.setAttribute('data-init', 'true'); } });
	document.addEventListener('click', function (e) { var el = e.target.closest('[data-toggle=refresh]'); if (!el) return; e.preventDefault(); var target = el.closest('.card'); if (target && !target.classList.contains('card-loading')) { var targetBody = target.querySelector('.card-body'); var spinnerClass = el.getAttribute('data-spinner-class') ? el.getAttribute('data-spinner-class') : 'text-primary'; var wrapper = document.createElement('div'); wrapper.className = 'card-loader'; var spinner = document.createElement('div'); spinner.className = 'spinner-border ' + spinnerClass; wrapper.appendChild(spinner); target.classList.add('card-loading'); if (targetBody) { targetBody.appendChild(wrapper); } else { target.appendChild(wrapper); } setTimeout(function () { target.classList.remove('card-loading'); var cl = target.querySelector('.card-loader'); if (cl) cl.remove(); }, 2000); } });
	// expand
	document.addEventListener('mouseover', function (e) { var el = e.target.closest('[data-toggle=expand]'); if (!el) return; if (!el.getAttribute('data-init')) { el.setAttribute('title', 'Minimize/Maximize'); el.setAttribute('data-init', 'true'); } });
	document.addEventListener('click', function (e) { var el = e.target.closest('[data-toggle=expand]'); if (!el) return; e.preventDefault(); var target = el.closest('.card'); var targetBody = target ? target.querySelector('.card-body') : null; var targetClass = 'card-expand'; if (document.body.classList.contains(targetClass) && target && target.classList.contains(targetClass)) { document.querySelectorAll('.card').forEach(function (c) { c.classList.remove(targetClass); c.removeAttribute('style'); }); document.body.classList.remove(targetClass); if (targetBody) targetBody.removeAttribute('style'); } else { document.body.classList.add(targetClass); if (target) target.classList.add(targetClass); } window.dispatchEvent(new Event('resize')); });
	// remove
	document.addEventListener('mouseover', function (e) { var el = e.target.closest('[data-toggle=remove]'); if (!el) return; if (!el.getAttribute('data-init')) { el.setAttribute('title', 'Remove'); el.setAttribute('data-init', 'true'); } });
	document.addEventListener('click', function (e) { var el = e.target.closest('[data-toggle=remove]'); if (!el) return; e.preventDefault(); var card = el.closest('.card'); if (card) card.remove(); });
};

/***************************************************
****************************************************
// Tooltip & Popover (skipped without Bootstrap)
****************************************************
***************************************************/
var handelTooltipPopoverActivation = function () { };

/***************************************************
****************************************************
// Slimscroll (native)
****************************************************
***************************************************/
var handleSlimScroll = function () {
	"use strict";
	document.querySelectorAll('[data-scrollbar=true]').forEach(function (element) {
		var dataHeight = element.getAttribute('data-height') || element.style.height || (element.getBoundingClientRect().height + 'px');
		element.style.maxHeight = dataHeight;
		element.style.overflowY = 'auto';
		element.setAttribute('data-init', 'true');
	});
};

/***************************************************
****************************************************
// Scroll to Top Button
****************************************************
***************************************************/
var handleScrollToTopButton = function () {
	"use strict";
	function toggle() { var totalScroll = window.pageYOffset || document.documentElement.scrollTop || 0; document.querySelectorAll('[data-click=scroll-top]').forEach(function (btn) { if (totalScroll >= 200) { btn.classList.add('show'); } else { btn.classList.remove('show'); } }); }
	window.addEventListener('scroll', toggle, { passive: true });
	var content = document.querySelector('.content'); if (content) { content.addEventListener('scroll', toggle, { passive: true }); }
	document.querySelectorAll('[data-click=scroll-top]').forEach(function (btn) { btn.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }); });
};

/***************************************************
****************************************************
// Application Controller
****************************************************
***************************************************/
var App = function () {
	"use strict";
	return {
		init: function () { this.initComponent(); },
		initComponent: function () {
			handleSearchForm();
			handleDropdownAnimation();
			handleTosterNotifications();
			handleCardAction();
			handelTooltipPopoverActivation();
			handleSlimScroll();
			handleScrollToTopButton();
		},
		scrollTop: function () { window.scrollTo({ top: 0, behavior: 'auto' }); }
	};
}();

(function () {
	function ready(fn) { if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
	ready(function () { App.init(); });
})();