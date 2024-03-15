import "./CandidateRequirement.css";

const CandidateRequirement = () => {
  return (
    <>
      <div>
        <div className="Candidate__container">
          <form className="Candidate__form">
            <div style={{ margin: "15px 0" }}>
              <div style={{ fontWeight: "800", fontSize: "1.5rem" }}>
                Candidate Requirements
              </div>
            </div>
            <div>
              <section>
                <div className="Candidate__input">
                  <label
                    htmlFor="MinimumEducation"
                    style={{ fontWeight: "800" }}
                  >
                    Minimum Education <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="MinimumEducation"
                    placeholder="Ex.- Graduate..."
                  />
                </div>
                <div>
                  <label htmlFor="Gender" style={{ fontWeight: "800" }}>
                    Gender <span style={{ color: "red" }}>*</span>
                  </label>
                  <div style={{ display: "flex" }}>
                    <p>
                      <input type="radio" />
                      Male
                    </p>
                    <p>
                      <input type="radio" />
                      Female
                    </p>
                    <p>
                      <input type="radio" />
                      Both
                    </p>
                  </div>
                </div>
                <div>
                  <label style={{ fontWeight: "800" }}>
                    Any specific age? <span style={{ color: "red" }}>*</span>
                  </label>
                  <div style={{ display: "flex" }}>
                    <p>
                      <input type="radio" />
                      Yes
                    </p>
                    <p>
                      <input type="radio" />
                      No
                    </p>
                  </div>
                </div>
                <div>
                  <label htmlFor="Experience" style={{ fontWeight: "800" }}>
                    Experience <span style={{ color: "red" }}>*</span>
                  </label>
                  <div style={{ display: "flex" }}>
                    <p>
                      <input type="checkbox" />
                      Fresher
                    </p>
                    <p>
                      <input type="checkbox" />
                      Experienced
                    </p>
                    <p>
                      <input type="checkbox" />
                      Both
                    </p>
                  </div>
                </div>
              </section>
              <section className="Language__field">
                <p style={{ fontWeight: "800" }}>
                  Language <span style={{ color: "red" }}>*</span>
                </p>
                <div className="English__section">
                  <p className="English__option">
                    <input type="radio" name="" id="" />
                    <div style={{ fontWeight: "800" }}>
                      Basic English
                      <div
                        style={{
                          color: "gray",
                          fontWeight: "600",
                          fontSize: "13px",
                        }}
                      >
                        Candidate must have an understanding for english read
                        and write
                      </div>
                    </div>
                  </p>
                  <p className="English__option">
                    <input type="radio" name="" id="" />
                    <div style={{ fontWeight: "800" }}>
                      Intermediate English
                      <div
                        style={{
                          color: "gray",
                          fontWeight: "600",
                          fontSize: "13px",
                        }}
                      >
                        Candidate should have a little bit fluency in english
                      </div>
                    </div>
                  </p>
                  <p className="English__option">
                    <input type="radio" name="" id="" />
                    <div style={{ fontWeight: "800" }}>
                      Advanced English
                      <div
                        style={{
                          color: "gray",
                          fontWeight: "600",
                          fontSize: "13px",
                        }}
                      >
                        Candidate Should be completely fluent in English
                      </div>
                    </div>
                  </p>
                </div>
              </section>
              <section style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontWeight: "800" }}>
                  Skill Preference <span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" placeholder="Ex.-WordPress..." />
              </section>
              <section>
                <p style={{ fontWeight: "800" }}>
                  Job Description <span style={{ color: "red" }}>*</span>
                </p>
                <textarea
                  name=""
                  id=""
                  cols="50"
                  rows="10"
                  style={{
                    borderRadius: "8px",
                    border: "2px solid black",
                    resize: "none",
                    height:"90px",
                    width:"450px",
                    padding:"12px",
                    fontSize:"20px"
                  }}
                ></textarea>
              </section>
            </div>
            <div className="Buttons">
              <button className="Back">Back</button>
              <button className="continue">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CandidateRequirement;
