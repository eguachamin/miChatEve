import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm: FormGroup;
  preferenceOptions = ['Deportes', 'Música', 'Películas', 'Lectura'];
  countries = ['México', 'España', 'Argentina', 'Colombia'];

  constructor(private fb: FormBuilder, private chatService: ChatService) {
    this.userForm = this.fb.group({
      fullName: [''],
      email: [''],
      birthDate: [null],  // Asegúrate de que la fecha inicial sea null o alguna fecha válida
      gender: [''],
      preferences: [[]],
      country: [''],
      newsletter: [false],
      comments: ['']
    });
  }

  onSubmit() {
    const formData = this.userForm.value;
    this.chatService.saveUserForm(formData).then(() => {
      console.log('Información guardada');
      this.userForm.reset();
    });
  }
}
