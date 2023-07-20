import { Meta, StoryObj } from "@storybook/react";
import { Button } from "..";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
    backgroundColor: "",
    onClick: () => {
      alert("hello from button!");
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    variant: "secondary",
    children: "Button",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    variant: "secondary",
    children: "Button",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    variant: "secondary",
    children: "Button",
    size: "large",
  },
};
