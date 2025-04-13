let lang = 'en';
const translations = {
  en: {
    lengthLabel: "Password Length",
    uppercase: "Uppercase",
    lowercase: "Lowercase",
    numbers: "Numbers",
    symbols: "Symbols",
    generate: "Generate Password",
    copy: "Copy Password"
  },
  ge: {
    lengthLabel: "პაროლის სიგრძე",
    uppercase: "დიდი ასოები",
    lowercase: "პატარა ასოები",
    numbers: "ციფრები",
    symbols: "სიმბოლოები",
    generate: "პაროლის გენერაცია",
    copy: "პაროლის კოპირება"
  }
};
function toggleLanguage() {
  lang = lang === 'en' ? 'ge' : 'en';
  const t = translations[lang];
  document.getElementById('lang-label').innerText = lang === 'en' ? 'GE' : 'EN';
  document.getElementById('length-label').childNodes[0].nodeValue = t.lengthLabel + ': ';
  document.getElementById('label-uppercase').innerText = t.uppercase;
  document.getElementById('label-lowercase').innerText = t.lowercase;
  document.getElementById('label-numbers').innerText = t.numbers;
  document.getElementById('label-symbols').innerText = t.symbols;
  document.getElementById('generate-btn').innerText = t.generate;
  document.getElementById('copy-btn').innerText = t.copy;
}
function updateLengthLabel(val) {
  document.getElementById('range-value').innerText = val;
}
function generatePassword() {
  const length = parseInt(document.getElementById('length').value, 10);
  const uppercase = document.getElementById('uppercase').checked;
  const lowercase = document.getElementById('lowercase').checked;
  const numbers = document.getElementById('numbers').checked;
  const symbols = document.getElementById('symbols').checked;
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  let allChars = '';
  if (uppercase) allChars += upperChars;
  if (lowercase) allChars += lowerChars;
  if (numbers) allChars += numberChars;
  if (symbols) allChars += symbolChars;
  if (!allChars) {
    document.getElementById('password').innerText = lang === 'en' ? 'Please select at least one character type.' : 'გთხოვთ აირჩიოთ მინიმუმ ერთი ტიპი.';
    return;
  }
  let password = '';
  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  document.getElementById('password').innerText = password;
}
function copyPassword() {
  const text = document.getElementById('password').innerText;
  navigator.clipboard.writeText(text).then(() => alert(lang === 'en' ? 'Password copied!' : 'პაროლი დაკოპირდა!')).catch(err => alert('Failed to copy: ' + err));
}
generatePassword();