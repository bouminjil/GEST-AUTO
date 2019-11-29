// Initialize the database
var Datastore = require('nedb');
db  = new Datastore({ filename: 'db/chauffeurs.db', autoload: true });

var DatastoreV = require('nedb');
dbV = new DatastoreV({ filename: 'db/Vehicules.db' , autoload: true });

dbCtr  = new Datastore({ filename: 'db/controle.db', autoload: true });


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