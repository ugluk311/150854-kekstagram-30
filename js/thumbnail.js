
const picturesContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({url, description, comments, likes}) =>{
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const containerFragment = document.createDocumentFragment();

  pictures.forEach ((picture) => {
    const thumbnail = createThumbnail(picture);
    containerFragment.append(thumbnail);
  });

  picturesContainer.append(containerFragment);
};

export {renderThumbnails};
