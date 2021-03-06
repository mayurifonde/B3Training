'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document. querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



const displayMovements =function(movements){
containerMovements.innerHTML='';

movements.forEach(function(mov,i) {
  const type =mov> 0 ? 'deposit':'withdrawal';
  const html= `
  <div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--deposit">${i+1}</div>
        
          <div class="movements__value">${mov}</div>
        </div>
        `;
       containerMovements .insertAdjacentHTML('afterbegin',html);
  
});
};
displayMovements(account1.movements);
console.log(containerMovements.innerHTML);






/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


const dogs=[
    {
        weight:22,curFood:250,owners:['alice','bob']
    },
    {
        weight:28,curFood:200,owners:['Matlida']
    },
    {
    weight:13,curFood:275,owners:['sarah','john']
    },
    {
    weight:32,curFood:340,owners:['Michel']
    },
];

dogs.forEach(dog=>(dog.recFood=Math.trunc(dog.weight**0.75*28)));


const dogsarah=dogs.find(dog=>dog.owners.includes('sarah'));
console.log(dogsarah);
console.log(
    `sarah's dog is eating too ${dogsarah.curFood>dogsarah.recFood? 'much' : 'little'}`

);

const ownersEatToomuch= dogs
.filter(dog=>dog.curFood>dog.recFood)
.flatmap(dog=>dog.owners);

console.log(ownersEatToomuch);

const ownersEatTooLittle= dogs
.filter(dog=>dog.curFood<dog.recFood)
.flatmap(dog=>dog.owners);

console.log(ownersEatTooLittle);


console.log(`${ownersEatToomuch.join('and')}'s dogs  eat too much!`);
onsole.log(`${ownersEatTooLittle.join('and')}'s dogs  eat too Little!`);


console.log(dogs.some(dog=>dog.curFood===dog.recFood));


const checkEatingOkay =dog=>
dog.curFood>dog.recFood*0.9 && dog.curFood<dog.recFood*1.1;

console.log(dogs.some(checkEatingOkay));


console.log(dogs.filter(checkEatingOkay));

const dogSorted=dogs.slice().sort((a,b)=>a.recFood-b.recFood);
console.log(dogSorted);














































    







]
  
    
    





















