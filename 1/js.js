const why = [
    '??',
    'tes sur Oumouss ?',
    'vraiment Oumouss?',
    'reflechis un peu Oumalkaire',
    'reponse finale?',
    'penses y bien Oumalkaire',
    'Derniere chance',
]
const noButton = document.querySelector('button:last-of-type')
const yesButton = document.querySelector('button:first-of-type')

let scale = 1;
const no = () => {
    noButton.innerHTML = why[Math.floor(Math.random()*6)]
    scale +=0.5
    yesButton.style.transform = `scale(${scale})`
}

const careless = () => {
    const audio = new Audio('careless.mp3')
    audio.play()
    document.querySelector('.buttons').remove()
    document.querySelector('.title').remove()
    document.querySelector('.reveal').style.display = 'flex'
}