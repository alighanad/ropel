var gulp = require("gulp"),
    gutil = require("gulp-util"),
    cleancss = require('gulp-cleancss'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    imageop = require('gulp-image-optimization'),
    connect = require('gulp-connect');

/// css minify
    gulp.task('css', function () {
      gulp.src('build/Development/css/*.css')
      .pipe(cleancss())
      .pipe(gulp.dest('build/Production/css/'))

    });
/// js
gulp.task('js', function () {
  gulp.src('build/Development/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/Production/js/'))

});
/// minify HTML
gulp.task('html', function() {
  return gulp.src('build/Development/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build/Production/'))
});
///  font
gulp.task('font', function() {
      gulp.src('build/Development/font/*.*')
        .pipe(gulp.dest('build/Production/font/'))
});
/// images
gulp.task('images', function () {
	return gulp.src('build/Development/images/*.*')
  .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
  }))
  .pipe(gulp.dest('build/Production/images'))
});



/// defult
gulp.task('default',['css','html','js','images'] ,function () {
  connect.server({
    root: 'build/Production',
    liveload: true
  });
})
