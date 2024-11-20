import { Card, Cell, Flex, Grid, Image, Search, Space, Swiper, Tabbar, Tabs, Typography } from "react-vant";
import { Arrow, BarChartO, Contact } from "@react-vant/icons";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/footer.tsx";
import categoryIcon from "../assets/category.png";
import rankIcon from "../assets/rank.png";
import freeIcon from "../assets/free.png";
import finishIcon from "../assets/finish.png";
import godIcon from "../assets/god.png";
import bookListIcon from "../assets/booklist.png";
import { Header } from "../components/header.tsx";

export const HomePage = () => {
	const navigate = useNavigate();

	const images = [
		"https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/831de752ecc9317b85ba60ac64582f03.jpg",
		"https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/b0d525b8019e797f729b308f81304402.jpg",
		"https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/44b76acd6d89627d74e1fb7318880776.jpg",
	];

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
			<div className="swiper-container">
				<Swiper autoplay={3000}>
					{images.map((image) => (
						<Swiper.Item key={image}>
							<Image
								lazyload
								src={image}
							/>
						</Swiper.Item>
					))}
				</Swiper>
			</div>
			<div className="home-nav">
				<Grid
					columnNum={6}
					border={false}
				>
					<Grid.Item
						icon={<Image src={categoryIcon} />}
						text="分类"
					/>
					<Grid.Item
						icon={<Image src={rankIcon} />}
						text="排行榜"
					/>
					<Grid.Item
						icon={<Image src={freeIcon} />}
						text="免费"
					/>
					<Grid.Item
						icon={<Image src={finishIcon} />}
						text="完本"
					/>
					<Grid.Item
						icon={<Image src={godIcon} />}
						text="大神"
					/>
					<Grid.Item
						icon={<Image src={bookListIcon} />}
						text="书单"
					/>
				</Grid>
			</div>
			<Card
				round
				style={{ margin: ".12rem" }}
			>
				<Card.Header
					extra={
						<Flex align={"center"}>
							<Typography.Text type={"secondary"}>更多</Typography.Text>
							<Arrow color={"#969799"} />
						</Flex>
					}
				>
					<Typography.Text
						strong={true}
						size={"xl"}
					>
						畅销精选
					</Typography.Text>
				</Card.Header>
				<Card.Body>
					<Cell
						title={
							<Typography.Text
								strong={true}
								size={"lg"}
							>
								我实在太想进步了
							</Typography.Text>
						}
						label={
							<Space direction="vertical">
								<Typography.Text
									ellipsis={2}
									type={"secondary"}
								>
									小人物季东来被时代拖着，疲惫的跑了四十几年，无意间重新回到1999年的小城市，父母还健在，面对高三冲刺，下岗潮余威，季东来终于不再迷茫，重新来过，没有了改变世界的豪言壮语，只剩下改善家庭生活的单一，迈开追求富足的脚步。河北距离首都很近，先来套房其实也不错……书友群：192291828，欢迎喜欢本书的读者前往新书《重生从做手机零部件开始》已经发布，大佬们移步"
								</Typography.Text>
								<Typography.Text type={"secondary"}>仙侠</Typography.Text>
							</Space>
						}
						icon={
							<Image
								width={".66rem"}
								radius={".04rem"}
								src="https://bookcover.yuewen.com/qdbimg/349573/1035979261/180.webp"
							/>
						}
					/>
				</Card.Body>
			</Card>
			<Card
				round
				style={{ margin: ".12rem" }}
			>
				<Card.Header
					extra={
						<Flex align={"center"}>
							<Typography.Text type={"secondary"}>更多</Typography.Text>
							<Arrow color={"#969799"} />
						</Flex>
					}
				>
					<Typography.Text
						strong={true}
						size={"xl"}
					>
						排行榜
					</Typography.Text>
				</Card.Header>
				<Card.Body>
					<Tabs
						type="capsule"
						color={"#ffe6e7"}
						titleActiveColor={"#e5353e"}
						titleInactiveColor={"grey"}
					>
						<Tabs.TabPane title={"畅销榜"}>
							<Flex
								justify="center"
								align="center"
								gutter={16}
							>
								<Flex.Item span={12}>
									<Cell
										title={""}
										label={
											<Flex>
												<div className="rank-number top">1</div>
												<Flex
													direction={"column"}
													justify={"between"}
													align={"baseline"}
												>
													<Typography.Text
														strong={true}
														size={"lg"}
														ellipsis={2}
													>
														我实在太想进步了
													</Typography.Text>
													<Typography.Text
														type={"secondary"}
														className={"rank-author"}
													>
														辰东
													</Typography.Text>
												</Flex>
											</Flex>
										}
										icon={
											<Image
												width={".48rem"}
												radius={".04rem"}
												src="https://bookcover.yuewen.com/qdbimg/349573/1035979261/180.webp"
											/>
										}
									/>
								</Flex.Item>
								<Flex.Item span={12}>
									<Cell
										title={""}
										label={
											<Flex>
												<div className="rank-number top">2</div>
												<Flex
													direction={"column"}
													justify={"between"}
													align={"baseline"}
												>
													<Typography.Text
														strong={true}
														size={"lg"}
														ellipsis={2}
													>
														遮天
													</Typography.Text>
													<Typography.Text
														type={"secondary"}
														className={"rank-author"}
													>
														辰东
													</Typography.Text>
												</Flex>
											</Flex>
										}
										icon={
											<Image
												width={".48rem"}
												radius={".04rem"}
												src="https://bookcover.yuewen.com/qdbimg/349573/1035979261/180.webp"
											/>
										}
									/>
								</Flex.Item>
							</Flex>
						</Tabs.TabPane>
						<Tabs.TabPane title={"风云榜"}></Tabs.TabPane>
						<Tabs.TabPane title={"签约榜"}></Tabs.TabPane>
						<Tabs.TabPane title={"推荐榜"}></Tabs.TabPane>
					</Tabs>
				</Card.Body>
			</Card>
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
