import * as THREE from "three";
import { setUp, controls, renderer, scene, camera, sizes } from "./setup";
const clock = new THREE.Clock();



function tick(){
    const elapsedTime = clock.getElapsedTime();
    controls.update()

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}

export { tick };