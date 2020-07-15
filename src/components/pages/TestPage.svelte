<script>
import TrackPanel from '../TrackPanel.svelte'
import Todo from '../Todo.svelte'

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


</script>

<h1>Codec Club</h1>


<p>The first rule of Codec Club is: "Listen to these clips and order them by quality".</p>

<h2> Test {index+1} of {config.files.length}: { file } </h2>

<TrackPanel file={file} ondone={next} />

<p class="hint">PS If you can't tell between two tracks - give them the same score</p>

<style >

.hint {
    font-size: 10px;
}
</style>


