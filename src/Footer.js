import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return (
        <footer className="footer">
            <ul>
                <li>
                    Sustainability
                </li>
                <li>
                    Blog
                </li>
                <li>
                    About
                </li>
                <li>
                    Sell on Depop
                </li>
                <li>
                    Jobs
                </li>
                <li>
                    Spaces
                </li>
                <li>
                    News
                </li>                
                <li>
                    Support
                </li>
                <li>
                    Terms
                </li>
                <li>
                    Privacy
                </li>
                <li>
                    Safety
                </li>
                <li>
                    Cookies
                </li>
            </ul>
            <div className="footer__right-section">
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
                <div className="footer__language">
                    English
                </div>
                <div className="footer__country">
                    United Kingdom
                </div>
            </div>

        </footer>
    )
}

export default Footer
