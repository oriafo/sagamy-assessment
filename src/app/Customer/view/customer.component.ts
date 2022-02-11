import { Component, OnInit } from '@angular/core';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import { AppBreadcrumbService } from '../../app.breadcrumb.service';
import { customerData } from 'src/app/Customer/domain/customer.data';
import { CustomerService } from 'src/app/Customer/service/customer.service'
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  //providers: [MessageService]
})

export class CustomerComponent implements OnInit {
  tabMenuItems: MenuItem[];
  selectedCustomer:any;
  customers2:any;
  listAcount: customerData[]

  constructor(private messageService: MessageService, private breadcrumbService: AppBreadcrumbService, private Customerservice:CustomerService) { }

  ngOnInit(): void {
    this.breadcrumbService.setItems([
      { label: 'Customer', routerLink: ['/customer'] }
  ]);

  this.tabMenuItems = [
    {label: 'Account Information'},
    {label: 'Customer Information'}
  ];
    this.listAccount()
}

listAccount(){
this.Customerservice.getAccount().subscribe( data => {
  this.addSuccess("Success!", data.ErrorDetails)
},
error => {
  this.addError("Failed", error.ErrorDetails)
})
}


  addSuccess(title:string,message:string) {
    this.messageService.add({severity:'success', summary:title, detail:message});
  }
  
  addError(title:string,message:string) {
    this.messageService.add({severity:'error', summary:title, detail:message});
  }
  

}
