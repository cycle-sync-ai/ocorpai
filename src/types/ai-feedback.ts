export interface AIFeedback {
  id: string;
  lessonId: string;
  studentId: string;
  submissionId: string;
  timestamp: Date;
  overallScore: number; // 0-100
  feedback: {
    strengths: string[];
    improvements: string[];
    specificRecommendations: string[];
  };
  technicalAssessment: {
    perspective: number; // 0-100
    proportions: number; // 0-100
    lineQuality: number; // 0-100
    composition: number; // 0-100
    creativity: number; // 0-100
  };
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  nextSteps: {
    recommendedLessons: string[];
    practiceAreas: string[];
    resources: string[];
  };
  aiConfidence: number; // 0-100
}

export interface Submission {
  id: string;
  studentId: string;
  lessonId: string;
  type: 'sketch' | '3d_model' | 'presentation' | 'portfolio';
  files: {
    images?: string[];
    videos?: string[];
    documents?: string[];
    models?: string[];
  };
  description?: string;
  timestamp: Date;
  status: 'pending' | 'processing' | 'reviewed' | 'completed';
}

export interface AIAnalysisResult {
  submissionId: string;
  analysis: {
    detectedElements: string[];
    qualityMetrics: {
      clarity: number;
      technique: number;
      creativity: number;
      accuracy: number;
    };
    commonMistakes: string[];
    strengths: string[];
    improvementSuggestions: string[];
  };
  recommendations: {
    nextLessons: string[];
    practiceExercises: string[];
    skillFocus: string[];
  };
  confidence: number;
}

export interface ProgressTracking {
  studentId: string;
  currentLevel: string;
  currentTerm: string;
  completedLessons: string[];
  skillScores: {
    [skill: string]: number;
  };
  timeSpent: {
    [lessonId: string]: number; // in minutes
  };
  achievements: string[];
  streak: number; // consecutive days
  lastActivity: Date;
}

export interface ExpertMentor {
  id: string;
  name: string;
  title: string;
  company: string;
  experience: number; // years
  specialties: string[];
  availability: {
    timezone: string;
    schedule: {
      [day: string]: string[];
    };
  };
  rating: number;
  bio: string;
  profileImage: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
}

export interface MentorshipSession {
  id: string;
  mentorId: string;
  studentId: string;
  type: 'portfolio_review' | 'skill_guidance' | 'career_advice' | 'live_workshop';
  scheduledTime: Date;
  duration: number; // minutes
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  feedback?: string;
  recordingUrl?: string;
}
