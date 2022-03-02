import { FC } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Card, Col, Input, Row, Select } from "antd";
import Meta from "antd/lib/card/Meta";
import AppLayout from "../components/layouts/AppLayout";
import useNFTData from "../hooks/useNFTData";
import "./Marketplace.css";
import { Link, useParams } from "react-router-dom";
import NFTItem from "./NFTItem";

const { Option } = Select;

const Marketplace: FC = () => {
  const { getAllData } = useNFTData();
  const data = getAllData();
  const { id } = useParams();

  return (
    <AppLayout>
      <div className="content">
        <h1 className="page-title ">Welcome to the MarketPlace</h1>
        <div className="filters">
          <Row>
            <Col lg={15}>
              <Input
                size="large"
                placeholder="Search for the traits, tags, item #s and more"
                prefix={<SearchOutlined />}
              />
            </Col>
            <Col lg={3}></Col>
            <Col lg={6}>
              <Select
                size="large"
                defaultValue="lucy"
                style={{ width: "100%" }}
                onChange={() => {}}
              >
                <Option value="jack">Jack</Option>
              </Select>
            </Col>
          </Row>
        </div>
        <div className="nft-items">
          <Row>
            {data.map(({ url, name, id }, index) => (
              <Col key={index} xs={24} sm={24} md={12} lg={8} xl={6}>
                <Link to={`/marketplace/${id}`}>
                  <Card
                    hoverable
                    style={{ margin: "20px 20px 20px 20px" }}
                    cover={
                      <img className="market-img" alt="example" src={url} />
                    }
                  >
                    <Meta title={name} description="www.nft-world.com" />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      {id && <NFTItem id={id} />}
    </AppLayout>
  );
};

export default Marketplace;
