var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS   = require('gulp-minify-css');
var concat      = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();

gulp.task('styles', function () {
    return sass('./public/sass/main.scss')
      .pipe(autoprefixer({
           browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
           cascade:  true
       })) 
      .pipe(concat('main.css'))
      .pipe(minifyCSS({advanced: false}))
      .pipe(gulp.dest('./public/css/'))
      .pipe(browserSync.stream());
});

gulp.task('compress', function() {
  return gulp.src('./public/js/app.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/dist'));
});

gulp.task('scripts', function() {
    return browserify('./public/js/app.js')  
      .transform(reactify)
      .bundle()
      .pipe(source('app.min.js'))
      .pipe(gulp.dest('./public/js'))
      .pipe(browserSync.stream());
});

gulp.task('serve-and-watch', function () {

    // browserSync.init({
    //     proxy: "local.react-flux.com"
    // });

    gulp.watch(['./public/sass/**/*.scss', './public/sass/*.scss'], ['styles']);
    gulp.watch(['./public/js/*.js', './public/js/**/*.js', './public/js/**/*.jsx', '!./public/js/dist/*.jsx', '!./public/js/*.min.js', '!js/**/*.min.js'], ['scripts']);
    
});


gulp.task('build', ['styles', 'scripts', 'compress']);
gulp.task('default', ['styles', 'scripts', 'serve-and-watch']);