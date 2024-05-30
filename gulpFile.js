const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const path = require('path');

gulp.task('minify-js', () => gulp.src('src/**/*.js') // Update this line if necessary
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(rename((filePath) => {
    // eslint-disable-next-line no-param-reassign
    filePath.dirname = path.join('dist', filePath.dirname);
    // eslint-disable-next-line no-param-reassign
    filePath.basename += '.min';
    // eslint-disable-next-line no-param-reassign
    filePath.extname = '.js';
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('.')));

gulp.task('default', gulp.series('minify-js'));
