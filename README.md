# gulp   
`不检查node_modules 可以在setting/editor/file types里面忽略掉`  
`描述：web构建工具`

---用于前后端代码管理的工具  
---基于node.js和npm的构建工具  
---用于处理耗时及重复的任务  
---可以解决上万种任务`  

## 一、搭建环境
 #### 1.执行命令
  ```bash
     npm init    初始化package.json  
     npm install gulp -g   全局安装gulp
     npm install gulp --save-dev  本地安装和保存  
     创建一个gulpfile.js文件名称一定要写对  
  
     npm install gulp-uglify --save-dev //js压缩  
     cnpm install gulp-sass --save-dev  //sass转换   
     cnpm install gulp-imagemin --save-dev  //图片压缩  
     npm install gulp-concat --save-dev  //代码合并  
  
     ---删除node_modules执行命令：  
         npm install rimraf -g  
         rimraf node_modules  
  
  ```  
 
*** 
#### 2.主要功能：代码压缩、代码合并、图片压缩、sass转换  
_ _ _
#### 3.工作原理：主要使用pipe()来输入和输出  

---
## 二、处理任务
```javascript
/*
   * gulp常用的方法
   *
   * gulp.task() ---用于定义任务的方法
   *
   * gulp.src() ---用于引入文件
   *
   * gulp.dest()  --执行任务的去处
   *
   * gulp.watch()   --观察文件发生的变化
   *
   * */
//定义任务
gulp.task("message",function(){
   return console.log("Gulp is running"); // 执行如下命令  gulp message
});
//定义默认的任务
gulp.task("default", function () {
    return console.log("gulp 默认的任务执行");   // gulp
});

//执行多个任务
gulp.task("default", ["message","copyHtml","imageMin","minify","sass"]);

```
   


