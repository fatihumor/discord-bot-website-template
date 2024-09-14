import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Vois Records</h1>
        <h2 className="showcase-header-text h-color">
          Vois Records is an independent record label.
        </h2>
        <p className="showcase-para p-color">
          Vois Records is an independent record label committed to discovering and promoting unique voices across diverse music genres. We collaborate with talented artists to bring fresh, original sounds to the world. Join us on our journey to shape the future of music.
        </p>

        <span className="p-color">⚡</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="contact@voisrecords.com">
              Contact
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://instagram.com/voisrecords">
              Instagram
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
