import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/password-recovery-confirmation.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import Button from "/_nuxt/components/atoms/button.vue";
import Hero from "/_nuxt/components/molecules/hero.vue";
const _sfc_main = {
  name: "PasswordRecoveryConfirmation",
  components: {
    Hero,
    Button,
  },
  props: {
    recoveryEmail: {
      type: String,
      required: true,
      default: "user@example.com", // Default email value if not passed as a prop
    },
  },
  setup(props) {
    // Method to Handle Resend Email Click
    function sendEmailAgain() {
      console.log(`Resend email to: ${props.recoveryEmail}`);
      // Logic to resend the recovery email to the specified address
    }

    return {
      sendEmailAgain,
    };
  },
};

import { createCommentVNode as _createCommentVNode,  resolveComponent as _resolveComponent,  toDisplayString as _toDisplayString, withCtx as _withCtx, createStaticVNode as _createStaticVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=585ebe70"

const _hoisted_1 = {
  class: "relative flex flex-col items-center max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4",
  "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:2:3"
}
const _hoisted_2 = {
  class: "mb-6 flex flex-col items-center px-6",
  "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:27:5"
}
const _hoisted_3 = {
  class: "flex justify-between w-full mb-24",
  "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:28:7"
}
const _hoisted_4 = {
  class: "text-white/50 text-xs font-medium mb-6",
  "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:31:9"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Hero = _resolveComponent("Hero")
  const _component_Button = _resolveComponent("Button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createCommentVNode(" Background Gradient Border "),
    _cache[3] || (_cache[3] = _createStaticVNode("<div class=\"absolute inset-0 rounded-md pointer-events-none\" data-v-inspector=\"components/organisms/password-recovery-confirmation.vue:6:5\" data-v-3c3102c9><div class=\"bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/password-recovery-confirmation.vue:7:7\" data-v-3c3102c9></div><div class=\"bg-gradient-to-l from-transparent via-white to-transparent absolute bottom-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/password-recovery-confirmation.vue:10:7\" data-v-3c3102c9></div><div class=\"bg-gradient-to-b from-transparent via-white to-transparent absolute top-0 left-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/password-recovery-confirmation.vue:13:7\" data-v-3c3102c9></div><div class=\"bg-gradient-to-t from-transparent via-white to-transparent absolute top-0 right-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/password-recovery-confirmation.vue:16:7\" data-v-3c3102c9></div></div>", 1)),
    _createCommentVNode(" Password Recovery Icon and Title (Hero Component) "),
    _createVNode(_component_Hero, {
      class: "mb-6",
      title: "Password Recovery",
      subtitle: "Retrieve your password account through your registration mail"
    }),
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createCommentVNode(" Email Sent Confirmation Message "),
        _cache[0] || (_cache[0] = _createElementVNode("p", {
          class: "text-white text-sm mb-2",
          "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:30:9"
        }, "Recovery link sent to:", -1 /* HOISTED */)),
        _createElementVNode("p", _hoisted_4, _toDisplayString($props.recoveryEmail), 1 /* TEXT */)
      ]),
      _createCommentVNode(" Instruction Text "),
      _cache[1] || (_cache[1] = _createElementVNode("p", {
        class: "text-white/70 text-base text-center mb-32",
        "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:37:7"
      }, " Check your email to change your password! ", -1 /* HOISTED */))
    ]),
    _createCommentVNode(" Resend Email Button (Button Component) "),
    _createVNode(_component_Button, {
      class: "relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all",
      onClick: $setup.sendEmailAgain
    }, {
      default: _withCtx(() => _cache[2] || (_cache[2] = [
        _createElementVNode("div", {
          class: "gradient absolute w-full h-full inset-0 opacity-50",
          "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:47:7"
        }, null, -1 /* HOISTED */),
        _createElementVNode("div", { "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:48:7" }, "Send Email Again", -1 /* HOISTED */)
      ])),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick"])
  ]))
}

import "/_nuxt/components/organisms/password-recovery-confirmation.vue?vue&type=style&index=0&scoped=3c3102c9&lang.css"

_sfc_main.__hmrId = "3c3102c9"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-3c3102c9"],['__file',"/home/bemadu/Desktop/aladia/components/organisms/password-recovery-confirmation.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBLE1BQUssQ0FBRSxNQUFLLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDeEMsTUFBSyxDQUFFLElBQUcsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUN4QyxLQUFLLFVBQVU7RUFDYixJQUFJLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztFQUNwQyxVQUFVLEVBQUU7SUFDVixJQUFJO0lBQ0osTUFBTTtFQUNSLENBQUM7RUFDRCxLQUFLLEVBQUU7SUFDTCxhQUFhLEVBQUU7TUFDYixJQUFJLEVBQUUsTUFBTTtNQUNaLFFBQVEsRUFBRSxJQUFJO01BQ2QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTSxDQUFFLEtBQUksQ0FBRSxLQUFJLENBQUUsRUFBQyxDQUFFLEdBQUUsQ0FBRSxNQUFLLENBQUUsRUFBQyxDQUFFLEVBQUU7SUFDekUsQ0FBQztFQUNILENBQUM7RUFDRCxLQUFLLENBQUMsS0FBSyxFQUFFO0lBQ1gsQ0FBQyxFQUFFLE1BQUssQ0FBRSxFQUFDLENBQUUsTUFBSyxDQUFFLE1BQUssQ0FBRSxLQUFJLENBQUU7SUFDakMsUUFBTyxDQUFFLGNBQWMsQ0FBQyxFQUFFO01BQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFLLENBQUUsS0FBSSxDQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7TUFDdEQsQ0FBQyxFQUFFLEtBQUksQ0FBRSxFQUFDLENBQUUsTUFBSyxDQUFFLEdBQUUsQ0FBRSxRQUFPLENBQUUsS0FBSSxDQUFFLEVBQUMsQ0FBRSxHQUFFLENBQUUsU0FBUSxDQUFFO0lBQ3pEOztJQUVBLE1BQUssQ0FBRTtNQUNMLGNBQWM7SUFDaEIsQ0FBQztFQUNILENBQUM7QUFDSCxDQUFDOzs7OztFQTVFRyxLQUFLLEVBQUMsc0dBQXNHO0VBQUMsa0JBQWdCLEVBQUM7OztFQXdCekgsS0FBSyxFQUFDLHNDQUFzQztFQUFDLGtCQUFnQixFQUFDOzs7RUFDNUQsS0FBSyxFQUFDLG1DQUFtQztFQUFDLGtCQUFnQixFQUFDOzs7RUFHM0QsS0FBSyxFQUFDLHdDQUF3QztFQUFDLGtCQUFnQixFQUFDOzs7Ozs7O3dCQTdCekUsb0JBZ0RNLE9BaEROLFVBZ0RNO0lBN0NKLG1EQUFtQzs4QkFKdkM7SUFvQkksMEVBQTBEO0lBQzFELGFBSUU7TUFIQSxLQUFLLEVBQUMsTUFBTTtNQUNaLEtBQUssRUFBQyxtQkFBbUI7TUFDekIsUUFBUSxFQUFDOztJQUVYLG9CQWFNLE9BYk4sVUFhTTtNQVpKLG9CQU1NLE9BTk4sVUFNTTtRQUxKLHdEQUF3QztrQ0FDeEMsb0JBQTZJO1VBQTFJLEtBQUssRUFBQyx5QkFBeUI7VUFBQyxrQkFBZ0IsRUFBQztXQUErRCx3QkFBc0I7UUFDekksb0JBRUksS0FGSixVQUVJLG1CQURDLG9CQUFhOztNQUlwQix5Q0FBeUI7Z0NBQ3pCLG9CQUVJO1FBRkQsS0FBSyxFQUFDLDJDQUEyQztRQUFDLGtCQUFnQixFQUFDO1NBQStELDZDQUVySTs7SUFHRiwrREFBK0M7SUFDL0MsYUFNUztNQUxQLEtBQUssRUFBQyxxSUFBcUk7TUFDMUksT0FBSyxFQUFFOztNQTVDZCxrQkE4Q00sQ0FBc0o7UUFBdEosb0JBQXNKO1VBQWpKLEtBQUssRUFBQyxvREFBb0Q7VUFBQyxrQkFBZ0IsRUFBQzs7UUFDakYsb0JBQTJHLFNBQXRHLGtCQUFnQixFQUFDLDhEQUE4RCxJQUFDLGtCQUFnQjs7TUEvQzNHIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJwYXNzd29yZC1yZWNvdmVyeS1jb25maXJtYXRpb24udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWF4LXctc20gcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLWJsYWNrLzUwIHB4LTggcHktNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jb25maXJtYXRpb24udnVlOjI6M1wiXG4gID5cbiAgICA8IS0tIEJhY2tncm91bmQgR3JhZGllbnQgQm9yZGVyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQtbWQgcG9pbnRlci1ldmVudHMtbm9uZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jb25maXJtYXRpb24udnVlOjY6NVwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUgdG8tdHJhbnNwYXJlbnQgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtWzFweF0gdy1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNvbmZpcm1hdGlvbi52dWU6Nzo3XCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJiZy1ncmFkaWVudC10by1sIGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlIHRvLXRyYW5zcGFyZW50IGFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCBoLVsxcHhdIHctZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jb25maXJtYXRpb24udnVlOjEwOjdcIlxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYWRpZW50LXRvLWIgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUgdG8tdHJhbnNwYXJlbnQgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctWzFweF0gaC1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNvbmZpcm1hdGlvbi52dWU6MTM6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYmctZ3JhZGllbnQtdG8tdCBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZSB0by10cmFuc3BhcmVudCBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctWzFweF0gaC1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNvbmZpcm1hdGlvbi52dWU6MTY6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIFBhc3N3b3JkIFJlY292ZXJ5IEljb24gYW5kIFRpdGxlIChIZXJvIENvbXBvbmVudCkgLS0+XG4gICAgPEhlcm9cbiAgICAgIGNsYXNzPVwibWItNlwiXG4gICAgICB0aXRsZT1cIlBhc3N3b3JkIFJlY292ZXJ5XCJcbiAgICAgIHN1YnRpdGxlPVwiUmV0cmlldmUgeW91ciBwYXNzd29yZCBhY2NvdW50IHRocm91Z2ggeW91ciByZWdpc3RyYXRpb24gbWFpbFwiXG4gICAgLz5cbiAgICA8ZGl2IGNsYXNzPVwibWItNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBweC02XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNvbmZpcm1hdGlvbi52dWU6Mjc6NVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBtYi0yNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jb25maXJtYXRpb24udnVlOjI4OjdcIj5cbiAgICAgICAgPCEtLSBFbWFpbCBTZW50IENvbmZpcm1hdGlvbiBNZXNzYWdlIC0tPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtd2hpdGUgdGV4dC1zbSBtYi0yXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNvbmZpcm1hdGlvbi52dWU6MzA6OVwiPlJlY292ZXJ5IGxpbmsgc2VudCB0bzo8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZS81MCB0ZXh0LXhzIGZvbnQtbWVkaXVtIG1iLTZcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY29uZmlybWF0aW9uLnZ1ZTozMTo5XCI+XG4gICAgICAgICAge3sgcmVjb3ZlcnlFbWFpbCB9fVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBJbnN0cnVjdGlvbiBUZXh0IC0tPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXdoaXRlLzcwIHRleHQtYmFzZSB0ZXh0LWNlbnRlciBtYi0zMlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jb25maXJtYXRpb24udnVlOjM3OjdcIj5cbiAgICAgICAgQ2hlY2sgeW91ciBlbWFpbCB0byBjaGFuZ2UgeW91ciBwYXNzd29yZCFcbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gUmVzZW5kIEVtYWlsIEJ1dHRvbiAoQnV0dG9uIENvbXBvbmVudCkgLS0+XG4gICAgPEJ1dHRvblxuICAgICAgY2xhc3M9XCJyZWxhdGl2ZSBmbGV4IGgtMTAgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgYmctYmxhY2sgdGV4dC1jZW50ZXIgdGV4dC1zbSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICBAY2xpY2s9XCJzZW5kRW1haWxBZ2FpblwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImdyYWRpZW50IGFic29sdXRlIHctZnVsbCBoLWZ1bGwgaW5zZXQtMCBvcGFjaXR5LTUwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNvbmZpcm1hdGlvbi52dWU6NDc6N1wiPjwvZGl2PlxuICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY29uZmlybWF0aW9uLnZ1ZTo0ODo3XCI+U2VuZCBFbWFpbCBBZ2FpbjwvZGl2PlxuICAgIDwvQnV0dG9uPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYXRvbXMvYnV0dG9uLnZ1ZVwiO1xuaW1wb3J0IEhlcm8gZnJvbSBcIi4uL21vbGVjdWxlcy9oZXJvLnZ1ZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlBhc3N3b3JkUmVjb3ZlcnlDb25maXJtYXRpb25cIixcbiAgY29tcG9uZW50czoge1xuICAgIEhlcm8sXG4gICAgQnV0dG9uLFxuICB9LFxuICBwcm9wczoge1xuICAgIHJlY292ZXJ5RW1haWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogXCJ1c2VyQGV4YW1wbGUuY29tXCIsIC8vIERlZmF1bHQgZW1haWwgdmFsdWUgaWYgbm90IHBhc3NlZCBhcyBhIHByb3BcbiAgICB9LFxuICB9LFxuICBzZXR1cChwcm9wcykge1xuICAgIC8vIE1ldGhvZCB0byBIYW5kbGUgUmVzZW5kIEVtYWlsIENsaWNrXG4gICAgZnVuY3Rpb24gc2VuZEVtYWlsQWdhaW4oKSB7XG4gICAgICBjb25zb2xlLmxvZyhgUmVzZW5kIGVtYWlsIHRvOiAke3Byb3BzLnJlY292ZXJ5RW1haWx9YCk7XG4gICAgICAvLyBMb2dpYyB0byByZXNlbmQgdGhlIHJlY292ZXJ5IGVtYWlsIHRvIHRoZSBzcGVjaWZpZWQgYWRkcmVzc1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZW5kRW1haWxBZ2FpbixcbiAgICB9O1xuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDE1ZGVnLFxuICAgICNmZmYwIDkuNTUlLFxuICAgICNmZmYwIDMwLjI4JSxcbiAgICAjZmZmNixcbiAgICAjZmZmMCA0MS41OCUsXG4gICAgI2ZmZjAgNTkuMDIlLFxuICAgICNmZmYgNjcuOTclLFxuICAgICNmZmYwIDc0LjU2JSxcbiAgICAjZmZmXG4gICk7XG59XG48L3N0eWxlPlxuIl0sImZpbGUiOiIvaG9tZS9iZW1hZHUvRGVza3RvcC9hbGFkaWEvY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY29uZmlybWF0aW9uLnZ1ZSJ9