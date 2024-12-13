/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Dashboard from "../Dashboard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  // tablet: {
  //   breakpoint: { max: 1024, min: 464 },
  //   items: 1,
  //   slidesToSlide: 1, // optional, default to 1.
  // },
  // mobile: {
  //   breakpoint: { max: 464, min: 0 },
  //   items: 1,
  //   slidesToSlide: 1, // optional, default to 1.
  // },
};
const Home = () => {
  const [edit, setEdit] = React.useState(false);
  const eaditing = () => {
    setEdit(!edit);
  };

  return (
    <div>
      <div style={{ width: "100%" }}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <img src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733226882/j8rpjfkienmkundb8zya.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733226817/idyzp7ot0u05iijydyyp.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733226782/kqq2csdtdhstm2oli2i2.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733226741/dyyr0yo9dnnn1mwhin8x.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733226711/vmnfyrhilgcklodne3w5.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733226681/npvw0wbldrzh58sawqc1.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733226660/af3ha7ylvo0hlzamdlve.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733226549/xnjbfcs2x7euyjvialou.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733226315/rjfqaczzd3yzylvi9a8z.png" />
          </div>
        </Carousel>
      </div>
      <section className="homeSecondContainer">
        <div className="homeSecondContainerLeft">
          <h2 className="homeSecondContainerLeftH2">
            You are at right place for{" "}
            <span className="reded">your child's</span> all
            <span className="reded"> academic requirement.</span>
          </h2>
          <h4 className="homeSecondContainerLeftH4">
            Discover the <span className="reded"> path</span> to your
            <span className="reded"> dreams</span> with our
            <span className="reded"> expert guidance</span>.
          </h4>
        </div>
        <div>
          <p className="homeSecondContainerLeftP">
            Welcome to 100 Plus Academy, where we are dedicated to nurturing
            academic excellence and fostering a love for learning. Our expert
            educators and innovative teaching methods ensure that every student
            achieves their full potential.
          </p>
          <div className="d-flex flex-column flex-md-row">
            <div className="studentTaughtContainer">
              <div>
                <img
                  className="w-50 mb-4"
                  src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733307257/o9r6ybfque8tqgvtlu08.png"
                />
              </div>
              <div>
                <h1>15K</h1>
                <p>Student taught</p>
              </div>
            </div>
            <div className="studentTaughtContainer">
              <div>
                <img
                  className="w-50 mb-4"
                  src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733307283/ri6tn7arpvw1eigwiwyy.png"
                />
              </div>
              <div>
                <h1>100%*</h1>
                <p>Success Rate</p>
              </div>
            </div>
            <div className="studentTaughtContainer">
              <div>
                <img
                  className="w-50 mb-4"
                  src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733307309/eds0lfyfvnggi2d4jjfm.png"
                />
              </div>
              <div>
                <h1>300+</h1>
                <p>Top Rankers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homeThirdContainer">
        <div className="homeThirdContainerLeft">
          <h1 className="homeThirdContainerH1">
            Unlock <span className="reded"> Your future</span> with
            <span className="reded"> us</span>
          </h1>
          <p className="homeThirdContainerP">
            Join 100 Plus Academy’s versatile coaching programs, offering both
            offline and online batches to suit your schedule and learning style.
            Experience top-quality education from the comfort of your home or
            in-person.
          </p>
          <button className="homeThirdContainerButton">Register Now</button>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/znFt1gO-ROE?si=ol1fq11TLSeMZlbR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section className="homeFourthContainer">
        <div>
          <h5 className="reded homeFourthContainerH5">Testimonials</h5>
          <h1 className="homeFourthContainerH1">
            Reviews from our <span className="reded">students</span>
          </h1>
          <p className="homeFourthContainerP">
            Stay updated with the latest in coaching, learning strategies, and
            educational trends to boost your academic journey.
          </p>
        </div>
        <div className="homeFourthContainerRight">
          <button className="btn btn-primary mb-4" onClick={eaditing}>
            edit
          </button>

          <Dashboard edit={edit} />
        </div>
      </section>
      <section className="homeFifthContainer">
        <h5 className="reded">Our Success</h5>
        <h1>
          Our <span className="reded">Achivements </span>so far
        </h1>
        <p className="w-50 " style={{ fontSize: "18px" }}>
          These achievements underscore our commitment to academic excellence
          and innovative learning. Join 100 Plus Academy to be part of our
          success story!
        </p>
        <div className=" w-75">
          <div className="d-flex flex-column  flex-md-row ">
            <div className="studentsuccess">
              <div className="w-25 me-4">
                <h1 className="homeFifthContainerH1">Student Success</h1>
                <img
                  className="w-25 w-md-50"
                  src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733316551/zcjs4ffywbkyn6k5souh.png"
                />
              </div>
              <div className="w-75">
                <h5 className="m-0">8,000+</h5>
                <p className="text-start">
                  More than 8000 students successfully tutored
                </p>
                <h5>400+</h5>
                <p className="text-start">
                  200+ students achieved top ranks in national exams
                </p>
              </div>
            </div>
            <div className="studentsuccess">
              <div className="w-25 me-5">
                <h1 className="homeFifthContainerH1">
                  Competitive Exam Results
                </h1>
                <img
                  className="w-25 "
                  src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733316576/r8d9g46hgvn11zudukwn.png"
                />
              </div>
              <div className="w-75">
                <h5 className="m-0">150+</h5>
                <p className="text-start m-0">150+ students cleard IIT JEE</p>
                <h5 className="m-0">230+</h5>
                <p className="text-start m-0">100+ students cleared NEET</p>
                <h5 className="m-0">50+</h5>
                <p className="text-start m-0">
                  50+ students excelled in Olympiads
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <div className="studentsuccess">
              <div className="w-25 me-4">
                <h1 className="homeFifthContainerH1">Academic excellence</h1>
                <img
                  className="w-25"
                  src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733316595/zzjodtvlqktxkvervacr.png"
                />
              </div>
              <div className="w-75">
                <h5 className="m-0">95%</h5>
                <p className="text-start m-0">
                  95% of students scored above 90% in board exams
                </p>
                <h5>230+</h5>
                <p className="text-start m-0">100+ students cleared NEET</p>
              </div>
            </div>
            <div className="studentsuccess">
              <div className="w-25 me-4">
                <h1 className="homeFifthContainerH1">Innovative Learning</h1>
                <img
                  className="w-25 "
                  src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733316615/gvhatyrmuwx7p7tetl2g.png"
                />
              </div>
              <div className="w-75">
                <h5 className="m-0">100+</h5>
                <p className="text-start m-0">
                  Implemented over 100 interactive learning modules
                </p>
                <h5>50+</h5>
                <p className="text-start m-0">
                  Conducted 50+ workshops and seminars on innovative education
                </p>
              </div>
            </div>
          </div>
          <div className="studentsuccess me-auto">
            <div className="w-25 me-4">
              <h1 className="homeFifthContainerH1">Community Impact</h1>
              <img
                className="w-25"
                src="https://res.cloudinary.com/dtnrcram4/image/upload/v1733316637/t1wdxf7sirznsg06vylg.png"
              />
            </div>
            <div className="w-75">
              <h5 className="m-0">20+</h5>
              <p className="text-start m-0">
                Taught students of 20+ schools for educational in the community
              </p>
              <h5 className="m-0">10,000+</h5>
              <p className="text-start m-0">
                Engaged with over 10,000 students through outreach programs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
