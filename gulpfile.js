var gulp = require('gulp'),
  electron = require('gulp-atom-electron'),
  symdest = require('gulp-symdest'),
  del = require('del'),
  runSeq = require('run-sequence');

gulp.task('clean', function(){
    return del('dist/frontend/**/*', {force:true});
});

gulp.task('copy:vendor', function(){
    return gulp.src([
            "node_modules/es6-shim/es6-shim.min.js",
            "node_modules/zone.js/dist/zone.js",
            "node_modules/reflect-metadata/Reflect.js",
            "node_modules/systemjs/dist/system.src.js",
            "node_modules/rxjs/rx.js"
        ])
        .pipe(gulp.dest('./dist/frontend/scripts/vendor'))
}) ;

gulp.task('copy:angular', function(){
  return gulp.src([
    'node_modules/@angular/**/*'

  ], {base : "node_modules/@angular"})
  .pipe(gulp.dest('./dist/frontend/scripts/vendor/@angular'))
}) ;

// gulp.task('copy:html-css', function(){
//   return gulp.src([
//     './src/frontend/app/**/*.html',
//     './src/frontend/app/**/*.css'
//   ])
//       .pipe(gulp.dest('./dist/frontend/app'))
// })

gulp.task('copy:index', function(){
    return gulp.src('./src/frontend/index.html')
        .pipe(gulp.dest('./dist/frontend'));
});

gulp.task('copy:systemjs-config', function(){
  return gulp.src('./src/frontend/systemjs.config.js')
    .pipe(gulp.dest('./dist/frontend')) ;
})

gulp.task('frontend', function(done){
    return runSeq('clean', ['copy:vendor', 'copy:angular', 'copy:index', 'copy:systemjs-config', ], done);
})
