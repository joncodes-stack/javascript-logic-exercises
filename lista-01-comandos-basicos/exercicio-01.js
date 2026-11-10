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
    let cidade = await perguntar("Digite sua cidade: ");

    console.log(`Olá, ${cidade}!`);

    rl.close();
}

main();