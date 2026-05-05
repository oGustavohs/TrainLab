# TrainLab

Comecei esse projeto porque já fui formado em Educação Física — e via todo dia gente treinando errado, sem estrutura, sem progressão. Resolvi juntar o que sei sobre treino com o que estou aprendendo em desenvolvimento e construir algo real.

Não é um exercício de curso. É uma plataforma funcional que avalia o perfil do usuário, define o nível de condicionamento e monta treinos personalizados com ilustrações e cronômetro integrado.

**[→ Acessar o TrainLab](https://ogustavohs.github.io/TrainLab/)**

---

## O que ele faz

O usuário responde algumas perguntas sobre frequência, experiência e objetivo. Com base nas respostas, o sistema define o nível (iniciante, intermediário ou avançado) e gera um plano de treino completo — com mais de 50 exercícios ilustrados, descanso cronometrado e histórico de sessões.

Do cadastro ao primeiro treino em menos de 3 minutos.

---

## Por baixo dos panos

Construído só com HTML, CSS e JavaScript puro — sem framework, sem biblioteca externa. A proposta foi resolver o problema com as ferramentas base antes de depender de atalhos.

A lógica de personalização, o cronômetro e todo o fluxo de onboarding foram feitos na mão, o que me fez entender de verdade como o JavaScript se comporta no DOM.

```
index.html   → estrutura e fluxo de páginas
style.css    → layout, animações, responsividade
script.js    → lógica de avaliação, treinos e cronômetro
```

---

## O que aprendi

Pensar em produto completo é diferente de pensar em código. Tive que mapear o fluxo inteiro — o que o usuário vê primeiro, o que acontece se ele errar, como ele volta atrás. Isso mudou como escrevo código.

---

## Próximas versões

- [ ] Salvar histórico de treinos no localStorage
- [ ] Migrar lógica para React
- [ ] Integração com banco de dados para contas permanentes
- [ ] Filtros por equipamento disponível e limitações físicas

---

Feito por **[Gustavo Henrique](https://github.com/oGustavohs)** · [Portfólio](https://ogustavohs.github.io/Front-End-Developed/) · [LinkedIn](https://www.linkedin.com/in/gustavo-henrique-3916ba297/)
