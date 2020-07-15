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