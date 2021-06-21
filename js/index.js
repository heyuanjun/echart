// 立即执行函数
(function () {
  // querySelector() 方法仅仅返回匹配指定选择器的第一个元素。
  // 如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。
  let myChart = echarts.init(document.querySelector('.bar .chart'))
  let option = {
    color: [
      '#2f89cf'
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '4%',
      top: '10px',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度相关样式
        axisLabel: {
          color: 'rgba(255, 255, 255, .6)',
          fontSize: '12',
        },
        // 不显示 x 轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };

  myChart.setOption(option)
})();
