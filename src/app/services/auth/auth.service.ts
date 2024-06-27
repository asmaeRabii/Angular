import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { environment } from '../../environments/environment';

const firebaseApp = initializeApp(environment.firebase);
const db = getFirestore(firebaseApp);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  async login(username: string, password: string): Promise<boolean> {
    const adminDocRef = doc(db, 'admin', 'QBDnIfWrosm9cdcosfjL');
    const adminDoc = await getDoc(adminDocRef);
    if (adminDoc.exists()) {
      const adminData = adminDoc.data();
      return adminData['login'] === username && adminData['password'] === password;
    }
    return false;
  }
}
