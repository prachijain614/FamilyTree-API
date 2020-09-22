const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const webp = require("imagemin-webp");
const extReplace = require("gulp-ext-replace");
const apidoc = require('gulp-apidoc');

gulp.task("exportWebP", function() {
  let src = "src/img/**/*.png"; // Where your PNGs are coming from.
  let dest = "src/img/"; // Where your WebPs are going.

  return gulp.src(src)
    .pipe(imagemin([
      webp({
        quality: 75
      })
    ]))
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest(dest));
});

gulp.task('apidoc', function(done){
          apidoc({
            src: "server/",
            dest: "server/v1/docs/"
          },done);
});

gulp.task('apidoc-build', function(done){
          apidoc({
            src: "server/",
            dest: "build-server/v1/docs/"
          },done);
});

gulp.task('default', gulp.series(['apidoc-build','apidoc', 'exportWebP']));
