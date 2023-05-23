import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router ,Data} from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute
    , private router: Router) { }


  onEdit(){
    //this.router.navigate(['/servers',this.server.id,'edit']); // absolute path
    this.router.navigate(['edit'], {relativeTo : this.route, queryParamsHandling :'preserve'}); // this is relative path
    //preserve is needed in order to preserve the allowEdit value as part of params

  }
  ngOnInit() {

    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      );
    // const id = +this.route.snapshot.params['id']; // Need + because id is number and not a string
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });
  }

}
