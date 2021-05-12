import THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
const ThreeBSP = require('../../index.js')(THREE);

export const meshFactory = () => {

  let loader = new STLLoader();
  var box;
  loader.load('yourMesh.stl', function (geo) {
    box = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(100, 50, 50));

    const sBSP = new ThreeBSP(sphere);
    const bBSP = new ThreeBSP(box);

    const sub = bBSP.subtract(sBSP);
    const newMesh = sub.toMesh();

    newMesh.material = new THREE.MeshPhongMaterial({ color: 0xdddddd, specular: 0x1a1a1a, shininess: 30, shading: THREE.FlatShading });

    return Object.assign({}, { csg: newMesh });

  })
  // const box = new THREE.Mesh(new THREE.BoxGeometry(500, 100, 100));
  // const box = 

};
