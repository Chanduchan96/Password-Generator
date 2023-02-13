const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordBtn=document.querySelector('#passButton');
const tab1El=document.getElementById('passwordTab1');
const tab2El=document.getElementById('passwordTab2');



function randomPassword()
{
    let randomPass="";
    for(i=0;i<15;i++)
    {
        let indexnum=Math.floor(Math.random()*characters.length);
        randomPass+=characters[indexnum];
    }
    return randomPass;
}

function generatePass()
{
tab1El.textContent=randomPassword();
tab2El.textContent=randomPassword();
}