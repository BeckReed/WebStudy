/**
 * Created by Beck on 2017/3/16.
 */

console.log('ddd');
/*requirejs(['../lib/requirejs/require-config'],function(){

});*/

;require.config({
    baseUrl:'/WebStudy/js',
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery-test-NoExist","/WebStudy/lib/jquery/jquery-1.11.3.min"],
        //"a" : "/WebStudy/js/a"
    },
    //非AMD模块加载配置
    shim:{
        "underscore":{
            exports:"_"
        },
        "jquery.form":{
            deps:["jquery"]
        }
        /*
         可以简写：
         "jquery.form":["jquery"]
         * */
    }
})

define(['jquery'],function($){
    console.log($);

    alert('requirejs是AMD形式的按需加载Js功能，目前这个alert并不会阻挡页面加载');


    console.log('ljlsdjflsjdlfjs');
    console.log('ljlsdjflsjdlfjs');


});

