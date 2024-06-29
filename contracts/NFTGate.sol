//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFTGate is ERC721URIStorage {
    constructor() ERC721("GameItem","ITM"){}

    uint256 private _tokenIds;

    function awardItem(address player, string memory tokenURI) public returns(uint256){
        uint256 newItemId = _tokenIds;
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds++;
        return newItemId;
    }
}

//0xF7CAF7C5891129024f84a1b7ca23849D5A5dA024