var gulp = require('gulp');

gulp.task('default', function(){
	console.log("Is this the real life?");
});

//default is a dependency of this, will run that before running this
gulp.task('rhapsody', ['default'], function(){ 
	console.log("Is this just fantasy?");
});