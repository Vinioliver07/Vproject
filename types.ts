export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  image?: string; // URL da imagem/screenshot do projeto
  imageColor: string; // Used for placeholder gradient
  features: string[];
}

export interface AiResponse {
  analysis: string;
  recommendation: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

// Analytics Type Definitions
declare global {
  interface Window {
    dataLayer: any[];
  }
}