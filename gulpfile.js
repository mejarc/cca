var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  console.log('Default gulp task');
});

gulp.task('css', function() {
  return gulp.src(
  ['./css/normalize.css', 
  './css/main.css',
  './css/header.css',
  './css/nav.css',
  './css/footer.css',
  './css/home.css',
  './css/additional-content.css', 
  './css/banner.css',
  './css/print.css'])
             .pipe(sourcemaps.init())
             .pipe(concat('all.css'))
             .pipe(sourcemaps.write('.'))
             .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function() {
  return gulp.src(['./js/**/*.js', '!./js/main.js', './js/main.js'])
              .pipe(concat('all.js'))
              .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', gulp.series('css', 'js'));