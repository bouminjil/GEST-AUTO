// Initialize the database
var Datastore = require('nedb');
db  = new Datastore({ filename: 'db/chauffeurs.db', autoload: true });

var DatastoreV = require('nedb');
dbV = new DatastoreV({ filename: 'db/Vehicules.db' , autoload: true });

dbCtr  = new Datastore({ filename: 'db/controle.db', autoload: true });

dbLc  = new Datastore({ filename: 'db/ListCtrl.db', autoload: true });


dbcharge  = new Datastore({ filename: 'db/charge.db', autoload: true });


// Adds a charge
exports.addCharge = function(Date_ch,Matricule_Ve,Marque_V,Matricule_CH,Nom_Ch,Index_compt,Type_Charge,Nbr_Jrs_Pan,Cout,Notes) {

  // Create the person object
  var charge = {
   
    "Date_ch"      : Date_ch,
    "Matricule_Ve" : Matricule_Ve,
    "Marque_V"     : Marque_V,
    "Matricule_CH" : Matricule_CH,
    "Nom_Ch"       : Nom_Ch,
    "Index_compt"  : Index_compt,
    "Type_Charge"  : Type_Charge,
    "Nbr_Jrs_Pan"  : Nbr_Jrs_Pan,
    "Cout"         : Cout,
    "Notes"        : Notes
  };

  // Save the person to the database
  dbcharge.insert(charge, function(err, newDoc) {
    // Do nothing
  });
};


// Returns all persons
exports.getCharges = function(fncharge) {

// Get all persons from the database
dbcharge.find({}, function(err, docs) {

  // Execute the parameter function
  fncharge(docs);
  });
}

// Deletes a charge
exports.deleteCharge = function(id) {

  dbcharge.remove({ _id: id }, {}, function(err, numRemoved) {
    // Do nothing
  });
}


//////////////////////////////////////////////////////

// Adds a person
exports.addPerson = function(Nom, Prénom,Matricule,Télephone,CIN) {

  // Create the person object
  var person = {
    "Nom": Nom,
    "Prénom": Prénom,
    "Matricule" : Matricule,
    "Télephone" : Télephone,
    "CIN" : CIN
  };

  // Save the person to the database
  db.insert(person, function(err, newDoc) {
    // Do nothing
  });
};


// Returns all persons
exports.getPersons = function(fnc) {

// Get all persons from the database
  db.find({}, function(err, docs) {

  // Execute the parameter function
    fnc(docs);
  });
}

// Deletes a person
exports.deletePerson = function(id) {

  db.remove({ _id: id }, {}, function(err, numRemoved) {
    // Do nothing
  });
}



////////////////////////Adds Vhcl////////////////////////////

exports.addVhcl = function(Marque , MatriculeV , Typ_gaz ,Note) {

  // Create the Vhcl object
  var Vhcl = {
    "Marque":    Marque,
    "MatriculeV": MatriculeV,
    "Typ_gaz" :  Typ_gaz,
    "Note" :     Note
    
  };

  // Save the Care to the database
  dbV.insert(Vhcl, function(err, newDoc) {
    // Do nothing
  });
};


// Returns all Care
exports.getVhcls = function(fncV) {

  // Get all Care from the database
  dbV.find({}, function(err, docs) {

    // Execute the parameter function
    fncV(docs);
  });
}



// Deletes a Vhcl
exports.deleteVhcl = function(id) {

  dbV.remove({ _id: id }, {}, function(err, numRemoved) {
    // Do nothing
  });
}




////////Liste Controle//////

exports.addControl = function(Type_Ctrl) {

  // Create the person object
  var control = {
    "Type_Ctrl": Type_Ctrl,
    
  };

  // Save the ctrl to the database
  dbCtr.insert(control, function(err, newDoc) {
    // Do nothing
  });
};


// Returns all ctrl type
exports.getControls = function(fnctrl) {

// Get all persons from the database
dbCtr.find({}, function(err, docs) {

  // Execute the parameter function
    fnctrl(docs);
  });
}

// Deletes Control
exports.deleteControl = function(id) {

  dbCtr.remove({ _id: id }, {}, function(err, numRemoved) {
    // Do nothing
  });
}



///// List Conrol //////



/* exports.addCl = function(Matricule_V,Ctr_Type1,Ctrl_Value1,Ctr_Type2,Ctrl_Value2,Ctr_Type3,Ctrl_Value3,Ctr_Type4,Ctrl_Value4,Ctr_Type5,Ctrl_Value5,Ctr_Type6,Ctrl_Value6) {

  // Create the person object
  var listctrl = {
    "Matricule_V":Matricule_V,
    "Ctr_Type1":Ctr_Type1,
    "Ctrl_Value1":Ctrl_Value1,
    "Ctr_Type2":Ctr_Type2,
    "Ctrl_Value2":Ctrl_Value2,
    "Ctr_Type3":Ctr_Type3,
    "Ctrl_Value3":Ctrl_Value3,
    "Ctr_Type4":Ctr_Type4,
    "Ctrl_Value4":Ctrl_Value4,
    "Ctr_Type5":Ctr_Type5,
    "Ctrl_Value5":Ctrl_Value5,
    "Ctr_Type6":Ctr_Type6,
    "Ctrl_Value6":Ctrl_Value6
  };

  // Save the person to the database
  db.insert(person, function(err, newDoc) {
    // Do nothing
  });
};


// Returns all persons
exports.getPersons = function(fnc) {

// Get all persons from the database
  db.find({}, function(err, docs) {

  // Execute the parameter function
    fnc(docs);
  });
}

// Deletes a person
exports.deletePerson = function(id) {

  db.remove({ _id: id }, {}, function(err, numRemoved) {
    // Do nothing
  });
}*/