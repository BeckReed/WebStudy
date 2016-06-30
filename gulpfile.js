/**
 * Created by Beck on 2016/6/30.
 */

//引入gulp
var gulp=require('gulp');

//引入组件
var jshint=require('gulp-jshint');
var sass=require('gulp-sass');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');

//检查脚本
gulp.task('lint',function(){
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//编译Sass
gulp.task('sass',function(){
    gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'));
});

//合并，压缩文件
gulp.task('scripts',function(){
    gulp.src('js/lib/*.js')
        .pipe(concat('all-lib.js'))
        .pipe(gulp.dest('build/js/'))
        .pipe(rename('all-lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'));
});


//默认任务
gulp.task('default',function(){
    gulp.run('lint','sass','scripts');

    //监听文件变化
    gulp.watch('js/*.js',function(){
        gulp.run('lint','sass','scripts');
    });
});










