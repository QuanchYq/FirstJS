const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block')
// console.log(btns[1].classList.add('red'))
// console.log(btns[0].classList.item(2));
// console.log(btns[0].classList.toggle('yellow'))
// if (btns[1].classList.contains('red')) {
//     console.log('red')
// }

// btns[0].addEventListener('click',() => {
//     btns[1].classList.toggle('red')
// })

wrapper.addEventListener('click',(event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log('hello')
    }
})
const btn = document.createElement('button');
btn.classList.add('red')
wrapper.append(btn)