require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/_spndd4NP1ceiH698AGo32A3dWKop96A',
      accounts: ['6bb105f8888294321a33fd5fe94cf72ebf729d067dbfdcad08e6b049656e3fc6']
    }
  }
}
