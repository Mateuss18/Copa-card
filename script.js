let isIgnite = true
const cardAnimation = document.querySelector('.card-animaion')
function changeCard(event) {
    const card = event.currentTarget
    const bg = isIgnite ? 'explorer' : 'ignite'
    isIgnite = !isIgnite
    card.style.backgroundImage = `url(./assets/card-${bg}.svg)`
    cardAnimation.classList.toggle('card-animaion')
    card.classList.toggle('rotate-card')
}
