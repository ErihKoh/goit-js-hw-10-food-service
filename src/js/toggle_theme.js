const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleTheme = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

body.classList.add(Theme.LIGHT);

toggleTheme.addEventListener('change', onChangeTheme);

currentTheme();


function onChangeTheme() {
    if (toggleTheme.checked === true) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('siteTheme', 'DARK')
        
    } else {
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        localStorage.setItem('siteTheme', 'LIGHT')
        
    }
   
};

function currentTheme() {
    const siteCurrentTheme = localStorage.getItem('siteTheme');
    if (siteCurrentTheme === 'DARK') {
        body.classList.add(Theme.DARK);
        toggleTheme.checked = true;
    }
   
    
}
