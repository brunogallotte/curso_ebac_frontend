function Carro(marca, motor, hp, cambio, pneu) {
    this.marca = marca;
    this.motor = motor;
    this.hp = hp;
    this.cambio = cambio;
    this.pneu = ['Azul', 'Laranja', 'Vermelho', 'Amarelo', 'Radial'];;
}


// Criação do objeto Voyage a partir dos atributos da classe Carro
const voyage = new Carro();

voyage.marca = 'Volkswagen';
voyage.motor = '4 Cilindros 1.6';
voyage.hp = '110hp';
voyage.cambio = 'Manual 5 Marchas';
voyage.pneu = 'Radial';

// Criação de objetos carros a partir da classe Carro.
const voyage2 = new Carro('Volkswagen', '4 Cilindros 1.6', '110hp', 'Manual 5 Marchas', 'Radial');
const porsche911 = new Carro('Porsche','6 Cilindros Turbo', '580hp', 'PDK', 'Radial');
const nissangtr = new Carro('Nissan', '6 Cilindros Turbo', '525hp', null, 'Radial');
// console.log(voyage2, porsche911, nissangtr);

// Desenvolvimento de categorias de competição de kart, herdando de Carro e a partir de diferentes classes.

function KartPro(chassi, motor, hp, cambio, pneu) {
    this.chassi = ['Bravar','Mini','MegaKart','ORG', 'Tonykart'];

    Carro.call(this, motor, hp, cambio, pneu);
}

const F4Graduados = new KartPro(); 

F4Graduados.pneu = F4Graduados.pneu[2];
F4Graduados.motor = '4T';
F4Graduados.hp = '18hp';
F4Graduados.cambio = null;

const F4Novatos = new KartPro('Chassi', null, '4T', '18hp', null);
F4Novatos.pneu = F4Novatos.pneu[1];


function KartRental(peso, chassi, motor, hp, cambio, pneu) {
    this.peso = ['85kg', '95kg', '105kg'];

    Carro.call(this, motor, hp, pneu);
    KartPro.call(chassi);
}

const rentalLeves = new KartRental();

rentalLeves.peso = rentalLeves.peso[0];
rentalLeves.chassi = 'Mega Rental';
rentalLeves.motor = '4T';
rentalLeves.hp = '13hp';
rentalLeves.cambio = null;
rentalLeves.pneu = rentalLeves.pneu[0];

// Exec;

console.log(voyage, porsche911, nissangtr, F4Graduados, F4Novatos, rentalLeves);




