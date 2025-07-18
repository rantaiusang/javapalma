// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract JAVAPALMA is ERC20, Ownable {
    uint256 public constant MAX_SUPPLY = 50_000_000 * 1e18;
    mapping(address => bool) public hasClaimed;

    constructor() ERC20("JAVAPALMA", "JAVAPALMA") Ownable(msg.sender) {
        _mint(msg.sender, MAX_SUPPLY);
    }

    function claim() external {
        require(!hasClaimed[msg.sender], "Sudah klaim");
        require(balanceOf(owner()) >= 10 * 1e18, "Stok habis");

        hasClaimed[msg.sender] = true;
        _transfer(owner(), msg.sender, 10 * 1e18);
    }
}
