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
    console.log('Updating DSGVO-konforme KI-Lösungen page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo-konforme-ki-loesungen' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo-konforme-ki-loesungen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist Privacy-by-Design bei KI-Implementierungen mehr als nur eine Compliance-Anforderung und wie positioniert ADVISORI dies als strategischen Wettbewerbsvorteil?',
        answer: "Privacy-by-Design in KI-Systemen repräsentiert einen fundamentalen Paradigmenwechsel von reaktiver Compliance hin zu proaktiver Datenschutz-Innovation. Für C-Level-Führungskräfte bedeutet dies nicht nur die Erfüllung rechtlicher Verpflichtungen, sondern die Schaffung eines nachhaltigen Wettbewerbsvorteils durch vertrauensvolle AI-Innovation. ADVISORI versteht Privacy-by-Design als strategischen Enabler für zukunftssichere KI-Geschäftsmodelle.\n\n🎯 Strategische Imperative für Privacy-by-Design KI:\n• Vertrauensaufbau als Wettbewerbsvorteil: Unternehmen mit nachweislich datenschutzkonformen KI-Lösungen schaffen Vertrauen bei Kunden, Partnern und Investoren, was sich direkt in Marktvorteilen und höheren Bewertungen niederschlägt.\n• Zukunftssichere Compliance-Positionierung: Privacy-by-Design KI-Architekturen sind automatisch für kommende Regulierungen wie den EU AI Act vorbereitet und reduzieren langfristige Compliance-Kosten erheblich.\n• Internationale Markterschließung: Datenschutzkonforme KI-Lösungen ermöglichen problemlose Expansion in regulierte Märkte und schaffen globale Skalierungsmöglichkeiten.\n• Risikominimierung und Versicherbarkeit: Proaktiver Datenschutz reduziert Haftungsrisiken und kann zu günstigeren Versicherungskonditionen führen.\n\n🛡️ ADVISORI's Privacy-by-Design Excellence:\n• Architektur-Integration: Wir entwickeln KI-Systeme, bei denen Datenschutz nicht nachträglich hinzugefügt, sondern als fundamentales Designprinzip von Anfang an integriert wird.\n• Technologische Innovation: Einsatz fortschrittlicher Technologien wie Differential Privacy, Federated Learning und Homomorphic Encryption für maximalen Datenschutz ohne Performance-Verluste.\n• Governance-Excellence: Etablierung umfassender Datenschutz-Governance-Strukturen, die über gesetzliche Mindestanforderungen hinausgehen und Best-Practice-Standards setzen.\n• Kontinuierliche Optimierung: Implementierung von Monitoring- und Optimierungssystemen für dauerhafte Datenschutz-Excellence und proaktive Compliance-Sicherstellung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie navigiert ADVISORI die komplexe DSGVO-Compliance-Landschaft für KI-Systeme und welche konkreten rechtlichen Risiken werden durch unseren Ansatz minimiert?',
        answer: "Die DSGVO-Compliance für KI-Systeme erfordert ein tiefes Verständnis der Wechselwirkungen zwischen Datenschutzrecht und AI-Technologie. ADVISORI navigiert diese Komplexität durch einen systematischen, rechtlich fundierten Ansatz, der alle DSGVO-Artikel berücksichtigt und gleichzeitig praktikable KI-Lösungen ermöglicht. Unser Ansatz minimiert rechtliche Risiken proaktiv und schafft Rechtssicherheit für AI-Innovationen.\n\n⚖️ Rechtliche Risikominimierung durch systematische Compliance:\n• Artikel-spezifische KI-Compliance: Systematische Umsetzung aller relevanten DSGVO-Artikel, insbesondere Artikel 25 (Privacy-by-Design), Artikel 35 (Datenschutz-Folgenabschätzung) und Artikel 22 (Automatisierte Entscheidungsfindung).\n• Rechtsgrundlagen-Optimierung: Präzise Identifikation und Dokumentation der rechtlichen Grundlagen für KI-Datenverarbeitung, einschließlich berechtigter Interessen und Einwilligungsmanagement.\n• Betroffenenrechte-Integration: Technische Implementierung von Betroffenenrechten wie Auskunft, Berichtigung, Löschung und Datenportabilität direkt in KI-Architekturen.\n• Internationale Datentransfer-Compliance: Rechtssichere Gestaltung grenzüberschreitender KI-Datenflüsse unter Berücksichtigung von Angemessenheitsbeschlüssen und Standardvertragsklauseln.\n\n🔍 ADVISORI's Compliance-Excellence-Framework:\n• Präventive Risikobewertung: Umfassende Analyse aller datenschutzrechtlichen Risiken vor der KI-Implementierung mit detaillierter Risikomatrix und Mitigation-Strategien.\n• Dokumentations-Excellence: Vollständige, audit-bereite Dokumentation aller Datenschutz-Maßnahmen, Verarbeitungsverzeichnisse und Compliance-Nachweise für KI-Systeme.\n• Kontinuierliche Rechtsüberwachung: Proaktive Überwachung von Rechtsprechung und regulatorischen Entwicklungen mit entsprechender Anpassung der KI-Compliance-Strategien.\n• Incident-Response-Bereitschaft: Etablierung spezialisierter Incident-Response-Prozesse für KI-spezifische Datenschutzverletzungen mit klaren Eskalations- und Meldewegen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche technischen und organisatorischen Maßnahmen implementiert ADVISORI für DSGVO-konforme KI-Systeme und wie gewährleisten diese nachhaltigen Datenschutz?',
        answer: "Die Implementierung technischer und organisatorischer Maßnahmen für DSGVO-konforme KI-Systeme erfordert einen ganzheitlichen Ansatz, der sowohl cutting-edge Technologien als auch robuste Governance-Strukturen umfasst. ADVISORI entwickelt maßgeschneiderte TOM-Frameworks, die nicht nur aktuelle DSGVO-Anforderungen erfüllen, sondern auch für zukünftige regulatorische Entwicklungen gerüstet sind.\n\n🔧 Technische Maßnahmen für KI-Datenschutz:\n• Privacy-Preserving Machine Learning: Implementierung von Differential Privacy, Federated Learning und Secure Multi-Party Computation für datenschutzfreundliches KI-Training ohne zentrale Datensammlung.\n• Homomorphic Encryption: Einsatz von verschlüsselten Berechnungen, die KI-Operationen auf verschlüsselten Daten ermöglichen, ohne diese jemals zu entschlüsseln.\n• Data Minimization durch Design: Architektur-Prinzipien, die automatisch nur die minimal notwendigen Daten für KI-Operationen verwenden und überflüssige Datensammlung technisch verhindern.\n• Anonymisierung und Pseudonymisierung: Fortschrittliche Techniken zur irreversiblen Anonymisierung von Trainingsdaten und sicheren Pseudonymisierung für nachvollziehbare KI-Entscheidungen.\n\n🏛️ Organisatorische Maßnahmen für nachhaltige Compliance:\n• KI-Datenschutz-Governance: Etablierung spezialisierter Governance-Strukturen mit klaren Rollen, Verantwortlichkeiten und Entscheidungsprozessen für datenschutzkonforme KI-Entwicklung.\n• Kontinuierliche Schulung und Sensibilisierung: Umfassende Schulungsprogramme für alle an KI-Projekten beteiligten Mitarbeiter zu Datenschutz-Prinzipien und DSGVO-Compliance.\n• Audit- und Monitoring-Systeme: Implementierung automatisierter Überwachungssysteme für kontinuierliche Compliance-Kontrolle und proaktive Identifikation von Datenschutz-Risiken.\n• Vendor-Management und Supply-Chain-Security: Rigorose Überprüfung und Überwachung aller KI-bezogenen Dienstleister und Technologie-Partner für durchgängige Datenschutz-Compliance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie bereitet ADVISORI Unternehmen auf die EU AI Act Anforderungen vor und welche strategischen Vorteile entstehen durch frühzeitige Compliance-Positionierung?',
        answer: "Die EU AI Act Vorbereitung erfordert eine strategische Herangehensweise, die über reine Compliance hinausgeht und KI-Governance als Wettbewerbsvorteil positioniert. ADVISORI entwickelt zukunftssichere AI Act Compliance-Strategien, die Unternehmen nicht nur für die kommenden Regulierungen rüsten, sondern auch als Marktführer in verantwortungsvoller AI-Innovation positionieren.\n\n🎯 Strategische EU AI Act Positionierung:\n• First-Mover-Advantage: Unternehmen, die frühzeitig AI Act Compliance implementieren, positionieren sich als vertrauenswürdige AI-Anbieter und schaffen Wettbewerbsvorteile vor der vollständigen Regulierungsimplementierung.\n• Marktdifferenzierung: AI Act konforme Systeme werden zum Qualitätsmerkmal und Differenzierungsfaktor, der Premium-Positionierung und höhere Margen ermöglicht.\n• Internationale Expansion: EU AI Act Compliance schafft die Grundlage für globale Markterschließung, da europäische Standards oft als internationale Benchmarks fungieren.\n• Investoren-Vertrauen: Nachweisliche AI Act Readiness stärkt das Vertrauen von Investoren und kann sich positiv auf Unternehmensbewertungen auswirken.\n\n🔍 ADVISORI's AI Act Excellence Framework:\n• Risk Classification Excellence: Präzise Klassifikation von KI-Systemen nach AI Act Risikokategorien mit detaillierter Analyse der jeweiligen Compliance-Anforderungen und Implementierungsstrategien.\n• Conformity Assessment Vorbereitung: Systematische Vorbereitung auf Konformitätsbewertungsverfahren mit umfassender Dokumentation und Test-Frameworks für High-Risk AI Systeme.\n• Governance-Integration: Nahtlose Integration von AI Act Anforderungen in bestehende Unternehmens-Governance-Strukturen für effiziente und nachhaltige Compliance.\n• Kontinuierliche Regulatory Intelligence: Proaktive Überwachung der AI Act Entwicklungen und Anpassung der Compliance-Strategien an neue Leitlinien und Durchführungsbestimmungen."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
