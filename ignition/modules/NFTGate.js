const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("NFTGate", (m) => {


  const NFTGate = m.contract("NFTGate");

  return { NFTGate };
});
