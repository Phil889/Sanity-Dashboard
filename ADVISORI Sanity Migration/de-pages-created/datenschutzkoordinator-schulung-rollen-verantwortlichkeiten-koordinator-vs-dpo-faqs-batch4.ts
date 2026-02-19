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
    console.log('Updating Datenschutzkoordinator Schulung Rollen & Verantwortlichkeiten - Koordinator vs DPO page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutzkoordinator-schulung-rollen-verantwortlichkeiten-koordinator-vs-dpo' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutzkoordinator-schulung-rollen-verantwortlichkeiten-koordinator-vs-dpo" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Welche spezifischen Krisenmanagement-Kompetenzen benötigen Datenschutzkoordinatoren und DPOs bei Data Breaches und wie koordinieren sie ihre Reaktion?",
        answer: "Data Breach Management erfordert präzise Rollenaufteilung und koordinierte Reaktion zwischen Datenschutzkoordinator und DPO. Beide Rollen haben spezifische Verantwortlichkeiten im Krisenfall, die sich ergänzen und gemeinsam eine umfassende Incident Response gewährleisten.\n\n🚨 Rollenspezifische Krisenmanagement-Kompetenzen:\n• DPO-Verantwortlichkeiten: Rechtliche Bewertung des Vorfalls, Meldeverpflichtungen gegenüber Aufsichtsbehörden, strategische Kommunikation mit Geschäftsleitung und rechtliche Risikobewertung.\n• Koordinator-Aufgaben: Operative Incident Response-Koordination, technische Schadensbegrenzung, interne Kommunikation mit Fachbereichen und Dokumentation aller Maßnahmen.\n• Gemeinsame Verantwortlichkeiten: Betroffeneninformation, Ursachenanalyse, Präventionsmaßnahmen-Entwicklung und organisatorisches Lernen aus dem Vorfall.\n• Eskalations-Kompetenzen: Strukturierte Entscheidungsfindung über Meldeschwellen, Kommunikationsstrategien und Ressourcenallokation im Krisenfall.\n\n⚡ Koordinierte Krisenreaktions-Strategien:\n• Incident Response Playbooks: Entwicklung detaillierter Ablaufpläne mit klarer Aufgabenverteilung, Zeitvorgaben und Eskalationsmechanismen für beide Rollen.\n• Kommunikations-Orchestrierung: Strukturierte Abstimmung zwischen operativer Koordinator-Perspektive und strategischer DPO-Sichtweise für konsistente Krisenkommunikation.\n• Parallele Arbeitsströme: Simultane Bearbeitung operativer und rechtlicher Aspekte durch beide Rollen mit regelmäßiger Synchronisation und Informationsaustausch.\n• Post-Incident-Reviews: Gemeinsame Nachbereitung von Vorfällen zur kontinuierlichen Verbesserung der Krisenreaktionsfähigkeit und Rollenoptimierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie gestalten internationale Unternehmen die Rollen von Datenschutzkoordinatoren und DPOs unter Berücksichtigung verschiedener Rechtsordnungen?",
        answer: "Internationale Unternehmen stehen vor der komplexen Aufgabe, Datenschutzkoordinatoren und DPOs in einem multi-jurisdiktionalen Umfeld zu positionieren. Dies erfordert durchdachte Organisationsstrukturen, die lokale Rechtserfordernisse mit globaler Kohärenz verbinden.\n\n🌍 Multi-Jurisdiktionale Herausforderungen:\n• Rechtspluralismus: Verschiedene Datenschutzregime (GDPR, CCPA, PIPEDA etc.) erfordern spezifische Expertise und lokale Anpassungen der Rollenaufteilung.\n• Compliance-Komplexität: Koordination zwischen globalen Standards und lokalen Anforderungen durch geeignete Aufgabenverteilung zwischen zentralen und dezentralen Funktionen.\n• Cross-Border-Koordination: Effektive Zusammenarbeit zwischen Koordinatoren und DPOs verschiedener Länder und Rechtsräume.\n• Kulturelle Adaptation: Anpassung der Rollenkonzepte an verschiedene Unternehmenskulturen und regulatorische Traditionen.\n\n🏗️ Strukturelle Lösungsansätze für globale Organisationen:\n• Matrix-Organisationsmodelle: Kombination globaler DPO-Funktionen mit lokalen Koordinatoren für optimale Balance zwischen Standardisierung und lokaler Compliance.\n• Regional Hub-Konzepte: Etablierung regionaler Datenschutz-Zentren mit spezialisierten DPOs und koordinierenden Funktionen für mehrere Länder.\n• Competence Center-Ansätze: Zentrale Expertise-Pools für komplexe rechtliche Fragen bei dezentraler operativer Umsetzung durch lokale Koordinatoren.\n• Harmonisierte Governance-Frameworks: Entwicklung globaler Standards und Prozesse, die lokale Besonderheiten integrieren und effektive Zusammenarbeit ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Welche Auswirkungen haben neue Technologien wie AI und Blockchain auf die Rollenverteilung zwischen Datenschutzkoordinator und DPO?",
        answer: "Neue Technologien wie AI und Blockchain schaffen zusätzliche Komplexität für Datenschutzorganisationen und erfordern Anpassungen in der Rollenverteilung zwischen Koordinator und DPO. Beide Funktionen müssen ihre Kompetenzen erweitern und neue Kooperationsformen entwickeln.\n\n🤖 Technologie-spezifische Herausforderungen für Datenschutzrollen:\n• AI-Governance: DPOs benötigen vertiefte Expertise in algorithmischer Transparenz und Fairness, während Koordinatoren operative AI-Compliance-Prozesse implementieren müssen.\n• Blockchain-Compliance: Spezielle Herausforderungen bei der Umsetzung von Betroffenenrechten in unveränderlichen Ledger-Systemen erfordern neue Expertise beider Rollen.\n• IoT-Datenschutz: Koordination zwischen strategischer DPO-Beratung zu IoT-Risiken und operativer Koordinator-Umsetzung von Device-Management-Prozessen.\n• Cloud-Computing-Komplexität: Neue Anforderungen an Datentransfer-Bewertungen und Processor-Management durch beide Rollen.\n\n⚡ Adaptive Rollenentwicklung für Technologie-Integration:\n• Spezialisierungs-Strategien: Entwicklung technologie-spezifischer Expertise innerhalb beider Rollen oder Aufbau spezialisierter Support-Funktionen.\n• Technologie-Assessment-Prozesse: Strukturierte Bewertungsverfahren neuer Technologien mit klarer Aufgabenverteilung zwischen strategischer DPO-Analyse und operativer Koordinator-Implementierung.\n• Innovation-Compliance-Balance: Entwicklung von Frameworks, die Innovation ermöglichen während gleichzeitig Datenschutz-Compliance gewährleistet wird.\n• Kontinuierliche Kompetenzentwicklung: Systematische Weiterbildung beider Rollen in emerging Technologies und deren datenschutzrechtlichen Implikationen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie bewerten und optimieren Unternehmen die Return-on-Investment ihrer dualen Datenschutzorganisation?",
        answer: "Die ROI-Bewertung einer dualen Datenschutzorganisation erfordert sowohl quantitative als auch qualitative Metriken, die den Mehrwert beider Rollen erfassen. Erfolgreiche Unternehmen entwickeln umfassende Business Cases, die operative Effizienz, Risikoreduktion und strategische Vorteile berücksichtigen.\n\n📊 ROI-Bewertungsdimensionen für duale Datenschutzstrukturen:\n• Kosteneinsparungen: Reduktion von Bußgeldrisiken, Effizienzgewinne durch Spezialisierung, Vermeidung von Doppelarbeiten und optimierte Ressourcennutzung.\n• Prozessverbesserungen: Beschleunigte Entscheidungsfindung, verbesserte Compliance-Qualität, reduzierte Fehlerquoten und erhöhte Stakeholder-Zufriedenheit.\n• Strategische Vorteile: Verbesserte Marktpositionierung durch Datenschutz-Excellence, erhöhte Innovationsfähigkeit und gestärkte Reputation.\n• Risikomanagement: Quantifizierung vermiedener Compliance-Risiken, reduzierte Audit-Aufwände und verbesserte Incident-Response-Zeiten.\n\n💰 Optimierungsstrategien für maximalen ROI:\n• Performance-basierte Budgetierung: Allokation von Ressourcen basierend auf messbaren Leistungsindikatoren beider Rollen.\n• Synergie-Maximierung: Identifikation und Nutzung von Effizienzpotenzialen durch optimierte Zusammenarbeit zwischen Koordinator und DPO.\n• Technologie-Investment: Strategische Investitionen in Tools und Systeme, die beide Rollen unterstützen und Skaleneffekte ermöglichen.\n• Kontinuierliche Optimierung: Regelmäßige ROI-Reviews und Anpassung der Organisationsstruktur basierend auf Performance-Daten und sich ändernden Anforderungen."
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
