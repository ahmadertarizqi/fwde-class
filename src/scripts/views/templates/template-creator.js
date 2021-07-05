import { icons } from 'feather-icons';
import { getImage } from '../../utils/common';

const menuItem = (item) => `
  <div class="menu-list-item">
    <div class="inner">${item.name}</div>
  </div>
`;

const reviewItem = (review) => `
  <div class="review-list-item">
    <div class="inner">
      <div class="head">
        <div class="icon">${icons.user.toSvg()}</div>
        <div class="info">
          <h5>${review.name}</h5>
          <span class="review-date">${icons.calendar.toSvg({ class: 'is-date' })} ${review.date}</span>
        </div>
      </div>
      <div class="content">
        <p>${review.review}</p>
      </div>
    </div>
  </div>
`;

export const createTemplateDetail = (restaurant) => `
  <div class="restaurant-info__main">
    <div class="left">
      <figure class="place-img">
        <img src="${getImage(restaurant.pictureId, 'md')}" alt="img-info-main" />
      </figure>
    </div>
    <div class="right">
      <h3 class="title">${restaurant.name}</h3>
      <ul class="additional-info list-inline">
        <li class="additional-info-item has-icon">${icons['map-pin'].toSvg({ class: 'is-icon' })} <span>${restaurant.city}, ${restaurant.address}</span></li>
        <li class="additional-info-item has-icon">${icons.star.toSvg({ class: 'is-icon' })} ${restaurant.rating}</li>
      </ul>
      <ul class="additional-info">
        <li class="additional-info-item">
          <h4>Categories</h4>
          <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
        </li>
        <li class="additional-info-item"> 
          <h4>Description</h4>
          <p>${restaurant.description}</p>
        </li>
      </ul>
    </div>
  </div>
  
  <div class="restaurant-info__more">
    <h3 class="menus-title">Food</h3>
    <div class="menu-list">
      ${restaurant.menus.foods.map((food) => menuItem(food)).join(' ')}
    </div>

    <h3 class="menus-title">Drink</h3>
    <div class="menu-list">
      ${restaurant.menus.drinks.map((drink) => menuItem(drink)).join(' ')}
    </div>

    <br/>
    <br/>

    <h3 class="menus-title">Reviews</h3>
    <div class="review-list">
     ${restaurant.customerReviews.map((review) => reviewItem(review)).join(' ')}
    </div>
  </div>
`;

export const renderLikeButtonTemplate = (likeState) => `
  <button aria-label="like this restaurant" id="btnLike" class="btn-like ${likeState ? 'is-active' : ''}" title="Add to Favorite">
    ${icons.heart.toSvg({ class: 'has-icon' })}
  </button>
`;
