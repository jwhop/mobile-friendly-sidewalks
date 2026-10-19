import * as THREE from 'three';
import { Axis } from '../solver/CalibrationSettings';

export class SceneSolverData {
    // axis related data for pixi.js
    axes1Type: Axis;
    axes1LinePoints: [THREE.Vector2, THREE.Vector2, THREE.Vector2, THREE.Vector2];
    axes2Type: Axis;
    axes2LinePoints: [THREE.Vector2, THREE.Vector2, THREE.Vector2, THREE.Vector2];

     constructor(){
        this.axes1Type = Axis.PositiveX;
        this.axes1LinePoints = [new THREE.Vector2(0,0), new THREE.Vector2(0,0), new THREE.Vector2(0,0), new THREE.Vector2(0,0)];
        this.axes2Type = Axis.PositiveZ;
        this.axes2LinePoints = [new THREE.Vector2(0,0), new THREE.Vector2(0,0), new THREE.Vector2(0,0), new THREE.Vector2(0,0)];
    }
}