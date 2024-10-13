import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/input-field.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementBlock as __createElementBlock,createElementVNode as __createElementVNode } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=585ebe70"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
/* Injection by vite-plugin-vue-inspector End */

const _sfc_main = {
  name: "InputField",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Enter value",
    },
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: Array,
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
    inputId: {
      type: String,
      default: () => `input-field-${Math.random().toString(36).substr(2, 9)}`,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    errorMessage: {
      type: String,
      default: "Invalid input",
    },
  },
  data() {
    return {
      inputType: this.type, // Initialize inputType with the passed type prop
      touched: false, // Track if the input has been interacted with
    };
  },
  methods: {
    toggleVisibility() {
      // Toggle between "password" and "text" for visibility
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    handleFocus() {
      // Mark the input as touched when the user focuses on the field
      this.touched = true;
    },
  },
  watch: {
    type(val) {
      this.inputType = val;
    },
  },
};

import { resolveComponent as _resolveComponent,  openBlock as _openBlock,  createCommentVNode as _createCommentVNode, normalizeClass as _normalizeClass,  toDisplayString as _toDisplayString } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=585ebe70"

const _hoisted_1 = {
  class: "flex flex-col w-full",
  "data-v-inspector": "components/atoms/input-field.vue:2:3"
}
const _hoisted_2 = {
  key: 0,
  class: "flex w-10 items-center justify-center text-xl text-black",
  "data-v-inspector": "components/atoms/input-field.vue:11:7"
}
const _hoisted_3 = ["id", "value", "placeholder", "disabled", "type", "aria-labelledby"]
const _hoisted_4 = ["id"]
const _hoisted_5 = {
  key: 0,
  class: "text-red-500 text-xs mt-1",
  "data-v-inspector": "components/atoms/input-field.vue:46:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = _resolveComponent("font-awesome-icon")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", {
      class: _normalizeClass(["group relative flex h-10 w-full rounded transition-all", [
        $data.touched && !$props.isValid
          ? 'bg-red-50 border border-red-500'
          : 'bg-white border border-gray-300',
      ]]),
      "data-v-inspector": "components/atoms/input-field.vue:3:5"
    }, [
      ($props.icon)
        ? (_openBlock(), _createElementBlock("div", _hoisted_2, [
            _createVNode(_component_font_awesome_icon, {
              icon: $props.icon,
              class: "text-base text-black/70"
            }, null, 8 /* PROPS */, ["icon"])
          ]))
        : _createCommentVNode("v-if", true),
      _createElementVNode("input", {
        id: $props.inputId,
        value: $props.modelValue,
        onInput: _cache[0] || (_cache[0] = (...args) => ($options.handleInput && $options.handleInput(...args))),
        onFocus: _cache[1] || (_cache[1] = (...args) => ($options.handleFocus && $options.handleFocus(...args))),
        placeholder: $props.placeholder,
        disabled: $props.disabled,
        type: $data.inputType,
        class: _normalizeClass([
          'h-full flex-1 rounded bg-transparent text-sm outline-none transition-colors pl-2',
          $data.touched && !$props.isValid ? 'text-red-500' : 'text-black',
        ]),
        "aria-labelledby": $props.label ? $props.inputId + '-label' : null,
        "data-v-inspector": "components/atoms/input-field.vue:17:7"
      }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_3),
      ($props.type === 'password')
        ? (_openBlock(), _createElementBlock("div", {
            key: 1,
            class: "flex w-10 items-center justify-center cursor-pointer text-xl text-black/50",
            onClick: _cache[2] || (_cache[2] = (...args) => ($options.toggleVisibility && $options.toggleVisibility(...args))),
            "data-v-inspector": "components/atoms/input-field.vue:31:7"
          }, [
            _createVNode(_component_font_awesome_icon, {
              icon: 
            $data.inputType === 'password' ? ['fas', 'eye'] : ['fas', 'eye-slash']
          
            }, null, 8 /* PROPS */, ["icon"])
          ]))
        : _createCommentVNode("v-if", true),
      ($props.label)
        ? (_openBlock(), _createElementBlock("label", {
            key: 2,
            id: $props.inputId + '-label',
            class: "sr-only",
            "data-v-inspector": "components/atoms/input-field.vue:42:7"
          }, _toDisplayString($props.label), 9 /* TEXT, PROPS */, _hoisted_4))
        : _createCommentVNode("v-if", true)
    ], 2 /* CLASS */),
    ($data.touched && !$props.isValid && $props.errorMessage)
      ? (_openBlock(), _createElementBlock("div", _hoisted_5, _toDisplayString($props.errorMessage), 1 /* TEXT */))
      : _createCommentVNode("v-if", true)
  ]))
}


_sfc_main.__hmrId = "3259eec3"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bemadu/Desktop/aladia/components/atoms/input-field.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLEtBQUssVUFBVTtFQUNiLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQztFQUNsQixLQUFLLEVBQUU7SUFDTCxVQUFVLEVBQUU7TUFDVixJQUFJLEVBQUUsTUFBTTtNQUNaLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0QsV0FBVyxFQUFFO01BQ1gsSUFBSSxFQUFFLE1BQU07TUFDWixPQUFPLEVBQUUsQ0FBQyxLQUFJLENBQUUsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLEVBQUU7TUFDSixJQUFJLEVBQUUsTUFBTTtNQUNaLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztJQUNqQixDQUFDO0lBQ0QsSUFBSSxFQUFFO01BQ0osSUFBSSxFQUFFLEtBQUs7TUFDWCxPQUFPLEVBQUUsSUFBSTtJQUNmLENBQUM7SUFDRCxLQUFLLEVBQUU7TUFDTCxJQUFJLEVBQUUsTUFBTTtNQUNaLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0QsT0FBTyxFQUFFO01BQ1AsSUFBSSxFQUFFLE1BQU07TUFDWixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUNELFFBQVEsRUFBRTtNQUNSLElBQUksRUFBRSxPQUFPO01BQ2IsT0FBTyxFQUFFLEtBQUs7SUFDaEIsQ0FBQztJQUNELE9BQU8sRUFBRTtNQUNQLElBQUksRUFBRSxPQUFPO01BQ2IsT0FBTyxFQUFFLElBQUk7SUFDZixDQUFDO0lBQ0QsWUFBWSxFQUFFO01BQ1osSUFBSSxFQUFFLE1BQU07TUFDWixPQUFPLEVBQUUsQ0FBQyxPQUFNLENBQUUsS0FBSyxDQUFDO0lBQzFCLENBQUM7RUFDSCxDQUFDO0VBQ0QsSUFBSSxDQUFDLEVBQUU7SUFDTCxNQUFLLENBQUU7TUFDTCxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBUyxDQUFFLFNBQVEsQ0FBRSxJQUFHLENBQUUsR0FBRSxDQUFFLE1BQUssQ0FBRSxJQUFHLENBQUU7TUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFFLEVBQUMsQ0FBRSxHQUFFLENBQUUsS0FBSSxDQUFFLEdBQUUsQ0FBRSxJQUFHLENBQUUsVUFBUyxDQUFFO0lBQzVELENBQUM7RUFDSCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0lBQ1AsZ0JBQWdCLENBQUMsRUFBRTtNQUNqQixDQUFDLEVBQUUsTUFBSyxDQUFFLE9BQU0sQ0FBRSxDQUFDLFFBQVEsRUFBRSxHQUFFLENBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRSxDQUFFO01BQzVDLElBQUksQ0FBQyxTQUFRLENBQUUsRUFBRSxJQUFJLENBQUMsU0FBUSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUN0RSxDQUFDO0lBQ0QsV0FBVyxDQUFDLEtBQUssRUFBRTtNQUNqQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDckQsQ0FBQztJQUNELFdBQVcsQ0FBQyxFQUFFO01BQ1osQ0FBQyxFQUFFLElBQUcsQ0FBRSxHQUFFLENBQUUsS0FBSSxDQUFFLEVBQUMsQ0FBRSxPQUFNLENBQUUsSUFBRyxDQUFFLEdBQUUsQ0FBRSxJQUFHLENBQUUsT0FBTSxDQUFFLEVBQUMsQ0FBRSxHQUFFLENBQUU7TUFDMUQsSUFBSSxDQUFDLE9BQU0sQ0FBRSxFQUFFLElBQUk7SUFDckIsQ0FBQztFQUNILENBQUM7RUFDRCxLQUFLLEVBQUU7SUFDTCxJQUFJLENBQUMsR0FBRyxFQUFFO01BQ1IsSUFBSSxDQUFDLFNBQVEsQ0FBRSxFQUFFLEdBQUc7SUFDdEIsQ0FBQztFQUNILENBQUM7QUFDSCxDQUFDOzs7OztFQXRITSxLQUFLLEVBQUMsc0JBQXNCO0VBQUMsa0JBQWdCLEVBQUM7OztFQURyRDtFQVlRLEtBQUssRUFBQywwREFBMEQ7RUFBQyxrQkFBZ0IsRUFBQzs7bUJBWjFGO21CQUFBOztFQUFBO0VBK0NNLEtBQUssRUFBQywyQkFBMkI7RUFBQyxrQkFBZ0IsRUFBQzs7Ozs7O3dCQTlDdkQsb0JBa0RNLE9BbEROLFVBa0RNO0lBakRKLG9CQTBDTTtNQXpDSixLQUFLLEVBSFgsaUJBR1ksd0RBQXdEO1FBQzVDLGFBQU8sS0FBSzs7OztNQUkzQixrQkFBZ0IsRUFBQzs7T0FHWixXQUFJO3lCQURaLG9CQUtNLE9BTE4sVUFLTTtZQURKLGFBQWtFO2NBQTlDLElBQUksRUFBRSxXQUFJO2NBQUUsS0FBSyxFQUFDOzs7VUFkOUM7TUFnQk0sb0JBYUU7UUFaQyxFQUFFLEVBQUUsY0FBTztRQUNYLEtBQUssRUFBRSxpQkFBVTtRQUNqQixPQUFLLDBDQUFFLHFEQUFXO1FBQ2xCLE9BQUssMENBQUUscURBQVc7UUFDbEIsV0FBVyxFQUFFLGtCQUFXO1FBQ3hCLFFBQVEsRUFBRSxlQUFRO1FBQ2xCLElBQUksRUFBRSxlQUFTO1FBQ2YsS0FBSyxFQXhCZDs7VUF3QjBILGFBQU8sS0FBSyxjQUFPOztRQUlwSSxpQkFBZSxFQUFFLFlBQUssR0FBRyxjQUFPO1FBQW9CLGtCQUFnQixFQUFDO3NEQTVCOUU7T0ErQmMsV0FBSTt5QkFEWixvQkFVTTtZQXhDWjtZQWdDUSxLQUFLLEVBQUMsNEVBQTRFO1lBQ2pGLE9BQUssMENBQUUsK0RBQWdCO1lBQUUsa0JBQWdCLEVBQUM7O1lBRTNDLGFBSUU7Y0FIQyxJQUFJO1lBQWUsZUFBUzs7OztVQXBDdkM7T0F5Q21CLFlBQUs7eUJBQWxCLG9CQUVRO1lBM0NkO1lBeUMyQixFQUFFLEVBQUUsY0FBTztZQUFhLEtBQUssRUFBQyxTQUFTO1lBQUMsa0JBQWdCLEVBQUM7OEJBQ3pFLFlBQUssd0JBMUNoQjtVQUFBOztLQThDWSxhQUFPLEtBQUssY0FBTyxJQUFJLG1CQUFZO3VCQUQzQyxvQkFLTSxPQUxOLFVBS00sbUJBREQsbUJBQVk7UUFqRHJCIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJpbnB1dC1maWVsZC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9pbnB1dC1maWVsZC52dWU6MjozXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJncm91cCByZWxhdGl2ZSBmbGV4IGgtMTAgdy1mdWxsIHJvdW5kZWQgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgOmNsYXNzPVwiW1xuICAgICAgICB0b3VjaGVkICYmICFpc1ZhbGlkXG4gICAgICAgICAgPyAnYmctcmVkLTUwIGJvcmRlciBib3JkZXItcmVkLTUwMCdcbiAgICAgICAgICA6ICdiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwJyxcbiAgICAgIF1cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9pbnB1dC1maWVsZC52dWU6Mzo1XCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHYtaWY9XCJpY29uXCJcbiAgICAgICAgY2xhc3M9XCJmbGV4IHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteGwgdGV4dC1ibGFja1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL2lucHV0LWZpZWxkLnZ1ZToxMTo3XCJcbiAgICAgID5cbiAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIDppY29uPVwiaWNvblwiIGNsYXNzPVwidGV4dC1iYXNlIHRleHQtYmxhY2svNzBcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aW5wdXRcbiAgICAgICAgOmlkPVwiaW5wdXRJZFwiXG4gICAgICAgIDp2YWx1ZT1cIm1vZGVsVmFsdWVcIlxuICAgICAgICBAaW5wdXQ9XCJoYW5kbGVJbnB1dFwiXG4gICAgICAgIEBmb2N1cz1cImhhbmRsZUZvY3VzXCJcbiAgICAgICAgOnBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgIDp0eXBlPVwiaW5wdXRUeXBlXCJcbiAgICAgICAgOmNsYXNzPVwiW1xuICAgICAgICAgICdoLWZ1bGwgZmxleC0xIHJvdW5kZWQgYmctdHJhbnNwYXJlbnQgdGV4dC1zbSBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgcGwtMicsXG4gICAgICAgICAgdG91Y2hlZCAmJiAhaXNWYWxpZCA/ICd0ZXh0LXJlZC01MDAnIDogJ3RleHQtYmxhY2snLFxuICAgICAgICBdXCJcbiAgICAgICAgOmFyaWEtbGFiZWxsZWRieT1cImxhYmVsID8gaW5wdXRJZCArICctbGFiZWwnIDogbnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL2lucHV0LWZpZWxkLnZ1ZToxNzo3XCJcbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIHYtaWY9XCJ0eXBlID09PSAncGFzc3dvcmQnXCJcbiAgICAgICAgY2xhc3M9XCJmbGV4IHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyIHRleHQteGwgdGV4dC1ibGFjay81MFwiXG4gICAgICAgIEBjbGljaz1cInRvZ2dsZVZpc2liaWxpdHlcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9pbnB1dC1maWVsZC52dWU6MzE6N1wiXG4gICAgICA+XG4gICAgICAgIDxmb250LWF3ZXNvbWUtaWNvblxuICAgICAgICAgIDppY29uPVwiXG4gICAgICAgICAgICBpbnB1dFR5cGUgPT09ICdwYXNzd29yZCcgPyBbJ2ZhcycsICdleWUnXSA6IFsnZmFzJywgJ2V5ZS1zbGFzaCddXG4gICAgICAgICAgXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGxhYmVsIHYtaWY9XCJsYWJlbFwiIDppZD1cImlucHV0SWQgKyAnLWxhYmVsJ1wiIGNsYXNzPVwic3Itb25seVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL2lucHV0LWZpZWxkLnZ1ZTo0Mjo3XCI+XG4gICAgICAgIHt7IGxhYmVsIH19XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIHYtaWY9XCJ0b3VjaGVkICYmICFpc1ZhbGlkICYmIGVycm9yTWVzc2FnZVwiXG4gICAgICBjbGFzcz1cInRleHQtcmVkLTUwMCB0ZXh0LXhzIG10LTFcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9pbnB1dC1maWVsZC52dWU6NDY6NVwiXG4gICAgPlxuICAgICAge3sgZXJyb3JNZXNzYWdlIH19XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJJbnB1dEZpZWxkXCIsXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIixcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIkVudGVyIHZhbHVlXCIsXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcInRleHRcIixcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIlwiLFxuICAgIH0sXG4gICAgaW5wdXRJZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogKCkgPT4gYGlucHV0LWZpZWxkLSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpfWAsXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgaXNWYWxpZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiSW52YWxpZCBpbnB1dFwiLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlucHV0VHlwZTogdGhpcy50eXBlLCAvLyBJbml0aWFsaXplIGlucHV0VHlwZSB3aXRoIHRoZSBwYXNzZWQgdHlwZSBwcm9wXG4gICAgICB0b3VjaGVkOiBmYWxzZSwgLy8gVHJhY2sgaWYgdGhlIGlucHV0IGhhcyBiZWVuIGludGVyYWN0ZWQgd2l0aFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVWaXNpYmlsaXR5KCkge1xuICAgICAgLy8gVG9nZ2xlIGJldHdlZW4gXCJwYXNzd29yZFwiIGFuZCBcInRleHRcIiBmb3IgdmlzaWJpbGl0eVxuICAgICAgdGhpcy5pbnB1dFR5cGUgPSB0aGlzLmlucHV0VHlwZSA9PT0gXCJwYXNzd29yZFwiID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCI7XG4gICAgfSxcbiAgICBoYW5kbGVJbnB1dChldmVudCkge1xuICAgICAgdGhpcy4kZW1pdChcInVwZGF0ZTptb2RlbFZhbHVlXCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgICBoYW5kbGVGb2N1cygpIHtcbiAgICAgIC8vIE1hcmsgdGhlIGlucHV0IGFzIHRvdWNoZWQgd2hlbiB0aGUgdXNlciBmb2N1c2VzIG9uIHRoZSBmaWVsZFxuICAgICAgdGhpcy50b3VjaGVkID0gdHJ1ZTtcbiAgICB9LFxuICB9LFxuICB3YXRjaDoge1xuICAgIHR5cGUodmFsKSB7XG4gICAgICB0aGlzLmlucHV0VHlwZSA9IHZhbDtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL2JlbWFkdS9EZXNrdG9wL2FsYWRpYS9jb21wb25lbnRzL2F0b21zL2lucHV0LWZpZWxkLnZ1ZSJ9