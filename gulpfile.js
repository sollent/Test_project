var gulp = require('gulp'), // Подключили пакет Gulp
		sass = require('gulp-sass'), // Подключили sass пакет
		browserSync = require('browser-sync'); // Подключили Browser Sync

gulp.task('sass', function(){
	return gulp.src('app/sass/style.sass') // Берем источник sass файла
		.pipe(sass()) // Преобразуем sass в css посредством gulp-sass
		.pipe(gulp.dest('app/css')) // Выгружаем результат в папку app/css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при зменении
});

gulp.task('browser-sync', function(){
	browserSync({ // Выполняем browser Sync
		server: { // Определяем параметры сервера
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'sass'], function(){
	gulp.watch('app/sass/**/*.sass', ['sass']) // Наблюдение за sass файлами
});