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
            <h1>SPS Commerce Mockup Site</h1>
            <p>
              I made this replica of the SPS website to show off my web dev
              skills, The site is responsive for mobile and desktop devices. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Iure, dolorem! Et deserunt ipsa optio nemo similique. Nesciunt,
              voluptatum? Nemo quo dolore veritatis, nulla debitis eligendi
              architecto unde laboriosam earum ratione!
            </p>
            <div className="second-nav-button-wrapper">
              <button id="whyChooseSpsBtn">Why Choose SPS</button>
              <button id="referredToSpsBtn">Referred to SPS</button>
            </div>
          </div>
        </nav>
      </div>
      <main>
        <div className="top-main">
          <h2>SPS Commerce Solutions to Solve Your Supply Chain Challenges</h2>
          <div>
            Our retail solutions automate the exchange of data about products,
            inventory, orders, shipments, payments and sales. More than 115,000
            companies around the globe rely on SPS to make their trading partner
            relationships more collaborative and profitable. View our products
            at a glance below:
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
                Find an EDI Solution
              </div>
              <p>
                Solve your order fulfillment problems, gain EDI capability,
                attain EDI compliance, connect systems and onboard trading
                partners with SPS Fulfillment EDI.
              </p>
              <a>Learn More</a>
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
                Find an EDI Solution
              </div>
              <p>
                Solve your order fulfillment problems, gain EDI capability,
                attain EDI compliance, connect systems and onboard trading
                partners with SPS Fulfillment EDI.
              </p>
              <a>Learn More</a>
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
                Find an EDI Solution
              </div>
              <p>
                Solve your order fulfillment problems, gain EDI capability,
                attain EDI compliance, connect systems and onboard trading
                partners with SPS Fulfillment EDI.
              </p>
              <a>Learn More</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
