document.querySelector('#trigger-modal').addEventListener('click', function() {
    document.getElementById("pop-up-second-wrapper").style.display = "none";   
});

document.querySelector('.modal__close').addEventListener('click', function() {
    document.getElementById("pop-up-second-wrapper").style.display = "block";   
});

    // document.querySelector('.modal').addEventListener('click', function() {
    //     document.getElementById("pop-up-second-wrapper").style.display = "block";
    // })