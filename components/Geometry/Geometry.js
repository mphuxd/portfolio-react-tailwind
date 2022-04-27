import React from "react";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Geometry(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(
    (state, delta) => ((ref.current.rotation.x -= 0.001), (ref.current.rotation.y += 0.001))
  );
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref} scale={1.4}>
      <icosahedronGeometry args={[2, 0]} />
      <lineBasicMaterial color={"black"} transparent opacity={0} />
      <meshStandardMaterial color={"black"} wireframe opacity={0} />
    </mesh>
  );
}

Geometry.propTypes = {};

export default Geometry;
