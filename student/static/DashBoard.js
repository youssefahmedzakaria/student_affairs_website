

var editButtons = document.getElementsByClassName("button-edit");
for (var i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", function () {
        var index = parseInt(this.getAttribute("data-index"));
        var toEditPage = '../edit_student?record=' + (index + 1);
        window.location.href = toEditPage;
    });
}

var deleteButtons = document.getElementsByClassName("button-delete");
for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function () {
        var index =  parseInt(this.getAttribute("data-index"));
        var toDelete = '../deleteStudent/'+ (index);
        window.location.href = toDelete;
        
    });
}


