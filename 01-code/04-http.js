var http = require("http")

var server = http.createServer()
// 注册request请求事件
// 当客户端请求过来，自动触发服务器的request请求，然后执行回调函数
server.on("request", function(){
    console.log("收到请求了");
})

// 绑定端口号，启动服务器
server.listen("3000", function(){
    console.log("服务器启动成功了");
})