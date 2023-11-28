import { Job } from "./types";
import JobRow from "./components/JobRow";
const data = require("./data/data.json");
function App() {
  return (
    <div id="page">
      <table className="job-applicants">
        <thead>
          <tr>
            <th>Job</th>
            <th>Applicant Name</th>
            <th>Email Address</th>
            <th>Website</th>
            <th>Skills</th>
            <th>Cover Letter Paragraph</th>
          </tr>
        </thead>

        <tbody>
          {data.jobs.map((job: Job) => (
            <JobRow key={job.id} job={job} />
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={6}>
              {data.applicants.length} Applicants, 11 Unique Skills
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
