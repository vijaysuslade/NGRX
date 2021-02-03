import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Customer } from '../customer.model';
import *  as customerActions from '../state/customer.actions'
import  * as customerReducers from '../state/customer.reducer'

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerForm: FormGroup;

  constructor( private fb: FormBuilder, private store: Store<customerReducers.AppState>) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      address: ["", Validators.required],
      membership: ["", Validators.required]
    });
  }

  createCustomer() {
    const newCustomer: Customer = {
      name: this.customerForm.get("name").value,
      phone: this.customerForm.get("phone").value,
      address: this.customerForm.get("address").value,
      membership: this.customerForm.get("membership").value
    };

    this.store.dispatch(new customerActions.CreateCustomer(newCustomer));

    this.customerForm.reset();
  }

}
