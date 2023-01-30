import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  configure,
  setInteractionMode,
} from 'vee-validate'
import {
  required,
  email,
  confirmed,
  length,
  digits,
} from 'vee-validate/dist/rules'

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

extend('required', required)
extend('email', email)
extend('confirmed', confirmed)
extend('length', length)
extend('digits', digits)

setInteractionMode('eager')

export default function ({ i18n }) {
  configure({
    defaultMessage: (field, values) => {
      // override the field name.
      values._field_ = i18n.t(`fields.${field}`)

      return i18n.t(`validation.${values._rule_}`, values)
    },
  })
}
