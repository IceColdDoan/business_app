var checkboxes = document.querySelectorAll('.task-checkbox');

    // Add a click event listener to each checkbox
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            // Check if the checkbox is checked
            if (checkbox.checked) {
                // If checked, make the parent task-item disappear
                checkbox.closest('.task-item').style.display = 'none';
            } else {
                // If unchecked, make the parent task-item visible
                checkbox.closest('.task-item').style.display = 'block'; // You can use "flex" or any other display property that fits your layout
            }
        });
    });