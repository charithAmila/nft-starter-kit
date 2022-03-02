import { Avatar, Button, Popover } from "antd";
import { useMoralis } from "react-moralis";

const Connect = () => {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  if (isAuthenticated) {
    return (
      <Popover
        placement="bottomRight"
        title={""}
        content={
          <Button onClick={() => logout()} type="link" block>
            Logout
          </Button>
        }
        trigger="click"
      >
        <Avatar src={"https://joeschmoe.io/api/v1/random"} size="large" />
      </Popover>
    );
  }

  return (
    <Button onClick={() => authenticate()} type="primary">
      Connect Wallet
    </Button>
  );
};

export default Connect;
