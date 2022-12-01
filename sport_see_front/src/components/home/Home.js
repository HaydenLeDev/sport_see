import Header from "../header/Header";
import Container from "./Container";
import {getUserById} from "../../service/mock/apiMock"
import '../../style/components/header/Header.css';

function Home() {

    const data = getUserById(12);
    console.log(data.userInfos.firstName)

    return (
        <div className="Home">
            <Header />
            <Container />
        </div>
    );
}

export default Home;
