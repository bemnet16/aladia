import TermsAndConditions from "../../components/molecules/terms-and-conditions.vue";

const meta = {
  title: "molecules/TermsAndConditions",
  tags: ["autodocs"],
  component: TermsAndConditions,
  parameters: {
    docs: {
      description: {
        component:
          "A component that displays a 'Terms & Conditions' link, emitting a click event when interacted with.",
      },
    },
  },
};

export default meta;
export const Default = {
  render: () => ({
    components: { TermsAndConditions },
    template: `
      <div class="p-4 bg-black">
        <TermsAndConditions />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default appearance of the TermsAndConditions component.",
    },
  },
};

export const WithClickHandler = {
  render: () => ({
    components: { TermsAndConditions },
    setup() {
      const handleClick = () => {
        alert("Terms & Conditions clicked!");
      };
      return { handleClick };
    },
    template: `
      <div class="p-4 bg-black">
        <TermsAndConditions @click="handleClick" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "TermsAndConditions component with click event handling.",
    },
    actions: { handles: ["click"] },
  },
};
