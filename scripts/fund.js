const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
    const { deployer } = await getNamedAccounts();
    const fundMe = await ethers.getContractAt("FundMe", deployer);
    const transactionResponse = await fundMe.fund({ value: "1000000000" });
    console.log("Funding...");
    await transactionResponse.wait(1);
    console.log("Funded");
}

main()
    .then(() => process.exit())
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
