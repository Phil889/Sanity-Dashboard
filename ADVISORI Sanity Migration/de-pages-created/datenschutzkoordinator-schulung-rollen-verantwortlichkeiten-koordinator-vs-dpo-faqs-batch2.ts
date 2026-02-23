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
    console.log('Updating Datenschutzkoordinator Schulung Rollen & Verantwortlichkeiten - Koordinator vs DPO page with FAQs batch 2...')
    
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
        _key: generateKey('faq', 5),
        question: "Welche spezifischen Qualifikations- und Kompetenzanforderungen unterscheiden Datenschutzkoordinatoren von DPOs und wie entwickelt ADVISORI maßgeschneiderte Weiterbildungskonzepte?",
        answer: "Die Qualifikations- und Kompetenzanforderungen für Datenschutzkoordinatoren und DPOs unterscheiden sich erheblich aufgrund ihrer verschiedenen Rollen und Verantwortlichkeiten. Während der DPO primär als strategischer Berater und Überwacher fungiert, ist der Koordinator als operativer Umsetzer und Prozessmanager tätig. Diese Unterschiede erfordern spezifische Ausbildungsansätze.\n\n🎓 Differenzierte Kompetenzprofile:\n• DPO-Anforderungen: Tiefgreifende juristische Expertise in Datenschutzrecht, strategisches Denken für Unternehmensberatung, Kommunikationsstärke für Geschäftsleitungsebene und Unabhängigkeit in der Entscheidungsfindung.\n• Koordinator-Kompetenzen: Praktische Umsetzungsfähigkeiten, Prozessmanagement-Know-how, operative Datenschutztools-Expertise und Integration in Geschäftsabläufe.\n• Überschneidungskompetenzen: DSGVO/BDSG-Grundlagen, Risikobewertung, Dokumentationsfähigkeiten und Stakeholder-Management.\n• Komplementäre Stärken: DPO-Fokus auf strategische Vision und rechtliche Interpretation, Koordinator-Fokus auf operative Exzellenz und Prozessoptimierung.\n\n📚 ADVISORIs maßgeschneiderte Weiterbildungsarchitektur:\n• Rollenspezifische Lernpfade: Entwicklung individueller Curricula, die auf die spezifischen Anforderungen und Verantwortlichkeiten jeder Rolle zugeschnitten sind.\n• Kompetenz-Gap-Analyse: Systematische Bewertung vorhandener Fähigkeiten und Identifikation gezielter Entwicklungsbedarfe für beide Rollen.\n• Praxisintegration: Kombination theoretischer Schulungen mit praktischen Workshops und realen Anwendungsszenarien.\n• Kontinuierliche Kompetenzentwicklung: Langfristige Weiterbildungsstrategien mit regelmäßigen Updates zu rechtlichen und technologischen Entwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie gestalten Unternehmen die Kommunikation und Berichtswege zwischen Datenschutzkoordinator und DPO optimal und welche Herausforderungen sind dabei zu bewältigen?",
        answer: "Die Gestaltung effektiver Kommunikations- und Berichtswege zwischen Datenschutzkoordinator und DPO ist entscheidend für eine funktionsfähige Datenschutzorganisation. Dabei müssen rechtliche Vorgaben, operative Effizienz und organisatorische Realitäten in Einklang gebracht werden, während gleichzeitig typische Herausforderungen proaktiv adressiert werden.\n\n🔄 Strukturelle Kommunikationsdesign-Prinzipien:\n• Hierarchie-Klarheit: DPO berichtet direkt an Geschäftsleitung, Koordinator über normale Linienorganisation, aber mit definierten fachlichen Abstimmungswegen zum DPO.\n• Informationsfluss-Optimierung: Bidirektionale Kommunikation mit klaren Zuständigkeiten für verschiedene Informationstypen und Eskalationsstufen.\n• Regelmäßige Synchronisation: Strukturierte Abstimmungsrhythmen für operative Updates, strategische Planungen und Krisenmanagement.\n• Dokumentierte Prozesse: Schriftliche Fixierung aller Kommunikationswege, Zuständigkeiten und Entscheidungskompetenzen zur Vermeidung von Missverständnissen.\n\n⚡ Typische Herausforderungen und Lösungsansätze:\n• Informationsasymmetrien: Unterschiedliche Informationszugänge und -bedarfe erfordern strukturierte Informationsverteilungsprozesse und gemeinsame Datenquellen.\n• Prioritätenkonflikte: Verschiedene Zeitrahmen und Dringlichkeitseinschätzungen erfordern klare Eskalationsmechanismen und gemeinsame Priorisierungskriterien.\n• Kulturelle Integration: Überbrückung zwischen strategischer DPO-Perspektive und operativer Koordinator-Sichtweise durch regelmäßige Perspektivenwechsel und gemeinsame Projekte.\n• Technologische Unterstützung: Implementierung geeigneter Collaboration-Tools und Dashboards, die beide Rollen mit relevanten, aktuellen Informationen versorgen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Welche Rolle spielt die Unabhängigkeit des DPO bei der Zusammenarbeit mit dem Datenschutzkoordinator und wie wird diese in der Praxis gewährleistet?",
        answer: "Die Unabhängigkeit des DPO ist ein fundamentales Prinzip der DSGVO, das bei der Zusammenarbeit mit dem Datenschutzkoordinator besondere Aufmerksamkeit erfordert. Diese Unabhängigkeit darf nicht durch zu enge operative Verknüpfungen kompromittiert werden, muss aber dennoch effektive Kooperation ermöglichen.\n\n⚖️ Rechtliche Unabhängigkeitsanforderungen:\n• Weisungsfreiheit: DPO darf keine Anweisungen bezüglich seiner Datenschutzaufgaben erhalten, auch nicht vom Datenschutzkoordinator oder dessen Vorgesetzten.\n• Interessenkonflikt-Vermeidung: Klare Trennung zwischen DPO-Überwachungsfunktion und operativer Umsetzungsverantwortung des Koordinators.\n• Direkte Berichtslinie: DPO berichtet unmittelbar an die höchste Managementebene, unabhängig von organisatorischen Strukturen des Koordinators.\n• Ressourcenautonomie: DPO muss über ausreichende Ressourcen verfügen, um seine Aufgaben unabhängig erfüllen zu können.\n\n🛡️ Praktische Gewährleistungsmaßnahmen:\n• Strukturelle Trennung: Organisatorische Trennung beider Rollen in verschiedenen Bereichen oder Berichtswegen bei klaren Kooperationsschnittstellen.\n• Funktionale Abgrenzung: Präzise Definition der Aufgabenbereiche, um Einmischung in DPO-Kernkompetenzen zu vermeiden und gleichzeitig Zusammenarbeit zu ermöglichen.\n• Transparente Prozesse: Offene Kommunikation über Rollen, Grenzen und Kooperationsmöglichkeiten gegenüber allen Beteiligten und der Organisation.\n• Regelmäßige Überprüfung: Kontinuierliche Bewertung der Unabhängigkeitswahrung durch interne Audits und externe Beratung zur Sicherstellung compliance-konformer Strukturen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie können Unternehmen die Effizienz ihrer Datenschutzorganisation durch optimale Aufgabenteilung zwischen Koordinator und DPO messbar steigern?",
        answer: "Die messbare Steigerung der Datenschutzorganisations-Effizienz durch optimale Aufgabenteilung erfordert systematische KPI-Entwicklung, strukturierte Prozessoptimierung und kontinuierliches Performance-Monitoring. Erfolgreiche Unternehmen nutzen datengestützte Ansätze zur Bewertung und Verbesserung ihrer Datenschutzstrukturen.\n\n📊 Effizienz-KPIs für Datenschutzorganisation:\n• Prozessgeschwindigkeit: Durchlaufzeiten für DSFA-Verfahren, Betroffenenanfragen-Bearbeitung und Incident-Response-Zyklen.\n• Qualitätsindikatoren: Fehlerquoten in Datenschutzdokumentation, Vollständigkeit von Verarbeitungsverzeichnissen und Compliance-Score bei internen Audits.\n• Ressourceneffizienz: Kostenoptimierung durch klare Rollenverteilung, Vermeidung von Doppelarbeiten und effektive Kapazitätsnutzung.\n• Stakeholder-Zufriedenheit: Bewertung der Zusammenarbeit durch Fachbereiche, Geschäftsleitung und externe Partner.\n\n🚀 Optimierungsstrategien für maximale Effizienz:\n• Synergie-Maximierung: Nutzung komplementärer Stärken beider Rollen durch strategische Aufgabenzuordnung und koordinierte Arbeitsweisen.\n• Automatisierungspotentiale: Identifikation und Umsetzung von Prozessautomatisierungen, die beide Rollen entlasten und Effizienz steigern.\n• Continuous Improvement: Etablierung regelmäßiger Review-Zyklen zur Bewertung und Anpassung der Aufgabenteilung basierend auf Performance-Daten.\n• Best Practice Integration: Systematische Sammlung und Implementierung bewährter Praktiken aus erfolgreichen Datenschutzorganisationen zur kontinuierlichen Effizienzsteigerung."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
