import CategoriaBase from './CategoriaBase';
export default function AssinaturaScreen() {
  const dicas = [
    "Revise suas assinaturas mensalmente e cancele as que não usa",
    "Verifique se há planos compartilhados mais econômicos",
    "Considere alternativas gratuitas ou mais baratas",
    "Use aplicativos para monitorar todas suas assinaturas",
    "Negocie descontos anuais em vez de mensais"
  ];

  return (
    <CategoriaBase
      titulo="Assinatura"
      icone="📺"
      descricao="Assinaturas mensais incluem serviços como streaming (Netflix, Spotify), softwares (Adobe, Microsoft 365), clubes de assinatura (livros, vinhos, cosméticos), academias, entre outros."
      informacoes="Este tipo de gasto, muitas vezes considerado pequeno por ser recorrente, pode representar uma parcela significativa do orçamento ao final do mês. O principal problema é que muitas pessoas mantêm assinaturas que não utilizam com frequência, gerando desperdício de dinheiro."
      dicas={dicas}
      corTema="#1565C0"
    />
  );
}