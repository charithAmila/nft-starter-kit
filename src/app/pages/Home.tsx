import { FC } from "react";
import { Button, Card, Col, Row } from "antd";
import AppLayout from "../components/layouts/AppLayout";
import { Link } from "react-router-dom";
import useNFTData from "../hooks/useNFTData";
import "./Home.css";
import NFTForm from "../components/NFTForm";

const { Meta } = Card;

const Home: FC = () => {
  const { getFeaturedData } = useNFTData();

  const featuredItem = getFeaturedData();
  return (
    <AppLayout>
      <div className="home content">
        <div className="collection-submit">
          <h1 className="page-title ">Submit Collection</h1>
          <p>
            Do you have Solona based generative NFT Collection with more than
            100 <br /> pieces? Submit your collection bellow to be added to our
            Marketplace and shown <br /> to thousand of users{" "}
            <a href="/">Learn more</a>
          </p>
          <NFTForm />
        </div>
        <div className="card-list-wrapper">
          <div className="title-wrapper">
            <h1>Recently Listed Collection</h1>{" "}
            <Link to="/marketplace">View more</Link>
          </div>

          <div>
            <Row>
              {featuredItem.map(({ url, id, name }) => (
                <Col xs={24} sm={24} md={12} lg={8} xl={6} key={id}>
                  <Link to={`/marketplace/${id}`}>
                    <Card
                      hoverable
                      style={{ margin: "0px 20px 20px 20px" }}
                      cover={<img alt="example" src={url} />}
                    >
                      <Meta title={name} description="www.nft-world.com" />
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
