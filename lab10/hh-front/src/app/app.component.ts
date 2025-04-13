import { Component, OnInit } from '@angular/core';
import { Company } from './models/company';
import { CompanyService } from './services/company.service';
import { Vacancy } from './models/vacancy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule],

})
export class AppComponent implements OnInit {
  companies: Company[] = [];
  selectedVacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  onSelectCompany(id: number) {
    this.companyService.getCompanyVacancies(id).subscribe(data => {
      this.selectedVacancies = data;
    });
  }
}
