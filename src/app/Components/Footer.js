import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
        <div className="flex justify-between">
          <div className="Copyright">
            © Copyright <strong>Akeshya</strong>. All Rights Reserved
          </div>
          <div>
            <ul className=" flex list-unstyled">
              <li className="px-3">
                <a href="/Terms_and_conditions.pdf">Terms and conditions </a>
              </li>
              <li className="px-3">
                <a href="/Refund_policy.pdf">Refund policy</a>
              </li>
              <li className="px-3">
                <a href="/Privacy_policy.pdf">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>  
    </footer>
  );
};

export default Footer;
