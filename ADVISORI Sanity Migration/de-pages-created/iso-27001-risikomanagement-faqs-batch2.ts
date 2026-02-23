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
    console.log('Updating ISO 27001 Risikomanagement page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-risikomanagement' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-risikomanagement" not found')
    }
    
    // Create new FAQs for ISO 27001 Risikomanagement risk treatment and control management
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Risikobehandlungsstrategien stehen im ISO 27001 Risikomanagement zur Verfügung und wie werden sie optimal ausgewählt?',
        answer: "Die Auswahl der optimalen Risikobehandlungsstrategie ist eine strategische Entscheidung, die sowohl Geschäftsziele als auch Risikotoleranz berücksichtigt. ISO 27001 definiert vier grundlegende Behandlungsoptionen, die je nach Risikokontext und organisatorischen Rahmenbedingungen angewendet werden können.\n\n🎯 Risikominderung durch Kontrollimplementierung:\n• Implementierung technischer Kontrollen wie Verschlüsselung, Firewalls und Intrusion Detection Systeme\n• Etablierung organisatorischer Kontrollen wie Richtlinien, Verfahren und Schulungsprogramme\n• Aufbau physischer Kontrollen wie Zugangskontrollen, Überwachungssysteme und Umgebungssicherheit\n• Entwicklung personeller Kontrollen wie Background-Checks, Rollentrennung und Vier-Augen-Prinzip\n• Kontinuierliche Überwachung und Verbesserung der implementierten Kontrollen\n\n🔄 Risikotransfer und Versicherungsstrategien:\n• Abschluss von Cyber-Versicherungen zur Abdeckung finanzieller Schäden bei Sicherheitsvorfällen\n• Outsourcing kritischer Funktionen an spezialisierte Service-Provider mit entsprechenden SLAs\n• Vertragsgestaltung mit Lieferanten und Partnern zur Risikoteilung\n• Implementierung von Haftungsklauseln und Schadensersatzregelungen\n• Aufbau strategischer Partnerschaften für gemeinsame Risikobewältigung\n\n✅ Risikoakzeptanz und bewusste Entscheidungen:\n• Formale Risikoakzeptanz-Prozesse mit dokumentierten Begründungen und Genehmigungen\n• Definition von Akzeptanzkriterien basierend auf Geschäftsauswirkungen und Kosten-Nutzen-Analysen\n• Regelmäßige Überprüfung akzeptierter Risiken bei veränderten Rahmenbedingungen\n• Etablierung von Monitoring-Mechanismen für akzeptierte Risiken\n• Entwicklung von Notfallplänen für den Fall, dass akzeptierte Risiken eintreten\n\n🚫 Risikovermeidung durch strategische Entscheidungen:\n• Verzicht auf risikoreiche Geschäftstätigkeiten oder Technologien\n• Beendigung von Geschäftsbeziehungen mit hochriskanten Partnern\n• Vermeidung von Märkten oder Regionen mit erhöhten Sicherheitsrisiken\n• Strategische Neuausrichtung zur Minimierung inhärenter Risiken\n• Entwicklung alternativer Geschäftsmodelle mit geringerem Risikoprofil\n\n🔍 Entscheidungskriterien und Optimierung:\n• Kosten-Nutzen-Analyse verschiedener Behandlungsoptionen\n• Bewertung der Implementierungszeit und verfügbaren Ressourcen\n• Berücksichtigung regulatorischer Anforderungen und Compliance-Verpflichtungen\n• Analyse der Auswirkungen auf Geschäftsprozesse und operative Effizienz\n• Integration in die Gesamtstrategie und langfristige Unternehmensziele"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie wird die Risikobereitschaft und Risikotoleranz einer Organisation definiert und in strategische Entscheidungen integriert?',
        answer: "Die Definition von Risikobereitschaft und Risikotoleranz bildet das strategische Fundament für alle Risikomanagement-Entscheidungen und erfordert eine enge Abstimmung zwischen Geschäftsführung, Stakeholdern und operativen Bereichen. Diese Parameter fungieren als Leitplanken für risikobasierte Entscheidungen und Ressourcenallokation.\n\n🎯 Strategische Risikobereitschaftsdefinition:\n• Entwicklung einer Risikobereitschaftserklärung, die sich an Unternehmenswerten und strategischen Zielen orientiert\n• Quantifizierung der maximalen Verlustbereitschaft in verschiedenen Risikokategorien\n• Definition von Risikogrenzen für verschiedene Geschäftsbereiche und Aktivitäten\n• Berücksichtigung von Stakeholder-Erwartungen und regulatorischen Anforderungen\n• Integration von Reputations- und Vertrauensaspekten in die Risikobereitschaft\n\n📊 Risikotoleranz-Metriken und Schwellenwerte:\n• Entwicklung quantitativer Risikotoleranz-Indikatoren wie maximale Ausfallzeiten oder finanzielle Verlustgrenzen\n• Definition qualitativer Toleranzkriterien für Reputationsschäden oder Compliance-Verstöße\n• Etablierung von Frühwarnindikatoren, die Annäherung an Toleranzgrenzen signalisieren\n• Implementierung von Eskalationsmechanismen bei Überschreitung definierter Schwellenwerte\n• Regelmäßige Kalibrierung der Toleranzwerte basierend auf Geschäftsentwicklung und Marktveränderungen\n\n🏛️ Governance und Entscheidungsstrukturen:\n• Verankerung der Risikobereitschaft in der Unternehmensstrategie und Corporate Governance\n• Etablierung von Entscheidungsgremien für Risikotoleranz-Anpassungen\n• Definition von Rollen und Verantwortlichkeiten für Risikotoleranz-Management\n• Implementierung von Berichtswegen und Kommunikationskanälen\n• Aufbau von Feedback-Mechanismen zur kontinuierlichen Verbesserung\n\n🔄 Integration in strategische Planungsprozesse:\n• Berücksichtigung der Risikobereitschaft bei strategischen Investitionsentscheidungen\n• Integration von Risikotoleranz-Kriterien in Projektbewertungen und Business Cases\n• Anpassung von Geschäftsstrategien an definierte Risikogrenzen\n• Entwicklung risikobasierter Performance-Indikatoren und Balanced Scorecards\n• Aufbau von Szenario-Planungen, die verschiedene Risikotoleranz-Level berücksichtigen\n\n📈 Dynamische Anpassung und Optimierung:\n• Regelmäßige Überprüfung der Risikobereitschaft bei veränderten Marktbedingungen\n• Anpassung der Risikotoleranz an Geschäftswachstum und Organisationsentwicklung\n• Integration von Lessons Learned aus Risikoeintritten in die Toleranzdefinition\n• Benchmarking mit Branchenstandards und Best Practices\n• Kontinuierliche Kommunikation und Schulung zur Risikobereitschaft in der Organisation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Rolle spielt die Kontrollauswahl und wie wird ein optimales Kontrollportfolio für das Risikomanagement entwickelt?',
        answer: "Die strategische Kontrollauswahl ist ein zentraler Erfolgsfaktor für effektives Risikomanagement und erfordert einen systematischen Ansatz, der sowohl Risikominderung als auch operative Effizienz optimiert. Ein ausgewogenes Kontrollportfolio schafft mehrschichtige Sicherheit und maximiert den Return on Security Investment.\n\n🎯 Strategische Kontrollarchitektur:\n• Entwicklung einer mehrschichtigen Verteidigungsstrategie mit präventiven, detektiven und korrektiven Kontrollen\n• Implementierung des Defense-in-Depth-Prinzips für umfassenden Schutz kritischer Assets\n• Aufbau redundanter Kontrollmechanismen für kritische Sicherheitsfunktionen\n• Integration von automatisierten und manuellen Kontrollen für optimale Abdeckung\n• Berücksichtigung von Kontrollabhängigkeiten und Synergieeffekten\n\n📋 ISO 27001 Annex A Kontrollauswahl:\n• Systematische Bewertung aller Annex A Kontrollen basierend auf Risikobewertung und Geschäftsanforderungen\n• Anpassung der Standard-Kontrollen an organisationsspezifische Bedürfnisse und Kontexte\n• Entwicklung zusätzlicher Kontrollen für spezifische Risiken, die nicht durch Standard-Kontrollen abgedeckt sind\n• Dokumentation der Kontrollauswahl-Begründung für Audit-Zwecke und Nachvollziehbarkeit\n• Regelmäßige Überprüfung der Kontrollrelevanz bei veränderten Risikoprofilen\n\n💰 Kosten-Nutzen-Optimierung:\n• Durchführung detaillierter Kosten-Nutzen-Analysen für jede Kontrollmaßnahme\n• Bewertung der Total Cost of Ownership einschließlich Implementierung, Betrieb und Wartung\n• Quantifizierung des Risikominderungspotenzials und Return on Security Investment\n• Priorisierung von Kontrollen basierend auf Risikoreduktion pro investiertem Euro\n• Berücksichtigung von Compliance-Anforderungen und regulatorischen Verpflichtungen\n\n🔄 Kontrolleffektivität und Performance Management:\n• Entwicklung von Kontroll-KPIs und Effektivitätsmessungen\n• Implementierung kontinuierlicher Monitoring-Prozesse für Kontrollperformance\n• Etablierung von Testing-Programmen zur Validierung der Kontrollwirksamkeit\n• Aufbau von Feedback-Mechanismen zur kontinuierlichen Kontrollverbesserung\n• Integration von Kontrollmetriken in Management-Dashboards und Reporting\n\n🚀 Innovation und Technologie-Integration:\n• Evaluierung neuer Technologien und innovativer Kontrollansätze\n• Automatisierung manueller Kontrollen zur Effizienzsteigerung und Fehlerreduktion\n• Integration von AI und Machine Learning für adaptive und intelligente Kontrollen\n• Aufbau von Cloud-nativen Kontrollarchitekturen für moderne IT-Landschaften\n• Entwicklung von DevSecOps-Ansätzen für integrierte Sicherheitskontrollen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie wird Restrisiko-Management betrieben und welche Strategien gibt es für den Umgang mit nicht eliminierbaren Risiken?',
        answer: "Restrisiko-Management ist ein kritischer Aspekt des strategischen Risikomanagements, da selbst die besten Kontrollmaßnahmen niemals alle Risiken vollständig eliminieren können. Ein professioneller Umgang mit Restrisiken erfordert transparente Bewertung, bewusste Akzeptanzentscheidungen und kontinuierliche Überwachung.\n\n📊 Restrisiko-Identifikation und Quantifizierung:\n• Systematische Bewertung verbleibender Risiken nach Implementierung aller geplanten Kontrollmaßnahmen\n• Quantifizierung des Restrisikos in finanziellen und operativen Begriffen\n• Berücksichtigung von Kontrollversagen und Umgehungsmöglichkeiten in der Restrisiko-Berechnung\n• Analyse von Worst-Case-Szenarien und deren potenziellen Auswirkungen\n• Dokumentation der Annahmen und Methoden der Restrisiko-Bewertung\n\n🎯 Strategische Restrisiko-Behandlung:\n• Entwicklung spezifischer Strategien für verschiedene Kategorien von Restrisiken\n• Implementierung zusätzlicher Überwachungsmaßnahmen für kritische Restrisiken\n• Aufbau von Notfallplänen und Incident Response Strategien für Restrisiko-Szenarien\n• Etablierung von Frühwarnsystemen zur rechtzeitigen Erkennung von Restrisiko-Manifestationen\n• Kontinuierliche Suche nach innovativen Lösungen zur weiteren Risikoreduktion\n\n🏛️ Governance und Akzeptanzprozesse:\n• Formale Restrisiko-Akzeptanzprozesse mit klaren Entscheidungskriterien und Genehmigungsverfahren\n• Dokumentation der Restrisiko-Akzeptanz-Entscheidungen mit Begründungen und Verantwortlichkeiten\n• Regelmäßige Überprüfung akzeptierter Restrisiken bei veränderten Rahmenbedingungen\n• Etablierung von Eskalationsmechanismen bei Überschreitung von Restrisiko-Toleranzen\n• Integration der Restrisiko-Governance in bestehende Entscheidungsstrukturen\n\n💡 Innovative Restrisiko-Strategien:\n• Entwicklung von Risiko-Pooling-Ansätzen mit anderen Organisationen\n• Implementierung von parametrischen Versicherungslösungen für spezifische Restrisiken\n• Aufbau von Cyber-Resilience-Strategien, die schnelle Erholung von Restrisiko-Eintritten ermöglichen\n• Nutzung von Blockchain-Technologien für transparente Restrisiko-Dokumentation\n• Entwicklung von AI-gestützten Restrisiko-Monitoring-Systemen\n\n🔄 Kontinuierliches Restrisiko-Management:\n• Implementierung regelmäßiger Restrisiko-Reviews und Neubewertungen\n• Aufbau von Trend-Analysen zur Früherkennung sich verändernder Restrisiken\n• Integration von Restrisiko-Metriken in Management-Reporting und Dashboards\n• Entwicklung von Restrisiko-Szenarien für Stresstests und Business Continuity Planning\n• Etablierung von Lessons Learned Prozessen aus Restrisiko-Eintritten"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
