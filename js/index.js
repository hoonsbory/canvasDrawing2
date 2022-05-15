import Canvas from './Canvas';
import Typed from 'typed.js';
import FontFaceObserver from 'fontfaceobserver';

const options = {
  strings: ['100th Anniversary'],
  typeSpeed: 55,
};

const font = new FontFaceObserver('Pretendard Variable');
font
  .load(null, 3000)
  .then(function () {
    document.body.style.opacity = 1;
    new Typed('.typedTitle', options);
  })
  .catch(err => (document.body.style.opacity = 1));

const fileTypeCheck = fileName => {
  const pathpoint = fileName.lastIndexOf('.');

  const filepoint = fileName.substring(pathpoint + 1, fileName.length);

  const filetype = filepoint.toLowerCase();

  if (!(filetype == 'jpg' || filetype == 'png' || filetype == 'jpeg')) {
    alert('jpg, jpeg, png  확장자만 가능합니다.');
    return false;
  }
  return true;
};

const onChange = e => {
  const mainWrapper = document.querySelector('.mainWrapper');
  mainWrapper.classList.add('hide');
  const image = new Image();
  image.src = 'You&I.png';
  image.onload = img => {
    new Canvas(img.target);
  };
};

const ImageInput = document.getElementById('submit');
ImageInput.addEventListener('click', onChange);
