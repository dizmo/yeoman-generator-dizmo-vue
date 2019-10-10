const gulp = require('gulp');

gulp.task('scripts:watch', () =>
    gulp.watch(['src/**/*.(js|vue)'], gulp.series('scripts'))
);
