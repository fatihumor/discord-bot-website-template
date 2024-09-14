import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Our Servives | Vois Records</title>
        <meta
          name="description"
          content="Vois Records is an independent record label."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="servives">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Servives
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              ✉️ 24/7 Support
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">Our commitment to our artists doesn’t stop after signing. Vois Records offers 24/7 support, providing you with assistance and guidance whenever you need it. We’re here for you, day or night, ensuring your music journey is seamless.
</span>
                </li>
                <li>
                  <kbd></kbd> {" "}
                  <span className="p-color"></span>
                </li>
                <li>
                  <kbd></kbd> {" "}
                  <span className="p-color"></span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              📤 Upload Songs
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">Your songs are carefully examined by our team. We upload/distribute to all platforms.</span>
                </li>
                <li>
                  <kbd></kbd> {" "}
                  <span className="p-color"></span>
                </li>
                <li>
                  <kbd></kbd> {" "}
                  <span className="p-color"></span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              🚀 Promotion
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">We offer you extraordinary possibilities to promote your songs.</span>
                </li>
                <li>
                  <kbd></kbd> {" "}
                  <span className="p-color"></span>
                </li>
                <li>
                  <kbd></kbd> {" "}
                  <span className="p-color"></span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              🛠️ Mix & Mastering
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">We provide professional mixing and mastering services to ensure your music reaches the highest audio quality.</span>
                </li>
                <li>
                  <kbd></kbd> {" "}
                  <span className="p-color"></span>
                </li>
                <li>
                  <kbd></kbd> {" "}
                  <span className="p-color"></span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              © Copyright Management
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">We ensure the protection and management of the copyrights for your songs and other music works so you can receive the royalties you deserve.</span>
                </li>
                <li>
                  <kbd></kbd> {" "}
                  <span className="p-color"></span>
                </li>
                <li>
                  <kbd></kbd> {" "}
                  <span className="p-color"></span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
