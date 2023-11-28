import { Applicant, Skill } from "../../types";

interface ApplicantProps {
  applicant: Applicant;
  skills: Skill[];
}
const ApplicantRow = (props: ApplicantProps) => {
  const { applicant, skills } = props;
  const rowSpanLength = skills.length;
  const firstSkill = skills[0];

  return (
    <>
      <tr>
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
        <td>{firstSkill.name}</td>
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
