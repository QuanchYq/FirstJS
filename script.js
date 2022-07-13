const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[2].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'yellow';

box.style.cssText = 'background-color: blue; width: 500px';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue'
})

const div = document.createElement('div');
// const text = document.createTextNode('Hello world')

div.classList.add('black');

wrapper.appendChild(div);

// wrapper.append(div)
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

//
// wrapper.insertBefore(div,hearts[0])
// circles[0].remove();
// hearts[0].replaceWith(circles[0]);
// wrapper.removeChild(circles[0], hearts[0]);

// div.innerHTML = '<h1>Helloworld</h1>';
// div.textContent = "Hello";
div.insertAdjacentHTML('afterbegin','<h2>Hello</h2>')




