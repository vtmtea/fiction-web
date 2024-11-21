import { Grid, Image } from "react-vant";
import categoryIcon from "../../assets/category.png";
import rankIcon from "../../assets/rank.png";
import freeIcon from "../../assets/free.png";
import finishIcon from "../../assets/finish.png";
import godIcon from "../../assets/god.png";
import bookListIcon from "../../assets/booklist.png";

export const HomeNav = () => {
	return (
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
	);
};
