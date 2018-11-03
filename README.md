# Ethfinex Ledger Subprovider

Use your Ledger Ethfinex app with Web3

## Getting Started

This project is a fork of Ledgerjs's hw-app-eth and web3-subprovider
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Ledger Nano S
* Ethfinex Ledger App
* Yarn

### Installing


**Install**

Install all dependencies
```
yarn
```

**Build**

Ethfinex Ledger Subprovider uses Flow, in order to build app simply run:
```
yarn build
```
To rebuild:
```
yarn rebuild
```

**Watch**

Watch for changes and build:
```
yarn watch
```
**Clean**

To delete all node_modules and builds run
```
yarn clean
```

## Running the tests

Make sure your Ledger is plugged in and you have opened the Ethfinex app on your Ledger

`mocha test`


## License

MIT

## Acknowledgments

* Ledgerjs
* Metamask Subprovider
