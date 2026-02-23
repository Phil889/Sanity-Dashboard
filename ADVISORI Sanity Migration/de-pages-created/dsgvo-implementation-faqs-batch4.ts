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
    console.log('Updating DSGVO Implementation page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo-implementation' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo-implementation" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie bereitet ADVISORI Unternehmen auf die Post-Cookie-Ära vor und welche DSGVO-konformen Alternativen gibt es für Digital Marketing und Customer Analytics?",
        answer: "Das Ende der Third-Party-Cookies revolutioniert Digital Marketing und erfordert neue, DSGVO-konforme Ansätze für Customer Intelligence. ADVISORI entwickelt zukunftssichere Marketing-Technologie-Stacks, die sowohl regulatorische Anforderungen erfüllen als auch effektives Customer Engagement ermöglichen.\n\n🍪 Post-Cookie Marketing Excellence:\n• First-Party Data Strategies: Aufbau eigener Datenökosysteme durch verbesserte Customer Experience und Value Exchange, die freiwillige Datenpreisgabe fördern.\n• Privacy-preserving Analytics: Implementation von Analysetechniken wie Differential Privacy und Federated Analytics, die Insights ohne individuelle Nachverfolgung ermöglichen.\n• Contextual Advertising Renaissance: Entwicklung kontextbasierter Werbungsstrategien, die auf Inhalts- statt Nutzeranalyse basieren.\n• Zero-Party Data Activation: Strategien zur direkten Sammlung von Kundenpräferenzen und -intentionen durch interaktive Formate und Value-driven Exchanges.\n\n🎯 DSGVO-konforme Customer Intelligence:\n• Consent-based Personalization: Entwicklung intelligenter Personalisierungsstrategien, die auf expliziter Einwilligung und transparentem Value Proposition basieren.\n• Privacy-centric Customer Journey Mapping: Neugestaltung von Customer Journeys unter Berücksichtigung von Datenschutz-Touchpoints und Consent-Management.\n• Alternative Identifier Strategies: Implementation DSGVO-konformer Identifier-Lösungen wie HashIDs oder Authenticated Traffic.\n• Real-time Consent Optimization: Dynamische Anpassung von Marketing-Aktivitäten basierend auf aktuellen Consent-Status und Präferenzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Strategie entwickelt ADVISORI für DSGVO-Compliance in stark regulierten Industrien wie Pharma, Medizintechnik und Gesundheitswesen?",
        answer: "Healthcare und Life Sciences unterliegen besonderen Datenschutz-Anforderungen, die über die Standard-DSGVO hinausgehen. ADVISORI entwickelt spezialisierte Compliance-Frameworks, die sowohl DSGVO-Anforderungen als auch branchenspezifische Regulierungen (MDR, GCP, HIPAA) harmonisieren.\n\n🏥 Healthcare-spezifische Privacy Excellence:\n• Special Categories Data Management: Spezialisierte Verfahren für den Umgang mit Gesundheitsdaten unter DSGVO Art. 9 und nationalen Gesundheitsdatenschutzgesetzen.\n• Clinical Trial Data Protection: DSGVO-konforme Frameworks für klinische Studien, die Datenschutz mit wissenschaftlicher Integrität und regulatorischen Anforderungen balancieren.\n• Medical Device Data Privacy: Integration von Privacy-by-Design in Medical Device Development unter Berücksichtigung von MDR und Cybersecurity-Anforderungen.\n• Cross-border Health Data Transfers: Spezialisierte Lösungen für internationale Gesundheitsdatenübertragungen in Forschung und Patientenversorgung.\n\n🔬 Pharmaceutical Innovation Privacy:\n• Research Data Anonymization: Advanced Anonymisierungstechniken für pharmazeutische Forschungsdaten, die Wissenschaftlichkeit und Datenschutz optimieren.\n• Real-World Evidence Privacy: DSGVO-konforme Strategien für Real-World Evidence-Generierung aus Patientendaten.\n• Pharmacovigilance Compliance: Integration von DSGVO-Anforderungen in Pharmacovigilance-Systeme und Adverse Event Reporting.\n• Digital Health Platform Governance: Compliance-Frameworks für digitale Gesundheitsplattformen und Connected Health Solutions."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie unterstützt ADVISORI Venture Capital und Private Equity bei der DSGVO-Due Diligence und der Integration von Privacy Excellence in Portfoliounternehmen?",
        answer: "Für Investoren wird Datenschutz-Excellence zunehmend zu einem kritischen Bewertungsfaktor und Werttreiber. ADVISORI bietet spezialisierte Services für die Investoren-Community, die sowohl Due Diligence als auch Post-Investment Value Creation adressieren.\n\n💰 Investment-Grade Privacy Assessment:\n• Privacy-focused Due Diligence: Systematische Bewertung von Datenschutz-Assets und -Risiken als Teil der Investment-Entscheidung, einschließlich versteckter Compliance-Kosten.\n• Data Asset Valuation: Monetäre Bewertung von Datenbeständen und Privacy-Capabilities als Teil der Unternehmensbewertung.\n• Regulatory Risk Quantification: Quantifizierung potenzieller DSGVO-Bußgeld-Exposition und deren Auswirkungen auf Investment Returns.\n• Privacy-driven Growth Potential: Identifikation von Wachstumschancen durch verbesserte Datenschutz-Standards und Customer Trust.\n\n🚀 Portfolio Value Creation durch Privacy Excellence:\n• Privacy-as-a-Service für Portfolios: Shared-Service-Modelle für Datenschutz-Funktionen über Portfolio-Unternehmen hinweg zur Kostenoptimierung.\n• Best Practice Transfer: Systematischer Transfer von Privacy-Best-Practices zwischen Portfolio-Unternehmen zur Steigerung der Gesamtperformance.\n• Exit Readiness Privacy Programs: Vorbereitung von Portfolio-Unternehmen auf Exit-Szenarien durch nachweisbare Privacy Excellence.\n• ESG Integration: Integration von Datenschutz-Performance in ESG-Reporting und Nachhaltigkeitsstrategien für bessere Investor Relations."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie entwickelt ADVISORI eine Workforce-Privacy-Strategie, die sowohl Employee Experience als auch DSGVO-Compliance in der modernen Arbeitswelt optimiert?",
        answer: "Die moderne Arbeitswelt mit Remote Work, Employee Monitoring und HR Analytics erfordert spezialisierte Datenschutz-Ansätze. ADVISORI entwickelt Workforce-Privacy-Strategien, die Mitarbeiterrechte schützen, gleichzeitig aber operative Effizienz und datengetriebene HR-Entscheidungen ermöglichen.\n\n👥 Employee-centric Privacy Design:\n• Transparent HR Analytics: Entwicklung von HR-Analytics-Systemen, die Mitarbeiterperformance und -zufriedenheit messen, ohne individuelle Privatsphäre zu verletzen.\n• Remote Work Privacy Frameworks: Comprehensive Richtlinien für datenschutzkonforme Remote-Work-Arrangements, einschließlich Monitoring und Support-Systemen.\n• Employee Consent Management: Spezialisierte Consent-Management-Systeme für komplexe HR-Datenverarbeitungen (Performance Tracking, Wellness Programs, Skills Assessment).\n• Workplace Surveillance Balance: Ausgewogene Ansätze für notwendige Workplace-Überwachung (Security, Compliance) unter Wahrung der Mitarbeiterprivatsphäre.\n\n🎯 Strategic Workforce Intelligence:\n• Privacy-preserving People Analytics: Advanced Analytics-Techniken für HR-Insights, die individuelle Anonymität wahren, aber strategische Personalentscheidungen unterstützen.\n• Digital Employee Rights Management: Comprehensive Management von digitalen Mitarbeiterrechten (Auskunft, Berichtigung, Löschung) in komplexen HR-IT-Landschaften.\n• Cross-border Employee Privacy: Spezielle Frameworks für multinationale Unternehmen mit Mitarbeitern in verschiedenen Datenschutz-Jurisdiktionen.\n• Future of Work Privacy Readiness: Vorbereitung auf emerging HR-Technologien (AI-Recruiting, Biometric Authentication, Mental Health Monitoring) mit eingebauten Privacy-Controls."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
