var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var babel = require('gulp-babel');

var paths = {
  sass: ['./scss/**/*.scss'],
  controllers: ['./src/controllers/*.js'],
  models: ['./src/models/*.js'],
  directives: ['./src/directives/*.js']
};

gulp.task('default', ['sass', 'controllers', 'models', 'directives']);

gulp.task('controllers', function(done) {
  gulp.src(paths.controllers)
    .pipe(babel())
    .pipe(concat("controllers.js"))
    .pipe(gulp.dest("./www/js/"))
    .on('end', done)
});
gulp.task('models', function(done) {
  gulp.src(paths.models)
    .pipe(babel())
    .pipe(concat("models.js"))
    .pipe(gulp.dest("./www/js/"))
    .on('end', done)
});
gulp.task('directives', function(done) {
  gulp.src(paths.directives)
    .pipe(babel())
    .pipe(concat("directives.js"))
    .pipe(gulp.dest("./www/js/"))
    .on('end', done)
});

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.controllers, ['controllers']);
  gulp.watch(paths.models, ['models']);
  gulp.watch(paths.directives, ['directives']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
