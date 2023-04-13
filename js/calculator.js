var output ="";
function v(val) {
    if (val == "CE") {
        document.getElementById("d").value = " ";
        output = "";
    } else if (val == "=") {
        output = eval(output)
        document.getElementById("d").value = eval(output);
    } else {
        document.getElementById("d").value += val;
        output += val;
        console.log(output);
    }
}
