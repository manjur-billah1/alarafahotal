$('.c-card__item').mouseleave(function (){
  $(this).find('.c-card__content-box').animate({ scrollTop: 0 }, 400);
});