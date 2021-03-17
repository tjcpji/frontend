
// 02.데이터 종류
console.log('HEROPY');

let myName = "HEROPY";
let email = 'thesecon@gmail.com';
let hello = `Hello ${myName}?!`;

console.log(myName);
console.log(email);
console.log(hello);

let user = {
    name: 'HEROPY',
    age: 85
};

console.log(user);
console.log(user.age);
console.log(user.name);

// 06 ~ 07. DOM API
let boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function () {
    console.log('Click~!');
    boxEl.classList.add('active');
    console.log(boxEl.classList.contains('active'));
    boxEl.classList.remove('active');
    console.log(boxEl.classList.contains('active'));
});

const boxEls = document.querySelectorAll('.boxes');

boxEls.forEach(function (boxEl, index){
    boxEl.classList.add(`order-${index + 1}`);
    console.log(index, boxEl);
})

const boxElement = document.querySelector('.box');

console.log(boxElement.textContent);

boxElement.textContent = 'HEROPY?!';
console.log(boxElement.textContent);