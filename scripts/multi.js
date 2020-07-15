const fs = require('fs')
const { execSync } = require('child_process');




function run(b, c) {
    
    execSync(`cp "source/Track 1 - Full Track.wav" multi/multi-${b}-${c}.wav`)
    for(let i=0; i<c;i++) {
        console.log(i)
        execSync(`ffmpeg -y -i multi/multi-${b}-${c}.wav -c:a libopus -b:a ${b}K multi/multi-${b}-${c}.opus`)
        execSync(`ffmpeg -y -i multi/multi-${b}-${c}.opus  multi/multi-${b}-${c}.wav`)       
    }    
}

execSync(`cp "source/Track 1 - Full Track.wav" multi/original.wav`)

run(128, 1)
run(128, 2)
run(128, 50)
run(256, 1)
run(256, 2)
run(256, 50)
run(384, 1)
run(384, 2)
run(384, 50)