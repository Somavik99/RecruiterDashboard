import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrPersonalComputer } from "react-icons/gr";
import "./InterviewerDetails.css"

const InterviewerDetails = () => {
  return (
    <>
      <div className="Interviewer__container">
        <form>
          <div style={{ margin: "15px 0" }}>
            <div style={{ fontWeight: "800", fontSize: "1.5rem" }}>
              Interviewer Details
            </div>
          </div>
          <div>
            <section>
              <div className="">
                <div>
                  <p style={{ fontWeight: "800" }}>
                    Interviewer Information
                    <span style={{ color: "red" }}>*</span>
                  </p>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "800",
                      color: "gray",
                    }}
                  >
                    Conductor of the interview?
                  </div>
                </div>

                <div>
                  <p>
                    <input type="radio" id="InterviewerInformation" />
                    Job Poster
                  </p>

                  <p>
                    <input type="radio" id="InterviewerInformation" />
                    Other Recruiter
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p style={{ fontWeight: "800" }}>
                    Interview Method
                    <span style={{ color: "red" }}>*</span>
                  </p>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "800",
                      color: "gray",
                    }}
                  >
                    Conducting method of the interview?
                  </div>
                </div>

                <div>
                  <p>
                    <input type="radio" />
                    Walk-in interview
                  </p>
                  <p>
                    <input type="radio" />
                    Online interview
                  </p>
                </div>
              </div>
            </section>
            <section>
              <p>
                <input type="radio" name="" id="" />
                <div style={{ display: "flex", gap: "10px" }}>
                  <span>
                    <BiSolidPhoneCall />
                    Call
                  </span>
                  <span>
                    <IoLogoWhatsapp />
                    WhatsApp
                  </span>
                </div>
                <p
                  style={{ fontSize: "13px", fontWeight: "700", color: "gray" }}
                >
                  candidates can connect the recruiter by calls or WhatsApp
                </p>
              </p>
              <p>
                <input type="radio" name="" id="" />
                <div>
                  <IoLogoWhatsapp />
                  WhatsApp
                </div>
                <p
                  style={{ fontSize: "13px", fontWeight: "700", color: "gray" }}
                >
                  candidates can connect the recruiter by calls or WhatsApp
                </p>
              </p>
              <p>
                <input type="radio" name="" id="" />
                <div>
                  <GrPersonalComputer />
                  Official Website
                </div>
                <p
                  style={{ fontSize: "13px", fontWeight: "700", color: "gray" }}
                >
                  candidates can connect the recruiter on their official website
                </p>
              </p>
            </section>
          </div>
        </form>
      </div>
    </>
  );
};

export default InterviewerDetails;
