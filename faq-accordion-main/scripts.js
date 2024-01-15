function expand(id) {
    var ans = document.getElementById('ans' + id);
    var button = document.getElementById('button' + id);
    if (ans.style.display === 'none') {
        ans.style.display = 'block';
        button.setAttribute('data', 'assets\\images\\icon-minus.svg');
    } else {
        ans.style.display = 'none';
        button.setAttribute('data', 'assets\\images\\icon-plus.svg');
    }
}

// var accordionList = document.querySelector('.accordion-list');
// var questions = document.querySelectorAll('.question');
// accordionList.addEventListener('click', (event) => {
//     for (var i = 0; i < questions.length; i++) {
//         questions[i].classList.remove('active');
//     }

//     if (event.target && event.target.closest == 'DIV') {
//         event.target.classList.add('active');
//         console.log(event.target);
//     }
// });
