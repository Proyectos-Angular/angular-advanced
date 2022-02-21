import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DynamicFormService } from 'src/app/services/dynamicForm/dynamic-form.service';
import { FormField } from '../../models/FormField';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {


  formFields: Observable<FormField<string>[]>;

  constructor(service: DynamicFormService) {

    if(service.getFormFields() != null) {
      this.formFields = service.getFormFields();
    }
  }

  ngOnInit(): void {
  }

}
