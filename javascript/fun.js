'use strict';



const poll =
{
    question:"what is your favourite programming langauge?",
options: ['0: javascript', '1: python', '2: Rust','3: c++'],

answers:new Array(4).fill(0),
registerNewAnswer()

{
const answer =Number(
    prompt(
        `${this.question}\n${this.options.join('\n')}\n(write option number)`
    )
);
console.log(answer);


typeof answer === 'number' && answer< this.answers.length && this.answers[answer]++;

this.displayResults();
this.displayResults ('string');




},
displayResults(type = 'array')
{
    if (type === 'array')
    {
        console.log(this.answers);
    }
    else if
    (type === 'string')
    {
        console.log( `poll results are ${this.answers.join(',')}`);
    }

    
},


};
//poll.registerNewAnswer()

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));


poll.displayResults.call({answer: [5,2,3],},'string');













