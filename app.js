let fleches = document.querySelectorAll(".mid-between");
let thirds = document.querySelectorAll(".third");

console.log(thirds);

for (let i = 0; i < thirds.length; i++) {
   thirds[i].style.display = "none"; 
}


// for (let i = 0; i < fleches.length; i++)
// {
//     fleches[i].onmouseenter = hove;
//     fleches[i].onmouseleave = unHove;
//     // fleches[i].addEventListener("", unHover);

// }

function hove(i)
{
   fleches[i-1].style.color = "white";
   thirds[i-1].style.display = "block";
   // console.log("hove");
}

function hover()
{
   console.log("Hover lancee");
   for (let i = 0; i < fleches.length; i++) 
   {
      // fleches[i-1].style.color = "white";
      thirds[i-1].style.display = "block";
   }
}

function unHover(i)
{
   fleches[i-1].style.color = "rgb(209, 205, 205)";
   //thirds[i-1].style.display = "none";
   // console.log("unhove");
}