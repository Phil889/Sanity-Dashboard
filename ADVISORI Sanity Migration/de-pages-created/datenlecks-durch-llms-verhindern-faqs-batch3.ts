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
    console.log('Updating Datenlecks durch LLMs verhindern page with DSGVO Compliance FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenlecks-durch-llms-verhindern' })
    
    if (!existingDoc) {
      throw new Error('Document "datenlecks-durch-llms-verhindern" not found')
    }
    
    // Create new DSGVO Compliance FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie gewährleistet ADVISORI DSGVO-Compliance bei LLM-Implementierungen und welche spezifischen Datenschutzrisiken adressieren wir?",
        answer: "DSGVO-Compliance bei LLM-Implementierungen erfordert einen umfassenden Ansatz, der die einzigartigen Herausforderungen von Large Language Models berücksichtigt. ADVISORI entwickelt spezialisierte Compliance-Frameworks, die nicht nur aktuelle DSGVO-Anforderungen erfüllen, sondern auch proaktiv zukünftige regulatorische Entwicklungen antizipieren und umfassenden Datenschutz gewährleisten.\n\n⚖️ DSGVO-spezifische LLM-Herausforderungen:\n• Datenverarbeitung und Zweckbindung: LLMs verarbeiten große Mengen an Daten, die personenbezogene Informationen enthalten können, was strenge Zweckbindung und Datenminimierung erfordert.\n• Recht auf Vergessenwerden: Die Implementierung des Rechts auf Löschung in LLM-Systemen erfordert spezielle technische Lösungen, da traditionelle Löschverfahren bei trainierten Modellen nicht anwendbar sind.\n• Transparenz und Erklärbarkeit: DSGVO verlangt Transparenz über Datenverarbeitung, was bei komplexen LLM-Systemen besondere Herausforderungen für Erklärbarkeit und Nachvollziehbarkeit schafft.\n• Grenzüberschreitende Datenübertragung: LLM-Services nutzen oft Cloud-Infrastrukturen in verschiedenen Jurisdiktionen, was komplexe Anforderungen für internationale Datentransfers schafft.\n\n🔒 ADVISORI's DSGVO-Compliance-Framework für LLMs:\n• Privacy Impact Assessments für LLMs: Durchführung spezialisierter Datenschutz-Folgenabschätzungen, die LLM-spezifische Risiken und Schutzmaßnahmen bewerten.\n• Technische und organisatorische Maßnahmen: Implementierung umfassender TOM-Kataloge, die speziell für LLM-Umgebungen entwickelt wurden und alle DSGVO-Anforderungen abdecken.\n• Betroffenenrechte-Management: Entwicklung von Systemen und Prozessen zur effektiven Umsetzung aller Betroffenenrechte in LLM-Kontexten.\n• Dokumentation und Nachweisführung: Etablierung umfassender Dokumentationssysteme für Compliance-Nachweis und regulatorische Audits."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie adressiert ADVISORI die Herausforderungen der EU-AI-Verordnung für LLM-Sicherheit und Datenschutz?",
        answer: "Die EU-AI-Verordnung bringt neue regulatorische Anforderungen für LLM-Systeme mit sich, die über traditionelle Datenschutzbestimmungen hinausgehen. ADVISORI entwickelt proaktive Compliance-Strategien, die sowohl aktuelle als auch zukünftige Anforderungen der AI-Verordnung erfüllen und gleichzeitig Innovation und Wettbewerbsfähigkeit erhalten.\n\n🏛️ EU-AI-Verordnung Compliance-Anforderungen:\n• Risikoklassifizierung und Assessment: Systematische Bewertung von LLM-Systemen nach den Risikoklassen der AI-Verordnung und Implementierung entsprechender Schutzmaßnahmen und Governance-Strukturen.\n• Transparenz und Dokumentationspflichten: Erfüllung umfassender Dokumentations- und Transparenzanforderungen, einschließlich technischer Dokumentation, Risikomanagementsysteme und Qualitätsmanagementsysteme.\n• Menschliche Aufsicht und Kontrolle: Implementierung angemessener menschlicher Aufsichtsmechanismen, die sicherstellen, dass LLM-Entscheidungen nachvollziehbar und kontrollierbar bleiben.\n• Robustheit und Cybersicherheit: Gewährleistung der Robustheit von LLM-Systemen gegen Cyberangriffe, Manipulation und unbeabsichtigte Fehlfunktionen.\n\n🛡️ ADVISORI's AI-Act-Compliance-Strategie:\n• Proaktive Regulierungs-Vorbereitung: Kontinuierliche Überwachung der AI-Verordnung-Entwicklung und frühzeitige Implementierung von Compliance-Maßnahmen vor Inkrafttreten.\n• Integrierte Governance-Frameworks: Entwicklung von Governance-Strukturen, die sowohl DSGVO- als auch AI-Verordnung-Anforderungen nahtlos integrieren.\n• Technische Compliance-Lösungen: Implementierung technischer Lösungen für Auditierbarkeit, Erklärbarkeit und Rückverfolgbarkeit von LLM-Entscheidungen.\n• Stakeholder-Engagement: Aufbau von Beziehungen zu Regulierungsbehörden und Branchenverbänden für frühzeitige Einblicke in Implementierungsrichtlinien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Welche Verfahren implementiert ADVISORI für Datenschutz-Folgenabschätzungen und Compliance-Audits bei LLM-Systemen?",
        answer: "Datenschutz-Folgenabschätzungen und Compliance-Audits für LLM-Systeme erfordern spezialisierte Methoden, die die Komplexität und Einzigartigkeit von Large Language Models berücksichtigen. ADVISORI entwickelt umfassende Assessment-Frameworks, die sowohl technische als auch rechtliche Aspekte abdecken und kontinuierliche Compliance-Überwachung gewährleisten.\n\n📋 Spezialisierte DSFA-Verfahren für LLMs:\n• LLM-spezifische Risikobewertung: Entwicklung von Bewertungsmatrizen, die LLM-spezifische Datenschutzrisiken wie unbeabsichtigte Datenpreisgabe, Modell-Inversion-Angriffe und Training-Data-Extraction systematisch erfassen.\n• Stakeholder-Analyse und Betroffenenidentifikation: Umfassende Analyse aller Stakeholder und potenziell betroffenen Personen, einschließlich direkter Nutzer, indirekter Betroffener und Dritter.\n• Technische Schutzmaßnahmen-Assessment: Bewertung der Wirksamkeit implementierter technischer Schutzmaßnahmen wie Differential Privacy, Federated Learning und sichere Multi-Party-Computation.\n• Rechtmäßigkeits- und Verhältnismäßigkeitsprüfung: Detaillierte Analyse der Rechtsgrundlagen für LLM-Datenverarbeitung und Bewertung der Verhältnismäßigkeit zwischen Nutzen und Datenschutzrisiken.\n\n🔍 Kontinuierliche Compliance-Audit-Prozesse:\n• Automatisierte Compliance-Monitoring: Implementierung kontinuierlicher Überwachungssysteme, die Compliance-Verstöße in Echtzeit erkennen und melden.\n• Regelmäßige Penetrationstests: Durchführung spezialisierter Sicherheitstests, die LLM-spezifische Angriffsvektoren wie Prompt Injection und Model Extraction simulieren.\n• Dokumentations-Audits: Systematische Überprüfung aller Compliance-Dokumentation auf Vollständigkeit, Aktualität und regulatorische Konformität.\n• Third-Party-Assessments: Koordination unabhängiger Drittanbieter-Audits für objektive Compliance-Bewertung und Zertifizierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie gewährleistet ADVISORI die Umsetzung von Betroffenenrechten in LLM-Umgebungen und welche technischen Lösungen setzen wir ein?",
        answer: "Die Umsetzung von Betroffenenrechten in LLM-Umgebungen stellt einzigartige technische und rechtliche Herausforderungen dar, da traditionelle Datenschutzverfahren nicht direkt auf trainierte Modelle anwendbar sind. ADVISORI entwickelt innovative technische Lösungen und Prozesse, die alle DSGVO-Betroffenenrechte effektiv in LLM-Kontexten implementieren.\n\n👤 Betroffenenrechte in LLM-Kontexten:\n• Auskunftsrecht und Transparenz: Entwicklung von Systemen, die Betroffenen verständliche Informationen über die Verarbeitung ihrer Daten in LLM-Systemen bereitstellen, einschließlich Zweck, Umfang und Auswirkungen.\n• Recht auf Berichtigung: Implementierung von Verfahren zur Korrektur fehlerhafter Informationen in LLM-Outputs und zur Aktualisierung von Trainingsdaten, wo technisch möglich.\n• Recht auf Löschung: Entwicklung innovativer Ansätze wie Machine Unlearning und Differential Privacy, um das Recht auf Vergessenwerden in trainierten Modellen umzusetzen.\n• Recht auf Datenübertragbarkeit: Bereitstellung strukturierter Datenexporte und Schnittstellen für die Übertragung personenbezogener Daten zwischen LLM-Systemen.\n\n🔧 Technische Implementierungslösungen:\n• Machine Unlearning Technologien: Implementierung fortschrittlicher Unlearning-Algorithmen, die spezifische Daten aus trainierten Modellen entfernen können, ohne die Gesamtfunktionalität zu beeinträchtigen.\n• Granulare Zugriffskontrolle: Entwicklung feingranularer Berechtigungssysteme, die individuelle Betroffenenrechte auf Datenebene durchsetzen können.\n• Automated Rights Management: Implementierung automatisierter Systeme für die Bearbeitung von Betroffenenanfragen mit definierten SLAs und Eskalationsprozessen.\n• Audit-Trail-Systeme: Umfassende Protokollierung aller Betroffenenrechte-Aktivitäten für Compliance-Nachweis und regulatorische Audits."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new DSGVO Compliance FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ DSGVO Compliance FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
