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

  function populateTable_Ctrl(tablebody) {

    // Retrieve control
   
   var tableBody=''

    tableBody+= 'ccccc'
    
    document.getElementById('tablebody').innerHTML = tableBody;

  }

  function deleteControl(id) {

    // Delete the person from the database
    database.deleteControl(id);
  
    // Repopulate the table CARE
    populateTable_Ctrl();
  }



  
  
 