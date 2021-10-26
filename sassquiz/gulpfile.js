
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    //rename = require('gulp-rename');
 sass = require('gulp-sass');


gulp.task('styles', function(){
  gulp.src(['css/src/*.sass'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(gulp.dest(''))
});


gulp.task('default', function(){
  gulp.watch("css/src/*.sass", ['styles']);
});