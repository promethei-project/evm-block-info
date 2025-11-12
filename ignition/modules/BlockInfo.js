import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"

export default buildModule("BlockInfoModule", (module) => {
  return { contract: module.contract("BlockInfo") };
});
