export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}


export function findPositionMap(_scores) {
    const scores = [..._scores].sort((a,b) => a-b)

    const ret = {}
    
    for(let i=0;i<scores.length;i++) {
        
        const score = scores[i]
        
        if(i > 0 && scores[i] == scores[i-1]) {
            ret[score] = ret[scores[i-1]]
        }
        else {
            ret[score] = (i+1)
        }
        
        
    }
    
    return ret
}

let loadedUrls = {}

function preloadAudio(url) {
    return new Promise(resolve => {
        const a = new Audio

        a.oncanplaythrough =() => {
            resolve()
        }
        a.preload = true
        a.src = url
    })
}

export async function preload(urls, progressCallback=()=>{}) {

    
    return new Promise(async (resolve) => {
        for(let i=0; i<urls.length;i++) {
            progressCallback(i/urls.length)
            const url = urls[i]
            if(loadedUrls[url]) {
                continue
            }
            const response = await fetch(url)
            if (!response.ok) {
                console.error("HTTP error, status = " + response.status)
            }
            loadedUrls[url]= true
        }
    
    
        progressCallback(1)
        resolve(true)
    })

}


export async function preloadAll(files, extensions, progressCallback) {
	for(var i=0; i<files.length;i++) {
		let file = files[i]
        console.log(file)
        await preload(extensions.map( ex => `/audio/${file}.${ex}`), progressCallback)
        
	}
}