<script>

import router from "page"


import HomePage from './components/pages/HomePage.svelte'
import ResultsPage from './components/pages/ResultsPage.svelte'
import TestPage from './components/pages/TestPage.svelte'
import DonePage from './components/pages/DonePage.svelte'


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


</script>

<div class="main">
<svelte:component this={page} />
</div>


 

<style>
:global(body) {
    background: white;
    border-top: 5px solid hotpink;
    margin: 0;
    padding: 0;
}

.main {
    width: 800px;
    margin: 0 auto;
    
    background:rgba(100,250,250,0.9);
    height: 100%;
    padding: 50px 20px;
    color: black;
    
}
</style>