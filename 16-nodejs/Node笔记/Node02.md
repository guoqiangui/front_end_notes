# Node 第二天

## 通过express框架书写api
### 什么是api
前后端分离：前端通过ajax请求数据  

通过api接口实现数据的请求  

前端：1.写界面 2.请求数据 3.数据处理  
后端：写api接口  

登录接口逻辑分析
1. 接收用户传递的数据
2. 处理数据
3. 返回数据

### express 基本使用
1. 安装express
```bash
npm install express --save
```
> 模块（第三方）的引用，从当前目录的node_modules依次向上寻找，找到为止

### 服务器相关
服务器：1.服务器就是一台电脑 2.需要一个服务器软件（apache、tomcat、iis、ngnix、node） 3.服务器ip和端口号  
局域网：服务器通过网线（无线也行），每一个电脑都会有一个ip  
外网：  
ip：确定服务器主机的位置  
port：确定服务器里某一个程序  

### api 接口的构成要素
* ip
* port
* pathname
* method   get post
* 接收用户传递数据

### postman 接口测试工具
主要解决测试post，因为测试post要写网页，比较麻烦，用postman可以直接模拟post

### 案例1：利用express模拟接口
express不能直接解析请求体内容，需要额外的工具`body-parser`  
用post传输数据（传参）一般的格式：1.通过表单传：`application/x-www-form-urlencoded` 2.通过json传：`application/json`
+ 接收数据
    - get   req.query
    - post  req.body 需要`body-parser`插件进行解析
        + 注意数据格式  json    x-www-form-urlencoded formdata

### express的路由
为了避免将所有接口都写在一个js文件中，显得很臃肿，可以利用路由来将接口进行分类，比如与用户相关的接口可以写在同一个路由文件中

### token
为了避免别人偷偷调用接口，要求前端每次请求接口的时候都要附加一个token参数，是加密过的一个字符串，具体可以上网查；后端检查是否有这个token。

### express的中间件 middlewear
+ 内置中间件 static
+ 自定义中间件（全局 局部）
+ 第三方中间件（body-parser）（拦截器）  
中间件相当于一个拦截器；中间件使用，一定要注意next

### 静态资源目录 static
内置中间件static  
指定一个目录，这个目录可以被访问，相当于apache下的`WWW`文件夹


## 非关系型数据库（文档）mongodb
### 安装
1. 下载
2. 安装 
    + 最后一个对号不选，倒数第二个也不选
    + 缺少数据库文件    需创建`c:/data/db`文件夹
    + 控制台输入`mongod`
    + 上一个cmd不关，再开一个，输入`mongo`

### 指令
mongodb     数据库名  
mongod      命令行启动数据库命令  
mongo       命令行操作数据库指令  
mongoose    node操作数据库的插件  
