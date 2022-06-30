const { assert } = require("chai");
const { getNamedAccounts, ethers, network } = require("hardhat");
const { devChains } = require("../../helper-hardhat-config");

devChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", async function () {
          let fundMe, deployer;
          const sendValue = ethers.utils.parseEther("1");
          beforeEach(async function () {
              deployer = await getNamedAccounts().deployer;
              fundMe = await ethers.getContractAt("FundMe", deployer);
          });

          it("allows people to fund and withdraw", async function () {
              await fundMe.fund({ value: sendValue });
              await fundMe.withdraw();
              const endingBalance = await fundMe.provider.getBalance(
                  fundMe.address
              );
              assert.equal(endingBalance.toString(), "0");
          });
      });
