import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ConfigProvider } from "react-vant";

const themeVars = {
	"--rv-swipe-border-radius": ".1rem",
	"--rv-tabbar-item-font-size": ".16rem",
	"--rv-tabbar-item-active-color": "#000",
	"--rv-tabbar-item-text-color": "#000",
	"--rv-typography-link-color": "#5790df"
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ConfigProvider themeVars={themeVars}>
			<App/>
		</ConfigProvider>
	</StrictMode>,
)
