;(function($,window,document,undefined){
    var DelReapet = function(arr){
        this.options = arr;
        this.delReaptEle = function(){
            var newArr = [];
            var oldArr = this.options;
            for(var i = 0,j=oldArr.length; i<j; i++){
                if($.inArray(oldArr[i],newArr) == -1){
                    newArr.push(oldArr[i]);
                }
            }
            return newArr;
        }
    };
    Array.prototype.delReapetEle = function () {//两种不同的调用方式
        return new DelReapet(this).delReaptEle();
    };
    $.delReapetEle = function(str){//两种不同的调用方式
        return new DelReapet(str).delReaptEle();
    }
})(jQuery,window,document);