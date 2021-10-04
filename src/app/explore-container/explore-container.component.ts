import { Component, OnInit, Input } from '@angular/core';

declare var SMS: any;

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() { }
  enviarCodigoSms() {
    if (SMS) {
      SMS.sendSMS("17981622379", "Test Message", () => {
        console.log('Message sent successfully');
      }, (error) => {
        console.error(error);
      });
    }
  }
}
