'use strict'
let Aboutme =  prompt('do u like programing?')
let count=0

if(Aboutme.toLowerCase()  === 'yes'|| Aboutme.toUpperCase() === 'YES')
{
    alert('come and join code partener')
    alert('I am one of the student of the school')
    Console.log(Aboutme)
    count++
}
else if(Aboutme.toLowerCase() === 'no'|| Aboutme.toUpperCase() === 'NO')
{
alert('take your time think again')
alert('if u need help contact me')
console.log(Aboutme)
}

let fun = prompt('do u know Github?')
       // alert('I also') 
console.log(fun)
if(fun == "yes"|| fun == "YES"){
    alert('I also')
    //console.log(fun)
    count++
}
else if (fun.toLowerCase()== "no"|| fun.toUpperCase() === "NO")
{
alert('I am ready to help by giving all the information that I know')
alert('google abut Github')
Console.log(fun)
}

let subject = prompt('do u have great idea in your mind?')
if(subject == "yes"|| subject == "YES"){
    alert('come on and make it real by learning codes')
    console.log(subject)
    count++
}

else if(subject.toLowerCase() === 'no'|| subject.toUpperCase() === 'NO')
{
    alert('check your self each and every one have diffrent new idea')
    console.log(subject)
}
let gear = prompt('do u think programing makes life easy?')

if(gear.toLowerCase() === 'yes'|| gear.toUpperCase() === 'YES')
{
    alert('exactly')
console.log(gear)
count++
}
else if(gear.toLowerCase() === 'no'|| gear.toUpperCase() === 'NO')
{
    alert('check how to work your cellphone')
    console.log(gear)
}
let join = prompt('do use css before?')
if(join.toLowerCase()=== 'yes'|| join.toUpperCase()=== 'YES')
{
    alert("that makes ur  coding languge to be intersting astetically")
    console.log(join)
    count++
}
else  if(join.toLowerCase()=== 'no'|| join.toUpperCase()=== 'NO')
{
alert('try it that is good')
console.log(join)
}
let counter = 3
let x = Math.floor((Math.random() *20)+10);
console.log(x)
while(counter> 0){
    let value=prompt('guess any number b/n 10 and 20')
    let number=parseInt(value,10)
    if(x<number){
        alert('your guess it high go ahead and try another you have '+counter +'chance')
        continue
    }
    else if (x>number){
        alert('you guess is to low go ahead and guess another you have '+counter +'chance')
        continue
    }else if (x==number){
    alert('great job you get  it')
    count++
    break
    }
    counter--;
    console.log( counter.length);
}
confirm('do you want to show your result?')
if(true){
    alert('you get '+count+ ' of 7')
}
else{
    alert('thanks')
}
 let sub=['physics','biology','programming','maths']
 let counterr=6
 while(counterr>=0){
    let y = prompt('which subject is intresting for me'+'and you have '+counterr+'chance')
    if (y.toLowerCase()=='programming'||y.toLowerCase()=='physics'){
    alert('you get it and the posssible answer is physics and programming')
    counter++;
    break
    }
   
    else{
        alert('please try again ')
   
    }
 }



