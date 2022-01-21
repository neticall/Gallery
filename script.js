const spans = document.querySelectorAll('span');
spans.forEach( sp => {
    sp.addEventListener("click", ()=> {
        spans.forEach( s => {s.classList.remove('active')});
        sp.classList.add("active");
    });
});