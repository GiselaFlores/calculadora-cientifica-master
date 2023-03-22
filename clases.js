class Animal{
    constructor(especie, nombreDeAnimal, alimentacion, domesticado, tamaño){
        this.especie=especie;
        this.nombreDeAnimal=nombreDeAnimal;
        this.alimentacion=alimentacion;
        this.domesticado=domesticado;
        this.tamaño=tamaño;
    }

    get verInfoAnimal(){
        return `El animal elegido es un ${this.nombreDeAnimal} del grupo de los ${this.especie}, tiene una alimentación ${this.alimentacion}, tiene un tamaño ${this.tamaño} y es ${this.domesticado} <br>`
    }

    set modificacionAlimentacion(tipoAlimentacion){
        this.alimentacion=tipoAlimentacion;
    }
}

class Mamiferos extends Animal{
    constructor(especie, nombreDeAnimal, alimentacion, domesticado, tamaño, toleranciaTemp, medioVida){
        super(especie, nombreDeAnimal, alimentacion, domesticado, tamaño);
        this.toleranciaTemp=toleranciaTemp;
        this.habitat=medioVida;
    }

    get verInfoMamifero(){
        return `El animal elegido es un ${this.nombreDeAnimal}, y es de la especie ${this.especie} tiene una alimentación ${this.alimentacion}, tiene un tamaño ${this.tamaño} y es ${this.domesticado}, el tigre ${this.toleranciaTemp} y vive en la ${this.habitat} <br>`
    }
}

let perro = new Animal("mamifero", "canino", "carnivoros", "domesticable", "mediano");
let gato = new Animal("mamifero", "felino", "carnivoros", "domesticable", "mediano");

let tigre= new Mamiferos("mamífero", "felino", "carnivoros", "domesticable", "mediano", "resiste a la temperatira", "selva");

document.write(tigre.verInfoMamifero);

/*
perro.modificacionAlimentacion="hervivoro";
console.log(perro.alimentacion);
document.write(perro.verInfoAnimal);

let cadena = new String ("hola");
document.write(cadena);
*/