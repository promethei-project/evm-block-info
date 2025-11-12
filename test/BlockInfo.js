import { expect } from "chai"
import { network } from "hardhat"

const { ethers, networkHelpers } = await network.connect()

describe("block info", function () {

  beforeEach(async function () {
    await networkHelpers.mine(256)
  })

  it("returns the block number and block hashes", async function () {
    const contract = await ethers.deployContract("BlockInfo")
    const info = await contract.blockInfo()
    const blockNumber = info[0]
    expect(blockNumber).to.equal(await ethers.provider.getBlockNumber())
    for (let i = 0; i < 256; i++) {
      let hash = info[1][i]
      let block = await ethers.provider.getBlock(info[0]-BigInt(256)+BigInt(i))
      expect(hash).to.equal(block.hash)
    }
  })
})