// import * as echarts from 'echarts';
const { merge } = window._;

// form config.js
export const echartSetOption = (chart, userOptions, getDefaultOptions) => {
  const themeController = document.body;
  // Merge user options with lodash
  chart.setOption(merge(getDefaultOptions(), userOptions));

  themeController.addEventListener(
    'clickControl',
    ({ detail: { control } }) => {
      if (control === 'phoenixTheme') {
        chart.setOption(window._.merge(getDefaultOptions(), userOptions));
      }
    }
  );
};
// -------------------end config.js--------------------

export const resizeEcharts = () => {
  const $echarts = document.querySelectorAll('[data-echart-responsive]');

  if ($echarts.length > 0) {
    $echarts.forEach(item => {
      const echartInstance = echarts.getInstanceByDom(item);
      echartInstance?.resize();
    });
  }
};

const navbarVerticalToggle = document.querySelector('.navbar-vertical-toggle');
navbarVerticalToggle &&
  navbarVerticalToggle.addEventListener('navbar.vertical.toggle', e => {
    return resizeEcharts();
  });

export const tooltipFormatter = (params, dateFormatter = 'MMM DD') => {
  let tooltipItem = ``;
  params.forEach(el => {
    tooltipItem += `<div class='ms-1'>
        <h6 class="text-700"><span class="fas fa-circle me-1 fs--2" style="color:${
          el.borderColor ? el.borderColor : el.color
        }"></span>
          ${el.seriesName} : ${
      typeof el.value === 'object' ? el.value[1] : el.value
    }
        </h6>
      </div>`;
  });
  return `<div>
            <p class='mb-2 text-600'>
              ${
                window.dayjs(params[0].axisValue).isValid()
                  ? window.dayjs(params[0].axisValue).format(dateFormatter)
                  : params[0].axisValue
              }
            </p>
            ${tooltipItem}
          </div>`;
};
