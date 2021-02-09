const content = document.querySelector('.placeholder__main');
const placeholderTask = document.querySelector('.placeholder__task');
const insert = document.querySelector('.placeholder__insert');
const input = document.querySelector('.input');

content.addEventListener('input', e => {
  let value = content.textContent;
  if (value.slice(-3) === ' //') {
    content.setAttribute('placeholder', '');
    content.textContent = '';
    placeholderTask.textContent = value.slice(0, -3);
    insert.textContent = '//';
    insert.classList.add('golden');
    content.style.color = 'var(--goldcolor)';
  }
});
placeholderTask.addEventListener('click', () => {
  content.focus();
});

content.addEventListener('focus', () => {
  input.style.backgroundColor = '#ffffff';
  document.querySelector('.input__checkbox').classList.add('active');
  document.querySelector('.input__placeholder').classList.add('active');
  document.querySelector('.input__buttons').classList.add('active');
});
content.addEventListener('focusout', () => {
  input.style.backgroundColor = 'var(--cd-bg)';
  document.querySelector('.input__checkbox').classList.remove('active');
  document.querySelector('.input__placeholder').classList.remove('active');
  document.querySelector('.input__buttons').classList.remove('active');
});
