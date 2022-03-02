import { Button, Modal } from "antd";
import { FC, useState } from "react";
import Form from "./Form";
import "./Form.css";

const NFTForm: FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        shape="round"
        type="primary"
        className="apply-btn"
      >
        Apply Here
      </Button>
      <Modal
        width={"60%"}
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <Form close={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

export default NFTForm;
