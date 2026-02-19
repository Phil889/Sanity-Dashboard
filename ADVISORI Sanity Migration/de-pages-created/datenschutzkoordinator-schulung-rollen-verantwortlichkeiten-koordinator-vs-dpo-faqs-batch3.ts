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
    console.log('Updating Datenschutzkoordinator Schulung Rollen & Verantwortlichkeiten - Koordinator vs DPO page with FAQs batch 3...')
    
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
        _key: generateKey('faq', 9),
        question: "Welche kritischen Erfolgsfaktoren bestimmen die erfolgreiche Implementierung einer dualen Datenschutzorganisation mit Koordinator und DPO?",
        answer: "Die erfolgreiche Implementierung einer dualen Datenschutzorganisation erfordert eine durchdachte Balance zwischen rechtlichen Anforderungen, organisatorischen Realitäten und strategischen Zielen. Kritische Erfolgsfaktoren umfassen sowohl strukturelle als auch kulturelle Aspekte, die systematisch adressiert werden müssen.\n\n🏗️ Strukturelle Erfolgsfaktoren:\n• Klare Governance-Architektur: Etablierung eindeutiger Entscheidungsstrukturen, Berichtswege und Verantwortlichkeitsmatrizen, die beiden Rollen optimale Funktionsbedingungen schaffen.\n• Ressourcen-Adequacy: Angemessene Ausstattung beider Funktionen mit personellen, technischen und finanziellen Ressourcen entsprechend ihrer jeweiligen Aufgabenprofile.\n• Systemische Integration: Einbettung der dualen Struktur in bestehende Unternehmensprozesse und IT-Landschaften ohne Disruption der operativen Abläufe.\n• Performance-Management: Entwicklung rollenspezifischer KPIs und Bewertungssysteme, die individuelle Erfolge und Synergieeffekte messbar machen.\n\n🌟 Kulturelle und Change-Management-Faktoren:\n• Akzeptanz-Building: Systematische Kommunikation der Vorteile dualer Datenschutzorganisation an alle Stakeholder-Gruppen und aktives Addressing von Bedenken.\n• Kompetenz-Development: Kontinuierliche Weiterbildung beider Rollen zur Sicherstellung aktueller Expertise und effektiver Zusammenarbeit.\n• Vertrauen und Kooperation: Aufbau vertrauensvoller Arbeitsbeziehungen zwischen Koordinator und DPO durch gemeinsame Projekte und strukturierte Zusammenarbeit.\n• Kontinuierliche Optimierung: Etablierung regelmäßiger Review-Prozesse zur Anpassung der Organisationsstruktur an sich ändernde Anforderungen und Erfahrungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie bewältigen Unternehmen die besonderen Herausforderungen bei der Koordination zwischen internem Datenschutzkoordinator und externem DPO?",
        answer: "Die Koordination zwischen internem Datenschutzkoordinator und externem DPO bringt spezifische Herausforderungen mit sich, die über die normale interne Zusammenarbeit hinausgehen. Erfolgreiches Management dieser Konstellation erfordert strukturierte Ansätze und bewährte Praktiken für externe Kooperationen.\n\n🔗 Besondere Herausforderungen bei externer DPO-Konstellation:\n• Informationsasymmetrien: Externe DPOs haben naturgemäß weniger direkten Einblick in interne Prozesse und Unternehmenskultur, was intensive Informationsaufbereitung durch den Koordinator erfordert.\n• Verfügbarkeits-Management: Koordination verschiedener Zeitpläne und Prioritäten zwischen interner Organisation und externer Ressource.\n• Vertraulichkeits- und Sicherheitsaspekte: Gewährleistung angemessenen Informationsaustauschs unter Wahrung notwendiger Vertraulichkeit und Datensicherheit.\n• Kosten-Nutzen-Optimierung: Effiziente Nutzung externer DPO-Kapazitäten durch strukturierte Vorbereitung und fokussierte Interaktionen.\n\n💡 Bewährte Lösungsstrategien:\n• Strukturierte Onboarding-Prozesse: Systematische Einführung des externen DPO in Unternehmensstrukturen, -prozesse und -kultur durch den Koordinator.\n• Regelmäßige Kommunikationsrhythmen: Etablierung fester Abstimmungstermine und strukturierter Berichtswege zwischen beiden Rollen.\n• Dokumentations-Standards: Entwicklung einheitlicher Dokumentations- und Informationsstandards, die effizienten Wissenstransfer ermöglichen.\n• Hybrid-Arbeitsmodelle: Kombination verschiedener Kommunikations- und Kollaborationsformate (vor Ort, digital, asynchron) für optimale Zusammenarbeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Welche Rolle spielen technologische Lösungen bei der Unterstützung der Zusammenarbeit zwischen Datenschutzkoordinator und DPO?",
        answer: "Technologische Lösungen sind entscheidend für die effektive Zusammenarbeit zwischen Datenschutzkoordinator und DPO, da sie strukturierte Kommunikation, gemeinsame Datenbasis und effiziente Arbeitsabläufe ermöglichen. Moderne Datenschutzorganisationen nutzen integrierte Technologie-Stacks zur Optimierung ihrer dualen Strukturen.\n\n🖥️ Technologische Grundausstattung für duale Datenschutzorganisation:\n• Integrierte Datenschutz-Management-Plattformen: Zentrale Systeme für Verarbeitungsverzeichnisse, DSFA-Management und Compliance-Monitoring mit rollenspezifischen Zugriffsrechten.\n• Kollaborations- und Kommunikationstools: Moderne Plattformen für strukturierte Zusammenarbeit, Dokumentenaustausch und projektbasierte Kooperation.\n• Dashboard und Reporting-Systeme: Intelligente Dashboards, die beiden Rollen relevante KPIs und Status-Informationen in realzeit zur Verfügung stellen.\n• Workflow-Management-Systeme: Automatisierte Prozessunterstützung für typische Datenschutzabläufe mit klarer Aufgabenverteilung zwischen beiden Rollen.\n\n⚡ Erweiterte Technologie-Features für optimierte Zusammenarbeit:\n• AI-gestützte Risikobewertung: Intelligente Systeme zur automatischen Identifikation datenschutzrelevanter Risiken und entsprechende Aufgabenverteilung.\n• Integrierte Audit-Trails: Lückenlose Dokumentation aller datenschutzrelevanten Aktivitäten beider Rollen für Compliance-Nachweis und kontinuierliche Verbesserung.\n• Mobile Accessibility: Responsive Plattformen, die beiden Rollen flexiblen Zugriff auf relevante Informationen und Funktionen ermöglichen.\n• Integration in Unternehmens-IT: Nahtlose Anbindung an bestehende Unternehmenssysteme für automatisierten Datenfluss und reduzierte Doppelarbeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie entwickeln Unternehmen eine nachhaltige Succession-Planning-Strategie für beide Datenschutzrollen?",
        answer: "Eine nachhaltige Succession-Planning-Strategie für Datenschutzkoordinator und DPO ist essentiell für die kontinuierliche Datenschutz-Compliance und organisatorische Resilienz. Angesichts der kritischen Bedeutung beider Rollen müssen Unternehmen proaktive Nachfolgeplanung und Wissensmanagement-Systeme etablieren.\n\n📋 Strategische Elemente für nachhaltiges Succession Planning:\n• Kompetenz-Mapping und -Transfer: Systematische Dokumentation aller rollenspezifischen Kompetenzen, Prozesse und Wissensbestände zur Sicherstellung vollständiger Übertragbarkeit.\n• Talent-Pipeline-Development: Identifikation und kontinuierliche Entwicklung interner Kandidaten für beide Rollen durch gezielte Weiterbildung und Mentoring-Programme.\n• Cross-Training-Programme: Schulung von Mitarbeitern in Grundlagen beider Rollen zur Schaffung flexibler Vertretungskapazitäten und verbessertem Rollenverständnis.\n• Externe Partner-Netzwerke: Aufbau und Pflege von Beziehungen zu qualifizierten externen Kandidaten und Beratungsunternehmen für Notfall- und Übergangslösungen.\n\n🔄 Implementierung nachhaltiger Kontinuitätsstrukturen:\n• Wissensmanagement-Systeme: Entwicklung umfassender Dokumentations- und Wissensdatenbanken, die kritisches Know-how beider Rollen zugänglich und übertragbar machen.\n• Stufenweise Übergabeprozesse: Strukturierte Übergangsverfahren mit überlappenden Arbeitsperioden, Mentoring und gradueller Verantwortungsübertragung.\n• Kontinuierliche Kompetenzentwicklung: Regelmäßige Weiterbildung und Zertifizierung aller Datenschutz-Mitarbeiter zur Sicherstellung aktueller Expertise.\n• Organisationale Resilienz: Entwicklung redundanter Strukturen und Backup-Systeme, die temporäre Personalausfälle ohne Compliance-Risiken überbrücken können."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
