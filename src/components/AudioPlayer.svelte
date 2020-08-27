<script context="module">
	let current;
</script>

<script>
	export let src;
	let audio;
	export let playing = false;

	

	function stopOthers() {
		if (current && current !== audio) {
			current.pause();
			current.currentTime = 0;
		}
		current = audio;
	}
	
	function play() {
		let jumpto = 0
		if (current && current !== audio) {
			current.pause()
			
			jumpto = current.currentTime == current.duration ? 0 : current.currentTime
			current.currentTime = 0;
		}
		if(current == audio && current.currentTime < current.duration) {
			current.pause()
			playing = false
			current = null
		}
		else {
			current = audio;
			current.currentTime = jumpto+0.1
			current.play()
			playing = true			
		}

	}
	

</script>


	
<audio
	
	bind:this={audio}
	on:pause={() => playing = false}

	preload
	{src}
>
</audio>

<button on:click={play} class:playing>
<svg width="30" height="30" viewBox="0 0 512 512">
<path d="M150 130l200 120-200 120z" fill="#000000"/>
</svg>
</button>
<style>

button svg {
	width: 30px; height: 30px;
}
	button:focus {
		border: 1px solid black;
	}
	
	button {
		border: 1px solid black;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		line-height:4px;
		padding:0px;
		margin:0px;
    	transform: translate(0px, 9px);

	}
	audio { 
			height: 30px;
    padding: 0;
    margin: 0;
		transform: translate(0px, 10px);
	}
	.playing { background: pink }
</style>
