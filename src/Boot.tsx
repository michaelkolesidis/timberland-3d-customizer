import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import useStore from "./stores/store";

type GLTFResult = GLTF & {
  nodes: {
    step_1_obj_leather_logo: THREE.Mesh;
    step_1_obj_leather_cut: THREE.Mesh;
    step_1_obj_leather_side: THREE.Mesh;
    step_1_obj_leather_tongue: THREE.Mesh;
    step_1_obj_interior_side: THREE.Mesh;
    step_1_obj_metallic: THREE.Mesh;
    step_1_obj_rubber_sole: THREE.Mesh;
    step_1_obj_rubber_side: THREE.Mesh;
    step_1_obj_collar: THREE.Mesh;
    step_1_obj_base_stitches: THREE.Mesh;
    step_1_obj_stitches: THREE.Mesh;
    step_1_obj_leather_back: THREE.Mesh;
    step_1_obj_interior_sole: THREE.Mesh;
    step_1_obj_rubberband: THREE.Mesh;
    step_1_step_2_laces: THREE.Mesh;
    step_1_obj_waterproof: THREE.Mesh;
    step_1_obj_waterproof_back: THREE.Mesh;
    step_1_obj_leather_insides: THREE.Mesh;
    shadow_plane: THREE.Mesh;
    step_1_step_5_obj_metal_lace_charm: THREE.Mesh;
  };
  materials: {
    leather_logo: THREE.MeshBasicMaterial;
    leather_cut: THREE.MeshBasicMaterial;
    leather_side: THREE.MeshBasicMaterial;
    leather_tongue: THREE.MeshBasicMaterial;
    interior_side: THREE.MeshBasicMaterial;
    metallic: THREE.MeshPhysicalMaterial;
    rubber_sole: THREE.MeshBasicMaterial;
    rubber_side: THREE.MeshBasicMaterial;
    collar: THREE.MeshBasicMaterial;
    base_stitches: THREE.MeshBasicMaterial;
    stitches: THREE.MeshBasicMaterial;
    leather_back: THREE.MeshBasicMaterial;
    interior_sole: THREE.MeshBasicMaterial;
    rubberband: THREE.MeshBasicMaterial;
    laces: THREE.MeshBasicMaterial;
    waterproof: THREE.MeshBasicMaterial;
    waterproof_back: THREE.MeshBasicMaterial;
    leather_insides_mat: THREE.MeshBasicMaterial;
    main_shadow_mat: THREE.MeshBasicMaterial;
    metal_roughness: THREE.MeshPhysicalMaterial;
  };
};

function Boot(props: JSX.IntrinsicElements["group"]) {
  const color = useStore((state) => state.color).replace(/ /g, "_");
  const laces = useStore((state) => state.laces).replace(/ /g, "_");

  const { nodes, materials } = useGLTF(
    `/models/boot/boot_${color}.glb`
  ) as GLTFResult;

  const lacesTexture = useTexture(`/textures/laces/laces_${laces}.jpeg`);
  lacesTexture.colorSpace = THREE.SRGBColorSpace;

  const lacesMaterial = new THREE.MeshBasicMaterial({
    map: lacesTexture,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.step_1_obj_leather_logo.geometry}
        material={materials.leather_logo}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_leather_cut.geometry}
        material={materials.leather_cut}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_leather_side.geometry}
        material={materials.leather_side}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_leather_tongue.geometry}
        material={materials.leather_tongue}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_interior_side.geometry}
        material={materials.interior_side}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_metallic.geometry}
        material={materials.metallic}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_rubber_sole.geometry}
        material={materials.rubber_sole}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_rubber_side.geometry}
        material={materials.rubber_side}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_collar.geometry}
        material={materials.collar}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_base_stitches.geometry}
        material={materials.base_stitches}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_stitches.geometry}
        material={materials.stitches}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_leather_back.geometry}
        material={materials.leather_back}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_interior_sole.geometry}
        material={materials.interior_sole}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_rubberband.geometry}
        material={materials.rubberband}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_step_2_laces.geometry}
        // material={materials.laces}
        material={lacesMaterial}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_waterproof.geometry}
        material={materials.waterproof}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_waterproof_back.geometry}
        material={materials.waterproof_back}
        position={[0.597, -0.743, 0.098]}
        rotation={[-1.612, 0.003, 0.199]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_obj_leather_insides.geometry}
        material={materials.leather_insides_mat}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.shadow_plane.geometry}
        material={materials.main_shadow_mat}
        position={[-0.288, -2.329, -0.787]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.step_1_step_5_obj_metal_lace_charm.geometry}
        material={materials.metal_roughness}
        position={[0, -0.843, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/models/boot/boot_wheat_nubuck.glb");
useGLTF.preload("/models/boot/boot_black_nubuck.glb");
useGLTF.preload("/models/boot/boot_olive_brown_nubuck.glb");
useGLTF.preload("/models/boot/boot_rust_nubuck.glb");

export default Boot;
