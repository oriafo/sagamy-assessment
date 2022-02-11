import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component';
import {MegaMenuItem, MenuItem} from 'primeng/api';

@Component({
    selector: 'app-menu',
    template: `
        <ul class="layout-menu">
        <p-panelMenu [model]="panelMenuItems"></p-panelMenu>
        </ul>
    `
})
export class AppMenuComponent implements OnInit {

    panelMenuItems: MenuItem[];
    model: any[];

    constructor(public app: AppComponent) {}

    ngOnInit() {

        this.panelMenuItems = [
            {
                label: 'Accounts',
                        items: [ 
                        {
                            label: 'Customer',
                            icon: 'pi pi-fw pi-check-square',
                            routerLink: ['customer']
                        },    
                        {
                                label: 'General Ledger',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Standing Order',
                                icon: 'pi pi-fw pi-copy'
                            },
                            {
                                label: 'Teller / Till',
                                icon: 'pi pi-fw pi-exclamation-circle'
                            },
                            {
                                label: 'Share Capital',
                                icon: 'pi pi-fw pi-mobile',
                            },
                            {
                                label: 'Budget',
                                icon: 'pi pi-fw pi-plus'
                            },
                            {
                                label: 'Risk Management',
                                icon: 'pi pi-fw pi-copy'
                            },
                            {
                                label: 'Fixed Assets',
                                icon: 'pi pi-fw pi-table',
                            },
                            {
                                label: 'Human Resources',
                                icon: 'pi pi-fw pi-clone'
                            },
                            {
                                label: 'End of Period',
                                icon: 'pi pi-fw pi-tablet'
                            },
                        ]
            },
            {
                label: 'Orders',
                items: [
                  
                ]
            },
            {
                label: 'Shipments',
                items: [
                  
                ]
            },
            {
                label: 'Profile',
                items: [
                  
                ]
            }
        ]; 
        this.model = [
            // {
            //     label: 'Favorites', icon: 'pi pi-fw pi-home',
            //     items: [
            //         {label: 'Dashboard Sales', icon: 'pi pi-fw pi-home', routerLink: ['/'], badge: '4', badgeClass: 'p-badge-info'},
            //         //{label: 'Dashboard Analytics', icon: 'pi pi-fw pi-home',
            //           //  routerLink: ['/favorites/dashboardanalytics'], badge: '2', badgeClass: 'p-badge-success'}
            //     ]
            // },
            {
                items: [
                    
                   // {label: 'Accounts',  routerLink: ['/uikit']},
                    {label: 'Accounts',  },
                    {label: 'Customer', icon: 'pi pi-fw pi-check-square',routerLink: ['customer'],  badgeClass: 'p-badge-danger'},
                    {label: 'General Ledger', icon: 'pi pi-fw pi-bookmark' },
                    {label: 'Standing Order', icon: 'pi pi-fw pi-exclamation-circle'},
                    {label: 'Teller / Till', icon: 'pi pi-fw pi-mobile',  class: 'rotated-icon'},
                    {label: 'Share Capital', icon: 'pi pi-fw pi-table',   badgeClass: 'p-badge-help'},
                    {label: 'Budget', icon: 'pi pi-fw pi-list', },
                    {label: 'Risk Management', icon: 'pi pi-fw pi-share-alt'},
                    {label: 'Fixed Assets', icon: 'pi pi-fw pi-tablet'},
                    {label: 'Human Resource', icon: 'pi pi-fw pi-clone'},
                    {label: 'End of Period', icon: 'pi pi-fw pi-image'},
                    {label: 'Reports'},
                    {label: 'Setup',  },
                ]
            },
            // {
            //     label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['utilities'],
            //     items: [
            //         {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'], badge: '6', badgeClass: 'p-badge-warning'},
            //         {label: 'Display', icon: 'pi pi-fw pi-desktop', routerLink: ['utilities/display']},
            //         {label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation']},
            //         {label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox']},
            //         {label: 'Icons', icon: 'pi pi-fw pi-search', routerLink: ['utilities/icons']},
            //         {label: 'Text', icon: 'pi pi-fw pi-pencil', routerLink: ['utilities/text']},
            //         {label: 'Widgets', icon: 'pi pi-fw pi-star-o', routerLink: ['utilities/widgets']},
            //         {label: 'Grid System', icon: 'pi pi-fw pi-th-large', routerLink: ['utilities/grid']},
            //         {label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', routerLink: ['utilities/spacing']},
            //         {label: 'Typography', icon: 'pi pi-fw pi-align-center', routerLink: ['utilities/typography']}
            //     ]
            // },
            // {
            //     label: 'Pages', icon: 'pi pi-fw pi-briefcase', routerLink: ['/pages'],
            //     items: [
            //         {label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']},
            //         {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']},
            //         {label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']},
            //         {
            //             label: 'Landing', icon: 'pi pi-fw pi-globe', badge: '2', badgeClass: 'p-badge-warning',
            //             items: [
            //                 {label: 'Static', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank'},
            //                 {label: 'Component', icon: 'pi pi-fw pi-globe', routerLink: ['/landing']}
            //             ]
            //         },
            //         {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login']},
            //         {label: 'Invoice', icon: 'pi pi-fw pi-dollar', routerLink: ['/pages/invoice']},
            //         {label: 'Help', icon: 'pi pi-fw pi-question-circle', routerLink: ['/pages/help']},
            //         {label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['/error']},
            //         {label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/notfound']},
            //         {label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['/access']},
            //         {label: 'Contact Us', icon: 'pi pi-fw pi-pencil', routerLink: ['/contactus']},
            //         {label: 'Empty', icon: 'pi pi-fw pi-circle-off', routerLink: ['/pages/empty']}
            //     ]
            // },
            // {
            //     label: 'Hierarchy', icon: 'pi pi-fw pi-align-left',
            //     items: [
            //         {
            //             label: 'Submenu 1', icon: 'pi pi-fw pi-align-left',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-align-left',
            //                     items: [
            //                         {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left'},
            //                         {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left'},
            //                         {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left'},
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-align-left',
            //                     items: [
            //                         {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left'}
            //                     ]
            //                 },
            //             ]
            //         },
            //         {
            //             label: 'Submenu 2', icon: 'pi pi-fw pi-align-left',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-align-left',
            //                     items: [
            //                         {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left'},
            //                         {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left'},
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-align-left',
            //                     items: [
            //                         {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left'},
            //                     ]
            //                 },
            //             ]
            //         }
            //     ]
            // },
            // {
            //     label: 'Start', icon: 'pi pi-fw pi-download',
            //     items: [
            //         {
            //             label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', url: ['https://www.primefaces.org/store']
            //         },
            //         {
            //             label: 'Documentation', icon: 'pi pi-fw pi-info-circle', routerLink: ['/documentation']
            //         }
            //     ]
            // }
        ];
    }
}
