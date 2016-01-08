'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    del         = require('del'),
    jshint      = require('gulp-jshint'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('styles', function () {
    var sassOptions = {
        defaultEncoding: 'UTF-8',
        lineNumbers: true,
        style: 'expanded',
        precision: 8
    };
    gulp.src('src/assets/scss/main.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gulp.dest('dist/'));
});

gulp.task('assets', function () {
    return gulp.src('bower_components/salesforce-lightning-design-system/assets/**/*')
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('clean', function (cb) {
    del(['dist'], cb);
});

gulp.task('build', ['html', 'assets', 'styles']);

gulp.task('default', ['build']);

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function () {

    browserSync({
        server: "./dist"
    });

    gulp.watch("src/**/*.html", ['html']);
    gulp.watch("src/scss/**/*.scss", ['styles']);

    gulp.watch("dist/**/*.html").on('change', reload);
    gulp.watch("dist/*").on('change', reload);
    gulp.watch("dist/styles/*").on('change', reload);
});