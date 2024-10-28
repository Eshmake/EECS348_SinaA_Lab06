
function changeStyles() {
    var borderR = document.getElementById('input1').value;
    var borderG = document.getElementById('input2').value;
    var borderB = document.getElementById('input3').value;

    var borderWidth = document.getElementById('input4').value + "px";

    var backR = document.getElementById('input5').value;
    var backG = document.getElementById('input6').value;
    var backB = document.getElementById('input7').value;

    document.getElementById("para").style.borderColor = `rgb(${borderR}, ${borderG}, ${borderB})`;

    document.getElementById("para").style.borderWidth = borderWidth;

    document.getElementById("para").style.backgroundColor = `rgb(${backR}, ${backG}, ${backB})`;

}