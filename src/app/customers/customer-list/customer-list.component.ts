import { Component, OnInit } from '@angular/core';
import {Store, State,select} from "@ngrx/store";
import {Observable} from "rxjs";

import * as customerAction  from "../state/customer.actions";
import * as fromCustomer  from '../state/customer.reducer';
import {Customer} from "../customer.model";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<Customer[]>;
  error$: Observable<String>;

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new customerAction.LoadCustomers())
    // this.store.subscribe(state=>(this.customers=state.customers.customers))
       this.customers$ = this.store.pipe(select(fromCustomer.getCustomers));
       this.error$ = this.store.pipe(select(fromCustomer.getError));
    
  }
  editCustomer(customer){
    this.store.dispatch(new customerAction.LoadCustomer(customer.id))
  }
  deleteCustomer(customer){
     this.store.dispatch(new customerAction.DeleteCustomer(customer.id))
  }

}
