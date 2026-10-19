export class ImageData {
    width: number;
    height: number;
    imgUrl: string;
    
    constructor(w : number, h: number, url: string){
        this.width = w;
        this.height = h;
        this.imgUrl = url;
    }

    setImage(i : ImageData){
        this.width = i.width;
        this.height = i.height;
        this.imgUrl = i.imgUrl;
    }
}