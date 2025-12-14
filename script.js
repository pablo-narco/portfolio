function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const links = document.querySelectorAll('.nav-link');
    
    pages.forEach(page => page.classList.remove('active'));
    links.forEach(link => link.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    event.target.classList.add('active');
}

function handleSubmit(e) {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
    e.target.reset();
}