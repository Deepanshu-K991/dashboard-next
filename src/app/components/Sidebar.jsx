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
                <li><a href="/">Analytics</a></li>
                <li><a href="/">Cryptocurrency</a></li>
                <li><a href="/">Helpdesk</a></li>
                <li><a href="/">Project</a></li>
                <li><a href="/">Ecommerce</a></li>
                <li><a href="/">Server</a></li>
                <li><a href="/">Education</a></li>
                <li><a href="/">Event</a></li>
                <li><a href="/">Social</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="mail"></i>
                <span>Mailbox</span><span className="badge badge-warning ft-right">10+</span></a>
              <ul className="sub-menu">
                <li><a href="/">Inbox</a></li>
                <li><a href="/">View Mail</a></li>
                <li><a href="/">Compose Mail</a></li>
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
                <li><a href="/">Card</a></li>
                <li><a href="/">Alerts</a></li>
                <li><a href="/">Buttons</a></li>
                <li><a href="/">Badges</a></li>
                <li><a href="/">Typography</a></li>
                <li><a href="/">Notifications</a></li>
                <li><a href="/">Modals</a></li>
                <li><a href="/">Tooltips</a></li>
                <li><a href="/">Progress</a></li>
                <li><a href="/">Spinners</a></li>
                <li><a href="/">Accordions</a></li>
                <li><a href="/">Pagination</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="gift"></i>
                <span>Icons</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/">Font Awesome</a></li>
                <li><a href="/">Feather Icons</a></li>
                <li><a href="/">Mdi icons</a></li>
                <li><a href="/">Flag icons</a></li>
                <li><a href="/">Simple line icons</a></li>
                <li><a href="/">Themify icons</a></li>
                <li><a href="/">Weather Icons</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="command"></i>
                <span>Components</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/">Date Picker</a></li>
                <li><a href="/">Time Picker</a></li>
                <li><a href="/">Color Picker</a></li>
                <li><a href="/">Bootstrap Select</a></li>
                <li><a href="/">Code Editor</a></li>
                <li><a href="/">WYSIWYG Editor</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="calendar"></i>
                <span>Forms</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/">Form Elements</a></li>
                <li><a href="/">Form Layouts</a></li>
                <li><a href="/">Form Wizard</a></li>
                <li><a href="/">Form Validation</a></li>
                <li><a href="/">File Upload</a></li>
                <li><a href="/">Form Publishers</a></li>
                <li><a href="/">Form Formatter </a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="database"></i>
                <span>Tables</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/">Static</a></li>
                <li><a href="/">Responsive</a></li>
                <li><a href="/">Data Tables</a></li>
                <li><a href="/">Foo Tables</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="pie-chart"></i>
                <span>Charts</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/">Apex</a></li>
                <li><a href="/">Google</a></li>
                <li><a href="/">Morris</a></li>
                <li><a href="/">ChartJS</a></li>
                <li><a href="/">Flot</a></li>
                <li><a href="/">Chartlist</a></li>
                <li><a href="/">Sparkline</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="map"></i>
                <span>Maps</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/">Google Maps</a></li>
                <li><a href="/">Vector Maps</a></li>
              </ul>
            </li>
            <li className="menu-divider mg-y-20-force"></li>
            <li className="mg-20-force menu-extras">Extras</li>
            <li>
              <a href="#"><i data-feather="cpu"></i>
                <span>App View</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/">Chat Room</a></li>
                <li><a href="/">Calendar</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i data-feather="codepen"></i>
                <span>Pages</span><i className="accordion-icon fa fa-angle-left"></i></a>
              <ul className="sub-menu">
                <li><a href="/">Invoice</a></li>
                <li><a href="/">404 Page</a></li>
                <li><a href="/">500 Page</a></li>
                <li><a href="/">Profile</a></li>
                <li><a href="/">Login</a></li>
                <li><a href="/">Register</a></li>
                <li><a href="/">Lockscreen</a></li>
                <li><a href="/">password Reset</a></li>
                <li><a href="/">Search Result</a></li>
                <li><a href="/">Gallery</a></li>
                <li><a href="/">Pricing Tables</a></li>
                <li><a href="/">Tree View</a></li>
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


