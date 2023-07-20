import { useState } from "react";
import Modal from "./Modal";
import { Meta, Story } from "@storybook/react";
import { Button } from "../";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <div>
      <Button onClick={toggleModal} variant="secondary">
        Abrir Modal
      </Button>
      <Modal open={isOpen} onClose={toggleModal}>
        <p>Modal Content</p>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
