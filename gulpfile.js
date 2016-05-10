var gulp = require("gulp"),
    del = require("del"),
    runSeq = require("run-sequence"),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require("gulp-typescript") ;
    
var tsProject = tsc.createProject('tsconfig.json');
    
gulp.task('tsc-w', function () {
    gulp.watch('app/**/*.ts', ['compile'])
});
    
gulp.task('compile', function(){
  return gulp.src(['app/**/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProject))
    .pipe(sourcemaps.write('.', {
           sourceRoot: function(file){ return file.cwd + '/src'; }
      }))
    .pipe(gulp.dest('app/'))
});
    
    