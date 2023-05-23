import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

interface Server {
    id : number ;
    name : string ;
    status : string ;
}

@Injectable()
export class ServerResolver  implements Resolve<Server>{

    constructor(private serversservice : ServersService){

    }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serversservice.getServer(+route.params['id']);
  }

}