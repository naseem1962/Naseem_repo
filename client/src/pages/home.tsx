import { useEffect } from "react";
import ResumeHeader from "@/components/resume-header";
import EmploymentSection from "@/components/employment-section";
import EducationSection from "@/components/education-section";
import SkillsSection from "@/components/skills-section";
import LanguagesSection from "@/components/languages-section";
import ResumeFooter from "@/components/resume-footer";
import { 
  personalInfo, 
  employmentHistory, 
  education, 
  skills, 
  languages 
} from "@/data/resume-data";

export default function Home() {
  useEffect(() => {
    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleDownload = () => {
    // Open print dialog which can be used to save as PDF
    window.print();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Naseem Uz Zafar - Resume',
          text: 'Experienced Mathematics and Physics Educator passionate about conceptual clarity and student success',
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
        fallbackShare();
      }
    } else {
      fallbackShare();
    }
  };

  const fallbackShare = () => {
    // Copy URL to clipboard as fallback
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Resume URL copied to clipboard!');
    }).catch(() => {
      alert('Unable to share. Please copy the URL manually.');
    });
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ResumeHeader 
          personalInfo={personalInfo} 
          onDownload={handleDownload}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <EmploymentSection employmentHistory={employmentHistory} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <EducationSection education={education} />
            <SkillsSection skills={skills} />
            <LanguagesSection languages={languages} />
          </div>
        </div>

        <ResumeFooter 
          onPrint={handlePrint}
          onShare={handleShare}
        />
      </div>
    </div>
  );
}
