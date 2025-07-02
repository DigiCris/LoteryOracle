const {expect} = require("chai");
const { ethers } = require("hardhat");

describe("Lottery", function() {
    let Lottery;
    let lottery;

    beforeEach(async function(){
        Lottery = await ethers.getContractFactory("Lottery");
        lottery = await Lottery.deploy();
    });

    it("testing setOracle()", async function(){
        await lottery.setOracle("0x1234567890123456789012345678901234567890");
        let result = await lottery.oracle();
        expect(result).to.equal("0x1234567890123456789012345678901234567890");
    });

    it("testing play()", async function(){
        let contadorBefore = await lottery.counter();
        await lottery.play();
        let contadorAfter = await lottery.counter();
        let result = contadorAfter-contadorBefore;
        expect(result).to.equal(1);            
    });

});