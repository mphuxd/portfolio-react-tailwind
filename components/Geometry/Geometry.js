import React from "react";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Geometry(props) {
  const ref = useRef();

  useFrame(
    (state, delta) => ((ref.current.rotation.x += 0.001), (ref.current.rotation.y += 0.001))
  );
  return (
    <mesh {...props} ref={ref} scale={1.4}>
      {/* <icosahedronGeometry args={[2,0]} /> */}
      <octahedronGeometry args={[2, 1]} />
      <lineBasicMaterial linewidth={2} color={"black"} opacity={1} />
      <meshPhongMaterial
        //color={"#CE5374"}
        color={"#111111"}
        //Diffuse color of the material
        emissive={"#111111"}
        //solid color unaffected by other lighting
        //specular={"#CE5374"}
        //how shiny the material is and the color of its shine.
        metalness={1}
        //How much the material is like a metal.
        wireframe
        //Render geometry as wireframe
      />
    </mesh>
  );
}

Geometry.propTypes = {};

export default Geometry;
