// Настройка окружения (Это чисто для себя):
//     gulp:               npm install --save-dev gulp
//     gulp-autoprefixer:  npm install --save-dev gulp-autoprefixer
//     gulp-minify-css:    npm install --save-dev gulp-minify-css
//     browser-sync:       npm install --save-dev browser-sync
//     gulp-imagemin:      npm install --save-dev gulp-imagemin
//     imagemin-pngquant:  npm install --save-dev imagemin-pngquant
//     gulp-spritesmith:   npm install --save-dev gmsmith gulp-spritesmith my-engine-smith@latest
//     npm install --save-dev isotope-packery
//     gulp-uglify:        npm install --save-dev gulp-uglify
//     gulp-sass:          npm install --save-dev gulp-sass
//     gulp-sourcemaps:    npm install --save-dev gulp-sourcemaps
//     gulp-rigger:        npm install --save-dev gulp-rigger
//     gulp-watch:         npm install --save-dev gulp-watch
//     gulp-babel-core:    npm install --save-dev babel-core
//     gulp-babel-preset:  npm install --save-dev babel-preset-es2015
//     gulp-babel:         npm install --save-dev gulp-babel
//                         npm install --save-dev gulp-concat
// Или все и сразу: npm install --save-dev gulp gulp-autoprefixer gulp-minify-css browser-sync gulp-imagemin imagemin-pngquant gulp-uglify gulp-sass gulp-sourcemaps gulp-rigger gulp-watch gulp-babel babel-core babel-preset-es2015

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    spritesmith = require('gulp-spritesmith'),
    imagemin = require('gulp-imagemin'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    concat = require("gulp-concat"),
    babel = require("gulp-babel"),
    reload = browserSync.reload;

var path = {
    dist: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/script.js',//В стилях и скриптах нам понадобятся только main файлы
        libs: 'src/js/libs/*.js',
        style: 'src/style/main.scss',
        stylelibs: 'src/style/libs/*.*',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        libs: 'src/js/libs/*.js',
        style: 'src/style/**/*.*',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './dist'
};

var config = {
    server: {
        baseDir: "./dist"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Shevchuk Alex"
};

gulp.task('html:build', function () {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.dist.html)) //Выплюнем их в папку dist
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});
gulp.task('js:build', function () {
    gulp.src(path.src.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        // .pipe(babel())
        // .pipe(sourcemaps.init()) //Инициализируем sourcemap
        // .pipe(uglify()) //Сожмем наш js
        // .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.dist.js)) //Выплюнем готовый файл в dist
        .pipe(reload({stream: true})); //И перезагрузим сервер
    gulp.src(path.src.libs)
        .pipe(concat('libs.min.js'))
        .pipe(rigger())
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.dist.js)) //Выплюнем готовый файл в dist
        .pipe(reload({stream: true})); //И перезагрузим сервер
});
gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
        // .pipe(concat('style.css'))
        // .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        // .pipe(cssmin()) //Сожмем
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.css)) //И в dist
        .pipe(reload({stream: true}));
    gulp.src(path.src.stylelibs)
        .pipe(concat('css-libs.min.css'))
        .pipe(sourcemaps.init()) //То же самое что и с js
        // .pipe(sass()) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.css)) //И в dist
        .pipe(reload({stream: true}));
});
gulp.task('image:build', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe(gulp.dest(path.dist.img)) //И бросим в dist
        .pipe(reload({stream: true}));
});
gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.dist.fonts))
});

// gulp.task('sprite', function () {
//   var spriteData = gulp.src('src/img/icon/*.png')
//     .pipe(spritesmith({
//       imgName: 'sprite1.png',
//       cssName: 'sprite1.scss',
//       algorithm: 'top-down'
//     }));
//   spriteData.img.pipe(gulp.dest('src/img/'));
//   spriteData.css.pipe(gulp.dest('src/style/'));
// });

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);
gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});


gulp.task('default', ['build', 'webserver', 'watch']); //финальный таск
