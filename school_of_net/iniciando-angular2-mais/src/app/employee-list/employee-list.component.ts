import { Component, OnInit } from '@angular/core';
import employees, { Employee } from "../employees";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  lista:Employee[] = employees;

  constructor() { }
  
  ngOnInit() {
  }

}
