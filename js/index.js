const database = require('./js/database');

window.onload = function() {


  // Populate the table
  
  populateTableCharge();

  // Add the add button click event
  document.getElementById('addch').addEventListener('click', () => {

    // Retrieve the input fields for driver
   
    
    var Date_ch =      document.getElementById('Date_ch');
    var Matricule_Ve =         document.getElementById('Matricule_Ve');
    var Marque_V =     document.getElementById('Marque_V');
    var Matricule_CH = document.getElementById('Matricule_CH');
    var Nom_Ch =       document.getElementById('Nom_Ch');
    var Index_compt =  document.getElementById('Index_compt');
    var Type_Charge =  document.getElementById('Type_Charge');
    var Nbr_Jrs_Pan =  document.getElementById('Nbr_Jrs_Pan');
    var Cout =         document.getElementById('Cout');
    var Notes =        document.getElementById('Notes');
    // Save the person in the database
    database.addCharge(Date_ch.value,Matricule_Ve.value,Marque_V.value,Matricule_CH.value,Nom_Ch.value,Index_compt.value,Type_Charge.value,Nbr_Jrs_Pan.value,Cout.value,Notes.value);

    
    // Reset the input fields
    Date_ch.value ='';
    Matricule_Ve.value ='';
    Marque_V.value ='';
    Matricule_CH.value = '';
    Nom_Ch.value ='';
    Index_compt.value ='';
    Type_Charge.value ='';
    Nbr_Jrs_Pan.value ='';
    Cout.value = '';
    Notes.value ='';
   
    // Repopulate the table
    populateTableCharge();
  });


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



  
  populateTableC();
  // Add the add button click event
  document.getElementById('addc').addEventListener('click', () => {
    
    // Retrieve the input fields for driver
    var Type_Ctrl = document.getElementById('Type_Ctrl');
         
    // Save the person in the database
    database.addControl(Type_Ctrl.value);
      
    // Reset the input fields
    Type_Ctrl.value ='' ;
        
    // Repopulate the table
    populateTableC();
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

// Deletes a person
function deletePerson(id) {

  // Delete the person from the database
  database.deletePerson(id);

  // Repopulate the table Drive
  populateTable();
}


  //Populates the Care table
  function populateTableV(){
    database.getVhcls(function(Vhcls) {
  
      // Generate the table body
      var tableBodyV = '';
      var MatV ='' ;
      for (i = 0; i < Vhcls.length; i++) {
        tableBodyV += '<tr>';
        tableBodyV += '  <td>' + Vhcls[i].Marque + '</td>';
        tableBodyV += '  <td>' + Vhcls[i].MatriculeV + '</td>';
        tableBodyV += '  <td>' + Vhcls[i].Typ_gaz + '</td>';
        tableBodyV += '  <td>' + Vhcls[i].Note + '</td>';
        MatV+= '<option value='+'"'+Vhcls[i].MatriculeV +'">'+Vhcls[i].MatriculeV +'</option>';
        Matricule_Ve+= '<option value='+'"'+Vhcls[i].MatriculeV +'">'+Vhcls[i].MatriculeV +'</option>';
        tableBodyV += '  <td><input type="button" value="Suprimer" onclick="deleteVhcl(\'' + Vhcls[i]._id + '\')"></td>'
        tableBodyV += '</tr>';
      }
  
      // Fill the table content
  
      document.getElementById('tablebodyV').innerHTML = tableBodyV;
      document.getElementById('MatV').innerHTML = MatV;
      document.getElementById('Matricule_Ve').innerHTML = Matricule_Ve;

    });
  
  }


// Deletes a CARE
function deleteVhcl(id) {

  // Delete the person from the database
  database.deleteVhcl(id);

  // Repopulate the table CARE
  populateTableV();
}



 
function action() {
  x=document.getElementById("Matricule_Ve").value;
  database.getVhcls(function(Vhcls) {

    for (i = 0; i < Vhcls.length; i++) {
     if (Vhcls[i].MatriculeV == x) {  Marque_V.value=Vhcls[i].Marque   }

    

    }
  })
  
  }

function populateTableC(){
  database.getControls(function(controls) {

    // Generate the table body
    var tableBodyc = '';
    var tableBodyb ='';
    tableBodyc += '<tr>';
    
    for (i = 0; i < controls.length; i++) {
     
      tableBodyc += '<th> <input type="button" value='+'"'+controls[i].Type_Ctrl+'"'+' onclick="deleteControl(\'' + controls[i]._id + '\')"'+'</th>';
      
      
    //  tableBodyc += '  <td><input type="button" value="Suprimer" onclick="deleteVhcl(\'' + Vhcls[i]._id + '\')"></td>'
      
    }
    tableBodyc += '</tr>';
    
    tableBodyb +='<tr>';
   
   // tableBodyb += '  <td> <select id="MatV"> </select> </td>';
    for (i = 0; i < controls.length; i++) {
     
      tableBodyb += '  <td>' + '<input  size="3" placeholder="5000" id="" type="text">' + '</td>';
      
      
    //  tableBodyV += '  <td><input type="button" value="Suprimer" onclick="deleteVhcl(\'' + Vhcls[i]._id + '\')"></td>'
      
    }
    
    tableBodyb +='</tr>';
    // Fill the table content

    document.getElementById('tablebodyc').innerHTML = tableBodyc;
    document.getElementById('tablebodyb').innerHTML = tableBodyb;

  });

}



function deleteControl(id) {

  // Delete the person from the database
  database.deleteControl(id);

  // Repopulate the table CARE
  populateTableC();
}


function   populateTableCharge() {

  // Retrieve the persons
  database.getCharges(function(charges) {

    // Generate the table body
    var tableBody_charg = '';
    for (i = 0; i < charges.length; i++) {
      tableBody_charg += '<tr>';
      tableBody_charg += '  <td>' + charges[i].Date_ch + '</td>';
      tableBody_charg += '  <td>' + charges[i].Matricule_Ve + '</td>';
      tableBody_charg += '  <td>' + charges[i].Marque_V + '</td>';
      tableBody_charg += '  <td>' + charges[i].Matricule_CH + '</td>';
      tableBody_charg += '  <td>' + charges[i].Nom_Ch + '</td>';
      tableBody_charg += '  <td>' + charges[i].Index_compt + '</td>';
      tableBody_charg += '  <td>' + charges[i].Type_Charge + '</td>';
      tableBody_charg += '  <td>' + charges[i].Nbr_Jrs_Pan + '</td>';
      tableBody_charg += '  <td>' + charges[i].Cout + '</td>';
      tableBody_charg += '  <td>' + charges[i].Notes + '</td>';
      
      tableBody_charg += '  <td><input type="button" value="Delete" onclick="deleteCharge(\'' + charges[i]._id + '\')"></td>'
      tableBody_charg += '</tr>';
    }
  
    // Fill the table content
    document.getElementById('tableBody_charg').innerHTML = tableBody_charg;
  });
}

// Deletes a person
function deleteCharge(id) {

  // Delete the person from the database
  database.deleteCharge(id);

  // Repopulate the table Drive
  populateTableCharge();
}
