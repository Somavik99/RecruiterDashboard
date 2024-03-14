import "./RecruiterForm.css";

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
              <input type="text" id="JobTitle" placeholder="Ex.- Data Analyst..." />
            </div>
          </section>
          <section className="Job__type">

          </section>
          <section className="Documents__field"></section>
        </div>
      </form>
    </div>
  );
};

export default RecruiterForm;
