import { Component, OnDestroy, OnInit } from '@angular/core';
import{ interval, Observable, Subscribable, Subscription} from 'rxjs';
import { map , filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription : Subscription;

  constructor() { }

  ngOnInit() {

    // this.firstObsSubscription = interval(1000).subscribe( count => {
    //   console.log("count",count);
    // }) // interval is an observable
    // Need to store the subscription

    // Create a custom observable

    //RxJs provides an argument to anynomous function
    const customIntervalObservable = Observable.create(observer =>{
      let count = 0;
      setInterval(() =>{
        observer.next(count); // Emit a new value , error() - throw a new error , complete - to indicate it is done
        
        if(count == 2){
          observer.complete(); // when it reaches 2 , observable comes to a halt
        }

        if(count > 3){
          observer.error(new Error('count is greater than 3'));
        }
        count++;
      },1000)
    });
 

    // customIntervalObservable.pipe(map(( data:number) => {

    //   return 'Round: '+(data+1);

    // })); // This is just for information



    this.firstObsSubscription = customIntervalObservable.pipe(filter( data=>{
      return data>0;
    }),map(( data:number) => {

      return 'Round: '+(data+1);

    })).subscribe( data =>{
      console.log('data',data)
    },error =>{
      alert(error.message)
    },()=>{
      console.log('Completed!')
      alert('Completed') // once observable is completed , count reaches 2 
    }

    )

  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
    //This is essential to prevent memory leaks
    //User defined obsrevables need to have the subscription stored
    // And destroyed as opposed to angular observables which angular takes care of such as params
  }

}
