let isDoorOpened = false

const trigger = () => {
    if(isDoorOpened) {
        isDoorOpened = false
        let audio = new Audio('sounds/winxp_logout.mp3')
        audio.play().then(() => console.log('exit'))
    } else {
        isDoorOpened = true
        let audio = new Audio('sounds/winxp_startup.mp3')
        audio.play().then(() => console.log('enter'))
    }
}

//функцию trigger() как раз нам надо вызывать на срабатывание датчика движения