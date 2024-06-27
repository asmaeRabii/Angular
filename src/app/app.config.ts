import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';

const RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY'; // Remplace avec ton site key reCAPTCHA Enterprise

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp({
      "projectId": "angularappl-87158",
      "appId": "1:515832701219:web:8081a6015a85c65c416c96",
      "storageBucket": "angularappl-87158.appspot.com",
      "apiKey": "AIzaSyA7f9P16x-LRGxUQE-l1CuYemteAuomPPw",
      "authDomain": "angularappl-87158.firebaseapp.com",
      "messagingSenderId": "515832701219",
      "measurementId": "G-V3XRLBRSDQ"
    })),
    provideAuth(() => getAuth()),
    provideAppCheck(() => {
      const provider = new ReCaptchaEnterpriseProvider(RECAPTCHA_SITE_KEY); // Fournir le site key ici
      return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    }),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage())
  ]
};
