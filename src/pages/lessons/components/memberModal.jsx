import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const MemberModal = ({ setLock, isModalOpen, setIsModalOpen }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const memberLock = () => {
    setIsButtonPressed(true);
    if (isModalOpen == true && input1 && input2 && input3) {
      setLock(false);
      setIsModalOpen(false);
    }
  };

  addEventListener("keydown", (el) => {
    if (el.keyCode == 13) {
      memberLock(el);
    }
  });

  const handleInputChange = (e, setInput) => {
    const { value } = e.target;
    setInput(value);
  };

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
            <Button
              type="primary"
              onClick={memberLock}
              className="member-modal__submit"
            >
              Submit
            </Button>
          </>,
        ]}
      >
        <span className="member-modal__item"></span>
        <span className="member-modal__item-second"></span>
        <Form className="member-modal__form">
          <label className="member-modal__label">
            <p className="member-modal__label-title">Name</p>
            {!input1 && isButtonPressed == true ? (
              <p className="member-modal__error">Please write something</p>
            ) : (
              ""
            )}
            <Input
              size="large"
              style={{
                border: `${
                  isButtonPressed
                    ? input1 !== ""
                      ? "2px solid green"
                      : "2px solid red"
                    : "2px solid #166199"
                }`,
              }}
              placeholder="write here..."
              value={input1}
              onChange={(e) => handleInputChange(e, setInput1)}
            ></Input>
          </label>

          <label className="member-modal__label">
            <p className="member-modal__label-title">Surname</p>
            {!input2 && isButtonPressed == true ? (
              <p className="member-modal__error">Please write something</p>
            ) : (
              ""
            )}
            <Input
              size="large"
              style={{
                border: `${
                  isButtonPressed
                    ? input2 !== ""
                      ? "2px solid green"
                      : "2px solid red"
                    : "2px solid #166199"
                }`,
              }}
              placeholder="write here..."
              value={input2}
              onChange={(e) => handleInputChange(e, setInput2)}
            ></Input>
          </label>

          <label className="member-modal__label">
            <p className="member-modal__label-title">Age</p>
            {!input3 && isButtonPressed == true ? (
              <p className="member-modal__error">Please write something</p>
            ) : (
              ""
            )}
            <Input
              size="large"
              style={{
                border: `${
                  isButtonPressed
                    ? input3 !== ""
                      ? "2px solid green"
                      : "2px solid red"
                    : "2px solid #166199"
                }`,
              }}
              placeholder="write here..."
              value={input3}
              onChange={(e) => handleInputChange(e, setInput3)}
            ></Input>
          </label>
        </Form>
      </Modal>
    </>
  );
};

export default MemberModal;
