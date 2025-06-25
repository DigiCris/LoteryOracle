const { ethers } = require("ethers");

// Conexión al nodo local
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

// Dirección del contrato
const contractAddress = "0x71C95911E9a5D330f4D621842EC243EE1343292e";

// ABI del contrato (asegúrate de incluir el ABI correcto)
const abi = [
    // Agrega aquí la definición del evento VRFAsk
    "event VRF()"
];

async function main() {
    const contract = new ethers.Contract(contractAddress, abi, provider);

    // Escucha el evento VRFAsk
    contract.on("VRF", () => {
        console.log("recibi un evento");
    });

    console.log("estoy escuchando evento");
}

// Ejecutar el programa
main().catch((error) => {
    console.error(error);
    process.exit(1);
});