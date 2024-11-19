import { Image, Search, Sticky, Swiper, Tabbar } from "react-vant";
import { BarChartO, Contact } from "@react-vant/icons";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();

    const images = [
        'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/831de752ecc9317b85ba60ac64582f03.jpg',
        'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/b0d525b8019e797f729b308f81304402.jpg',
        'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/44b76acd6d89627d74e1fb7318880776.jpg',
    ]

    return <>
        <Sticky>
            <div className="header">Reader</div>
        </Sticky>
        <Search
            readOnly={true}
            shape="round"
            placeholder="请输入搜索关键词"
            onClickInput={() => navigate("/search")}
        />
        <div className="swiper-container">
            <Swiper>
                {images.map((image) => (
                    <Swiper.Item key={image}>
                        <Image lazyload src={image}/>
                    </Swiper.Item>
                ))}
            </Swiper>
        </div>

        <Tabbar className="horizontal-tabbar">
            <Tabbar.Item icon={<BarChartO/>} onClick={() => navigate('/shelf')}>
                <span className="tabbar-item-text">书架</span>
            </Tabbar.Item>
            <Tabbar.Item icon={<Contact/>} onClick={() => navigate('/mine')}><span
                className="tabbar-item-text">账户</span></Tabbar.Item>
        </Tabbar>
    </>
}