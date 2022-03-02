import { Button, Col, Modal, Row } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import NFTDetail from "../components/NFTDetail";
import useNFTData from "../hooks/useNFTData";

interface NFTItemInterface {
  id: string;
}

const NFTItem: FC<NFTItemInterface> = ({ id }) => {
  const navigate = useNavigate();
  const { getData } = useNFTData();

  const data = getData(id);

  return (
    <Modal
      width={"60%"}
      visible={true}
      onCancel={() => navigate("/marketplace")}
      footer={[
        <Row>
          <Col xs={24} sm={24} md={12} lg={11} xl={11}>
            <Button shape="round" block size="large" key="back">
              Make Offer
            </Button>
          </Col>
          <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
          <Col xs={24} sm={24} md={12} lg={11} xl={11}>
            <Button shape="round" block size="large" key="link" type="primary">
              Buy Now
            </Button>
          </Col>
        </Row>,
      ]}
    >
      {data && <NFTDetail {...data} />}
    </Modal>
  );
};

export default NFTItem;
