import React from 'react';
import './Style4.css';

class TP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Welcome Terms and Policy Page!',
      activeToken: '', // Initialize activeToken state
      isMobile: window.innerWidth <= 800, // Check if screen is mobile-sized initially
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth <= 800, // Update the isMobile state based on screen width
    });
  };

  showContent = (token) => {
    this.setState({
      activeToken: token, // Set the active token
    });

    if (token === 'terms') {
      this.setState({
        content: (
          <div className="flex flex-col p-6">
          {/* <p className="mb-4 text-xs leading-tight text-black">
              WHO WE ARE
            </p> */}
            
            <h5
              className="mb-2 text-5xl leading-tight text-black">
              About Us
            </h5>
            <p className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    
    culpa qui officia deserunt mollit anim id est laborum.If you are a Hookah business, please join us and help us defend and protect your business, our culture and community.
    
            </p>
            <br></br>
            <h3
              className="mb-2 text-3xl leading-tight text-black">
              About Us
            </h3>
            <p className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    
    culpa qui officia deserunt mollit anim id est laborum.If you are a Hookah business, please join us and help us defend and protect your business, our culture and community.
    
            </p><br></br>
            <h3
              className="mb-2 text-2xl leading-tight text-black">
              About Us
            </h3>
            <li className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet
    
            </li>
            <li className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet
    
            </li>
            <li className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet
    
            </li>
            <li className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet
    
            </li>
            <br></br>
            <h5
              className="mb-2 text-3xl leading-tight text-black">
              About Us
            </h5>
            <p className="mb-4 text-xl leading-tight text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    
    culpa qui officia deserunt mollit anim id est laborum.If you are a Hookah business, please join us and help us defend and protect your business, our culture and community.
    
            </p>
            <p className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    
    culpa qui officia deserunt mollit anim id est laborum.If you are a Hookah business, please join us and help us defend and protect your business, our culture and community.
    
            </p>
          </div>
        ),
      });
    } else if (token === 'policy') {
      this.setState({
        content:(
          <div className="flex flex-col p-6">
            <h3
              className="mb-2 text-2xl leading-tight text-black">
              About Us
            </h3>
            <li className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet
    
            </li>
            <li className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet
    
            </li>
            <li className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet
    
            </li>
            <li className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet
    
            </li>
            <br></br>
          {/* <p className="mb-4 text-xs leading-tight text-black">
              WHO WE ARE
            </p> */}
            <h5
              className="mb-2 text-5xl leading-tight text-black">
              About Us
            </h5>
            <p className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    
    culpa qui officia deserunt mollit anim id est laborum.If you are a Hookah business, please join us and help us defend and protect your business, our culture and community.
    
            </p>
            <br></br>
            <h3
              className="mb-2 text-3xl leading-tight text-black">
              About Us
            </h3>
            <p className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    
    culpa qui officia deserunt mollit anim id est laborum.If you are a Hookah business, please join us and help us defend and protect your business, our culture and community.
    
            </p><br></br>
            
            <h5
              className="mb-2 text-3xl leading-tight text-black">
              About Us
            </h5>
            <p className="mb-4 text-xl leading-tight text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    
    culpa qui officia deserunt mollit anim id est laborum.If you are a Hookah business, please join us and help us defend and protect your business, our culture and community.
    
            </p>
            <p className="mb-4 text-xs leading-tight text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    
    culpa qui officia deserunt mollit anim id est laborum.If you are a Hookah business, please join us and help us defend and protect your business, our culture and community.
    
            </p>
          </div>
        ),
      });
    }
  };

  render() {
    const { isMobile, activeToken } = this.state;

    return (
      <div className ="App">
        <div className="qa">
          <br></br>
          <center>
      <h3
          className="mb-2 text-5xl leading-tight text-black">
          Terms & Policy
        </h3><br></br>
        <center><p className="mb-4 text-xl leading-tight text-black">
        Lorem ipsum dolor sit 

        </p></center></center>
      </div>
      <div className="dashboard">
        
        <div className="sidebar">
          {isMobile ? (
            <select className="mobile-dropdown" value={activeToken} onChange={(e) => this.showContent(e.target.value)}>
              <option value="">Select an option</option>
              <option value="terms">Terms</option>
              <option value="policy">Policy</option>
            </select>
          ) : (
            <>
              <div
                className={`sidebar-token desktop-dropdown ${activeToken === 'terms' ? 'active' : ''}`}
                onClick={() => this.showContent('terms')}
              >
                Terms
              </div>
              <div
                className={`sidebar-token desktop-dropdown ${activeToken === 'policy' ? 'active' : ''}`}
                onClick={() => this.showContent('policy')}
              >
                Policy
              </div>
            </>
          )}
        </div>
        <div className="divider"></div>
        <div className="content" id="content">
          {this.state.content}
        </div>
      </div>

      </div>
    );
  }
}

export default TP;
