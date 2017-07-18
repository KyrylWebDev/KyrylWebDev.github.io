const gulp = require('gulp');
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const uglify = require('gulp-uglifyjs');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('css/*.sass')
        .pipe(debug({title: 'src'}))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('css/build'))
        .pipe(debug({title: 'dest'}));
})

gulp.task('js', function() {
    return gulp.src('js/*.js')
        .pipe(debug({ title: 'src' }))
        .pipe(uglify('script.min.js'))
        .pipe(gulp.dest('js/build'))
        .pipe(debug({ title: 'dest' }))
})

gulp.task('browser-sync', function () {
    browserSync.init(['css/build/style.css', 'js/build/script.min.js', 'index.html'], {
        server: {
            baseDir: './'
        }
    });
})

gulp.task('default', ['sass', 'js', 'browser-sync'], function() {
    gulp.watch('css/*.sass', ['sass']);
    gulp.watch('js/*.js', ['js']);
});
