/**
 * Created by fengyang on 2017/10/18.
 */
//处理任务
var gulp = require("gulp");//引入gulp
var imagemin = require("gulp-imagemin");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");

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

//复制文件
gulp.task("copyHtml",function(){
    gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

//图片压缩
gulp.task("imageMin",function(){
    gulp.src('src/images/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: false, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/images'));
});
//js压缩
gulp.task("minify",function(){
    gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});

//sass转换
gulp.task("sass",function () {
    gulp.src("src/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
});
//代码合并
gulp.task("scripts",function () {
     gulp.src("src/js/*.js")
         .pipe(concat("main.js"))
         .pipe(uglify())
         .pipe(gulp.dest("dist/js"))
});
//任务监听
gulp.task("watch",function () {
    //watch方法监听文件("文件"，"任务名")
    gulp.watch("src/js/*.js",["scripts"]);
    gulp.watch("src/sass/*.scss",["sass"]);
    gulp.watch("src/*.html",["copyHtml"]);
    gulp.watch("src/images/*",["imageMin"]);
});

//定义默认的任务
/*gulp.task("default", function () {
    return console.log("gulp 默认的任务执行");   // gulp
});*/

//定义默认的任务  不使用回调函数
gulp.task("default", ["message","copyHtml","imageMin","minify","sass","scripts"]);

