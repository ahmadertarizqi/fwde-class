import { icons } from 'feather-icons';

export const renderLikeButtonTemplate = (likeState) => `
  <button 
    aria-label="${likeState ? 'unlike this restaurant' : 'like this restaurant'}" 
    id="btnLike" class="btn-like ${likeState ? 'is-active' : ''}" 
    title="Add to Favorite"
  >
    ${icons.heart.toSvg({ class: 'has-icon' })}
  </button>
`;

export const renderLoader = (parentElem) => {
  const loader = `
      <div class="loader-indicator">
        <div class="inner">
          ${icons['rotate-cw'].toSvg({ width: '50px', height: '50px' })}
          <h3 class="text-explanation">Please Wait, Retrieve Data</h3>
        </div>
      </div>
    `;
  parentElem.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector('.loader-indicator');
  if (loader) {
    loader.parentElement.removeChild(loader);
  }
};

export const renderInfoError = (parentElem) => {
  const information = `
    <div class="information-error">
      <div class="inner">
        ${icons['alert-circle'].toSvg({ width: '50px', height: '50px' })}
        <h3 class="text">Oopss, Something went wrong</h3>
      </div>
    </div>
  `;
  parentElem.insertAdjacentHTML('afterbegin', information);
};
