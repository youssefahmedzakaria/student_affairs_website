let id = document.querySelector(".id");
let stdname = document.querySelector(".name");
let date = document.querySelector(".date");
let gpa = document.querySelector(".gpa");

let gender = null;
var maleRadio = document.querySelector('input[name="gender"][value="Male"]');
var femaleRadio = document.querySelector('input[name="gender"][value="Female"]');

let level = document.querySelector(".level");


let sta = null;
let active = document.querySelector('input[name="status"][value="Active"]');
let inactive = document.querySelector('input[name="status"][value="Inactive"]');

let department = document.querySelector(".department");
let email = document.querySelector(".email");
let mobile = document.querySelector(".mNumber");
let nationality = document.querySelector(".Nationality");
let nationalID = document.querySelector(".NationalID");
let submit = document.querySelector(".add");


let arrayOfData = [];


if (localStorage.getItem("Data")) {
    arrayOfData = JSON.parse(localStorage.getItem("Data"));
}

getDataFromLocalStorage();

// Add data
submit.onclick = function () {
    if (maleRadio.checked) {
        gender = maleRadio.value;
    } else if (femaleRadio.checked) {
        gender = femaleRadio.value;
    }
    if (active.checked) {
        sta = active.value;
    } else if (inactive.checked) {
        sta = inactive.value;
    }
    var status_stu = 'Absent';  
    for(var i=0; i<arrayOfData.length; i++)  
    {  
        var ID = arrayOfData[i].Id; 
        var Emml= arrayOfData[i].Email;  
        var tel = arrayOfData[i].Mobile;
        if(id.value == ID || email.value == Emml || mobile.value == tel){  
            status_stu = 'Present'; 
          break;  
        }  
    } 
    let play = true;
    if (status_stu == 'Present') {
        alert("wrong entry(ID)");
        play = false;
          
    }else{
        play = true;
    }

    if (play && (id.value && stdname.value && date.value && gpa.value && gender && level.value && sta && department.value && email.value && mobile.value && nationality.value && nationalID.value) !== "") {
        const data = {
            rcrdId: Date.now(),
            Id: id.value,
            Name: stdname.value,
            Date: date.value,
            Gpa: gpa.value,
            Gender: gender,
            Level: level.value,
            Status: sta,
            Departemnt: department.value,
            Email: email.value,
            Mobile: mobile.value,
            Nationality: nationality.value,
            NationalID: nationalID.value,

        }

        id.value = "";
        stdname.value = "";
        date.value = "";
        gpa.value = "";
        gender.value = "";
        level.value = "";
        sta.value = "";
        department.value = "";
        email.value = "";
        mobile.value = "";
        nationality.value = "";
        nationalID.value = "";

        arrayOfData.push(data);

        addDataToLocalStorage(arrayOfData);


    }

};

function addDataToLocalStorage(arrayOfData) {
    window.localStorage.setItem("Data", JSON.stringify(arrayOfData));
}

function getDataFromLocalStorage() {
    let Add = window.localStorage.getItem("Data");
    if (Add) {
        let Student = JSON.parse(Add);
    }

}