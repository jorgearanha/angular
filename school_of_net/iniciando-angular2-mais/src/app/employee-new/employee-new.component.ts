import { Component, OnInit } from '@angular/core';
import employees, { Employee } from "../employees";

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name: string;
  salary: number;

  lista:Employee[] = employees;

  constructor() { }

  ngOnInit() {
  }

  addEmployee(event): void{
    this.lista.push({name: this.name, salary: this.salary});
    console.log(this.lista);
    //console.log(event);
    
  }

}
