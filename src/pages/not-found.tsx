import { Button, Empty } from "react-vant";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
	const navigate = useNavigate();

	return <Empty image="network" description={<><h1>Oops!</h1><p>未知荒漠</p></>}>
		<Button style={{ width: 160 }} round type="primary" onClick={() => navigate("/")}>
			返回主页
		</Button>
	</Empty>;
};