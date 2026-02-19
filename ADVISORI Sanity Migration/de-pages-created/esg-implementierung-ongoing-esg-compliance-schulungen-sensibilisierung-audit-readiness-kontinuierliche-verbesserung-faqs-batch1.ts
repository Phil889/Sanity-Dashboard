import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Helper function to generate unique keys
function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating ESG Implementierung page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-implementierung-ongoing-esg-compliance-schulungen-sensibilisierung-audit-readiness-kontinuierliche-verbesserung' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-implementierung-ongoing-esg-compliance-schulungen-sensibilisierung-audit-readiness-kontinuierliche-verbesserung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ESG-Implementierung für die C-Suite mehr als nur ein Compliance-Thema und wie transformiert ADVISORI dies zu einem strategischen Wettbewerbsvorteil?",
        answer: "Für C-Level-Führungskräfte stellt ESG (Environmental, Social, Governance) eine fundamentale Transformation der Unternehmensführung dar, die weit über regulatorische Compliance hinausgeht. ESG ist ein strategischer Imperativ, der Unternehmenswert, Risikomitigation und nachhaltige Wettbewerbsvorteile schafft. ADVISORI positioniert ESG als Value-Creation-Engine, die nicht nur regulatorische Exzellenz sicherstellt, sondern auch operative Effizienz und Stakeholder-Value maximiert.\n\n🎯 Strategische ESG-Dimensionen für die Führungsebene:\n• Sustainable Value Creation: ESG-Excellence führt zu höheren Unternehmensbewertungen, reduzierten Kapitalkosten und verbessertem Zugang zu ESG-fokussierten Investoren und Finanzierungsquellen.\n• Risk Mitigation und Resilience: Proaktive ESG-Implementierung reduziert operative, regulatorische und Reputationsrisiken erheblich und schafft langfristige Geschäftsresilienz.\n• Market Leadership und Competitive Advantage: ESG-Pioniere gewinnen Marktanteile, Premium-Pricing-Power und Zugang zu sustainability-focused Kunden und Partnern.\n• Operational Excellence: ESG-Integration optimiert Ressourceneffizienz, Kostenstrukturen und operative Performance durch nachhaltige Geschäftspraktiken.\n\n🌱 Der ADVISORI ESG-Excellence-Ansatz:\n• Strategic ESG Integration: Wir entwickeln ESG-Frameworks, die nahtlos in Ihre Geschäftsstrategie integriert sind und messbare Business-Value schaffen statt isolierter Compliance-Programme.\n• Materiality-Driven Focus: Konzentration auf ESG-Aspekte mit höchstem Business Impact und Stakeholder-Relevanz für maximale ROI-Optimierung bei ESG-Investitionen.\n• Technology-Enabled Efficiency: Einsatz moderner ESG-Management-Systeme für Real-time Monitoring, automatisierte Reporting und datengetriebene Decision-Making-Prozesse.\n• Change Management Excellence: Kulturelle Transformation und Employee Engagement-Programme, die ESG zu einem integralen Bestandteil der Unternehmens-DNA machen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie strukturiert ADVISORI ein kontinuierliches ESG-Compliance-Monitoring-System, das C-Level-Führungskräften Real-time Insights und proaktive Risikokontrolle ermöglicht?",
        answer: "Kontinuierliches ESG-Compliance-Monitoring ist entscheidend für proaktive Steuerung und Risikomanagement. ADVISORI entwickelt intelligente Monitoring-Systeme, die nicht nur regulatorische Compliance sicherstellen, sondern auch C-Level-Führungskräften strategische Insights für datengetriebene Entscheidungen und Performance-Optimierung liefern.\n\n📊 Advanced ESG-Monitoring-Framework:\n• Real-time Dashboard Integration: Entwicklung intelligenter ESG-Cockpits mit Live-KPIs, Trend-Analysen und Alert-Systemen für proaktives Management kritischer ESG-Metriken.\n• Predictive Risk Analytics: Einsatz von AI-gestützten Analyseverfahren zur Früherkennung von ESG-Risiken und automatischen Identifikation von Optimierungspotenzialen.\n• Integrated Reporting Architecture: Nahtlose Integration von ESG-Daten in bestehende Management-Information-Systems für ganzheitliche Business-Performance-Überwachung.\n• Multi-Stakeholder Transparency: Automatisierte Reporting-Systeme für verschiedene Stakeholder-Gruppen mit customized Views und Compliance-Standards.\n\n🔍 ADVISORI's Smart Monitoring-Methodology:\n• Dynamic Materiality Assessment: Kontinuierliche Bewertung und Anpassung von ESG-Prioritäten basierend auf sich ändernden Business-Kontexten und Stakeholder-Erwartungen.\n• Exception-Based Alerting: Intelligente Alert-Systeme, die nur bei kritischen Abweichungen oder Improvement-Opportunities C-Level-Attention erfordern für maximale Management-Effizienz.\n• Benchmarking und Peer-Comparison: Systematische Markt- und Wettbewerbs-Benchmarks zur Positionierung und Identifikation von Competitive-Advantage-Opportunities.\n• Regulatory Update Integration: Proaktive Überwachung sich ändernder ESG-Regulatorik mit automatischer Impact-Assessment und Compliance-Gap-Analyse.\n• Performance-Driven Optimization: Kontinuierliche ESG-Performance-Messung mit direkter Verknüpfung zu Business-KPIs und Value-Creation-Metriken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In welcher Weise entwickelt ADVISORI ESG-Schulungsprogramme und Change-Management-Strategien, die nicht nur Compliance sicherstellen, sondern auch Cultural Transformation und Employee Engagement maximieren?",
        answer: "ESG-Erfolg erfordert organisationsweite Cultural Transformation, die alle Mitarbeiter zu ESG-Champions entwickelt. ADVISORI entwickelt innovative Training- und Change-Management-Programme, die nicht nur Compliance-Wissen vermitteln, sondern auch intrinsische Motivation schaffen und ESG zu einem integralen Bestandteil der Unternehmenskultur machen.\n\n🎓 Comprehensive ESG-Learning-Architecture:\n• Role-Specific Training Pathways: Maßgeschneiderte Schulungsprogramme für verschiedene Hierarchieebenen und Funktionen mit relevanten ESG-Inhalten und praktischen Anwendungsbeispielen.\n• Interactive Learning Experiences: Einsatz moderner Lernmethoden wie Gamification, Virtual Reality und Simulation-basierte Trainings für höchste Engagement-Raten und Wissensretention.\n• Continuous Learning Culture: Etablierung kontinuierlicher ESG-Weiterbildungsstrukturen mit regelmäßigen Updates, Best-Practice-Sharing und Peer-Learning-Formaten.\n• Leadership Development Integration: ESG-Leadership-Programme für Führungskräfte zur Entwicklung von Change-Agent-Kompetenzen und ESG-Vision-Communication.\n\n🚀 ADVISORI's Cultural Transformation-Strategy:\n• Values-Based Integration: Verbindung von ESG-Prinzipien mit bestehenden Unternehmenswerten für authentische und nachhaltige kulturelle Veränderung.\n• Employee Empowerment: Programme zur Befähigung von Mitarbeitern als ESG-Innovatoren und Change-Champions mit eigenständigen Verbesserungsvorschlägen und -initiativen.\n• Recognition und Incentive Systems: Entwicklung von ESG-Performance-basierten Anreizsystemen und Recognition-Programmen zur Verstärkung gewünschter Verhaltensweisen.\n• Communication Excellence: Strategische Kommunikationskampagnen zur Schaffung von ESG-Awareness, Commitment und Pride in der gesamten Organisation.\n• Measurement und Feedback: Kontinuierliche Messung von Cultural Change-Indikatoren und Employee Engagement-Levels mit gezielten Intervention-Strategien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie optimiert ADVISORI ESG-Audit-Readiness und Dokumentationsexzellenz, um C-Level-Führungskräften nicht nur regulatorische Compliance zu gewährleisten, sondern auch Competitive Advantages bei Stakeholder-Evaluationen zu schaffen?",
        answer: "ESG-Audit-Readiness ist ein strategischer Differentiator, der nicht nur regulatorische Compliance demonstriert, sondern auch Vertrauen bei Investoren, Partnern und Kunden schafft. ADVISORI entwickelt umfassende Audit-Readiness-Strategien, die Excellence in Documentation, Process-Integrity und Stakeholder-Communication gewährleisten und Competitive Advantages bei Due-Diligence-Prozessen schaffen.\n\n📋 Strategic Audit-Excellence-Framework:\n• Comprehensive Documentation Architecture: Entwicklung lückenloser, auditfähiger Dokumentationssysteme mit Clear Audit Trails, Evidence-Management und Real-time Data-Integrity für maximale Credibility.\n• Process Excellence und Control Environment: Implementierung robuster interner Kontrollen und Quality-Assurance-Prozesse, die nicht nur Compliance sicherstellen, sondern auch Operational Excellence demonstrieren.\n• Proactive Stakeholder Preparation: Strategische Vorbereitung auf verschiedene Audit-Szenarien mit Stakeholder-spezifischen Narratives und Evidence-Packages für optimale Positioning.\n• Technology-Enabled Efficiency: Einsatz digitaler Audit-Management-Tools für streamlined Documentation, automatisierte Evidence-Collection und efficient Auditor-Collaboration.\n\n🏆 ADVISORI's Audit-Success-Methodology:\n• Mock Audit Excellence: Durchführung umfassender interner Audits und Mock-Assessments zur Identifikation und Behebung von Gaps vor externen Evaluationen.\n• Regulatory Intelligence Integration: Proaktive Analyse sich ändernder Audit-Standards und Stakeholder-Erwartungen für kontinuierliche Readiness-Optimierung.\n• Narrative Development und Positioning: Entwicklung überzeugender ESG-Narratives und Success-Stories, die nicht nur Compliance demonstrieren, sondern auch Leadership und Innovation hervorheben.\n• Crisis Communication Readiness: Vorbereitung auf potentielle Audit-Findings mit Pre-Approved Response-Strategien und Remediation-Plans für proaktive Issue-Resolution.\n• Continuous Improvement Integration: Post-Audit Learning-Prozesse und Performance-Enhancement-Strategien zur kontinuierlichen Steigerung der Audit-Excellence und Stakeholder-Confidence."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
