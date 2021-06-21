```css
option = {
    // 设置颜色
    color: [
        'pink', 'black', 'green', 'skyblue', 'red'
    ],
    // 设置标题
    title: {
        text: '折线图堆叠333'
    },
    // 图表的提示框组件
    tooltip: {
        // 触发方式
        trigger: 'axis'
    },
    // 上方的图例组件
    legend: {
        // 和 series 里面的 name 二选一
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    // 网格配置，可以控制 线性图，柱状图的 图表大小
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        // 左侧刻度标签
        containLabel: true
    },
    // 工具箱组件，可以另存为图片等功能（右上角）
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    // x 轴的相关配置
    xAxis: {
        // 表示 x 轴的类型为类目（周一 周二...）
        type: 'category',
        // 和坐标轴之间是否有缝隙
        boundaryGap: true,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    // y 轴的相关配置
    yAxis: {
        // 表示 y 轴的值为刻度（500 1000 1500...）
        type: 'value'
    },
    // 系列图表配置，它决定着显示哪种类型的图表
    series: [
        {
            name: '邮件营销',
            type: 'line',
            // 图表是否堆叠，会将 data 的值对应想加，使其不会叠加
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
```
