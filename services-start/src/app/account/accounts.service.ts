import { Injectable } from "@angular/core";
import { LoggingService } from "../logging.service";

@Injectable() // Needed because LoggingService needs to be injected into accounts service
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      constructor(private loggingService : LoggingService){

    }

      addAcount( name : string , status : string){

        this.accounts.push({ name , status});
        this.loggingService.logStatusChange(status);


      }

      updateAccount(id : number , status : string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);

      }
}