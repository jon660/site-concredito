const produtos = [
  {
    titulo: 'Antecipação do FGTS',
    texto:
      'Antecipe parcelas do seu saldo do FGTS com processo simples e atendimento especializado.',
  },
  {
    titulo: 'Crédito CLT',
    texto:
      'Soluções para trabalhadores com carteira assinada, de acordo com análise e disponibilidade.',
  },
  {
    titulo: 'Crédito com garantia veicular',
    texto:
      'Use seu veículo como garantia e consulte possibilidades de crédito com condições diferenciadas.',
  },
  {
    titulo: 'Outras soluções',
    texto:
      'Nossa equipe analisa seu perfil e orienta sobre as opções disponíveis para o seu momento.',
  },
]

const etapas = [
  'Escolha a solução que mais combina com você.',
  'Preencha seus dados de contato.',
  'Nossa equipe analisa sua solicitação.',
  'Um consultor entra em contato para orientar os próximos passos.',
]

const perguntas = [
  {
    pergunta: 'A solicitação garante aprovação?',
    resposta:
      'Não. Toda operação depende de análise, regras da instituição financeira, disponibilidade do produto e perfil do cliente.',
  },
  {
    pergunta: 'Preciso pagar para solicitar uma análise?',
    resposta:
      'Não. O envio da solicitação de atendimento pelo site não tem custo.',
  },
  {
    pergunta: 'Quanto tempo leva para receber atendimento?',
    resposta:
      'O tempo pode variar conforme a demanda, mas nossa equipe busca realizar o contato o mais rápido possível.',
  },
]

export default function Home() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logoArea}>
          <div style={styles.logoIcon}>CC</div>

          <div>
            <strong style={styles.logoText}>
              CON<span style={styles.cyan}>CRÉDITO</span>
            </strong>

            <div style={styles.logoSub}>
              SOLUÇÕES FINANCEIRAS
            </div>
          </div>
        </div>

        <nav style={styles.nav}>
          <a href="#produtos" style={styles.navLink}>
            Soluções
          </a>

          <a href="#como-funciona" style={styles.navLink}>
            Como funciona
          </a>

          <a href="#duvidas" style={styles.navLink}>
            Dúvidas
          </a>

          <a href="#simulacao" style={styles.navButton}>
            Quero atendimento
          </a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            CONCRÉDITO • SOLUÇÕES FINANCEIRAS
          </div>

          <h1 style={styles.heroTitle}>
            Crédito para realizar
            <span style={styles.heroHighlight}>
              {' '}
              seus planos.
            </span>
          </h1>

          <p style={styles.heroText}>
            Soluções financeiras com atendimento humano,
            orientação simples e suporte em cada etapa da sua
            solicitação.
          </p>

          <div style={styles.heroActions}>
            <a href="#simulacao" style={styles.primaryButton}>
              Quero uma análise
            </a>

            <a href="#produtos" style={styles.secondaryButton}>
              Conhecer soluções
            </a>
          </div>

          <div style={styles.heroTrust}>
            <span>✓ Atendimento especializado</span>
            <span>✓ Processo simples</span>
            <span>✓ Sem promessa de aprovação</span>
          </div>
        </div>

        <div style={styles.heroPanel}>
          <div style={styles.heroPanelGlow} />

          <div style={styles.heroPanelContent}>
            <div style={styles.panelBadge}>ATENDIMENTO</div>

            <h2 style={styles.panelTitle}>
              Encontre uma solução para o seu momento.
            </h2>

            <p style={styles.panelText}>
              Preencha seus dados e nossa equipe entra em
              contato para entender sua necessidade.
            </p>

            <div style={styles.fakeCard}>
              <div style={styles.fakeLabel}>
                Nome completo
              </div>
              <div style={styles.fakeInput}>
                Seu nome
              </div>
            </div>

            <div style={styles.fakeCard}>
              <div style={styles.fakeLabel}>
                WhatsApp
              </div>
              <div style={styles.fakeInput}>
                (00) 00000-0000
              </div>
            </div>

            <div style={styles.fakeButton}>
              Solicitar atendimento
            </div>

            <small style={styles.panelDisclaimer}>
              A solicitação não garante aprovação de crédito.
            </small>
          </div>
        </div>
      </section>

      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <strong style={styles.statNumber}>100%</strong>
            <span style={styles.statText}>
              Atendimento digital
            </span>
          </div>

          <div style={styles.statCard}>
            <strong style={styles.statNumber}>+ Agilidade</strong>
            <span style={styles.statText}>
              Solicitação simples e rápida
            </span>
          </div>

          <div style={styles.statCard}>
            <strong style={styles.statNumber}>Humano</strong>
            <span style={styles.statText}>
              Você fala com um consultor
            </span>
          </div>
        </div>
      </section>

      <section id="produtos" style={styles.lightSection}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionEyebrow}>
            NOSSAS SOLUÇÕES
          </span>

          <h2 style={styles.sectionTitle}>
            Escolha o caminho que mais combina com você.
          </h2>

          <p style={styles.sectionText}>
            Consulte as opções disponíveis e fale com nossa
            equipe para entender qual solução pode fazer
            sentido para o seu perfil.
          </p>
        </div>

        <div style={styles.productsGrid}>
          {produtos.map((produto, index) => (
            <article key={produto.titulo} style={styles.productCard}>
              <div style={styles.productNumber}>
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3 style={styles.productTitle}>
                {produto.titulo}
              </h3>

              <p style={styles.productText}>
                {produto.texto}
              </p>

              <a href="#simulacao" style={styles.productLink}>
                Quero saber mais →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        id="como-funciona"
        style={styles.darkSection}
      >
        <div style={styles.sectionHeaderDark}>
          <span style={styles.sectionEyebrowDark}>
            COMO FUNCIONA
          </span>

          <h2 style={styles.sectionTitleDark}>
            Simples do início ao atendimento.
          </h2>
        </div>

        <div style={styles.stepsGrid}>
          {etapas.map((etapa, index) => (
            <div key={etapa} style={styles.stepCard}>
              <div style={styles.stepNumber}>
                {index + 1}
              </div>

              <p style={styles.stepText}>
                {etapa}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.trustSection}>
        <div style={styles.trustContent}>
          <div>
            <span style={styles.sectionEyebrow}>
              CONFIANÇA E TRANSPARÊNCIA
            </span>

            <h2 style={styles.sectionTitle}>
              Informação clara antes de qualquer decisão.
            </h2>

            <p style={styles.sectionText}>
              A ConCrédito atua com orientação e
              atendimento. Nenhuma solicitação representa
              garantia de aprovação, liberação de valor ou
              contratação.
            </p>
          </div>

          <div style={styles.trustList}>
            <div style={styles.trustItem}>
              <span style={styles.check}>✓</span>
              <div>
                <strong>Sem promessa falsa</strong>
                <p style={styles.trustItemText}>
                  Aprovação depende de análise.
                </p>
              </div>
            </div>

            <div style={styles.trustItem}>
              <span style={styles.check}>✓</span>
              <div>
                <strong>Atendimento contextualizado</strong>
                <p style={styles.trustItemText}>
                  Nossa equipe entende sua necessidade antes
                  de orientar.
                </p>
              </div>
            </div>

            <div style={styles.trustItem}>
              <span style={styles.check}>✓</span>
              <div>
                <strong>Proteção dos dados</strong>
                <p style={styles.trustItemText}>
                  Dados utilizados para atendimento da
                  solicitação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="simulacao" style={styles.formSection}>
        <div style={styles.formIntro}>
          <span style={styles.sectionEyebrowDark}>
            FALE COM A CONCRÉDITO
          </span>

          <h2 style={styles.sectionTitleDark}>
            Quer receber uma análise?
          </h2>

          <p style={styles.formIntroText}>
            Preencha os dados ao lado. Na próxima etapa vamos
            conectar este formulário diretamente à nossa
            Central de Leads.
          </p>
        </div>

        <form style={styles.formCard}>
          <label style={styles.label}>
            Nome completo
            <input
              name="nome"
              placeholder="Digite seu nome"
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            WhatsApp
            <input
              name="telefone"
              placeholder="(00) 00000-0000"
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Qual solução você procura?
            <select name="produto" style={styles.input}>
              <option>Selecione</option>
              <option>Antecipação do FGTS</option>
              <option>Crédito CLT</option>
              <option>
                Crédito com garantia veicular
              </option>
              <option>Outra solução</option>
            </select>
          </label>

          <label style={styles.consent}>
            <input type="checkbox" />
            <span>
              Autorizo o contato da equipe da ConCrédito
              referente a esta solicitação.
            </span>
          </label>

          <button type="button" style={styles.formButton}>
            Solicitar atendimento
          </button>

          <p style={styles.formDisclaimer}>
            O envio do formulário não garante aprovação ou
            contratação de crédito.
          </p>
        </form>
      </section>

      <section id="duvidas" style={styles.lightSection}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionEyebrow}>
            PERGUNTAS FREQUENTES
          </span>

          <h2 style={styles.sectionTitle}>
            Dúvidas comuns antes de solicitar atendimento.
          </h2>
        </div>

        <div style={styles.faqGrid}>
          {perguntas.map((item) => (
            <article key={item.pergunta} style={styles.faqCard}>
              <h3 style={styles.faqTitle}>
                {item.pergunta}
              </h3>

              <p style={styles.faqText}>
                {item.resposta}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerTop}>
          <div>
            <strong style={styles.footerLogo}>
              CON<span style={styles.cyan}>CRÉDITO</span>
            </strong>

            <p style={styles.footerText}>
              Soluções financeiras com atendimento simples,
              humano e transparente.
            </p>
          </div>

          <div style={styles.footerLinks}>
            <a href="#produtos" style={styles.footerLink}>
              Soluções
            </a>
            <a href="#como-funciona" style={styles.footerLink}>
              Como funciona
            </a>
            <a href="#simulacao" style={styles.footerLink}>
              Atendimento
            </a>
          </div>
        </div>

        <div style={styles.footerBottom}>
          © 2026 ConCrédito • Soluções Financeiras
        </div>
      </footer>
    </main>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    margin: 0,
    minHeight: '100vh',
    fontFamily:
      'Arial, Helvetica, sans-serif',
    background: '#ffffff',
    color: '#11223a',
  },

  header: {
    maxWidth: 1180,
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },

  logoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },

  logoIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    background:
      'linear-gradient(135deg,#071b3f,#0baed1)',
    color: '#fff',
    display: 'grid',
    placeItems: 'center',
    fontWeight: 900,
    fontSize: 15,
    boxShadow:
      '0 10px 24px rgba(6,68,120,.2)',
  },

  logoText: {
    fontSize: 22,
    letterSpacing: 0.7,
    color: '#071b3f',
  },

  cyan: {
    color: '#0eb8dc',
  },

  logoSub: {
    fontSize: 9,
    letterSpacing: 2.6,
    marginTop: 3,
    color: '#697b91',
  },

  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    flexWrap: 'wrap',
  },

  navLink: {
    color: '#31445d',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 700,
  },

  navButton: {
    color: '#fff',
    textDecoration: 'none',
    padding: '11px 16px',
    borderRadius: 10,
    background: '#0d8fc0',
    fontWeight: 800,
    fontSize: 14,
  },

  hero: {
    minHeight: '650px',
    padding: '70px 20px',
    background:
      'radial-gradient(circle at 80% 20%,rgba(21,190,222,.22),transparent 30%),linear-gradient(135deg,#020f27 0%,#082c57 52%,#064a83 100%)',
    color: '#fff',
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit,minmax(300px,1fr))',
    gap: 50,
    alignItems: 'center',
  },

  heroContent: {
    width: '100%',
    maxWidth: 720,
    marginLeft: 'auto',
  },

  badge: {
    display: 'inline-flex',
    padding: '8px 12px',
    borderRadius: 999,
    border:
      '1px solid rgba(73,216,240,.35)',
    background:
      'rgba(28,189,220,.1)',
    color: '#75ddf2',
    fontWeight: 800,
    fontSize: 12,
    letterSpacing: 0.6,
  },

  heroTitle: {
    fontSize: 'clamp(44px,7vw,78px)',
    lineHeight: 1.02,
    margin: '24px 0 18px',
    maxWidth: 780,
  },

  heroHighlight: {
    color: '#1cc4e4',
  },

  heroText: {
    maxWidth: 670,
    color: '#d1e4f5',
    fontSize: 19,
    lineHeight: 1.65,
    margin: 0,
  },

  heroActions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 30,
  },

  primaryButton: {
    padding: '16px 23px',
    borderRadius: 12,
    background: '#15bfdf',
    color: '#04213d',
    textDecoration: 'none',
    fontWeight: 900,
  },

  secondaryButton: {
    padding: '16px 23px',
    borderRadius: 12,
    border:
      '1px solid rgba(255,255,255,.35)',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 800,
    background:
      'rgba(255,255,255,.04)',
  },

  heroTrust: {
    display: 'flex',
    gap: 18,
    flexWrap: 'wrap',
    marginTop: 30,
    color: '#9dc1da',
    fontSize: 13,
  },

  heroPanel: {
    width: '100%',
    maxWidth: 470,
    marginRight: 'auto',
    position: 'relative',
  },

  heroPanelGlow: {
    position: 'absolute',
    inset: -20,
    borderRadius: 40,
    background:
      'rgba(15,179,214,.13)',
    filter: 'blur(30px)',
  },

  heroPanelContent: {
    position: 'relative',
    padding: 28,
    borderRadius: 24,
    background:
      'rgba(5,27,54,.84)',
    border:
      '1px solid rgba(113,216,238,.22)',
    boxShadow:
      '0 25px 70px rgba(0,0,0,.25)',
  },

  panelBadge: {
    fontSize: 11,
    color: '#5edaf0',
    fontWeight: 900,
    letterSpacing: 1.5,
  },

  panelTitle: {
    fontSize: 30,
    lineHeight: 1.12,
    margin: '12px 0',
  },

  panelText: {
    color: '#b9d2e4',
    lineHeight: 1.6,
  },

  fakeCard: {
    marginTop: 14,
  },

  fakeLabel: {
    fontSize: 12,
    color: '#b5c9d9',
    marginBottom: 5,
  },

  fakeInput: {
    padding: '14px 15px',
    background:
      'rgba(255,255,255,.08)',
    border:
      '1px solid rgba(255,255,255,.12)',
    borderRadius: 10,
    color: '#7fa3ba',
  },

  fakeButton: {
    marginTop: 18,
    padding: 15,
    textAlign: 'center',
    borderRadius: 10,
    background: '#17bfdc',
    color: '#052440',
    fontWeight: 900,
  },

  panelDisclaimer: {
    display: 'block',
    marginTop: 12,
    color: '#7fa0b7',
    textAlign: 'center',
  },

  statsSection: {
    padding: '0 20px',
    marginTop: -35,
    position: 'relative',
    zIndex: 2,
  },

  statsGrid: {
    maxWidth: 1050,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit,minmax(220px,1fr))',
    gap: 14,
  },

  statCard: {
    background: '#fff',
    borderRadius: 17,
    padding: 24,
    boxShadow:
      '0 12px 35px rgba(9,45,84,.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
  },

  statNumber: {
    fontSize: 24,
    color: '#0879ae',
  },

  statText: {
    color: '#62738a',
  },

  lightSection: {
    padding: '90px 20px',
    maxWidth: 1180,
    margin: '0 auto',
  },

  sectionHeader: {
    maxWidth: 720,
    marginBottom: 40,
  },

  sectionEyebrow: {
    color: '#0789b8',
    fontWeight: 900,
    fontSize: 12,
    letterSpacing: 1.7,
  },

  sectionTitle: {
    fontSize: 'clamp(32px,5vw,48px)',
    lineHeight: 1.12,
    margin: '13px 0',
    color: '#092341',
  },

  sectionText: {
    fontSize: 17,
    color: '#66798f',
    lineHeight: 1.65,
    margin: 0,
  },

  productsGrid: {
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit,minmax(240px,1fr))',
    gap: 16,
  },

  productCard: {
    padding: 25,
    borderRadius: 18,
    background: '#f7fafd',
    border:
      '1px solid #e4edf4',
  },

  productNumber: {
    color: '#14afd0',
    fontWeight: 900,
    fontSize: 13,
  },

  productTitle: {
    color: '#0a2a4d',
    fontSize: 21,
    marginBottom: 10,
  },

  productText: {
    color: '#687b90',
    lineHeight: 1.6,
  },

  productLink: {
    color: '#087caf',
    fontWeight: 800,
    textDecoration: 'none',
  },

  darkSection: {
    padding: '90px 20px',
    background:
      'linear-gradient(135deg,#04142c,#092f59)',
    color: '#fff',
  },

  sectionHeaderDark: {
    maxWidth: 720,
    margin: '0 auto 40px',
    textAlign: 'center',
  },

  sectionEyebrowDark: {
    color: '#55d7ee',
    fontWeight: 900,
    fontSize: 12,
    letterSpacing: 1.8,
  },

  sectionTitleDark: {
    fontSize: 'clamp(32px,5vw,48px)',
    lineHeight: 1.12,
    margin: '13px 0',
    color: '#fff',
  },

  stepsGrid: {
    maxWidth: 1050,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit,minmax(210px,1fr))',
    gap: 16,
  },

  stepCard: {
    padding: 24,
    borderRadius: 18,
    background:
      'rgba(255,255,255,.06)',
    border:
      '1px solid rgba(255,255,255,.1)',
  },

  stepNumber: {
    width: 38,
    height: 38,
    borderRadius: 999,
    background: '#12b9db',
    color: '#082440',
    display: 'grid',
    placeItems: 'center',
    fontWeight: 900,
  },

  stepText: {
    lineHeight: 1.6,
    color: '#cee1ef',
  },

  trustSection: {
    maxWidth: 1180,
    margin: '0 auto',
    padding: '90px 20px',
  },

  trustContent: {
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit,minmax(300px,1fr))',
    gap: 50,
    alignItems: 'start',
  },

  trustList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },

  trustItem: {
    display: 'flex',
    gap: 13,
    padding: 17,
    borderRadius: 14,
    background: '#f7fafd',
    border:
      '1px solid #e6edf4',
  },

  check: {
    width: 28,
    height: 28,
    borderRadius: 999,
    background: '#e3f7fb',
    color: '#0684ad',
    display: 'grid',
    placeItems: 'center',
    fontWeight: 900,
    flexShrink: 0,
  },

  trustItemText: {
    margin: '4px 0 0',
    color: '#718096',
    lineHeight: 1.5,
  },

  formSection: {
    padding: '90px 20px',
    background:
      'linear-gradient(135deg,#05162f,#083c6d)',
    color: '#fff',
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit,minmax(300px,1fr))',
    gap: 45,
    alignItems: 'center',
  },

  formIntro: {
    width: '100%',
    maxWidth: 560,
    marginLeft: 'auto',
  },

  formIntroText: {
    color: '#c4daea',
    lineHeight: 1.7,
    fontSize: 17,
  },

  formCard: {
    width: '100%',
    maxWidth: 500,
    boxSizing: 'border-box',
    background: '#fff',
    borderRadius: 22,
    padding: 26,
    marginRight: 'auto',
    color: '#17314e',
    boxShadow:
      '0 20px 60px rgba(0,0,0,.2)',
  },

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
    fontWeight: 800,
    fontSize: 13,
    marginBottom: 15,
  },

  input: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '14px',
    borderRadius: 10,
    border:
      '1px solid #d9e2eb',
    fontSize: 16,
    background: '#fff',
  },

  consent: {
    display: 'flex',
    gap: 9,
    alignItems: 'flex-start',
    fontSize: 13,
    lineHeight: 1.5,
    color: '#68788c',
  },

  formButton: {
    width: '100%',
    marginTop: 18,
    padding: 15,
    border: 0,
    borderRadius: 10,
    background: '#0b97c3',
    color: '#fff',
    fontWeight: 900,
    fontSize: 15,
  },

  formDisclaimer: {
    textAlign: 'center',
    fontSize: 11,
    lineHeight: 1.5,
    color: '#8695a7',
    marginTop: 12,
  },

  faqGrid: {
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit,minmax(270px,1fr))',
    gap: 15,
  },

  faqCard: {
    padding: 22,
    borderRadius: 16,
    background: '#f7fafd',
    border:
      '1px solid #e4edf4',
  },

  faqTitle: {
    color: '#102f50',
  },

  faqText: {
    color: '#6c7e92',
    lineHeight: 1.65,
  },

  footer: {
    background: '#020e20',
    color: '#fff',
    padding: '50px 20px 25px',
  },

  footerTop: {
    maxWidth: 1180,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 30,
    flexWrap: 'wrap',
  },

  footerLogo: {
    fontSize: 24,
  },

  footerText: {
    maxWidth: 430,
    color: '#839db5',
    lineHeight: 1.6,
  },

  footerLinks: {
    display: 'flex',
    gap: 18,
    flexWrap: 'wrap',
  },

  footerLink: {
    color: '#b8cede',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: 14,
  },

  footerBottom: {
    maxWidth: 1180,
    margin: '35px auto 0',
    paddingTop: 20,
    borderTop:
      '1px solid rgba(255,255,255,.1)',
    color: '#627f96',
    fontSize: 12,
  },
}
