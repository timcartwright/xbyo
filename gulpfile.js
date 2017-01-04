var gulp = require('gulp');
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify'); 
var cleanCSS = require('gulp-clean-css');

var dest = 'dist';

// script paths
var jsSources = [
    'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js',
    'js/vendor/jquery-1.11.2.min.js',
    'js/vendor/bootstrap.min.js',
    'js/plugins.js',
    'js/main.js',
    'js/vendor/jquery.mousewheel.min.js',
    'js/lightgallery.min.js',
    'js/lg-thumbnail.js',
    'js/lg-fullscreen.min.js'
];

// css paths
var cssSources = [
    'css/bootstrap.min.css',
    'css/lightbox.css',
    'css/lightgallery.css',
    'css/main.css',
    'css/responsive.css'
];
    
// concat and uglify js
gulp.task('scripts', function() {  
    return gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(dest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
});

// concat and minify css
gulp.task('styles', function() {
    return gulp.src(cssSources)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(dest))
        .pipe(rename('styles.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(dest));
});

// watch for changes
gulp.task('watch', function() {
    gulp.watch(jsSources, ['scripts']);
    gulp.watch(cssSources, ['styles']);
});

// default gulp task
gulp.task('default', ['scripts', 'styles', 'watch']);
