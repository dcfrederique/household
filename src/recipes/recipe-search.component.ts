import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RecipeApi } from './recipe-api.service';

@Component({
  selector: 'recipe-search',
  templateUrl: './recipe-search.component.html',
})
export class RecipeSearchComponent implements OnInit{
    formGroup: FormGroup;
    data:any;
    constructor(private fb:FormBuilder,private api:RecipeApi){

    }
    search=(form:any)=>{
        this.api.search(form.searchText).subscribe((res)=>{
            this.data = res;
        })
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.formGroup = this.fb.group({
        'searchText': [null, [Validators.required]]
        });
    }
}
