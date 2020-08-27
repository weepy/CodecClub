

const firebaseConfig = {
	apiKey: "AIzaSyBLCAGkFegD06vzZXdV3aBK4lEV37v526U",
	authDomain: "list3n-a811f.firebaseapp.com",
	databaseURL: "https://list3n-a811f.firebaseio.com",
	projectId: "list3n-a811f",
	storageBucket: "list3n-a811f.appspot.com",
	messagingSenderId: "797026621245",
	appId: "1:797026621245:web:b9567b37a4ddc120e99754",
	measurementId: "G-7J4RT5LFV8"
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
	firebase.analytics();
}

const database = firebase.database();
let scoresRef  


const bucket = document.location.hostname == "localhost" ? "scores-dev" : "scores2-prod"

scoresRef = firebase.database().ref(bucket)


// scoresRef.on('child_added', function(data) {
// 	console.log(data.key, data.val());
// });		

export function appendEmail(email) {
	firebase.database().ref("emails2").push(email)
	
}

export function appendFirebase(data) {
	scoresRef.push(data)
	console.log("pushing", data)
}

export function getSnapshot() {
	return scoresRef.once('value').then(function(snapshot) {
        return snapshot.val()
    })
}
