import { ethers } from "hardhat";
import { expect } from "chai";

async function main() {
  const [deployer] = await ethers.getSigners();
  const creationBytecode = "69602a60005260206000f3600052600a6016f3";
  const EXPECTED_RESULT = 42;

  const factory = new ethers.ContractFactory(ABI, creationBytecode, deployer);
  const deployed = await factory.deploy();
  console.log("Contract deployed to:", deployed.address);

  const result = await deployed.whatIsTheMeaningOfLife();
  console.log("The result is: ", result);
  expect(result).to.equal(EXPECTED_RESULT);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const ABI = [
  {
    "inputs": [],
    "name": "whatIsTheMeaningOfLife",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]