import { Project, TimelinePart } from "@/types";

// PLACEHOLDER DATA - Replace with real project information
export const projects: Project[] = [
  {
    id: "001",
    title: "THE MINDSET PROJECT",
    category: "Motivation / Growth",
    year: "2024",
    description: "An impactful narrative piece exploring personal growth and motivation, driven by emotive pacing and a cohesive visual flow.",
    role: "Edited by Rishu",
    isVertical: true,
    videoPreviewUrl: "/videos/project-1.mp4",
    posterUrl: "/images/poster-1.jpg",
  },
  {
    id: "002",
    title: "IRON FLOW",
    category: "Fitness / Gym",
    year: "2024",
    description: "High-intensity athletic edit utilizing aggressive speed-ramps, frame-perfect beat sync, and impactful sound effects.",
    role: "Edited & Sound Designed by Rishu",
    isVertical: true,
    videoPreviewUrl: "/videos/project-2.mp4",
    posterUrl: "/images/poster-2.jpg",
  },
  {
    id: "003",
    title: "THE FONT TRILOGY",
    category: "Tutorial / Creative",
    year: "2024",
    description: "A dynamic talking-head educational breakdown sharing styling workflows, clean overlay graphics, and engaging pacing secrets.",
    role: "Edited & Animated by Rishu",
    isVertical: false,
    videoPreviewUrl: "/videos/project-3.mp4",
    posterUrl: "/images/poster-3.jpg",
  },
  {
    id: "004",
    title: "GRIND ZONE",
    category: "Fitness / Gym",
    year: "2024",
    description: "A hard-hitting gym aesthetic cut driven by rapid-fire transition design, deep bass impacts, and high-energy pacing.",
    role: "Edited & Sound Designed by Rishu",
    isVertical: true,
    videoPreviewUrl: "/videos/project-4.mp4",
    posterUrl: "/images/poster-4.jpg",
  }
];

export const timelineParts: TimelinePart[] = [
  {
    id: "cutting",
    title: "CUTTING",
    subtitle: "Rhythm & Pacing",
    description: "Every cut is a decision. Every frame counts.",
    videoUrl: "/videos/timeline-cutting.mp4",
    icon: "scissors"
  },
  {
    id: "sound",
    title: "SOUND DESIGN",
    subtitle: "Atmosphere & Emotion",
    description: "Sound shapes perception. Silence shapes tension.",
    videoUrl: "/videos/timeline-sound.mp4",
    icon: "volume"
  },
  {
    id: "motion",
    title: "MOTION",
    subtitle: "Flow & Energy",
    description: "Movement guides the eye. Stillness commands attention.",
    videoUrl: "/videos/timeline-motion.mp4",
    icon: "move"
  },
  {
    id: "story",
    title: "STORY",
    subtitle: "Structure & Meaning",
    description: "What you leave out matters as much as what you keep.",
    videoUrl: "/videos/timeline-story.mp4",
    icon: "film"
  }
];
