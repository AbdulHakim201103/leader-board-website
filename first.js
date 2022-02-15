const topPlayer = document.getElementById('top-player-name').style.color = 'green';
const topBlogs = document.getElementById('top-blogs').style.color = 'blue';


const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = 'rgba(255, 99, 71, 1)';
    player.style.borderRadius = '30px'
    player.style.padding = '10px'  
}
 
const blogs = document.getElementsByClassName('blog');
for (const blog of blogs) {
    blog.style.backgroundColor = 'rgba(133, 130, 71, 1)';
    blog.style.borderRadius = '30px'
    blog.style.padding = '30px'  
    blog.style.margin = '10px'  
}

document.getElementById('button-add-item').addEventListener('click',function () {
    const newItem = document.createElement('li');
    newItem.innerText ='hello';
    const listItem = document.getElementById('unorder-list');
    listItem.appendChild(newItem);
})


document.getElementById('input-button').addEventListener('click',function () {
    const input = document.getElementById('input-fild');
    const inputAddValue = input.value;
    const inputText = parseInt(inputAddValue) + 1;
    if (input.value < 5) {
        input.value = inputText;
        if (input.value ==5) {
            document.getElementById('input-button').disabled=true;   
        }
    }
})
 

 