import Slideshow from "./modules/slideshow";
import HeroTransitions from "./modules/heroTransitions";
import Swiper from "swiper/bundle";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const swiper2 = new Swiper(".swiper-container-2", {
  // Optional parameters
  slidesPerView: 3,
  centeredSlides: false,
  spaceBetween: 15,
  direction: "horizontal",
  loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 15,
  direction: "horizontal",
  loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

if (document.querySelector(".slideshow")) {
  var slideShow = new Slideshow();
}

if (document.querySelector(".hero-featured-project")) {
  var heroTransitions = new HeroTransitions();
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(
  50,
  document.getElementById("hero-geometry").clientWidth /
    document.getElementById("hero-geometry").clientHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(
  document.getElementById("hero-geometry").clientWidth,
  document.getElementById("hero-geometry").clientHeight
);

document.getElementById("hero-geometry").appendChild(renderer.domElement);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableZoom = false;
orbit.enablePan = false;

const lights = [];
lights[0] = new THREE.PointLight(0xffffff, 1, 0);
lights[1] = new THREE.PointLight(0xffffff, 1, 0);
lights[2] = new THREE.PointLight(0xffffff, 1, 0);

lights[0].position.set(0, 200, 0);
lights[1].position.set(100, 200, 100);
lights[2].position.set(-100, -200, -100);

scene.add(lights[0]);
scene.add(lights[1]);
scene.add(lights[2]);

const group = new THREE.Group();

const geometry = new THREE.IcosahedronGeometry(2, 0);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const lineMaterial = new THREE.LineBasicMaterial({
  color: 0x0062a9,
  transparent: false,
  opacity: 0.5,
});
const meshMaterial = new THREE.MeshPhongMaterial({
  wireframe: true,
  color: 0x0062a9,
  //   emissive: 0x072534,
  side: THREE.DoubleSide,
  flatShading: true,
});

group.add(new THREE.LineSegments(geometry, lineMaterial));
group.add(new THREE.Mesh(geometry, meshMaterial));

scene.add(group);

function render() {
  requestAnimationFrame(render);
  group.rotation.x += 0.005;
  group.rotation.y += 0.005;
  renderer.render(scene, camera);
}

console.log("rendered!");

// const icosahedron = new THREE.Mesh(geometry, material);
// scene.add(icosahedron);

window.addEventListener(
  "resize",
  function () {
    camera.aspect =
      document.getElementById("hero-geometry").clientWidth /
      document.getElementById("hero-geometry").clientHeight;

    // camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(
      document.getElementById("hero-geometry").clientWidth,
      document.getElementById("hero-geometry").clientHeight
    );
    renderer.render(scene, camera);
  },
  false
);

render();
