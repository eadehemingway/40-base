import "./style.css";
import * as THREE from "three";
import * as dat from "lil-gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

let gui, sizes, canvas, scene, camera, renderer, controls;

function setUp(){
    gui = new dat.GUI();
    canvas = document.querySelector("canvas");
    scene = new THREE.Scene();

    sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    const aspect_ratio = sizes.width/sizes.height;
    camera = new THREE.PerspectiveCamera(75, aspect_ratio);
    renderer = new THREE.WebGLRenderer({ canvas });

    controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    scene.add(camera);
    camera.position.z = 3;
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor("linen");
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    setUpResizeListener();
}

function setUpResizeListener(){
    window.addEventListener("resize", () =>
    {
    // Update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
}

export { setUp, gui, sizes, canvas, scene, camera, renderer, controls };