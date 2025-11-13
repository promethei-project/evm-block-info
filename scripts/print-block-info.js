import { network } from "hardhat"

const { ethers } = await network.connect()

const address = "0x95658FdA29e3b547107c95c11dD5e4a1A034C4AB"
const contract = await ethers.getContractAt("BlockInfo", address)

while (true) {
  let blockInfo = await contract.blockInfo()
  console.log("block number: " + blockInfo[0])
  console.log("block hashes: " + blockInfo[1].join())
  await new Promise(r => setTimeout(r, 12000))
}
