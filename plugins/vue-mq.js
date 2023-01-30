import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    // default breakpoints - customize this
    mobile: '839px',
    tablet: '1023px',
    laptop: '1919px',
    desktop: Infinity,
    'desktop-xl': Infinity,
  },
  defaultBreakpoint: 'mobile', // customize this for SSR
})
