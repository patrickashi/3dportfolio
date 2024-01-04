/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber"
import { a } from "@react-spring/three"
import islandScene from "../assets/3d/island.glb";

const Island = ({ isRotating, setIsRotating, ...props}) => {
  const isLandRef = useRef();

  const { gl, viewPort} = useThree();

  const { nodes, materials } = useGLTF(islandScene);
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches
    ? e.touches[0].clientX
    : e.clientX;

    lastX.current = clientX;
  }
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);

    const clientX = e.touches
    ? e.touches[0].clientX
    : e.clientX;

    const delta = (clientX - lastX.current) / viewPort.width;
    isLandRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = clientX;
    rotationSpeed.current = delta * 0.01 * Math.PI;
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      handlePointerUp(e);
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === "ArrowLeft") {
      if(!isRotating) setIsRotating(true);
      isLandRef.current.rotation.y += 0.01 * Math.PI;
    } else {
      if(e.key === "ArrowRight") {
        if(!isRotating) setIsRotating(true);
        isLandRef.current.rotation.y -= 0.01 * Math.PI;
      }
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  }

 

  useEffect( () => {
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointerUp", handlePointerUp);
    document.addEventListener("pointerMove", handlePointerMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    

    return ( () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerUp", handlePointerUp);
      document.removeEventListener("pointerMove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    })

    useFrame ( () => {
      if(!isRotating) {
        rotationSpeed.current *= dampingFactor;

        if (Math.abs(rotationSpeed.current) < 0.001) {
          rotationSpeed.current = 0;
        }
      } else {
        const rotation = isLandRef.current.rotation.y;
      }
    })

  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])



  return (
    <a.group ref={isLandRef} {...props} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}

useGLTF.preload("/island.glb");

export default Island;
