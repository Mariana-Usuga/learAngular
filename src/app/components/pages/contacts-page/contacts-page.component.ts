import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/interfaces/contact.interfaces';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  listContacts: IContact[] = [
    {
      id: 0,
      name: 'Mariana',
      surname: 'Usuga Montoya',
      email: 'mariana@gmail.com',
      age: 22
    },
    {
      id: 1,
      name: 'wilmar',
      surname: 'Usuga Montoya',
      email: 'mariana@gmail.com',
      age: 22
    },
    {
      id: 2,
      name: 'Sandra',
      surname: 'Usuga Montoya',
      email: 'mariana@gmail.com',
      age: 22
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
