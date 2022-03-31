pragma solidity ^0.5.17;

contract Ownable {
    
    address payable internal owner;

    modifier onlyOwner {
         require(msg.sender == owner);
         _;// underscore means run the function
     }
    constructor() public {
         owner = msg.sender;
         
     }
}