function multiplica(n1: number, n2: number):number {
    return n1 * n2
}

function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

const calc1: number = multiplica(7, 5);
const bruno: string = saudacao('Bruno');
console.log(calc1, bruno);
