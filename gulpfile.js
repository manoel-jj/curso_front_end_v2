const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJavascripts() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(sourcemaps.init())
    .pipe(gulp.dest('./build/scripts'))

}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}


exports.default = function() {
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavascripts));
    gulp.watch('./source/styles/main.scss', { ignoreInitial: false }, gulp.series(compilaSass));

}












