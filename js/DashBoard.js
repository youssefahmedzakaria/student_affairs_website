function deleteStudent(button) {
    if (confirm("Are you sure you want to delete this student?")) {
        button.closest("tr").remove();
    }
}

