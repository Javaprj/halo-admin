import Vue from 'vue'

// pro components
import Ellipsis from '@/components/Ellipsis'
import FooterToolbar from '@/components/FooterToolbar'
import Upload from '@/components/Upload/Upload'

const _components = {
  Ellipsis,
  FooterToolbar,
  Upload
}

const components = {}

Object.keys(_components).forEach(key => {
  components[key] = Vue.component(key, _components[key])
})

export default components
