const html = document.querySelector('.html');
const css = document.querySelector('.css');
const js = document.querySelector('.js');
const previewFrame = document.querySelector('.preview');
const editor = document.querySelector('.editor-con');

const init = () => {
  html.innerHTML = `<!-- Html here -->
  <div class="container">
    <img
      src="https://somaliprogrammers.com/wp-content/uploads/2021/04/94-1024x768.jpg"
      alt="image"
    />

    <div class="group-info">
      <h1>Welcome Somali Programmers</h1>
      <h2>Join Now</h2>
      <div class="datials">
        <button class="btn facebook">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png"
            alt="facebook"
          />
          <span>Facebook</span>
        </button>
        <button class="btn discord">
          <img
            src="https://assets.mofoprod.net/network/images/discord.width-250.jpg"
            alt="facebook"
          />
          <span>Discord</span>
        </button>
        <button class="btn website">
          <img
            src="https://scontent.fhga3-1.fna.fbcdn.net/v/t39.30808-6/327212072_568031031846328_7501166176074851834_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_6HpZenCqPUAX-7giwW&_nc_ht=scontent.fhga3-1.fna&oh=00_AfBJum4h2uyvQPgbvwHVTEgjblKZ6ipIS65dT9fNZMBqqQ&oe=6607C422"
            alt="facebook"
          />
          <span>Website</span>
        </button>
      </div>
    </div>
  </div>`;
  css.innerHTML = `
  /* Css here */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    width: 400px;
    background: #fff;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }

  .container img {
    width: 100%;
  }
  .group-info {
    padding: 20px;
  }
  h2 {
    margin: 10 0px;
    color: gray;
  }
  .datials {
    display: flex;
    gap: 4px;
  }
  .btn {
    padding: 7px 18px;
    display: flex;
    align-items: center;
    gap: 5px;
    border: none;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .btn img {
    width: 25px;
  }
`;
  js.innerHTML = `/* Js here */
const facebook =document.querySelector(".facebook")
const discord = document.querySelector(".discord")
const website = document.querySelector(".website")

facebook.addEventListener("click",() => {
    window.open('https://www.facebook.com/groups/somaliprogrammers/', '_blank');
})

discord.addEventListener("click",() => {
    window.open('https://discord.gg/6ssafYS', '_blank');
})

website.addEventListener("click",() => {
    window.open('https://somaliprogrammers.com/', '_blank');
}) `;
};

const saveCodeToLocalStorage = () => {
  localStorage.setItem('savedHtml', html.value);
  localStorage.setItem('savedCss', css.value);
  localStorage.setItem('savedJs', js.value);
};

if (
  !localStorage.getItem('savedHtml') ||
  !localStorage.getItem('savedCss') ||
  !localStorage.getItem('savedJs')
) {
  init();
  saveCodeToLocalStorage();
  location.reload();
  run();
}
const removeCodeToLocalStorage = () => {
  localStorage.removeItem('savedHtml');
  localStorage.removeItem('savedCss');
  localStorage.removeItem('savedJs');
};

// Load code snippets from local storage if available
html.innerHTML = localStorage.getItem('savedHtml') || '';
css.innerHTML = localStorage.getItem('savedCss') || '';
js.innerHTML = localStorage.getItem('savedJs') || '';

const run = () => {
  const codeContent = `${html.value} <style>${css.value}</style>`;

  const doc = previewFrame.contentWindow.document;

  doc.open();
  doc.write(codeContent);
  previewFrame.contentWindow.eval(js.value);
  doc.close();
};

[html, css, js].forEach((el) => el.addEventListener('keyup', run));

// save the code
document.querySelector('.save').addEventListener('click', () => {
  saveCodeToLocalStorage();
  setTimeout(() => {
    alert('save successfull');
  }, 1000);
});

document.querySelector('.clear').addEventListener('click', () => {
  removeCodeToLocalStorage();
  setTimeout(() => {
    alert('Clear successful');
    location.reload(); // Reload the page
  }, 1000);
});

// Run the code on page load
document.addEventListener('DOMContentLoaded', () => {
  run();
});
