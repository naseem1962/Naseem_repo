import { Star } from "lucide-react";
import { Skill } from "@/data/resume-data";

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 animate-slide-up">
      <h2 className="text-xl font-bold mb-6 flex items-center" style={{ color: 'var(--resume-primary)' }}>
        <Star className="mr-3" size={20} />
        TECHNICAL SKILLS & COMPETENCIES
      </h2>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.id} className="skill-item group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold" style={{ color: 'var(--resume-text-primary)' }}>
                {skill.name}
              </span>
              <span className="text-xs font-medium px-2 py-1 rounded-full" 
                    style={{ 
                      backgroundColor: 'var(--resume-gray-100)', 
                      color: 'var(--resume-secondary)' 
                    }}>
                {skill.level}
              </span>
            </div>
            <div className="w-full rounded-full h-2 mb-1" style={{ backgroundColor: 'var(--resume-gray-200)' }}>
              <div 
                className="h-2 rounded-full transition-all duration-1000 ease-out group-hover:brightness-110"
                style={{ 
                  width: `${skill.percentage}%`,
                  background: index % 2 === 0 
                    ? `linear-gradient(90deg, var(--resume-primary), var(--resume-accent))` 
                    : `linear-gradient(90deg, var(--resume-accent), var(--resume-primary))`,
                  animationDelay: `${index * 0.1}s`
                }}
              />
            </div>
            <div className="text-xs text-right" style={{ color: 'var(--resume-gray-500)' }}>
              {skill.percentage}%
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--resume-gray-50)' }}>
        <p className="text-xs" style={{ color: 'var(--resume-gray-600)' }}>
          <strong>Key Technologies:</strong> Khan Academy, GeoGebra, Microsoft Office 365, Google Workspace, 
          Zoom, Microsoft Teams, Interactive Whiteboards, Student Information Systems
        </p>
      </div>
    </section>
  );
}
