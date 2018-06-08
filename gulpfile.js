/*
gulp,src('');
gulp.dest('');
.pipe
selections
image minify 
options for image minify 
other image minify plugins

*/
// minify()
// js/**/*.js

var gulp = require('gulp'),
    image = require('gulp-image');




gulp.task('img', function() {
   gulp.src('images/*')
   .pipe(image())
   .pipe(gulp.dest('images/min'));
});


gulp.task('default', ['img']);
// gulp.task('image', function() {

// });
// gulp.src('client/js/**/*.js', { base: 'client' })
//   .pipe(minify())
//   .pipe(gulp.dest('build'));  // Writes 'build/js/somedir/somefile.js'



