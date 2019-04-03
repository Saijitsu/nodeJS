export class User {
    constructor(name){
        this.name = name;
    }
    get name() {  // get accesseur: permet d'ajouter du contrôle sur la capacité d'accéder ou de transformer
        return this._name;
    }
    set name(value) {  // set mutateur
        this._name = value;
    }
}
