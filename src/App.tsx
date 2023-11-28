import { Job, Skill } from "./types";
import JobRow from "./components/JobRow";
const data = require("./data/data.json");
function App() {
  const uniqueSkills = data.skills
    .map((skill: Skill) => skill.name)
    .filter(
      (value: Skill, index: number, self: Skill[]) =>
        self.indexOf(value) === index
    );

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
              {data.applicants.length} Applicants, {uniqueSkills.length} Unique
              Skills
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
