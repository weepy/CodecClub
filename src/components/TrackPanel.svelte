<script>
	import Track from './Track.svelte'
 	import { appendFirebase } from '../Firebase.js'
	import config from '../config.js'
	export let file
	export let ondone

	import { shuffle, findPositionMap } from '../utils.js'

	

	let ext = shuffle([...config.ext.filter(x => x != "wav")])
	let error
	let completed = false
	
	
	let scores = ext.map(() => null)

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
				userType: localStorage.userType

			}


			 appendFirebase(data)
			

			

			// completed = true
			next()
		}

	}

	function next() {
		ext = shuffle([...config.ext.filter(x => x != "wav")])
		scores = ext.map(() => null)
		ondone()
	}
	
	
</script>

<div>

<Track title="Uncompressed original .wav" filename="{file}.wav" norate={true} />
{#each ext as ex, i}
<Track title="Compressed with codec {'ABCDEFG'[i]}" filename="{file}.{ex}" bind:score={scores[i]} extension={completed ? ex : ""} />
{/each}	
	<!-- {#if completed == false} -->
	<button on:click={done}>
		Next →
	</button>
	<!-- {:else}
	<button on:click={next}>
		Next >>
	</button>
	{/if} -->

	{#if error}
		<p class="error">
			You missed one!
	</p>
	{/if}
</div>

<style>
	button {
		    background: white;
    border: 1px solid black;
    padding: 14px;

		margin-top: 20px
	}
	.error {
	color: red
	}</style>
