const sounds = ['Song1', 'Song2', 'Song3', 'Song4', 'Song5', 'Song6']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSong()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').
    appendChild(btn)
})

function stopSong() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currenTime = 0;
    })
}
