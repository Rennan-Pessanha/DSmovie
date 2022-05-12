
import {ReactComponent as GithubIcon} from '../../assets/img/github.svg';
import './styles.css'

function Navbar() { 
    return(
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DsMovie</h1>
                <a className="dsmovie-a" href="https://github.com/Rennan-Pessanha">  
                <div className="dsmovie-contact-container">
                  <GithubIcon />
                  <p className="dsmovie-c-link">/Rennan Pessanha</p>
                </div>
  
                </a>
            </div>
  
        </nav>
  
  
      </header>
    )
}

export default Navbar;