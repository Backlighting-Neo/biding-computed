<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
<template>
    <div class="index">
        <Row>
            <Col span="2" offset="2">
                报价列表
            </Col>
            <Col span="12">
                <Input v-model="prices" type="textarea" :rows="4" placeholder="在这里输入Pi"></Input>
            </Col>
        </Row>
        <Row>
            <Col span="2" offset="2">lamda1 =
            </Col>
            <Col span="12">
                <Slider v-model="lamda1" :step="0.1" :min="0.1" :max="8" show-input></Slider>
            </Col>
        </Row>
        <Row>
            <Col span="2" offset="2">lamda2 =
            </Col>
            <Col span="12">
                <Slider v-model="lamda2" :step="0.1" :min="lamda1" :max="10" show-input></Slider>
            </Col>
        </Row>
        <Row>
            <Col span="14" offset="2">
                <Charts :options="chartsOptions"></Charts>
            </Col>
        </Row>
    </div>
</template>
<script>
    import sample from '../constant/sample.js';
    import Charts from './charts.vue';

    export default {
        components: {
            Charts
        },
        data() {
            return {
                prices: sample.join(','),
                lamda1: 1.5,
                lamda2: 3,
                chartsOptions: {
                    xAxis: {
                        type: 'category',

                    },
                    yAxis: [{
                        type: 'value',
                        name: '出价',
                        min: 4000000,
                        max: 9000000
                    },
                    {
                        type: 'value',
                        name: '得分',
                        min: 50,
                        max: 100
                    }],

                    series: [{
                        name: '出价',
                        type: 'line',
                        markLine: {
                            silent: true,
                            data: [{
                                yAxis: 5820498
                            }]
                        },
                        data: [8090799.61,7735086.12,7725558.5,7699112.5,7617973.15,7500116.53,7296730.52,6880716.5,6612580,6508509.3,6499056,6487694.55,6443565.65,6357448.7,6180441.35,6179472.75,6029472.75,6026244.5,5860390.5,5477839,5253640,5219117,4997849.5,4491940.5,4267319.5],
                    }, {
                        name: '得分',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [73.99648457987836,78.07074614585316,78.17987334252263,78.4827798231674,79.41213151908755,80.76203449061022,83.09157167965517,87.8565018277715,90.92767643063799,92.11967860394351,92.22795455620394,92.35808602540615,92.8635284285569,93.84989242494056,95.87729443041427,95.88838855493792,97.6064545042957,97.64343014696914,99.54308421340104,98.03762887321366,96.75366664728011,96.55595734471451,95.28878348654943,92.39150006530394,91.1051210932683]
                    }]
                }
            }
        },
        methods: {
        },
        computed: {
            sortedPrices() {
                return this.prices.split(',').sort((a,b)=>a-b);
            }
        },
        mounted() {
            // this.$set(this.chartsOptions.series[0], 'data', this.sortedPrices);
        }
    };
</script>