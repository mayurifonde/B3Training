'use strict';

/*console.log (document.querySelector('.message').textContent);


document.querySelector('.message').textContent = 'correct number!';

document.querySelector('.number').textContent =12;
document.querySelector('.score').textContent =10;

document.querySelector('.guess').value =22;
console.log(document.querySelector('.guess').value);*/


//onclick events

let secreatNumber= Math.trunc(Math.random() * 20) +1;
//document.querySelector('.number').textContent = secreatNumber;

let score =20;
let highscore =0;

const displayMessage = function(message)
{
    document.querySelector('.message').textContent =message;
}



document.querySelector('.check').addEventListener
('click',function()
{
const guess = Number(document.querySelector('.guess').value);
console.log(guess ,typeof guess);

if(!guess)
    {
        //document.querySelector('message').textContent ='no number';
        displayMessage('no number')
    }
    else if (guess === secreatNumber)
    {
        document.querySelector('.message').textContent = 'correct number!';
        document.querySelector('.number').textContent = secreatNumber;

document.querySelector('body').style.backgroundColor='#60b347';
document.querySelector('.number') .style.width= '30ren';



if(score>highscore)
{
    highscore=score;
    document.querySelector('.highscore').textContent =highscore;
}




    }
    // when guess is wrong
    else if (guess !== secreatNumber) 
        {
            if (score > 1)
    
    {
        document.querySelector('.message').textContent =guess > secreatNumber ? 'too high!': 'too';

        score--;
        document.querySelector('.score').textContent =score;
    }
        else{
            document.querySelector('.message').textContent = 'you have lost the game!';
            document.querySelector('.message').textContent = 0;        }

    }
}
        
    
   /*else if (guess >secreatNumber)
    {
        if (score > 1)
    
    {
        document.querySelector('.message').textContent = 'too high!';
        score--;
        document.querySelector('.score').textContent =score;
    }
        else{
            document.querySelector('.message').textContent = 'you have lost the game!';
            document.querySelector('.message').textContent = 0;        }

    }
    //guess is too low
    else if (guess < secreatNumber)
    {
        if (score > 1)
    
    {
        document.querySelector('.message').textContent = 'too low!';
        score--;
        document.querySelector('.score').textContent =score;
    }
        else{
            document.querySelector('.message').textContent = 'you have lost the game!';
            ocument.querySelector('.message').textContent = 0;        }

    }

        
       
    
    

    
*/
);

document.querySelector('.again').addEventListener
('click' , function ()
{
score=20;
secreatNumber= Math.trunc(Math.random() * 20) + 1;

document.querySelector('.message').textContent = 'stat guessing...';
document.querySelector('.message').textContent = score;
document.querySelector('.message').textContent = '?';
document.querySelector('.guess').value ='';

document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.number').style.width= '15ren';





});







