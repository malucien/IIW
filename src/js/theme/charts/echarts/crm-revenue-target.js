import { echartSetOption, tooltipFormatter } from './echarts-utils';

// dayjs.extend(advancedFormat);

/* -------------------------------------------------------------------------- */
/*                             Echarts Total Sales                            */
/* -------------------------------------------------------------------------- */

const echartsRevenueTargetInit = () => {
  const { getColor, getData, getPastDates, resize } = window.phoenix.utils;
  const $leadConversionChartEl = document.querySelector(
    '.echart-revenue-target-conversion'
  );

  // const datta1 = getData(4);

  const data1 = [42000, 35000, 35000, 40000];
  const data2 = [30644, 33644, 28644, 38644];

  if ($leadConversionChartEl) {
    const userOptions = getData($leadConversionChartEl, 'echarts');
    const chart = echarts.init($leadConversionChartEl);

    const getDefaultOptions = () => ({
      color: [getColor('primary'), getColor('gray-300')],
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        backgroundColor: getColor('gray-100'),
        borderColor: getColor('gray-300'),
        textStyle: { color: getColor('dark') },
        borderWidth: 1,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        },
        formatter: params => tooltipFormatter(params)
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          interval: 3,
          showMinLabel: true,
          showMaxLabel: false,
          color: getColor('gray-500'),
          align: 'left',
          fontFamily: 'Nunito Sans',
          fontWeight: 400,
          fontSize: 12.8,
          margin: 10,
          formatter: value => `${value / 1000}k`
        },
        show: true,
        axisLine: {
          lineStyle: {
            color: getColor('gray-300')
          }
        },
        axisTick: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
        data: ['Luxemburg', 'Canada', 'Australia', 'India'],
        type: 'category',
        axisPointer: { type: 'none' },
        axisTick: 'none',
        splitLine: {
          interval: 5,
          lineStyle: {
            color: getColor('gray-200')
          }
        },
        axisLine: { show: false },
        axisLabel: {
          show: true,
          margin: 21,
          color: getColor('gray-900')
        }
      },
      series: [
        {
          name: 'Target',
          type: 'bar',
          label: {
            show: true,
            position: ['105%', '25%'],
            color: getColor('gray-700'),
            fontWeight: 400,
            fontFamily: 'Nunito Sans',
            fontSize: 12.8,
            formatter: value => `Target: $${value.value.toLocaleString()}`
          },
          emphasis: {
            disabled: true
          },
          showBackground: true,
          backgroundStyle: {
            color: getColor('gray-100')
          },
          barWidth: '30px',
          barGap: '-100%',
          data: data1,
          itemStyle: {
            borderWidth: 4,
            color: getColor('gray-200'),
            borderColor: getColor('gray-200')
          }
        },
        {
          name: 'Gained',
          type: 'bar',
          emphasis: {
            disabled: true
          },
          label: {
            show: true,
            color: getColor('white'),
            fontWeight: 700,
            fontFamily: 'Nunito Sans',
            fontSize: 12.8,
            formatter: value => `$${value.value.toLocaleString()}`
          },
          // showBackground: true,
          backgroundStyle: {
            color: getColor('gray-100')
          },
          barWidth: '30px',
          data: data2,
          itemStyle: {
            borderWidth: 4,
            color: getColor('primary-300'),
            borderColor: getColor('gray-200')
          }
        }
      ],
      grid: {
        right: 0,
        left: 0,
        bottom: 8,
        top: 0,
        containLabel: true
      },
      animation: false
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
    const toggleLabel = show => {
      chart.setOption({
        series: {
          label: {
            show
          }
        }
      });
    };
    const handleResize = () => {
      if (window.innerWidth < 576) {
        toggleLabel(false);
      } else {
        toggleLabel(true);
      }
    };
    resize(e => {
      chart.resize();
      handleResize();
    });
    handleResize();
  }
};

export default echartsRevenueTargetInit;
