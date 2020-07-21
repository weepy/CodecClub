<script>

import router from "page"


import HomePage from './components/pages/HomePage.svelte'
import ResultsPage from './components/pages/ResultsPage.svelte'
import TestPage from './components/pages/TestPage.svelte'
import DonePage from './components/pages/DonePage.svelte'
import { detect } from 'detect-browser'

let page


router('*', (ctx) => {
    // console.log(ctx)

    if(ctx.hash == "results") {
        page = ResultsPage
    }
    else if(ctx.hash == "/") {
        page = page || HomePage

    }
    else if(ctx.hash == "test") {
        page = TestPage
    }
    else if(ctx.hash == "done") {
        page = DonePage
    }
    else {
        page = HomePage
    }
})


router()

let showWarning = true

const browser = detect();

// handle the case where we don't detect the browser
if (browser) {
  if(browser.name == "chrome" && (browser.os == "Mac OS" || browser.os.match(/Windows/))) {
      showWarning = false
  }
}

</script>

<div class="wrapper">
    <div class="main">
<svelte:component this={page} />
</div>
</div>

{#if showWarning}
<footer>
<p>Not using desktop Chrome? </p>
<p>We know there's a few bugs - please use chrome on a desktop if you can </p>
</footer>
{/if}

 

<style>
:global(body) {
    background: white;
    border-top: 5px solid hotpink;
    margin:0;
    padding:0px;
}

footer { 
    bottom :0;
    position: fixed;
    height: 10vh;
    width: 100%;    
    font-size: 14px;
    color: black;
    font-weight: bold;
    background: hotpink;
    padding: 30px;
}


.main {
    width: 90vw;
    max-width: 600px;
    margin: auto;
    
    background:rgba(100,250,250,0.9);
    height: 100vh;
    padding: 5vw;
    color: black;
    
}
</style>