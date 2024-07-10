import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Epmloyee } from './employee.model';
import { Designation } from './designation.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private myhttp:HttpClient) { }
  employeeUrl:string='http://localhost:5184/api/Employee';
  designationUrl:string='http://localhost:5184/api/Designation';
  listEmployee:Epmloyee[]=[]; //For Getting Data EmployeeList
  listDesignation:Designation[]=[];
  employeeData:Epmloyee=new Epmloyee(); //for post data / Insert data
  saveEmployee()
  {
    return this.myhttp.post(this.employeeUrl,this.employeeData);
  }
  updateEmployee()
  {
    return this.myhttp.put(`${this.employeeUrl}/${this.employeeData.id}` ,this.employeeData);
  }
  getEmployees():Observable<Epmloyee[]>
  {
    return this.myhttp.get<Epmloyee[]>(this.employeeUrl);
  }
  getDesignations():Observable<Designation[]>
  {
    return this.myhttp.get<Designation[]>(this.designationUrl);
  }
  deleteEmployee(id:number)
  {
    return this.myhttp.delete(`${this.employeeUrl}/${id}`);
  }
 }