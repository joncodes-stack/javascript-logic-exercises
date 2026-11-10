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
    let numero1 = await perguntar("Digite o primeiro número: ");
    let numero2 = await perguntar("Digite o segundo número:");

    console.log(`A multiplicacao dos números é: ${Number(numero1) * Number(numero2)}`);
    console.log(`A divisão dos números é: ${Number(numero1) / Number(numero2)}`);

    rl.close();
}

main();