/* eslint-env mocha */
const efxLedgerWeb3 = require('../')
const assert = require('assert')
const Web3 = require('web3')

describe('Ethfinex Ledger Web3', () => {
  let web3
  before(async () => {
    web3 = await efxLedgerWeb3(Web3, {
      rpcUrl: 'http://192.168.255.6:8545',
      networkId: 1
    })
  })
  it('Connects to RPC server', async () => {
    let height = await web3.eth.getBlockNumber()
    assert.ok(height > 1000)
  })

  it('Ledger is able to sign', async () => {
    const accounts = await web3.eth.getAccounts()
    const signed = await web3.eth.sign('abcd', accounts[0])
    assert.ok(signed.substr(0, 2) === '0x')
  })
})
