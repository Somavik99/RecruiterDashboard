import "./RecruiterForm.css";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { FaTruckField } from "react-icons/fa6";

const RecruiterForm = () => {
  return (
    <div className="Form__Container">
      <h1 style={{ fontFamily: "Playfair Display, serif" }}>Post Your Job</h1>
      <form className="Form">
        <div>
          <div style={{ fontWeight: "800" }}>Basic Details</div>
          <span style={{ color: "crimson" }}>*marked fields are important</span>
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
            <div>
              <p className="Type__options">
                <HiOutlineOfficeBuilding />
                <input type="radio" name="" id="" />
                <p>
                  Work From Office
                  <div>Candidate have to work at office location</div>
                </p>
              </p>
              <p>
                <FaHome />
                <input type="radio" name="" id="" />
                <p>
                  Work From Home
                  <div>Candidate have flexibility to work from home</div>
                </p>
              </p>
              <p>
                <FaTruckField />
                <input type="radio" name="" id="" />
                <p>
                  Field Job <div>Candidate have to do the field work</div>
                </p>
              </p>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default RecruiterForm;
