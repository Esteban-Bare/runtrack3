$(document).ready(function() {
    // Function to fetch JSON data from PHP script and update the table
    function updateTable() {
        $.getJSON("user.php", function(data) {
            var tableBody = $("#data-table tbody");
            tableBody.empty(); // Clear existing rows
            
            $.each(data, function(index, element) {
                var row = $("<tr>");
                row.append($("<td>").text(element.id));
                row.append($("<td>").text(element.nom));
                row.append($("<td>").text(element.prenom));
                row.append($("<td>").text(element.email));
                tableBody.append(row);
            });
        });
    }
    
    // Initial table update
    updateTable();
    
    // Set up event listener for changes in the database
    // This could be through form submissions or any other event that triggers a change in your data
    // For demonstration, let's assume there's a button with ID "update-button" that triggers an update
    $("#update-button").click(function() {
        // Perform any necessary actions to update the database
        
        // Then, update the table
        updateTable();
    });
});