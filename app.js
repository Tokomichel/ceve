let fleches = document.querySelectorAll(".mid-between");
let thirds = document.querySelectorAll(".third");
let nth = document.querySelectorAll('.inner');
let astuce = document.querySelector(".astuce-card");
let navbar = document.querySelector(".en-tete");
let timer;
let count = 0;
let duree = 30;
let done = false;








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

function animation()
{
   count++;
   if(count < duree)
   {
      // comme si on a fait un hover
      dehove(2)
      likeHove(0);
      astuce.style.backgroundImage = "url(\"images/canto.png\")";
   }
   else if(count === duree)
   {
      dehove(0);
      likeHove(1);
      astuce.style.backgroundImage = "url(\"images/Canto1.PNG\")";
      
   }
   else if(count === duree*2)
   {
      dehove(1);
      likeHove(2);
      astuce.style.backgroundImage = "url(\"images/Canto2.PNG\")";
   }
   else if(count == duree*3)
   {
      count = 0;
   }
}


window.addEventListener('scroll', () => {

   if(scrollY > 40)
   {
      navbar.style.backgroundColor = "rgb(255, 255, 255)";
      console.log("ok "+navbar.style.backgroundColor);

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
   }

   
});
// background-image: url("images/canto.png");
// background-image: url("images/Canto1.PNG");
// background-image: url("images/Canto2.PNG"); 