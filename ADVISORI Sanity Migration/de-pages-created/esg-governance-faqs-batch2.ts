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
    console.log('Updating ESG Governance page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-governance' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-governance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie gestaltet ADVISORI effektive Board-Level ESG-Governance und welche Rolle spielen Aufsichtsrat und Vorstand bei der strategischen ESG-Steuerung?",
        answer: "Board-Level ESG-Governance ist das Herzstück einer erfolgreichen Nachhaltigkeitsstrategie und erfordert eine fundamentale Neuausrichtung traditioneller Governance-Strukturen. ADVISORI entwickelt maßgeschneiderte Board-Governance-Modelle, die ESG-Aspekte systematisch in die Führungsebene integrieren und dabei sowohl Aufsichtsrat als auch Vorstand mit den notwendigen Strukturen, Prozessen und Kompetenzen ausstatten, um ESG als strategischen Werttreiber zu steuern.\n\n🎯 Strategische Board-ESG-Integration:\n• ESG-Committee-Strukturen: Etablierung spezialisierter ESG-Komitees auf Board-Level mit klaren Mandaten, definierten Verantwortlichkeiten und direkter Berichtslinie an den Gesamtvorstand oder Aufsichtsrat.\n• Governance-Integration in bestehende Strukturen: Systematische Einbindung von ESG-Themen in alle relevanten Board-Komitees (Audit, Risk, Strategy, Remuneration) zur Vermeidung von Silos und Sicherstellung ganzheitlicher Betrachtung.\n• Executive-Accountability-Systeme: Implementierung von ESG-KPIs in Vorstandsvergütung und -bewertung, um direkte Anreize für nachhaltige Führung zu schaffen.\n• Strategic Decision-Making Integration: Entwicklung von Entscheidungsframeworks, die ESG-Faktoren systematisch in strategische Investitions-, Akquisitions- und Portfolioentscheidungen einbeziehen.\n\n⚖️ ADVISORI's Board-Governance-Excellence-Ansatz:\n• Board-Readiness-Assessment: Comprehensive Analyse der aktuellen Board-Zusammensetzung, -Kompetenzen und -Prozesse zur Identifikation von ESG-Governance-Gaps und Optimierungspotenzialen.\n• Director-Education und Capability-Building: Entwicklung maßgeschneiderter ESG-Schulungsprogramme für Board-Mitglieder zur Sicherstellung der notwendigen fachlichen Kompetenz und strategischen Urteilsfähigkeit.\n• Board-Effectiveness-Monitoring: Implementierung von Performance-Management-Systemen, die die Effektivität der ESG-Governance auf Board-Level kontinuierlich überwachen und optimieren.\n• Stakeholder-Engagement-Strategien: Entwicklung von Kommunikations- und Engagement-Formaten, die es dem Board ermöglichen, effektiv mit ESG-fokussierten Investoren und anderen Stakeholdern zu interagieren.\n• Regulatory-Compliance-Oversight: Etablierung robuster Überwachungsmechanismen, die sicherstellen, dass das Board seiner Aufsichtspflicht bei ESG-relevanten regulatorischen Anforderungen vollumfänglich nachkommt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt Technologie bei der Implementierung einer modernen ESG-Governance, und wie unterstützt ADVISORI bei der digitalen Transformation von Nachhaltigkeitsmanagement?",
        answer: "Die digitale Transformation des ESG-Managements ist entscheidend für die Skalierung und Effektivierung von Nachhaltigkeits-Governance in komplexen Organisationen. ADVISORI entwickelt Technology-enabled ESG-Governance-Systeme, die datengetriebene Entscheidungsfindung ermöglichen, Automatisierung von Reporting-Prozessen schaffen und Real-time-Monitoring von ESG-Performance etablieren. Diese technologischen Lösungen transformieren ESG von einer manuellen, reaktiven Funktion zu einem strategischen, proaktiven Managementsystem.\n\n💻 Technology-Stack für moderne ESG-Governance:\n• Integrierte ESG-Data-Platforms: Implementierung zentraler Datenplattformen, die ESG-relevante Informationen aus verschiedenen Geschäftsbereichen aggregieren, validieren und für strategische Analysen aufbereiten.\n• AI-powered ESG-Analytics: Einsatz künstlicher Intelligenz und Machine Learning für Predictive Analytics, Risiko-Früherkennung und Identifikation von ESG-Optimierungspotenzialen.\n• Automated Reporting und Compliance-Management: Entwicklung automatisierter Systeme für ESG-Berichterstattung, die regulatorische Anforderungen effizient erfüllen und manuelle Fehlerquellen minimieren.\n• Real-time-Monitoring und Alert-Systeme: Implementierung von Dashboard-Lösungen und Frühwarnsystemen, die C-Level-Führungskräfte über kritische ESG-Entwicklungen in Echtzeit informieren.\n\n🚀 ADVISORI's Digital ESG-Transformation-Methodology:\n• Technology-Readiness-Assessment: Comprehensive Evaluation der bestehenden IT-Infrastruktur und Identifikation von Technology-Gaps für effektive ESG-Governance-Implementierung.\n• Platform-Selection und Integration-Strategy: Beratung bei der Auswahl geeigneter ESG-Software-Lösungen und deren nahtloser Integration in bestehende Enterprise-Systeme (ERP, CRM, BI).\n• Data-Governance und Quality-Management: Entwicklung robuster Datenqualitäts- und -governance-Frameworks, die Zuverlässigkeit und Audit-Fähigkeit von ESG-Informationen sicherstellen.\n• Change-Management für Digital Adoption: Implementierung von Training- und Change-Management-Programmen, die Mitarbeiter befähigen, neue digitale ESG-Tools effektiv zu nutzen.\n• Continuous Innovation und Technology-Evolution: Etablierung von Prozessen zur kontinuierlichen Evaluation und Integration neuer ESG-Technologien und Best Practices."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie entwickelt ADVISORI Stakeholder-Engagement-Strategien im Rahmen der ESG-Governance, die sowohl Investoren als auch andere Anspruchsgruppen effektiv ansprechen?",
        answer: "Effektives Stakeholder-Engagement ist ein kritischer Erfolgsfaktor für ESG-Governance und erfordert differenzierte, zielgruppenspezifische Kommunikations- und Engagement-Strategien. ADVISORI entwickelt mehrdimensionale Stakeholder-Engagement-Frameworks, die verschiedene Anspruchsgruppen systematisch identifizieren, priorisieren und mit maßgeschneiderten Ansätzen ansprechen. Dies schafft Vertrauen, fördert Transparenz und generiert wertvolles Feedback für die kontinuierliche Verbesserung der ESG-Performance.\n\n🎯 Stakeholder-Segmentierung und Priorisierung:\n• Investor-Relations-Excellence: Entwicklung spezialisierter IR-Strategien für ESG-fokussierte Investoren, Impact-Investoren und traditionelle Investoren mit wachsendem ESG-Interest.\n• Customer-Engagement für B2B und B2C: Maßgeschneiderte Ansätze für verschiedene Kundensegmente, von nachhaltigkeitsbewussten Konsumenten bis zu Corporate Clients mit eigenen ESG-Zielen.\n• Employee-Engagement und Internal Advocacy: Entwicklung interner Kommunikations- und Engagement-Programme, die Mitarbeiter zu ESG-Botschaftern und -Multiplikatoren machen.\n• Regulatory und Policy-Stakeholder-Management: Proaktive Beziehungsgestaltung zu Regulierungsbehörden, Branchenverbänden und Policy-Makern zur frühzeitigen Einflussnahme und Compliance-Sicherung.\n\n📢 ADVISORI's Multi-Channel-Engagement-Approach:\n• Content-Strategy und Thought-Leadership: Entwicklung differenzierter Content-Strategien, die komplexe ESG-Themen zielgruppengerecht aufbereiten und das Unternehmen als ESG-Thought-Leader positionieren.\n• Interactive Stakeholder-Dialogue-Formate: Design und Implementierung innovativer Engagement-Formate wie ESG-Investor-Days, Stakeholder-Panels und Digital-Dialogue-Plattformen.\n• Materiality-Assessment und Stakeholder-Feedback-Integration: Systematische Erhebung und Analyse von Stakeholder-Erwartungen zur kontinuierlichen Anpassung der ESG-Strategie und -Kommunikation.\n• Crisis-Communication und Issue-Management: Entwicklung robuster Kommunikationsstrategien für ESG-bezogene Krisen oder kontroverse Themen, die Vertrauen erhalten und Reputation schützen.\n• Performance-Communication und Storytelling: Transformation von ESG-Daten und -Metriken in überzeugende Narrative, die Fortschritte und Ambitionen effektiv vermitteln."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie adressiert ADVISORI die Integration von ESG-Risikomanagement in bestehende Enterprise-Risk-Management-Systeme und welche spezifischen ESG-Risiken müssen C-Level-Führungskräfte priorisieren?",
        answer: "Die Integration von ESG-Risikomanagement in bestehende Enterprise-Risk-Management-(ERM)-Systeme ist essentiell für eine holistische Risikobetrachtung und erfordert eine systematische Erweiterung traditioneller Risikoframeworks. ADVISORI entwickelt integrierte ESG-Risk-Management-Ansätze, die sowohl emerging ESG-Risiken identifizieren als auch deren Interdependenzen mit traditionellen Geschäftsrisiken analysieren. Dies ermöglicht C-Level-Führungskräften eine vollständige Risikotransparenz und fundierte strategische Entscheidungen.\n\n⚠️ Kritische ESG-Risikokategorien für C-Level-Priorisierung:\n• Transition-Risiken: Systematische Analyse von Risiken im Zusammenhang mit der Transformation zu einer nachhaltigen Wirtschaft, einschließlich regulatorischer Änderungen, Technologie-Shifts und Marktveränderungen.\n• Physical Climate-Risiken: Bewertung direkter und indirekter Auswirkungen des Klimawandels auf Geschäftstätigkeit, Supply Chain und Asset-Werte, sowohl akut als auch chronisch.\n• Social-License-to-Operate-Risiken: Evaluation von Reputations- und Legitimationsrisiken durch sich wandelnde gesellschaftliche Erwartungen und Stakeholder-Ansprüche.\n• Regulatory-Compliance-Risiken: Proaktive Identifikation und Management sich schnell entwickelnder ESG-Regulatorik und damit verbundener Compliance- und Strafrisiken.\n\n🛡️ ADVISORI's Integrated ESG-Risk-Management-Framework:\n• Risk-Taxonomy-Integration: Systematische Einbindung von ESG-Risikokategorien in bestehende Risikotaxonomien und -klassifikationen zur nahtlosen ERM-Integration.\n• Quantitative ESG-Risk-Modeling: Entwicklung fortgeschrittener Risikomodelle, die ESG-Faktoren quantifizieren und deren potenzielle finanzielle Auswirkungen bewerten.\n• Cross-Risk-Interdependency-Analysis: Analyse komplexer Wechselwirkungen zwischen ESG-Risiken und traditionellen Geschäftsrisiken zur Identifikation von Risiko-Clustern und Kaskaden-Effekten.\n• Scenario-Planning und Stress-Testing: Implementierung von ESG-Szenario-Analysen und Stress-Tests, die Resilienz unter verschiedenen ESG-bezogenen Stressbedingungen bewerten.\n• Early-Warning-Systeme und KRI-Integration: Entwicklung ESG-spezifischer Key Risk Indicators (KRIs) und deren Integration in bestehende Risk-Monitoring-Systeme für proaktive Risikosteuerung."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
