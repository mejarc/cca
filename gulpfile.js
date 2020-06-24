var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  console.log('Default gulp task');
});

gulp.task('css', function() {
  return gulp.src(
  ['./css/normalize.css', 
  './css/main.css',
  './css/header.css',
  './css/footer.css',
  './css/home.css',
  './css/additional-content.css', 
  './css/print.css'])
             .pipe(concat('all.css'))
             .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', gulp.series('css'));