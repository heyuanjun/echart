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
      // 刻度标签位置（true 包含刻度文字）
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
        data: [702, 350, 610, 793, 664],
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

// 折线图1
(function () {
  // 模拟后台请求数据
  const yearData = [
    {
      year: '2020',  // 年份
      data: [  // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: '2021',  // 年份
      data: [  // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];

  let myChart = echarts.init(document.querySelector('.line .chart'))
  let option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle: {
        color: '#4c9bfd'
      },
      // 调整图例组件定位
      right: '10%',
      // 如果 series 里面有 name，那么不用写这里的 data
      // data: ['新增粉丝', '新增游客']
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      // 包含刻度文字
      containLabel: true,
      // 显示网格边框
      show: true,
      borderColor: '#012f4a'
    },
    xAxis: {
      type: 'category',
      // 去除轴内间距（也就是每一条折线紧贴 y 轴，false 就是无缝隙，紧贴）
      boundaryGap: false,
      axisTick: {
        // 去除刻度
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      axisLine: {
        // 去除 x 轴的线，使用 y 轴的分割线
        show: false
      },
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      axisLine: {
        // 去除 y 轴的线
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      },
    },
    series: [
      {
        name: '新增粉丝',
        data: yearData[0].data[0],
        type: 'line',
        // 折线修饰为圆滑
        smooth: true,
      },
      {
        name: '新增游客',
        data: yearData[0].data[1],
        type: 'line',
        // 折线修饰为圆滑
        smooth: true,
      }
    ]
  };

  myChart.setOption(option)

  window.addEventListener('resize', function () {
    myChart.resize()
  })

  $('.line h2').on('click', 'a', function () {
    // 获取对应年份的 data 数据
    let indexData = yearData[$(this).index()]
    console.log(indexData)
    // 循环赋值
    indexData.data.forEach((v, k) => {
      option.series[k].data = v;
    })
    // 重新渲染
    myChart.setOption(option);
  })
})();

// 折线图2
(function () {
  let myChart = echarts.init(document.querySelector('.line2 .chart'))
  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
      data: ['邮件营销', '联盟广告']
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"]
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {show: false},
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        emphasis: {
          focus: 'series'
        },
        // 折线修饰为圆滑
        smooth: true,
        // 单独修改线的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // 填充区域
        areaStyle: {
          // 渐变色，只需要复制即可
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框（如果是柱状图就是修改柱子的颜色等）
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
      },
      {
        name: '联盟广告',
        type: 'line',
        emphasis: {
          focus: 'series'
        },
        smooth: true,
        // 折线修饰为圆滑
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
      },
    ]
  };
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();

// 饼状图1
(function () {
  let myChart = echarts.init(document.querySelector('.pie .chart'))
  let option = {
    color: [
      "#065aab",
      "#066eab",
      "#0682ab",
      "#0696ab",
      "#06a0ab",
    ],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      // 距离底部为0%
      bottom: "0%",
      // 小图标的宽度和高度
      itemWidth: 8,
      itemHeight: 8,
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "9"
      }
    },
    // - 修改水平居中 垂直居中
    // - 修改内圆半径和外圆半径为    ["40%", "60%"]
    // pink老师友情提示，带有直角坐标系的比如折线图柱状图是 grid修改图形大小，
    // 而我们饼形图是通过 radius 修改大小
    series: [
      {
        name: "年龄分布",
        type: "pie",
        // 设置饼形图在容器中的位置
        center: ["50%", "40%"],
        //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
        radius: ["40%", "60%"],
        // 图形中间的文字
        label: {show: false},
        // 连接图形和文字的线
        labelLine: {show: false},
        data: [
          {value: 1, name: "0岁以下"},
          {value: 4, name: "20-29岁"},
          {value: 2, name: "30-39岁"},
          {value: 2, name: "40-49岁"},
          {value: 1, name: "50岁以上"}
        ],
      }
    ]
  };

  myChart.setOption(option)

  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();

// 饼状图2
(function () {
  let myChart = echarts.init(document.querySelector('.pie2 .chart'))
  let option = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      // 距离底部为0%
      bottom: "0%",
      // 小图标的宽度和高度
      itemWidth: 8,
      itemHeight: 8,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "9"
      }
    },
    series: [
      {
        name: '地区分部',
        type: 'pie',
        radius: [10, 70],
        center: ['50%', '40%'],
        // 'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。
        // 'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5
        },
        // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
        label: {
          fontSize: 10
        },
        // 连接图形和文字的线
        labelLine: {
          // 连接扇形图线长
          length: 6,
          // 连接文字线长
          length2: 8
        },
        data: [
          {value: 20, name: '云南'},
          {value: 26, name: '北京'},
          {value: 24, name: '山东'},
          {value: 25, name: '河北'},
          {value: 20, name: '江苏'},
          {value: 25, name: '浙江'},
          {value: 30, name: '四川'},
          {value: 42, name: '湖北'}
        ]
      }
    ]
  };

  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();
