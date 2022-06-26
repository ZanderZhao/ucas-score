// https://github.com/ZanderZhao/ucas-score
// by ZanderZhao v1
function hdDealData(rawjson) {
    try{
        var jsonObj = JSON.parse(rawjson);
        for (var i = 0; i < jsonObj.list.length; i++) {
            if(i==0){document.getElementById("show").innerHTML = ""}
            document.getElementById("show").innerHTML += jsonObj.list[i].courseName + " : " + jsonObj.list[i].score + "<br/>"
            if(i==jsonObj.list.length){document.getElementById("show").innerHTML += "<hr/>"}
        }
    }catch (error) {
        document.getElementById("show").innerHTML += "<font color=\"red\">粘贴的数据有误</font>，也可能是教务系统更新了，尝试去<a href=\"https://github.com/ZanderZhao\" target=\"_blank\">哔哩哔哩</a>或者<a href=\"https://github.com/ZanderZhao/ucas-score\" target=\"_blank\">github</a>寻求帮助或反馈<hr/>"
        console.error(error);
    }
}
function OnInput(event) {
    hdDealData(event.target.value);
}
function OnPropChanged(event) {
    if (event.propertyName.toLowerCase() == "value") {
        hdDealData(event.srcElement.value);
    }
}
