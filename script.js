console.log("Keritik.in berjalan 🚀");

import { initializeApp }
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
getFirestore,
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRdkMGgb1s5n90FwMmDSL9WyHWPJeOMJ0",
  authDomain: "keritik-in.firebaseapp.com",
  projectId: "keritik-in",
  storageBucket: "keritik-in.firebasestorage.app",
  messagingSenderId: "428678412439",
  appId: "1:428678412439:web:3daaf22b775b9b00a191d2",
  measurementId: "G-E04Y0KK0WM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const snapshot =
await getDocs(collection(db, "aspirasi"));

let total = 0;
let kritik = 0;
let saran = 0;
let apresiasi = 0;

snapshot.forEach((doc)=>{

    const data = doc.data();

    if(data.status !== "published") return;

    total++;

    if(data.kategori === "Kritik") kritik++;
    if(data.kategori === "Saran") saran++;
    if(data.kategori === "Apresiasi") apresiasi++;

});

document.getElementById("totalAspirasi").textContent = total;
document.getElementById("totalKritik").textContent = kritik;
document.getElementById("totalSaran").textContent = saran;
document.getElementById("totalApresiasi").textContent = apresiasi;

const latestContainer = document.getElementById("latestAspirasi");

let aspirasiTerbaru = [];

snapshot.forEach((doc)=>{

    const data = doc.data();

    if(data.status === "published"){
        aspirasiTerbaru.push(data);
    }

});

aspirasiTerbaru
.slice(0,3)
.forEach((data)=>{

    latestContainer.innerHTML += `

    <div class="latest-card">

        <div class="badge">
            ${data.kategori}
        </div>

        <h3>
            ${data.judul}
        </h3>

        <p>
            ${data.isi.substring(0,120)}...
        </p>

    </div>

    `;

});
