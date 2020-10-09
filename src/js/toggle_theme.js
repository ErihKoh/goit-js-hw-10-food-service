const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleTheme = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

body.classList.add(Theme.LIGHT);

toggleTheme.addEventListener('change', onChangeTheme);

function onChangeTheme(evt) {
    if (toggleTheme.checked === true) {
        body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    } else {
        body.classList.add(Theme.LIGHT);
         body.classList.remove(Theme.DARK);
    }
    
    
}