import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from '../../app.breadcrumb.service';

@Component({
  selector: 'app-customer.view',
  templateUrl: './customer.view.component.html',
  styleUrls: ['./customer.view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  constructor(private breadcrumbService: AppBreadcrumbService) { 
    this.breadcrumbService.setItems([
    { label: 'Customer', routerLink: ['/customer'] },
    { label: 'view', routerLink: ['/customer/view'] }
]);}

  ngOnInit(): void {
  }

}
