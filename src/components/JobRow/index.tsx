import { Job, Applicant, Skill } from "../../types";
import ApplicantRow from "../ApplicantRow";

const data = require("../../data/data.json");

interface JobProps {
  job: Job;
}
const JobRow = (props: JobProps) => {
  const { job } = props;
  const applicants = data.applicants.filter(
    (applicant: Applicant) => applicant.job_id === job.id
  );

  const applicantIds = applicants.map((applicant: any) => applicant.id);
  const firstApplicant = applicants[0];

  const skills = data.skills.filter((skill: Skill) =>
    applicantIds.includes(skill.applicant_id)
  );

  const firstApplicantSkills = skills.filter(
    (skill: any) => skill.applicant_id === firstApplicant.id
  );

  const firstSkill = firstApplicantSkills[0];

  const restOfSkills = skills.filter(
    (skill: any) => skill.applicant_id !== firstApplicant.id
  );

  const mainRowSpan = skills.length;

  return (
    <>
      <tr>
        <td rowSpan={mainRowSpan} className="job-name">
          {job.name}
        </td>
        <td rowSpan={firstApplicantSkills.length} className="applicant-name">
          {firstApplicant.name}
        </td>
        <td rowSpan={firstApplicantSkills.length}>
          <a href={`mailto:${firstApplicant.email}`}>{firstApplicant.email}</a>
        </td>
        <td rowSpan={firstApplicantSkills.length}>
          <a href={`http://${firstApplicant.website}`}>
            {firstApplicant.website}
          </a>
        </td>
        <td>{firstSkill.name}</td>
        <td rowSpan={firstApplicantSkills.length}>
          {firstApplicant.cover_letter}
        </td>
      </tr>
      {firstApplicantSkills.slice(1).map((skill: Skill) => (
        <tr key={skill.id}>
          <td>{skill.name}</td>
        </tr>
      ))}
      {applicants.slice(1).map((applicant: Applicant) => (
        <ApplicantRow
          key={applicant.id}
          applicant={applicant}
          skills={restOfSkills.filter(
            (skill: any) => skill.applicant_id === applicant.id
          )}
        />
      ))}
    </>
  );
};

export default JobRow;
