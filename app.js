let fleches = document.querySelectorAll(".mid-between");
let thirds = document.querySelectorAll(".third");
let nth = document.querySelectorAll('.inner');
let astuce = document.querySelector(".astuce-card");
let navbar = document.querySelector(".en-tete");
let button = document.querySelector("button.commencer");
let item = document.querySelectorAll(".underline");
let images = document.querySelectorAll(".alternate");
let timer;
let count = 0;
let duree = 30;
let done = false;
let elt = document.querySelectorAll("a.link")[1];


// console.log(ceve);

const body = document.querySelector('body');

// body.addEventListener('mousemove', cursorCircle);
// body.style.zIndex = -1;
// const circle = document.createElement('div');


// function cursorCircle(e)
// {
//    console.log(circle.style.zIndex);
  

//    circle.style.backgroundColor = "rgb(255, 255, 255)";
//    circle.style.width = '50px';
//    circle.style.height = '50px';
//    circle.style.borderRadius =   '50%';
//    circle.style.position = 'absolute';
//    circle.style.zIndex = 5000;

//    circle.classList.add('circle');
//    body.appendChild(circle);

//    const x = e.clientX;
//    const y = e.clientY;

//    circle.style.transform = `translateX(${x}px) translateY(${y}px)`;
// }



function likeHove(i)
{
   nth[i].style.backgroundColor = "#F4421C";
   nth[i].style.border = "2px solid #F4421C";
   nth[i].style.color = "white";
}

function dehove(i)
{
   nth[i].style.backgroundColor = "white";
   nth[i].style.border = "2px solid #F4421C";
   nth[i].style.color = "rgb(192, 192, 192)";
}

function affiche(elt)
{
   let len = images.length
   for(let i=0; i< len; i++)
   {
      if(i === elt)
      {
         images[i].style.display = "inline";
         images[i].style.opacity = "1";
      }
      else
      {
         images[i].style.display = "none";
         images[i].style.opacity = "0";
      }
   }

}

function animation()
{
   count++;
   if(count < duree)
   {
      // comme si on a fait un hover
      dehove(2)
      likeHove(0);
      // astuce.style.backgroundImage = "url(\"images/canto.png\")";
      affiche(0);
   }
   else if(count === duree)
   {
      dehove(0);
      likeHove(1);
      // astuce.style.backgroundImage = "url(\"images/Canto1.PNG\")";
      affiche(1);
   }
   else if(count === duree*2)
   {
      dehove(1);
      likeHove(2);
      // astuce.style.backgroundImage = "url(\"images/Canto2.PNG\")";
      affiche(2);
   }
   else if(count == duree*3)
   {
      count = 0;
   }
}


function none(int)
{
   
}


window.addEventListener('scroll', () => {

   if(scrollY > 40)
   {
      navbar.style.backgroundColor = "rgb(255, 255, 255)";
      elt.style.Color = "#F4421C";


      if(scrollY > 600)
      {
         if(!done)
         {
            timer = setInterval(animation, 100);
            done = true;
         }
      }
   }
   else
   {
      navbar.style.backgroundColor = "rgb(252, 252, 227)";
      elt.style.Color = "rgb(99, 90, 90)";

   }

   
});
// background-image: url("images/canto.png");
// background-image: url("images/Canto1.PNG");
// background-image: url("images/Canto2.PNG"); 
