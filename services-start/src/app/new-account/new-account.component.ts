import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../account/accounts.service';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService : LoggingService , private accountsService : AccountsService){
   // loggingService = new LoggingService();

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    this.accountsService.addAcount(accountName,accountStatus);

    //console.log('A server status changed, new status: ' + accountStatus);

    // this.loggingService.logStatusChange(accountStatus);
  }
}
