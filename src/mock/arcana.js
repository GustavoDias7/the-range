const majorArcana = [
  {
    name: "O Louco",
    meaning: "Novos começos, inocência, espontaneidade.",
  },
  {
    name: "O Mago",
    meaning: "Manifestação, habilidade, poder.",
  },
  {
    name: "A Sacerdotisa",
    meaning: "Intuição, mistério, conhecimento interior.",
  },
  {
    name: "A Imperatriz",
    meaning: "Fertilidade, abundância, nutrição.",
  },
  {
    name: "O Imperador",
    meaning: "Autoridade, estrutura, estabilidade.",
  },
  {
    name: "O Hierofante",
    meaning: "Tradição, conformidade, orientação espiritual.",
  },
  {
    name: "Os Amantes",
    meaning: "Relacionamentos, escolhas, união.",
  },
  {
    name: "A Carruagem",
    meaning: "Controle, determinação, vitória.",
  },
  {
    name: "A Justiça",
    meaning: "Equilíbrio, responsabilidade, discernimento.",
  },
  {
    name: "O Eremita",
    meaning: "Solidão, reflexão, sabedoria interior.",
  },
  {
    name: "A Roda da Fortuna",
    meaning: "Sorte, destino, mudança.",
  },
  {
    name: "A Força",
    meaning: "Coragem, compaixão, domínio sobre desafios.",
  },
  {
    name: "O Enforcado",
    meaning: "Sacrifício, suspensão, mudança de perspectiva.",
  },
  {
    name: "A Morte",
    meaning: "Transformação, fim de um ciclo, renascimento.",
  },
  {
    name: "A Temperança",
    meaning: "Equilíbrio, moderação, harmonia.",
  },
  {
    name: "O Diabo",
    meaning: "Materialismo, ilusão, tentação.",
  },
  {
    name: "A Torre",
    meaning: "Destruição, revelação, mudança abrupta.",
  },
  {
    name: "A Estrela",
    meaning: "Esperança, inspiração, orientação espiritual.",
  },
  {
    name: "A Lua",
    meaning: "Ilusão, confusão, intuição.",
  },
  {
    name: "O Sol",
    meaning: "Clareza, alegria, sucesso.",
  },
  {
    name: "O Julgamento",
    meaning: "Avaliação, renovação, chamado à ação.",
  },
  {
    name: "O Mundo",
    meaning: "Realização, integração, sucesso total.",
  },
];

const minorArcana = [
  { name: "Ás de Copas", meaning: "Novos começos emocionais, amor, alegria." },
  { name: "Dois de Copas", meaning: "Parceria, amor, união." },
  { name: "Três de Copas", meaning: "Celebração, amizade, festividade." },
  {
    name: "Quatro de Copas",
    meaning: "Contemplação, descontentamento, busca interior.",
  },
  { name: "Cinco de Copas", meaning: "Perda, arrependimento, tristeza." },
  { name: "Seis de Copas", meaning: "Nostalgia, infância, memórias." },
  { name: "Sete de Copas", meaning: "Ilusão, escolhas, fantasia." },
  { name: "Oito de Copas", meaning: "Abandono, busca espiritual, desilusão." },
  { name: "Nove de Copas", meaning: "Felicidade, contentamento, realização." },
  { name: "Dez de Copas", meaning: "Harmonia familiar, felicidade, paz." },
  {
    name: "Valete de Copas",
    meaning: "Mensageiro emocional, jovialidade, sensibilidade.",
  },
  { name: "Rainha de Copas", meaning: "Intuição, compaixão, empatia." },
  {
    name: "Rei de Copas",
    meaning: "Maturidade emocional, compreensão, controle emocional.",
  },
  { name: "Ás de Espadas", meaning: "Nova ideia, clareza mental, verdade." },
  { name: "Dois de Espadas", meaning: "Indecisão, escolha difícil, impasse." },
  { name: "Três de Espadas", meaning: "Dor emocional, traição, desgosto." },
  { name: "Quatro de Espadas", meaning: "Descanso, recuperação, pausa." },
  { name: "Cinco de Espadas", meaning: "Conflito, derrota, desonestidade." },
  { name: "Seis de Espadas", meaning: "Transição, superação, mudança." },
  { name: "Sete de Espadas", meaning: "Furtividade, trapaça, evasão." },
  { name: "Oito de Espadas", meaning: "Restrição, confinamento, cegueira." },
  { name: "Nove de Espadas", meaning: "Angústia, ansiedade, preocupação." },
  { name: "Dez de Espadas", meaning: "Ruína, colapso, fim de um ciclo." },
  {
    name: "Valete de Espadas",
    meaning: "Comunicação direta, análise, lógica.",
  },
  {
    name: "Rainha de Espadas",
    meaning: "Intelecto, discernimento, objetividade.",
  },
  {
    name: "Rei de Espadas",
    meaning: "Liderança intelectual, autoridade, justiça.",
  },
  {
    name: "Ás de Ouros",
    meaning: "Nova oportunidade material, prosperidade, potencial.",
  },
  { name: "Dois de Ouros", meaning: "Equilíbrio, adaptação, malabarismo." },
  {
    name: "Três de Ouros",
    meaning: "Colaboração, trabalho em equipe, habilidade.",
  },
  { name: "Quatro de Ouros", meaning: "Apego, segurança, ganância." },
  {
    name: "Cinco de Ouros",
    meaning: "Adversidade financeira, escassez, isolamento.",
  },
  { name: "Seis de Ouros", meaning: "Generosidade, caridade, reciprocidade." },
  { name: "Sete de Ouros", meaning: "Avaliação, paciência, investimento." },
  { name: "Oito de Ouros", meaning: "Dedicação, aperfeiçoamento, habilidade." },
  { name: "Nove de Ouros", meaning: "Conforto material, independência, luxo." },
  { name: "Dez de Ouros", meaning: "Riqueza, estabilidade, herança." },
  {
    name: "Valete de Ouros",
    meaning: "Mensageiro material, diligência, prática.",
  },
  { name: "Rainha de Ouros", meaning: "Abundância, praticidade, segurança." },
  {
    name: "Rei de Ouros",
    meaning: "Estabilidade financeira, realização material, prosperidade.",
  },
  {
    name: "Ás de Paus",
    meaning: "Novos empreendimentos, inspiração, energia.",
  },
  { name: "Dois de Paus", meaning: "Planejamento, decisão, perspectiva." },
  { name: "Três de Paus", meaning: "Expansão, colaboração, oportunidade." },
  { name: "Quatro de Paus", meaning: "Celebração, realização, comunidade." },
  { name: "Cinco de Paus", meaning: "Conflito, competição, desafio." },
  { name: "Seis de Paus", meaning: "Sucesso, reconhecimento, vitória." },
  { name: "Sete de Paus", meaning: "Defesa, perseverança, desafios." },
  { name: "Oito de Paus", meaning: "Movimento rápido, viagem, comunicação." },
  { name: "Nove de Paus", meaning: "Resiliência, força, defesa." },
  { name: "Dez de Paus", meaning: "Sobrecarga, responsabilidade, fardo." },
  {
    name: "Valete de Paus",
    meaning: "Mensageiro de ação, entusiasmo, aventura.",
  },
  { name: "Rainha de Paus", meaning: "Confiança, carisma, liderança." },
  { name: "Rei de Paus", meaning: "Liderança, visão, empreendedorismo." },
];

export default { majorArcana, minorArcana };
