import AppRoutes from "./components/AppRoutes.tsx";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import {Layout} from "antd";
import Player from "./components/Player.tsx";
import styles from "./styles/layout.module.css"

const {Header, Content} = Layout;

function App() {

    return (
        <>
            <BrowserRouter>
                <Layout className={styles.layout}>
                    <Header className={styles.header}>
                        <h1 className={styles.header_title}>Welcome to music app</h1>
                    </Header>
                    <Layout>
                        <NavBar/>
                        <Content className={styles.content_wrapper}>
                            <AppRoutes/>
                        </Content>
                    </Layout>
                    <Player/>
                </Layout>
            </BrowserRouter>
        </>
    )
}

export default App
