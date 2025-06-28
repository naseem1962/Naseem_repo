import { Printer, Share2 } from "lucide-react";

interface ResumeFooterProps {
  onPrint: () => void;
  onShare: () => void;
}

export default function ResumeFooter({ onPrint, onShare }: ResumeFooterProps) {
  return (
    <footer className="bg-white rounded-b-2xl shadow-lg p-6 mt-6 text-center animate-fade-in">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="text-sm mb-4 sm:mb-0" style={{ color: 'var(--resume-secondary)' }}>
          <p>&copy; 2024 Naseem Uz Zafar. All rights reserved.</p>
        </div>
        <div className="flex space-x-4 no-print">
          <button 
            onClick={onPrint}
            className="text-white px-4 py-2 rounded-lg transition-colors flex items-center hover:opacity-90"
            style={{ backgroundColor: 'var(--resume-primary)' }}>
            <Printer className="mr-2" size={16} />
            Print Resume
          </button>
          <button 
            onClick={onShare}
            className="text-white px-4 py-2 rounded-lg transition-colors flex items-center hover:opacity-90"
            style={{ backgroundColor: 'var(--resume-accent)' }}>
            <Share2 className="mr-2" size={16} />
            Share
          </button>
        </div>
      </div>
    </footer>
  );
}
