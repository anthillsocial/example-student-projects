// importing THREE.js
import * as THREE from "three";
// import { OrbitControls } from 'jsm/controls/OrbitControls.js'; ---> This allowed me to zoom in an out, rotate and interact with the 3D globe. I will no longer be using this, since my globe is now just part of the background.


// creating new THREE.js scene
const w = window.innerWidth;
const h = window.innerHeight;


const scene = new THREE.Scene();


//setting up camera position
const camera = new THREE.PerspectiveCamera(60, w / h, 1.0, 900);
camera.position.z = 5;




//lighting
// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Color, Intensity
scene.add(ambientLight);


//rendering scene
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h); //Set the initial size of the render to match the viewport


document.body.appendChild(renderer.domElement);




const earthGroup = new THREE.Group();
earthGroup.rotation.z = 23 * Math.PI / 180;
scene.add(earthGroup);




// const controls = new OrbitControls(camera, renderer.domElement);
// controls.minDistance = 3;
// controls.maxDistance = 3;
// No longer using code above, as I don't want to zoom in and out of my globe because i am now using it as a background.


const detail = 60;
const loader = new THREE.TextureLoader();


//Size of globe
const geometry = new THREE.IcosahedronGeometry(3.5, detail);


//Material
const material = new THREE.MeshPhongMaterial({
  map: loader.load('./Assets/TEXTURES/08_GoldMAP.jpg'),
  bumpScale: 0.01,
});
const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);




function handleWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}


window.addEventListener('resize', handleWindowResize);


document.querySelector('.container').appendChild(renderer.domElement);


// Define the radius of the globe
const globeRadius = 5;




//ANIMATION


function animate() {
  requestAnimationFrame(animate);


  // Rotate earth:
earthMesh.rotation.y += 0.001;




  renderer.render(scene, camera);
  earthMesh.position.set (0,0,0);
}


animate();








//========================================  RED DOTS ON 3 GLOBE =========================================================//
// Define red dot geometry and material
// const redDotGeometry = new THREE.SphereGeometry(0.025, 16, 16);
// const redDotMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });


// Coordinates for red dots (latitude, longitude) (On 3D globe)
// const dotPositions = [
  //  { lat: 222, lon: 42 }, // 2.New Zealand (Lord of the Rings)
  // { lat: 184, lon: -39 }, // 3.Hawaii (White Lotus)
  //  { lat: 188, lon: 101 }, // 4.Thailand (The Beach)
  //  { lat: 163, lon: 170 }, // 5.Malta (Game of Thrones)
  //  { lat: 35, lon: 15 }, // 6.Edinburgh (One day)
  //  { lat: 28, lon: 11 }, // 7.Hampton London (Brigerton)
  //  { lat: 30, lon: 14 }, // 8.Highclere London (Downton Abbey)
  //  { lat: 32, lon: 13 }, // 9.Watford UK (Harry Potter)
  //  { lat: 25, lon: 65 }, // 10.New York (Friends)
  //  { lat: 26, lon: 8 }, // 11.Paris (Emily in Paris)
  //  { lat: 30, lon: 118 }, // 12.Seattle (Sleepless in Seattle)
  //  { lat: 29, lon: 8 }, // 13.London (The Crown)
  //  { lat: 27, lon: 113 }, // 14.Oregon (The Shining)
  //  { lat: 34, lon: 12 }, // 15.Glencoe Scotland (Skyfall)
  //  { lat: 164, lon: 180 }, // 16. Tunisia (Star Wars)
  //  { lat: 181, lon: 97 }, // 17.Cambodia (Lara Croft: Tomb Raider)
  //  { lat: 27, lon: 77 }, // 20.Ohio (Shawshank Redemption)
  //  { lat: 168, lon: 159 }, // 21.Jordan (Indiana Jones and the Last Crusade)
  //  { lat: 25, lon: -3 }, // 22.Austria (The Sound of Music)
  //  { lat: 27, lon: 5 }, // 24.Paris (Amelie)
  //  { lat: 25, lon: 68 }, // 25.New York (When Harry Met Sally)
  //  { lat: 32, lon: 9 }, // 26.London (Notting Hill)
  //  { lat: 22, lon: 66 }, // 27.New York (Ghost Busters)
  //  { lat: 30, lon: 0 }, // 28.Belgium (In Burges)
  //  { lat: 157, lon: 166 }, // 30.Greece (Mamma Mia)
  //  { lat: 31, lon: 20 }, // 31.Ireland (Banshees of Inershan)
  //  { lat: 30, lon: 17 }, // 32.Cardiff (Sherlock Holmes)
  //  { lat: 15, lon: 75 }, // 34.Savannah Georgie (Forest Gump)
  //  { lat: 192, lon: 165 }, // 35.Rwanda (Gorillas in the Mist)
  //  { lat: 165, lon: 167 }, // 36. Malta (Troy)
  //  { lat: 24, lon: 111 }, // 18.California (Rebel without a cause)
  //  { lat: 21, lon: 111 }, // 23.California (La la land)
  //  { lat: 22, lon: 108 }, // 29.California (The holiday)


// ];


// Function to convert latitude and longitude to spherical coordinates
// function latLonToSpherical(lat, lon, radius) {
//    const phi = (90 - lat) * Math.PI / 180;
//    const theta = (lon + 180) * Math.PI / 180;
//    return new THREE.Vector3(
//        radius * Math.sin(phi) * Math.cos(theta),
//        radius * Math.cos(phi),
//        radius * Math.sin(phi) * Math.sin(theta)
//    );
// }


// Create red dot meshes and position them on the globe
// const redDotMeshes = [];
// dotPositions.forEach(position => {
//    const sphericalPosition = latLonToSpherical(position.lat, position.lon, globeRadius);
//    const redDotMesh = new THREE.Mesh(redDotGeometry, redDotMaterial);
//    redDotMesh.position.copy(sphericalPosition);
//    earthGroup.add(redDotMesh);
//    redDotMeshes.push(redDotMesh);
// });
