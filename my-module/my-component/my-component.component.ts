import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent {
  
  employees: any[] = [
    {
      id:'EMPLOYEE ID',
      name: 'EMPLOYEE NAME',
      department:  'DEPARTMENT ',
      salary: 'SALARY',
      header: true
    },
    {
      id:'L&Q001',
      name: 'Varshini',
      department: 'Frontend Developer',
      salary: 8000
    },
    {
      id: 'L&Q002',
      name: 'Nancy',
      department: 'Frontend Developer',
      salary: 8000

    },
    {
      id:'L&Q003',
      name: 'Keerthanaa',
      department: 'CyberSecurity',
      salary: 8000

    }
  ]
}
