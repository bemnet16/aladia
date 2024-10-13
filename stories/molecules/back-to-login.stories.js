import BackToLogin from "../../components/molecules/back-to-login.vue";

const meta = {
  title: "molecules/BackToLogin",
  tags: ["autodocs"],
  component: BackToLogin,
  parameters: {
    docs: {
      description: {
        component:
          "A component that displays a 'Back to Log in' link with an icon, changing appearance on hover.",
      },
    },
  },
};

export default meta;

export const Default = {
  render: () => ({
    components: { BackToLogin },
    template: `<div class="p-4 bg-black text-white"><BackToLogin /></div>`,
  }),
  parameters: {
    docs: {
      storyDescription: "Default appearance of the BackToLogin component.",
    },
  },
};
