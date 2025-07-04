// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PalmaToken {
    mapping(address => uint256) public balances;

    event Invest(address indexed user, uint256 amount);

    function invest() public payable {
        require(msg.value > 0, "Nilai harus > 0");
        balances[msg.sender] += msg.value;
        emit Invest(msg.sender, msg.value);
    }

    function getBalance(address user) public view returns (uint256) {
        return balances[user];
    }
}
