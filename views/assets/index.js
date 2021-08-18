const main = document.querySelector('main')

fetch('/getusers').then(getDB=>{
    return getDB.json()
}).then(data=>{
    sendPostsHome(data)
}).catch(console.error)

function sendPostsHome(data){
    console.log(data);
    console.log(data.length);
    for (let i = data.length -1 ; i >= 0; i--) {
        let div = document.createElement('div')
        let divText = document.createElement('div')
        let divImage = document.createElement('div')
        let divLikes = document.createElement('div')
        let spanText = document.createElement('span')
        let spanLikes = document.createElement('span')
        let imgPost = document.createElement('img')
        let imgLikes = document.createElement('img')
        div.classList.add('card_post')
        divText.classList.add('text_post')
        divImage.classList.add('image_post')
        divLikes.classList.add('count_likes')
        imgPost.classList.add('image_post_view')
        spanText.textContent = data[i].text
        spanLikes.textContent = data[i].likes
        if(data[i].link_img){
            imgPost.src = data[i].link_img
            divImage.appendChild(imgPost)
        }
        imgLikes.src = './assets/icon/heart.svg'
        imgPost.setAttribute('data-id',  data[i].id)
        divLikes.setAttribute('data-id',  data[i].id)
        divLikes.setAttribute('data-like', 'false')
        divText.appendChild(spanText)
        divImage.appendChild(divLikes)
        divLikes.appendChild(spanLikes)
        divLikes.appendChild(imgLikes)

        div.appendChild(divText)
        div.appendChild(divImage)
        main.appendChild(div)
    }

    const countLikes = document.querySelectorAll('.count_likes')
    countLikes.forEach(loved=>{
        loved.addEventListener('click',()=>{
            let id = loved.getAttribute('data-id')
            let state = loved.getAttribute('data-like')
                let countNow = loved.firstChild.textContent
                console.log(state);
            if(state === 'false'){
                loved.firstChild.textContent = ++countNow
                console.log("id  : "+ id);
                fetch(`/add-love/id/:${id}`,{method: 'POST'}).then(data=>{
                    console.log(data);
                })
                loved.setAttribute('data-like','true')
            }else{
                console.log("true");
            }
        })  
    })

    const imagePostView = document.querySelectorAll('.image_post_view')
    imagePostView.forEach(img =>{
        img.addEventListener('click',()=>{
            let id = img.getAttribute('data-id')
            window.open(`http://localhost:3000/page/:${id}`)
        })  
    })
}
