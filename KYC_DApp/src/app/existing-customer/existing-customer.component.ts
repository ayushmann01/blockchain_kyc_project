import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3-service.service';

@Component({
  selector: 'app-existing-customer',
  templateUrl: './existing-customer.component.html',
  styleUrls: ['./existing-customer.component.css']
})
export class ExistingCustomerComponent implements OnInit {

  constructor(private web3Service: Web3Service) { }

  ngOnInit(): void {

    this.web3Service.getUserKyc().then(res => {
      console.log(res);
    });
  }

}
