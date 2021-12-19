const main = async () => {
  try {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Depolying contracts with account: ", deployer.address);
    console.log("Account Balance: ", accountBalance.toString());

    const Token = await hre.ethers.getContractFactory("WavePortal");
    const portal = await Token.deploy();
    await portal.deployed();

    console.log(`WavePortal address: ${portal.address}`);
  } catch (error) {
    console.error(error);
  }
};

main();
