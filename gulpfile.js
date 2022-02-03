// const gulp = require('gulp');
const {
  src,
  dest,
  series
} = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');

const clean = () => {
  return del('./dist')
};

const autopreCss = () => (
  src('src/style.css')
    .pipe(autoprefixer({
      cascade: false,
      grid: true,
      overrideBrowserslist: ["last 5 versions"]
    }))
    .pipe(dest('./dist'))
);

const transfer = () => {
  return src(['src/*.html', 'src/normalize.css'])
    .pipe(dest('./dist'));
};

exports.default = series(clean, autopreCss, transfer);

exports.clean = clean;