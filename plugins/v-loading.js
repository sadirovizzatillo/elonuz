import Vue from 'vue'
import BaseSpinner from '@/components/BaseSpinner.vue'

const BACKGROUND_COLOR = 'rgba(255, 255, 255, 0.65)'
const ELEMENT_ID = 'v-loading-element'

function getLoadingElement(el) {
  return el.querySelector(`#${ELEMENT_ID}`)
}

function createLoadingElement(el) {
  const wrapper = document.createElement('div')
  wrapper.setAttribute('id', ELEMENT_ID)
  wrapper.style.position = 'absolute'
  wrapper.style.inset = '0'
  wrapper.style.display = 'flex'
  wrapper.style.justifyContent = 'center'
  wrapper.style.alignItems = 'center'
  wrapper.style.background =
    el.getAttribute('data-loading-background') || BACKGROUND_COLOR

  const BaseSpinnerClass = Vue.extend(BaseSpinner)
  const instance = new BaseSpinnerClass({
    propsData: {},
  })

  instance.$mount()
  wrapper.appendChild(instance.$el)
  return wrapper
}

Vue.directive('loading', {
  inserted(el, binding) {
    const isLoading = binding.value
    const position =
      window.getComputedStyle(el).getPropertyValue('position') ||
      el.style.position
    if (!position || position === 'static') {
      el.style.position = 'relative'
    }
    if (isLoading) {
      const loadingElement = createLoadingElement(el)
      el.appendChild(loadingElement)
    }
  },
  update(el, binding) {
    const isLoading = binding.value
    let loadingElement = getLoadingElement(el)
    if (isLoading) {
      if (!loadingElement) {
        loadingElement = createLoadingElement(el)
        el.appendChild(loadingElement)
      }
      loadingElement.style.display = 'flex'
    } else if (loadingElement) {
      loadingElement.style.display = 'none'
    }
  },
})
