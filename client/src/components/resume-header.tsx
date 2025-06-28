import { Mail, Phone, MapPin, Download } from "lucide-react";
import { PersonalInfo } from "@/data/resume-data";
// Use the image from public directory
const profileImageUrl = "/profile.png";

interface ResumeHeaderProps {
  personalInfo: PersonalInfo;
  onDownload: () => void;
}

export default function ResumeHeader({ personalInfo, onDownload }: ResumeHeaderProps) {
  return (
    <header className="bg-white rounded-t-2xl shadow-lg p-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img 
            src={profileImageUrl}
            alt={`${personalInfo.name} - Professional Photo`}
            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
            style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)' }}
          />
        </div>
        
        {/* Personal Info */}
        <div className="text-center sm:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--resume-primary)' }}>
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl font-medium" style={{ color: 'var(--resume-secondary)' }}>
            {personalInfo.title}
          </p>
          <p className="text-lg mt-2" style={{ color: 'var(--resume-accent)' }}>
            {personalInfo.subtitle}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="flex items-center justify-center rounded-lg p-4 transition-colors" 
             style={{ backgroundColor: 'var(--resume-gray-50)' }}
             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--resume-gray-100)'}
             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--resume-gray-50)'}>
          <Mail className="mr-3" style={{ color: 'var(--resume-primary)' }} size={20} />
          <div className="text-sm">
            <p className="font-medium">Email</p>
            <p style={{ color: 'var(--resume-secondary)' }}>{personalInfo.email}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-center rounded-lg p-4 transition-colors"
             style={{ backgroundColor: 'var(--resume-gray-50)' }}
             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--resume-gray-100)'}
             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--resume-gray-50)'}>
          <Phone className="mr-3" style={{ color: 'var(--resume-primary)' }} size={20} />
          <div className="text-sm">
            <p className="font-medium">Phone</p>
            <p style={{ color: 'var(--resume-secondary)' }}>{personalInfo.phone}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-center rounded-lg p-4 transition-colors"
             style={{ backgroundColor: 'var(--resume-gray-50)' }}
             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--resume-gray-100)'}
             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--resume-gray-50)'}>
          <MapPin className="mr-3" style={{ color: 'var(--resume-primary)' }} size={20} />
          <div className="text-sm">
            <p className="font-medium">Location</p>
            <p style={{ color: 'var(--resume-secondary)' }}>Karachi, Pakistan</p>
          </div>
        </div>
        
        <button
          onClick={onDownload}
          className="flex items-center justify-center text-white rounded-lg p-4 transition-colors cursor-pointer no-print hover:opacity-90"
          style={{ backgroundColor: 'var(--resume-primary)' }}>
          <Download className="mr-3" size={20} />
          <div className="text-sm">
            <p className="font-medium">Download</p>
            <p>PDF Resume</p>
          </div>
        </button>
      </div>
    </header>
  );
}
