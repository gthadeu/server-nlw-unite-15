export function generateSlug(text: string): string {
  return text.toLowerCase()
      .normalize("NFD") // Normaliza os caracteres para remover acentos
      .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
      .replace(/[^\w\s]/g, "") // Remove os símbolos
      .replace(/\s+/g, "-"); // Substitui espaços por hífens
}