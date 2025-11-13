Quick and dirty tool for inspecting the block number and block hashes that are available in the EVM

#### Setup ####

Set the private key of your ethereum account:

```bash
npx hardhat keystore set ARCHIVIST_TESTNET_PRIVATE_KEY <key>
```

#### Deploy contract ####

```bash
npx hardhat deploy --network <network>
```

#### Running ####

```bash
npx hardhat run scripts/print-block-info.js --network <network>
```

Where network is `archivistTestnet` or `archivistDevnet`.
