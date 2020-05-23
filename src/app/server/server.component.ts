import { Component } from '@angular/core';

@Component({
  selector: 'app-server', // unique name
  templateUrl: './server.component.html',
})
export class ServerComponent {
  // alternate syntax: name: type = value; i.e. serverId: number = 10;
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
