var gulp = require('gulp');
var browserify = require('gulp-browserify');
var gulpCopy = require('gulp-copy');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
const image = require('gulp-image');


var sourceJsFiles = [ 'src/js/plugins/intlTelInput.min.js','src/js/plugins/utils.js'  ];
var destinationJs = './public/js';

var sourceCssFiles = [ 'src/css/intlTelInput.css','src/css/bootstrap.css' ];
var destinationCss =  './public/css';

gulp.task('sass', function () {
    return gulp.src('src/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {

    gulp.src('src/js/main.js')
        .pipe(browserify({
            //insertGlobals : true,
            //debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./public/js'));
});
gulp.task('image', function () {
    gulp.src('./src/img/*')
        .pipe(image({
            svgo: true
        }))
        .pipe(gulp.dest('./public/img'));
});

gulp.task('copyjs', function () {
    return gulp
        .src(sourceJsFiles)
        .pipe(gulp.dest(destinationJs));
});

gulp.task('copycss', function () {
    return gulp
        .src(sourceCssFiles)
        .pipe(gulp.dest(destinationCss));
});


gulp.task('server',['sass'], function () {
    browserSync.init({
        port: 4000,
        server: {
            baseDir: './'
        }
    });

    gulp.watch("src/sass/**/*.scss", ['sass']);
    gulp.watch("src/js/**/*.js", ['scripts']);
    gulp.watch("index.html").on('change', browserSync.reload);

});
gulp.task('default', ['scripts', 'copycss','copyjs','server']); //'image',