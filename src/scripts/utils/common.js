import config from '../config';

export const truncateString = (text, limit, afterText) => {
  if (!text || !limit) return;

  let content = text.split(' ').splice(0, limit);
  if (content.length < limit) {
    content = content.join(' ');
  } else {
    content = content.join(' ') + (afterText || '');
  }
  return content;
};

export const getImage = (pictureId, size) => {
  let image = `${config.BASE_URL}/images`;
  switch (size) {
    case 'sm':
      image += `/small/${pictureId}`;
      break;
    case 'md':
      image += `/medium/${pictureId}`;
      break;
    case 'lg':
      image += `/large/${pictureId}`;
      break;
    default:
      return image;
  }
  return image;
};
