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
