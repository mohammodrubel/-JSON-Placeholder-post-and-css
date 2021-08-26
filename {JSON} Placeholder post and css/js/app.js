function getPost (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then (data => getPOstDisplay(data))
}
getPost()
function getPOstDisplay(posts){
    const postContainer = document.getElementById('posts')
    for (const post of posts){
        const div = document.createElement('div')
        div.classList.add('mainDiv')
        div.innerHTML=`
        <h3> ${post.title} </h3>
        <p> ${post.body} </p>
        `
        postContainer.appendChild(div)
    }
}