const { getNamedAccounts, ethers, log } = require("hardhat");

async function main() {
    const { deployer } = await getNamedAccounts();
    const fundMe = await ethers.getContractAt("FundMe", deployer);
    const transactionResponse = await fundMe.withdraw();
    console.log("Withdrawing...");
    await transactionResponse.wait(1);
    console.log("Withdrawn");
}

main()
    .then(() => process.exit())
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
