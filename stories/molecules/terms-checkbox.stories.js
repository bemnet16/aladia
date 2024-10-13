import TermsCheckbox from "../../components/molecules/terms-checkbox.vue";
import { ref } from "vue";

const meta = {
  title: "molecules/TermsCheckbox",
  tags: ["autodocs"],
  component: TermsCheckbox,
  argTypes: {
    modelValue: {
      control: "boolean",
      description: "The checked state of the checkbox",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A checkbox component that users must check to accept Terms & Conditions and Privacy Policy.",
      },
    },
  },
};

export default meta;
export const Default = {
  args: {
    modelValue: false,
  },
  render: (args) => ({
    components: { TermsCheckbox },
    setup() {
      const isChecked = ref(args.modelValue);

      return { args, isChecked };
    },
    template: `
      <div class="flex justify-center py-8 px-16 bg-black text-white">
        <TermsCheckbox
          v-model="isChecked"
        />
        <p>Checkbox is {{ isChecked ? 'checked' : 'unchecked' }}.</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Default TermsCheckbox component with unchecked state.",
    },
  },
};

export const CheckedState = {
  args: {
    modelValue: true,
  },
  render: (args) => ({
    components: { TermsCheckbox },
    setup() {
      const isChecked = ref(args.modelValue);

      return { args, isChecked };
    },
    template: `
      <div class="flex justify-center py-8 px-16 bg-black text-white">
        <TermsCheckbox
          v-model="isChecked"
        />
        <p>Checkbox is {{ isChecked ? 'checked' : 'unchecked' }}.</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "TermsCheckbox component with initial checked state.",
    },
  },
};
