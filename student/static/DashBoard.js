var studentsData = JSON.parse(window.localStorage.getItem('Data'));
var tbody = document.querySelector('.records');
tbody.innerHTML = '';

getDataFromLocalStorage();

document.getElementById("search_Id-btn").addEventListener("click", (e) => {
    e.preventDefault();
    var searchId = document.getElementById("search_Id").value;
    searchById(searchId);
});
html
document.getElementById("search_Name-btn").addEventListener("click", (e) => {
    e.preventDefault();
    var searchName = document.getElementById("search_Name").value;
    searchByName(searchName);
});

document.getElementById("search_Id").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        var searchId = document.getElementById("search_Id").value;
        searchById(searchId);
    }
});

document.getElementById("search_Name").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        var searchName = document.getElementById("search_Name").value;
        searchByName(searchName);
    }
});

function searchById(id) {
    var filteredData = studentsData.filter(function (student) {
        return student.Id === id;
    });
    tbody.innerHTML = '';
    addDataToPageFrom(filteredData);
}

function searchByName(name) {
    var filteredData = studentsData.filter(function (student) {
        return student.Name.toLowerCase().includes(name.toLowerCase());
    });
    tbody.innerHTML = '';
    addDataToPageFrom(filteredData);
}

function deleteStudent(stdId) {
    if (confirm("Are you sure you want to delete this student?")) {
        studentsData = studentsData.filter((record) => record.rcrdId != stdId);
        addDataToLocalStorage(studentsData);
        tbody.innerHTML = '';
        addDataToPageFrom(studentsData);
    }
}

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

        var editBtn = document.createElement("button");
        editBtn.className = "button-edit";
        (function (studentId) {
            editBtn.addEventListener("click", (e) => {
                var stdToEdit = studentId.toString();
                var toEditPage = '../edit_student?record=' + stdToEdit;
                window.location.href = toEditPage;
            });
        })(student.rcrdId);
        editBtn.appendChild(document.createTextNode("Edit"));

        var delBtn = document.createElement("button");
        delBtn.className = "button-delete";
        delBtn.addEventListener("click", (e) => {
            deleteStudent(e.target.parentNode.parentNode.getAttribute("recordId"));
        });
        delBtn.appendChild(document.createTextNode("Delete"))

        actionc.appendChild(editBtn);
        actionc.appendChild(delBtn);
        row.appendChild(actionc);

        tbody.appendChild(row);
    }
}

function getDataFromLocalStorage() {
    if (studentsData) {
        addDataToPageFrom(studentsData);
    }
}

function addDataToLocalStorage(arrayOfData) {
    window.localStorage.setItem("Data", JSON.stringify(arrayOfData));
}