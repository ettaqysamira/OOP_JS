class employee{
     nom
     #poste
     constructor(nom,poste){
        this.nom=nom
        this.#poste=poste
     }
     getPoste(){
        return this.#poste
     }
     afficherInfos(){
        console.log(`Bonjour je suis ${this.nom} et je travaille en tant que ${this.#poste}`)
     }
     changerPoste(newPoste){
        this.#poste=newPoste
        console.log(`${this.nom} a changé le poste à ${this.#poste}`)
     }

}
class developpeur extends employee{
    langage
    constructor(nom,langage){
        super(nom,"testeur")
        this.langage=langage
    }
    afficherInfos(){
        super.afficherInfos()
        console.log(`langage:${this.langage}`)
    }
}





let employee1= new employee("Samira","developpeuse")
let dev1=new developpeur("Amine","Java")
//prop private : affiche undefined
console.log(employee1.poste)
// afficher prop private 
console.log(employee1.getPoste())
// afficher directement 
console.log(employee1.nom)
employee1.afficherInfos()
dev1.afficherInfos()

