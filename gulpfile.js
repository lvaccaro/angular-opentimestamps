'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const uglifycss = require('gulp-uglifycss');
const include = require('gulp-include');
const addsrc = require('gulp-add-src');
const order = require('gulp-order');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babili = require('gulp-babili');
const connect = require('gulp-connect');
const clean = require('gulp-clean');
const exec = require('gulp-exec');
const browserify = require("browserify");
const babelify = require("babelify");
const source = require('vinyl-source-stream');
const runSequence = require('run-sequence');

gulp.task('clean', function () {
    return gulp.src('javascript-opentimestamps.*', {read: false})
        .pipe(clean({force: true}))
});

/*
gulp.task('compress', function() {
  gulp.src('angular-opentimestamps.js')
      .pipe(babili({
          mangle: {
              keepClassNames: true
          }
      }))
    .pipe(gulp.dest('assets/javascripts'))
});*/

gulp.task('index', function() {
    var options = {
        continueOnError: false, // default = false, true means don't emit error event
        pipeStdout: false, // default = false, true means stdout is written to file.contents
        customTemplatingThing: "test" // content passed to gutil.template()
    };
    var reportOptions = {
        err: true, // default = true, false means don't write err
        stderr: true, // default = true, false means don't write stderr
        stdout: true // default = true, false means don't write stdout
    };
    return gulp.src('./')
        .pipe(exec('./node_modules/browserify/bin/cmd.js  -r javascript-opentimestamps index.js -o javascript-opentimestamps.es6.js', options))
        .pipe(exec('./node_modules/babel-cli/bin/babel.js javascript-opentimestamps.es6.js -o javascript-opentimestamps.js', options))
        .pipe(exec.reporter(reportOptions));

    /*NOTE: babelify run babel with .babelrc file, but doesn't convert the code
    gulp.task('index', function() {
        return browserify({ debug: true, entries: [" angular-opentimestamps.es6.js"] })
            .transform(babelify)
            .bundle()
            .pipe(source(' angular-opentimestamps.js'))
            .pipe(gulp.dest('./'));
    });*/
});


gulp.task('default', function(done) {
    runSequence('clean', 'index', function(){
        done();
    });
});
