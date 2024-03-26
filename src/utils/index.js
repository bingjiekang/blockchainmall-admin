export function localGet (key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}

export function localSet (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove (key) {
  window.localStorage.removeItem(key)
}

// 判断内容是否含有表情字符，现有数据库不支持。
export function hasEmoji (str = '') {
  const reg = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
  return str.match(reg) && str.match(reg).length
}

// 将时间2021-11-25T15:02:10+08:00转为 2021-11-25 15:02:10 
export function timeTransfer(time){
  if (time == null || time == "") {
    return "";
  }
  return new Date(+new Date(time) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, " ")
    .replace(/\.[\d]{3}Z/, "");
}

// 整理哈希显示位
export function hideMiddleString(str) {
  const hid = 59; // 需要隐藏的截止位(保留前六后5)
  const start = str.substring(0, 11); // 保留前11位
  const end = str.substring(hid,str.length); // 保留后5位
  const hidden = '*'.repeat(11); // 中间用11位*代替
  return start + hidden + end;
}

// 单张图片上传
export const uploadImgServer = 'http://localhost:8080/manage-api/v1/upload/file'
// 多张图片上传
export const uploadImgsServer = 'http://localhost:8080/manage-api/v1/upload/files'

export const pathMap = {
  login: '登录',
  introduce: '系统介绍',
  dashboard: '大盘数据',
  add: '添加商品',
  swiper: '轮播图配置',
  hot: '热销商品配置',
  new: '新品上线配置',
  recommend: '为你推荐配置',
  category: '分类管理',
  level2: '分类二级管理',
  level3: '分类三级管理',
  good: '商品管理',
  guest: '会员管理',
  order: '订单管理',
  order_detail: '订单详情',
  account: '修改账户'
}