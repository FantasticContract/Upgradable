const { ethers, upgrades } = require("hardhat");

async function main() {
  // TODO Check this address is right before deploying.
  // <<< YOUR PROXY CONTRACT ADDRESS HERE >>>
  const deployedProxyAddress = "0x4A0cE8BcBB727e04f08D824A006cc67D9A52d405";

  const PriceFeedTrackerV2 = await ethers.getContractFactory(
    "PriceFeedTrackerV2"
  );
  console.log("Upgrading PriceFeedTracker...");

  await upgrades.upgradeProxy(deployedProxyAddress, PriceFeedTrackerV2);
  console.log("PriceFeedTracker upgraded");
}

main(); 