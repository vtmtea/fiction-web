import { Image, Swiper } from "react-vant";

export const HomeSwiper = () => {
	const images = [
		"https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/831de752ecc9317b85ba60ac64582f03.jpg",
		"https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/b0d525b8019e797f729b308f81304402.jpg",
		"https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/44b76acd6d89627d74e1fb7318880776.jpg",
	];

	return (
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
	);
};
