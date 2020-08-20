import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,} from "@angular/forms";

import { AngularFirestore} from "@angular/fire/firestore";
@Component({
  selector: 'app-conact-form',
  templateUrl: './conact-form.component.html',
  styleUrls: ['./conact-form.component.scss']
})
export class ConactFormComponent implements OnInit {

  myForm: FormGroup;

  loading = false;
  submitted = false;
  success = false;
  error = false;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      message: ['',[Validators.required, Validators.minLength(4)]],
    })
  }

  get name() {
    return this.myForm.get('name')
  }

  get email() {
    return this.myForm.get('email');
  }

  get message() {
    return this.myForm.get('message');
  }

  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      await this.afs.collection('contacts').add(formValue);
      this.submitted = true;
      this.success = true;
    } catch(err) {
      console.error(err)
      this.submitted = true;
      this.error = true;
    }
    this.loading = false;
  }
}
