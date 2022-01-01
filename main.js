"user strict";

let day_html = document.getElementById('day');
let hours_html = document.getElementById('hours');
let minuts_html = document.getElementById('minuts');
let section_html = document.getElementById('section');

function countTime(){
    let setDate = new  Date("1 Jan 2022 0:00:00");
    let liveTime = new Date();
    let  compare = setDate - liveTime;
    let second_count = Math.floor(compare/1000);
    let minite_count = Math.floor(second_count/60);
    let hour_count  = Math.floor(minite_count/60);
    let day_count = Math.floor(hour_count/24);

    let secend = second_count % 60;
    let minite = minite_count % 60;
    let hour = hour_count % 24;
    let day = day_count % 30;

   day_html.innerHTML = day;
   hours_html.innerHTML = hour;
   minuts_html.innerHTML = minite;
   section_html.innerHTML = secend;

}
countTime();