import en from '../../locales/en.json';
import ru from '../../locales/ru.json';

const translations = { en, ru };
let currentLang = localStorage.getItem('lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
  translatePage();

  const langButton = document.getElementById('change-lang');
  if (langButton) {
    langButton.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ru' : 'en';
      localStorage.setItem('lang', currentLang);
      translatePage();
    });
  }
});

function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[currentLang][key] || key;
  });
}
