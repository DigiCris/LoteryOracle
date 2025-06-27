const { ethers } = require("ethers");

// Conexión al nodo local
const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/1517aa04ef72416e9e46dc85c5274875");

// Dirección del contrato
const contractAddress = "0x74E9Ec4BDad77702EFD0cAd04c9529DA590A8fC4";

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