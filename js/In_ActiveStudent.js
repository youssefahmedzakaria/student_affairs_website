var tbody_active = document.querySelector('.active-stds');
var tbody_INactive = document.querySelector('.in-active-stds');

tbody_active.innerHTML = '';
tbody_INactive.innerHTML = '';

getDataFromLocalStorage();

function addDataToPageFrom(student, table) {

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

    table.appendChild(row);

}


function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("Data");
    if (data) {
        let records = JSON.parse(data);
        for (let i = 0; i < records.length; i++) {
            if (records[i].Status === "Active") {
                addDataToPageFrom(records[i], tbody_active);

            }
            else {
                addDataToPageFrom(records[i], tbody_INactive);
            }
        }
    }
}