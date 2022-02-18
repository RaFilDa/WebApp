import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }
  showClients() {
    this.router.navigate(['clients'], {relativeTo: this.route})
  }
  showConfigs() {
    this.router.navigate(['configs'], {relativeTo: this.route})
  }
  showReports() {
    this.router.navigate(['reports'], {relativeTo: this.route})
  }
}
