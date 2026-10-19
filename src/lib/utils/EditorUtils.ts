import { Application } from "pixi.js";

export function loadEditorImages() {

}

export async function initPixiRenderer() {
    //////////////////////////////////////////////////////
    // pixi.js set up 
    //////////////////////////////////////////////////////

    const app = new Application();

    // Initialize with options
    await app.init({
        width: 0,                 // Canvas width
        height: 0,               // Canvas height
        backgroundColor: 0xffffff,    // Background color
        backgroundAlpha: 0,           // Background alpha
        antialias: true,              // Enable antialiasing
        resolution: 1,                // Resolution / device pixel ratio
        preference: 'webgl',          // or 'webgpu' // Renderer preference
        clearBeforeRender: false      // so that we can render three.js too
    });

    // Add the canvas to your webpage
    innerWrapper?.appendChild(app.canvas);


    //I think we should pass these in from newly created project rather than making them here -- we're just trying to make the renderer rn
    
    // // Create z and x perspective lines
    // const perspectiveLinePairX = new PerspectiveLinePair('red', null, Axis.PositiveX, app.canvas);
    // const perspectiveLinePairZ = new PerspectiveLinePair('blue', null, Axis.PositiveZ, app.canvas);

    // // Create perspective manager
    // const perspectiveManager = new PerspectiveManager(perspectiveLinePairX, perspectiveLinePairZ, null);
    // perspectiveLinePairX.assignManager(perspectiveManager);
    // perspectiveLinePairZ.assignManager(perspectiveManager);

    // // Add actual shape containers to scene
    // app.stage.addChild(perspectiveLinePairX.getLine1Object());
    // app.stage.addChild(perspectiveLinePairX.getLine2Object());

    // app.stage.addChild(perspectiveLinePairZ.getLine1Object());
    // app.stage.addChild(perspectiveLinePairZ.getLine2Object());

    app.stage.visible = false;

    // const axesOneOptions = document.getElementById("axes1Options");
    // axesOneOptions?.addEventListener("change", function (){
    //     const s = (this as HTMLSelectElement).value;
    //     const preview = (document.getElementById("Axes1Preview") as HTMLDivElement);
    //     perspectiveLinePairX.assignAxis(stringToAxis((this as HTMLSelectElement).value));
        
    //     preview.style.backgroundColor = s.includes('X') ? 'red': s.includes('Y') ? 'green' : 'blue';
    // });

    // (axesOneOptions as HTMLSelectElement).value = "-X";

    // const axesTwoOptions = document.getElementById("axes2Options");
    // axesTwoOptions?.addEventListener("change", function (){
    //     const s = (this as HTMLSelectElement).value;
    //     const preview = (document.getElementById("Axes2Preview") as HTMLDivElement);
    //     perspectiveLinePairZ.assignAxis(stringToAxis((this as HTMLSelectElement).value));
    //     preview.style.backgroundColor = s.includes('X') ? 'red': s.includes('Y') ? 'green' : 'blue';
    // });

    // (axesTwoOptions as HTMLSelectElement).value = "-Z";

    // document.getElementById("hideLines")?.addEventListener("click", function(){
    //     app.stage.visible = !app.stage.visible;
    // });
}

export function initThreeJSRenderer() {

}

export function newProject() {

}