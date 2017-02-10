/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var $ = function (e) {
    return document.querySelector(e);
}

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = $("#aqi-city-input").value;
    var aqi = $('#aqi-value-input').value;
    if (checkInput(city, aqi)) {
        aqiData[city] = aqi;
        console.log(aqiData)
    } else {
        return false
    }


}
/**
 * 验证城市与aqi
 */
function checkInput(city, aqi) {
    var reg1 = /^\d+$/;
    var reg2 = /^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z\s]+$/;
    if (!reg1.test(aqi)) {
        alert("aqi必须为整数")
        return false;
    }
    if (!reg2.test(city)) {
        alert("city");
        return false;
    }
    return city;
}
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var aqiTable = $('#aqi-table');
    aqiTable.innerHTML = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';
    for (var key in aqiData) {
        var tr = document.createElement("TR");
        tr.innerHTML = '<td>' + key + '</td>' + '<td>' + aqiData[key] + '</td><td><button data-key="'+key+'" class="del">删除</button></td>'
        aqiTable.appendChild(tr);
    }
    var buttonList = document.querySelectorAll('.del');
    for (var i = 0; i < buttonList.length; i++) {
        buttonList[i].onclick = function (e) {
            delBtnHandle(e)
        }
    }


}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(e) {
    // do sth.
    var key=e.target.dataset.key;
    delete aqiData[key];
    renderAqiList();
}

function init() {
    $("#add-btn").onclick = function () {
        addBtnHandle();
    }
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();