import { Applicant, Skill } from "../../types";

interface ApplicantProps {
  applicant: Applicant;
  skills: Skill[];
  isFirst?: boolean;
  jobName?: string;
  mainRowSpan?: number;
}
const ApplicantRow = (props: ApplicantProps) => {
  const { applicant, skills, isFirst, jobName, mainRowSpan } = props;
  const rowSpanLength = skills.length;
  const firstSkill = skills[0];

  return (
    <>
      <tr>
        {isFirst && jobName && mainRowSpan && (
          <td
            rowSpan={mainRowSpan === 0 ? 1 : mainRowSpan}
            className="job-name"
          >
            {jobName}
          </td>
        )}
        <td rowSpan={rowSpanLength} className="applicant-name">
          {applicant.name}
        </td>
        <td rowSpan={rowSpanLength}>
          <a href={`mailto:${applicant.email}`}>{applicant.email}</a>
        </td>
        <td rowSpan={rowSpanLength}>
          {applicant.website ? (
            <a href={`http://${applicant.website}`}>{applicant.website}</a>
          ) : (
            <>---</>
          )}
        </td>
        <td>{firstSkill ? firstSkill.name : "---"}</td>
        <td rowSpan={rowSpanLength}>{applicant.cover_letter}</td>
      </tr>
      {skills.slice(1).map((skill) => (
        <tr key={skill.id}>
          <td>{skill.name}</td>
        </tr>
      ))}
    </>
  );
};

export default ApplicantRow;
