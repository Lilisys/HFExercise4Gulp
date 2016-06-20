var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
//static server
gulp.task('syncAll', ['sass'], function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("css/*.scss", ['sass']);
	gulp.watch('index.html').on('change', browserSync.reload);
}); 

gulp.task('sass', function(){
	console.log("hello");
	return gulp.src('css/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'))
	.pipe(browserSync.stream());
});

gulp.task('default', ['syncAll']);


