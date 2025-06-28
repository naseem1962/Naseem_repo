import { Languages } from "lucide-react";
import { Language } from "@/data/resume-data";

interface LanguagesSectionProps {
  languages: Language[];
}

export default function LanguagesSection({ languages }: LanguagesSectionProps) {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 animate-slide-up">
      <h2 className="text-xl font-bold mb-6 flex items-center" style={{ color: 'var(--resume-primary)' }}>
        <Languages className="mr-3" size={20} />
        LANGUAGES
      </h2>
      
      <div className="space-y-3">
        {languages.map((language) => (
          <div key={language.id} className="mb-3">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold" style={{ color: 'var(--resume-text-primary)' }}>
                {language.name}
              </span>
              <span className="text-sm font-medium" style={{ color: 'var(--resume-secondary)' }}>
                {language.proficiency}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
