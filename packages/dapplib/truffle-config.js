require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rescue pizza horn install credit frame syrup'; 
let testAccounts = [
"0xa8df3c16999e0eedde092237fa689f64e7de7d6853bf3f05ed53515bb3087d9c",
"0xe3ad4bb8d3bbfd95f5d91746eedb62381c9e8c51a5e57f21342c07c910652f5a",
"0xb9bb8ae9635c0179e63fb7a84fb9f399d291cee7211cb6e82708a7377dfb9773",
"0x0a585cefa98081dddb178acd3ff273fce139d9190d436ec91caf2d9e3bd3a86b",
"0x76fa1f7a9a0a7f0630954451ffa8d331e7c6396defa00cb89ce8643ea2663b30",
"0xa60807a70fc637861f5f724f2bbf44fc9dfbe15bf2abddf89311fcb7827c7d2a",
"0xa2f9d3c1f9321efca92deb2c14b51be5b8a9f9a745af3a51cb451aea493be54d",
"0x171e182ae1ea5c3603cdba2740f17650d6fff5110f42b5fca4a15e4b0d38af80",
"0xaf035c46d5d300e85cb399255dc8f890305dd612f17066f58b50fd1690c7b07c",
"0xd269099ede0e8f424811fa1b91fa6b4754cd7b3acb03ddf0ef910504ed4053f4"
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

