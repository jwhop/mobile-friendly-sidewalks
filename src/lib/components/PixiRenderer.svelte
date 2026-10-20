<script lang="ts">
    import { PerspectiveLinePair } from "#lib/classes/perspectiveLines/PerspectiveLinePair.ts";
    import { PerspectiveManager } from "#lib/classes/perspectiveLines/PerspectiveManager.ts";
    import { Axis } from "#lib/classes/solver/CalibrationSettings.ts";
    import { appendSVGPath, Application, extensions, Graphics, ResizePlugin, Container  } from "pixi.js";
    import { onMount, onDestroy, setContext } from 'svelte';
    
    let { width, height } = $props();

    let canvas : HTMLCanvasElement;
    let pixiApp = $state( new Application() );

    onMount(async () => {
        await pixiApp.init({
            width: 693,                 // Canvas width
            height: height,               // Canvas height
            backgroundColor: 0x00ff00,    // Background color
            backgroundAlpha: 1,           // Background alpha
            antialias: true,              // Enable antialiasing
            resolution: 2,                // Resolution / device pixel ratio
            preference: 'webgl',          // or 'webgpu' // Renderer preference
            clearBeforeRender: false,      // so that we can render three.js too
            canvas: canvas,
        })
        pixiApp.stage.visible = true;
        // Create z and x perspective lines
        const perspectiveLinePairX = new PerspectiveLinePair('red', null, Axis.PositiveX, pixiApp.canvas);
        const perspectiveLinePairZ = new PerspectiveLinePair('blue', null, Axis.PositiveZ, pixiApp.canvas);

        // Create perspective manager
        const perspectiveManager = new PerspectiveManager(perspectiveLinePairX, perspectiveLinePairZ, null);
        perspectiveLinePairX.assignManager(perspectiveManager);
        perspectiveLinePairZ.assignManager(perspectiveManager);

        // Add actual shape containers to scene
        pixiApp.stage.addChild(perspectiveLinePairX.getLine1Object());
        pixiApp.stage.addChild(perspectiveLinePairX.getLine2Object());

        pixiApp.stage.addChild(perspectiveLinePairZ.getLine1Object());
        pixiApp.stage.addChild(perspectiveLinePairZ.getLine2Object());
        
        return () => {
            pixiApp?.destroy();
        }
    })

    $effect(() => {
        pixiApp.stage.visible = true;
        pixiApp.renderer?.resize(693, height)
        function loop() {
            // Render PixiJS scene
            if(pixiApp.stage && pixiApp.stage.visible && pixiApp.renderer){
                pixiApp.renderer.render({ container: pixiApp.stage });
            }
            // Continue animation loop
            requestAnimationFrame(loop);
        }

        // Start animation loop
        requestAnimationFrame(loop);
	});

    pixiApp.stage.addChild(new Graphics().circle(50, 50, 15).fill('blue'))
    pixiApp.stage.visible = true;
    
    
    export function resize(){
        console.log("resizing2");
        pixiApp.renderer.resize(width, height)
        fit(false, pixiApp.stage, width, height, 512 * width/height, 512 * height/width)
    }
   
    function fit(center: boolean, stage: Container, screenWidth: number, screenHeight: number, virtualWidth: number, virtualHeight: number) {
        console.log(stage.scale);
        console.log(stage.position);
        stage.scale.x = screenWidth / virtualWidth
        stage.scale.y = screenHeight / virtualHeight

        if (stage.scale.x < stage.scale.y) {
            stage.scale.y = stage.scale.x
        } else {
            stage.scale.x = stage.scale.y
        }

        const virtualWidthInScreenPixels = virtualWidth * stage.scale.x
        const virtualHeightInScreenPixels = virtualHeight * stage.scale.y
        const centerXInScreenPixels = screenWidth * 0.5;
        const centerYInScreenPixels = screenHeight * 0.5;

        if (center) {
            stage.position.x = centerXInScreenPixels;
            stage.position.y = centerYInScreenPixels;
        } else {
            stage.position.x = centerXInScreenPixels - virtualWidthInScreenPixels * 0.5;
            stage.position.y = centerYInScreenPixels - virtualHeightInScreenPixels * 0.5;
        }
        console.log(stage.scale);
        console.log(stage.position);
    }
    

</script>

<canvas  bind:this={canvas} class="canvas" style:width="{width}px" style:height="{height}px">
</canvas>

<style>
    .canvas {
        position:fixed;
        overflow: hidden; 
        user-select: none;
        background-color: blueviolet;
    }
</style>