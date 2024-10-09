import Button from "./Button.vue";

export default {
  title: "Example/Button", // Adjust the title as needed
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">{{ args.label }}</Button>',
});

// Primary Button Story
export const Primary = Template.bind({});
Primary.args = {
  buttonType: "primary", // Set buttonType to primary
  label: "Primary Button",
};

// Secondary Button Story
export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: "secondary", // Set buttonType to secondary
  label: "Secondary Button",
};
