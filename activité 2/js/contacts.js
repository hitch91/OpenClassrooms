/* 
Activité : gestion des contacts
*/

let contacts = [];
let Contact = {
    // initialise les contacts
    init: function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    },
    decrire: function () {
        let description = "Nom : " + this.nom + ", prenom : " + this.prenom;
        return description;
    }
};

let contact1 = Object.create(Contact);
contact1.init('Carole', 'Lévisse');

let contact2 = Object.create(Contact);
contact2.init('Mélodie', 'Nelsonne');

contacts.push(contact1, contact2);

let options = [" 1 : Lister les contacts", " 2 : Ajouter un contact", " 0 : Quitter"];
 
console.log("Bienvenue dans le gestionnaire de contacts !");

let saisie = 3;

while (saisie !== 0) {
    console.log('');
    options.forEach(function (option) {
     console.log(option);
    });
    console.log('');

    saisie = Number(prompt('Choisissez une option :'));

    if (saisie == 1) {

        console.log("Voici la liste de tous vos contacts :")

        contacts.forEach(function (contact) {
            console.log(contact.decrire());
            saisie;
        });

    } else if (saisie == 2) {
    	
        let saisiePrenom = prompt('Saisir un prenom');
        let saisieNom = prompt('Saisir un Nom');
        let contact3 = Object.create(Contact);
        contact3.init(saisiePrenom, saisieNom);
        contacts.push(contact3);
        console.log("Contact ajouté !");
        saisie;
    }
}

console.log("À bientot !!");