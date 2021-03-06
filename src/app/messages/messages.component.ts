import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // The `messageService` is *public* because we're binding it to the DOM
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
