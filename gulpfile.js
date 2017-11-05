'use strict';

const gulp = require('gulp');
const mustache = require("gulp-mustache");
const fs = require('fs');

/**
 * default
 */
gulp.task('default', ['get-svg', 'build'], function () {

});

let list = [];
gulp.task('get-svg', function () {
  list = [];
  fs.readdirSync('svg').forEach(file => {
    let fileContent = encodeURIComponent(fs.readFileSync('svg/' + file, 'utf8'))
      .replace(/%0A/g, '') // remove newlines
      .replace(/%20/g, ' ') // put spaces back in
      .replace(/%3D/g, '=') // ditto equals signs
      .replace(/%3A/g, ':') // ditto colons
      .replace(/%2F/g, '/');

    // let fileBuffer = new Buffer(fileContent).toString('base64');
    list.push({
      className: 'svg2css-' + file.replace('.svg', ''),
      fileContent: fileContent
    });
  });
});


gulp.task('build', function () {
  gulp.src("tmpl/default.css")
    .pipe(mustache({list:list}))
    .pipe(gulp.dest("dist"));
  gulp.src("tmpl/index.html")
    .pipe(mustache({list:list}))
    .pipe(gulp.dest("dist"));
});


/**
 * watch
 */
gulp.task('watching', function () {

});