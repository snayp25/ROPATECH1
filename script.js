  // const burger = document.getElementById('burger');
  // const navList = document.getElementById('navList');

  // burger.addEventListener('click', () => {
  //   burger.classList.toggle('active');
  //   navList.classList.toggle('active');
  // });

let inputs = document.querySelectorAll('input');
let values = [];
let button = document.querySelector('button');
function login() {
    for (i = 0; i < inputs.length; i++){
      values.push(inputs[i].value);
      
    }
    console.log(values);
    
    let month = document.querySelector('#month');
    if (month.value < 1 && month.value > 12){
      let error = document.querySelector('.error');
      error.innerHTML = 'Введите месяц от 1-12';
    }
  }
  


const element = document.getElementById('number');
const CVV=document.getElementById('cvv');
  IMask(element, {
    mask: '0000 0000 0000 0000'
  });
  IMask(CVV, {
    mask: "000"
  })

button.addEventListener('click', login);