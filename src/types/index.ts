export interface CaseStudy {
  brief: string;
  problem: string;
  approach: string;
  craft: {
    pacing: string;
    soundDesign: string;
    transitions: string;
    storytelling: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  client?: string;
  year: string;
  description: string;
  role?: string;
  videoPreviewUrl: string; // URL to a muted, fast-loading MP4 preview
  videoFullUrl?: string;    // URL to full video (e.g., YouTube/Vimeo ID or raw MP4)
  videoRawUrl?: string;     // URL to RAW footage for comparison
  videoFinalUrl?: string;   // URL to FINAL edited footage for comparison
  posterUrl: string;        // High quality static frame
  caseStudy?: CaseStudy;
}

export interface TimelinePart {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string; // Short demonstration video URL
  icon: string; // Identifier for the icon to render
}
