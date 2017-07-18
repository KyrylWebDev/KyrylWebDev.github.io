const gulp = require('gulp');
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const cache = require('gulp-cache');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: ''
        },
        notify: false
    })
})

gulp.task('sass', function() {
    return gulp.src('css/*.sass')
        .pipe(debug({title: 'src'}))
        .pipe(sass({ outputStyle: 'nested' }))
        .pipe(gulp.dest('css/build'))
        .pipe(debug({title: 'dest'}))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('css/style.sass', ['sass']);
    gulp.watch('*.html', browserSync.reload);
})

// gulp.task('img', function () {
//     return gulp.src('img/**/*')
//         .pipe(cache(imagemin({
//             interlaced: true,
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         })))
//         .pipe(gulp.dest('img/build'));
// })

gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('default', ['watch']);
