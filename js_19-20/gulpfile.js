'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs');
const watch = require('gulp-watch');
const spritesmith = require('gulp.spritesmith');

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

gulp.task('sprite', function () {
  var spriteData = gulp.src('img/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('img/sprite/'));
});

gulp.task('watch', function() {
    return gulp.src(['css/style.scss'])
        .pipe(watch('css/style.scss'))
        .pipe(debug({title: 'src'}))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('css/build'))
        .pipe(debug({title: 'dest'}))
    // return gulp.src([ 'js/script.js'])
    //     .pipe(watch('js/script.js'))
    //     .pipe(debug({ title: 'src' }))
    //     .pipe(uglify('production.min.js'))
    //     .pipe(gulp.dest('js/build'))
    //     .pipe(debug({ title: 'dest' }))
});

gulp.task('default', ['js', 'watch']);
