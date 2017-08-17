/**
 * Created by 文朝希 on 2017/7/18.
 */
// $.getJSON("advicePhp/getgithub.php",function (json) {
//
// });
// $.ajax({
//     url:"https://api.github.com/users/Tonnywin/repos",
//     method:"GET",
//     dataType:"json",
//     crossDomain: true,
//     success:function (json) {
//         $.each(json,function (index,value) {
//             var oLi = $("<li class='col-md-6 col-sm-12 col-xs-12'></li>");
//             var oDiv = $("<div class='gitpro'></div>");
//             var dotBg;
//             switch (json[index].language){
//                 case "HTML":dotBg = "htmlColor";break;
//                 case "CSS":dotBg = "cssColor";break;
//                 case "JavaScript":dotBg = "jsColor";break;
//                 default:break;
//             }
//             if(json[index].fork){
//                 oDiv.html('<a href="'+json[index].html_url+'" class="text-bold">'+json[index].name+'</a><p class="text-fork">非原创，引自他人作品</p><p class="text-explain">'+json[index].description+'</p><p class="text-type"><span class="text-dot '+dotBg+'"></span>&nbsp;'+json[index].language+' </p>');
//             }else{
//                 oDiv.html('<a href="'+json[index].html_url+'" class="text-bold">'+json[index].name+'</a><p class="text-explain">'+json[index].description+'</p><p class="text-type"><span class="text-dot '+dotBg+'" ></span>&nbsp;'+json[index].language+' </p>');
//             }
//             oDiv.appendTo(oLi);
//             oLi.appendTo(proList);
//         }) ;
//     }
// });
function foo(json) {
    var proList = $(".proList");
    for(var i=0;i<json.data.length;i++){
        var oLi = $("<li class='col-md-6 col-sm-12 col-xs-12'></li>");
        var oDiv = $("<div class='gitpro'></div>");
        var dotBg;
        switch (json.data[i].language){
            case "HTML":dotBg = "htmlColor";break;
            case "CSS":dotBg = "cssColor";break;
            case "JavaScript":dotBg = "jsColor";break;
            default:break;
        }
        if(json.data[i].fork){
            oDiv.html('<a href="'+json.data[i].html_url+'" class="text-bold">'+json.data[i].name+'</a><p class="text-fork">非原创，引自他人作品</p><p class="text-explain">'+json.data[i].description+'</p><p class="text-type"><span class="text-dot '+dotBg+'"></span>&nbsp;'+json.data[i].language+' </p>');
        }else{
            oDiv.html('<a href="'+json.data[i].html_url+'" class="text-bold">'+json.data[i].name+'</a><p class="text-explain">'+json.data[i].description+'</p><p class="text-type"><span class="text-dot '+dotBg+'" ></span>&nbsp;'+json.data[i].language+' </p>');
        }
        oDiv.appendTo(oLi);
        oLi.appendTo(proList);
    }
}