// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract BlockInfo {
  function blockInfo() public view returns (uint256, bytes32[256] memory) {
    bytes32[256] memory hashes;
    for (uint256 i=0; i<256; i++) {
      hashes[i] = blockhash(block.number-256+i);
    }
    return (block.number, hashes);
  }
}
