<script>
	export let score = null
	export let filename = null
	export let title = null
	filename="https://b33p.live/2ra4a6dz26v/bcpfw.ogg"
	import AudioPlayer from './AudioPlayer.svelte'
</script>

<div>

<AudioPlayer src="{filename}" ></AudioPlayer>
<span>	 {title}	</span>
<select bind:value={score}>
   	<option value={null}>Rating</option>
	  <option value={1}>1 - Best</option>
		<option value={2}>2</option>
		<option value={3}>3</option>
		<option value={4}>4</option>
		<option value={5}>5 - Worst</option>
</select>	
</div>


<style>
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