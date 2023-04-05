import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.scss']
})
export class SubComponentComponent {

  @Input('employee') employee !: any;
  employeeCopy!: any;

  edit($event: any) {
    this.employee.editing = true;
    this.employeeCopy = JSON.parse(JSON.stringify(this.employee));
  }

  editSave($event: any) {
    this.employee = this.employeeCopy;
    this.employee.editing = false;
  }

  editCancel($event: any) {
    this.employee.editing = false;
  }
}
