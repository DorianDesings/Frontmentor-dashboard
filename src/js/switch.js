const switchInput = document.getElementById('switch-label');
const switchText = document.getElementById('switch-text');
const styles = document.documentElement.style;

const lightTheme = {
  '--bg-color': ' hsl(0, 0%, 100%)',
  '--bg-color-head': 'hsl(225, 100%, 98%)',
  '--card-bg': 'hsl(227, 47%, 96%)',
  '--card-bg-hover': 'hsl(232, 33%, 91%)',
  '--soft-blue': 'hsl(228, 12%, 44%)',
  '--toggle-bg': 'hsl(230, 22%, 74%)',
  '--toggle-bg-hover':
    'linear-gradient(90deg,hsl(210, 78%, 56%) 0%,hsl(146, 68%, 55%) 100%)',
  '--title-color': 'hsl(228, 12%, 44%)',
  '--text-color': 'hsl(230, 17%, 14%)'
};

const darkTheme = {
  '--bg-color': 'hsl(230, 17%, 14%)',
  '--bg-color-head': 'hsl(232, 19%, 15%)',
  '--card-bg': 'hsl(228, 28%, 20%)',
  '--card-bg-hover': 'hsl(228, 26%, 27%)',
  '--soft-blue': 'hsl(228, 34%, 66%)',
  '--toggle-bg':
    'linear-gradient(90deg,hsl(210, 78%, 56%) 0%,hsl(146, 68%, 55%) 100%)',
  '--title-color': 'hsl(0, 0%, 100%)',
  '--text-color': 'hsl(228, 34%, 66%)'
};

const changeTheme = theme => {
  const customStyles = Object.keys(theme);
  for (const style of customStyles) {
    styles.setProperty(style, theme[style]);
  }
};

switchInput.addEventListener('click', e => {
  e.target.previousElementSibling.checked
    ? (changeTheme(lightTheme), (switchText.textContent = 'Dark Mode'))
    : (changeTheme(darkTheme), (switchText.textContent = 'Light Mode'));
});

// checkBox.addEventListener('click', () => {
//   if (checkBox.checked) {
//     styles.setProperty('--bg-body', 'hsl(0, 0%, 100%)');
//     styles.setProperty('--bg-header', 'hsl(225, 100%, 98%)');
//     styles.setProperty('--bg-card', 'hsl(227, 47%, 96%)');
//     styles.setProperty('--bg-card-hover', '#e1e3f0');
//     styles.setProperty('--title-color', 'hsl(228, 12%, 44%)');
//     styles.setProperty('--text-color', 'hsl(230, 17%, 14%)');
//   } else {
//     styles.setProperty('--bg-body', 'hsl(230, 17%, 14%)');
//     styles.setProperty('--bg-header', 'hsl(232, 19%, 15%)');
//     styles.setProperty('--bg-card', 'hsl(228, 28%, 20%)');
//     styles.setProperty('--bg-card-hover', ' #333a56');
//     styles.setProperty('--title-color', 'hsl(0, 0%, 100%)');
//     styles.setProperty('--text-color', 'hsl(228, 34%, 66%');
//   }
// });
