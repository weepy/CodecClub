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

<svelte:component this={page} />


 

