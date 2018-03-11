# Rise_Refactor
 <p align="center"><a href="http://www.swu-rise.net.cn/" target="_blank">
   <img width="100" src="http://www.swu-rise.net.cn/images/logo.png" alt="Vue logo"></a></p>
 
 ## require
 * :tiger: node > 8.0 && npm > 5.0 
 ## tools
 * :revolving_hearts: vue.js
 * :boom: scss
 * :running: elementUi
 * :person_frowning: vue-router
 * :smiley_cat: Bootstrap
 * :heartpulse: webpack
 
 ## feature
 * :smile: 组件化
 * :sunny: 现在可以使用缓存了
 * :rocket: 个人信息列表页面懒加载
 * :chicken: 删除了一些无用的样式
 * :sparkles: 公共样式统一管理
 * :fire: 增加了api请求时的loading效果
 * :muscle: 现在可以把过长的标题隐藏
 * :punch: api请求统一管理
 * :dancers: 文章模板增加了一种点击标题直接跳转到另外一个页面的功能，需要后端配合
 
 ## start
 * :wink: install
  ```
  npm install
 ```
 * :collision: start
 ```
 npm run serve
 ```
 * :mask: build
 
 ```
 npm run build
 ```
 
 ## package
 * :pensive: 线上打包的文件在dist文件夹下，现在可以点击上面的logo进行访问了
 * :cry: 现在仍然无法实现项目的持续集成，已经加到toDoList上了
 
 ## toDoList
 * 项目持续集成，准备另开一个项目
 * Api 进一步规范化，减少前端不必要的封装
 * <del>Conference页面的api暂时短缺</del>
 * <del>文章列表增加type字段，表明当前跳转属于哪一种方式</del>
 * 剔除所有的Bootstrap样式
 * 返回顶部按钮
 * <del>使用 graphql 重写api</del>,具体内容访问这个Rep=><strong><a href="https://github.com/xiaoSais/Graphql_RISE">GraqpQL for Rise</a></strong>
 * 修改出现的一些小bug
 * 解决vue-router的hash模式导致地址出现'#',history模式又不能通过网址直接访问页面的问题
