import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Job hunting is tough, but staying organized shouldn’t be. With
            Jobify, effortlessly track all your job applications in one place.
            Whether you&apos;re applying for your dream job or exploring new
            opportunities, Jobify helps you manage your applications and stay on
            top of your job search process. Say goodbye to scattered
            spreadsheets and endless email chains—Jobify streamlines your job
            hunt, so you can focus on landing the perfect job.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>

          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
