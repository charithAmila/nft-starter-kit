import { PictureFilled, PictureOutlined } from "@ant-design/icons";
import { Col, Input, Row, Form as ANTForm, Button, message } from "antd";
import { FC, useState } from "react";
import { useMoralis } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import useNFTData from "../hooks/useNFTData";
import { RootState } from "../store";

import { setNFTItems } from "../store/redux/appSlice";

interface FormInterface {
  close: () => void;
}

const Form: FC<FormInterface> = ({ close }) => {
  const [form] = ANTForm.useForm();
  const [file, setFile] = useState<any>(null);
  const { getLastItem } = useNFTData();
  const dispatch = useDispatch();
  const { nftItems } = useSelector((state: RootState) => state.app);
  const { user } = useMoralis();

  const id = Number(getLastItem().id) + 1;

  const onFinish = (values: any) => {
    dispatch(
      setNFTItems([
        {
          id,
          name: values.name,
          url: file,
          price: values.price,
          userId: user?.id,
        },
        ...nftItems,
      ])
    );

    message.success({
      content: "Success fully added",
    });
    setTimeout(() => {
      close();
      form.resetFields();
      setFile(null);
    }, 1000);
  };

  return (
    <ANTForm form={form} layout="vertical" onFinish={onFinish}>
      <Row>
        <Col xs={24} sm={24} md={12} lg={11} xl={11}>
          {!file ? (
            <div className="form-img-icon-wrapper">
              <PictureFilled />
            </div>
          ) : (
            <div className="form-img-wrapper">
              <img style={{ width: "100%" }} src={file} alt="item " />
            </div>
          )}
        </Col>
        <Col xs={24} sm={24} md={12} lg={11} xl={11}>
          <ANTForm.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please input your item name!" },
            ]}
            tooltip="This is a required field"
          >
            <Input placeholder="Enter Name" />
          </ANTForm.Item>
          <ANTForm.Item
            required
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please input your item price!" },
            ]}
          >
            <Input placeholder="Enter Price" />
          </ANTForm.Item>
          <ANTForm.Item
            required
            name="file"
            rules={[
              { required: true, message: "Please input your item image!" },
            ]}
          >
            <Input
              onChange={(e) => {
                setFile(
                  e.target?.files?.length
                    ? URL.createObjectURL(e.target?.files[0])
                    : null
                );
              }}
              type="file"
              accept=".jpg, .png, .jpeg, .webp, .mp3, .mp4, .PNG"
            />
          </ANTForm.Item>

          <ANTForm.Item>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </ANTForm.Item>
        </Col>
      </Row>
    </ANTForm>
  );
};

export default Form;
