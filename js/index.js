const database = require('./js/database');

window.onload = function() {

  // Populate the table
  populateTable();

  // Add the add button click event
  document.getElementById('add').addEventListener('click', () => {

    // Retrieve the input fields for driver
    var Nom = document.getElementById('Nom');
    var Prénom = document.getElementById('Prénom');
    var Matricule = document.getElementById('Matricule');
    var Télephone = document.getElementById('Télephone');
    var CIN = document.getElementById('CIN');
    
   
    // Save the person in the database
    database.addPerson(Nom.value, Prénom.value , Matricule.value , Télephone.value  , CIN.value);

    
    // Reset the input fields
    Nom.value ='' ;
    Prénom.value ='';
    Matricule.value ='';
    Télephone.value ='';
    CIN.value = '';
   
    // Repopulate the table
    populateTable();
  });




  populateTableV();
  // Add the add button click CARE
  document.getElementById('addV').addEventListener('click', () => {

       
    // Retrieve the input fields for Care
    var Marque = document.getElementById('Marque');
    var MatriculeV = document.getElementById('MatriculeV');
    var Typ_gaz = document.getElementById('Typ_gaz');
    var Note = document.getElementById('Note');

    
    // Save the Care in the database
    database.addVhcl(Marque.value, MatriculeV.value , Typ_gaz.value , Note.value);

    // Reset the input fields  for Vhcl
     Marque.value ='';
     MatriculeV.value ='';
     Typ_gaz.value ='';
     Note.value ='';

    // Repopulate the table
    populateTableV();
  });



}



// Populates the persons table
function populateTable() {

  // Retrieve the persons
  database.getPersons(function(persons) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < persons.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + persons[i].Nom + '</td>';
      tableBody += '  <td>' + persons[i].Prénom + '</td>';
      tableBody += '  <td>' + persons[i].Matricule + '</td>';
      tableBody += '  <td>' + persons[i].Télephone + '</td>';
      tableBody += '  <td>' + persons[i].CIN + '</td>';
      
      tableBody += '  <td><input type="button" value="Delete" onclick="deletePerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;
  });
}


  //Populates the Care table
  function populateTableV(){
    database.getVhcls(function(Vhcls) {
  
      // Generate the table body
      var tableBodyV = '';
      for (i = 0; i < Vhcls.length; i++) {
        tableBodyV += '<tr>';
        tableBodyV += '  <td>' + Vhcls[i].Marque + '</td>';
        tableBodyV += '  <td>' + Vhcls[i].MatriculeV + '</td>';
        tableBodyV += '  <td>' + Vhcls[i].Typ_gaz + '</td>';
        tableBodyV += '  <td>' + Vhcls[i].Note + '</td>';
        
        tableBodyV += '  <td><input type="button" value="Suprimer" onclick="deleteVhcl(\'' + Vhcls[i]._id + '\')"></td>'
        tableBodyV += '</tr>';
      }
  
      // Fill the table content
  
      document.getElementById('tablebodyV').innerHTML = tableBodyV;

    });
  
  }


// Deletes a CARE
function deleteVhcl(id) {

  // Delete the person from the database
  database.deleteVhcl(id);

  // Repopulate the table CARE
  populateTableV();
}

// Deletes a person
function deletePerson(id) {

  // Delete the person from the database
  database.deletePerson(id);

  // Repopulate the table Drive
  populateTable();
}