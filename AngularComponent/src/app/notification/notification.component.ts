import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="displayNotification">
               <p>This website uses cookies to provide a better user experience</p>
               <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
             </div>`,
  styles: [
    ".notification-div { margin: 10px 0; padding: 10px 20px; background-color: red; }",
    "p { font-size: 30px; }",
    ".close { display: flex; justify-content: flex-end; padding: 5px; }",
    ".close button { background-color: transparent; border: none; font-size: 18px; font-weight: bold; color: #333; cursor: pointer; padding: 5px 10px; border-radius: 3px; transition: background-color 0.3s ease, color 0.3s ease; }",
    ".close button:hover { background-color: #f0f0f0; color: #d9534f; }",
    ".close button:focus { outline: none; box-shadow: 0 0 3px rgba(217, 83, 79, 0.8); }"
  ]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayNotification: boolean = false;
  closeNotification(){
    this.displayNotification=true;
  }}
