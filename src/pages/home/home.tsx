import { Search, Tabbar } from "react-vant";
import { BarChartO, Contact } from "@react-vant/icons";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer.tsx";
import { Header } from "../../components/header.tsx";
import { HomeSwiper } from "./home-swiper.tsx";
import { HomeNav } from "./home-nav.tsx";
import { RecommendCard } from "../../components/recommend-card.tsx";

export const HomePage = () => {
	const navigate = useNavigate();

	return (
		<>
			<Header />
			<Search
				readOnly={true}
				shape="round"
				background={"transparent"}
				placeholder="请输入搜索关键词"
				onClickInput={() => navigate("/search")}
			/>
			<HomeSwiper />
			<HomeNav />
			<RecommendCard
				type={"SINGLE_LIST"}
				title={"畅销精选"}
			/>
			<RecommendCard
				type={"RANK_LIST"}
				title={"排行榜"}
			/>
			<Footer />
			<Tabbar
				className="horizontal-tabbar"
				placeholder={true}
			>
				<Tabbar.Item
					icon={<BarChartO />}
					onClick={() => navigate("/shelf")}
				>
					<span className="tabbar-item-text">书架</span>
				</Tabbar.Item>
				<Tabbar.Item
					icon={<Contact />}
					onClick={() => navigate("/mine")}
				>
					<span className="tabbar-item-text">账户</span>
				</Tabbar.Item>
			</Tabbar>
		</>
	);
};
