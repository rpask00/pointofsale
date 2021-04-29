import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'PointOFSale';
  /**
   *
   */
  constructor(
    private afDb: AngularFireDatabase
  ) {

    this.afDb.list('/main').push('infeced').then(console.log)

  }
}
