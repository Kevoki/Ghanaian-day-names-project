//validation function
function validate(){

    //getting date input from the form
    var date = document.getElementById("date");
    //var mydate = document.forms["akanform"]["mydate"];
    var gender = document.akannames.gender;
    
    var date = new Date(document.getElementById("date").value);
    var dateday = date.getDay();
    var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day = weekdays[dateday];
    var mName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var fName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var valid = false; 
    
    //getting error display objects
    var dateerror = document.getElementById('dateerror');
    var gendererror = document.getElementById('gendererror');
    
    //get diplay object
    var result = document.getElementById('result');
    
    if(document.getElementById("date").value == ""){
        dateerror.innerHTML = "Please enter a valid date ";
        return false;
    }else{
        //validating and selecting gender
        for(var i = 0;i<gender.length;i++){
            if(gender[i].checked){
                valid = true;
                break;
            }
        }
        if(valid){
            if(gender[i].value == "male"){
                result.innerHTML = "You were born on a "+day+".<br>"+"Your Akan Name is " + mName[dateday]; 
            }else{
            if(gender[i].value == "female"){
                result.innerHTML = "You were born on a "+day+".<br>"+"Your Akan Name is " + fName[dateday]; 
            }
            }
        }else{
            gendererror.innerHTML = "Please select gender";
            return false;
        }    
    }
    }
    function refresh(){
    document.getElementById('dateerror').innerHTML = "";
    document.getElementById('gendererror').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    date.value = "";
    var ele = document.getElementsByName("gender");
    
    for(var j=0;j<gender.length;j++)
       gender[j].checked = false;
    }