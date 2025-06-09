
import CategoriaBase from './CategoriaBase';
export default function SaudeScreen() {
  const dicas = [
    "Faça check-ups regulares.",
    "Use o SUS sempre que possível.",
    "Tenha um fundo para emergências médicas.",
    "Avalie se o plano de saúde atende suas necessidades."
  ];

  return (
    <CategoriaBase
      titulo="Saúde"
      icone="🏥"
      descricao="Engloba consultas, exames, medicamentos, plano de saúde, odontologia, terapias, entre outros."
      informacoes="Cuidar da saúde evita gastos ainda maiores no futuro. É uma despesa essencial que deve estar no planejamento mensal."
      dicas={dicas}
      corTema="#00897B"
    />
  );
}