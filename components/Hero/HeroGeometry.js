import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function HeroGeometry({ classNames }) {
  useEffect(() => {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(
      50,
      document.getElementById("hero-geometry").clientWidth /
        document.getElementById("hero-geometry").clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
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
      color: 0xCE5374,
      transparent: true,
      opacity: 0,
    });
    const meshMaterial = new THREE.MeshPhongMaterial({
      wireframe: true,
      color: 0xCE5374,
      // emissive: 0x072534,
      // side: THREE.DoubleSide,
      // flatShading: true,
      opacity: 1
    });

    group.add(new THREE.LineSegments(geometry, lineMaterial));
    group.add(new THREE.Mesh(geometry, meshMaterial));

    scene.add(group);

    function render() {
      requestAnimationFrame(render);
      group.rotation.x -= 0.001;
      group.rotation.y += 0.002;
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
  }, []);

  let oldClassNames =
    "max-h-[320px] min-h-[280px] lg:mx-0 2xl:min-h-[400px] col-span-16 lg:col-span-7 xl:min-h-500 xl:col-span-7 xl:col-start-9 lg:justify-self-center w-full my-auto h-full";

  return <div id='hero-geometry' className={classNames}></div>;
  //  <div id='hero-geometry' className='hero_geometry'></div>;
}

HeroGeometry.propTypes = {};

export default HeroGeometry;
