<script lang="ts">
    import ModelList from './ModelList.svelte'
    let modal: HTMLElement = null
    function hideModal(){
        console.log('click1')
        modal.classList.add('hidden')
        // modal.style.display='none'
    }
</script>
<div class="enter-modal-holder" bind:this={modal}>
<div class="enter-modal-dialog">
    <img src="./img/logo.svg" alt="Logo" width="100" height="100" on:click={hideModal} on:keyup={()=>{}}>
    <ModelList {hideModal}/>
</div>
</div>
<style>
    .enter-modal-dialog{
        width: 640px;
        height: 480px;
        background-color: white;
        margin: 1rem;
        padding: 1rem;
        border:1px gray dotted;
        border-radius: 10px;
    }
    .enter-modal-holder{
        position: absolute;
        border: 0;
        margin: 0;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: gray;
        height: 100vh;
        width: 100vw;
    }
</style>