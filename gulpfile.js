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
    return gulp.src('src/app/**/*.html')
        .pipe(gulp.dest('dist'));
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
    return gulp.src('node_modules/@salesforce-ux/design-system/assets/**/*')
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('icon-fonts', function () {
    return gulp.src('src/assets/icon-fonts/**/*')
        .pipe(gulp.dest('dist/assets/icon-fonts'));
});

gulp.task('scripts', function () {
    return gulp.src([
            'node_modules/angular/angular.min.js',
            'src/app/app.js',
            'src/app/components/icon-font/icon-font.directive.js',
            'src/app/components/icon-font/icon-font.service.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/dev'));
});

gulp.task('clean', function (cb) {
    del(['dist'], cb);
});

gulp.task('build', ['html', 'assets', 'icon-fonts', 'styles', 'scripts']);

gulp.task('default', ['build']);

// Static Server + watching scss/html files
gulp.task('serve', ['styles', 'scripts'], function () {

    browserSync({
        server: "./dist"
    });

    gulp.watch("src/**/*.html", ['html']);
    gulp.watch("src/assets/scss/**/*.scss", ['styles']);
    gulp.watch("src/app/**/*.js", ['scripts']);

    gulp.watch("dist/**/*.html").on('change', reload);
    gulp.watch("dist/*").on('change', reload);
    gulp.watch("dist/assets/styles/*").on('change', reload);
    gulp.watch("dist/app.js").on('change', reload);
});