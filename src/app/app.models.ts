export interface Link {
  link: string;
  title: string;
}

export interface Image {
  src: string;
  title: string;
}

export interface ContactInfo {
  email: string;
  whatsup: string;
  instagram: string;
  razgovormk: string;
}

export interface DisplayItem {
  title: string;
  image: Image;
  description?: string;
  link?: Link;
}

export interface QuestionAnswer {
  question: string;
  answer: string;
}
