import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContact } from 'src/app/models/interfaces/contact.interfaces';
import { ContactService } from '../../services/contact.service'
@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit, OnDestroy {

  listContact: IContact[] = [];
  contactSelected: IContact | undefined;

  //suscripcion de servicio
  subcription: Subscription | undefined; 

  //inyectamos el servicio de contactos
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContact()
    .then((list: IContact[]) => this.listContact = list)
    .catch((err) => alert('error al recuperar la lista'))
  }

  getContact(id: number){
    this.subcription = this.contactService.getContactById(id)?.subscribe((contact: IContact) => {
      this.contactSelected = contact
    })
  }

  ngOnDestroy(): void {
    this.subcription?.unsubscribe()
  }
}
