const gulp = require('gulp');
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const uglify = require('gulp-uglifyjs');
const watch = require('gulp-watch');


gulp.task('sass', function() {
    return gulp.src('css/*.scss')
        .pipe(debug({title: 'src'}))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('css/build'))
        .pipe(debug({title: 'dest'}));
})

gulp.task('js', function() {
    return gulp.src('js/*.js')
        .pipe(debug({ title: 'src' }))
        .pipe(uglify('production.min.js'))
        .pipe(gulp.dest('js/build'))
        .pipe(debug({ title: 'dest' }))
})

gulp.task('watch', function() {
    return gulp.src(['css/main.scss'])
        .pipe(watch('css/main.scss'))
        .pipe(debug({title: 'src'}))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('css/build'))
        .pipe(debug({title: 'dest'}))
});
