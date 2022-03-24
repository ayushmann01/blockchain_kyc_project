import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
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
