require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/gk20JgvNA3rXmXlaYxKDqUXPhmgxEfrR',
      accounts: [ 'cac67f4194c721939448fbd0c2b2cdab83580f58c2ca63c2f50fdebe8cdb9083' ]
    }
  }
}