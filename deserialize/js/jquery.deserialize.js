;(function ($,window,document,undefined) {
    var Deserialize = function(str){
        this.options = str;
        this.deserialize = function(){
            var str_arr = this.options.split("&");
            var str_object = {};
            for(var i in str_arr){
                var each_value = str_arr[i].split("=");
                str_object[each_value[0]] = each_value[1];
            }
            return str_object;
        }
    };
    $.deSerialize = function(str){
        var deserializeFun = new Deserialize(str);
        return deserializeFun.deserialize();
    }
})(jQuery,window,document);