window.addEventListener('scroll', () => {
    document.querySelector('header')
    .classList.toggle('window-scroll', window.scrollY>0)
})

const plus = document.querySelectorAll('.nav');

plus.forEach(i => {
    i.addEventListener('click', () => {
        i.classList.toggle('active');

        const icon = i.querySelector('.title i');
        if(icon.className === 'bx bx-plus'){
            icon.className = 'bx bx-minus'
        }else {
            icon.className = 'bx bx-plus'
        }
    })
})