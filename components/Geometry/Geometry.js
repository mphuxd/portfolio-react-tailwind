import React from "react";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Geometry(props) {
  const ref = useRef();

  useFrame(
    (state, delta) => ((ref.current.rotation.x += 0.001), (ref.current.rotation.y += 0.0005))
  );
  return (
    <mesh {...props} ref={ref} scale={1.4}>
      {/* <icosahedronGeometry args={[2,0]} /> */}
      <octahedronGeometry args={[2,1]} />
      <lineBasicMaterial color={"black"} transparent opacity={0} />
      <meshStandardMaterial color={"black"} wireframe opacity={0} />
    </mesh>
  );
}

Geometry.propTypes = {};

export default Geometry;
