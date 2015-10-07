var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');


gulp.task('deploy', function() {
  return gulp
  .src(['./pubsub.js'])
  .pipe(babel())
  .pipe(uglify({mangle: false}))
  .pipe(gulp.dest('dist'));
});
