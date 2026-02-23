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
    console.log('Updating DSGVO für KI page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo-fuer-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo-fuer-ki" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie bereitet ADVISORI Unternehmen auf die EU-KI-Verordnung vor und welche Synergien bestehen zwischen DSGVO und AI Act Compliance?',
        answer: "Die EU-KI-Verordnung (AI Act) ergänzt die DSGVO um spezifische Anforderungen für KI-Systeme und schafft neue Compliance-Herausforderungen. ADVISORI entwickelt integrierte Compliance-Strategien, die sowohl DSGVO als auch AI Act-Anforderungen harmonisch verbinden und Synergien zwischen beiden Regulierungsrahmen nutzen.\n\n⚖️ Konvergenz von DSGVO und AI Act:\n• Beide Regulierungen teilen grundlegende Prinzipien wie Transparenz, Fairness und menschliche Aufsicht über automatisierte Systeme.\n• Risikobewertungsansätze in beiden Gesetzen können harmonisiert werden, um Doppelarbeit zu vermeiden und Effizienz zu steigern.\n• Dokumentationsanforderungen überschneiden sich erheblich, ermöglichen aber auch gemeinsame Compliance-Frameworks.\n• Betroffenenrechte werden durch den AI Act erweitert und ergänzen DSGVO-Rechte um KI-spezifische Aspekte.\n\n🎯 AI Act Compliance-Vorbereitung:\n• Klassifikation von KI-Systemen nach Risikoebenen (minimal, begrenzt, hoch, unannehmbares Risiko) für angemessene Compliance-Maßnahmen.\n• Entwicklung von Konformitätsbewertungsverfahren für Hochrisiko-KI-Systeme mit integrierten DSGVO-Anforderungen.\n• Implementierung von Qualitätsmanagementsystemen, die sowohl technische als auch datenschutzrechtliche Aspekte abdecken.\n• Etablierung von Post-Market-Monitoring-Systemen für kontinuierliche Überwachung von KI-Performance und Compliance.\n\n📋 Integrierte Governance-Frameworks:\n• Unified Risk Assessment-Prozesse, die sowohl DSGVO-Datenschutzrisiken als auch AI Act-Systemrisiken bewerten.\n• Harmonisierte Dokumentationsstandards, die beide Regulierungsanforderungen effizient erfüllen.\n• Cross-funktionale Compliance-Teams mit Expertise in beiden Rechtsbereichen für kohärente Umsetzung.\n• Gemeinsame Audit- und Monitoring-Prozesse zur Reduzierung von Compliance-Overhead.\n\n🔄 ADVISORI's Dual Compliance Excellence:\n• Entwicklung von Compliance-Roadmaps, die schrittweise Umsetzung beider Regulierungen ermöglichen.\n• Training von Compliance-Teams in integrierten DSGVO-AI Act-Anforderungen für umfassende Expertise.\n• Implementierung von Technology-Solutions, die beide Compliance-Frameworks automatisch unterstützen.\n• Kontinuierliche Überwachung regulatorischer Entwicklungen für proaktive Anpassung von Compliance-Strategien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche besonderen Herausforderungen entstehen bei der DSGVO-konformen Implementierung von Generative AI und Large Language Models und wie adressiert ADVISORI diese?',
        answer: "Generative AI und Large Language Models stellen einzigartige DSGVO-Herausforderungen dar, da sie auf riesigen Datenmengen trainiert werden und unvorhersehbare Outputs generieren können. ADVISORI entwickelt spezialisierte Compliance-Frameworks für GenAI, die sowohl die innovativen Möglichkeiten als auch die Datenschutzrisiken dieser Technologien berücksichtigen.\n\n🤖 DSGVO-Herausforderungen bei Generative AI:\n• Training auf großen, oft unstrukturierten Datensätzen erschwert die Nachverfolgung und Kontrolle personenbezogener Daten.\n• Unvorhersehbare Generierung von Inhalten kann zur unbeabsichtigten Preisgabe personenbezogener Informationen führen.\n• Schwierigkeit der Umsetzung von Betroffenenrechten, insbesondere Löschung und Berichtigung in bereits trainierten Modellen.\n• Komplexe Transparenzanforderungen bei der Erklärung von Generierungsprozessen und verwendeten Datenquellen.\n\n🔍 Data Governance für Large Language Models:\n• Comprehensive Data Auditing aller Trainingsdaten zur Identifikation und Klassifikation personenbezogener Informationen.\n• Implementierung von Data Sanitization-Prozessen zur Entfernung oder Anonymisierung sensibler Daten vor dem Training.\n• Entwicklung von Synthetic Data-Strategien zur Reduzierung der Abhängigkeit von echten personenbezogenen Daten.\n• Etablierung von Data Provenance-Systemen zur Nachverfolgung der Herkunft und Verarbeitung von Trainingsdaten.\n\n🛡️ Output-Kontrolle und Risikominimierung:\n• Content Filtering-Systeme zur Erkennung und Blockierung von Outputs mit personenbezogenen Informationen.\n• Differential Privacy-Techniken im Training zur Reduzierung des Risikos der Memorierung spezifischer Datenpunkte.\n• Output Monitoring und Anomalie-Erkennung zur Identifikation problematischer Generierungen.\n• User Education und Guidelines für verantwortungsvolle Nutzung von GenAI-Systemen.\n\n🎯 ADVISORI's GenAI Compliance Framework:\n• Entwicklung spezifischer DPIA-Templates für verschiedene GenAI-Anwendungsfälle und Deployment-Szenarien.\n• Implementierung von Privacy-Preserving Training-Techniken wie Federated Learning für Large Language Models.\n• Etablierung von GenAI Ethics Boards zur Bewertung und Governance von Generative AI-Projekten.\n• Kontinuierliche Forschung und Entwicklung neuer Privacy-Techniken für emerging GenAI-Technologien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie unterstützt ADVISORI bei der Implementierung von Incident Response-Prozessen für DSGVO-Datenschutzverletzungen in KI-Systemen?',
        answer: "Datenschutzverletzungen in KI-Systemen erfordern spezialisierte Incident Response-Prozesse, die sowohl die technischen Komplexitäten von AI als auch die strengen DSGVO-Meldepflichten berücksichtigen. ADVISORI entwickelt umfassende Incident Response-Frameworks, die schnelle Reaktion, effektive Schadensbegrenzung und vollständige Compliance gewährleisten.\n\n🚨 KI-spezifische Datenschutzverletzungs-Szenarien:\n• Model Inversion Attacks, die personenbezogene Informationen aus KI-Modellen extrahieren.\n• Data Poisoning-Angriffe, die Trainingsdaten manipulieren und zu Datenschutzverletzungen führen.\n• Unbeabsichtigte Preisgabe von Trainingsdaten durch Modell-Outputs oder -Verhalten.\n• Kompromittierung von KI-Infrastrukturen mit Zugriff auf große Mengen personenbezogener Daten.\n\n⏱️ DSGVO-konforme Incident Response-Timelines:\n• Sofortige Erkennung und Bewertung von Datenschutzverletzungen durch automatisierte Monitoring-Systeme.\n• Meldung an Aufsichtsbehörden innerhalb von 72 Stunden gemäß Artikel 33 DSGVO mit KI-spezifischen Details.\n• Benachrichtigung betroffener Personen ohne unzumutbare Verzögerung bei hohem Risiko für Rechte und Freiheiten.\n• Dokumentation aller Incident Response-Aktivitäten für Compliance-Nachweis und Lessons Learned.\n\n🔧 Technische Incident Response für KI-Systeme:\n• Immediate Containment-Strategien zur Isolation kompromittierter KI-Komponenten ohne Beeinträchtigung kritischer Services.\n• Forensic Analysis von KI-Modellen und Trainingsdaten zur Bestimmung des Umfangs der Datenschutzverletzung.\n• Model Rollback-Verfahren zur Wiederherstellung sicherer Modellversionen bei kompromittierten AI-Systemen.\n• Data Flow Analysis zur Identifikation aller betroffenen Datenströme und nachgelagerten Systeme.\n\n📋 ADVISORI's Comprehensive Incident Response Framework:\n• Entwicklung KI-spezifischer Incident Response-Playbooks für verschiedene Arten von Datenschutzverletzungen.\n• Training von Incident Response-Teams in KI-Technologien und deren spezifischen Sicherheitsrisiken.\n• Implementierung automatisierter Incident Detection-Systeme mit KI-optimierten Erkennungsalgorithmen.\n• Etablierung von Stakeholder-Kommunikationsprozessen für transparente und zeitnahe Information aller Beteiligten.\n\n🔄 Post-Incident Improvement:\n• Comprehensive Root Cause Analysis zur Identifikation systemischer Schwachstellen in KI-Sicherheitsarchitekturen.\n• Implementation von Corrective Measures zur Verhinderung ähnlicher Vorfälle in der Zukunft.\n• Update von Security Policies und Procedures basierend auf Incident-Erkenntnissen.\n• Regular Incident Response Drills zur Verbesserung der Reaktionsfähigkeit und Prozessoptimierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie gestaltet ADVISORI DSGVO-konforme KI-Systeme für Kinder und Jugendliche und welche besonderen Schutzmaßnahmen sind erforderlich?',
        answer: "KI-Systeme, die Daten von Kindern und Jugendlichen verarbeiten, unterliegen besonderen DSGVO-Schutzbestimmungen, die erhöhte Sorgfalt und spezielle Sicherheitsmaßnahmen erfordern. ADVISORI entwickelt Child-Safe AI-Frameworks, die sowohl innovative Bildungs- und Unterhaltungsmöglichkeiten als auch maximalen Datenschutz für minderjährige Nutzer gewährleisten.\n\n👶 Besondere DSGVO-Anforderungen für Kinder:\n• Artikel 8 DSGVO verlangt Einwilligung der Erziehungsberechtigten für Kinder unter 16 Jahren (in Deutschland unter 14 Jahren).\n• Erhöhte Transparenzpflichten erfordern altersgerechte Erklärungen von KI-Verarbeitungen und deren Auswirkungen.\n• Besondere Sorgfaltspflichten bei der Verarbeitung von Daten, die Rückschlüsse auf Entwicklung und Verhalten von Kindern ermöglichen.\n• Verstärkte Sicherheitsmaßnahmen zum Schutz vor Missbrauch und ungeeigneten Inhalten.\n\n🎓 Child-Safe AI Design Principles:\n• Age-Appropriate Design mit KI-Systemen, die speziell für verschiedene Entwicklungsstufen optimiert sind.\n• Minimale Datensammlung mit Fokus auf pädagogisch notwendige Informationen ohne überflüssige Profilbildung.\n• Transparent und verständliche KI-Interaktionen, die Kindern helfen, AI-Systeme zu verstehen und zu kontrollieren.\n• Robuste Content Filtering-Systeme zur Verhinderung der Generierung oder Empfehlung ungeeigneter Inhalte.\n\n🔐 Technische Schutzmaßnahmen für Kinder-KI:\n• Enhanced Privacy Controls mit granularen Einstellungen für Eltern zur Kontrolle der KI-Datenverarbeitung.\n• Behavioral Monitoring zur Erkennung ungewöhnlicher Nutzungsmuster, die auf Missbrauch hindeuten könnten.\n• Secure Data Isolation für Kinderdaten mit verstärkten Zugriffsbeschränkungen und Verschlüsselung.\n• Regular Safety Audits zur kontinuierlichen Bewertung der Sicherheit und Angemessenheit von KI-Systemen für Kinder.\n\n👨‍👩‍👧‍👦 Parental Control und Transparency:\n• Comprehensive Parental Dashboards mit detaillierten Einblicken in KI-Interaktionen und Lernfortschritte ihrer Kinder.\n• Granular Consent Management ermöglicht Eltern präzise Kontrolle über verschiedene Aspekte der KI-Datenverarbeitung.\n• Regular Progress Reports informieren Eltern über Lernaktivitäten und KI-Empfehlungen für ihre Kinder.\n• Easy Opt-Out Mechanisms ermöglichen schnelle Beendigung der KI-Datenverarbeitung auf Wunsch der Eltern.\n\n🎯 ADVISORI's Child-Safe AI Excellence:\n• Entwicklung altersgerechter Consent-Interfaces, die sowohl Kinder als auch Eltern angemessen informieren.\n• Implementierung von Child Development-Expertise in KI-Design-Prozesse für entwicklungsgerechte Systeme.\n• Etablierung von Child Safety Boards mit Pädagogen, Psychologen und Datenschutzexperten.\n• Kontinuierliche Forschung in Child-Computer Interaction für optimale Balance zwischen Innovation und Schutz."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
