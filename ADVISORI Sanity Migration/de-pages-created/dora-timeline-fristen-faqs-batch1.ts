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
    console.log('Updating DORA Timeline & Fristen page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-timeline-fristen' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-timeline-fristen" not found')
    }
    
    // Create new FAQs for DORA timeline fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche sind die wichtigsten DORA-Implementierungsfristen und wie sollte ich meine Timeline strukturieren?',
        answer: "DORA tritt mit einem klaren Zeitplan in Kraft, der Finanzinstituten ausreichend Zeit für eine durchdachte Implementierung bietet. Die erfolgreiche Einhaltung dieser Fristen erfordert jedoch eine strategische Herangehensweise, die weit über das bloße Abhaken regulatorischer Anforderungen hinausgeht.\n\n📅 Zentrale DORA-Implementierungsfristen:\n• DORA tritt am 17. Januar 2025 vollständig in Kraft, womit alle Anforderungen unmittelbar anwendbar werden\n• Finanzinstitute haben bereits seit der Veröffentlichung der finalen technischen Standards Zeit für die Vorbereitung\n• Kritische IKT-Drittanbieter unterliegen ab dem Inkrafttreten direkter Aufsicht durch europäische Behörden\n• Bestehende nationale IKT-Regulierungen werden durch DORA harmonisiert oder ersetzt\n• Incident-Reporting-Anforderungen gelten ab dem ersten Tag der Anwendbarkeit ohne Übergangsfristen\n\n🎯 Strategische Timeline-Strukturierung:\n• Beginnen Sie mit einer umfassenden Gap-Analyse mindestens zwölf Monate vor dem Inkrafttreten\n• Entwickeln Sie eine phasenweise Implementierungsstrategie, die kritische Bereiche priorisiert\n• Planen Sie ausreichend Zeit für Drittanbieter-Koordination und Vertragsanpassungen ein\n• Berücksichtigen Sie interne Ressourcenverfügbarkeit und mögliche Kapazitätsengpässe\n• Integrieren Sie DORA-Anforderungen in bestehende Compliance- und IT-Projekte\n\n⚡ Kritische Erfolgsfaktoren für Timeline-Management:\n• Frühe Einbindung aller relevanten Stakeholder aus Geschäftsbereichen, IT, Compliance und Risikomanagement\n• Realistische Zeitschätzungen basierend auf der Komplexität Ihrer IT-Landschaft und Drittanbieter-Abhängigkeiten\n• Kontinuierliches Monitoring des Implementierungsfortschritts mit regelmäßigen Meilenstein-Reviews\n• Flexibilität für Anpassungen bei unvorhergesehenen Herausforderungen oder regulatorischen Klarstellungen\n• Proaktive Kommunikation mit kritischen Drittanbietern über deren eigene DORA-Compliance-Timelines\n\n🔄 Phasenweise Implementierungsansätze:\n• Phase Eins fokussiert auf Governance-Strukturen, Risikomanagement-Frameworks und Incident-Response-Prozesse\n• Phase Zwei adressiert Drittanbieter-Management, Vertragsanpassungen und Due-Diligence-Prozesse\n• Phase Drei umfasst Testing-Programme, Business-Continuity-Planung und operative Resilienz-Maßnahmen\n• Phase Vier konzentriert sich auf Monitoring, Reporting und kontinuierliche Verbesserungsprozesse\n• Jede Phase sollte klare Deliverables, Verantwortlichkeiten und Erfolgskriterien definieren"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie koordiniere ich DORA-Timelines mit bestehenden Regulierungs- und IT-Projekten in meiner Organisation?',
        answer: "Die Integration von DORA-Anforderungen in bestehende Projekt-Portfolios ist eine der größten Herausforderungen für Finanzinstitute. Erfolgreiche Koordination erfordert strategische Planung, klare Priorisierung und effiziente Ressourcenallokation, um Synergien zu nutzen und Doppelarbeit zu vermeiden.\n\n🔗 Strategische Integration bestehender Projekte:\n• Führen Sie eine umfassende Analyse aller laufenden und geplanten Compliance-, IT- und Geschäftsprojekte durch\n• Identifizieren Sie Überschneidungen und Synergien zwischen DORA-Anforderungen und bestehenden Initiativen\n• Entwickeln Sie eine integrierte Roadmap, die DORA-Compliance als Teil eines größeren Transformationsprogramms positioniert\n• Nutzen Sie bestehende Governance-Strukturen und Projektmanagement-Frameworks für DORA-Implementierung\n• Schaffen Sie klare Abhängigkeiten und Koordinationsmechanismen zwischen verschiedenen Projekten\n\n📊 Ressourcenoptimierung und Priorisierung:\n• Bewerten Sie verfügbare interne und externe Ressourcen realistisch und planen Sie entsprechende Kapazitäten\n• Priorisieren Sie Projekte basierend auf regulatorischen Fristen, Geschäftskritikalität und Ressourcenanforderungen\n• Entwickeln Sie flexible Ressourcenallokations-Modelle, die schnelle Anpassungen bei sich ändernden Prioritäten ermöglichen\n• Berücksichtigen Sie saisonale Schwankungen und andere geschäftliche Zyklen bei der Timeline-Planung\n• Etablieren Sie klare Eskalationsprozesse für Ressourcenkonflikte zwischen verschiedenen Projekten\n\n🎯 Praktische Koordinationsstrategien:\n• Implementieren Sie regelmäßige Cross-Project-Reviews zur Identifikation von Synergien und Konflikten\n• Schaffen Sie gemeinsame Arbeitsgruppen für überschneidende Themenbereiche wie Cybersecurity oder Drittanbieter-Management\n• Nutzen Sie bestehende IT-Modernisierungsprojekte als Vehikel für DORA-konforme Systemarchitekturen\n• Integrieren Sie DORA-Anforderungen in laufende Risikomanagement- und Compliance-Transformationen\n• Entwickeln Sie gemeinsame KPIs und Erfolgsmessungen für integrierte Projektportfolios\n\n⚖️ Balance zwischen Compliance und Innovation:\n• Positionieren Sie DORA-Compliance als Enabler für digitale Transformation und operative Exzellenz\n• Nutzen Sie DORA-Anforderungen als Katalysator für längst überfällige IT-Modernisierungen\n• Entwickeln Sie Business Cases, die sowohl Compliance-Nutzen als auch geschäftliche Vorteile demonstrieren\n• Schaffen Sie Anreize für Geschäftsbereiche, DORA-Compliance als strategische Chance zu verstehen\n• Kommunizieren Sie den Mehrwert integrierter Ansätze gegenüber isolierten Compliance-Projekten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Timeline-Risiken sollte ich bei der DORA-Implementierung besonders beachten und wie kann ich diese mitigieren?',
        answer: "Timeline-Risiken bei der DORA-Implementierung können erhebliche Auswirkungen auf die rechtzeitige Compliance haben. Eine proaktive Risikoidentifikation und -mitigation ist entscheidend für den Erfolg Ihrer Implementierungsstrategie und hilft dabei, kostspielige Verzögerungen und regulatorische Konsequenzen zu vermeiden.\n\n⚠️ Kritische Timeline-Risikokategorien:\n• Drittanbieter-Abhängigkeiten stellen oft das größte Risiko dar, da Sie deren Implementierungsgeschwindigkeit nicht direkt kontrollieren können\n• Interne Ressourcenengpässe durch konkurrierende Projekte oder unzureichende Expertise in spezialisierten Bereichen\n• Technische Komplexität bei der Integration neuer DORA-Anforderungen in bestehende IT-Landschaften\n• Regulatorische Unsicherheiten durch sich entwickelnde Auslegungsleitlinien und technische Standards\n• Organisatorische Widerstände gegen Veränderungen in etablierten Prozessen und Arbeitsweisen\n\n🛡️ Drittanbieter-Risikomanagement:\n• Führen Sie frühzeitig detaillierte Gespräche mit allen kritischen IKT-Drittanbietern über deren DORA-Compliance-Pläne\n• Entwickeln Sie Contingency-Pläne für den Fall, dass wichtige Drittanbieter nicht rechtzeitig compliant werden\n• Bewerten Sie alternative Anbieter und Exit-Strategien für kritische Services bereits in der Planungsphase\n• Implementieren Sie regelmäßige Monitoring-Prozesse für den Fortschritt Ihrer Drittanbieter bei der DORA-Umsetzung\n• Verhandeln Sie vertragliche Sicherheiten und Service-Level-Agreements, die DORA-Compliance-Anforderungen berücksichtigen\n\n🔧 Technische und operative Risikominderung:\n• Planen Sie ausreichend Zeit für umfassende Testing-Phasen und Pilotprojekte ein\n• Entwickeln Sie modulare Implementierungsansätze, die schrittweise Umsetzung und Anpassungen ermöglichen\n• Investieren Sie in Schulungen und Kompetenzaufbau für interne Teams in DORA-relevanten Bereichen\n• Schaffen Sie dedizierte DORA-Projektteams mit klaren Verantwortlichkeiten und Entscheidungsbefugnissen\n• Implementieren Sie robuste Change-Management-Prozesse für organisatorische Transformationen\n\n📈 Proaktive Monitoring- und Anpassungsstrategien:\n• Etablieren Sie wöchentliche oder zweiwöchentliche Timeline-Reviews mit allen kritischen Stakeholdern\n• Entwickeln Sie Frühwarnsysteme für potenzielle Verzögerungen basierend auf Leading-Indikatoren\n• Schaffen Sie Pufferzonen in Ihren Timelines für unvorhergesehene Herausforderungen\n• Implementieren Sie agile Projektmanagement-Methoden, die schnelle Anpassungen an sich ändernde Umstände ermöglichen\n• Dokumentieren Sie Lessons Learned kontinuierlich für zukünftige Regulierungsimplementierungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie entwickle ich realistische Meilensteine und KPIs für meine DORA-Implementierungs-Timeline?',
        answer: "Die Entwicklung aussagekräftiger Meilensteine und KPIs ist fundamental für erfolgreiches DORA-Timeline-Management. Effektive Metriken ermöglichen nicht nur die Überwachung des Fortschritts, sondern auch proaktive Steuerung und rechtzeitige Kurskorrektur bei Abweichungen vom geplanten Zeitrahmen.\n\n🎯 Strategische Meilenstein-Definition:\n• Definieren Sie Meilensteine basierend auf kritischen Deliverables und regulatorischen Anforderungen, nicht nur auf Zeitpunkten\n• Strukturieren Sie Meilensteine hierarchisch von strategischen Zielen bis zu operativen Aufgaben\n• Berücksichtigen Sie Abhängigkeiten zwischen verschiedenen Workstreams und externen Faktoren\n• Schaffen Sie messbare und überprüfbare Erfolgskriterien für jeden Meilenstein\n• Integrieren Sie sowohl quantitative als auch qualitative Bewertungsdimensionen\n\n📊 Entwicklung aussagekräftiger KPIs:\n• Compliance-Readiness-Index basierend auf dem Erfüllungsgrad verschiedener DORA-Anforderungskategorien\n• Drittanbieter-Compliance-Rate zur Überwachung des Fortschritts bei kritischen Partnern\n• Timeline-Adherence-Metriken zur Messung der Einhaltung geplanter Termine und Budgets\n• Risk-Mitigation-Progress zur Bewertung der Reduzierung identifizierter Implementierungsrisiken\n• Stakeholder-Engagement-Level zur Messung der organisatorischen Akzeptanz und Unterstützung\n\n🔍 Praktische Implementierung von Monitoring-Systemen:\n• Entwickeln Sie Dashboard-Lösungen, die Echtzeit-Einblicke in den Implementierungsfortschritt bieten\n• Implementieren Sie automatisierte Reporting-Mechanismen für regelmäßige Stakeholder-Updates\n• Schaffen Sie Eskalationsprozesse basierend auf definierten Schwellenwerten und Abweichungen\n• Nutzen Sie Projektmanagement-Tools, die integrierte Timeline- und Ressourcenverfolgung ermöglichen\n• Etablieren Sie regelmäßige Review-Zyklen mit verschiedenen Stakeholder-Gruppen\n\n⚡ Adaptive Meilenstein-Anpassung:\n• Entwickeln Sie flexible Meilenstein-Strukturen, die Anpassungen an sich ändernde Umstände ermöglichen\n• Implementieren Sie Rolling-Forecast-Ansätze für kontinuierliche Timeline-Aktualisierung\n• Schaffen Sie Mechanismen für schnelle Entscheidungsfindung bei erforderlichen Planänderungen\n• Dokumentieren Sie Änderungen und deren Begründungen für Audit-Zwecke und Lessons Learned\n• Kommunizieren Sie Anpassungen transparent und rechtzeitig an alle betroffenen Stakeholder\n\n🎨 Best Practices für Meilenstein-Kommunikation:\n• Entwickeln Sie klare Visualisierungen und Dashboards für verschiedene Zielgruppen\n• Schaffen Sie regelmäßige Kommunikationsformate für Updates und Herausforderungen\n• Nutzen Sie Storytelling-Techniken, um komplexe Timeline-Informationen verständlich zu vermitteln\n• Implementieren Sie Feedback-Mechanismen für kontinuierliche Verbesserung der Monitoring-Prozesse\n• Feiern Sie erreichte Meilensteine, um Motivation und Engagement aufrechtzuerhalten"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
