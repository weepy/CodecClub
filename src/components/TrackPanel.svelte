<script>
	import Track from './Track.svelte'
 	import { appendFirebase } from '../Firebase.js'
	import config from '../config.js'
	export let file
	export let ondone

	import { shuffle, findPositionMap } from '../utils.js'

	

	let ext = shuffle([...config.ext])
	let error
	
	
	let scores = ext.map(() => null)

	function click() {
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
				speakers: localStorage.speaker 
			}


			 appendFirebase(data)
			
			ext = shuffle([...config.ext])
			scores = ext.map(() => null)
			

			ondone()			
		}

	}
	
</script>

<div>


{#each ext as ex, i}
<Track title="compressed with codec {'ABCDEFG'[i]}" filename="{file}.{ex}" bind:score={scores[i]} />
{/each}	

	<button on:click={click}>
		Next >>
	</button>
	{#if error}
		<p class="error">
			You missed one!
	</p>
	{/if}
</div>

<style>
	button {
		
		margin-top: 20px
	}
	.error {
	color: red
	}</style>
