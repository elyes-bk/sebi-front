import JamesImage from '../assets/images/james.webp'
import '../assets/styles/james.css'

const James = ({calcule, message}) => {
  return (
    <div className="james">
        <p className='bubble speech'>
          {calcule} 
          {message}
        </p>
        <img src={JamesImage} alt="James le Hiboux" />
    </div>
  );
};

export default James;