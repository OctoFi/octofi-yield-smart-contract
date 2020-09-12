require('dotenv').config();
require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

const infuraKey = "##";
const mnemonic = require('fs').readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
      gas: 150000000,
      // ganache-cli -l 3000000000
    },

    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,       // Ropsten's id
      gas: 1100000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
       ,networkCheckTimeout:50000
      //  ,
      //  from:0xCb78ea3bD45265fcFbD7a00445C65b39d315c68a
    },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/${infuraKey}`),
      network_id: 42,       // Ropsten's id
      // gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true
           // Skip dry run before migrations? (default: false for public nets )
      // from: '0xCb78ea3bD45265fcFbD7a00445C65b39d315c68a'
    },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
    live:{
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/49f4d0a86eb84b13871b40d55e2a1cd3`),
      // host: "178.25.19.88", // Random IP for example purposes (do not use)
      // port: 80,
      network_id: 1       // Ethereum public network

    }
  },
  plugins: ["solidity-coverage"],
  compilers: {
    solc: {
      version: '0.5.10',
      settings: {
        optimizer: {
          enabled: true, // Default: false
        },
      },
    },
  },
};
