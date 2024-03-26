<template>
  <el-card class="order-container">
    <div class="data">
      <el-card class="data-item" shadow="hover">
        <template #header>
          <div class="card-header">
            <span>订单状态</span>
          </div>
        </template>
        <div>
          {{ state.data.orderStatusString }}
        </div>
      </el-card>
      <el-card class="data-item" shadow="hover">
        <template #header>
          <div class="card-header">
            <span>创建时间</span>
          </div>
        </template>
        <div>
          {{ timeTransfer(state.data.createdAt) }}
        </div>
      </el-card>
      <el-card class="data-item" shadow="hover">
        <template #header>
          <div class="card-header">
            <span >订单号</span>
          </div>
        </template>
        <div @click="copy(state.data.orderNo)" style="cursor: pointer">
          {{ state.data.orderNo }}
        </div>
      </el-card>
    </div>
    <el-table
      :data="state.tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column
        label="商品图片"
      >
        <template #default="scope">
          <img style="width: 100px" :key="scope.row.goodsId" :src="$filters.prefix(scope.row.goodsCoverImg)" alt="商品主图">
        </template>
      </el-table-column>
      <el-table-column
        prop="goodsId"
        label="商品编号"
        width="130px"
      >
      </el-table-column>
      <el-table-column label="商品区块哈希" width="280px">
        <template #default="scope">
          <template  v-for="blockVal in scope.row.hashBlockChain" :key="blockVal" >
            <i @click="copy(blockVal)" style="cursor: pointer">
              {{ hideMiddleString(blockVal) }}<br>
            </i>
          </template>
        </template>
        
      </el-table-column>
      <el-table-column
        prop="goodsName"
        label="商品名"
        width="200px"
      ></el-table-column>
      <el-table-column
        prop="goodsCount"
        label="商品数量"
      >
      </el-table-column>
      <el-table-column
        prop="sellingPrice"
        label="价格"
      >
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import axios from '@/utils/axios'
import { timeTransfer, hideMiddleString } from '@/utils'
import clipboard3 from 'vue-clipboard3'
import { ElMessage } from 'element-plus'
// 复制哈希区块
const { toClipboard } = clipboard3()
const copy = async (text) => {
  try {
    await toClipboard(text);
    ElMessage.success('复制成功')
  } catch (error) {
    console.error(error);
  }
}
const route = useRoute()
const { id } = route.query
const state = reactive({
  data: {},
  tableData: []
})
onMounted(() => {
  axios.get(`/orders/${id}`).then(res => {
    console.log(res)
    state.data = res
    state.tableData = res.newBeeMallOrderItemVOS
  })
})
</script>

<style scoped>
  .data {
    display: flex;
    margin-bottom: 50px;
  }
  .data .data-item {
    flex: 1;
    margin: 0 10px;
  }
  .el-table {
    border: 1px solid #EBEEF5;
    border-bottom: none;
  }
  .has-gutter th {
    border-right: 1px solid #EBEEF5;
  }

  .has-gutter th:last-child {
    border-right: none;
  }
  .el-table__row td {
    border-right: 1px solid #EBEEF5;
  }
  .el-table__row td:last-child {
    border-right: none;
  }
</style>