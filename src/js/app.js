console.log('app init...');

import $ from 'jquery';
import Swiper from './lib/swiper';

window.$ = $;
window.jQuery = $;
window.Swiper = Swiper;

require('./module/home')

