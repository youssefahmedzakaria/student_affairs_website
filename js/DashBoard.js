var studentsData = JSON.parse(window.localStorage.getItem('Data'));
var tbody = document.querySelector('.records');
tbody.innerHTML = '';

getDataFromLocalStorage();

function addDataToPageFrom(studentsData) {


    for (var i = 0; i < studentsData.length; i++) {
        var student = studentsData[i];
        var row = document.createElement('tr');
        row.setAttribute("recordId", student.rcrdId)

        var idCell = document.createElement('td');
        idCell.textContent = student.Id;
        row.appendChild(idCell);

        var nameCell = document.createElement('td');
        nameCell.textContent = student.Name;
        row.appendChild(nameCell);

        var dobCell = document.createElement('td');
        dobCell.textContent = student.Date;
        row.appendChild(dobCell);


        var gpac = document.createElement("td");
        gpac.textContent = student.Gpa;
        row.appendChild(gpac);

        var genderc = document.createElement("td");
        genderc.textContent = student.Gender;
        row.appendChild(genderc);

        var levelc = document.createElement("td");
        levelc.textContent = student.Level;
        row.appendChild(levelc);

        var statusc = document.createElement("td");
        statusc.textContent = student.Status;
        row.appendChild(statusc);

        var depc = document.createElement("td");
        depc.textContent = student.Departemnt;
        row.appendChild(depc);

        var emailc = document.createElement("td");
        emailc.textContent = student.Email;
        row.appendChild(emailc);

        var mobilec = document.createElement("td");
        mobilec.textContent = student.Mobile;
        row.appendChild(mobilec);

        var nationc = document.createElement("td");
        nationc.textContent = student.Nationality;
        row.appendChild(nationc);

        var nationIdc = document.createElement("td");
        nationIdc.textContent = student.NationalID;
        row.appendChild(nationIdc);

        var actionc = document.createElement("td");


        var anchorEdit = document.createElement("a");
        anchorEdit.href = "../EditStudent.html";

        var editBtn = document.createElement("button");
        editBtn.className = "button-edit";
        editBtn.appendChild(document.createTextNode("Edit"));

        anchorEdit.appendChild(editBtn);

        var delBtn = document.createElement("button");
        delBtn.className = "button-delete";
        delBtn.addEventListener("click", (e) => {
            deleteStudent(e.target.parentNode.parentNode.getAttribute("recordId"));
        });
        delBtn.appendChild(document.createTextNode("Delete"))

        actionc.appendChild(anchorEdit);
        actionc.appendChild(delBtn);
        row.appendChild(actionc);



        tbody.appendChild(row);

    }
}

function deleteStudent(stdId) {
    if (confirm("Are you sure you want to delete this student?")) {
        studentsData = studentsData.filter((record) => record.rcrdId != stdId);
        addDataToLocalStorage(studentsData);
        tbody.innerHTML = '';
        addDataToPageFrom(studentsData);
    }
}

function addDataToLocalStorage(arrayOfData) {
    window.localStorage.setItem("Data", JSON.stringify(arrayOfData));
}

function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("Data");
    if (data) {
        let records = JSON.parse(data);
        addDataToPageFrom(records);
    }
}