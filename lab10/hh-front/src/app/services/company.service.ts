import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private client: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.BASE_URL}/companies/`);
  }

  getCompanyVacancies(companyId: number): Observable<any[]> {
    return this.client.get<any[]>(`${this.BASE_URL}/companies/${companyId}/vacancies/`);
  }
}
