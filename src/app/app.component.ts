import { Component } from '@angular/core';
import { View,EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  template: '<ejs-schedule height="850" width="1250" [eventSettings]="eventObject" [currentView]="setView"></ejs-schedule>',
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-scheduler';
  public setView: View = 'Month';
  public setDate: Date = new Date(2023,10,15);
  public eventObject: EventSettingsModel={
    dataSource:[{
      Subject:"Hello",
      StartTime:new Date(2023,10,29,4,0),
      EndTime: new Date(2023,10,29,6,0)

    }],
    fields:{

      subject:{name:'EventTitle',title:"Enter Title"},
      startTime:{name:'EventStart'},
      endTime:{name:'EventEnd'}
    }

  }
}
