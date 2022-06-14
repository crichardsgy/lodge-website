let laterdate = new Date("Sep 23, 2021 09:22:33").getTime();
let today = new Date().getTime();
var time = laterdate - today;

var days = Math.floor(time / (1000 * 60 * 60 * 24));

let banner = document.getElementById("limitedoffer");
banner.innerHTML = days + " Days Left For 50% Off On All Tours";