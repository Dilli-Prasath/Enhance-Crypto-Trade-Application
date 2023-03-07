require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/T1yJwXWlQnWjLwnturRKS2543-XO8sF6',
      accounts: ['4bc5c4d33afd9c20449ce25de026ac0eabe123537f5f2c7342a743c269d2bdb2'],
    },
  },
};