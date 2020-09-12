const OctoFi = artifacts.require("OctoFi");
const YieldContract = artifacts.require("YieldContract");
const ether = require('./../test/ether');
const ethers = require('ethers');

module.exports = async function(deployer,network,accounts) {
    const owner = accounts[0];//'0xCb78ea3bD45265fcFbD7a00445C65b39d315c68a';
    // address tokenContract, uint256 _endDepositTime, address _yieldWallet, uint256 _maxTokens
  await deployer.deploy(OctoFi);

  const tokenContract = await OctoFi.deployed();

  var d = new Date();
  var n = d.getTime();
  const _endDepositTime = n+n;
  const _yieldWallet = '0x9c830FFc3e4E7B23Bf1200000000000000';


  // var _maxTokens =  ether.ether(5000000);
  var _maxTokens =await  web3.utils.toWei('5000000', 'ether');
  // console.log("TO Wei ", toWe);


 await deployer.deploy(YieldContract , tokenContract.address, _endDepositTime, _yieldWallet, _maxTokens);
};