import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private Url = "http://localhost:3001/employees"

  constructor(private _http: HttpClient) {}

  addEmployee(data: IEmployee): Observable<IEmployee> {
    return this._http.post<IEmployee>(this.Url, data);
  }

  updateEmployee(id: number, data: IEmployee): Observable<IEmployee> {
    return this._http.put<IEmployee>(`${this.Url}/${id}`, data);
  }

  getEmployeeList(): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>(this.Url);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${this.Url}/${id}`);
  }
}
