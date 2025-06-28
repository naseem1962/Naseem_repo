export interface EmploymentHistory {
  id: string;
  title: string;
  company: string;
  location: string;
  startYear: string;
  endYear: string;
  description: string;
  type: 'primary' | 'accent';
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  university: string;
  location: string;
  startYear: string;
  endYear: string;
  type: 'primary' | 'accent';
}

export interface Skill {
  id: string;
  name: string;
  level: string;
  percentage: number;
}

export interface Language {
  id: string;
  name: string;
  code: string;
  proficiency: string;
  type: 'primary' | 'accent';
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  address: string;
}

export const personalInfo: PersonalInfo = {
  name: "Naseem Uz Zafar",
  title: "Experienced Mathematics Educator",
  subtitle: "Passionate About Conceptual Clarity and Student Success",
  email: "naseemn451@gmail.com",
  phone: "0333-3869055",
  address: "University Road, 75280 Karachi"
};

export const employmentHistory: EmploymentHistory[] = [
  {
    id: "1",
    title: "Senior Mathematics Instructor & Educational Consultant",
    company: "Private Tutoring Practice",
    location: "Karachi",
    startYear: "2007",
    endYear: "2024",
    description: "• Delivered personalized mathematics instruction to 200+ students across grades 1-12, focusing on foundational to advanced mathematical concepts\n• Designed and implemented customized curriculum frameworks resulting in 95% student improvement in standardized test scores\n• Utilized digital learning platforms including Khan Academy, GeoGebra, and interactive whiteboards to enhance student engagement\n• Developed assessment strategies and progress tracking systems to monitor individual student performance from elementary through secondary levels\n• Collaborated with parents and guardians to establish supportive learning environments and academic goals for K-12 students",
    type: "primary"
  },
  {
    id: "2",
    title: "Academic Coordinator & Administrative Manager",
    company: "New Country Grammar School",
    location: "Karachi",
    startYear: "2005",
    endYear: "2007",
    description: "• Coordinated academic programs for 500+ students across grades 1-12, ensuring curriculum alignment with national education standards\n• Managed faculty schedules, resource allocation, and academic calendar planning for K-12 educational delivery\n• Implemented student performance monitoring systems and conducted regular academic progress reviews for elementary and secondary students\n• Facilitated parent-teacher conferences and maintained comprehensive student academic records for grades 1-12\n• Led professional development workshops for teaching staff on modern K-12 pedagogical approaches and classroom management",
    type: "primary"
  },
  {
    id: "3",
    title: "Mathematics Department Head",
    company: "St. Andrew School",
    location: "Karachi",
    startYear: "1999",
    endYear: "2004",
    description: "• Led mathematics department with 8 faculty members, establishing comprehensive curriculum standards for grades 1-12\n• Developed innovative teaching methodologies incorporating visual learning aids and practical problem-solving techniques for elementary and secondary students\n• Mentored junior faculty members and conducted peer evaluations to maintain high teaching standards across all grade levels\n• Organized mathematics competitions and extracurricular activities to promote student interest in mathematics for grades 6-12\n• Achieved 90% student pass rate in national secondary school mathematics examinations through targeted intervention programs",
    type: "primary"
  },
  {
    id: "4",
    title: "Senior Mathematics Instructor",
    company: "La Candaina School",
    location: "Karachi",
    startYear: "1995",
    endYear: "1998",
    description: "• Specialized in advanced mathematics instruction for grades 9-12 students preparing for secondary school examinations\n• Developed comprehensive study materials and practice examinations aligned with national curriculum standards for secondary education\n• Implemented group learning strategies and peer tutoring programs to enhance collaborative learning among high school students\n• Maintained detailed student progress records and provided regular feedback to students and parents\n• Conducted remedial classes for struggling students in grades 9-12, achieving 85% improvement in mathematical competency",
    type: "primary"
  },
  {
    id: "5",
    title: "Mathematics Teacher",
    company: "Mount Hira School",
    location: "Karachi",
    startYear: "1986",
    endYear: "1990",
    description: "• Established strong mathematical foundations for grades 6-10 students through structured lesson planning and age-appropriate teaching methods\n• Created engaging classroom environments using hands-on learning activities and real-world problem applications for middle school students\n• Collaborated with colleagues to develop interdisciplinary projects connecting mathematics with science concepts for grades 6-10\n• Participated in continuous professional development programs to stay current with K-12 educational best practices\n• Built positive relationships with students, parents, and school administration to support elementary and middle school student academic success",
    type: "primary"
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Master of Science",
    field: "Mathematics",
    university: "Karachi University",
    location: "Karachi",
    startYear: "1984",
    endYear: "1986",
    type: "primary"
  },
  {
    id: "2",
    degree: "Bachelor of Science",
    field: "Mathematics",
    university: "Karachi University",
    location: "Karachi",
    startYear: "1980",
    endYear: "1982",
    type: "accent"
  }
];

export const skills: Skill[] = [
  {
    id: "1",
    name: "Mathematics Instruction & Pedagogy",
    level: "Expert",
    percentage: 95
  },
  {
    id: "2",
    name: "Digital Learning Platforms (Khan Academy, GeoGebra)",
    level: "Advanced",
    percentage: 85
  },
  {
    id: "3",
    name: "Interactive Whiteboard Technology",
    level: "Advanced",
    percentage: 80
  },
  {
    id: "4",
    name: "Student Assessment & Analytics",
    level: "Expert",
    percentage: 90
  },
  {
    id: "5",
    name: "Curriculum Development & Standards Alignment",
    level: "Advanced",
    percentage: 88
  },
  {
    id: "6",
    name: "Microsoft Office Suite (Excel, PowerPoint, Word)",
    level: "Advanced",
    percentage: 85
  },
  {
    id: "7",
    name: "Google Workspace (Classroom, Sheets, Docs)",
    level: "Advanced",
    percentage: 82
  },
  {
    id: "8",
    name: "Online Meeting Platforms (Zoom, Teams)",
    level: "Advanced",
    percentage: 80
  },
  {
    id: "9",
    name: "Educational Administration & Management",
    level: "Advanced",
    percentage: 82
  },
  {
    id: "10",
    name: "Student Progress Tracking Systems",
    level: "Advanced",
    percentage: 78
  }
];

export const languages: Language[] = [
  {
    id: "1",
    name: "English",
    code: "EN",
    proficiency: "Fluent",
    type: "primary"
  },
  {
    id: "2",
    name: "Urdu",
    code: "UR",
    proficiency: "Native",
    type: "accent"
  }
];
