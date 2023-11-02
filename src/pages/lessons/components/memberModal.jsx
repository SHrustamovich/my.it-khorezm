import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const MemberModal = ({ isModalOpen, setIsModalOpen }) => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
      closable={false}
        className="member-modal"
        title={[
          <>
            <p className="member-modal__title">A`zo bo`lish</p>
          </>,
        ]}
        open={isModalOpen}
        footer={[
          <>
            <Button onClick={handleCancel} className="member-modal__cancel">
              Cancel
            </Button>
            <Button type="primary" className="member-modal__submit">
              Submit
            </Button>
          </>,
        ]}
      >
        <span className="member-modal__item"></span>
        <span className="member-modal__item-second"></span>
        <Form className="member-modal__form">
          <label>
            <p className="member-modal__label">Name</p>
            <Input
              size="large"
              placeholder="write here..."
              value={firstValue}
              onChange={() => setFirstValue(event.target.value)}
            ></Input>
          </label>

          <label>
            <p className="member-modal__label">Surname</p>
            <Input
              size="large"
              placeholder="write here..."
              value={secondValue}
              onChange={() => setSecondValue(event.target.value)}
            ></Input>
          </label>

          <label>
            <p className="member-modal__label">Age</p>
            <Input
              size="large"
              placeholder="write here..."
              value={thirdValue}
              onChange={() => setThirdValue(event.target.value)}
            ></Input>
          </label>
        </Form>
      </Modal>
    </>
  );
};

export default MemberModal;
