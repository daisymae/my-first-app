import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // element style selector - most common use
  // selector: '[app-servers]', // [] makes it an attribute selector
  // selector: '.app-servers', // '.' makes it a class selector
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServer(event: Event) {
    console.log(event);
    // this syntax used to be (<HTMLInputElement>event.target).value; 'as' syntax is cleaner
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
