import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyD4M4RW3Kawr-Kvunv8xGmeIVYu2cPfxzk",
  authDomain: "react-sec02-072.firebaseapp.com",
  projectId: "react-sec02-072",
  storageBucket: "react-sec02-072.appspot.com",
  messagingSenderId: "209323076697",
  appId: "1:209323076697:web:e2e971fd40d766b57f9548",
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BFUNFP3hT7w68yac94XmfHs5AtmVNVDU_drKZ7_fF5zcK1NZkueCJdG_2VQtVWxN455u30MmP6RAhf6kHfaqiQw"
);

export { messaging };
