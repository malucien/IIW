// import * as echarts from 'echarts';
import { echartSetOption } from './echarts-utils';

const { echarts } = window;

/* -------------------------------------------------------------------------- */
/*                                Market Share                                */
/* -------------------------------------------------------------------------- */

const topCouponsChartInit = () => {
  const { getData, getColor, resize } = window.phoenix.utils;
  const ECHART_TOP_COUPONS = '.echart-top-coupons';
  const $echartTopCoupons = document.querySelector(ECHART_TOP_COUPONS);

  if ($echartTopCoupons) {
    const userOptions = getData($echartTopCoupons, 'options');
    const chart = echarts.init($echartTopCoupons);

    const getDefaultOptions = () => ({
      color: [
        getColor('primary'),
        getColor('primary-200'),
        getColor('info-500')
      ],

      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: getColor('gray-100'),
        borderColor: getColor('gray-300'),
        textStyle: { color: getColor('dark') },
        borderWidth: 1,
        transitionDuration: 0,
        formatter: params => {
          return `<strong>${params.data.name}:</strong> ${params.percent}%`;
        }
      },
      legend: { show: false },
      series: [
        {
          name: '72%',
          type: 'pie',
          radius: ['100%', '87%'],
          avoidLabelOverlap: false,
          emphasis: {
            scale: false,
            itemStyle: {
              color: 'inherit'
            }
          },
          itemStyle: {
            borderWidth: 2,
            borderColor: getColor('white')
          },
          label: {
            show: true,
            position: 'center',
            formatter: '{a}',
            fontSize: 23,
            color: getColor('dark')
          },
          data: [
            { value: 7200000, name: 'Percentage discount' },
            { value: 1800000, name: 'Fixed card discount' },
            { value: 1000000, name: 'Fixed product discount' }
          ]
        }
      ],
      grid: { containLabel: true }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    resize(() => {
      chart.resize();
    });
  }
};

export default topCouponsChartInit;
