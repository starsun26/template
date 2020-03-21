const gulp = require('gulp');
const clean = require('./tasks/clean');
const images = require('./tasks/images');
const icons = require('./tasks/icons');
const templates = require('./tasks/templates');
const scripts = require('./tasks/scripts');
const styles = require('./tasks/styles');
const server = require('./tasks/server');
const watch = require('./tasks/watch');
const fonts = require('./tasks/fonts');

gulp.task('scripts', scripts(false));
gulp.task('scripts:watch', scripts(true));
gulp.task('styles', styles.build);
gulp.task('lint', styles.lint);
gulp.task('clean', clean);
gulp.task('images', images);
gulp.task('icons', icons);
gulp.task('templates', templates);
gulp.task('server', server);
gulp.task('watch', watch);
gulp.task('fonts', fonts);

gulp.task('build', gulp.series('clean', 
	gulp.parallel('styles', 'lint', 'fonts', 'scripts', 'images', 'icons', 'templates'))
);

gulp.task('default', gulp.series('build', 
	gulp.parallel('watch','scripts:watch', 'server'))
);