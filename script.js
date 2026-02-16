// ===== THREE.JS 3D OBJECT =====
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("three-canvas"),
  alpha: true
});
renderer.setSize(420, 420);

const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
const material = new THREE.MeshStandardMaterial({
  color: 0x38bdf8,
  wireframe: true
});
const object = new THREE.Mesh(geometry, material);
scene.add(object);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  object.rotation.x += 0.005;
  object.rotation.y += 0.006;
  renderer.render(scene, camera);
}
animate();

// ===== MOUSE 3D TILT EFFECT =====
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  document.querySelector(".tilt").style.transform =
    `rotateY(${x}deg) rotateX(${y}deg)`;
});
