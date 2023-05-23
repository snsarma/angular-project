import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,private router : Router,
    private route : ActivatedRoute) { }

  onReload(){

   // this.router.navigate(['/servers']); // Navigate to the servers component/page
    // this.router.navigate(['servers'], {relativeTo : this.route}); // Navigate to the url relative to the actiavted route


  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
