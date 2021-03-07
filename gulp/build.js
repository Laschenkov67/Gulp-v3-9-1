var gulp            = require('gulp');
var runSequence     = require('run-sequence');
var del             = require('del');


gulp.task('clear', function() {
    return del(['dist/'])
})

gulp.task('build',['clear'], function() {
    runSequence(
        'sass',
        'html', 
        'js',
        'fonts',
        'img:watch',
        'libs'
    );
  });