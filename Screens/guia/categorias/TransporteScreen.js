
import CategoriaBase from './CategoriaBase';
export default function TransporteScreen() {
  const dicas = [
    "Agrupe compromissos para economizar trajetos.",
    "Use transporte público sempre que possível.",
    "Mantenha o veículo revisado.",
    "Considere alternativas como bicicleta ou carona."
  ];

  return (
    <CategoriaBase
      titulo="Transporte"
      icone="🚗"
      descricao="Inclui combustível, transporte público, aplicativos de corrida, manutenção de veículo, seguro, etc."
      informacoes="Pequenos trajetos diários geram grandes custos mensais. Planejamento e escolhas conscientes ajudam a reduzir gastos."
      dicas={dicas}
      corTema="#5D4037"
    />
  );
}