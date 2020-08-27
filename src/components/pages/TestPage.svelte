<script>
import TrackPanel from '../TrackPanel.svelte'
import Todo from '../Todo.svelte'
	import { crossfade,fade } from 'svelte/transition';


import config from '../../config.js'
import page from 'page'



	
$: speakerValue = null
let index = 0
$: file = config.files[index]
	
function next() {
	
    if(index == config.files.length - 1) {
        page('#done')
        return false
    }
    else {
        index += 1
    }

    return true
}

page("#/")

</script>

<h1 on:click={()=> page('#done')}>Codec Club</h1>


<!-- <p>The 1<sup>st</sup> rule of Codec Club is: <br/><br/><i>&nbsp;&nbsp;"Rank these clips by similarity with the uncompressed original track".</i></p> -->

<p>Press play on the original first, and then flip between versions as it's playing. <br/>It's like 'spot the difference' - but for sound</p>

<h2> Test {index+1} of {config.files.length} </h2>

<div key={file}>
<TrackPanel file={file} ondone={next} />
</div>



<style >
button {
    padding:20px; background: white; border: 1px solid black;
}

</style>


