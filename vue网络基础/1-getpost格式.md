axios.get(接口地址?需要传递的参数).then(function(response){},function(err){})
axios.get(接口地址?key=value&key2=value2).then(function(response){},function(err){})
axios.get("接口地址?key=value&key2=value2").then(function(response){},function(err){})
需要传递的参数，可以不写。
key是规定的格式，value是要传递的参数，查询字符串
第一个回调函数，在请求成功后触发，形参用来获取信息，服务器响应的内容
第二个回调函数，在请求失败时触发

axios.post(接口地址，对象参数).then(function(response){},function(err){})
axios.post(接口地址，{key:value&key2:value2}).then(function(response){},function(err){})



axios先导入包，才能使用
使用get或post方法可以发送请求
then方法中的回调函数会在请求成功或失败时触发
回调函数的形参可以获取响应内容，或错误信息