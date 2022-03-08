import './Home.css';
import Articles from '../articles/Articles';
export default function Home() {
    return (
      <>
        <h1 className="Home_title">My Online Newspaper !!</h1>
        <Articles/>
        
      </>
    );
}

// onClick={() => {
//                     this.props.onDelete(this.state.product);
//                   }}