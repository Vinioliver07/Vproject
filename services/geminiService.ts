import { AiResponse } from "../types";

// Service disabled as per request to remove AI features.
// Kept as stub to prevent import errors in unused components.

export const analyzeProjectIdea = async (idea: string): Promise<AiResponse> => {
  console.warn("AI Service is currently disabled.");
  return {
    analysis: "O serviço de IA está temporariamente desativado.",
    recommendation: "Por favor, entre em contato diretamente conosco através do formulário abaixo."
  };
};