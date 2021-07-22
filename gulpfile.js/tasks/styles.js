const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

exports.build = () => (
	gulp.src('app/**/*.{css,scss}')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(postcss([
			require('autoprefixer'),
		]))
		.pipe(concat('main.css'))
		.pipe(cssnano({ zIndex: false }))
		.pipe(sourcemaps.write())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('build/styles'))
);
