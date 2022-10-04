import { Injectable } from '@angular/core';
import { CONTACTS } from '../mocks/contact.mocks';
import { IContact } from '../models/interfaces/contact.interfaces';
//importamos observable de rxjs
import { observable, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContact(): Promise<IContact[]>{
    return Promise.resolve(CONTACTS)
  }

  getContactById(id: number): Observable<IContact> | undefined{

    const contact = CONTACTS.find((contact: IContact) => contact.id === id)

    let observable: Observable<IContact> = new Observable(observer => {
      observer.next(contact);//emitir un valor a todo componente suscrito
      observer.complete();// no emitimos mas valores
    })
    if(contact){
      return observable;
    }
    return;
  }
}
