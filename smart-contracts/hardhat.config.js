
require ("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity : "0.8.0",
  networks : {
    ropsten: {
      url:"https://eth-ropsten.alchemyapi.io/v2/6ASacc3bGxsVKXRb2xb-508z7STVSDAn",
      accounts : ['c07451557403be314968fe3ebe0de38b96595662e4554eb2e9d1eb9bf055547a']
    }
  }
}