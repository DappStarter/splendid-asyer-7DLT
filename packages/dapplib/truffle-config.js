require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remain common just clog metal gift'; 
let testAccounts = [
"0x01a4a0138bb8c8517a577bef497a88be3f002b3b294f109c1bd3921bb8206553",
"0x28c20bf141e4fbd113b3de15574596861486be1cb8f5b85d341d10d02f47572b",
"0xa0bb4abb92e09c56a6a9028021b71f9832153a3e4cfef79f13b877310e4e91e1",
"0x98d84fed2521b00ea5df829767a6b346011b9b73347487b55246eafc0ddbb79f",
"0xd65d0f4e458c312a1323dfb358aab8e3720f5359629159ff5efd03942f7c60c2",
"0xf7ba1b1433b585335198a99bb45642b24685abd8bd80cf9ef0029bebfc66e1c7",
"0x8f25b81c7ee1dcaceeafdd666974283e36b088e875cba9c70884365eb42f6a00",
"0x5a0b9de9e5be6fa33a6d41ab467e0599814f9f0871fa2530c4ccec6d11982275",
"0xeff2eb622c0d3aa644575a3db2e77b92686eac3fee5d48d8d12b75fd45a82232",
"0x12d6cf9a0897a47cc1e3f74d50f7c0bdbc33aeae8f8c4adb33e6089786cb46a7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

