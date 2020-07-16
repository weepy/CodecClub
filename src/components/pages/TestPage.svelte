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
	
     index += 1

    if(index == config.files.length) {
        page('#done')
    }

}

page("#/")

</script>

<h1>Codec Club</h1>


<p>The first rule of Codec Club is: "Rank these clips by similarity with the uncompressed original track".</p>

<h2> Test {index+1} of {config.files.length}: { file } </h2>

<div transition:fade key={file}>
<TrackPanel file={file} ondone={next} />
</div>

<p class="hint">PS If you can't tell between two tracks - give them the same score</p>

<style >
button {
    padding:20px; background: white; border: 1px solid black;
}
.hint {
    font-size: 10px;
}
</style>


