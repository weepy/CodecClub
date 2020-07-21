<script>
	import Track from './Track.svelte'
 	import { appendFirebase } from '../Firebase.js'
	import config from '../config.js'
	export let file
	export let ondone

	import { preload, shuffle, findPositionMap } from '../utils.js'
	import { fade} from 'svelte/transition'

	import { detect } from 'detect-browser'

	const browser = detect()

	let downloadProgress = 0
	
	$: preload(config.ext.map( ex => `/audio/${file}.${ex}`), (p) => {
		downloadProgress = p
	})
	

	$: console.log(file)

	let ext = shuffle([...config.ext])
	let error
	let completed = false
	
	let scores = ext.map(() => null)

	$: ratedAll = scores.findIndex(s => s == null) == -1
	

	function done() {
		console.log(scores)
		error = scores.findIndex(s => s == null) >= 0
		console.log(error)
		// error  = false
		if(!error) {


			const positionMap = findPositionMap(scores)
			
			const results = {}
			ext.forEach((ex, index) => {
				results[ex.replace(".","-")] = positionMap[scores[index]]
			})

			const data = {
				results, 
				file, 
				userId: localStorage.userId, 
				sessionTime: parseInt(localStorage.sessionTime), 
				speakers: localStorage.speaker,
				userType: localStorage.userType,
				browser


			}

			 appendFirebase(data)
			

			completed = true
			// next()
		}

	}

	function next() {

		
		
		if(ondone()) {
			completed = false
			downloadProgress = 0

			ext = shuffle([...config.ext])
			scores = ext.map(() => null)
		}
	}
	
	
</script>

<div>

{#if downloadProgress < 1} 

<h3>Downloading audio ... {Math.floor(downloadProgress*100)}%</h3>

{/if}

<div class:hidden={downloadProgress<1}>
	<Track title=" { file } : original audio" filename="{file}.wav.flac" norate={true} />
	<hr />

	{#each ext as ex, i}
		<Track title="Compressed with codec {'ABCDEFG'[i]}" filename="{file}.{ex}" bind:score={scores[i]} extension={completed ? ex : ""} />
	{/each}	
	<hr/>
	{#if completed == false && ratedAll}
	<button on:click={done}>
		Let's see how you did →
	</button>
	{:else if completed == true}
		<button in:fade on:click={next} class="next">
			Next →
		</button>
	{:else}
	
	<p class="hint">Pro Tip: if you can't tell between two tracks - give them the same score</p>
	{/if}
</div>
	

</div>

<style>

.hidden {
	visibility: hidden;
}
.next {
	float: right;
	margin-right: 100px;
}
	button {
		    background: white;
    border: 1px solid black;
    padding: 14px;

		margin-top: 20px
	}
	hr { 
		border:0px;
		border-top: 1px solid rgba(0,0,0,0.1)
		
	}
	.error {
	color: red
	}
	marquee{ width: 200px; background : hotpink; font-family: courier}
	
	.hint {
    	font-size: 14px;
		font-style:italic;
	}

	</style>

