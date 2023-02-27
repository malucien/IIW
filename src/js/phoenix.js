/* eslint-disable no-new */
/* eslint-disable import/no-extraneous-dependencies */
import utils, { docReady } from './utils';

import docComponentInit from './docs';
import anchorJSInit from './theme/anchor';
import bigPictureInit from './theme/bigPicture';
import bulkSelectInit, { BulkSelect } from './theme/bulk-select';
import basicEchartsInit from './theme/charts/echarts/basic-echarts';
import chatInit from './theme/chat';
import choicesInit from './theme/choices';
import countupInit from './theme/countUp';
import detectorInit from './theme/detector';
import dropdownOnHover from './theme/dropdown-on-hover';
import dropzoneInit from './theme/dropzone';
import featherIconsInit from './theme/featherIcons';
import flatpickrInit from './theme/flatpickr';
import fromValidationInit from './theme/form-validation';
import { fullCalendarInit } from './theme/fullcalendar';
import glightboxInit from './theme/glightbox';
import initMap from './theme/googleMap';
import iconCopiedInit from './theme/icons';
import isotopeInit from './theme/isotope';
import listInit from './theme/list';
import lottieInit from './theme/lottie';
import modalInit from './theme/modal';
import navbarComboInit from './theme/navbar-combo';
import navbarInit from './theme/navbar-soft-on-scroll';
import navbarTopInit from './theme/navbar-top';
import handleNavbarVerticalCollapsed from './theme/navbar-vertical';
import phoenixOffcanvasInit from './theme/phoenix-offcanvas';
import popoverInit from './theme/popover';
import productDetailsInit from './theme/product-details';
import quantityInit from './theme/quantity';
import ratingInit from './theme/rater';
import responsiveNavItemsInit from './theme/responsiveNavItems';
import searchInit from './theme/search';
import simplebarInit from './theme/simplabar';
import stopPropagationInit from './theme/stop-propagation';
import swiperInit from './theme/swiper';
import themeControl from './theme/theme-control';
import tinymceInit from './theme/tinymce';
import toastInit from './theme/toast';
import todoOffcanvasInit from './theme/todoOffCanvas';
import tooltipInit from './theme/tooltip';
import wizardInit from './theme/wizard';
import navbarShadowOnScrollInit from './theme/navbar-shadow-on-scroll';
import picmoInit from './theme/picmo';

window.initMap = initMap;
docReady(detectorInit);
docReady(stopPropagationInit);
docReady(simplebarInit);
docReady(toastInit);
docReady(tooltipInit);
docReady(featherIconsInit);
docReady(basicEchartsInit);
docReady(bulkSelectInit);
docReady(listInit);
docReady(anchorJSInit);
docReady(popoverInit);
docReady(fromValidationInit);
docReady(docComponentInit);
docReady(swiperInit);
docReady(productDetailsInit);
docReady(ratingInit);
docReady(quantityInit);
docReady(dropzoneInit);
docReady(choicesInit);
docReady(tinymceInit);
docReady(responsiveNavItemsInit);
docReady(flatpickrInit);
docReady(iconCopiedInit);
docReady(isotopeInit);
docReady(bigPictureInit);
docReady(countupInit);
docReady(phoenixOffcanvasInit);
docReady(todoOffcanvasInit);
docReady(wizardInit);
docReady(glightboxInit);
docReady(themeControl);
docReady(searchInit);
docReady(handleNavbarVerticalCollapsed);
docReady(navbarInit);
docReady(themeControl);
docReady(navbarComboInit);
docReady(fullCalendarInit);
docReady(picmoInit);

docReady(chatInit);
docReady(modalInit);
docReady(lottieInit);
docReady(navbarShadowOnScrollInit);
docReady(navbarTopInit);
docReady(dropdownOnHover);
docReady(() => {
  const selectedRowsBtn = document.querySelector('[data-selected-rows]');
  const selectedRows = document.getElementById('selectedRows');
  if (selectedRowsBtn) {
    const bulkSelectEl = document.getElementById('bulk-select-example');
    const bulkSelectInstance =
      window.phoenix.BulkSelect.getInstance(bulkSelectEl);
    selectedRowsBtn.addEventListener('click', () => {
      selectedRows.innerHTML = JSON.stringify(
        bulkSelectInstance.getSelectedRows(),
        undefined,
        2
      );
    });
  }
});

export default {
  utils,
  BulkSelect
};
