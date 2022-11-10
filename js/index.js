const container = document.querySelector(".blogs")
const form = document.querySelector(".search")

const renderPosts = async (term) =>{
    let url = "http://localhost:3000/posts?_sort=likes&_order=desc'"
    if(term){
        url += `&q=${term}`
    }
    const res = await fetch(url)
    const posts = await res.json()
    console.log(posts)
    let template = ""
    posts.forEach( post=> {
        template += `
        <div class="post">
            <h1>${post.title}</h1>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body.slice(0, 200)}</p>
            <a href="./details.html?id=${ post.id }">Read more...</a>
        </div>`
    } )
    container.innerHTML = template
}

form.addEventListener("submit", e => {
    e.preventDefault()
    renderPosts(form.term.value.trim())
})

window.addEventListener("DOMContentLoaded", () =>renderPosts())