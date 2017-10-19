/**
 * Created by fengyang on 2017/10/18.
 */
//处理任务
var gulp = require("gulp");//引入gulp
var imagemin = require("gulp-imagemin");
var sass = require('gulp-sass');
var uglify = require('gulp-sass');

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


//复制文件
gulp.task("copyHtml",function(){
    gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

//图片压缩
gulp.task("imageMin",function(){
   gulp.src("src/iamges/test.jpg")
       .pipe(imagemin())
       .pipe(gulp.dest("dist/images"));
});
//js压缩
gulp.task("minify",function(){
    gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
})

//sass转换
/*gulp.task("")*/
