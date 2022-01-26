import img from './silver.jpg';
import Navbar from './Navbar'
console.log(img)

const Header = () => {
    return (
    <div className="header">
        <div className="img">
        <img src={img} alt="img" />
        </div>
        <div className="heading">
          <h1> Indian {"\n"}
             Stallions </h1>
             <Navbar />
        </div>
    </div>     
      );
}
 
export default Header;