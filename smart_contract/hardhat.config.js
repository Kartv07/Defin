// https://eth-goerli.g.alchemy.com/v2/RgLgyIDysJgbJlho8h1jhhPu8BP5GC8V

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/RgLgyIDysJgbJlho8h1jhhPu8BP5GC8V',
      accounts: [ '5acaafa1b7882e6911c30419535e99b2c32ebefef6f79fe5f75abef5fbb1537d' ]
    }
  }
}