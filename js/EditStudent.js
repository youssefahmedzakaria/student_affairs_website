var urlParams = new URLSearchParams(window.location.search);
var dateParam = urlParams.get('record');
var id = document.getElementById("id");
var stdname = document.getElementById("name");
var date = document.getElementById("date");
var gpa = document.getElementById("gpa");
var gender = null;
var male = document.getElementById("radio-male");
var female = document.getElementById("radio-female");
var level = document.getElementById("level");
var sta = null;
var active = document.getElementById("radio-active");
var inactive = document.getElementById("radio-inactive");
var dep = document.getElementById("department");
var email = document.getElementById("email");
var mobile = document.getElementById("mobile");
var nationality = document.getElementById("nationality");
var nationalID = document.getElementById("nationalId");
var save = document.getElementById("save");

var studentsData = JSON.parse(window.localStorage.getItem('Data'));

var index = studentsData.findIndex(function (student) {
    return student.rcrdId === parseInt(dateParam);
});

if (parseInt(studentsData[index].rcrdId) === parseInt(dateParam)) {
    id.value = studentsData[index].Id;
    stdname.value = studentsData[index].Name;
    date.value = studentsData[index].Date;
    gpa.value = studentsData[index].Gpa;
    studentsData[index].Gender === "male" ? male.checked = true : female.checked = true;
    level.value = studentsData[index].Level;
    studentsData[index].Status === "Active" ? active.checked = true : inactive.checked = true;
    dep.value = studentsData[index].Departemnt;
    email.value = studentsData[index].Email;
    mobile.value = studentsData[index].Mobile;
    nationality.value = studentsData[index].Nationality;
    nationalID.value = studentsData[index].NationalID;
}


save.onclick = function () {
    if (confirm("Are you sure you want edit this student?") && index !== -1) {
        studentsData[index].Id = id.value;
        studentsData[index].Name = stdname.value;
        studentsData[index].Date = date.value;
        studentsData[index].Gpa = gpa.value;
        studentsData[index].Gender = male.checked ? "male" : "female";
        studentsData[index].Level = level.value;
        studentsData[index].Status = active.checked ? "Active" : "Inactive";
        studentsData[index].Departemnt = dep.value;
        studentsData[index].Email = email.value;
        studentsData[index].Mobile = mobile.value;
        studentsData[index].Nationality = nationality.value;
        studentsData[index].NationalID = nationalID.value;
        localStorage.setItem('Data', JSON.stringify(studentsData));
    }
};

function goBack() {
    event.preventDefault(); // prevent form submission
    window.history.back(); // go back to previous page
};