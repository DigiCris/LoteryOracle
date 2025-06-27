const { ethers } = require("hardhat");

async function main() {
    _addr = "0x74E9Ec4BDad77702EFD0cAd04c9529DA590A8fC4";
    Lottery = await ethers.getContractFactory("Lottery");
    lottery = Lottery.attach(_addr);
    tx = await lottery.play();
    console.log(tx);
}

main();