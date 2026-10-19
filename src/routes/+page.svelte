<script lang="ts">
    import MainViewContainer from '#lib/components/MainViewContainer.svelte';
    import MainViewImageContainer from '#lib/components/MainViewContainer.svelte';
    import { onMount, onDestroy, setContext } from 'svelte';
    let _mainViewContainer : null | MainViewContainer = $state(null);
    onMount(() => {
        
        return () =>{}
    });

    let  fileinput: HTMLInputElement;
	
	const onFileSelected =(e)=>{
        console.log("selected");
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            _mainViewImage.src = e.target.result;
        };
    }

    $effect (() => {

    })
    

</script>
<section id = "website" style="height: 100%">
    <div class="container">
        <section id = "Top Panel" style = "width: 100%; border: 10px solid black; flex-grow: 1; background-color: red;">
            <div>
                
            </div>
        </section>
        <section id = "Main Viewer">
            <MainViewContainer bind:this={_mainViewContainer}></MainViewContainer>
        </section>
        <section id = "Bottom Panel" style = "width: 100%; border: 10px solid black; flex-grow: 1; background-color: red;">
            <div>
                {_mainViewContainer?.getWidth()}
                <button onclick={()=>{fileinput.click();}}>Choose Image</button>
                <button onclick={()=>{_imgWidth += 100}}>widen Image</button>
                <input style="display:none" type="file" accept=".jpg, .jpeg, .png" onchange={(e)=>onFileSelected(e)} bind:this={fileinput} >
            </div>
        </section>
    </div>
</section>

