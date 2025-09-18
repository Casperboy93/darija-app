export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number; // in minutes
  content?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  lessons: Lesson[];
}

export type LevelType = 'beginner' | 'intermediate' | 'advanced';