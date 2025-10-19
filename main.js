import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ======== ESCENA 1 ========
const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera(75, (window.innerWidth / 3) / window.innerHeight, 0.1, 1000);
camera1.position.z = 5;
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xFFA1AD })
);
scene1.add(cube1);
const light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(5, 5, 5);
scene1.add(light1);

// ======== ESCENA 2 ========
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(75, (window.innerWidth / 3) / window.innerHeight, 0.1, 1000);
camera2.position.z = 5;
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x74D4FF})
);
scene2.add(cube2);
const light2 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.set(5, 5, 5);
scene2.add(light2);

// ======== ESCENA 3 ========
const scene3 = new THREE.Scene();
const camera3 = new THREE.PerspectiveCamera(75, (window.innerWidth / 3) / window.innerHeight, 0.1, 1000);
camera3.position.z = 5;
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xDAB2FF })
);
scene3.add(cube3);
const light3 = new THREE.DirectionalLight(0xffffff, 1);
light3.position.set(5, 5, 5);
scene3.add(light3);

// ======== ANIMACIÓN ========
function animate() {
  cube1.rotation.x += 0.02;
  cube1.rotation.y += 0.03;
  cube2.rotation.x += 0.06;
  cube2.rotation.y += 0.04;
  cube3.rotation.x += 0.08;
  cube3.rotation.y += 0.2;

  renderer.setScissorTest(true);

  // Vista 1 (izquierda)
  renderer.setViewport(0, 0, window.innerWidth / 3, window.innerHeight);
  renderer.setScissor(0, 0, window.innerWidth / 3, window.innerHeight);
  renderer.render(scene1, camera1);

  // Vista 2 (centro)
  renderer.setViewport(window.innerWidth / 3, 0, window.innerWidth / 3, window.innerHeight);
  renderer.setScissor(window.innerWidth / 3, 0, window.innerWidth / 3, window.innerHeight);
  renderer.render(scene2, camera2);

  // Vista 3 (derecha)
  renderer.setViewport((2 * window.innerWidth) / 3, 0, window.innerWidth / 3, window.innerHeight);
  renderer.setScissor((2 * window.innerWidth) / 3, 0, window.innerWidth / 3, window.innerHeight);
  renderer.render(scene3, camera3);

  renderer.setScissorTest(false);
}

renderer.setAnimationLoop(animate);

// Ajustar al cambiar tamaño de ventana
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  [camera1, camera2, camera3].forEach(cam => {
    cam.aspect = (window.innerWidth / 3) / window.innerHeight;
    cam.updateProjectionMatrix();
  });
});