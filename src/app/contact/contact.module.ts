import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ConactFormComponent } from './conact-form/conact-form.component';

import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input"
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [ConactFormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cullyn.io'),
    AngularFirestoreModule,
  ]
})
export class ContactModule { }
