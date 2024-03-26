<template>
  <el-card class="introduce">
    <div class="order">
      <el-card class="order-item">
        <template #header>
          <div class="card-header">
            <span>区块搜索</span>
          </div>
        </template>
        <div class="item-data">
          <div class="item">
            <el-input
            style="width: 200px; margin-right: 10px"
            placeholder="请输入区块编号"
            v-model="state.checkBlockChain"
            @change="handleOption"
            clearable>
            </el-input>
          </div>
        </div>
      </el-card>
      <el-card class="order-item">
        <template #header>
          <div class="card-header">
            <span>商家标识</span>
          </div>
        </template>
        <!-- <div class="item-data"> -->
          <div class="item" >{{ state.uUid }}</div>
        <!-- </div> -->
      </el-card>
      <el-card class="order-item">
        <template #header>
          <div class="card-header">
            <span>初始区块哈希</span>
          </div>
        </template>
        <!-- <div class="item-data"> -->
          <div class="item">{{ state.initBlockChain }}</div>
        <!-- </div> -->
      </el-card>
      <el-card class="order-item">
        <template #header>
          <div class="card-header">
            <span>当前区块哈希</span>
          </div>
        </template>
        <!-- <div class="item-data"> -->
          <div class="item">{{ state.currBlockChain }}</div>
        <!-- </div> -->
      </el-card>
    </div>
    <div id="zoom"></div>
  </el-card>
</template>

<script setup>
import { onMounted, onUnmounted, reactive } from 'vue'
import axios from '@/utils/axios'

let myChart = null


const state = reactive({
  loading: false,
  checkBlockChain:'',
  multipleSelection: [], // 选中项
  uUid:'', // 商家uid
  initBlockChain:'', // 初始区块哈希
  currBlockChain:'',// 当前区块哈希
})
// 获取列表方法
const getBlockChainInfo = () => {
  state.loading = true
  axios.get('/getblockchain', {
    params: {
      checkBlockChain: state.checkBlockChain
    }
  }).then(res => {
    state.uUid = res.uUid
    state.initBlockChain = res.initBlockChain
    state.currBlockChain = res.currBlockChain
    state.loading = false
  })
}

// 触发过滤项方法
const handleOption = () => {
  getBlockChainInfo()
}
// checkbox 选择项
const handleSelectionChange = (val) => {
  state.multipleSelection = val
}

onMounted(() => {
  if (window.echarts) {
    // 基于准备好的dom，初始化echarts实例
    myChart = window.echarts.init(document.getElementById('zoom'))

    // 指定图表的配置项和数据
    const option = {
      title: {
        text: '系统折线图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['新增注册', '付费用户', '活跃用户', '订单数', '当日总收入']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2024-03-11', '2024-03-12', '2024-03-13', '2024-03-14', '2024-03-15', '2024-03-16', '2024-03-17']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '新增注册',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '付费用户',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '活跃用户',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '订单数',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '当日总收入',
          type: 'line',
          stack: '总量',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  } 
})
onUnmounted(() => {
  myChart.dispose()
})
</script>

<style scoped>
  .introduce .order {
    display: flex;
    margin-bottom: 50px;
  }
  .introduce .order .order-item {
    flex: 1;
    margin-right: 20px;
  }
  .introduce .order .order-item:last-child{
    margin-right: 0;
  }
  .card-header{
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
  }
  .item-data {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
  }
  .item{
    word-wrap: break-word; /* 允许在单词内换行 */
    overflow-wrap: break-word; /* 对于兼容性更好的浏览器 */
  }
  #zoom {
    min-height: 300px;
  }
</style>