const navbarTopInit = () => {
  const Selector = {
    NAVBAR_TOP_ACTIVE: '.dropdown-item.active',
    NAVBAR_TOP_PARENT: '.dropdown',
    DROPDOWN: '.dropdown'
  };
  const ClassName = {
    ACTIVE: 'active'
  };
  const navbarTopActiveEl = document.querySelector(Selector.NAVBAR_TOP_ACTIVE);

  const addActiveClassInParent = (el, lavel = 0) => {
    el.classList.add(ClassName.ACTIVE);

    const hasParentDropdownEl = el.parentNode.closest(Selector.DROPDOWN);
    if (hasParentDropdownEl && lavel < 4) {
      addActiveClassInParent(hasParentDropdownEl, lavel + 1);
    }
  };

  const navbarTopActiveDropdownParent = navbarTopActiveEl?.closest(
    Selector.DROPDOWN
  );
  navbarTopActiveDropdownParent?.classList?.add(ClassName.ACTIVE);
  const hasParentDropdownEl = navbarTopActiveDropdownParent?.parentNode.closest(
    Selector.DROPDOWN
  );
  if (hasParentDropdownEl) {
    addActiveClassInParent(hasParentDropdownEl);
  }
};
export default navbarTopInit;
