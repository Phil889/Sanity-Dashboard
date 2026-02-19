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
    console.log('Updating DSGVO page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie unterstützt ADVISORI bei der Implementierung einer robusten Data Governance-Struktur, die sowohl DSGVO-Compliance als auch Business Intelligence-Anforderungen erfüllt?",
        answer: "Moderne Data Governance muss die scheinbar widersprüchlichen Anforderungen von Datenschutz und Datennutzung harmonisieren. ADVISORI entwickelt intelligente Data Governance-Frameworks, die DSGVO-Compliance sicherstellen, ohne die strategische Nutzung von Daten für Business Intelligence und Innovation zu behindern.\n\n📊 Intelligente Data Governance für strategische Datennutzung:\n• Privacy-Preserving-Analytics-Framework: Implementierung von Technologien wie Differential Privacy, Federated Learning und Homomorphic Encryption für DSGVO-konforme Datenanalyse.\n• Dynamic-Consent-Management: Aufbau flexibler Consent-Management-Systeme, die granulare Einwilligungen für verschiedene Datennutzungsszenarien ermöglichen.\n• Data-Classification-Automation: Automatisierte Klassifizierung und Kategorisierung von Daten basierend auf Sensitivität, Compliance-Anforderungen und Business-Value.\n• Purpose-Limitation-Optimization: Entwicklung von Purpose-Binding-Mechanismen, die Datennutzung für definierte Geschäftszwecke maximieren, ohne DSGVO-Prinzipien zu verletzen.\n\n🎯 Strategic Business Intelligence unter Datenschutz-Compliance:\n• GDPR-Compliant-AI-Development: Beratung bei der Entwicklung KI-basierter Business Intelligence-Systeme unter strikter Einhaltung von Datenschutzprinzipien.\n• Cross-Functional-Data-Teams: Aufbau interdisziplinärer Teams aus Data Scientists, Privacy Engineers und Legal Experts für optimale Governance.\n• Value-Driven-Privacy-Engineering: Integration von Privacy-Engineering in Data Science-Workflows zur Maximierung von Business Value bei minimalen Compliance-Risiken.\n• Stakeholder-Alignment-Framework: Entwicklung von Governance-Strukturen, die Interessen von Datenschutz, Business Intelligence und Compliance optimal ausbalancieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Expertise bietet ADVISORI bei der DSGVO-konformen Gestaltung von Customer Experience und Marketing-Automation-Systemen?",
        answer: "Customer Experience und Marketing Automation stehen im Zentrum datengetriebener Geschäftsmodelle, sind aber gleichzeitig besonders sensible Bereiche für DSGVO-Compliance. ADVISORI entwickelt innovative Ansätze, die herausragende Kundenerlebnisse mit höchsten Datenschutzstandards verbinden und Marketing-Effectiveness sogar durch Privacy Excellence steigern.\n\n🎨 Privacy-First Customer Experience Design:\n• Consent-as-Experience-Element: Integration von Datenschutz-Entscheidungen als positive Customer Journey-Elemente, die Vertrauen aufbauen statt User Experience zu behindern.\n• Personalization-Without-Invasion: Entwicklung von Personalisierungsstrategien, die relevante Erlebnisse schaffen, ohne invasive Datensammlung oder -verarbeitung.\n• Transparency-as-Differentiator: Transformation von DSGVO-Transparenzanforderungen in Wettbewerbsvorteile durch innovative Datennutzungs-Kommunikation.\n• Zero-Party-Data-Strategies: Aufbau von Strategien zur Sammlung von Zero-Party-Daten durch Value-Exchange-Modelle mit Kunden.\n\n🚀 Marketing Automation Excellence unter DSGVO:\n• Privacy-Compliant-Lead-Scoring: Entwicklung von Lead-Scoring-Modellen, die DSGVO-konforme Datenquellen nutzen und Legal Basis-Prinzipien respektieren.\n• Automated-Consent-Management: Integration intelligenter Consent-Management-Systeme in Marketing-Automation-Plattformen für nahtlose Compliance.\n• Cross-Channel-Privacy-Orchestration: Koordination von Datenschutz-Compliance über alle Marketing-Kanäle hinweg für konsistente Customer Experience.\n• ROI-Optimization-Through-Privacy: Demonstration, wie datenschutzkonforme Marketing-Praktiken zu höheren Conversion-Raten und Customer Lifetime Value führen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie addressiert ADVISORI die Herausforderungen von DSGVO-Compliance im Kontext von Cloud-Migration und digitaler Transformation-Initiativen?",
        answer: "Cloud-Migration und digitale Transformation bieten enorme Geschäftschancen, bergen aber auch komplexe DSGVO-Compliance-Herausforderungen. ADVISORI begleitet Unternehmen dabei, diese Transformationen datenschutzkonform zu gestalten und Privacy-by-Design als Beschleuniger für digitale Innovation zu nutzen.\n\n☁️ Cloud-Migration mit integrierter DSGVO-Compliance:\n• Cloud-Provider-Assessment-Framework: Umfassende Bewertung von Cloud-Anbietern bezüglich DSGVO-Compliance, Data Processing Agreements und Technical Safeguards.\n• Data-Residency-Strategy-Development: Entwicklung strategischer Ansätze für Data Residency und Cross-Border-Transfer-Mechanismen in Cloud-Umgebungen.\n• Hybrid-Cloud-Privacy-Architecture: Design von Hybrid-Cloud-Architekturen, die sensible Daten on-premise halten, während weniger kritische Daten Cloud-Vorteile nutzen.\n• Cloud-Native-Privacy-Controls: Implementation von Cloud-nativen Privacy-Controls und Monitoring-Systemen für kontinuierliche Compliance-Überwachung.\n\n🔄 Digital Transformation als Privacy Excellence-Katalysator:\n• Legacy-System-Privacy-Modernization: Transformation veralteter Systeme in datenschutzkonforme, moderne Architekturen als Teil der Digitalisierungsstrategie.\n• API-Privacy-Governance: Entwicklung von Privacy-Governance für API-Ökosysteme und Microservices-Architekturen in digitalen Plattformen.\n• DevSecPrivacy-Integration: Integration von Privacy-Engineering in DevOps-Prozesse für Continuous Compliance in agilen Entwicklungsumgebungen.\n• Digital-Business-Model-Privacy-Design: Beratung bei der datenschutzkonformen Gestaltung neuer digitaler Geschäftsmodelle und Revenue-Streams."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche innovativen Technologien und Methoden nutzt ADVISORI, um DSGVO-Compliance effizient zu automatisieren und zu skalieren?",
        answer: "Manuelle DSGVO-Compliance ist in komplexen, digitalen Unternehmen nicht skalierbar. ADVISORI nutzt cutting-edge Technologien und innovative Automatisierungsansätze, um Datenschutz-Compliance effizient, kostengünstig und fehlerresistent zu gestalten, ohne die Flexibilität für Geschäftsinnovationen zu beeinträchtigen.\n\n🤖 Automatisierung und AI-gestützte Compliance-Systeme:\n• AI-Powered-Data-Discovery: Einsatz von Machine Learning für automatische Erkennung und Klassifizierung personenbezogener Daten in komplexen IT-Landschaften.\n• Intelligent-Consent-Orchestration: KI-gestützte Systeme für dynamisches Consent-Management, die Nutzerverhalten und -präferenzen für optimale Einwilligungsprozesse analysieren.\n• Automated-Privacy-Impact-Assessment: Entwicklung von Systemen, die automatisch Privacy Impact Assessments für neue Systeme und Prozesse durchführen.\n• Real-Time-Compliance-Monitoring: Implementation von Real-Time-Monitoring-Systemen, die DSGVO-Verstöße präventiv erkennen und automatische Korrekturmaßnahmen einleiten.\n\n🔧 Innovative Privacy-Engineering-Tools und -Methoden:\n• Privacy-as-Code-Implementation: Entwicklung von Infrastructure-as-Code-Ansätzen, die Privacy-Controls automatisch in System-Deployments integrieren.\n• Blockchain-Based-Consent-Management: Nutzung von Blockchain-Technologie für unveränderliche, transparente Consent-Historien und -Nachweise.\n• Zero-Knowledge-Proof-Applications: Integration von Zero-Knowledge-Proofs für Compliance-Nachweise ohne Preisgabe sensitiver Geschäftsdaten.\n• Digital-Twin-Privacy-Testing: Verwendung digitaler Zwillinge für umfassende Privacy-Tests neuer Systeme und Prozesse in sicheren Umgebungen."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
