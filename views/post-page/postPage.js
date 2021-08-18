console.log("dpom");
const main = document.querySelector('main')
const logo = document.querySelector(".logo");
const darkMode = document.querySelector(".dark_mode");
const body = document.querySelector("body");
const backHome = document.querySelector(".back_home");

backHome.addEventListener("click", () => {
    location.assign('/')
  });

logo.addEventListener("click", () => {
    location.reload();
  });

  darkMode.addEventListener("click", () => {
    body.classList.toggle("dark");
  });

let id = window.location.href.split(':')[3]
console.log(id);
fetch(`/page/dataid/:${id}`).then(getDB=>{
    return getDB.json()
}).then(data=>{
    console.log(data);
    pagePost(data)
}).catch(console.error)

function  pagePost(data){

for (let i = 0; i < data.length; i++) {
    main.innerHTML += 
`
<div class="card_post">
    <div class="text_post">
        <span>${data[i].text}</span>
    </div>
    <div class="image_post">
        <img src="${data[i].link_img}" alt="">
        <div class="count_likes">
            <span>${data[i].likes}</span>
            <img src="../assets/icon/heart.svg" alt="">
        </div>
    </div>
</div>
`
}


}