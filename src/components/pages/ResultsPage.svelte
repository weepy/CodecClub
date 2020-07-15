<script>

import { onMount } from 'svelte'
import { getSnapshot } from '../../Firebase.js'

let results = []

onMount(async () => {
    
    const snapshot = await getSnapshot()

    results = processSnapshot(snapshot)

   
})

let header=[]

function processSnapshot(snapshot) {
    const rows = Object.values(snapshot)
    
    const ext = Object.keys(rows[0].results).sort()

    header = [
        "userId", "sessionTime", "file", ...ext, "speakers"
    ]

    return rows.map(row => {
        const res = row.results
        return [
            row.userId, 
            row.sessionTime,
            row.file,
            ...(Object.keys(res).sort().map(x => res[x])),
            row.speakers
        ]
    })

    
}
</script>

<h1>Results</h1>

<table>
<tr>
{#each header as name}
    <th>{name}</th>
{/each}
</tr>

{#each results as row}
    <tr>
    {#each row as val}
        <td>{val}</td>
        {/each}
    </tr>
{/each}
</table>

<style>
table {
    border-collapse: collapse;
    font-size: 12px;
}
td, th {
    border: 1px solid #ccc;
    padding: 3px;

}
</style>