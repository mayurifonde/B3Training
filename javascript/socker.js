'use strict';

// Data needed for a later exercise
/*const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};*/

const game ={
    team1: 'mayuri fonde',
    team1: 'divyani chougale',
    players:[
    [
        'diya',
        'rani',
        'asmi',
        'kirti',
        'radha',
        'riya',
        'manu',
        'vishal',
        'neeti',
        'dipa',

    ],
    [
       'guli',
       'metika',
       'rajan',
       'maau',
       'rimi',
       'ditya',
       'gouri',
       'priti',
       'brandy',
       'siddhi',
       'poul',



    ],
],
score:'4:0',
scored: ['manu','dipa','riya','poul'],
date:'nov 9th,2037',
odds:
{
    team1:1.33,
    x:3.25,
    team2:6.5,
},
};



const [players1,players2]=game.players;
console.log(players1,players2);


const[gk,...fieldplayers]=players1;
console.log(gk,fieldplayers);

const allplayers =[...players1, ...players2];
console.log(allplayers);

const players1Final = [...players1, 'divya','rani','asmi'];

const {odds: {team1,x:draw,team2}} =game;
console.log(team1,draw,team2);

const pringoals =function(...players){
    console.log(players);


    console.log(`${players.length} goals were scored`);

};
//pringoals('divya','asmi','rani','priti');
//pringoals('divya','asmi','rani','priti');
pringoals(...game.scored);

team1 < team2 &&
console.log('team 1 is more likely to win');
team1 > team2 &&
console.log('team 1 is more likely to win');



























