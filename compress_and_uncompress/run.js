const fs = require('fs')
const { execSync } = require('child_process');



function compress(name, bitrate) {

    const inputFile = `${__dirname}/source/${name}.wav`
    const tmpFile = `${__dirname}/tmp.aac`

    const cmd = `ffmpeg -y -i "${inputFile}" -c:a aac -b:a ${bitrate}K "${tmpFile}"`



    execSync(cmd)

    const compressedFile = `${__dirname}/compressed/${name}.wav`
    // const cmd2 = `ffmpeg -y -i "${tmpFile}" -f u16le -ar 44100 -ac 2 "${compressedFile}"`
    const cmd2 = `ffmpeg -y -i "${tmpFile}"  "${compressedFile}"`

    execSync(cmd2)

    console.log("done")

}


execSync("rm -r ./compressed/*.wav")

fs.readdirSync('./source').forEach(x => {
    const [name, ex] = x.split(".")
    
    if(ex != "wav") 
        return

    compress(name, "256" )


    
})


