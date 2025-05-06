import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Message {
  text: string;
  createdAt: number;
  sender: string;
}
export interface UserFormData {
  fullName: string;
  email: string;
  birthDate: Date;
  gender: string;
  preferences: string[]; // selección múltiple
  country: string;
  newsletter: boolean;
  comments: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private firestore: Firestore) {}

  getMessages(): Observable<Message[]> {
    const messagesRef = collection(this.firestore, 'messages');
    const q = query(messagesRef, orderBy('createdAt'));
    return collectionData(q, { idField: 'id' }) as Observable<Message[]>;
  }

  sendMessage(text: string, sender: string) {
    const messagesRef = collection(this.firestore, 'messages');
    const message: Message = {
      text,
      createdAt: Date.now(),
      sender
    };
    return addDoc(messagesRef, message);
  }
  saveUserForm(data: any) {
    const formRef = collection(this.firestore, 'Prueba_Evelyn_Guachamin');
    return addDoc(formRef, {
      ...data,
      createdAt: Date.now()
    });
  }

}
