const gulp = require('gulp');
const Slideshow = require('slideshow');
const rename = require('gulp-rename');

gulp.task('default', function () {
    return gulp.src(['./src/slides/**/*.md', './src/scss/**/*.scss', './src/js/**/*.js'])
        .pipe(Slideshow.stream({
            title: 'Design mit System — JoomlaDay™ Deutschland 2019 am 13.9.2019 — Joschi Kuphal',
            author: 'Joschi Kuphal',
            description: 'Überlebenshandbuch für und mit Pattern Libraries',
            language: 'de',
            charset: 'UTF-8',
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
    gulp.watch([
        'src/slides/**/*.md',
        'src/scss/**/*.scss',
        'src/js/**/*.js',
    ], gulp.series('default'));
});
