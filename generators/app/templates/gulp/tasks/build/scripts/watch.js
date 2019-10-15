const gulp = require('gulp');

gulp.task('scripts:watch', () =>
    gulp.watch(['src/**/*.(js|vue|css|sass|scss)'], gulp.series('scripts'))
);
