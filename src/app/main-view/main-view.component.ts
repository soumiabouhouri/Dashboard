import { Component, OnInit } from '@angular/core';
import {CronJobs} from '../CronJobs';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  cronJobs: CronJobs[] = [
    { id: 11, name: 'Cron Model 1' },
    { id: 12, name: 'Cron Model 2' },
    { id: 13, name: 'Cron Model 3' },
    { id: 14, name: 'Cron Model 4' },
    { id: 15, name: 'Cron Model 5' },
    { id: 16, name: 'Cron Model 6' },
    { id: 17, name: 'Cron Model 7' },
    { id: 18, name: 'Cron Model 8' },
    { id: 19, name: 'Cron Model 9' },
    { id: 20, name: 'Cron Model 10' }
    ];

  constructor() { }

  ngOnInit(): void {

  }

  SendToQueue(job: CronJobs): void {
    alert('job was sent');
  }
}
