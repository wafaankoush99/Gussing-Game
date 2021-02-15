
'use-strict';


let userName = prompt ('What is your name? ');
//console.log(userName);
alert('welcome ' + userName);


let myName = prompt ('My name is Wafa? yes/no ');
//console.log(myName);

myName = myName.toLocaleLowerCase(); myName.toLocaleUpperCase();


switch (myName) {
case 'yes':
//console.log('Right answer ♥');
  alert('Right answer ♥');
  break;
case 'no':
//console.log('I am really Wafa')
  alert('I am really Wafa');
  break;
default:
//console.log('You must write yes or no')
  alert('You must write yes or no');
  break;
}






let favDish = prompt ('Do I like pizza ? y/n');
///console.log(favDish);
favDish = favDish.toLocaleLowerCase(); favDish.toLocaleUpperCase();


switch (favDish) {
case 'y':
//console.log('Right, pizza is my favourite dish');
  alert('Right, pizza is my favourite dish');
  break;
case 'n':
//console.log('Ops, I love pizza so much');
  alert('Ops, I love pizza so much');
  break;
default:
//console.log('You must write y or n')
  alert('You must write y or n');
  break;
}




let favColor = prompt ('I love dark colours? y/n');
//console.log(favColor);
favColor = favColor.toLocaleLowerCase(); favColor.toLocaleUpperCase();


switch (favColor) {
case 'y':
//console.log('No, not exactly .. I like lightly colours more');
  alert('No, not exactly .. I like lightly colours more');
  break;
case 'n':
//console.log('Yes, how do you know that ');
  alert('Yes, how do you know that ');
  break;
default :
//console.log('You must write y or n')
  alert('You must write y or n');
  break;
}




let artLove = prompt ('Do I like drawing and art? y/n ');
//console.log(artLove);
artLove = artLove.toLocaleLowerCase(); artLove.toLocaleUpperCase();


switch (artLove) {
case 'y':
//console.log('Yes, I am fond of everything related to art ');
  alert('Yes, I am fond of everything related to art ');
  break;
case 'n':
//console.log(' Just the opposite :( ');
  alert(' Just the opposite :( ');
  break;
default:
//console.log('You must write y or n')
  alert('You must write y or n');
  break;
}




let loveMe = prompt ('Do you love me ? yes or no ');
//console.log(loveMe);
loveMe = loveMe.toLocaleLowerCase(); loveMe.toLocaleUpperCase();


switch (loveMe) {
case 'yes':
  //console.log('I love you toooo ♥ ');
  alert('I love you toooo ♥ ');
  break;
case 'no':
  //console.log(' Broken heart </3 ');
  alert(' Broken heart </3 ');
  break;
default:
  //console.log('You must write yes or no');
  alert('You must write yes or no');
  break;
}


alert('Thank you ' + userName + ' for your visitng ♥');



