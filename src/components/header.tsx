import classNames from "classnames";
import { Flex, Sticky } from "react-vant";
import { useState } from "react";
import { Search } from "@react-vant/icons";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();
	const [isScroll, setIsScroll] = useState<boolean>(false);

	const scrollHandler = ({ scrollTop }: { scrollTop: number; isFixed: boolean }) => {
		if (scrollTop > 5 && !isScroll) {
			setIsScroll(true);
		}

		if (scrollTop < 5) {
			setIsScroll(false);
		}
	};

	return (
		<Sticky onScroll={scrollHandler}>
			<div className={classNames("header", { "bg-color": isScroll })}>
				<Flex justify={"between"}>
					Reader
					{isScroll && (
						<Search
							fontSize={".24rem"}
							onClick={() => navigate("/search")}
						/>
					)}
				</Flex>
			</div>
		</Sticky>
	);
};
