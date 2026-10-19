import { SceneData } from "./SceneData";

export class GameData{
  scenes: SceneData[];

  constructor(){
    this.scenes = [];
  }

  addScene(s : SceneData){
    this.scenes.push(s);
  }
}