import { TagOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { FC } from "react";
import "./NFTDetail.css";

interface NFTDetailInterface {
  url: string;
  id: number | string;
  name: string;
}

const NFTDetail: FC<NFTDetailInterface> = ({ url, name, id }) => {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <img style={{ width: "100%" }} alt="example" src={url} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="nft-detail-content">
            <h1>
              {name}#{id}
            </h1>
            <p>Current owner: Crypto Bat</p>
            <div className="price-tag">
              <Row>
                <Col>
                  <span className="crypto-price">
                    <TagOutlined className="crypto-price-tag" /> 0.48 SOL
                  </span>
                </Col>
                <Col>
                  <span className="usd-price">123.00 USD</span>
                </Col>
              </Row>
            </div>
            <div className="item-note">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NFTDetail;
