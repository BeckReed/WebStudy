/**
 * Created by Beck on 2016/6/29.
 */

require.config({
    paths:{
        "jquery":["http://localhost:84123/t1.js","../js/lib/jquery-1.11.3.min"],
        "test1":"../js/test1"
    }
});

require(["jquery","test1"],function(){

});

/*
//哪个在前哪个先加载
require(["../js/test1","../js/test2"],function(){

});*/
