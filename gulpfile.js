var gulp=require('gulp');
var webserver=require('gulp-webserver');
var fs=require('fs');
var path=require('path');

gulp.task('webserver',function() {
    gulp.src('./')
        .pipe(webserver({
            host:'localhost',
            port:8080,
            open:true
        }))
})
gulp.task('server',function() {
    gulp.src('./')
        .pipe(webserver({
            host:'localhost',
            port:8090,
            middleware: function (req, res, next) {
                if (req.url === "/data") {
                    res.writeHead(200,{
                        "content-type":"text/json;charset=utf8",
                        "Access-Control-Allow-Origin": "*"
                    })
                    res.end(fs.readFileSync(path.join(__dirname,"APP/data/data.json")));
                }else{
                    next();
                }
            }
        }))
})
gulp.task('default',['webserver','server']);