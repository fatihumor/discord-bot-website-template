import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Contact</h3>
        </div>
        <div className="joinUs-para p-color">
          We’re always looking for fresh talent and new opportunities to collaborate. Whether you're an artist, producer, or music enthusiast, we'd love to hear from you. Reach out to us for inquiries, submissions, or any questions you might have. Let’s create something great together!!{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="mailto:contact@voisrecords.com">
            contact@voisrecords.com
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
