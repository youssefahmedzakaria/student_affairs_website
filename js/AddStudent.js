let id = document.querySelector(".id");
let username = document.querySelector(".username");
let password = document.querySelector(".password");
let date = document.querySelector(".date");
let gpa = document.querySelector(".gpa");
let gender = document.querySelector(".gender");
let level = document.querySelector(".level");
let sta = document.querySelector(".status");
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
    if ((id.value && username.value && password.value && date.value && gpa.value && gender.value &&  level.value &&sta.value &&department.value && email.value && mobile.value && nationality.value && nationalID.value ) !== ""){
        const data = {
            Id: id.value,
            Username: username.value,
            Password: password.value,
            Date: date.value,
            Gpa: gpa.value,
            Gender: gender.value,
            Level: level.value,
            Status: sta.value,
            Departemnt: department.value,
            Email : email.value,
            Mobile: mobile.value,
            Nationality: nationality.value,
            NationalID: nationalID.value,

        }

        id.value ="";
        username.value = "";
        password.value = "";
        date.value = "";
        gpa.value = "";
        gender.value =""; 
        level.value = "";
        sta.value = "";
        department.value =""; 
        email.value = "";
        mobile.value = "";
        nationality.value = "";
        nationalID.value ="";

        arrayOfData.push(data);
        
        addDataToLocalStorage(arrayOfData);

        
    }

};

function addDataToLocalStorage(arrayOfData){
    window.localStorage.setItem("Data", JSON.stringify(arrayOfData));
}

function getDataFromLocalStorage() {
    let Add = window.localStorage.getItem("Data");
    if (Add) {
      let Student = JSON.parse(Add);
    }
    
}