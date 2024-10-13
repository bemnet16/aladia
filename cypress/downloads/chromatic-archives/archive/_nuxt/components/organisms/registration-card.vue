import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/registration-card.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import BackToLogin from "/_nuxt/components/molecules/back-to-login.vue";
import ProfileUpload from "/_nuxt/components/molecules/profile-upload.vue";
import InputField from "/_nuxt/components/atoms/input-field.vue";
import Button from "/_nuxt/components/atoms/button.vue";
import TermsCheckbox from "/_nuxt/components/molecules/terms-checkbox.vue";
import TermsAndConditions from "/_nuxt/components/molecules/terms-and-conditions.vue";

const _sfc_main = {
  name: "RegistrationCard",
  components: {
    BackToLogin,
    ProfileUpload,
    InputField,
    Button,
    TermsAndConditions,
    TermsCheckbox,
  },
  props: {
    emailIn: {
      type: String,
      required: true,
      default: "user@example.com",
    },
  },
  data() {
    return {
      name: "",
      surname: "",
      email: this.emailIn,
      password: "",
      confirmPassword: "",
      profileImage: "",
      isChecked: false,
    };
  },
  computed: {
    isEmailValid() {
      // Basic email validation regex pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.email);
    },
    matchingPassword() {
      return this.password === this.confirmPassword;
    },
    isFormValid() {
      return (
        this.isChecked &&
        this.name &&
        this.surname &&
        this.email &&
        this.password &&
        this.confirmPassword &&
        this.isEmailValid &&
        this.matchingPassword
      );
    },
  },
  methods: {
    handleSubmit() {
      if (this.isFormValid) {
        console.log("Form submitted with data:", {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          // Include profile image data if needed
        });
        this.$emit("submitRegistration", {
          email: this.email,
          password: this.password,
          name: this.name,
          surname: this.surname,
          profileImage: this.profileImage,
        });
      } else {
        console.error("Form validation failed.");
      }
    },
  },
};

import {  createCommentVNode as _createCommentVNode, resolveComponent as _resolveComponent,  normalizeClass as _normalizeClass, withCtx as _withCtx, createStaticVNode as _createStaticVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.12_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=585ebe70"

const _hoisted_1 = {
  class: "relative flex flex-col max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4",
  "data-v-inspector": "components/organisms/registration-card.vue:2:3"
}
const _hoisted_2 = {
  class: "flex flex-col gap-4 mb-6",
  "data-v-inspector": "components/organisms/registration-card.vue:23:5"
}
const _hoisted_3 = {
  class: "flex flex-col gap-1 items-center",
  "data-v-inspector": "components/organisms/registration-card.vue:26:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BackToLogin = _resolveComponent("BackToLogin")
  const _component_ProfileUpload = _resolveComponent("ProfileUpload")
  const _component_TermsCheckbox = _resolveComponent("TermsCheckbox")
  const _component_InputField = _resolveComponent("InputField")
  const _component_Button = _resolveComponent("Button")
  const _component_TermsAndConditions = _resolveComponent("TermsAndConditions")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[9] || (_cache[9] = _createStaticVNode("<div class=\"absolute inset-0 rounded-md pointer-events-none\" data-v-inspector=\"components/organisms/registration-card.vue:5:5\" data-v-416921e3><div class=\"bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/registration-card.vue:6:7\" data-v-416921e3></div><div class=\"bg-gradient-to-l from-transparent via-white to-transparent absolute bottom-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/registration-card.vue:9:7\" data-v-416921e3></div><div class=\"bg-gradient-to-b from-transparent via-white to-transparent absolute top-0 left-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/registration-card.vue:12:7\" data-v-416921e3></div><div class=\"bg-gradient-to-t from-transparent via-white to-transparent absolute top-0 right-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/registration-card.vue:15:7\" data-v-416921e3></div></div>", 1)),
    _createCommentVNode(" Header Section "),
    _createVNode(_component_BackToLogin, { class: "mb-6" }),
    _createCommentVNode(" Form Section "),
    _createElementVNode("div", _hoisted_2, [
      _createCommentVNode(" Profile Upload Section "),
      _createVNode(_component_ProfileUpload, {
        modelValue: $data.profileImage,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.profileImage) = $event))
      }, null, 8 /* PROPS */, ["modelValue"]),
      _createElementVNode("div", _hoisted_3, [
        _createVNode(_component_TermsCheckbox, {
          checked: $data.isChecked,
          "onUpdate:checked": _cache[1] || (_cache[1] = $event => (($data.isChecked) = $event))
        }, null, 8 /* PROPS */, ["checked"]),
        _cache[7] || (_cache[7] = _createElementVNode("p", {
          class: "text-center text-xs",
          "data-v-inspector": "components/organisms/registration-card.vue:28:9"
        }, "Enter your details", -1 /* HOISTED */))
      ]),
      _createVNode(_component_InputField, {
        inputId: "name",
        icon: ['fas', 'user'],
        placeholder: "Name",
        modelValue: $data.name,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($data.name) = $event))
      }, null, 8 /* PROPS */, ["modelValue"]),
      _createVNode(_component_InputField, {
        inputId: "surname",
        icon: ['fas', 'user'],
        placeholder: "Surname",
        modelValue: $data.surname,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($data.surname) = $event))
      }, null, 8 /* PROPS */, ["modelValue"]),
      _createVNode(_component_InputField, {
        inputId: "email",
        icon: ['fas', 'envelope'],
        placeholder: "Email",
        isValid: $options.isEmailValid,
        errorMessage: "Invalid email",
        modelValue: $data.email,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($data.email) = $event))
      }, null, 8 /* PROPS */, ["isValid", "modelValue"]),
      _createVNode(_component_InputField, {
        inputId: "password",
        icon: ['fas', 'lock'],
        placeholder: "Password",
        type: "password",
        postfixIcon: true,
        modelValue: $data.password,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($data.password) = $event))
      }, null, 8 /* PROPS */, ["modelValue"]),
      _createVNode(_component_InputField, {
        inputId: "password",
        icon: ['fas', 'lock'],
        placeholder: "Confirm Password",
        type: "password",
        postfixIcon: true,
        modelValue: $data.confirmPassword,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($data.confirmPassword) = $event)),
        isValid: $options.matchingPassword,
        errorMessage: "Passwords do not match"
      }, null, 8 /* PROPS */, ["modelValue", "isValid"])
    ]),
    _createCommentVNode(" Submit Button "),
    _createVNode(_component_Button, {
      class: _normalizeClass([
        'relative flex h-10 w-full mb-2 items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all',
        $options.isFormValid
          ? 'border-white bg-primary text-white pointer-events-auto opacity-100'
          : 'border-white/0 bg-black text-white pointer-events-none opacity-70',
      ]),
      onClick: $options.handleSubmit
    }, {
      default: _withCtx(() => _cache[8] || (_cache[8] = [
        _createElementVNode("div", {
          class: "gradient absolute w-full h-full inset-0 opacity-50",
          "data-v-inspector": "components/organisms/registration-card.vue:80:7"
        }, null, -1 /* HOISTED */),
        _createElementVNode("div", { "data-v-inspector": "components/organisms/registration-card.vue:81:7" }, "Enter", -1 /* HOISTED */)
      ])),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["class", "onClick"]),
    _createVNode(_component_TermsAndConditions, { onClick: _ctx.handleTermsClick }, null, 8 /* PROPS */, ["onClick"])
  ]))
}

import "/_nuxt/components/organisms/registration-card.vue?vue&type=style&index=0&scoped=416921e3&lang.css"

_sfc_main.__hmrId = "416921e3"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-416921e3"],['__file',"/home/bemadu/Desktop/aladia/components/organisms/registration-card.vue"]])
//# sourceMappingURL=data:application/json;base64,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UTs7TUFFbkIsYUFTRTtRQVJBLE9BQU8sRUFBQyxVQUFVO1FBQ2pCLElBQUksRUFBRSxlQUFlO1FBQ3RCLFdBQVcsRUFBQyxrQkFBa0I7UUFDOUIsSUFBSSxFQUFDLFVBQVU7UUFDZCxXQUFXLEVBQUUsSUFBSTtRQTlEMUIsWUErRGlCLHFCQUFlO1FBL0RoQyw2REErRGlCLHFCQUFlO1FBQ3ZCLE9BQU8sRUFBRSx5QkFBZ0I7UUFDMUIsWUFBWSxFQUFDOzs7SUFJakIsc0NBQXNCO0lBQ3RCLGFBV1M7TUFWTixLQUFLLEVBdkVaOztRQXVFNEs7Ozs7TUFNckssT0FBSyxFQUFFOztNQTdFZCxrQkErRU0sQ0FBeUk7UUFBekksb0JBQXlJO1VBQXBJLEtBQUssRUFBQyxvREFBb0Q7VUFBQyxrQkFBZ0IsRUFBQzs7UUFDakYsb0JBQW1GLFNBQTlFLGtCQUFnQixFQUFDLGlEQUFpRCxJQUFDLE9BQUs7O01BaEZuRjs7SUFrRkksYUFBZ0QsaUNBQTNCLE9BQUssRUFBRSxxQkFBZ0IiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi1jYXJkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWF4LXctc20gcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLWJsYWNrLzUwIHB4LTggcHktNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9yZWdpc3RyYXRpb24tY2FyZC52dWU6MjozXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQtbWQgcG9pbnRlci1ldmVudHMtbm9uZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9yZWdpc3RyYXRpb24tY2FyZC52dWU6NTo1XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZSB0by10cmFuc3BhcmVudCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC1bMXB4XSB3LWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcmVnaXN0cmF0aW9uLWNhcmQudnVlOjY6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYmctZ3JhZGllbnQtdG8tbCBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZSB0by10cmFuc3BhcmVudCBhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgaC1bMXB4XSB3LWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcmVnaXN0cmF0aW9uLWNhcmQudnVlOjk6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYmctZ3JhZGllbnQtdG8tYiBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZSB0by10cmFuc3BhcmVudCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1bMXB4XSBoLWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcmVnaXN0cmF0aW9uLWNhcmQudnVlOjEyOjdcIlxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYWRpZW50LXRvLXQgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUgdG8tdHJhbnNwYXJlbnQgYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB3LVsxcHhdIGgtZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9yZWdpc3RyYXRpb24tY2FyZC52dWU6MTU6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBIZWFkZXIgU2VjdGlvbiAtLT5cbiAgICA8QmFja1RvTG9naW4gY2xhc3M9XCJtYi02XCIgLz5cblxuICAgIDwhLS0gRm9ybSBTZWN0aW9uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGdhcC00IG1iLTZcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcmVnaXN0cmF0aW9uLWNhcmQudnVlOjIzOjVcIj5cbiAgICAgIDwhLS0gUHJvZmlsZSBVcGxvYWQgU2VjdGlvbiAtLT5cbiAgICAgIDxQcm9maWxlVXBsb2FkIHYtbW9kZWw9XCJwcm9maWxlSW1hZ2VcIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgZ2FwLTEgaXRlbXMtY2VudGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3JlZ2lzdHJhdGlvbi1jYXJkLnZ1ZToyNjo3XCI+XG4gICAgICAgIDxUZXJtc0NoZWNrYm94IHYtbW9kZWw6Y2hlY2tlZD1cImlzQ2hlY2tlZFwiIC8+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC14c1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9yZWdpc3RyYXRpb24tY2FyZC52dWU6Mjg6OVwiPkVudGVyIHlvdXIgZGV0YWlsczwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPElucHV0RmllbGRcbiAgICAgICAgaW5wdXRJZD1cIm5hbWVcIlxuICAgICAgICA6aWNvbj1cIlsnZmFzJywgJ3VzZXInXVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgIHYtbW9kZWw9XCJuYW1lXCJcbiAgICAgIC8+XG4gICAgICA8SW5wdXRGaWVsZFxuICAgICAgICBpbnB1dElkPVwic3VybmFtZVwiXG4gICAgICAgIDppY29uPVwiWydmYXMnLCAndXNlciddXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTdXJuYW1lXCJcbiAgICAgICAgdi1tb2RlbD1cInN1cm5hbWVcIlxuICAgICAgLz5cbiAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgIGlucHV0SWQ9XCJlbWFpbFwiXG4gICAgICAgIDppY29uPVwiWydmYXMnLCAnZW52ZWxvcGUnXVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICA6aXNWYWxpZD1cImlzRW1haWxWYWxpZFwiXG4gICAgICAgIGVycm9yTWVzc2FnZT1cIkludmFsaWQgZW1haWxcIlxuICAgICAgICB2LW1vZGVsPVwiZW1haWxcIlxuICAgICAgLz5cbiAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgIGlucHV0SWQ9XCJwYXNzd29yZFwiXG4gICAgICAgIDppY29uPVwiWydmYXMnLCAnbG9jayddXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIDpwb3N0Zml4SWNvbj1cInRydWVcIlxuICAgICAgICB2LW1vZGVsPVwicGFzc3dvcmRcIlxuICAgICAgLz5cbiAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgIGlucHV0SWQ9XCJwYXNzd29yZFwiXG4gICAgICAgIDppY29uPVwiWydmYXMnLCAnbG9jayddXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgOnBvc3RmaXhJY29uPVwidHJ1ZVwiXG4gICAgICAgIHYtbW9kZWw9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICA6aXNWYWxpZD1cIm1hdGNoaW5nUGFzc3dvcmRcIlxuICAgICAgICBlcnJvck1lc3NhZ2U9XCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIFN1Ym1pdCBCdXR0b24gLS0+XG4gICAgPEJ1dHRvblxuICAgICAgOmNsYXNzPVwiW1xuICAgICAgICAncmVsYXRpdmUgZmxleCBoLTEwIHctZnVsbCBtYi0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgYmctYmxhY2sgdGV4dC1jZW50ZXIgdGV4dC1zbSB0cmFuc2l0aW9uLWFsbCcsXG4gICAgICAgIGlzRm9ybVZhbGlkXG4gICAgICAgICAgPyAnYm9yZGVyLXdoaXRlIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBwb2ludGVyLWV2ZW50cy1hdXRvIG9wYWNpdHktMTAwJ1xuICAgICAgICAgIDogJ2JvcmRlci13aGl0ZS8wIGJnLWJsYWNrIHRleHQtd2hpdGUgcG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTcwJyxcbiAgICAgIF1cIlxuICAgICAgQGNsaWNrPVwiaGFuZGxlU3VibWl0XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JhZGllbnQgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBpbnNldC0wIG9wYWNpdHktNTBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcmVnaXN0cmF0aW9uLWNhcmQudnVlOjgwOjdcIj48L2Rpdj5cbiAgICAgIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3JlZ2lzdHJhdGlvbi1jYXJkLnZ1ZTo4MTo3XCI+RW50ZXI8L2Rpdj5cbiAgICA8L0J1dHRvbj5cbiAgICA8VGVybXNBbmRDb25kaXRpb25zIEBjbGljaz1cImhhbmRsZVRlcm1zQ2xpY2tcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQmFja1RvTG9naW4gZnJvbSBcIi4uL21vbGVjdWxlcy9iYWNrLXRvLWxvZ2luLnZ1ZVwiO1xuaW1wb3J0IFByb2ZpbGVVcGxvYWQgZnJvbSBcIi4uL21vbGVjdWxlcy9wcm9maWxlLXVwbG9hZC52dWVcIjtcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCIuLi9hdG9tcy9pbnB1dC1maWVsZC52dWVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2F0b21zL2J1dHRvbi52dWVcIjtcbmltcG9ydCBUZXJtc0NoZWNrYm94IGZyb20gXCIuLi9tb2xlY3VsZXMvdGVybXMtY2hlY2tib3gudnVlXCI7XG5pbXBvcnQgVGVybXNBbmRDb25kaXRpb25zIGZyb20gXCIuLi9tb2xlY3VsZXMvdGVybXMtYW5kLWNvbmRpdGlvbnMudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJSZWdpc3RyYXRpb25DYXJkXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBCYWNrVG9Mb2dpbixcbiAgICBQcm9maWxlVXBsb2FkLFxuICAgIElucHV0RmllbGQsXG4gICAgQnV0dG9uLFxuICAgIFRlcm1zQW5kQ29uZGl0aW9ucyxcbiAgICBUZXJtc0NoZWNrYm94LFxuICB9LFxuICBwcm9wczoge1xuICAgIGVtYWlsSW46IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogXCJ1c2VyQGV4YW1wbGUuY29tXCIsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHN1cm5hbWU6IFwiXCIsXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbEluLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICBjb25maXJtUGFzc3dvcmQ6IFwiXCIsXG4gICAgICBwcm9maWxlSW1hZ2U6IFwiXCIsXG4gICAgICBpc0NoZWNrZWQ6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNFbWFpbFZhbGlkKCkge1xuICAgICAgLy8gQmFzaWMgZW1haWwgdmFsaWRhdGlvbiByZWdleCBwYXR0ZXJuXG4gICAgICBjb25zdCBlbWFpbFBhdHRlcm4gPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLztcbiAgICAgIHJldHVybiBlbWFpbFBhdHRlcm4udGVzdCh0aGlzLmVtYWlsKTtcbiAgICB9LFxuICAgIG1hdGNoaW5nUGFzc3dvcmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXNzd29yZCA9PT0gdGhpcy5jb25maXJtUGFzc3dvcmQ7XG4gICAgfSxcbiAgICBpc0Zvcm1WYWxpZCgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaXNDaGVja2VkICYmXG4gICAgICAgIHRoaXMubmFtZSAmJlxuICAgICAgICB0aGlzLnN1cm5hbWUgJiZcbiAgICAgICAgdGhpcy5lbWFpbCAmJlxuICAgICAgICB0aGlzLnBhc3N3b3JkICYmXG4gICAgICAgIHRoaXMuY29uZmlybVBhc3N3b3JkICYmXG4gICAgICAgIHRoaXMuaXNFbWFpbFZhbGlkICYmXG4gICAgICAgIHRoaXMubWF0Y2hpbmdQYXNzd29yZFxuICAgICAgKTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlU3VibWl0KCkge1xuICAgICAgaWYgKHRoaXMuaXNGb3JtVmFsaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGb3JtIHN1Ym1pdHRlZCB3aXRoIGRhdGE6XCIsIHtcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgc3VybmFtZTogdGhpcy5zdXJuYW1lLFxuICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogdGhpcy5jb25maXJtUGFzc3dvcmQsXG4gICAgICAgICAgLy8gSW5jbHVkZSBwcm9maWxlIGltYWdlIGRhdGEgaWYgbmVlZGVkXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRlbWl0KFwic3VibWl0UmVnaXN0cmF0aW9uXCIsIHtcbiAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgc3VybmFtZTogdGhpcy5zdXJuYW1lLFxuICAgICAgICAgIHByb2ZpbGVJbWFnZTogdGhpcy5wcm9maWxlSW1hZ2UsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZvcm0gdmFsaWRhdGlvbiBmYWlsZWQuXCIpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTVkZWcsXG4gICAgI2ZmZjAgOC4zMyUsXG4gICAgI2ZmZjAgMjcuNDMlLFxuICAgICNmZmY2LFxuICAgICNmZmYwIDM3Ljg1JSxcbiAgICAjZmZmMCA1My45MSUsXG4gICAgI2ZmZiA2Mi4xNSUsXG4gICAgI2ZmZjAgNjguMjMlLFxuICAgICNmZmYgOTEuNjclXG4gICk7XG59XG48L3N0eWxlPlxuIl0sImZpbGUiOiIvaG9tZS9iZW1hZHUvRGVza3RvcC9hbGFkaWEvY29tcG9uZW50cy9vcmdhbmlzbXMvcmVnaXN0cmF0aW9uLWNhcmQudnVlIn0=