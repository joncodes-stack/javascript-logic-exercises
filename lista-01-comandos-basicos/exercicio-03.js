const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(mensagem) {
    return new Promise((resolve) => {
        rl.question(mensagem, resolve);
    });
}

async function main() {
    let numero = Number(await perguntar("Digite um número: "));

    let dobroSucessor = (numero + 1) * 2;
    let triploAntecessor = (numero - 1) * 3;

    console.log(`Dobro do sucessor: ${dobroSucessor}`);
    console.log(`Triplo do antecessor: ${triploAntecessor}`);

    rl.close();
}

main();