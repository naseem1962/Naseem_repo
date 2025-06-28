import { Briefcase } from "lucide-react";
import { EmploymentHistory } from "@/data/resume-data";

interface EmploymentSectionProps {
  employmentHistory: EmploymentHistory[];
}

export default function EmploymentSection({ employmentHistory }: EmploymentSectionProps) {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 animate-slide-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: 'var(--resume-primary)' }}>
        <Briefcase className="mr-3" size={24} />
        PROFESSIONAL EXPERIENCE
      </h2>
      
      <div className="space-y-6">
        {employmentHistory.map((job, index) => (
          <div key={job.id} className="border-l-4 pl-6 pb-6" style={{ borderColor: 'var(--resume-primary)' }}>
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold" style={{ color: 'var(--resume-text-primary)' }}>
                  {job.title}
                </h3>
                <span className="text-sm font-medium" style={{ color: 'var(--resume-secondary)' }}>
                  {job.startYear} - {job.endYear}
                </span>
              </div>
              <p className="text-lg font-semibold mb-1" style={{ color: 'var(--resume-secondary)' }}>
                {job.company}
              </p>
              <p className="text-sm mb-3" style={{ color: 'var(--resume-gray-600)' }}>
                {job.location}
              </p>
              <div className="text-sm leading-relaxed" style={{ color: 'var(--resume-gray-700)' }}>
                {job.description.split('\n').map((line, index) => (
                  <p key={index} className="mb-1">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
