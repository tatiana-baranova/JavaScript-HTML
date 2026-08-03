let btnForm = document.querySelector('#comments-form button');

let countComments = 0;

btnForm.onclick = () => {
    let form = document.getElementById('comments-form');
    // console.log(form.username.value);
    // console.log(form.comment.value);
    let error = document.querySelector('#error');
    if(form.username.value.length < 2){
        error.innerText = 'Username must be at least 2 characters long!';
        return false;
    } else if(form.comment.value.length< 10){
        error.innerText = 'Comment must be at least 10 characters long!';
        return false;
    }
    
    error.innerText = '';
    
}