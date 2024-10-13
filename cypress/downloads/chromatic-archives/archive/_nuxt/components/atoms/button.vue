import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/button.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=585ebe70"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

const _sfc_main = {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};

import { renderSlot as _renderSlot, normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=585ebe70"

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("button", {
    class: _normalizeClass([
      'flex text-white items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-sm transition-all hover:bg-white/20 active:scale-95',
      $props.type === 'primary' ? 'bg-black text-white' : 'text-black',
    ]),
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.onClick && $options.onClick(...args))),
    "data-v-inspector": "components/atoms/button.vue:2:3"
  }, [
    _renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}


_sfc_main.__hmrId = "d9dd3bec"
typeof __VUE_HMR_RUNTIME__ !== 'undefined' && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main)
import.meta.hot.accept(mod => {
  if (!mod) return
  const { default: updated, _rerender_only } = mod
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render)
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated)
  }
})
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper"
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bemadu/Desktop/aladia/components/atoms/button.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWFBLEtBQUssVUFBVTtFQUNiLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztFQUNkLEtBQUssRUFBRTtJQUNMLElBQUksRUFBRTtNQUNKLElBQUksRUFBRSxNQUFNO01BQ1osT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO0lBQ3BCLENBQUM7RUFDSCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0lBQ1AsT0FBTyxDQUFDLEVBQUU7TUFDUixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0VBQ0gsQ0FBQztBQUNILENBQUM7Ozs7O3dCQXpCQyxvQkFRUztJQVBOLEtBQUssRUFGVjs7TUFFZ0wsV0FBSTs7SUFJL0ssT0FBSywwQ0FBRSw2Q0FBTztJQUFFLGtCQUFnQixFQUFDOztJQUVsQyxZQUFhIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJidXR0b24udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGJ1dHRvblxuICAgIDpjbGFzcz1cIltcbiAgICAgICdmbGV4IHRleHQtd2hpdGUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IHJvdW5kZWQgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCBweS0xLjUgc2hhZG93LXNtIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLXdoaXRlLzIwIGFjdGl2ZTpzY2FsZS05NScsXG4gICAgICB0eXBlID09PSAncHJpbWFyeScgPyAnYmctYmxhY2sgdGV4dC13aGl0ZScgOiAndGV4dC1ibGFjaycsXG4gICAgXVwiXG4gICAgQGNsaWNrPVwib25DbGlja1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL2J1dHRvbi52dWU6MjozXCJcbiAgPlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC9idXR0b24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkJ1dHRvblwiLFxuICBwcm9wczoge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwicHJpbWFyeVwiLFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrKCkge1xuICAgICAgdGhpcy4kZW1pdChcImNsaWNrXCIpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT5cbiJdLCJmaWxlIjoiL2hvbWUvYmVtYWR1L0Rlc2t0b3AvYWxhZGlhL2NvbXBvbmVudHMvYXRvbXMvYnV0dG9uLnZ1ZSJ9