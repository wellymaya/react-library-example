import { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: "Your text here C:",
    variant: "h1",
    color: "",
  },
};

export const H2: Story = {
  args: {
    children: "Your text here C:",
    variant: "h2",
  },
};

export const H3: Story = {
  args: {
    children: "Your text here C:",
    variant: "h3",
  },
};

export const H4: Story = {
  args: {
    children: "Your text here C:",
    variant: "h4",
  },
};

export const P: Story = {
  args: {
    children: "Your text here C:",
    variant: "p",
  },
};
