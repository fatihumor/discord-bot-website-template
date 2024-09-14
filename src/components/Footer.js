import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="/">
                  Vois Records
                </Link>
                <span
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  Vois Records online!
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li>
                <Link className="p-color" href="/services">
                  Our Servives
                </Link>
              </li>
              <li>
                <Link className="p-color" href="#">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="p-color" href="voisrecords.com">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Vois Records ❤️ {" "}
              <Link
                href="https://instagram.com/voisrecords"
                className="h-color no-decoration"
              >
                Instagram
              </Link>
            </p>
            <p className="p-color">{year}Vois Records | &copy; All rights reserved.</p>
          </div>
          <div className="footer-sec2-link">
            <Link className="p-color no-decoration" href="#">
            </Link>
            <Link
              target="_blank"
              className="p-color no-decoration"
              href="https://instagram.com/voisrecords"
            >
            </Link>
            <Link className="p-color no-decoration" href="#">
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
