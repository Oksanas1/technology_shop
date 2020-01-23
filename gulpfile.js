var gulp = require('gulp');
var sass = require('gulp-sass');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var runTimestamp = Math.round(Date.now()/1000);
 
var fontName = 'icons';


gulp.task('scss', async function () {
    return gulp.src('scss/**/*.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.series('scss'))
});

 
gulp.task('iconfont', async function () {
   gulp.src(['img/svg/*.svg'])
   .pipe(iconfontCss({
      fontName: fontName,
      path: 'scss/utils/_icons.scss',
      targetPath: '../../scss/utils/_icons-list.scss',
      fontPath: '../fonts/icons/',
      centerHorizontally: true
   }))
   .pipe(iconfont({
      fontName: fontName,
      formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
      fontHeight: 1001,
      prependUnicode: true,
      normalize: true,
      timestamp: runTimestamp
   }))
   .pipe(gulp.dest('fonts/icons/'));
});

