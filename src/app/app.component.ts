import { Component, OnInit, OnDestroy } from '@angular/core';
import { LogService } from 'tap-utils';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	private counter: number = 0;
	private logSubsrciption: any;
	constructor(private logService: LogService) {
	}

	ngOnInit(): void {
		this.logSubsrciption = this.logService.listenToLogs$.subscribe((val) => {
			console.log(val);
		});
	}

	ngOnDestroy(): void {
		this.logSubsrciption.unsubscribe();
	}

	pushLogs(): void {
		let str = 'button clicked ' + ++this.counter;
		this.logService.log(str);
	}
}
