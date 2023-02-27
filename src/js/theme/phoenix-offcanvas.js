/* eslint-disable no-new */
/*-----------------------------------------------
|                    Phoenix Offcanvas
-----------------------------------------------*/

const phoenixOffcanvasInit = () => {
  const { getData } = window.phoenix.utils;
  const toggleEls = document.querySelectorAll(
    "[data-phoenix-toggle='offcanvas']"
  );
  const offcanvasBackdrop = document.querySelector('[data-phoenix-backdrop]');

  const showFilterCol = offcanvasEl => {
    offcanvasEl.classList.add('show');
    document.body.style.overflow = 'hidden';
  };
  const hideFilterCol = offcanvasEl => {
    offcanvasEl.classList.remove('show');
    document.body.style.removeProperty('overflow');
  };

  if (toggleEls) {
    toggleEls.forEach(toggleEl => {
      const offcanvasTarget = getData(toggleEl, 'phoenix-target');
      const offcanvasTargetEl = document.querySelector(offcanvasTarget);
      const closeBtn = offcanvasTargetEl.querySelector(
        "[data-phoenix-dismiss='offcanvas']"
      );

      toggleEl.addEventListener('click', () => {
        console.log({ offcanvasTargetEl });
        showFilterCol(offcanvasTargetEl);
      });
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          hideFilterCol(offcanvasTargetEl);
        });
      }
      if (offcanvasBackdrop) {
        offcanvasBackdrop.addEventListener('click', () => {
          hideFilterCol(offcanvasTargetEl);
        });
      }
    });
  }
};

export default phoenixOffcanvasInit;
