export interface Project {
  company: string;
  description: string;
  keywords: string[];
  skills: string[];
  image: {
    path: string;
    alt: string;
    thumbNail: string;
  };
  ongoing: boolean;
  previewLink: string;
}
