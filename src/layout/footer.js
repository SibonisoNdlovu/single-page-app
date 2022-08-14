import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-center p-5 text-white h-16">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Copyright &copy; {new Date().getFullYear()} DevConnector</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;