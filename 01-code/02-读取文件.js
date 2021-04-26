// node中的js是有文件操作的能力

// fs 是file-system的缩写  就是文件系统的意思
// 在node中想要进行文件操作，就要引入fs核心模块，fs提供了所有文件操作相关api
// fs.readFile就是读取文件的

var fs = require("fs")

// 读取文件
    // 第一个参数是文件路径，第二个参数是回调函数，回调函数两个参数
    //     error 如果读取失败就是错误对象，如果读取成功就是null
    //data
fs.readFile("./data/hello.txt",function(error,data){
    console.log(data.toString())
})