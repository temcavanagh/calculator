function getHistory(){
    document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function printOutput(num){
    document.getElementById("output-value").innerText=getFormattedNumber(num);
}
function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
printOutput("9999");