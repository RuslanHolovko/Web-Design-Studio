var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber');
var notify = require("gulp-notify");

// Static server
gulp.task('browser-sync' , ['autoprefix'] , function () {
    browserSync.init({
        server: {
            baseDir: "../parralax"
        }
    });

    gulp.watch("main.css", ['autoprefix']).on("change",browserSync.reload);
    gulp.watch(["js/main.js","index.html"]).on("change",browserSync.reload);
});


 
gulp.task('autoprefix', function () {
    gulp.src('main.css')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('../parralax/css/'))
});

// or...

// gulp.task('browser-sync', function () {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
// });

gulp.task('default', ['browser-sync']);