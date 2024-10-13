import Button from "../../components/atoms/AtomButton.vue";

const meta = {
  title: "Atoms/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "destructive", "outline", "ghost"],
      description: "Button variant that controls styling.",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Button size variant.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A button component with dynamic styles based on the 'variant' and 'size' props, and click event handling.",
      },
    },
  },
};

export default meta;

/** Primary button */
export const Default = {
  args: {
    variant: "default",
    size: "md",
  },
  parameters: {
    docs: {
      storyDescription:
        "This is the primary button variant, which uses a black background with white text.",
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button :variant="args.variant" :size="args.size">Primary Button</Button>`,
  }),
};

/** Default button */
// export const Default = {
//   args: {
//     variant: "default",
//     size: "md",
//   },
//   parameters: {
//     docs: {
//       storyDescription:
//         "This is the default button variant with white background and black text.",
//     },
//   },
//   render: (args) => ({
//     components: { Button },
//     setup() {
//       return { args };
//     },
//     template: `<Button :variant="args.variant" :size="args.size">Default Button</Button>`,
//   }),
// };

/** Destructive button */
export const Destructive = {
  args: {
    variant: "destructive",
    size: "md",
  },
  parameters: {
    docs: {
      storyDescription:
        "This is the destructive button variant, featuring a red background with white text.",
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button :variant="args.variant" :size="args.size">Destructive Button</Button>`,
  }),
};

/** Outline button */
export const Outline = {
  args: {
    variant: "outline",
    size: "md",
  },
  parameters: {
    docs: {
      storyDescription:
        "This is the outline button variant, which has a transparent background with a border and text color.",
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button :variant="args.variant" :size="args.size">Outline Button</Button>`,
  }),
};

/** Ghost button */
export const Ghost = {
  args: {
    variant: "ghost",
    size: "md",
  },
  parameters: {
    docs: {
      storyDescription:
        "This is the ghost button variant, featuring a transparent background and a hover effect that reveals color.",
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button :variant="args.variant" :size="args.size">Ghost Button</Button>`,
  }),
};

/** Small button */
export const Small = {
  args: {
    variant: "default",
    size: "sm",
  },
  parameters: {
    docs: {
      storyDescription: "This is a small default button variant.",
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button :variant="args.variant" :size="args.size">Small Primary Button</Button>`,
  }),
};

/** Large button */
export const Large = {
  args: {
    variant: "primary",
    size: "lg",
  },
  parameters: {
    docs: {
      storyDescription: "This is a large primary button variant.",
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button :variant="args.variant" :size="args.size">Large Primary Button</Button>`,
  }),
};
