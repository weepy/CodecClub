<script>
	export let score = null
	export let filename = null
	export let title = null
	export let norate = false
	export let extension
	import AudioPlayer from './AudioPlayer.svelte'
	import { fade} from 'svelte/transition'

	let extensionStr = ""

	$: {
		if(extension) {
			extensionStr = extension.replace(".","k ")

			if(extension.match("flac"))
				extensionStr = "source"
		}
	}

</script>

<div>

<AudioPlayer src="audio/{filename}" ></AudioPlayer>
<span>	 {title}	</span>



{#if norate == false}
	<select bind:value={score}>
		<option value={null}>Rating</option>
		<option value={1}>1 - Most similar</option>
			<option value={2}>2</option>
			<option value={3}>3</option>
			<option value={4}>4</option>
			<option value={5}>5 - Least similar</option>
	</select>	

	{#if extension}
	<span class="answer" in:fade>{extensionStr}</span>
	{/if}
{/if}
</div>


<style>
div {
	height: 50px;
}
.answer { background: black; color: white;padding:5px; margin-left: 5px;}
	audio {
		height: 30px;
    padding: 0;
    margin: 0;
		transform: translate(0px, 10px);
	}
	span {
		padding-right: 50px;
		padding-left: 10px;
	}
</style>