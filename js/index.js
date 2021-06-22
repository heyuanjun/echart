// 立即执行函数 (柱状图1)
(function () {
  // querySelector() 方法仅仅返回匹配指定选择器的第一个元素。
  // 如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。
  let myChart = echarts.init(document.querySelector('.bar .chart'))
  let option = {
    // 配置柱子颜色，也可在 itemStyle 里面进行配置
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
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ["旅游", "教育", "游戏", "医疗", "电商", "社交", "金融"],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签相关样式
        axisLabel: {
          color: 'rgba(255, 255, 255, .6)',
          fontSize: '12',
        },
        // 不显示 x 轴的样式
        axisLine: {
          show: false
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        // 修改刻度标签相关样式
        axisLabel: {
          color: 'rgba(255, 255, 255, .6)',
          fontSize: '12',
        },
        // y 轴的线条样式（刻度旁边的竖条）
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, .1)',
          }
        },
        // y 轴每条分割线的样式
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, .1)',
          }
        }
      },
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        // 柱子宽度
        barWidth: '35%',
        itemStyle: {
          // 每条柱子边角弧度
          barBorderRadius: 5
        },
        data: [200, 300, 300, 900, 1500, 1200, 600]
      }
    ]
  };

  myChart.setOption(option)

  // 让图表监听屏幕变化进行适配
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();

// 柱状图2
(function () {
  // 1.实例化对象
  let myChart = echarts.init(document.querySelector('.bar2 .chart'))
  // 定义颜色
  let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"]
  // 2.指定配置和数据
  let option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%',
      // 刻度标签位置（因为 left 定义很大，所以不需要考虑刻度标签位置）
      // containLabel: true,
    },
    xAxis: {
      show: false,
    },
    // y 轴两组数据
    yAxis: [
      {
        type: 'category',
        // 是否是反向坐标轴（不设置数据会倒置）
        inverse: true,
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        // y 轴的竖线
        axisLine: {
          show: false
        },
        // 左侧平行线突出的部分
        axisTick: {
          show: false
        },
        // 修改 y 轴的刻度标签（就是 y 轴的文字部分）
        axisLabel: {
          color: '#fff'
        }
      },
      // 第二组显示在右侧
      {
        show: true,
        // 是否是反向坐标轴（不设置数据会倒置）
        inverse: true,
        data:[702, 350, 610, 793, 664],
        // y 轴的竖线
        axisLine: {
          show: false
        },
        // 左侧平行线突出的部分
        axisTick: {
          show: false
        },
        // 修改 y 轴的刻度标签（就是 y 轴的文字部分）
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    // 两个柱状图合成一个的
    series: [
      // 处理第一个柱状图（柱状）
      {
        name: '柱',
        type: 'bar',
        // 类似 z-index
        yAxisIndex: 0,
        data: [70, 34, 60, 78, 69],
        // 修改圆角
        itemStyle: {
          barBorderRadius: 3,
          // 设置柱子颜色 (params 就是循环的柱子对象)
          color: function (params) {
            // 取索引
            return myColor[params['dataIndex']]
          }
        },
        // 柱子宽度
        barWidth: 10,
        // 同一系列柱子之间的距离
        barCategoryGap: 50,
        // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
        label: {
          show: true,
          // 显示在里面
          position: 'inside',
          // 显示的内容（data 里面的数据）
          formatter: '{c}%'
        }
      },
      // 处理第二个柱状图（框状）
      {
        name: '框',
        type: 'bar',
        // 柱子宽度
        barWidth: 15,
        // 类似 z-index
        yAxisIndex: 1,
        // 同一系列柱子之间的距离
        barCategoryGap: 50,
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 15,
        },
        data: [100, 100, 100, 100, 100],
      }
    ]
  };
  // 3.将配置导入实例化对象
  myChart.setOption(option)

  // 适配大小
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();
