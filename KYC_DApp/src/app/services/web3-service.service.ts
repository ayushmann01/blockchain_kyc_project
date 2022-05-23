import { Injectable } from '@angular/core';
import Web3 from 'web3';

const contractAddress = "0x98e51f18A442aBB6676387f2f4F1586b50597854";
const ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "setClient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "aadhar",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_fName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_lName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_father",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_dob",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_pan",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_contact",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_adrs",
        "type": "string"
      }
    ],
    "name": "setter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "data",
    "outputs": [
      {
        "internalType": "string",
        "name": "fName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "lname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "father",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "dob",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "pan",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "contact",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "adrs",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getClient",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

declare const window: any;


@Injectable({
  providedIn: 'root'
})
export class Web3ServiceService {
  window: any;
  constructor() { }
  private getAccounts = async () => {
    try {
      return await window.ethereum.request({ method: 'eth_accounts' });
    } catch (e) {
      return [];
    }
  }

  public getClient = async () => {
    try {
            const contract = new window.web3.eth.Contract(
                ABI,
                contractAddress,
            );
            const token = await contract.methods.getClient().call();
            console.log("token",token)
            return token
        
    }
    catch (error: any) {
        const errorMessage = error.message;
        console.log(errorMessage)
   
    }
}

  public openMetamask = async () => {
    window.web3 = new Web3(window.ethereum);
    let addresses = await this.getAccounts();
    console.log("service", addresses)
    if (!addresses.length) {
      try {
        addresses = await window.ethereum.enable();
      } catch (e) {
        return false;
      }
    }
    return addresses.length ? addresses[0] : null;
  };
}
