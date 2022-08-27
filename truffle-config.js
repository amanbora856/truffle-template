require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = process.env.MNEMONIC;
module.exports = {
    networks: {
        // Local Dev Setup

        development: {
            host: "127.0.0.1", // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: "*", // Any network (default: none)
            // gas: 3000000, // Limit the gas to x number.
            gasPrice: 25000000000, // 25 gwei (in wei) (default: 100 gwei)
            skipDryRun: true
        },

        // Mainnets

        ETH_mainnet: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic,
                    process.env.ETH_MAINNET_NOWNODE + process.env.NOWNODES_API
                ),
            network_id: 1, // ETH's id
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
            // gas: 3000000, // Limit the gas to x number.
            gasPrice: 25000000000, // 25 gwei (in wei) (default: 100 gwei)
            skipDryRun: false // Skip dry run before migrations? (default: false for public nets )
        },

        BSC_mainnet: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic,
                    process.env.BSC_MAINNET_NOWNODE + process.env.NOWNODES_API
                ),
            network_id: 56, // BSC's id
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
            // gas: 3000000, // Limit the gas to x number.
            gasPrice: 25000000000, // 25 gwei (in wei) (default: 100 gwei)
            skipDryRun: false // Skip dry run before migrations? (default: false for public nets )
        },

        SmartBCH_mainnet: {
            provider: () =>
                new HDWalletProvider(mnemonic, process.env.SMARTBSCH_MAINNET),
            network_id: 10000, // SmartBCH's id
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
            // gas: 3000000, // Limit the gas to x number.
            gasPrice: 25000000000, // 25 gwei (in wei) (default: 100 gwei)
            skipDryRun: false // Skip dry run before migrations? (default: false for public nets )
        },

        Polygon_mainnet: {
            provider: () =>
                new HDWalletProvider(mnemonic, process.env.PLYGON_MAINNET),
            network_id: 137, // Polygon's id
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
            // gas: 3000000, // Limit the gas to x number.
            gasPrice: 25000000000, // 25 gwei (in wei) (default: 100 gwei)
            skipDryRun: false // Skip dry run before migrations? (default: false for public nets )
        },

        // Testnets

        ETH_testnet: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic,
                    process.env.ETH_TESTNET_NOWNODE + process.env.NOWNODES_API
                ),
            network_id: 3, // ETH's id
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
            // gas: 3000000, // Limit the gas to x number.
            gasPrice: 25000000000, // 25 gwei (in wei) (default: 100 gwei)
            skipDryRun: false // Skip dry run before migrations? (default: false for public nets )
        },

        BSC_testnet: {
            provider: () =>
                new HDWalletProvider(mnemonic, process.env.BSC_TESTNET_NOWNODE),
            network_id: 97, // BSC's id
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
            // gas: 3000000, // Limit the gas to x number.
            gasPrice: 25000000000, // 25 gwei (in wei) (default: 100 gwei)
            skipDryRun: false // Skip dry run before migrations? (default: false for public nets )
        },

        SmartBCH_testnet: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic,
                    process.env.SMARTBCH_TESTNET_NOWNODE
                ),
            network_id: 10001, // SmartBCH's id
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
            // gas: 3000000, // Limit the gas to x number.
            gasPrice: 25000000000, // 25 gwei (in wei) (default: 100 gwei)
            skipDryRun: false // Skip dry run before migrations? (default: false for public nets )
        },

        Polygon_testnet: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic,
                    process.env.POLYGON_TESTNET_NOWNODE
                ),
            network_id: 80001, // Polygon's id
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
            // gas: 3000000, // Limit the gas to x number.
            gasPrice: 25000000000, // 25 gwei (in wei) (default: 100 gwei)
            skipDryRun: false // Skip dry run before migrations? (default: false for public nets )
        }
    },

    api_keys: {
        bscscan: process.env.BSCSCAN_API,
        etherscan: process.env.ETHSCAN_API,
        polygonscan: process.env.POLYGON_API
    },

    plugins: [
    "solidity-coverage",
    "truffle-contract-size",
    "truffle-plugin-verify",
  ],

    // Set default mocha options here, use special reporters etc.
    mocha: {
        // timeout: 100000
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "0.8.13", // Fetch exact version from solc-bin (default: truffle's version)
            //       docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: {
                // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 200
                }
                //        evmVersion: "byzantium"
            }
        }
    }

    // Truffle DB is currently disabled by default; to enable it, change enabled:
    // false to enabled: true. The default storage location can also be
    // overridden by specifying the adapter settings, as shown in the commented code below.
    //
    // NOTE: It is not possible to migrate your contracts to truffle DB and you should
    // make a backup of your artifacts to a safe location before enabling this feature.
    //
    // After you backed up your artifacts you can utilize db by running migrate as follows:
    // $ truffle migrate --reset --compile-all
    //
    // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
    // }
};
