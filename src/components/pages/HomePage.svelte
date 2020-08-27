<script>
import TrackPanel from '../TrackPanel.svelte'
import Todo from '../Todo.svelte'

import config from '../../config.js'
import page from 'page'
	
localStorage.userId=localStorage.userId||Math.random().toString(36).slice(2)
localStorage.sessionTime=Date.now()

$: speakerValue = null
$: userTypeValue = null

function next() {
	page('#test')
	localStorage.speaker = speakerValue
	localStorage.userType = userTypeValue
}


import { preloadAll } from '../../utils.js'



// preloadAll(config.files, config.ext, (p) => {
// 	console.log(p)
// })

</script>

<h1>Codec Club</h1>

<h2>How good are your ears?</h2>
<p>Can you hear the difference between 256AAC encoding and the original?</p>
<p>This is a blind listening test to try to determine the limits of human hearing and audio compression. </p>
<p>Good Luck!</p>
<p></p>
<hr/>



<h4>
	<i>Before we start make sure you're using high quality speakers or headphones. 	</i>
</h4>

<h5>What are you listening with?</h5>

<select bind:value={speakerValue}>
	<option>Pick</option>
	<option>Studio monitors</option>
	<option>Hi-end speakers</option>
	<option>Medium quality speakers</option>
	<option>Laptop speaker</option>
	<option>Mobile phone speaker</option>

	<option>Studio headphones</option>
	<option>Hi-end headphones</option>
	<option>Medium quality headphones</option>
	<option>Ear buds</option>
</select>

<h5>
What is your relationship to music?</h5>


<select bind:value={userTypeValue}>
	<option>Pick</option>
	<option>Professional Studio Engineer</option>
	<option>Professional Artist</option>
	<option>Hobbyist Artist/Producer</option>
	<option>Audiophile</option>
	<option>Music Lover</option>
	<option>Something else</option>
</select>

{#if speakerValue != "Pick" && speakerValue != null && userTypeValue != "Pick" && userTypeValue != null }
	<br/><br/><br/>
	<button on:click={next}>I'm ready for the test! →</button>
{/if}

<style >
button {
    padding:20px; background: white; border: 1px solid black;
}
</style>

{#if localStorage.DEV}
<Todo />
{/if}
