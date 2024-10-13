import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/verification-card.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock,createVNode as __createVNode } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=585ebe70"
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
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
/* Injection by vite-plugin-vue-inspector End */

import defaultLogo from "/_nuxt/assets/img/aladia.png?import";
import Button from "/_nuxt/components/atoms/button.vue";

const _sfc_main = {
  name: "VerificationCard",
  components: {
    Button,
  },
  props: {
    userName: {
      type: String,
      default: "Aladia User",
    },
    logo: {
      type: String,
      default: defaultLogo,
    },
  },
  data() {
    return {
      code: ["", "", "", "", "", ""],
    };
  },
  methods: {
    focusNext(index) {
      if (this.code[index].length === 1 && index < this.code.length - 1) {
        const nextInput = this.$refs["input" + (index + 1)];
        if (nextInput) {
          nextInput.focus();
        }
      }
    },
    handleSubmit() {
      const codeString = this.code.join("");
      if (codeString.length === 6) {
        console.log("Submitted Code:", codeString);
        // Handle submission logic here, e.g., call an API.
      } else {
        console.error("Please enter the complete 6-digit code.");
      }
    },
  },
};

import {  createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock,  vModelText as _vModelText, withDirectives as _withDirectives, resolveComponent as _resolveComponent, normalizeClass as _normalizeClass, withCtx as _withCtx,  createStaticVNode as _createStaticVNode } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=585ebe70"

const _hoisted_1 = {
  class: "relative flex flex-col items-center w-full max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4",
  "data-v-inspector": "components/organisms/verification-card.vue:2:3"
}
const _hoisted_2 = {
  class: "h-24 w-24 rounded",
  "data-v-inspector": "components/organisms/verification-card.vue:21:5"
}
const _hoisted_3 = ["src"]
const _hoisted_4 = {
  class: "text-white text-xl font-semibold",
  "data-v-inspector": "components/organisms/verification-card.vue:28:5"
}
const _hoisted_5 = {
  class: "flex justify-center gap-2 mt-16",
  "data-v-inspector": "components/organisms/verification-card.vue:40:5"
}
const _hoisted_6 = ["onUpdate:modelValue", "onInput"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = _resolveComponent("Button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[1] || (_cache[1] = _createStaticVNode("<div class=\"absolute inset-0 rounded-md pointer-events-none\" data-v-inspector=\"components/organisms/verification-card.vue:5:5\" data-v-88edeba8><div class=\"bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/verification-card.vue:6:7\" data-v-88edeba8></div><div class=\"bg-gradient-to-l from-transparent via-white to-transparent absolute bottom-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/verification-card.vue:9:7\" data-v-88edeba8></div><div class=\"bg-gradient-to-b from-transparent via-white to-transparent absolute top-0 left-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/verification-card.vue:12:7\" data-v-88edeba8></div><div class=\"bg-gradient-to-t from-transparent via-white to-transparent absolute top-0 right-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/verification-card.vue:15:7\" data-v-88edeba8></div></div>", 1)),
    _createCommentVNode(" User Info section "),
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("img", {
        src: $props.logo,
        alt: "Profile picture",
        class: "inset-0 h-full w-full rounded object-cover",
        "data-v-inspector": "components/organisms/verification-card.vue:22:7"
      }, null, 8 /* PROPS */, _hoisted_3)
    ]),
    _createElementVNode("h2", _hoisted_4, _toDisplayString($props.userName), 1 /* TEXT */),
    _createCommentVNode(" Welcome Text "),
    _cache[2] || (_cache[2] = _createElementVNode("p", {
      class: "text-white/70 mt-4",
      "data-v-inspector": "components/organisms/verification-card.vue:31:5"
    }, "Thanks for joining Aladia.", -1 /* HOISTED */)),
    _createCommentVNode(" Instruction Text "),
    _cache[3] || (_cache[3] = _createElementVNode("p", {
      class: "text-white/70 text-center mt-8",
      "data-v-inspector": "components/organisms/verification-card.vue:34:5"
    }, " Please enter below the 6-digit code we sent you through your registration e-mail: ", -1 /* HOISTED */)),
    _createCommentVNode(" Code Input Fields "),
    _createElementVNode("div", _hoisted_5, [
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList($data.code, (digit, index) => {
        return _withDirectives((_openBlock(), _createElementBlock("input", {
          key: index,
          type: "text",
          maxlength: "1",
          "onUpdate:modelValue": $event => (($data.code[index]) = $event),
          onInput: $event => ($options.focusNext(index)),
          ref_for: true,
          ref: 'input' + index,
          class: "w-8 h-8 text-center text-black text-lg rounded-md border border-gray-300",
          "data-v-inspector": "components/organisms/verification-card.vue:41:7"
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_6)), [
          [_vModelText, $data.code[index]]
        ])
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    _createCommentVNode(" Help Text "),
    _cache[4] || (_cache[4] = _createElementVNode("p", {
      class: "text-white/70 text-xs mt-2",
      "data-v-inspector": "components/organisms/verification-card.vue:54:5"
    }, "You didn't receive any mail?", -1 /* HOISTED */)),
    _createCommentVNode(" Submit Button "),
    _createVNode(_component_Button, {
      class: _normalizeClass([
        'relative flex h-10 w-full mt-16 mb-8 items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all',
      ]),
      onClick: $options.handleSubmit
    }, {
      default: _withCtx(() => _cache[0] || (_cache[0] = [
        _createElementVNode("div", {
          class: "gradient absolute w-full h-full inset-0 opacity-50",
          "data-v-inspector": "components/organisms/verification-card.vue:63:7"
        }, null, -1 /* HOISTED */),
        _createElementVNode("div", { "data-v-inspector": "components/organisms/verification-card.vue:64:7" }, "Enter", -1 /* HOISTED */)
      ])),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick"])
  ]))
}

import "/_nuxt/components/organisms/verification-card.vue?vue&type=style&index=0&scoped=88edeba8&lang.css"

_sfc_main.__hmrId = "88edeba8"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-88edeba8"],['__file',"/home/bemadu/Desktop/aladia/components/organisms/verification-card.vue"]])
//# sourceMappingURL=data:application/json;base64,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QUFpRCxJQUFDLE9BQUs7O01BL0RuRiIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsidmVyaWZpY2F0aW9uLWNhcmQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdy1mdWxsIG1heC13LXNtIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBiZy1ibGFjay81MCBweC04IHB5LTRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjI6M1wiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLW1kIHBvaW50ZXItZXZlbnRzLW5vbmVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjU6NVwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUgdG8tdHJhbnNwYXJlbnQgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtWzFweF0gdy1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3ZlcmlmaWNhdGlvbi1jYXJkLnZ1ZTo2OjdcIlxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYWRpZW50LXRvLWwgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUgdG8tdHJhbnNwYXJlbnQgYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIGgtWzFweF0gdy1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3ZlcmlmaWNhdGlvbi1jYXJkLnZ1ZTo5OjdcIlxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYWRpZW50LXRvLWIgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUgdG8tdHJhbnNwYXJlbnQgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctWzFweF0gaC1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3ZlcmlmaWNhdGlvbi1jYXJkLnZ1ZToxMjo3XCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJiZy1ncmFkaWVudC10by10IGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlIHRvLXRyYW5zcGFyZW50IGFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy1bMXB4XSBoLWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjE1OjdcIlxuICAgICAgPjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBVc2VyIEluZm8gc2VjdGlvbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiaC0yNCB3LTI0IHJvdW5kZWRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjIxOjVcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgOnNyYz1cImxvZ29cIlxuICAgICAgICBhbHQ9XCJQcm9maWxlIHBpY3R1cmVcIlxuICAgICAgICBjbGFzcz1cImluc2V0LTAgaC1mdWxsIHctZnVsbCByb3VuZGVkIG9iamVjdC1jb3ZlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy92ZXJpZmljYXRpb24tY2FyZC52dWU6MjI6N1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxoMiBjbGFzcz1cInRleHQtd2hpdGUgdGV4dC14bCBmb250LXNlbWlib2xkXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3ZlcmlmaWNhdGlvbi1jYXJkLnZ1ZToyODo1XCI+e3sgdXNlck5hbWUgfX08L2gyPlxuXG4gICAgPCEtLSBXZWxjb21lIFRleHQgLS0+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LXdoaXRlLzcwIG10LTRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjMxOjVcIj5UaGFua3MgZm9yIGpvaW5pbmcgQWxhZGlhLjwvcD5cblxuICAgIDwhLS0gSW5zdHJ1Y3Rpb24gVGV4dCAtLT5cbiAgICA8cCBjbGFzcz1cInRleHQtd2hpdGUvNzAgdGV4dC1jZW50ZXIgbXQtOFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy92ZXJpZmljYXRpb24tY2FyZC52dWU6MzQ6NVwiPlxuICAgICAgUGxlYXNlIGVudGVyIGJlbG93IHRoZSA2LWRpZ2l0IGNvZGUgd2Ugc2VudCB5b3UgdGhyb3VnaCB5b3VyIHJlZ2lzdHJhdGlvblxuICAgICAgZS1tYWlsOlxuICAgIDwvcD5cblxuICAgIDwhLS0gQ29kZSBJbnB1dCBGaWVsZHMgLS0+XG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTIgbXQtMTZcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjQwOjVcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB2LWZvcj1cIihkaWdpdCwgaW5kZXgpIGluIGNvZGVcIlxuICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG1heGxlbmd0aD1cIjFcIlxuICAgICAgICB2LW1vZGVsPVwiY29kZVtpbmRleF1cIlxuICAgICAgICBAaW5wdXQ9XCJmb2N1c05leHQoaW5kZXgpXCJcbiAgICAgICAgOnJlZj1cIidpbnB1dCcgKyBpbmRleFwiXG4gICAgICAgIGNsYXNzPVwidy04IGgtOCB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrIHRleHQtbGcgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3ZlcmlmaWNhdGlvbi1jYXJkLnZ1ZTo0MTo3XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIEhlbHAgVGV4dCAtLT5cbiAgICA8cCBjbGFzcz1cInRleHQtd2hpdGUvNzAgdGV4dC14cyBtdC0yXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3ZlcmlmaWNhdGlvbi1jYXJkLnZ1ZTo1NDo1XCI+WW91IGRpZG4ndCByZWNlaXZlIGFueSBtYWlsPzwvcD5cblxuICAgIDwhLS0gU3VibWl0IEJ1dHRvbiAtLT5cbiAgICA8QnV0dG9uXG4gICAgICA6Y2xhc3M9XCJbXG4gICAgICAgICdyZWxhdGl2ZSBmbGV4IGgtMTAgdy1mdWxsIG10LTE2IG1iLTggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBiZy1ibGFjayB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRyYW5zaXRpb24tYWxsJyxcbiAgICAgIF1cIlxuICAgICAgQGNsaWNrPVwiaGFuZGxlU3VibWl0XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JhZGllbnQgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBpbnNldC0wIG9wYWNpdHktNTBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjYzOjdcIj48L2Rpdj5cbiAgICAgIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3ZlcmlmaWNhdGlvbi1jYXJkLnZ1ZTo2NDo3XCI+RW50ZXI8L2Rpdj5cbiAgICA8L0J1dHRvbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGRlZmF1bHRMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1nL2FsYWRpYS5wbmdcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2F0b21zL2J1dHRvbi52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlZlcmlmaWNhdGlvbkNhcmRcIixcbiAgY29tcG9uZW50czoge1xuICAgIEJ1dHRvbixcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB1c2VyTmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJBbGFkaWEgVXNlclwiLFxuICAgIH0sXG4gICAgbG9nbzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogZGVmYXVsdExvZ28sXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBmb2N1c05leHQoaW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLmNvZGVbaW5kZXhdLmxlbmd0aCA9PT0gMSAmJiBpbmRleCA8IHRoaXMuY29kZS5sZW5ndGggLSAxKSB7XG4gICAgICAgIGNvbnN0IG5leHRJbnB1dCA9IHRoaXMuJHJlZnNbXCJpbnB1dFwiICsgKGluZGV4ICsgMSldO1xuICAgICAgICBpZiAobmV4dElucHV0KSB7XG4gICAgICAgICAgbmV4dElucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgIGNvbnN0IGNvZGVTdHJpbmcgPSB0aGlzLmNvZGUuam9pbihcIlwiKTtcbiAgICAgIGlmIChjb2RlU3RyaW5nLmxlbmd0aCA9PT0gNikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Ym1pdHRlZCBDb2RlOlwiLCBjb2RlU3RyaW5nKTtcbiAgICAgICAgLy8gSGFuZGxlIHN1Ym1pc3Npb24gbG9naWMgaGVyZSwgZS5nLiwgY2FsbCBhbiBBUEkuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiUGxlYXNlIGVudGVyIHRoZSBjb21wbGV0ZSA2LWRpZ2l0IGNvZGUuXCIpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTVkZWcsXG4gICAgI2ZmZjAgOC4zMyUsXG4gICAgI2ZmZjAgMjcuNDMlLFxuICAgICNmZmY2LFxuICAgICNmZmYwIDM3Ljg1JSxcbiAgICAjZmZmMCA1My45MSUsXG4gICAgI2ZmZiA2Mi4xNSUsXG4gICAgI2ZmZjAgNjguMjMlLFxuICAgICNmZmYgOTEuNjclXG4gICk7XG59XG48L3N0eWxlPlxuIl0sImZpbGUiOiIvaG9tZS9iZW1hZHUvRGVza3RvcC9hbGFkaWEvY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlIn0=