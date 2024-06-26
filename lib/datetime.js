


Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


global['curDate']=curDate
function  curDate()
{
    return new Date().Format("yyyy-MM-dd");
}


//console.log(addDay(15))

global['addDay']=addDay
function  addDay(num)
{

    var timestamp=new Date().getTime();

    var newtmstmp_milliseconds=timestamp+3600*24*15*1000;

    var temp= new Date(newtmstmp_milliseconds);

    return temp.Format("yyyy-MM-dd");

}