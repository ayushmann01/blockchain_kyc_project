import { Component, Inject, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3-service.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  currentForm: string = 'details';

  firstName: string = "";
  lastname: string = "";
  mobile_no: string = "";
  fatherName: string = "";
  dob!: Date;
  gender: string = 'Gender';
  adhaar_no!: string;
  pan_no!: string;

  // web3Service = new Web3ServiceService();

  constructor(private web3Servide: Web3Service) {

  }

  ngOnInit(): void {
    // this.web3Service.getClientData()
    //   .then((client: any) => console.log(client));
  }

  change(state: string) {
    this.currentForm = state;
  }

  submitDetails() {
    console.log(
      this.firstName,
      this.lastname,
      this.fatherName,
      this.gender,
      this.dob,
      this.mobile_no
    );

    this.web3Servide.setClient().then(res => {
      console.log(res);
    });

    this.change('documents');
  }


  submitDocuments() {
    console.log(this.adhaar_no, this.pan_no);
  }


  openMetaMask() {
    this.web3Servide.openMetamask().then((res) => {
      console.log('metamask runs: ', res);
    });
  }

}

class VerhoeffAlgorithm {
  d =
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
      [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
      [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
      [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
      [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
      [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
      [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
      [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
      [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    ];
  p =
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
      [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
      [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
      [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
      [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
      [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
      [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
    ];
  inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

  validateVerhoeff(num: string) {
    var c = 0;
    const myArray = this.StringToReversedIntArray(num);
    for (var i = 0; i < myArray.length; i++) {
      c = this.d[c][this.p[(i % 8)][myArray[i]]];
    }

    return (c == 0);
  }
  private StringToReversedIntArray(num: string) {
    var myArray = [];
    for (var i = 0; i < num.length; i++) {
      myArray[i] = parseInt(num.substring(i, i + 1));
    }
    myArray = this.Reverse(myArray);
    return myArray;
  }
  private Reverse(myArray: any) {
    var reversed = [];
    for (var i = 0; i < myArray.length; i++) {
      reversed[i] = myArray[myArray.length - (i + 1)];
    }
    return reversed;
  }
}
