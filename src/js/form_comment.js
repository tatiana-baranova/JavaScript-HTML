let btnForm = document.querySelector('#comments-form button');

let countComments = 0;
let idComment = 0;

btnForm.onclick = () => {
    let form = document.getElementById('comments-form');
    // console.log(form.username.value);
    // console.log(form.comment.value);
    let error = document.querySelector('#error');
    idComment++;
    if(form.username.value.length < 2){
        error.innerText = 'Username must be at least 2 characters long!';
        return false;
    } else if(form.comment.value.length< 10){
        error.innerText = 'Comment must be at least 10 characters long!';
        return false;
    }
    error.innerText = '';

    //Set new value for counting comments
    if(countComments === 0 ){
        document.querySelector('#comments').innerHTML = '';
    }

    countComments++;
    document.querySelector('#count-comm').innerText = countComments;
    

    //Create new comment
    let newComment = "<div class='comment' id='block-" + idComment + "'>" +
        "<span class='delete' onclick='deleteComment(" + idComment + ")'>&times;</span>" +
        "<p class='username'>" + form.username.value + "</p>" +
        "<p class='comment-text'>" + form.comment.value + "</p>" +
    "</div>";
    document.querySelector('#comments').insertAdjacentHTML('afterbegin', newComment);

    // Clear comment values
    form.comment.value = '';
    // form.username.value = '';

} 