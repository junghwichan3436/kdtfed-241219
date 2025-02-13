const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");

const jukeboxChange = () => {
  menuGame.style = "background:#55b2e4;  color:#fff";
  menuGame.style = "background:#fff;  color:#000";
  menuJukebox.style = "background:#55b2e4;  color:#fff";
};

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuGame.style = "background:#fff;  color:#000";
  menuGame.style = "background:#55b2e4;  color:#fff";
  menuJukebox.style = "background:#55b2e4;  color:#fff";
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuGame.style = "background:#55b2e4;  color:#fff";
  menuGame.style = "background:#55b2e4;  color:#fff";
  menuJukebox.style = "background:#fff;  color:#000";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);

//count event 우리가 자체적을로 쿠키를 만들어 넣겠다 원래는 서버에서 주어야 한다

const getFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = "0" + (date.getMonth() + 1);
  const day = "0" + date.getDate();
  // console.log(year, month, day);
  return `${year}-${month}-${day}`;
};
const todayDate = getFormattedDate();
const dailyCookieName = `pageHit_${todayDate}`;

const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 1);
const expireDateString = expireDate.toGMTString();

const cookieVal = (cookieName) => {
  const thisCookie = document.cookie.split(";");
  for (let i = 0; i < thisCookie.length; i++) {
    if (cookieName === thisCookie[i].split("=")[0]) {
      return thisCookie[i].split("=")[1];
    }
  }
  return 0;
};

let dayilyHitCt = parseInt(cookieVal(dailyCookieName));
if (isNaN(dayilyHitCt)) {
  dayilyHitCt = 0;
}
dayilyHitCt++;
document.cookie = `${dailyCookieName}=${dayilyHitCt}; expires=${expireDateString}`;

let totalHitCt = parseInt(cookieVal("totalPageHit"));
if (isNaN(totalHitCt)) {
  totalHitCt = 0;
}
totalHitCt++;
document.cookie = `totalPageHit =${totalHitCt}; expires=Fri, 31 Dec 999 23:59:59 GMT`;

/*
쿠키값은 어떻게 생겼을까?

"쿠키네임=쿠키값; expires=만료날짜"
"pageHit_2025-02-07=5 ; expires=2025-02-08"
*/

document.querySelector(".zero").innerText = dayilyHitCt;
document.querySelector(".total").innerText = totalHitCt;
