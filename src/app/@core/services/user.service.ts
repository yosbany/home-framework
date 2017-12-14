import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Injectable()
export class UserService {

  user: Observable<firebase.User>;
  items: Observable<any[]>;

  constructor(public afAuth: AngularFireAuth, db: AngularFirestore) {
    this.afAuth.auth.signInAnonymously();

    this.user = this.afAuth.authState;
    db.collection('user').valueChanges().subscribe(data => {
      console.log(data);
    });
  }

}
