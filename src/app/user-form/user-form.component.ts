import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm: FormGroup;
  hobbies = ['Lectura', 'Cine', 'Fútbol', 'Viajar'];
  countries = ['Ecuador', 'Colombia', 'Argentina', 'México'];
  genders = ['Masculino', 'Femenino', 'Otro'];

  constructor(private fb: FormBuilder, private chatService: ChatService) {
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      hobbies: [[]],
      comments: [''],
      newsletter: [false]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.chatService.saveUserForm(this.userForm.value).then(() => {
        alert('Formulario guardado correctamente');
        this.userForm.reset();
      }).catch(err => {
        alert('Error al guardar: ' + err);
      });
    } else {
      alert('Por favor completa todos los campos requeridos.');
    }
  }
}
