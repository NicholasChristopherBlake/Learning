const allRead = document.getElementById('all_read');
const numberOfNotif = document.querySelector('.number')
const articles = document.querySelectorAll('article')
const spans = document.querySelectorAll('.check')

function unRead() {
  numberOfNotif.innerText = '0';
  articles.forEach(article => {
    article.classList.remove('unread')
  });
  spans.forEach(span => span.innerText = '');
}

allRead.addEventListener('click', unRead);
