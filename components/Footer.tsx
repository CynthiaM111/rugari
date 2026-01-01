import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <Logo showText={false} className="footer-logo" textColor="white" size="small" />
                        <p>Empowering education in Africa, one child at a time.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/programs">Our Work</Link></li>
                            <li><Link href="/impact">Impact</Link></li>
                            <li><Link href="/get-involved">Get Involved</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Connect</h4>
                        <ul>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><a href="#facebook">Facebook</a></li>
                            <li><a href="#X(Twitter)">X(Twitter)</a></li>
                            <li><a href="#instagram">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Rugari Educate Foundation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

