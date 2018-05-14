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
                <Slider v-model="lamda1" :step="0.1" :min="0.1" :max="8" @on-change="computeChartsOptions" show-input></Slider>
            </Col>
        </Row>
        <Row>
            <Col span="2" offset="2">lamda2 =
            </Col>
            <Col span="12">
                <Slider v-model="lamda2" :step="0.1" :min="lamda1" :max="10" @on-change="computeChartsOptions" show-input></Slider>
            </Col>
        </Row>
        <Row>
            <Button type="info" @click="computeChartsOptions">绘制</Button>
        </Row>
        <Row>
            <Col span="14" offset="2">
                <Charts :options="options"></Charts>
            </Col>
        </Row>
    </div>
</template>
<script>
    import sample from '../constant/sample.js';
    import Charts from './charts.vue';
    import maer from '../utils/maer.js';
    import defaultOptions from '../constant/echarts_default_options.js';

    export default {
        components: {
            Charts
        },
        data() {
            return {
                prices: sample.join(','),
                lamda1: 1.5,
                lamda2: 3,
                options: defaultOptions
            }
        },
        methods: {
            computeChartsOptions() {
                const prices = this.prices.split(',').map(item => parseFloat(item));
                const result = maer(prices, this.lamda1 / 100, this.lamda2 / 100);

                this.options = {
                    xAxis: {
                        type: 'category',

                    },
                    yAxis: [{
                        type: 'value',
                        name: '出价',
                        min: 0.9 * Math.min.apply(Math, prices),
                        max: 1.1 * Math.max.apply(Math, prices)
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
                                yAxis: result.pv
                            }]
                        },
                        data: result.sortPrice,
                    }, {
                        name: '得分',
                        type: 'line',
                        yAxisIndex: 1,
                        data: result.scores
                    }]
                }
            }
        },
        computed: {

        }
    };
</script>