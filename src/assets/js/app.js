import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const mainSwiper = new Swiper('.main-swiper', {
    modules: [Pagination],
    loop: true,
    pagination: {
        el: '.main-swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
});
