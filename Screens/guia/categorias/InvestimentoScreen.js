
import CategoriaBase from './CategoriaBase';
export default function InvestimentoScreen() {
  const dicas = [
    "Diversifique seus investimentos.",
    "Estude sobre o mercado antes de aplicar.",
    "Invista com objetivos claros.",
    "Revise sua carteira periodicamente."
  ];

  return (
    <CategoriaBase
      titulo="Investimento"
      icone="📈"
      descricao="Envolve aplicações financeiras como poupança, renda fixa, ações, fundos imobiliários, criptomoedas, entre outros."
      informacoes="  Investimentos são importantes para construir patrimônio e garantir segurança financeira. É fundamental entender seu perfil de risco."
      dicas={dicas}
      corTema="#C62828"
    />
  );
}