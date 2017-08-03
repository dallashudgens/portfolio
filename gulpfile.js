const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const sassDir = 'client-src/scss/**/*.scss';
const publicDir = '';

gulp.task('sass', function () {
  return gulp.src(sassDir)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(publicDir + 'css'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
  return gulp.watch(sassDir, ['sass']);
});


gulp.task('browser-sync', function () {

  browserSync.init({
    server: {
            baseDir: publicDir
        }
  });
});


gulp.task('build', ['sass']);
gulp.task('watch', ['sass:watch']);
gulp.task('default', ['browser-sync', 'build', 'watch']);
