const openClose = () => {
    const now = new Date()
    const day = now.getDay()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    setTimeout(openClose, 1000)
    if (day > 1 && (((hours === 11 && minutes >= 30) || (hours >= 12 && hours < 14)) || ((hours >= 18 && hours < 22)|| (hours === 22 && minutes < 30)))) {
        return true
    } else if (day === 0 && ((hours === 11 && minutes >= 30) || (hours >= 12 && hours < 14))) {
        return true
    } else {
        return false
    }
}
const opening = document.querySelector('.opening')
if (openClose()) {
    opening.textContent = 'open'
} else {
    opening.textContent = 'closed'
}

// fonction à mettre dans un autre .js ?
// La fonction est opérationnelle lorsque le restaurant est ouvert, je dois encore la régler pour qu'elle fonctionne quand le resto est fermé


const livraison = () => {
    let openDelay = Math.floor(Math.random() * 10)
    let deliveryTime
    let now = new Date()
    if (openClose()) {
        deliveryTime = now.getTime() + ((30 + openDelay) * 60 * 1000)
    } else {
        deliveryTime = now.getTime() + ((30 + openDelay) * 60 * 1000) // C'était juste pour faire des tests mais c'est pas bon dans le else
    }
    return deliveryTime
}
let x = livraison()
console.log(x)
const change = () => {
    const now = new Date()
    const there = x
    
    const nowToThere = there - now.getTime()
    if (nowToThere <= 0) {
        return
    }
    let hours = Math.floor(nowToThere / (1000 * 60 * 60))
    if (hours < 10 && hours !== 0) {
        hours = '0' + hours
    }
    let minutes = Math.floor((nowToThere - (hours * (1000 * 60 * 60))) / (1000 * 60))
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    let seconds = Math.floor((nowToThere - (hours * (1000 * 60 * 60)) - (minutes * (1000 * 60))) / 1000)
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    
        if (hours > 0) {
            console.log(hours + ':' + minutes + ':' + seconds)
            // time.textContent = hours + ':' + minutes + ':' + seconds
        } else if (minutes > 0) {
            console.log(minutes + ':' + seconds)
            // time.textContent = minutes + ':' + seconds
        } else {
            console.log(seconds)
            // time.textContent = seconds
        }
    setTimeout(change, 1000)
}

change()