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

  const skills = data.skills.filter((skill: Skill) =>
    applicantIds.includes(skill.applicant_id)
  );

  let skillCount = 0;

  for (let applicant of applicants) {
    const applicantSkillCount = skills.filter(
      (skill: Skill) => skill.applicant_id === applicant.id
    ).length;
    skillCount += applicantSkillCount > 0 ? applicantSkillCount : 1;
  }

  const firstApplicant = applicants[0];

  const isFirst = (applicantId: number) => {
    return firstApplicant.id === applicantId;
  };

  return (
    <>
      {applicants.map((applicant: Applicant) => (
        <ApplicantRow
          key={applicant.id}
          applicant={applicant}
          skills={skills.filter(
            (skill: any) => skill.applicant_id === applicant.id
          )}
          isFirst={isFirst(applicant.id)}
          jobName={job.name}
          mainRowSpan={skillCount}
        />
      ))}
    </>
  );
};

export default JobRow;
