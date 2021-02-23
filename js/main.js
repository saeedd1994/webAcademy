function navFunc() {
    var nav= document.getElementById('myNav');
    var open=document.querySelector('.hamOpen');
    var close=document.querySelector('.hamClose');
    if (nav.className === 'container-fluid nav') {
        nav.className += ' hamNav';
        open.style.display='none';
        close.style.display='block';
    } else {
        nav.className ='container-fluid nav';
        open.style.display='block';
        close.style.display='none';
    }
}