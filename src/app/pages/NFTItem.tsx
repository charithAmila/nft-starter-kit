import { Button, Col, Modal, Row } from "antd";
import { FC } from "react";
import { useMoralis } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NFTDetail from "../components/NFTDetail";
import useNFTData from "../hooks/useNFTData";
import { RootState } from "../store";
import { setNFTItems } from "../store/redux/appSlice";

interface NFTItemInterface {
  id: string;
}

const NFTItem: FC<NFTItemInterface> = ({ id }) => {
  const navigate = useNavigate();

  const { getData } = useNFTData();
  const { user } = useMoralis();
  const dispatch = useDispatch();
  const { nftItems } = useSelector((state: RootState) => state.app);
  const data = getData(id);

  const onDelete = (itemId: string | number) => {
    const data = nftItems.filter(({ id }) => Number(id) !== Number(itemId));
    dispatch(setNFTItems([...data]));
    navigate("/marketplace");
  };

  return (
    <Modal
      width={"60%"}
      visible={true}
      onCancel={() => navigate("/marketplace")}
      footer={[
        <>
          {data?.userId !== user?.id ? (
            <Row>
              <Col xs={24} sm={24} md={12} lg={11} xl={11}>
                <Button shape="round" block size="large" key="back">
                  Make Offer
                </Button>
              </Col>
              <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
              <Col xs={24} sm={24} md={12} lg={11} xl={11}>
                <Button
                  shape="round"
                  block
                  size="large"
                  key="link"
                  type="primary"
                >
                  Buy Now
                </Button>
              </Col>
            </Row>
          ) : (
            <>
              <Button
                shape="round"
                block
                size="large"
                key="link"
                onClick={() => onDelete(data?.id ?? "")}
              >
                Delete
              </Button>
            </>
          )}
        </>,
      ]}
    >
      {data && <NFTDetail {...data} />}
    </Modal>
  );
};

export default NFTItem;
