import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';

function App() {
  return (
    <>
      <div className="nav-wrapper">
        <nav>
          <div className="first-nav">
            <img
              src="https://www.spscommerce.com/wp-content/uploads/2018/07/logo-white.svg"
              id="spsIcon"
            />
            <div className="nav-button-div">
              <div>Javascript</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>Remade By</div>
              <div>Andres</div>
              <button id="contactBtn">Contact</button>

            </div>
            <GiHamburgerMenu size="1.6rem" id="giHamburgerMenu" />
          </div>
          <div className="second-nav">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              I made this replica of the SPS website to show off my web dev
              skills, The site is responsive for mobile and desktop devices. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Iure, dolorem! Et deserunt ipsa optio nemo similique. Nesciunt,
              voluptatum? Nemo quo dolore veritatis, nulla debitis eligendi
              architecto unde laboriosam earum ratione!
            </p>
            <div className="second-nav-button-wrapper">
              <button id="whyChooseSpsBtn">Lorem, ipsum dolor.</button>
              <button id="referredToSpsBtn">Lorem, ipsum dolor.</button>
            </div>
          </div>
        </nav>
      </div>
      <main>
        <div className="top-main">
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos.</h2>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum debitis, sapiente hic obcaecati eligendi natus iure quidem molestiae provident corporis dolor adipisci eius tempora quasi minima cupiditate, repellat illum vitae delectus quaerat. Deserunt, libero iusto. Repellat, modi! Excepturi autem neque assumenda placeat hic aut quaerat modi ducimus nam ab!
          </div>
        </div>
        <div className="icons-and-text-wrapper">
          <div className="icon-and-text-wrapper">
            <div>
              <img
                src="https://www.spscommerce.com/wp-content/uploads/2015/01/icon-fulfillment.png"
                id="iconFulfillment"
              />
            </div>
            <div>
              <div className="find-an-edi-solution-text">
                Lorem ipsum dolor sit amet.
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam repellat a, autem exercitationem voluptatem animi hic nostrum facere atque asperiores, porro delectus eius similique
              </p>
              <a>Lorem, ipsum.</a>
            </div>
          </div>
          <div className="icon-and-text-wrapper">
            <div>
              <img
                src="https://www.spscommerce.com/wp-content/uploads/2015/01/icon-fulfillment.png"
                id="iconFulfillment"
              />
            </div>
            <div>
              <div className="find-an-edi-solution-text">
                Lorem ipsum dolor sit.
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, porro laborum! Velit accusamus delectus officia ipsum qui rerum eum at.
              </p>
              <a>Lorem ipsum dolor sit.</a>
            </div>
          </div>

          <div className="icon-and-text-wrapper">
            <div>
              <img
                src="https://www.spscommerce.com/wp-content/uploads/2015/01/icon-fulfillment.png"
                id="iconFulfillment"
              />
            </div>
            <div>
              <div className="find-an-edi-solution-text">
                Lorem ipsum dolor sit.
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem dolorum molestiae provident unde nihil tempore laudantium, iste illo dolores?
              </p>
              <a>Lorem, ipsum.</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
