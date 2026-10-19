import * as THREE from 'three';
import { SceneSolverData } from './SceneSolverData';
import { ImageData } from './ImageData';

export class SceneData{
    // three.js related data - do we actually want this in the scene data?
    scene: THREE.Scene;
    camera: THREE.Camera;

    // three.js stringified JSONs - can generate respective camera + scene
    cameraString!: string;
    sceneString!: string;
  
    // general data
    name!: string;
    introText!: string;
    id: string;
    
    // for background image
    imgData: ImageData;

    // for solver
    solverData: SceneSolverData;

    constructor(s: THREE.Scene, c: THREE.Camera, imgSrc: string, id: string, imgData : ImageData){
        this.scene = s;
        this.camera = c;
        this.imgData = imgData;
        this.id = id;
        this.solverData = new SceneSolverData();
    }

    setName(s : string){
        this.name = s;
    }

    setBackground(_imgData: ImageData){
        this.imgData.setImage(_imgData);
    }

    generateSceneAndCamera(loader: THREE.ObjectLoader): {scene: THREE.Scene, camera: THREE.Camera} {
        return {scene: loader.parse(this.scene) as THREE.Scene, camera: loader.parse(this.camera) as THREE.Camera}
    }


}