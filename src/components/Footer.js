import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <>
        <div>
            <footer className="main-footer">
                <div>
                    <h3>Lets get in touch and share interesting stories about traveling.</h3>
                    <form method="post" name="subform">
                        <input type="name" />
                        <input type="email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </footer>
        </div>
    </>
  )
}

export default Footer
