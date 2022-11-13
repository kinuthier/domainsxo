require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://old-blue-frog.matic-testnet.discover.quiknode.pro/c8c34aaf233ddca65ccc3b029926eaadf3c9503b/",
      accounts: ["809bafc538f96ee1f93016a29714bee6d39bf26022d5945bbda9d1c27e22a408"],
    }
  }
};
