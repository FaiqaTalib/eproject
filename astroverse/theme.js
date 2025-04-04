let parent = document.getElementById('parent');
let butn = document.querySelector('.butn');

window.onload = function() {
    let savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        parent.classList.remove('light');
        parent.classList.add('dark');
        butn.innerHTML = 'Light Mode';
    } else if (savedTheme === 'light') {
        parent.classList.remove('dark');
        parent.classList.add('light');
        butn.innerHTML = 'Dark Mode';
    } else {

        localStorage.setItem('theme', 'dark');
        parent.classList.add('dark');
        butn.innerHTML = 'Light Mode';
    }
};

function toggleTheme() {
    if (parent.classList.contains('light')) {
        parent.classList.remove('light');
        parent.classList.add('dark');
        butn.innerHTML = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        parent.classList.remove('dark');
        parent.classList.add('light');
        butn.innerHTML = 'Dark Mode';
        localStorage.setItem('theme', 'light'); 
    }
}
