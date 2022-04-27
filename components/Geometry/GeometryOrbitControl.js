import React, { useRef } from "react";
import PropTypes from "prop-types";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

function GeometryOrbitControl(props) {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <>
      <orbitControls
        ref={controls}
        args={[camera, domElement]}
        enableZoom={false}
        enablePan={false}
      />
      ;
    </>
  );
}

GeometryOrbitControl.propTypes = {};

export default GeometryOrbitControl;
