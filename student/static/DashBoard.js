$(document).ready(function () {
    // Function to perform the search
    function performSearch() {
        var searchId = $('#search_Id').val();
        var searchName = $('#search_Name').val();

        $.ajax({
            url: '/search_students/',
            data: {
                'search_id': searchId,
                'search_name': searchName
            },
            dataType: 'json',
            success: function (data) {
                // Clear the existing table rows
                $('.records').empty();

                // Append the new rows based on the search results
                for (var i = 0; i < data.students.length; i++) {
                    var student = data.students[i];
                    var newRow = '<tr>' +
                        '<td>' + student.stuId + '</td>' +
                        '<td>' + student.name + '</td>' +
                        '<td>' + student.dob + '</td>' +
                        '<td>' + student.gpa + '</td>' +
                        '<td>' + student.gender + '</td>' +
                        '<td>' + student.level + '</td>' +
                        '<td>' + student.status + '</td>' +
                        '<td>' + student.department + '</td>' +
                        '<td>' + student.email + '</td>' +
                        '<td>' + student.mobile + '</td>' +
                        '<td>' + student.nationality + '</td>' +
                        '<td>' + student.national_id + '</td>' +
                        '<td><button class="button-edit" data-index="' + student.id + '">Edit</button> ' +
                        '<button class="button-delete" data-index="' + student.stuId + '">Delete</button></td>' +
                        '</tr>';

                    $('.records').append(newRow);
                }

                // Attach event handlers to newly added buttons
                attachButtonHandlers();
            }
        });
    }

    // Function to attach event handlers to buttons
    function attachButtonHandlers() {
        // Event handler for edit buttons
        $('.button-edit').click(function () {
            var index = parseInt($(this).data("index"));
            var toEditPage = '../edit_student/' + index;
            window.location.href = toEditPage;
        });

        // Event handler for delete buttons
        $('.button-delete').click(function () {
            var index = parseInt($(this).data("index"));
            var confirmDelete = confirm("Are you sure you want to delete student with ID: " + index + " ?");

            if (confirmDelete) {
                var toDelete = '../deleteStudent/' + index;
                window.location.href = toDelete;
            }
        });
    }

    // Trigger search by ID when the button is clicked
    $('#search_Id-btn').click(function () {
        performSearch();
    });

    // Trigger search by name when the button is clicked
    $('#search_Name-btn').click(function () {
        performSearch();
    });

    // Attach event handlers to initial buttons
    attachButtonHandlers();
});
