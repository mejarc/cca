var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

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
  './css/print.css'])
             .pipe(concat('all.css'))
             .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function() {
  return gulp.src(['./js/**/*.js', '!./js/main.js', './js/main.js'])
              .pipe(concat('all.js'))
              .pipe(uglify())
              .pipe(rename({ suffix: '.min' }))
              .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', gulp.series('css', 'js'));