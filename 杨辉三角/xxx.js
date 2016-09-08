var Triangle = function () {
    var row = document.getElementById("input").value-1;
    var sum = [[1]];
    var output=document.getElementById("output");
    output.innerHTML="<p>1<p>"
var text;
    console.log(sum)
    for (var i = 0; i <= row - 1; i++) {
        sum[i + 1] = [];
        text="";
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