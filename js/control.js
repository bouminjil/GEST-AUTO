const database = require('./js/database');
window.onload = function() {
    // Populate the table
    populateTable_Ctrl();
  
    // Add the add button click event
    document.getElementById('add').addEventListener('click', () => {
  
      // Retrieve the input fields for driver
      var Type_Ctrl = document.getElementById('Type_Ctrl');
           
      // Save the person in the database
      database.addControl(Type_Ctrl.value);
        
      // Reset the input fields
      Type_Ctrl.value ='' ;
          
      // Repopulate the table
      populateTable_Ctrl();
    });
   
  
  }

  function populateTable_Ctrl() {

    // Retrieve control
    database.getControls(function(controls) {
  
      // Generate the table body
      var tableBody = '';
      tableBody += '<thead>';
      tableBody += '<tr>';
      tableBody += '<th>'+'MARQUE'+'<th>';
      tableBody += '<th>'+'MATRIQULE'+'<th>';
      for (i = 0; i < controls.length; i++) {
        
        tableBody += '<th>' + controls[i].Type_Ctrl + '</th>';
        
       // tableBody += '  <td><input type="button" value="Delete" onclick="deleteControl(\'' + controls[i]._id + '\')"></td>'
        
      }
      tableBody += '</tr>';
      tableBody += '</thead>';

      tableBody += '<tbody></tbody>';

    
    });
  }

  function deleteControl(id) {

    // Delete the person from the database
    database.deleteControl(id);
  
    // Repopulate the table CARE
    populateTable_Ctrl();
  }



  
  
 