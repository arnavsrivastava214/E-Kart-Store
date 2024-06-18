import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private _router: Router){}
 
  isLoggedIn:any;

  pushToLocalStorageArr:any = [];
  inputobj:any = {
     name:'',
     email:'',
     password:''
   };
  ngOnInit(){
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
  
  
    }
     
     getInputValue(){
       this.pushToLocalStorageArr.push(this.inputobj);
       localStorage.setItem ("userdata",JSON.stringify(this.pushToLocalStorageArr))
       this.inputobj = JSON.parse(JSON.stringify({}));
     } 
     
     saveLocalData:any
     isLoggedIn1:any;
     inputobj1:any = {
       email:'',
       password:''
     }







     getInputValue1(){
      this.saveLocalData =  JSON.parse(<any>localStorage.getItem("userdata"));
      this.saveLocalData.forEach((element:any)  => {
       console.log(element);
       
       if(element.email === this.inputobj1.email && element.password === this.inputobj1.password){
         this._router.navigate(['']);
         alert("you are succesfully logged in ")
         this.isLoggedIn1 = true;
         localStorage.setItem("isLoggedIn",JSON.stringify(true));
         setTimeout(() => {
           location.reload();             //page refrsh code
         }, 0);
       }else{
         console.log("user not found")
       }
      });
    }


    clearLocalStoreClear(){
      localStorage.removeItem("isLoggedIn")
      this.isLoggedIn1 = false
      location.reload();

        


      }
    }
