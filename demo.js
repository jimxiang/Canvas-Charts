var demo1 = echarts.init(document.getElementById('demo1')),
    demo2 = echarts.init(document.getElementById('demo2')),
    demo3 = echarts.init(document.getElementById('demo3')),
    demo4 = echarts.init(document.getElementById('demo4'));

var data = [
     {name: '北京', value: 100},
     {name: '西安', value: 100},
     {name: '上海', value: 100},
     {name: '广州', value: 100}
];
var geoCoordMap = {
    '北京': [116.46, 39.92, '我的出轨指数这么高!'],
    "西安": [108.95, 34.27, '我的人脉打败了谁呢。'],
    '上海': [121.48, 31.22, '测下你的人脉吧。'],
    '广州': [113.23, 23.16, '原来我的人脉这么多高层人士啊。']
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    console.log(res);
    return res;
};

var option1 = {
    backgroundColor: '#404a59',
    title: {
        text: '人脉图谱',
        subtext: '',
        sublink: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['人脉'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        center: [126.97, 23.71],
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series : [
        {
            name: '人脉',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[3] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: false,
            label: {
                normal: {
                    formatter: function(params) {
                        return params.value[2];
                    },
                    position: [35, -3],
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};
demo1.setOption(option1);

var option2 = {
    title: {
        text: '人脉图谱',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right: true,
        bottom: true,
        data:['好友分布>=20%','好友分布>=5%','好友分布>=1%', '好友分布<1%']
    },
    visualMap: {
        type: 'continuous',
        max: 100,
        min: 0,
        left: 'left',
        top: 'bottom',
        text: ['高(百分比)','低(百分比)'],           // 文本，默认为数值文本
        calculable: true,
        color: ['#94DC71', '#35A79A', '#277B9E', '#13536F']
    },
    series: [
        {
            name: '好友分布>=20%',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#94DC71',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data:[
                {name: '上海',value: 99 }
            ]
        },
        {
            name: '好友分布>=5%',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#35A79A',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data:[
                {name: '辽宁',value: 60 },
                {name: '河南',value: 60 },
                {name: '江苏',value: 60 },
                {name: '浙江',value: 65 },
                {name: '福建',value: 63 },
                {name: '广东',value: 60 }
            ]
        },
        {
            name: '好友分布>=1%',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#277B9E',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data:[
                {name: '北京',value: 38 },
                {name: '天津',value: 37 },
                {name: '河北',value: 33 },
                {name: '山东',value: 31 },
                {name: '山西',value: 34 },
                {name: '陕西',value: 39 },
                {name: '四川',value: 36 },
                {name: '青海',value: 36 },
                {name: '重庆',value: 33 },
                {name: '贵州',value: 37 },
                {name: '广西',value: 37 },
                {name: '湖南',value: 38 },
                {name: '江西',value: 34 },
                {name: '湖北',value: 35 },
                {name: '安徽',value: 35 }
            ]
        },
        {
            name: '好友分布<1%',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#13536F',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data:[
                {name: '黑龙江',value: 0.3 },
                {name: '吉林',value: 0.6 },
                {name: '内蒙古',value: 0.7 },
                {name: '新疆',value: 0.8 },
                {name: '西藏',value: 0.9 },
                {name: '云南',value: 0.1 },
                {name: '海南',value: 0.4 },
                {name: '台湾',value: 0.4 },
                {name: '甘肃',value: 0.4 },
                {name: '宁夏',value: 0.4 }
            ]
        }
    ]
};
demo2.setOption(option2);

var option3 = {
    title: {
        text: '人脉图谱',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    calculable: true,
    series: [
        {
            name:'人脉',
            type:'funnel',
            left: '35%',
            top: 60,
            bottom: 60,
            width: 200,
            height: 150,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'ascending',
            gap: 5,
            label: {
                normal: {
                    show: true,
                    formatter: '{c}%\n{b}',
                    position: 'left'
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data: [
                {value: 13, name: '董事长/创始人'},
                {value: 34, name: '总监/经理'},
                {value: 53, name: '助理/专员执行人员'}
            ]
        }
    ]
};
// demo3.setOption(option3);

var option4 = {
    title: {
        text: '人脉图谱'
    },
    radar: [
        {
            indicator: [
                { text: '智商指数', max: 100 },
                { text: '出轨指数', max: 100 },
                { text: '抑郁指数', max: 100 },
                { text: '肥胖指数', max: 100 },
                { text: '多金指数', max: 100 },
                { text: '高管指数', max: 100 }
            ],
            center: ['50%', '50%'],
            radius: 120,
            startAngle: 90,
            splitNumber: 5,
            shape: 'rect',
            name: {
                formatter:'{value}',
                textStyle: {
                    color:'#72ACD1'
                }
            },
            splitArea: {
                areaStyle: {
                    opacity: 0
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)',
                    type: 'dotted'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)',
                    type: 'dotted'
                }
            }
        }
    ],
    series: [
        {
            name: '人脉综合指数',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [
                {
                    value: [80, 21, 40, 60, 60, 100],
                    name: '',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    }
                }
            ]
        }
    ]
}
// demo4.setOption(option4);