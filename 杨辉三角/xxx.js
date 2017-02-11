var Triangle = function () {
    var row = document.getElementById("input").value - 1;
    var sum = [
        [1]
    ];
    var output = document.getElementById("output");
    output.innerHTML = "<p>1<p>"
    var text;
    console.log(sum)
    for (var i = 0; i <= row - 1; i++) {
        sum[i + 1] = [];
        text = "";
        for (var n = 0; n <= i + 1; n++) {
            var x = (sum[i][n] ? sum[i][n] : 0) + (sum[i][n - 1] ? sum[i][n - 1] : 0);
            sum[i + 1].push(x);
            text += " " + x + " ";
        }
        var node = document.createElement("P");
        var textnode = document.createTextNode(text);
        node.appendChild(textnode);
        output.appendChild(node);
    }
}

// #souceURL = xxx.js
/**
 * 算法题:
做一个杨辉三角计算的页面.
要求如下:
①计算程序可以通过输入行数,对应输出杨辉三角排列.
例1:用户输入数字"3"
页面输出



例2:用户输入数字"8"
页面输出
 


②页面布局需要有答案显示块、数字输入块、计算开始按钮,不要求页面布局格式.
③遇到问题记得FCC的大招 R-S-A.
 */
