import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/auth-form.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=585ebe70"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

import InputField from "/_nuxt/components/atoms/input-field.vue";
import Button from "/_nuxt/components/atoms/button.vue";

const _sfc_main = {
  name: "AuthForm",
  components: {
    InputField,
    Button,
  },
  data() {
    return {
      email: "",
    };
  },
  computed: {
    isEmailValid() {
      // Basic email validation regex pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.email);
    },
  },
  methods: {
    handleSubmit() {
      if (this.isEmailValid) {
        console.log("Email submitted:", this.email);
        this.$emit("submitEmail", this.email);
      }
    },
  },
};

import {  resolveComponent as _resolveComponent,  normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=585ebe70"

const _hoisted_1 = {
  class: "flex flex-col gap-6 items-center",
  "data-v-inspector": "components/molecules/auth-form.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_InputField = _resolveComponent("InputField")
  const _component_Button = _resolveComponent("Button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[2] || (_cache[2] = _createElementVNode("div", {
      class: "flex justify-center text-white text-sm",
      "data-v-inspector": "components/molecules/auth-form.vue:3:5"
    }, "Enter your email", -1 /* HOISTED */)),
    _createVNode(_component_InputField, {
      modelValue: $data.email,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.email) = $event)),
      inputId: "email-field",
      icon: ['fas', 'envelope'],
      label: "Email Address",
      placeholder: "Enter your email",
      isValid: $options.isEmailValid,
      errorMessage: "Invalid Email"
    }, null, 8 /* PROPS */, ["modelValue", "isValid"]),
    _createVNode(_component_Button, {
      class: _normalizeClass([
        'relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all',
        $options.isEmailValid
          ? 'border-white bg-primary text-white pointer-events-auto opacity-100'
          : 'border-white/0 bg-black text-white pointer-events-none opacity-70',
      ]),
      disabled: !$options.isEmailValid,
      onClick: $options.handleSubmit
    }, {
      default: _withCtx(() => _cache[1] || (_cache[1] = [
        _createElementVNode("div", {
          class: "gradient absolute w-full h-full inset-0 opacity-50",
          "data-v-inspector": "components/molecules/auth-form.vue:23:7"
        }, null, -1 /* HOISTED */),
        _createElementVNode("div", { "data-v-inspector": "components/molecules/auth-form.vue:24:7" }, "Enter", -1 /* HOISTED */)
      ])),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["class", "disabled", "onClick"])
  ]))
}

import "/_nuxt/components/molecules/auth-form.vue?vue&type=style&index=0&scoped=2884a390&lang.css"

_sfc_main.__hmrId = "2884a390"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-2884a390"],['__file',"/home/bemadu/Desktop/aladia/components/molecules/auth-form.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBLE1BQUssQ0FBRSxVQUFTLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ2pELE1BQUssQ0FBRSxNQUFLLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7O0FBRXhDLEtBQUssVUFBVTtFQUNiLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztFQUNoQixVQUFVLEVBQUU7SUFDVixVQUFVO0lBQ1YsTUFBTTtFQUNSLENBQUM7RUFDRCxJQUFJLENBQUMsRUFBRTtJQUNMLE1BQUssQ0FBRTtNQUNMLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDO0VBQ0gsQ0FBQztFQUNELFFBQVEsRUFBRTtJQUNSLFlBQVksQ0FBQyxFQUFFO01BQ2IsQ0FBQyxFQUFFLEtBQUksQ0FBRSxLQUFJLENBQUUsVUFBUyxDQUFFLEtBQUksQ0FBRTtNQUNoQyxLQUFJLENBQUUsWUFBVyxDQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNqRCxNQUFLLENBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7RUFDSCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0lBQ1AsWUFBWSxDQUFDLEVBQUU7TUFDYixFQUFDLENBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7TUFDdkM7SUFDRixDQUFDO0VBQ0gsQ0FBQztBQUNILENBQUM7Ozs7O0VBekRNLEtBQUssRUFBQyxrQ0FBa0M7RUFBQyxrQkFBZ0IsRUFBQzs7Ozs7Ozt3QkFBL0Qsb0JBd0JNLE9BeEJOLFVBd0JNOzhCQXZCSixvQkFBb0k7TUFBL0gsS0FBSyxFQUFDLHdDQUF3QztNQUFDLGtCQUFnQixFQUFDO09BQXlDLGtCQUFnQjtJQUM5SCxhQVFFO01BWE4sWUFJZSxXQUFLO01BSnBCLDZEQUllLFdBQUs7TUFDZCxPQUFPLEVBQUMsYUFBYTtNQUNwQixJQUFJLEVBQUUsbUJBQW1CO01BQzFCLEtBQUssRUFBQyxlQUFlO01BQ3JCLFdBQVcsRUFBQyxrQkFBa0I7TUFDN0IsT0FBTyxFQUFFLHFCQUFZO01BQ3RCLFlBQVksRUFBQzs7SUFFZixhQVlTO01BWE4sS0FBSyxFQWJaOztRQWF1Szs7OztNQU1oSyxRQUFRLEdBQUcscUJBQVk7TUFDdkIsT0FBSyxFQUFFOztNQXBCZCxrQkFzQk0sQ0FBaUk7UUFBakksb0JBQWlJO1VBQTVILEtBQUssRUFBQyxvREFBb0Q7VUFBQyxrQkFBZ0IsRUFBQzs7UUFDakYsb0JBQTJFLFNBQXRFLGtCQUFnQixFQUFDLHlDQUF5QyxJQUFDLE9BQUs7O01BdkIzRSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYXV0aC1mb3JtLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGdhcC02IGl0ZW1zLWNlbnRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9hdXRoLWZvcm0udnVlOjI6M1wiPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgdGV4dC1zbVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9hdXRoLWZvcm0udnVlOjM6NVwiPkVudGVyIHlvdXIgZW1haWw8L2Rpdj5cbiAgICA8SW5wdXRGaWVsZFxuICAgICAgdi1tb2RlbD1cImVtYWlsXCJcbiAgICAgIGlucHV0SWQ9XCJlbWFpbC1maWVsZFwiXG4gICAgICA6aWNvbj1cIlsnZmFzJywgJ2VudmVsb3BlJ11cIlxuICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICA6aXNWYWxpZD1cImlzRW1haWxWYWxpZFwiXG4gICAgICBlcnJvck1lc3NhZ2U9XCJJbnZhbGlkIEVtYWlsXCJcbiAgICAvPlxuICAgIDxCdXR0b25cbiAgICAgIDpjbGFzcz1cIltcbiAgICAgICAgJ3JlbGF0aXZlIGZsZXggaC0xMCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBiZy1ibGFjayB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRyYW5zaXRpb24tYWxsJyxcbiAgICAgICAgaXNFbWFpbFZhbGlkXG4gICAgICAgICAgPyAnYm9yZGVyLXdoaXRlIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBwb2ludGVyLWV2ZW50cy1hdXRvIG9wYWNpdHktMTAwJ1xuICAgICAgICAgIDogJ2JvcmRlci13aGl0ZS8wIGJnLWJsYWNrIHRleHQtd2hpdGUgcG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTcwJyxcbiAgICAgIF1cIlxuICAgICAgOmRpc2FibGVkPVwiIWlzRW1haWxWYWxpZFwiXG4gICAgICBAY2xpY2s9XCJoYW5kbGVTdWJtaXRcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmFkaWVudCBhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIGluc2V0LTAgb3BhY2l0eS01MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9hdXRoLWZvcm0udnVlOjIzOjdcIj48L2Rpdj5cbiAgICAgIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL2F1dGgtZm9ybS52dWU6MjQ6N1wiPkVudGVyPC9kaXY+XG4gICAgPC9CdXR0b24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCIuLi9hdG9tcy9pbnB1dC1maWVsZC52dWVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2F0b21zL2J1dHRvbi52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkF1dGhGb3JtXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBJbnB1dEZpZWxkLFxuICAgIEJ1dHRvbixcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW1haWw6IFwiXCIsXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc0VtYWlsVmFsaWQoKSB7XG4gICAgICAvLyBCYXNpYyBlbWFpbCB2YWxpZGF0aW9uIHJlZ2V4IHBhdHRlcm5cbiAgICAgIGNvbnN0IGVtYWlsUGF0dGVybiA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xuICAgICAgcmV0dXJuIGVtYWlsUGF0dGVybi50ZXN0KHRoaXMuZW1haWwpO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICBpZiAodGhpcy5pc0VtYWlsVmFsaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFbWFpbCBzdWJtaXR0ZWQ6XCIsIHRoaXMuZW1haWwpO1xuICAgICAgICB0aGlzLiRlbWl0KFwic3VibWl0RW1haWxcIiwgdGhpcy5lbWFpbCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxNWRlZyxcbiAgICAjZmZmMCA5LjU1JSxcbiAgICAjZmZmMCAzMC4yOCUsXG4gICAgI2ZmZjYsXG4gICAgI2ZmZjAgNDEuNTglLFxuICAgICNmZmYwIDU5LjAyJSxcbiAgICAjZmZmIDY3Ljk3JSxcbiAgICAjZmZmMCA3NC41NiUsXG4gICAgI2ZmZlxuICApO1xufVxuPC9zdHlsZT5cbiJdLCJmaWxlIjoiL2hvbWUvYmVtYWR1L0Rlc2t0b3AvYWxhZGlhL2NvbXBvbmVudHMvbW9sZWN1bGVzL2F1dGgtZm9ybS52dWUifQ==