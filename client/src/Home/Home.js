import './Home.css';
import Articles from '../Articles/Articles';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Articles />
            <Footer />
        </>
    );
}

// onClick={() => {
//                     this.props.onDelete(this.state.product);
//                   }}