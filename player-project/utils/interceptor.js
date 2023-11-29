// 拦截器
function responseInterceptor(response) {
  // 对响应进行处理
  // 例如修改响应数据、添加额外的处理逻辑等
  return response;
}

module.exports = {
  responseInterceptor: responseInterceptor
}