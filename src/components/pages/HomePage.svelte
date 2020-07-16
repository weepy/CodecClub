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

</script>

<h1>Codec Club</h1>

<h2>Welcome to Codec Club.</h2>
<p>This is a scientific test known as a blind listening test to try to determine the limits of compression on audio files. </p>
<p>We want to find out if the you can hear the difference between different rates of high end audio codecs.</p>
<p></p>
<p>
	Before we start - what are you listening with?	
</p>


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

<p>
And what is your relationship to music / audio?</p>


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
