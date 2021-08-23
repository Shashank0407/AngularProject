import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
import { User } from './my-component/my-component.component';

@Injectable({ providedIn: 'root' })
export class DataService {
    // private subject = new Subject<any>();

    // sendData(user : User) {
    //     this.subject.next({user});
    // }

    // getData() : Observable<any> {
    //     return this.subject.asObservable();
    // }
    user : User = {};
}