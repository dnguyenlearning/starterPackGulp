const gulp = require('gulp');
const imagemin=require('gulp-imagemin');
const uglify=require('gulp-uglify');
const sass=require('gulp-sass');
const concat =require('gulp-concat');


//gulp.task - defined tasks
//gulp.src - Poin to files to use
//gulp.dest - points to folder to output
//gulp.watch - watch files and folders for changes

gulp.task('message', ()=>{
    return console.log('Gulp is running....');
})

//copy files
gulp.task('copyHtml',()=>{
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
})

//imagesMin

gulp.task('imageMin',()=>{
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
})

//uglify

// gulp.task('minify', ()=>{
//     gulp.src('src/js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'));
// })


// compile sass
gulp.task('sass',()=>{
    gulp.src('src/sass/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('dist/css'))
})

//scripts
gulp.task('scripts', ()=>{
    gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


gulp.task('default',['message','copyHtml','imageMin','sass','scripts']);

gulp.task('watch', ()=>{
    gulp.watch('src/js/*.js', ['script']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copyHtml']);
})