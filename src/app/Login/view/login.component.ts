import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/Login/domain/login.data';
import { LoginService } from 'src/app/Login/service/login.service';
import { Router, RouterLink } from '@angular/router';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  //providers: [MessageService]

})
export class LoginComponent implements OnInit {


  loginVariable = {} as Login;
  branchOption:any[];
  holder = {} as Login;
  

  constructor(private messageService: MessageService, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.branch()
  }

  // ngAfterInit(){
  //   this.addSuccess("HEY","THERE")
  // }

  branch(){
    this.loginService.getbranch().subscribe(data =>{
      this.branchOption = data.Payload
    console.log("branch", this.branchOption)
    })
  }


  Login(){
    this.loginVariable.BranchId = this.holder.$id;
    this.loginVariable.AppMode = "API";
    //console.log(typeof(this.loginVariable))
    this.loginService.cleintLogint(this.loginVariable).subscribe(
      data => {
        console.log(data)
        if(!data){
          this.loginService.loggedIn = false;
          this.addError("Oops!",data.ErrorDetails);
          this.router.navigate(['']);
        }
        if(data.ResponseCode == 1){
          this.addError("Oops!", data.ErrorDetails);
          this.router.navigate(['']);
          this.loginService.loggedIn = false;
  
        }
        else{
        this.loadInitParam(data);        
        this.loginService.loggedIn = true;
        setTimeout(() => {
          this.router.navigate(['dashboard']);
        }, 100);
        this.addSuccess("Success!", "Login Successfully")
        }
      },
      error => {
        if(error.toString() == '403'){
        this.loginService.loggedIn = false;
        this.addError("Oops!", error);
      }
      else if(error.toString() == '0'){
        this.loginService.loggedIn = false;
        this.addError("Oops!", error);
      }
      }
      );
    }
      
      
      
      
    // addSuccess(title:string,message:string) {
    //   this.messageService.add({severity:'success', summary:title, detail:message});
    // }
    // addError(title:string,message:string) {
    //   this.messageService.add({severity:'error', summary:title, detail:message});
    // }
      
      
      
  //     data => {
  //       console.log("data", data)
  //       this.loadInitParam(data)
  //       //console.log("here", sessionStorage.getItem("SessionId"))
  //       this.router.navigate(['/dashboard'])
  //       this.loggedIn = true;
  //   }, 
  //     error => {
  //       console.log("error", error)
  //   }
  //   );
  // }

  loadInitParam(data){
    sessionStorage.setItem('SessionId', data.Payload["SessionId"]);
    sessionStorage.setItem('CustomerId', data.Payload.CustomerId);
    sessionStorage.setItem('Username', data.Payload.Username);
    sessionStorage.setItem('Username', data.Payload.$id);
    this.loginService.sessionVariable = data.Payload.SessionId
    //console.log(this.loginService.sessionVariable)
    //console.log(typeof(this.loginService.sessionVariable))
    //console.log("storage:",sessionStorage.getItem("Sessionid"))
    // sessionStorage.setItem('token',data.token);
    //sessionStorage.setItem('userinformation',JSON.stringify(data.user.usersinformation));
    // localStorage.setItem('token2',data.token);
    // sessionStorage['userinformation'] = JSON.stringify(data.user.usersinformation);

    // console.log("Got here as "+JSON.parse(sessionStorage['userinformation']));
    
    //this.pp = JSON.parse(sessionStorage['userinformation']);
  }

addSuccess(title:string,message:string) {
  //console.log("message display now now")
  this.messageService.add({severity:'success', summary:title, detail:message});
}

addError(title:string,message:string) {
  this.messageService.add({severity:'error', summary:title, detail:message});
}

}
