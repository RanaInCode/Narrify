import "../styles/landing.css";
import { useNavigate } from "react-router-dom";

export default function Home(){
  const navigate = useNavigate();
    return(
      <>
         <div className="landing-page">
          <div className="landing-hero">
            
          <div className='landing-nav'>
              <h3>Narrify</h3>
              <button onClick={()=> navigate('/login')} >Sign In</button>
            </div>

            <div className="landing-hero-text">

                <h1>Empower Your Journey: Elevate Your Craft on Narrify</h1>
                <p>Dive into a realm of endless possibilities with Narrify. Unleash your creativity, skills, and passion as you embark on a blogging journey like never before. Our platform is a thriving marketplace where innovation meets opportunity, connecting talented bloggers with their audience. </p>
                <button onClick={()=> navigate('/signup')}>Join Now</button>
            </div>

          </div>
         </div>
      </>
    )
  }