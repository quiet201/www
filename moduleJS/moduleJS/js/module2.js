define(function(require, exports, module) {


    var a = require('./module3.js').a
    console.log(require('./module3.js'))
    function show() {
        console.log(a)
    }
    exports.show = show
})


