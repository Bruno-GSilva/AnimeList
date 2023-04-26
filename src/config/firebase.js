import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD2O4H-wJ3Xy650PIwnOitpD4KcpWsb-BE",
    authDomain: "myfirstapp-54bf5.firebaseapp.com",
    projectId: "myfirstapp-54bf5",
    storageBucket: "myfirstapp-54bf5.appspot.com",
    messagingSenderId: "665310289304",
    appId: "1:665310289304:web:b76b437c7b96d0bc925fed",
    measurementId: "G-Y2M3M9GSEK"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;