import "./RecruiterForm.css";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { FaTruckField } from "react-icons/fa6";

const RecruiterForm = () => {
  return (
    <div className="Form__Container">
      <h1 style={{ fontFamily: "Playfair Display, serif" }}>Post Your Job</h1>
      <form className="Form">
        <div style={{ margin: "15px 0" }}>
          <div style={{ fontWeight: "800", fontSize: "1.5rem" }}>
            Basic Details
          </div>
          <span style={{ color: "crimson", fontSize: "13px" }}>
            *marked fields are important
          </span>
        </div>

        <div>
          <section className="Company__fields">
            <div className="input__container">
              <label htmlFor="CompanyName" style={{ fontWeight: "800" }}>
                Company Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="CompanyName"
                placeholder="Ex.- Web Solutions..."
              />
            </div>
            <div className="input__container">
              <label htmlFor="JobTitle" style={{ fontWeight: "800" }}>
                Job Title <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="JobTitle"
                placeholder="Ex.- Data Analyst..."
              />
            </div>
          </section>
          <section className="Job__type">
            <p style={{ fontWeight: "800" }}>
              Job Type <span style={{ color: "red" }}>*</span>
            </p>
            <div className="types">
              <p>full-time</p>
              <p>part-time</p>
              <p>Both(full-time and part-time)</p>
              <p>Intern</p>
            </div>
          </section>
          <section className="Location__field">
            <p style={{ fontWeight: "800" }}>
              Location <span style={{ color: "red" }}>*</span>
            </p>
            <div className="Locations">
              <p className="Location__option">
                <HiOutlineOfficeBuilding />
                <input type="radio" name="" id="" />
                <div style={{ fontWeight: "800" }}>
                  Work From Office
                  <div
                    style={{
                      color: "gray",
                      fontWeight: "600",
                      fontSize: "13px",
                    }}
                  >
                    Candidate have to work at office location
                  </div>
                </div>
              </p>
              <p className="Location__option">
                <FaHome />
                <input type="radio" name="" id="" />
                <div style={{ fontWeight: "800" }}>
                  Work From Home
                  <div
                    style={{
                      color: "gray",
                      fontWeight: "600",
                      fontSize: "13px",
                    }}
                  >
                    Candidate have flexibility to work from home
                  </div>
                </div>
              </p>
              <p className="Location__option">
                <FaTruckField />
                <input type="radio" name="" id="" />
                <div style={{ fontWeight: "800" }}>
                  Field Job{" "}
                  <div
                    style={{
                      color: "gray",
                      fontWeight: "600",
                      fontSize: "13px",
                    }}
                  >
                    Candidate have to do the field work
                  </div>
                </div>
              </p>
            </div>
          </section>
          <section className="Fee__field">
            <p style={{ fontWeight: "800" }}>
              Any security deposit require for the candidate?
              <span style={{ color: "red" }}>*</span>
            </p>
            <div>
              <div>
                <input type="radio" name="" id="" />
                Yes
              </div>
              <div>
                <input type="radio" name="" id="" />
                No
              </div>
            </div>
          </section>
        </div>
        <p>
          <button>Continue</button>
        </p>
      </form>
    </div>
  );
};

export default RecruiterForm;
