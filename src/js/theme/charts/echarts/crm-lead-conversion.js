import { echartSetOption, tooltipFormatter } from './echarts-utils';

// dayjs.extend(advancedFormat);

/* -------------------------------------------------------------------------- */
/*                             Echarts Total Sales                            */
/* -------------------------------------------------------------------------- */

const echartsLeadConversiontInit = () => {
  const { getColor, getData, getPastDates, resize } = window.phoenix.utils;
  const $leadConversionChartEl = document.querySelector(
    '.echart-lead-conversion'
  );

  const dates = getPastDates(4);
  const data = [];

  const tooltipFormatter = params => {
    let tooltipItem = ``;
    params.forEach((el, index) => {
      tooltipItem += `<h6 class="fs--1 text-700 mb-0"><span class="fas fa-circle me-2" style="color:${el.color}"></span>
      ${el.axisValue} : ${el.value}
    </h6>`;
    });
    return `<div class='ms-1'>
              ${tooltipItem}
            </div>`;
  };

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
        inverse: true,
        axisLabel: {
          show: false
        },
        show: false,
        data: dates,
        axisLine: {
          lineStyle: {
            color: getColor('gray-300')
          }
        },
        axisTick: false
      },
      yAxis: {
        data: ['Closed Won', 'Objection', 'Offer', 'Qualify Lead', 'Created'],
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
          align: 'left',
          margin: 100,
          color: getColor('gray-900')
        }
      },
      series: {
        name: 'Lead Conversion',
        type: 'bar',
        barWidth: '20px',
        showBackground: true,
        data: [
          {
            value: 1060,
            itemStyle: {
              color: getColor('success-200'),
              borderRadius: [4, 0, 0, 4]
            },
            emphasis: {
              itemStyle: {
                color: getColor('success-300')
              },
              label: {
                formatter: val => `{b| 53% }`,
                rich: {
                  b: {
                    color: getColor('white')
                  }
                }
              }
            },
            label: {
              show: true,
              position: 'inside',
              formatter: val => `{b| 53%}`,
              rich: {
                b: {
                  color: getColor('success-600'),
                  fontWeight: 500,
                  padding: [0, 5, 0, 0]
                }
              }
            }
          },
          {
            value: 1200,
            itemStyle: {
              color: getColor('info-200'),
              borderRadius: [4, 0, 0, 4]
            },
            emphasis: {
              itemStyle: {
                color: getColor('info-300')
              },
              label: {
                formatter: val => `{b| 60% }`,
                rich: {
                  b: {
                    color: getColor('white')
                  }
                }
              }
            },
            label: {
              show: true,
              position: 'inside',
              formatter: val => `{b| 60%}`,
              rich: {
                b: {
                  color: getColor('info-600'),
                  fontWeight: 500,
                  padding: [0, 5, 0, 0]
                }
              }
            }
          },
          {
            value: 1600,
            itemStyle: {
              color: getColor('primary-200'),
              borderRadius: [4, 0, 0, 4]
            },
            emphasis: {
              itemStyle: {
                color: getColor('primary-300')
              },
              label: {
                formatter: val => `{b| 80% }`,
                rich: {
                  b: {
                    color: getColor('white')
                  }
                }
              }
            },
            label: {
              show: true,
              position: 'inside',
              formatter: val => `{b| 80% }`,
              rich: {
                b: {
                  color: getColor('primary-600'),
                  fontWeight: 500,
                  padding: [0, 5, 0, 0]
                }
              }
            }
          },
          {
            value: 1800,
            itemStyle: {
              color: getColor('warning-200'),
              borderRadius: [4, 0, 0, 4]
            },
            emphasis: {
              itemStyle: {
                color: getColor('warning-300')
              },
              label: {
                formatter: val => `{b| 90% }`,
                rich: {
                  b: {
                    color: getColor('white')
                  }
                }
              }
            },
            label: {
              show: true,
              position: 'inside',
              formatter: val => `{b|90%}`,
              rich: {
                b: {
                  color: getColor('warning-600'),
                  fontWeight: 500,
                  padding: [0, 5, 0, 0]
                }
              }
            }
          },
          {
            value: 2000,
            itemStyle: {
              color: getColor('danger-200'),
              borderRadius: [4, 0, 0, 4]
            },
            emphasis: {
              itemStyle: {
                color: getColor('danger-300')
              },
              label: {
                formatter: val => `{a|${val.value}}`,
                rich: {
                  a: {
                    color: getColor('white')
                  }
                }
              }
            },
            label: {
              show: true,
              position: 'inside',
              formatter: val => `{a|${val.value}}`,
              rich: {
                a: {
                  color: getColor('danger-600'),
                  fontWeight: 500
                }
              }
            }
          }
        ],
        barGap: '50%'
      },
      grid: {
        right: 5,
        left: 100,
        bottom: 0,
        top: '5%',
        containLabel: false
      },
      animation: false
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    const toggleLabel = (show, left) => {
      chart.setOption({
        yAxis: {
          show
        },
        grid: {
          left
        }
      });
    };
    const handleResize = () => {
      if (window.innerWidth < 576) {
        toggleLabel(false, 0);
      } else {
        toggleLabel(true, 100);
      }
    };
    resize(e => {
      chart.resize();
      handleResize();
    });
    handleResize();
  }
};

export default echartsLeadConversiontInit;
