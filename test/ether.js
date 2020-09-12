
web3 = require('web3');
exports.ether = (n) => {
  return new web3.utils.BN(n.toString());
  // return new web3.utils.BN(web3.utils.toWei(n.toString(), 'ether'));
}

exports.wei = (n) => {
  return n;
  // return web3.utils.fromWei(new web3.utils.BN(n), 'ether');
}

exports.BN = n => {
  return new web3.utils.BN(n).toString();
}

exports.HEX = n => {
  return web3.utils.hexToBytes(web3.utils.toHex(n));
}

exports.toBytes = (n) => {
  return
}