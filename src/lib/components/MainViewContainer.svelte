
<script lang="ts">
    import PixiRenderer from './PixiRenderer.svelte';
    import { onMount, onDestroy, setContext } from 'svelte';

    let _mainViewImage : (null | HTMLImageElement) = $state(null);
    let _pixiRenderer : (null | PixiRenderer) = $state(null);
    let _imgWidth = $state(0);
    let _imgHeight = $state(0);

    onMount(() => {
        console.log("mounting");
        function onResize() {
            console.log("resizing");
            _imgWidth = _mainViewImage?.clientWidth as number;
            _imgHeight = _mainViewImage?.clientHeight as number;
            //_pixiRenderer?.resize();
        }
        window.addEventListener('resize', onResize);
        _imgWidth = _mainViewImage?.clientWidth as number;
        _imgHeight = _mainViewImage?.clientHeight as number;
        return () => window.removeEventListener('resize', onResize);
    });

    export function getWidth(){
        return _imgWidth;
    }


    function imageLoaded(e : Event) { 
        console.log("loaded");
        console.log(_mainViewImage);
        _imgWidth = (e.target as HTMLImageElement)!.clientWidth;
        _imgHeight = (e.target as HTMLImageElement)!.clientHeight;
    }
</script>

<div class="mainViewContainer">
    <PixiRenderer bind:this={_pixiRenderer} width = {_imgWidth} height = {_imgHeight} ></PixiRenderer>
    <img bind:this={_mainViewImage} class="mainViewImage" src="https://jwhop.github.io/Hallway/assets/test1.jpg" onload={imageLoaded} alt= "placeholder"/>
    
</div>

<style>
    .mainViewContainer {
        width: 100%;
        max-width: 1280px;
        height: 100%;
        overflow: hidden;
    }
    .mainViewImage {
        width: 100%;
        max-width: 1280px;
        height: 100%;
        overflow: hidden;
    }
</style>