
import { scene } from "./setup";
import * as THREE from "three";

let box;

function drawGeometry(){

    const box_geo = new THREE.BoxGeometry(1, 1, 1);
    const box_mat = new THREE.MeshBasicMaterial({ color: "white" });

    box = new THREE.Mesh(box_geo, box_mat);
    scene.add(box);

}


export { drawGeometry, box };