import { Component, Inject, OnInit } from '@angular/core';
import {Web3ServiceService} from '../services/web3-service.service';

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
  dob!: Date ;
  gender: string = 'Gender';
  adhaar_no!: string;
  pan_no!: string;

  // web3Service = new Web3ServiceService();

  constructor() {
    
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

    this.change('documents');
  }

}
