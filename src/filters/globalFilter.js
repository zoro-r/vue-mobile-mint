import Vue from 'vue'
import codeData from '../assets/data/CodeData'
import addressData from '../assets/data/addressData' //地址码表Json

let allMap = {};
for (var key in codeData) {
  if (!allMap[key]) allMap[key] = {};
  for (var key_ in codeData[key]) {
    allMap[key][
      codeData[key][key_].code
    ] = codeData[key][key_].desc;
  }
}

/**
 * 全局公共过滤器 使用:{{'0' |commonFilter('relationFilter') }}
 * value 值
 * type 类型 对应码表(codeData)中的参数
 * default1 默认值
 */
Vue.filter('commonFilter', (value, type, default1) => {
  return allMap[type][value] || default1 || '没有配置值'
});

//时间戳过滤
Vue.filter('dateFilter', (value) => {
  let tempDate = new Date(value)
  let tempMonth = (tempDate.getMonth() + 1) < 10 ? '0' + (tempDate.getMonth() + 1) : (tempDate.getMonth() + 1);
  let tempDay = tempDate.getDate() < 10 ? '0' + tempDate.getDate() : tempDate.getDate();
  let tempHours = tempDate.getHours() < 10 ? '0' + tempDate.getHours() : tempDate.getHours();
  let tempMinutes = tempDate.getMinutes() < 10 ? '0' + tempDate.getMinutes() : tempDate.getMinutes();
  let tempSeconds = tempDate.getSeconds() < 10 ? '0' + tempDate.getSeconds() : tempDate.getSeconds();
  return tempDate.getFullYear() + '-' + tempMonth + '-' + tempDay + ' ' + tempHours + ':' + tempMinutes + ':' + tempSeconds;
});

//地址过滤
Vue.filter('addressFilter',(value) => {
  return addressData[value] || '没有配置项'
})

//关系过滤器
// 0	本人
// 31	父母
// 32	子女
// 33	配偶
// Vue.filter('relationFilter', (value) => {
//   return allMap['relationCode'][value]
// });
// 证件类型
// Vue.filter('certTypeFilter', (value) => {
//   return allMap['certCode'][value]
// });
//缴费方式
// Vue.filter('yearFilter', (value) => {
//   return allMap['typeCode'][value]
// });
//订单状态
// Vue.filter('orderStatusFilter', (value) => {
//   return allMap['orderCode'][value]
// })