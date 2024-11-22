import { Card, Cell, Flex, Image, Space, Tabs, Toast, Typography } from "react-vant";
import { Arrow } from "@react-vant/icons";
import classNames from "classnames";

interface IRecommendCardProps {
	title: string;
	type: "SINGLE_LIST" | "RANK_LIST";
}

export const RecommendCard = (props: IRecommendCardProps) => {
	const { title, type } = props;
	const books = [
		{
			id: 1,
			title: "我实在太想进步了",
			author: "听泉流响",
			category: "仙侠",
			coverImageUrl: "https://bookcover.yuewen.com/qdbimg/349573/1035979261/180.webp",
			description: `小人物季东来被时代拖着，疲惫的跑了四十几年，无意间重新回到1999年的小城市，父母还健在，面对高三冲刺，下岗潮余威，季东来终于不再迷茫，重新来过，没有了改变世界的豪言壮语，只剩下改善家庭生活的单一，迈开追求富足的脚步。河北距离首都很近，先来套房其实也不错……书友群：192291828，欢迎喜欢本书的读者前往新书《重生从做手机零部件开始》已经发布，大佬们移步"`,
			sortOrder: 1,
		},
		{
			id: 2,
			title: "大国院士",
			author: "少一尾的九尾猫",
			category: "科幻",
			coverImageUrl: "https://bookcover.yuewen.com/qdbimg/349573/1033217816/180.webp",
			description: `一场航空灾难，将一位物理界和材料界的天才带回了二十年前，从数学开始，以物理为终，以材料为骨干，以能源为血液，泱泱大国，启航于此.......院士重生，科技之始，星辰永在，人族永昌。`,
			sortOrder: 2,
		},
		{
			id: 3,
			title: "无敌从我看见BOSS血条开始",
			author: "辰东",
			category: "游戏",
			coverImageUrl: "https://bookcover.yuewen.com/qdbimg/349573/1036299450/180.webp",
			description: `好消息：有人捡到会冒出文字的羊皮纸了。坏消息：那个人不是我。好消息：楼下老大爷能看到别人头顶的死亡倒计时。坏消息：老大爷快死了。好消息：房东女儿带着未来记忆重生了坏消息：我还被懵在鼓里。现`,
			sortOrder: 3,
		},
		{
			id: 4,
			title: "无敌从我看见BOSS血条开始",
			author: "辰东",
			category: "游戏",
			coverImageUrl: "https://bookcover.yuewen.com/qdbimg/349573/1036299450/180.webp",
			description: `好消息：有人捡到会冒出文字的羊皮纸了。坏消息：那个人不是我。好消息：楼下老大爷能看到别人头顶的死亡倒计时。坏消息：老大爷快死了。好消息：房东女儿带着未来记忆重生了坏消息：我还被懵在鼓里。现`,
			sortOrder: 4,
		},
	];

	return (
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
					{title}
				</Typography.Text>
			</Card.Header>
			<Card.Body>
				{type === "SINGLE_LIST" ? (
					books.map((book) => (
						<Cell
							key={book.id}
							title={
								<Typography.Text
									strong={true}
									size={"lg"}
								>
									{book.title}
								</Typography.Text>
							}
							label={
								<Space direction="vertical">
									<Typography.Text
										ellipsis={2}
										type={"secondary"}
									>
										{book.description}
									</Typography.Text>
									<Typography.Text type={"secondary"}>{book.category}</Typography.Text>
								</Space>
							}
							icon={
								<Image
									width={".66rem"}
									radius={".04rem"}
									src={book.coverImageUrl}
								/>
							}
							onClick={() => Toast.info("开发中...")}
						/>
					))
				) : (
					<Tabs
						type="capsule"
						color={"#ffe6e7"}
						titleActiveColor={"#e5353e"}
						titleInactiveColor={"grey"}
					>
						<Tabs.TabPane title={"畅销榜"}>
							<Flex
								align="center"
								gutter={16}
								wrap={"wrap"}
							>
								{books.map((book) => (
									<Flex.Item
										key={book.id}
										span={12}
									>
										<Cell
											title={""}
											label={
												<Flex>
													<Flex.Item>
														<div
															className={classNames("rank-number", {
																top: book.sortOrder <= 3,
															})}
														>
															{book.sortOrder}
														</div>
													</Flex.Item>
													<Flex.Item>
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
																{book.title}
															</Typography.Text>
															<Typography.Text
																type={"secondary"}
																className={"rank-author"}
															>
																{book.author}
															</Typography.Text>
														</Flex>
													</Flex.Item>
												</Flex>
											}
											icon={
												<Image
													width={".48rem"}
													radius={".04rem"}
													src={book.coverImageUrl}
												/>
											}
											onClick={() => Toast.info("开发中...")}
										/>
									</Flex.Item>
								))}
							</Flex>
						</Tabs.TabPane>
						<Tabs.TabPane title={"风云榜"}></Tabs.TabPane>
						<Tabs.TabPane title={"签约榜"}></Tabs.TabPane>
						<Tabs.TabPane title={"推荐榜"}></Tabs.TabPane>
					</Tabs>
				)}
			</Card.Body>
		</Card>
	);
};
