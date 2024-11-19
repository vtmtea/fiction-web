import { Divider, Space, Toast, Typography } from "react-vant";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();

    const fn = () => {
        Toast.info({message: "开发中..."})
    }

    return (
        <Space direction="vertical" justify="center" align="center" block={true}>
            <div><strong>登录后获得更多特色功能· </strong><Typography.Link
                onClick={() => navigate("/login")}>立即登录</Typography.Link><Divider/></div>
            <Space gap={50}>
                <Typography.Link type={"secondary"}
                                 onClick={fn}>客户端</Typography.Link>
                <Typography.Link type={"secondary"}>触屏版</Typography.Link>
                <Typography.Link type={"secondary"} onClick={fn}>客服帮助</Typography.Link>
                <Typography.Link type={"secondary"}>搜索</Typography.Link>
            </Space>
            <Typography.Text type={"secondary"}> copyright © 2002-2024</Typography.Text>
        </Space>
    )
}