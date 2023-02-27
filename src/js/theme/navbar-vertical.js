/* -------------------------------------------------------------------------- */
/*                               Navbar Vertical                              */
/* -------------------------------------------------------------------------- */

const handleNavbarVerticalCollapsed = () => {
  const { getItemFromStore, hasClass, setItemToStore } = window.phoenix.utils;
  const Selector = {
    HTML: 'html',
    NAVBAR_VERTICAL_TOGGLE: '.navbar-vertical-toggle',
    NAVBAR_VERTICAL_COLLAPSE: '.navbar-vertical .navbar-collapse',
    ECHART_RESPONSIVE: '[data-echart-responsive]',
    ACTIVE_NAV_LINK: '.navbar-vertical .nav-link.active'
  };

  const Events = {
    CLICK: 'click',
    MOUSE_OVER: 'mouseover',
    MOUSE_LEAVE: 'mouseleave',
    NAVBAR_VERTICAL_TOGGLE: 'navbar.vertical.toggle'
  };
  const ClassNames = {
    NAVBAR_VERTICAL_COLLAPSED: 'navbar-vertical-collapsed',
    NAVBAR_VERTICAL_COLLAPSED_HOVER: 'navbar-vertical-collapsed-hover'
  };
  const navbarVerticalToggle = document.querySelector(
    Selector.NAVBAR_VERTICAL_TOGGLE
  );
  const html = document.querySelector(Selector.HTML);
  const navbarVerticalCollapse = document.querySelector(
    Selector.NAVBAR_VERTICAL_COLLAPSE
  );
  const activeNavLinkItem = document.querySelector(Selector.ACTIVE_NAV_LINK);

  if (navbarVerticalToggle) {
    navbarVerticalToggle.addEventListener(Events.CLICK, e => {
      navbarVerticalToggle.blur();
      html?.classList.toggle(ClassNames.NAVBAR_VERTICAL_COLLAPSED);

      // Set collapse state on localStorage
      const isNavbarVerticalCollapsed = getItemFromStore(
        'phoenixIsNavbarVerticalCollapsed',
        false
      );
      setItemToStore(
        'phoenixIsNavbarVerticalCollapsed',
        !isNavbarVerticalCollapsed
      );

      const event = new CustomEvent(Events.NAVBAR_VERTICAL_TOGGLE);
      e.currentTarget?.dispatchEvent(event);
    });
  }
  if (navbarVerticalCollapse) {
    navbarVerticalCollapse.addEventListener(Events.MOUSE_OVER, () => {
      if (hasClass(html, ClassNames.NAVBAR_VERTICAL_COLLAPSED)) {
        html?.classList.add(ClassNames.NAVBAR_VERTICAL_COLLAPSED_HOVER);
      }
    });
    navbarVerticalCollapse.addEventListener(Events.MOUSE_LEAVE, () => {
      if (hasClass(html, ClassNames.NAVBAR_VERTICAL_COLLAPSED_HOVER)) {
        html?.classList.remove(ClassNames.NAVBAR_VERTICAL_COLLAPSED_HOVER);
      }
    });

    if (activeNavLinkItem) {
      activeNavLinkItem.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export default handleNavbarVerticalCollapsed;
