import { GraduationCap } from "lucide-react";
import { Education } from "@/data/resume-data";

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 animate-slide-up">
      <h2 className="text-xl font-bold mb-6 flex items-center" style={{ color: 'var(--resume-primary)' }}>
        <GraduationCap className="mr-3" size={20} />
        EDUCATION
      </h2>
      
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id} className="mb-4">
            <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--resume-text-primary)' }}>
              {edu.degree} in {edu.field}
            </h3>
            <p className="text-base font-semibold mb-1" style={{ color: 'var(--resume-secondary)' }}>
              {edu.university}
            </p>
            <p className="text-sm" style={{ color: 'var(--resume-gray-600)' }}>
              {edu.location} | {edu.startYear} - {edu.endYear}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
