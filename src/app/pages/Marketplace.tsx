import { FC, useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Row, Select } from "antd";
import Meta from "antd/lib/card/Meta";
import AppLayout from "../components/layouts/AppLayout";
import "./Marketplace.css";
import { Link, useParams } from "react-router-dom";
import NFTItem from "./NFTItem";
import { NFTItemInterface } from "../store/redux/appSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { searchNFTByName } from "../helper/function";

const Marketplace: FC = () => {
  const [NFTItems, setNFTItems] = useState<NFTItemInterface[]>([]);
  const [index, setIndex] = useState(1);
  const { nftItems: NFTs } = useSelector((state: RootState) => state.app);
  const [searchText, setSearchText] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const data = searchNFTByName(NFTs, searchText).slice(0, 8 * index);
    setNFTItems(data);
  }, [index, NFTs, searchText]);

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
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Col>
            <Col lg={3}></Col>
            <Col lg={6}></Col>
          </Row>
        </div>
        <div className="nft-items">
          <Row>
            {NFTItems.map(({ url, name, id }, key) => (
              <Col key={key} xs={24} sm={24} md={12} lg={8} xl={6}>
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
          <Row>
            <Col offset={6} xs={12} sm={12} md={12} lg={12} xl={12}>
              {NFTs.length > NFTItems.length && NFTItems.length >= 8 && (
                <Button onClick={() => setIndex(index + 1)} block={true}>
                  Load more
                </Button>
              )}
            </Col>
          </Row>
        </div>
      </div>
      {id && <NFTItem id={id} />}
    </AppLayout>
  );
};

export default Marketplace;
