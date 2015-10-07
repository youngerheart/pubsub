var gulp = require('gulp');
var browserify = require('gulp-browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');


gulp.task('deploy', function() {
  return gulp
  .src(['./pubsub.js'])
  .pipe(browserify({
    transform: [babelify]
  }))
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});
