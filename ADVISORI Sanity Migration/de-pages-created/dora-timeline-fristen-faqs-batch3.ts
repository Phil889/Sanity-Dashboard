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
    console.log('Updating DORA Timeline & Fristen page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-timeline-fristen' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-timeline-fristen" not found')
    }
    
    // Create new FAQs for deadline management and regulatory coordination
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie koordiniere ich DORA-Deadlines mit anderen regulatorischen Anforderungen und Compliance-Projekten?',
        answer: "Die Koordination von DORA-Deadlines mit anderen regulatorischen Verpflichtungen ist eine komplexe Aufgabe, die strategische Planung und systematisches Portfolio-Management erfordert. Erfolgreiche Koordination minimiert Ressourcenkonflikte, maximiert Synergien und gewährleistet gleichzeitig die rechtzeitige Erfüllung aller Compliance-Verpflichtungen.\n\n🗓️ Strategische Deadline-Koordination:\n• Erstellen Sie einen umfassenden regulatorischen Kalender, der alle relevanten Compliance-Deadlines und Meilensteine integriert\n• Identifizieren Sie Überschneidungen und potenzielle Konflikte zwischen verschiedenen regulatorischen Timelines\n• Entwickeln Sie eine Prioritätsmatrix basierend auf regulatorischen Risiken, Strafen und Geschäftsauswirkungen\n• Schaffen Sie Pufferzonen zwischen kritischen Deadlines verschiedener Regulierungen\n• Etablieren Sie regelmäßige Cross-Regulation-Reviews zur proaktiven Identifikation von Koordinationsbedarfen\n\n🔄 Integration mit bestehenden Compliance-Zyklen:\n• Synchronisieren Sie DORA-Aktivitäten mit bestehenden regulatorischen Reporting-Zyklen und Audit-Terminen\n• Nutzen Sie gemeinsame Infrastrukturen und Prozesse für mehrere regulatorische Anforderungen\n• Koordinieren Sie DORA-Testing-Anforderungen mit anderen regulatorischen Stress-Tests und Assessments\n• Integrieren Sie DORA-Dokumentation in bestehende Compliance-Management-Systeme\n• Schaffen Sie gemeinsame Governance-Strukturen für verwandte regulatorische Bereiche\n\n⚖️ Ressourcenoptimierung zwischen Regulierungen:\n• Identifizieren Sie Expertise und Ressourcen, die für mehrere regulatorische Projekte genutzt werden können\n• Entwickeln Sie flexible Team-Strukturen, die zwischen verschiedenen Compliance-Projekten wechseln können\n• Schaffen Sie Centers of Excellence für übergreifende Themen wie Risikomanagement oder Drittanbieter-Management\n• Nutzen Sie externe Beratung strategisch für spezialisierte Bereiche mehrerer Regulierungen\n• Implementieren Sie Wissensmanagement-Systeme für regulierungsübergreifenden Erfahrungsaustausch\n\n📊 Monitoring und Eskalationsmanagement:\n• Entwickeln Sie integrierte Dashboards, die den Status aller regulatorischen Projekte in Echtzeit anzeigen\n• Implementieren Sie Frühwarnsysteme für potenzielle Deadline-Konflikte oder Ressourcenengpässe\n• Schaffen Sie klare Eskalationspfade für Entscheidungen bei konkurrierenden regulatorischen Prioritäten\n• Etablieren Sie regelmäßige Executive-Reviews für strategische Entscheidungen zur Ressourcenallokation\n• Nutzen Sie Szenario-Planung für verschiedene Kombinationen regulatorischer Deadlines und Herausforderungen\n\n🎯 Praktische Koordinationsstrategien:\n• Schaffen Sie gemeinsame Arbeitsgruppen für überschneidende Themenbereiche zwischen verschiedenen Regulierungen\n• Entwickeln Sie standardisierte Projektmanagement-Methoden für alle regulatorischen Initiativen\n• Nutzen Sie Lessons Learned aus anderen regulatorischen Implementierungen für DORA-Planung\n• Koordinieren Sie Kommunikation mit Aufsichtsbehörden für verschiedene Regulierungen\n• Implementieren Sie Change-Management-Ansätze, die multiple regulatorische Veränderungen berücksichtigen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Eskalationsstrategien sollte ich für kritische Timeline-Verzögerungen bei der DORA-Implementierung entwickeln?',
        answer: "Effektive Eskalationsstrategien sind entscheidend für den Umgang mit unvermeidlichen Herausforderungen bei der DORA-Implementierung. Durch proaktive Planung von Eskalationsmechanismen können Sie schnell auf Verzögerungen reagieren, Ressourcen umverteilen und alternative Lösungswege aktivieren, um kritische Deadlines einzuhalten.\n\n🚨 Frühwarnsystem-Entwicklung:\n• Implementieren Sie Leading-Indikatoren, die potenzielle Verzögerungen signalisieren, bevor sie kritisch werden\n• Definieren Sie klare Schwellenwerte für verschiedene Eskalationsebenen basierend auf Zeitverzug und Auswirkungen\n• Schaffen Sie automatisierte Monitoring-Systeme, die Abweichungen von geplanten Meilensteinen sofort erkennen\n• Etablieren Sie regelmäßige Checkpoint-Reviews mit allen kritischen Stakeholdern\n• Entwickeln Sie Risiko-Heatmaps, die die Wahrscheinlichkeit und Auswirkung verschiedener Verzögerungsszenarien visualisieren\n\n⚡ Mehrstufige Eskalationsstrukturen:\n• Erste Ebene fokussiert auf operative Lösungen innerhalb bestehender Teams und Ressourcen\n• Zweite Ebene involviert Projektmanagement und mittleres Management für Ressourcenumverteilung\n• Dritte Ebene eskaliert zu Senior Management für strategische Entscheidungen und zusätzliche Investitionen\n• Vierte Ebene erreicht Executive Leadership für fundamentale Scope- oder Timeline-Anpassungen\n• Jede Ebene hat definierte Zeitrahmen für Entscheidungsfindung und Lösungsimplementierung\n\n🔧 Operative Lösungsstrategien:\n• Entwickeln Sie vordefinierte Contingency-Pläne für häufige Verzögerungsursachen\n• Schaffen Sie flexible Ressourcen-Pools, die schnell zwischen verschiedenen Workstreams umverteilt werden können\n• Implementieren Sie Fast-Track-Prozesse für kritische Entscheidungen während Eskalationssituationen\n• Etablieren Sie Partnerschaften mit externen Anbietern für schnelle Kapazitätserweiterung\n• Entwickeln Sie modulare Implementierungsansätze, die Scope-Anpassungen ohne komplette Neuplanung ermöglichen\n\n📞 Stakeholder-Kommunikation während Eskalationen:\n• Schaffen Sie klare Kommunikationsprotokolle für verschiedene Eskalationsebenen\n• Entwickeln Sie vordefinierte Messaging-Templates für verschiedene Verzögerungsszenarien\n• Etablieren Sie regelmäßige Update-Zyklen für alle betroffenen Stakeholder während Eskalationen\n• Implementieren Sie Transparenz-Mechanismen, die ehrliche Kommunikation über Herausforderungen fördern\n• Schaffen Sie Feedback-Kanäle für kontinuierliche Verbesserung der Eskalationsprozesse\n\n🎯 Strategische Entscheidungsframeworks:\n• Entwickeln Sie Kriterien für Go/No-Go-Entscheidungen bei kritischen Meilensteinen\n• Schaffen Sie Trade-off-Frameworks für Entscheidungen zwischen Scope, Zeit und Qualität\n• Implementieren Sie Risiko-Toleranz-Guidelines für verschiedene Arten von Verzögerungen\n• Etablieren Sie Business-Impact-Assessments für verschiedene Eskalationsoptionen\n• Entwickeln Sie Lessons-Learned-Prozesse für kontinuierliche Verbesserung der Eskalationseffektivität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie manage ich Abhängigkeiten zwischen verschiedenen DORA-Workstreams und deren Timelines?',
        answer: "Das Management von Abhängigkeiten zwischen verschiedenen DORA-Workstreams ist kritisch für den Gesamterfolg Ihrer Implementierung. Komplexe Interdependenzen erfordern systematische Planung, kontinuierliches Monitoring und agile Anpassungsfähigkeit, um Verzögerungen zu minimieren und Synergien zu maximieren.\n\n🔗 Systematische Abhängigkeits-Identifikation:\n• Führen Sie eine umfassende Abhängigkeitsanalyse durch, die sowohl technische als auch organisatorische Interdependenzen erfasst\n• Kategorisieren Sie Abhängigkeiten nach Kritikalität, Kontrollierbarkeit und zeitlicher Flexibilität\n• Erstellen Sie detaillierte Abhängigkeits-Maps, die Beziehungen zwischen verschiedenen Workstreams visualisieren\n• Identifizieren Sie kritische Pfade und Bottlenecks, die das Gesamtprojekt gefährden könnten\n• Dokumentieren Sie sowohl harte Abhängigkeiten als auch weiche Synergien zwischen verschiedenen Aktivitäten\n\n📊 Integrierte Timeline-Planung:\n• Entwickeln Sie Master-Timelines, die alle Workstreams und deren Abhängigkeiten in einer kohärenten Sicht integrieren\n• Nutzen Sie Projektmanagement-Tools, die komplexe Abhängigkeiten automatisch verwalten und Updates propagieren\n• Implementieren Sie Rolling-Wave-Planung für detaillierte Koordination kurzfristiger Aktivitäten\n• Schaffen Sie Pufferzonen an kritischen Abhängigkeitspunkten für unvorhergesehene Verzögerungen\n• Etablieren Sie regelmäßige Cross-Workstream-Synchronisation-Meetings für proaktive Koordination\n\n⚙️ Operative Koordinationsmechanismen:\n• Schaffen Sie Cross-Functional-Teams für Bereiche mit hohen Abhängigkeiten zwischen Workstreams\n• Implementieren Sie gemeinsame Arbeitsräume und Collaboration-Tools für nahtlose Zusammenarbeit\n• Entwickeln Sie standardisierte Handoff-Prozesse zwischen verschiedenen Workstreams\n• Etablieren Sie gemeinsame Definition-of-Done-Kriterien für abhängige Deliverables\n• Schaffen Sie Eskalationsmechanismen für schnelle Lösung von Abhängigkeitskonflikten\n\n🎯 Risikomanagement für Abhängigkeiten:\n• Entwickeln Sie Contingency-Pläne für kritische Abhängigkeiten, die gefährdet sein könnten\n• Implementieren Sie alternative Lösungswege für Bereiche mit hohen Abhängigkeitsrisiken\n• Schaffen Sie Redundanzen in kritischen Bereichen, wo möglich und wirtschaftlich sinnvoll\n• Etablieren Sie regelmäßige Risiko-Reviews speziell für Abhängigkeits-Management\n• Entwickeln Sie Frühwarnindikatoren für potenzielle Abhängigkeitsprobleme\n\n🔄 Adaptive Management-Strategien:\n• Implementieren Sie agile Methoden, die schnelle Anpassungen an sich ändernde Abhängigkeiten ermöglichen\n• Schaffen Sie flexible Ressourcenallokation, die auf Abhängigkeitsänderungen reagieren kann\n• Entwickeln Sie Szenario-Pläne für verschiedene Abhängigkeits-Konfigurationen\n• Etablieren Sie kontinuierliche Verbesserungsprozesse für Abhängigkeits-Management\n• Nutzen Sie Lessons Learned für Optimierung zukünftiger Abhängigkeits-Planung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Rolle spielen externe Stakeholder und Aufsichtsbehörden in meiner DORA-Timeline-Planung?',
        answer: "Externe Stakeholder und Aufsichtsbehörden haben erheblichen Einfluss auf Ihre DORA-Timeline-Planung. Proaktives Stakeholder-Management und strategische Kommunikation mit Regulatoren können Ihre Implementierung beschleunigen, während unzureichende Koordination zu Verzögerungen und Compliance-Risiken führen kann.\n\n🏛️ Aufsichtsbehörden-Koordination:\n• Etablieren Sie frühzeitige und regelmäßige Kommunikation mit relevanten Aufsichtsbehörden über Ihre DORA-Implementierungspläne\n• Nutzen Sie verfügbare Guidance-Dokumente und technische Standards als Grundlage für Timeline-Planung\n• Berücksichtigen Sie mögliche regulatorische Klarstellungen oder Updates bei der Timeline-Entwicklung\n• Planen Sie ausreichend Zeit für potenzielle Feedback-Zyklen mit Aufsichtsbehörden ein\n• Schaffen Sie Dokumentationsstrukturen, die regulatorische Anfragen effizient beantworten können\n\n🤝 Kritische Drittanbieter-Koordination:\n• Integrieren Sie die DORA-Compliance-Timelines Ihrer kritischen IKT-Drittanbieter in Ihre eigene Planung\n• Etablieren Sie regelmäßige Koordinationsmeetings mit wichtigen Drittanbietern über Implementierungsfortschritte\n• Entwickeln Sie gemeinsame Meilensteine und Abhängigkeiten mit kritischen Partnern\n• Schaffen Sie Eskalationsmechanismen für Verzögerungen bei wichtigen Drittanbietern\n• Berücksichtigen Sie die Auswirkungen der direkten Aufsicht kritischer Drittanbieter auf Ihre Timeline\n\n🌐 Branchenweite Koordination:\n• Nutzen Sie Branchenverbände und -initiativen für Best-Practice-Sharing und koordinierte Ansätze\n• Berücksichtigen Sie branchenweite Implementierungszyklen bei der Timeline-Planung\n• Koordinieren Sie mit Peer-Institutionen für gemeinsame Herausforderungen und Lösungsansätze\n• Nutzen Sie Branchenforen für frühzeitige Identifikation gemeinsamer Implementierungshürden\n• Schaffen Sie Partnerschaften für gemeinsame Lösungsentwicklung in nicht-kompetitiven Bereichen\n\n📋 Externe Berater und Dienstleister:\n• Integrieren Sie die Verfügbarkeit und Kapazitäten externer DORA-Expertise in Ihre Timeline-Planung\n• Berücksichtigen Sie Marktdynamiken und Nachfrage nach spezialisierten DORA-Services\n• Entwickeln Sie langfristige Partnerschaften mit Schlüssel-Beratern für kontinuierliche Unterstützung\n• Schaffen Sie Backup-Optionen für kritische externe Abhängigkeiten\n• Planen Sie Wissenstransfer von externen Beratern zu internen Teams\n\n🎯 Strategische Stakeholder-Kommunikation:\n• Entwickeln Sie differenzierte Kommunikationsstrategien für verschiedene externe Stakeholder-Gruppen\n• Schaffen Sie regelmäßige Update-Formate für wichtige externe Partner und Stakeholder\n• Implementieren Sie Feedback-Mechanismen für kontinuierliche Verbesserung der Stakeholder-Beziehungen\n• Nutzen Sie externe Stakeholder-Insights für Optimierung Ihrer Timeline-Planung\n• Etablieren Sie Reputation-Management-Strategien für transparente Kommunikation über Implementierungsfortschritte"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
