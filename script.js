var century;
var year;
var month;
var day;
//get inout

function getInput(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("monthday").value);

if(century == ""){
    alert("Input the correct gender");
    return false;
}if (year == ""){
    alert("Input the correct year");
    return false;
}if (month == ""){
    alert("Input the correct month");
    return false;
}if(dayOfMonth == ""){
    alert("input the correct date");
    return false;
}