import { DashboardPageComponent } from './../dashboard-page/dashboard-page.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  selection: string = "";

  constructor(private dashboardPageComponent: DashboardPageComponent) { }

  ngOnInit(): void {
    this.selectOption("btnAll");
  }

  selectOption(btn: string): void {
    btn == "btnAll" ? this.selectAll() : (btn == "btnToday" ? this.selectToday() : this.selectAll());
  }

  selectAll(){
    this.selection = "all";
    this.dashboardPageComponent.fetchStocks();
  }

  selectToday(){
    this.selection = "today";
    this.dashboardPageComponent.fetchTodayStocks();
  }

}
