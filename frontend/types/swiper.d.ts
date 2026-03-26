declare module 'swiper' {
  export const Navigation: any;
  export const Autoplay: any;
  export const Pagination: any;
  export const Keyboard: any;
  export const Lazy: any;
}

declare module 'swiper/vue' {
  import { DefineComponent } from 'vue';
  export const Swiper: DefineComponent<any, any, any>;
  export const SwiperSlide: DefineComponent<any, any, any>;
}
