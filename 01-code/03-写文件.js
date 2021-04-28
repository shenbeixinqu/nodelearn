var fs = require("fs")

fs.writeFile("./data/你好.md","hello大家好,我是node.js", function(error){
    console.log("写入文件成功")
})