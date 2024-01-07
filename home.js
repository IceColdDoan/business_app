var tasks = document.querySelectorAll(".task-checkbox");

    tasks.forEach(function(task) {
        task.addEventListener('click', function() {
            // Check if the checkbox is checked
            if (task.checked) {
                // If checked, make the parent task-item disappear
                task.closest('.task-item').style.textDecoration = "line-through";
            } 
            else {
                task.closest('.task-item').style.textDecoration = "none";
            }
        });
    });
