const fs = require('fs')
const { execSync } = require('child_process');

const CODECS = {
    ogg: "libvorbis",
    opus: "libopus",
    aac: "aac",
    flac: "flac"
}

function compress(name, ext, bitrate) {


    const inputFile = `${__dirname}/../audio-source/${name}.wav`
    const outputFile = `${__dirname}/../public/audio/${name}.${bitrate}.${ext}`

    const codec = CODECS[ext]
    const b = ext == "flac" ? "" : `-b:a ${bitrate}K`
    const cmd = `ffmpeg -y -i "${inputFile}" -c:a ${codec} ${b} "${outputFile}"`

    console.log(cmd)
    execSync(cmd)

    console.log("done")

}

const config = {
    files: [],
    //ext: ['wav.flac', '96.aac','128.aac','256.aac','64.aac']
    ext: ['wav.flac', '256.aac']
}


execSync(`rm -rf ${__dirname}/../public/audio/`)
execSync(`mkdir ${__dirname}/../public/audio/`)

fs.readdirSync('./audio-source').forEach(x => {
    const [name, ex] = x.split(".")
    
    if(ex != "wav") 
        return

    config.ext.forEach((ext) => {
        // if(ext =="wav") {
        //     execSync(`cp "${__dirname}/../audio-source/${name}.wav" "${__dirname}/../public/audio/${name}.wav"`)
        // }
        // else {
        const [bitrate, codec] = ext.split(".")
        compress(name, codec, bitrate )
        // }
    })
    

    config.files.push(name)
    

    
})


fs.writeFileSync(__dirname+"/../src/config.js", `export default ${JSON.stringify(config)}`)

