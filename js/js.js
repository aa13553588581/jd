var obj1 = {
    debounce: function(fn, delay) {
        var timer = null;
        var count = 0;
        var _that = this;
        var _args = arguments;

        return function() {

            if (timer != null) { //前面有人领了任务
                clearTimeout(timer);
            }
            //重新分配一个新的延期的执行的任务
            timer = setTimeout(function() {
                //真正的执行实际的任务
                console.log(_that);
                console.log(_args);
                fn.apply(_that, _args); //执行回调函数，如果fn是某个对象的方法 ,this应该指向对象, arguments 是fn的参数
            }, delay)

            console.log("任务的发生次数:" + count++);
        }
    },
    setHtmlFontSize: function() {
        console.log('修改html的字体大小');
        var clientW = document.documentElement.offsetWidth;
        console.log(clientW);
        var fontSize = clientW / 375 * 100;
        document.documentElement.style.fontSize = fontSize + "px";
        console.log("实际执行的次数" + count++);
    }

}




var count = 0;


//window.onresize = setHtmlFontSize;
window.onresize = obj1.debounce(obj1.setHtmlFontSize, 300);