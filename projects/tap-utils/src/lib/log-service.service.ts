import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LogService {
	logValue: BehaviorSubject<string> ;
	public listenToLogs$: Observable<string>;

  constructor() {
  	this.logValue = new BehaviorSubject<string>('');
  	this.listenToLogs$ = this.logValue.asObservable();
  }

  log(str : string) : void {
  	this.logValue.next(str);
  }
}
