
let popupСall = document.querySelector('.popup-call')
let openPopupСall = document.querySelectorAll('.call-btn')
let closePopupCall = document.querySelector('.popup-close')

openPopupСall.forEach(element => {
    element.addEventListener('click', function () {
        popupСall.style.display = 'flex'
    })
});

closePopupCall.addEventListener('click', function (event) {
    event.preventDefault()
    popupСall.style.display = 'none'

    if (event.target.classList.contains('capture-form-btn')) {

    }
})