import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './demo/view/dashboard.component';
import {DashboardAnalyticsComponent} from './demo/view/dashboardanalytics.component';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {AppMainComponent} from './app.main.component';
import {LoginComponent} from './Login/view/login.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import { AuthGuardService } from 'src/app/auth-guard.service';
import { CustomerComponent } from './Customer/view/customer.component';
import { CustomerViewComponent } from './Customer/view/customer.view.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            {path: 'login', component: LoginComponent},
            {path: 'login', component: AppMainComponent, canActivate: [AuthGuardService],
                children: [
                    {path: 'dashboard', component: DashboardComponent},
                    {path: 'customer', component: CustomerComponent},
                    {path: 'customer/view', component: CustomerViewComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'documentation', component: DocumentationComponent},
            { path: '**', component: LoginComponent },

                ]
            },
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
