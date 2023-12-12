// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="nav-wrapper">
        <nav>
          <div className="first-nav">
            <img
              src="https://www.spscommerce.com/wp-content/uploads/2018/07/logo-white.svg"
              id="spsIcon"
            />
            {/* <div>Products</div>
        <div>Partners</div>
        <div>Resources</div>
        <div>Company</div>
        <div>Current Customer</div> */}
            <GiHamburgerMenu size="1.6rem" id="giHamburgerMenu" />
          </div>
          <div className="second-nav">
            <h1>SPS Commerce Offers Retail Solutions</h1>
            <p>
              The SPS Retail Network powers the retail supply chain around the
              globe. Our solutions connect trading partners, accelerate
              products-to-shelf and allow for the collaboration to grow sales
              with data insights. We ensure every retail channel works together
              to meet the consumer where they want to buy.
            </p>
            <button id="whyChooseSpsBtn">Why Choose SPS</button>
            <button id="referredToSpsBtn">Referred to SPS</button>
          </div>
        </nav>
      </div>
      <main>
        <h2>SPS Commerce Solutions to Solve Your Supply Chain Challenges</h2>
        <p>
          Our retail solutions automate the exchange of data about products,
          inventory, orders, shipments, payments and sales. More than 115,000
          companies around the globe rely on SPS to make their trading partner
          relationships more collaborative and profitable. View our products at
          a glance below:
        </p>
        <div className="icon-and-text-wrapper">
          <img
            src="https://www.spscommerce.com/wp-content/uploads/2015/01/icon-fulfillment.png"
            id="iconFulfillment"
          />
          <div className="find-an-edi-solution-text">Find an EDI Solution</div>
          <p>
            Solve your order fulfillment problems, gain EDI capability, attain
            EDI compliance, connect systems and onboard trading partners with
            SPS Fulfillment EDI.
          </p>
          <a>Learn More</a>
        </div>
        <div className="icon-and-text-wrapper">
          <img
            src="https://www.spscommerce.com/wp-content/uploads/2015/01/icon-fulfillment.png"
            id="iconFulfillment"
          />
          <div className="find-an-edi-solution-text">Find an EDI Solution</div>
          <p>
            Solve your order fulfillment problems, gain EDI capability, attain
            EDI compliance, connect systems and onboard trading partners with
            SPS Fulfillment EDI.
          </p>
          <a>Learn More</a>
        </div>

        <div className="icon-and-text-wrapper">
          <img
            src="https://www.spscommerce.com/wp-content/uploads/2015/01/icon-fulfillment.png"
            id="iconFulfillment"
          />
          <div className="find-an-edi-solution-text">Find an EDI Solution</div>
          <p>
            Solve your order fulfillment problems, gain EDI capability, attain
            EDI compliance, connect systems and onboard trading partners with
            SPS Fulfillment EDI.
          </p>
          <a>Learn More</a>
        </div>
      </main>
    </>
  );
}

export default App;
