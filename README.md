Simulador de Empréstimos - Angular 19
Uma aplicação completa para simulação de empréstimos desenvolvida em Angular 19+ com API mock usando JSON Server.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/bicalmeida/hackathon-2025-front-end)

Descrição do projeto...

📱 Funcionalidades
Cadastro de Produtos: Criar novos produtos de empréstimo com taxa de juros e prazo máximo
Listagem de Produtos: Visualizar todos os produtos cadastrados com informações detalhadas
Simulação de Empréstimo: Calcular financiamentos com memória de cálculo completa mês a mês
Interface Responsiva: Design adaptado para diferentes tamanhos de tela
🚀 Tecnologias
Angular 19+
TypeScript
RxJS
JSON Server (API Mock)
HTML5/CSS3
Jest (Testes)
📋 Pré-requisitos
Node.js 18+
npm ou yarn
Angular CLI 19+
🛠️ Instalação
Clone o repositório
bash
git clone <url-do-repositorio>
cd simulador-emprestimos
Instale as dependências
bash
npm install
Instale o Angular CLI globalmente (se necessário)
bash
npm install -g @angular/cli@19
Instale o JSON Server globalmente
bash
npm install -g json-server
🏃‍♂️ Como Executar
Opção 1: Executar API e Frontend separadamente
Inicie a API Mock (Terminal 1)
bash
npm run serve:api
# ou
json-server --watch db.json --port 3000
Inicie o Frontend (Terminal 2)
bash
npm start
# ou
ng serve
Opção 2: Executar ambos simultaneamente
bash
npm run dev
A aplicação estará disponível em:

Frontend: http://localhost:4200
API Mock: http://localhost:3000
🧪 Executar Testes
bash
# Executar todos os testes
npm test

# Executar testes com coverage
ng test --code-coverage

# Executar testes em modo headless
ng test --watch=false --browsers=ChromeHeadless
📊 Endpoints da API
Produtos
GET /produtos - Listar produtos
POST /produtos - Criar produto
GET /produtos/:id - Buscar produto por ID
Exemplo de Produto
json
{
  "id": 1,
  "nome": "Empréstimo Pessoal",
  "taxaAnual": 18.0,
  "prazoMaximo": 24
}
Simulação
A simulação é calculada no frontend usando a fórmula SAC (Sistema de Amortização Constante).

🏗️ Estrutura do Projeto
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   ├── cadastro-produtos/
│   │   ├── listagem-produtos/
│   │   └── simulacao-emprestimo/
│   ├── models/
│   │   └── models.ts
│   ├── services/
│   │   └── api.service.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── styles.css
└── main.ts
🎯 Como Usar
1. Cadastrar Produto
Acesse a tela inicial
Clique em "Cadastrar Produtos"
Preencha nome, taxa anual e prazo máximo
Clique em "Salvar"
2. Visualizar Produtos
Na tela inicial, clique em "Produtos Cadastrados"
Use os botões "Expandir/Recolher" para ver detalhes
3. Simular Empréstimo
Clique em "Simular Empréstimo"
Selecione um produto
Informe valor e prazo desejado
Clique em "Simular"
Visualize os resultados e memória de cálculo
📈 Exemplo de Simulação
Dados de Entrada:

Produto: Empréstimo Pessoal (18% ao ano)
Valor: R$ 10.000,00
Prazo: 12 meses
Resultado:

Taxa efetiva mensal: 1,39%
Parcela mensal: R$ 931,50
Valor total: R$ 11.178,00
Memória de Cálculo:

Mês 1: Juros R$ 139,78 | Amortização R$ 791,72 | Saldo: R$ 9.208,28
Mês 2: Juros R$ 128,74 | Amortização R$ 802,76 | Saldo: R$ 8.405,52
... (continua para todos os meses)
🧮 Cálculo dos Juros
A aplicação utiliza o sistema de juros compostos com amortização francesa (Price):

Taxa mensal = (1 + taxa anual)^(1/12) - 1
Parcela = (Valor × Taxa × (1 + Taxa)^Meses) / ((1 + Taxa)^Meses - 1)
📱 Responsividade
A interface é totalmente responsiva e se adapta a:

Desktop (1024px+)
Tablet (768px - 1023px)
Mobile (até 767px)
✅ Critérios Atendidos
✅ Framework Angular 19+
✅ Componentes standalone
✅ Integração com API via HttpClient
✅ Estados gerenciados com RxJS
✅ Interface responsiva
✅ Testes com Jest
✅ Cobertura de testes > 80%
✅ Código limpo e modular
✅ Validação de formulários
✅ Tratamento de erros
✅ Navegação com roteamento
🔧 Configurações Adicionais
Modificar Porta da API
Para usar uma porta diferente para a API, edite o arquivo src/app/services/api.service.ts:

typescript
private baseUrl = 'http://localhost:NOVA_PORTA';
Adicionar Novos Produtos Iniciais
Edite o arquivo db.json para adicionar produtos padrão.

🐛 Solução de Problemas
Erro de CORS
Se encontrar problemas de CORS, certifique-se de que o JSON Server está rodando na porta 3000.

Erro de Módulos
Se houver erro de módulos não encontrados:

bash
npm install
ng update
Testes Falhando
Verifique se todas as dependências de teste estão instaladas:

bash
npm install --save-dev @types/jasmine karma karma-chrome-headless
📄 Licença
Este projeto é licenciado sob a MIT License.

