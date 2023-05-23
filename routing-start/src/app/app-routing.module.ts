import {NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServersService } from './servers/servers.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';


const appRoutes : Routes =[

    {path : '', component : HomeComponent}, // Maps to the path localhost:4200/home
    {path : 'users', component : UsersComponent , children :[ 
    {path : ':id/:name', component : UserComponent}, // Maps to the path localhost:4200/users with a specific user info
    ]}, // Maps to the path localhost:4200/users
    {path : 'servers', 
     canActivateChild :[AuthGuard], component : ServersComponent , children :[
    {path : ':id', component : ServerComponent, resolve : {server : ServerResolver}}, // Maps to the path localhost:4200/servers
    {path : ':id/edit', component : EditServerComponent , 
    canDeactivate : [CanDeactivateGuard]}]}, // Maps to the path localhost:4200/servers]}, // Maps to the path localhost:4200/servers  
    // {path : 'not-found', component : PageNotFoundComponent},
    {path : 'not-found', component : ErrorPageComponent, data :{message :'Error : Page Not Found !'}},
    // {path : 'something', redirectTo : '/not-found'} 
    {path : '**', redirectTo : '/not-found'} // Generic Route should be the last , If nothing else matches
  ]; // Array for multiple routes
     // Structure for path 

@NgModule({
    
    imports: [
      RouterModule.forRoot(appRoutes) // Register the routes informing  angular 
    ],
    exports: [RouterModule]
  })
  
export class AppRoutingModule{

}