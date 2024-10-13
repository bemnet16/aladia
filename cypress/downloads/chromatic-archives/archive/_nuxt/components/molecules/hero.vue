import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/hero.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=585ebe70"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

import AladiaLogo from "/_nuxt/assets/img/aladia.png?import";

const _sfc_main = {
  name: "Hero",
  props: {
    title: {
      type: String,
      default: "Welcome to Aladia,", // Default title if none is provided
    },
    subtitle: {
      type: String,
      default: "Create or access your account from here", // Default subtitle if none is provided
    },
  },
  setup() {
    return { AladiaLogo };
  },
};

import { createCommentVNode as _createCommentVNode,  toDisplayString as _toDisplayString, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=585ebe70"

const _hoisted_1 = {
  class: "relative flex items-center justify-between overflow-hidden rounded border border-white/20 bg-black/80 px-8 py-6 opacity-80",
  "data-v-inspector": "components/molecules/hero.vue:2:3"
}
const _hoisted_2 = {
  class: "relative flex w-full justify-between items-center",
  "data-v-inspector": "components/molecules/hero.vue:7:5"
}
const _hoisted_3 = ["src"]
const _hoisted_4 = {
  class: "text-left max-w-40 ml-4",
  "data-v-inspector": "components/molecules/hero.vue:9:7"
}
const _hoisted_5 = {
  class: "mb-2 text-base font-semibold text-white",
  "data-v-inspector": "components/molecules/hero.vue:10:9"
}
const _hoisted_6 = {
  class: "text-white/70 leading-tight text-sm",
  "data-v-inspector": "components/molecules/hero.vue:13:9"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createCommentVNode(" Background Gradient "),
    _cache[0] || (_cache[0] = _createElementVNode("div", {
      class: "absolute inset-0 gradient opacity-[0.15]",
      "data-v-inspector": "components/molecules/hero.vue:6:5"
    }, null, -1 /* HOISTED */)),
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("img", {
        src: $setup.AladiaLogo,
        alt: "Aladia Logo",
        class: "h-20 w-20 object-cover",
        "data-v-inspector": "components/molecules/hero.vue:8:7"
      }, null, 8 /* PROPS */, _hoisted_3),
      _createElementVNode("div", _hoisted_4, [
        _createElementVNode("div", _hoisted_5, _toDisplayString($props.title), 1 /* TEXT */),
        _createElementVNode("div", _hoisted_6, _toDisplayString($props.subtitle), 1 /* TEXT */)
      ])
    ])
  ]))
}

import "/_nuxt/components/molecules/hero.vue?vue&type=style&index=0&scoped=7d94c5ae&lang.css"

_sfc_main.__hmrId = "7d94c5ae"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-7d94c5ae"],['__file',"/home/bemadu/Desktop/aladia/components/molecules/hero.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFxQkEsTUFBSyxDQUFFLFVBQVMsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7O0FBRXBELEtBQUssVUFBVTtFQUNiLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztFQUNaLEtBQUssRUFBRTtJQUNMLEtBQUssRUFBRTtNQUNMLElBQUksRUFBRSxNQUFNO01BQ1osT0FBTyxFQUFFLENBQUMsT0FBTSxDQUFFLEVBQUMsQ0FBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFNLENBQUUsS0FBSSxDQUFFLEVBQUMsQ0FBRSxJQUFHLENBQUUsRUFBQyxDQUFFO0lBQzdELENBQUM7SUFDRCxRQUFRLEVBQUU7TUFDUixJQUFJLEVBQUUsTUFBTTtNQUNaLE9BQU8sRUFBRSxDQUFDLE1BQUssQ0FBRSxFQUFDLENBQUUsTUFBSyxDQUFFLElBQUcsQ0FBRSxPQUFNLENBQUUsSUFBRyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFNLENBQUUsUUFBTyxDQUFFLEVBQUMsQ0FBRSxJQUFHLENBQUUsRUFBQyxDQUFFO0lBQ3JGLENBQUM7RUFDSCxDQUFDO0VBQ0QsS0FBSyxDQUFDLEVBQUU7SUFDTixNQUFLLENBQUUsRUFBRSxVQUFTLENBQUUsQ0FBQztFQUN2QixDQUFDO0FBQ0gsQ0FBQzs7Ozs7RUFwQ0csS0FBSyxFQUFDLDRIQUE0SDtFQUFDLGtCQUFnQixFQUFDOzs7RUFJL0ksS0FBSyxFQUFDLG1EQUFtRDtFQUFDLGtCQUFnQixFQUFDOzttQkFOcEY7O0VBUVcsS0FBSyxFQUFDLHlCQUF5QjtFQUFDLGtCQUFnQixFQUFDOzs7RUFDL0MsS0FBSyxFQUFDLHlDQUF5QztFQUFDLGtCQUFnQixFQUFDOzs7RUFHakUsS0FBSyxFQUFDLHFDQUFxQztFQUFDLGtCQUFnQixFQUFDOzs7O3dCQVh4RSxvQkFnQk0sT0FoQk4sVUFnQk07SUFiSiw0Q0FBNEI7OEJBQzVCLG9CQUFpSDtNQUE1RyxLQUFLLEVBQUMsMENBQTBDO01BQUMsa0JBQWdCLEVBQUM7O0lBQ3ZFLG9CQVVNLE9BVk4sVUFVTTtNQVRKLG9CQUErSDtRQUF6SCxHQUFHLEVBQUUsaUJBQVU7UUFBRSxHQUFHLEVBQUMsYUFBYTtRQUFDLEtBQUssRUFBQyx3QkFBd0I7UUFBQyxrQkFBZ0IsRUFBQzs4QkFQL0Y7TUFRTSxvQkFPTSxPQVBOLFVBT007UUFOSixvQkFFTSxPQUZOLFVBRU0sbUJBREQsWUFBSztRQUVWLG9CQUVNLE9BRk4sVUFFTSxtQkFERCxlQUFRIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJoZXJvLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZCBib3JkZXIgYm9yZGVyLXdoaXRlLzIwIGJnLWJsYWNrLzgwIHB4LTggcHktNiBvcGFjaXR5LTgwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL2hlcm8udnVlOjI6M1wiXG4gID5cbiAgICA8IS0tIEJhY2tncm91bmQgR3JhZGllbnQgLS0+XG4gICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgZ3JhZGllbnQgb3BhY2l0eS1bMC4xNV1cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvaGVyby52dWU6Njo1XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIGZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvaGVyby52dWU6Nzo1XCI+XG4gICAgICA8aW1nIDpzcmM9XCJBbGFkaWFMb2dvXCIgYWx0PVwiQWxhZGlhIExvZ29cIiBjbGFzcz1cImgtMjAgdy0yMCBvYmplY3QtY292ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvaGVyby52dWU6ODo3XCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWxlZnQgbWF4LXctNDAgbWwtNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9oZXJvLnZ1ZTo5OjdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTIgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9oZXJvLnZ1ZToxMDo5XCI+XG4gICAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdoaXRlLzcwIGxlYWRpbmctdGlnaHQgdGV4dC1zbVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9oZXJvLnZ1ZToxMzo5XCI+XG4gICAgICAgICAge3sgc3VidGl0bGUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFsYWRpYUxvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWcvYWxhZGlhLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiSGVyb1wiLFxuICBwcm9wczoge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIldlbGNvbWUgdG8gQWxhZGlhLFwiLCAvLyBEZWZhdWx0IHRpdGxlIGlmIG5vbmUgaXMgcHJvdmlkZWRcbiAgICB9LFxuICAgIHN1YnRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIkNyZWF0ZSBvciBhY2Nlc3MgeW91ciBhY2NvdW50IGZyb20gaGVyZVwiLCAvLyBEZWZhdWx0IHN1YnRpdGxlIGlmIG5vbmUgaXMgcHJvdmlkZWRcbiAgICB9LFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICByZXR1cm4geyBBbGFkaWFMb2dvIH07XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTVkZWcsXG4gICAgI2ZmZjAgOC4zMyUsXG4gICAgI2ZmZjAgMjcuNDMlLFxuICAgICNmZmY2LFxuICAgICNmZmYwIDM3Ljg1JSxcbiAgICAjZmZmMCA1My45MSUsXG4gICAgI2ZmZiA2Mi4xNSUsXG4gICAgI2ZmZjAgNjguMjMlLFxuICAgICNmZmYgOTEuNjclXG4gICk7XG59XG48L3N0eWxlPlxuIl0sImZpbGUiOiIvaG9tZS9iZW1hZHUvRGVza3RvcC9hbGFkaWEvY29tcG9uZW50cy9tb2xlY3VsZXMvaGVyby52dWUifQ==