"use strict";
function setDate()
{
    var e=new Date,t=e.getSeconds(),
        n=t/60*360+90,
        a=e.getMinutes(),
        s=a/60*360+90,
        r=e.getHours(),
        o=r/12*360+a/60*30+90;

   secondHand.style.transform="rotate("+n+"deg)",minuteHand.style.transform="rotate("+s+"deg)",
   hourHand.style.transform="rotate("+o+"deg)",secondHand.style.transition=90===n?"all 0s":"all 0.5s",
   minuteHand.style.transition=90===s?"all 0s":"all 0.5s"
}

var secondHand=document.querySelector(".second-hand"),
    minuteHand=document.querySelector(".min-hand"),
    hourHand=document.querySelector(".hour-hand");

setInterval(setDate,1e3);