<script>
import { appendEmail } from '../../Firebase.js'

let email
let showemailform = true
function sub() {
	if(email) {
		appendEmail(email)
		showemailform = false
	}
}
</script>

<h1>Yay Thanks!</h1>

<p>Psssst - thanks for taking part in this experiment, the 2<sup>nd</sup> rule of Codec Club is: <br/><br/> &nbsp;&nbsp;&nbsp;<i>"Tell everyone you know about Codec Club!"</i></p>

<p>If you’re interested in when we share the results of this survey, leave your email with us and we’ll make sure to keep you up to date.</p>

{#if showemailform}
	<input type="text" placeholder="email" bind:value={email} />
	<button on:click={sub}>submit</button>
{:else}
	<p><b>Thanks we'll be in touch!</b></p>
{/if}