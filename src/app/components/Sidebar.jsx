"use client";
import { useEffect } from "react";

export default function Sidebar() {
  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      try {
        const featherModule = await import("feather-icons");
        const feather = featherModule.default || featherModule;
        if (isMounted && feather && typeof feather.replace === "function") {
          feather.replace();
        }
      } catch {}
    };
    run();

    // Sidebar accordion behavior (open/close sub-menus like original template)
    const menuRoot = document.querySelector('.accordion-menu');
    const topLevelLinks = menuRoot ? menuRoot.querySelectorAll(':scope > li > a') : [];

    const closeSubmenu = (li) => {
      li.classList.remove('open');
      const submenu = li.querySelector(':scope > ul.sub-menu');
      if (submenu) submenu.style.display = 'none';
    };

    const openSubmenu = (li) => {
      li.classList.add('open');
      const submenu = li.querySelector(':scope > ul.sub-menu');
      if (submenu) submenu.style.display = 'block';
    };

    const onTopLinkClick = (e) => {
      const anchor = e.currentTarget;
      const li = anchor.parentElement;
      const submenu = li ? li.querySelector(':scope > ul.sub-menu') : null;
      if (!submenu) return; // allow normal navigation when no submenu exists
      e.preventDefault();
      // Close siblings
      const siblings = li.parentElement ? Array.from(li.parentElement.children) : [];
      siblings.forEach((s) => { if (s !== li) closeSubmenu(s); });
      // Toggle current
      if (li.classList.contains('open')) {
        closeSubmenu(li);
      } else {
        openSubmenu(li);
      }
    };

    topLevelLinks.forEach((el) => el.addEventListener('click', onTopLinkClick));

    // Ensure initially active menus are visible
    const activeLis = menuRoot ? menuRoot.querySelectorAll(':scope > li.open, :scope > li.active') : [];
    activeLis.forEach((li) => {
      const submenu = li.querySelector(':scope > ul.sub-menu');
      if (submenu) submenu.style.display = 'block';
    });

    return () => {
      isMounted = false;
      topLevelLinks.forEach((el) => el.removeEventListener('click', onTopLinkClick));
    };
  }, []);

  return (
    <>
      <div className="logo">
        <a className="logo-img" href="/"> 
          <img className="desktop-logo" src="/assets/images/logo.png" alt="" />
          <img className="small-logo" src="/assets/images/small-logo.png" alt="" />
        </a>
        <i className="ion-ios-close-empty" id="sidebar-toggle-button-close"></i>
      </div>
      <div className="page-sidebar-inner">
        <div className="page-sidebar-menu">
          <ul className="accordion-menu">
            <li className="open active">
              <a href="#"><i data-feather="home"></i>
                <span>Dashboard</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu" style={{ display: "block" }}>
                <li className="active"><a href="/">Sales</a></li>
                <li><a href="/dashboard/analytics">Analytics</a></li>
                <li><a href="/dashboard/crypto">Cryptocurrency</a></li>
                <li><a href="/dashboard/helpdesk">Helpdesk</a></li>
                <li><a href="/dashboard/project">Project</a></li>
                <li><a href="/dashboard/ecommerce">Ecommerce</a></li>
                <li><a href="/dashboard/server">Server</a></li>
                <li><a href="/dashboard/education">Education</a></li>
                <li><a href="/dashboard/event">Event</a></li>
                <li><a href="/dashboard/social">Social</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="mail"></i>
                <span>Mailbox</span><span className="badge badge-warning ft-right">10+</span></a>
              <ul className="sub-menu">
                <li><a href="/mailbox">Inbox</a></li>
                <li><a href="/mailbox/message">View Mail</a></li>
                <li><a href="/mailbox/compose">Compose Mail</a></li>
              </ul>
            </li>
            <li>
              <a href="/widgets"><i data-feather="layout"></i>
                <span>Widgets</span><span className="badge badge-info ft-right">Hot</span></a>
            </li>
            <li className="menu-divider mg-y-20-force"></li>
            <li className="mg-20-force menu-elements">Elements</li>
            <li>
              <a href="#"><i data-feather="grid"></i>
                <span>UI Elements</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/ui/card">Card</a></li>
                <li><a href="/ui/alert">Alerts</a></li>
                <li><a href="/ui/button">Buttons</a></li>
                <li><a href="/ui/badge">Badges</a></li>
                <li><a href="/ui/typography">Typography</a></li>
                <li><a href="/ui/notification">Notifications</a></li>
                <li><a href="/ui/modal">Modals</a></li>
                <li><a href="/ui/tooltip">Tooltips</a></li>
                <li><a href="/ui/progress">Progress</a></li>
                <li><a href="/ui/spinner">Spinners</a></li>
                <li><a href="/ui/accordion">Accordions</a></li>
                <li><a href="/ui/pagination">Pagination</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="gift"></i>
                <span>Icons</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/icon/font-awesome">Font Awesome</a></li>
                <li><a href="/icon/feather">Feather Icons</a></li>
                <li><a href="/icon/mdi">Mdi icons</a></li>
                <li><a href="/icon/flag">Flag icons</a></li>
                <li><a href="/icon/simple-line">Simple line icons</a></li>
                <li><a href="/icon/themify">Themify icons</a></li>
                <li><a href="/icon/weather">Weather Icons</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="command"></i>
                <span>Components</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/components/datepicker">Date Picker</a></li>
                <li><a href="/components/timepicker">Time Picker</a></li>
                <li><a href="/components/colorpicker">Color Picker</a></li>
                <li><a href="/components/bootselect">Bootstrap Select</a></li>
                <li><a href="/components/codeeditor">Code Editor</a></li>
                <li><a href="/components/wysiwyg">WYSIWYG Editor</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="calendar"></i>
                <span>Forms</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/forms/element">Form Elements</a></li>
                <li><a href="/forms/layout">Form Layouts</a></li>
                <li><a href="/forms/wizard">Form Wizard</a></li>
                <li><a href="/forms/validation">Form Validation</a></li>
                <li><a href="/forms/upload">File Upload</a></li>
                <li><a href="/forms/publisher">Form Publishers</a></li>
                <li><a href="/forms/formatter">Form Formatter </a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="database"></i>
                <span>Tables</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/tables/static">Static</a></li>
                <li><a href="/tables/responsive">Responsive</a></li>
                <li><a href="/tables/datatable">Data Tables</a></li>
                <li><a href="/tables/footable">Foo Tables</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="pie-chart"></i>
                <span>Charts</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/charts/apex">Apex</a></li>
                <li><a href="/charts/google">Google</a></li>
                <li><a href="/charts/morris">Morris</a></li>
                <li><a href="/charts/chartjs">ChartJS</a></li>
                <li><a href="/charts/flot">Flot</a></li>
                <li><a href="/charts/chartlist">Chartlist</a></li>
                <li><a href="/charts/sparkline">Sparkline</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="map"></i>
                <span>Maps</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/maps/google">Google Maps</a></li>
                <li><a href="/maps/vector">Vector Maps</a></li>
              </ul>
            </li>
            <li className="menu-divider mg-y-20-force"></li>
            <li className="mg-20-force menu-extras">Extras</li>
            <li>
              <a href="#"><i data-feather="cpu"></i>
                <span>App View</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/apps/chatroom">Chat Room</a></li>
                <li><a href="/apps/calendar">Calendar</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="codepen"></i>
                <span>Pages</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/pages/invoice">Invoice</a></li>
                <li><a href="/pages/404">404 Page</a></li>
                <li><a href="/pages/500">500 Page</a></li>
                <li><a href="/pages/profile">Profile</a></li>
                <li><a href="/pages/login">Login</a></li>
                <li><a href="/pages/register">Register</a></li>
                <li><a href="/pages/lockscreen">Lockscreen</a></li>
                <li><a href="/pages/password">password Reset</a></li>
                <li><a href="/pages/search">Search Result</a></li>
                <li><a href="/pages/gallery">Gallery</a></li>
                <li><a href="/pages/pricing">Pricing Tables</a></li>
                <li><a href="/pages/treeview">Tree View</a></li>
              </ul>
            </li>
            <li>
              <a href="/"><i data-feather="printer"></i>
                <span>Mail Template</span><span className="badge badge-warning ft-right">Hot</span></a>
            </li>
            <li>
              <a href="#"><i data-feather="monitor"></i>
                <span>Frontend</span><span className="badge badge-danger ft-right">Very Hot</span></a>
              <ul className="sub-menu">
                <li><a href="/" target="_blank">Ecommerce</a></li>
                <li><a href="/" target="_blank">Cryptocurrency</a></li>
                <li><a href="/" target="_blank">Helpdesk</a></li>
                <li><a href="/" target="_blank">project</a></li>
                <li><a href="/" target="_blank">server</a></li>
                <li><a href="/" target="_blank">education</a></li>
                <li><a href="/" target="_blank">event</a></li>
                <li><a href="/" target="_blank">social</a></li>
              </ul>
            </li>
            <li className="menu-divider mg-y-20-force"></li>
            <li className="mg-20-force menu-others">Others</li>
            <li>
              <a href="/"><i data-feather="life-buoy"></i>
                <span>Documentation</span></a>
            </li>
            <li>
              <a href="/"><i data-feather="coffee"></i>
                <span>Changelog</span><span className="badge badge-primary ft-right">1.7</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-footer">
        <a className="pull-left" href="/" data-toggle="tooltip" data-placement="top" title="Profile"><i data-feather="user" className="ht-15"></i></a>
        <a className="pull-left" href="/" data-toggle="tooltip" data-placement="top" title="Mailbox"><i data-feather="mail" className="ht-15"></i></a>
        <a className="pull-left" href="/" data-toggle="tooltip" data-placement="top" title="Lockscreen"><i data-feather="lock" className="ht-15"></i></a>
        <a className="pull-left" href="/" data-toggle="tooltip" data-placement="top" title="Sign Out"><i data-feather="log-out" className="ht-15"></i></a>
      </div>
    </>
  );
}


