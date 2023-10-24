let observarClick = document.querySelector('menu')

observarClick.addEventListener('click', (event)=>{
    hoverEvent(event.target)
})

function hoverEvent(event){
    let btnTarget = event
    let activeElement = document.querySelector(`a[class="active"]`)
    if(event) {
        btnTarget.classList.add('active');
        if(activeElement){
            activeElement.classList.remove('active');
        }
    }
}