import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'AngularServices';
  todaydate;

  constructor(private myService: MyserviceService) {

  }

  ngOnInit() {
    this.todaydate = this.myService.todayDate();
  }
}
