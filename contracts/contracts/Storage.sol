// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.6.0 < 0.9.0;

contract SimpleStorage {
    uint256 private unsigned_number ;
    string str = "string";
    bool isBool = true;
    int256 signed_number = -5;
    address walletAddress = 0xAD5C046532a609238D378888B091156bfe9D1299;
    
    // user defined using structs
    struct People {
        uint256 id;
        string name;
    }
    
    // creating a People
    // People public person = People({id : 1, name: "ayushman"});

    // People dynamic-array
    People[] public peoples;
    
    // mapping data structure is similar to dictionary with only 1 value per key
    mapping(uint256 => string) public idToName;

    function addPeople(uint256 _id, string memory _name) public {
        peoples.push(People(_id, _name));
        idToName[_id] = _name;
    }
    
    function store(uint256 _num) public {
        unsigned_number = _num;
    }
    
    function retrieve() public view returns(uint256) {
        return unsigned_number;
    }
    
}