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
    console.log('Updating DORA Governance page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-governance' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-governance" not found')
    }
    
    // Create new FAQs for DORA governance fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche spezifischen Governance-Verantwortlichkeiten haben Board und Senior Management unter DORA?',
        answer: "DORA etabliert klare und umfassende Governance-Verantwortlichkeiten für Board und Senior Management, die weit über traditionelle IT-Oversight hinausgehen. Diese Anforderungen spiegeln die kritische Bedeutung digitaler operationeller Resilienz für die Stabilität des Finanzsektors wider und erfordern eine fundamentale Integration von IKT-Risikomanagement in die Unternehmensführung.\n\n👥 Board-Level Verantwortlichkeiten und Oversight:\n• Das Board trägt die ultimative Verantwortung für die Genehmigung und regelmäßige Überprüfung der IKT-Risikomanagement-Strategie und deren Ausrichtung auf die Geschäftsstrategie\n• Sicherstellung angemessener Ressourcenallokation für digitale operationelle Resilienz, einschließlich Budget, Personal und technologischer Infrastruktur\n• Überwachung der Effektivität des IKT-Risikomanagement-Frameworks durch regelmäßige Berichterstattung und KPI-Monitoring\n• Genehmigung kritischer IKT-Drittanbieter-Arrangements und Überwachung der damit verbundenen Konzentrationsrisiken\n• Sicherstellung angemessener IKT-Expertise im Board oder durch externe Beratung für fundierte Entscheidungsfindung\n\n🎯 Senior Management Accountability und operative Verantwortung:\n• Entwicklung und Implementierung detaillierter IKT-Risikomanagement-Policies und -Verfahren basierend auf Board-Vorgaben\n• Etablierung klarer Rollen und Verantwortlichkeiten für IKT-Risikomanagement auf allen Organisationsebenen\n• Sicherstellung effektiver Incident-Response-Mechanismen und zeitnaher Eskalation kritischer IKT-Incidents an das Board\n• Koordination zwischen verschiedenen Geschäftsbereichen zur Gewährleistung konsistenter IKT-Risikomanagement-Praktiken\n• Regelmäßige Bewertung und Anpassung der IKT-Risikomanagement-Frameworks basierend auf sich ändernden Bedrohungslandschaften\n\n📊 Berichtswesen und Transparenz-Anforderungen:\n• Implementierung umfassender Management-Information-Systeme für IKT-Risiko-Reporting an Board und Aufsichtsbehörden\n• Regelmäßige Berichterstattung über IKT-Risiko-Indikatoren, Incident-Trends und Resilienz-Metriken\n• Dokumentation von Entscheidungsprozessen und Begründungen für IKT-Risikomanagement-Maßnahmen\n• Transparente Kommunikation über IKT-Risiken und deren potenzielle Auswirkungen auf Geschäftstätigkeiten\n• Sicherstellung angemessener Dokumentation für Aufsichtsprüfungen und regulatorische Anfragen\n\n🔄 Kontinuierliche Verbesserung und Anpassung:\n• Etablierung systematischer Prozesse zur regelmäßigen Überprüfung und Aktualisierung der IKT-Governance-Strukturen\n• Integration von Lessons Learned aus IKT-Incidents in die Governance-Frameworks\n• Berücksichtigung sich entwickelnder regulatorischer Anforderungen und Best Practices\n• Förderung einer Kultur der digitalen Resilienz und kontinuierlichen Verbesserung in der gesamten Organisation\n• Sicherstellung angemessener Schulung und Weiterbildung für Board-Mitglieder und Senior Management zu IKT-Risiken"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie integriere ich DORA-Governance-Anforderungen in bestehende Unternehmensführungsstrukturen?',
        answer: "Die Integration von DORA-Governance-Anforderungen in bestehende Unternehmensführungsstrukturen erfordert einen strategischen und systematischen Ansatz, der sowohl regulatorische Compliance als auch operative Effizienz gewährleistet. Erfolgreiche Integration bedeutet nicht die Schaffung paralleler Strukturen, sondern die nahtlose Einbettung digitaler Resilienz in etablierte Governance-Mechanismen.\n\n🏗️ Governance-Framework-Integration und Strukturanpassung:\n• Bewertung bestehender Governance-Strukturen und Identifikation von Integrationspunkten für IKT-Risikomanagement\n• Anpassung von Board-Committee-Mandaten zur Einbeziehung spezifischer IKT-Oversight-Verantwortlichkeiten\n• Integration von IKT-Risiko-Dimensionen in bestehende Risk-Committee-Strukturen und -Prozesse\n• Entwicklung klarer Schnittstellen zwischen IKT-Governance und traditionellen Governance-Bereichen wie Audit, Compliance und operationellem Risikomanagement\n• Sicherstellung konsistenter Governance-Standards und -Praktiken über alle Risikokategorien hinweg\n\n📋 Policy- und Procedure-Harmonisierung:\n• Überarbeitung bestehender Risikomanagement-Policies zur expliziten Einbeziehung von IKT-Risiken und digitaler operationeller Resilienz\n• Integration von DORA-spezifischen Anforderungen in bestehende Compliance-Frameworks und -Verfahren\n• Entwicklung konsistenter Terminologie und Definitionen für IKT-Risiken über alle Governance-Dokumente hinweg\n• Harmonisierung von Berichtswegen und Eskalationsprozessen zwischen verschiedenen Risikokategorien\n• Sicherstellung kohärenter Governance-Standards für interne und externe IKT-Services\n\n🔗 Three Lines of Defense Integration:\n• Klare Definition der Rollen und Verantwortlichkeiten für IKT-Risikomanagement innerhalb des Three Lines of Defense Modells\n• Integration von IKT-Risiko-Kontrollen in die erste Verteidigungslinie durch Geschäftsbereiche und operative Einheiten\n• Stärkung der zweiten Verteidigungslinie durch spezialisierte IKT-Risikomanagement-Funktionen\n• Erweiterung der dritten Verteidigungslinie um IKT-spezifische Audit-Kompetenzen und -Verfahren\n• Sicherstellung effektiver Koordination und Informationsaustausch zwischen den Verteidigungslinien\n\n⚖️ Regulatorische Koordination und Compliance-Integration:\n• Integration von DORA-Anforderungen in bestehende regulatorische Compliance-Programme und -Prozesse\n• Koordination zwischen DORA-Compliance und anderen regulatorischen Anforderungen wie Basel III, Solvency II oder MiFID II\n• Entwicklung einheitlicher Ansätze für regulatorisches Reporting und Aufsichtskommunikation\n• Sicherstellung konsistenter Interpretation und Anwendung regulatorischer Anforderungen über verschiedene Geschäftsbereiche hinweg\n• Etablierung effektiver Change-Management-Prozesse für sich entwickelnde regulatorische Landschaften"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielen Aufsichtsräte und Verwaltungsräte bei der DORA-Compliance und wie können sie ihre Oversight-Funktion effektiv ausüben?',
        answer: "Aufsichtsräte und Verwaltungsräte spielen eine zentrale Rolle bei der DORA-Compliance und tragen die ultimative Verantwortung für die Effektivität der digitalen operationellen Resilienz ihrer Organisation. Ihre Oversight-Funktion geht weit über traditionelle Aufsichtstätigkeiten hinaus und erfordert aktives Engagement, spezialisierte Expertise und strategische Führung in IKT-Risikomanagement.\n\n🎯 Strategische Oversight und Richtungsvorgabe:\n• Definition und Genehmigung der IKT-Risikostrategie als integralen Bestandteil der Gesamtgeschäftsstrategie\n• Festlegung der Risikotoleranz und des Risikoappetits für verschiedene Kategorien von IKT-Risiken\n• Sicherstellung angemessener Ressourcenallokation für digitale operationelle Resilienz, einschließlich Investitionen in Technologie, Personal und Prozesse\n• Überwachung der strategischen Ausrichtung von IKT-Initiativen mit Geschäftszielen und regulatorischen Anforderungen\n• Genehmigung kritischer Entscheidungen bezüglich IKT-Drittanbieter-Arrangements und deren strategische Implikationen\n\n📊 Monitoring und Performance-Oversight:\n• Regelmäßige Überprüfung von IKT-Risiko-KPIs und Resilienz-Metriken zur Bewertung der Effektivität des Risikomanagements\n• Überwachung der Incident-Response-Performance und Lessons Learned aus IKT-Störungen\n• Bewertung der Effektivität von Business Continuity und Disaster Recovery Maßnahmen\n• Monitoring der Compliance mit DORA-Anforderungen und anderen relevanten regulatorischen Standards\n• Überwachung der Entwicklung der IKT-Risikomanagement-Reife und kontinuierlichen Verbesserungsbemühungen\n\n🧠 Expertise-Entwicklung und Kompetenzaufbau:\n• Sicherstellung angemessener IKT-Expertise im Aufsichtsgremium durch Rekrutierung qualifizierter Mitglieder oder externe Beratung\n• Regelmäßige Weiterbildung und Schulung zu sich entwickelnden IKT-Risiken und regulatorischen Anforderungen\n• Engagement externer Experten für spezialisierte Beratung zu komplexen IKT-Risikothemen\n• Entwicklung eines tieferen Verständnisses für die IKT-Landschaft und deren Auswirkungen auf das Geschäftsmodell\n• Förderung einer Kultur des kontinuierlichen Lernens und der Anpassung an sich ändernde technologische Landschaften\n\n🔍 Effektive Oversight-Mechanismen und Best Practices:\n• Etablierung spezialisierter Board-Committees oder Arbeitsgruppen für IKT-Risiko-Oversight\n• Implementierung strukturierter Berichtswege und Dashboard-Systeme für regelmäßige IKT-Risiko-Updates\n• Durchführung regelmäßiger Deep-Dive-Sessions zu spezifischen IKT-Risikothemen oder kritischen Incidents\n• Sicherstellung direkter Kommunikationskanäle zwischen Board und IKT-Risikomanagement-Funktionen\n• Integration von IKT-Risiko-Considerations in alle relevanten Board-Entscheidungen und strategischen Diskussionen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie entwickle ich effektive Berichtswege und KPI-Systeme für DORA-Governance?',
        answer: "Effektive Berichtswege und KPI-Systeme sind das Rückgrat erfolgreicher DORA-Governance und ermöglichen fundierte Entscheidungsfindung auf allen Organisationsebenen. Die Entwicklung dieser Systeme erfordert eine durchdachte Balance zwischen umfassender Transparenz und praktischer Anwendbarkeit, um sowohl regulatorische Anforderungen als auch operative Bedürfnisse zu erfüllen.\n\n📈 KPI-Framework-Design und Metriken-Auswahl:\n• Entwicklung einer ausgewogenen Scorecard mit Leading- und Lagging-Indikatoren für verschiedene Aspekte der digitalen operationellen Resilienz\n• Quantitative Metriken wie Mean Time to Recovery, System-Verfügbarkeit, Incident-Häufigkeit und -Schweregrad\n• Qualitative Indikatoren wie Governance-Maturity-Level, Drittanbieter-Risiko-Ratings und Compliance-Status\n• Risiko-Indikatoren für Frühwarnung wie Schwachstellen-Trends, Patch-Management-Effektivität und Cyber-Threat-Intelligence\n• Business-Impact-Metriken zur Verknüpfung von IKT-Performance mit Geschäftsergebnissen\n\n🎯 Zielgruppen-spezifische Berichterstattung:\n• Board-Level Dashboards mit strategischen KPIs und Trend-Analysen für High-Level-Oversight\n• Senior Management Reports mit operativen Metriken und Handlungsempfehlungen für taktische Entscheidungen\n• Operative Berichte mit detaillierten technischen Metriken für IT- und Risikomanagement-Teams\n• Regulatorische Reports mit compliance-spezifischen Indikatoren für Aufsichtsbehörden\n• Stakeholder-Communications mit relevanten Resilienz-Updates für interne und externe Interessensgruppen\n\n🔄 Berichtswege-Architektur und Eskalationsmechanismen:\n• Klare Definition von Berichtslinien und Verantwortlichkeiten für verschiedene Arten von IKT-Risiko-Informationen\n• Automatisierte Eskalations-Trigger basierend auf vordefinierten Schwellenwerten und Risiko-Leveln\n• Strukturierte Incident-Reporting-Prozesse mit klaren Zeitvorgaben und Kommunikationsprotokollen\n• Integration von IKT-Risiko-Berichterstattung in bestehende Management-Information-Systeme\n• Sicherstellung redundanter Kommunikationskanäle für kritische Situationen und Notfälle\n\n📊 Dashboard-Design und Visualisierung:\n• Entwicklung intuitiver und benutzerfreundlicher Dashboards mit klaren visuellen Indikatoren\n• Real-Time-Monitoring-Capabilities für kritische IKT-Services und -Systeme\n• Trend-Analysen und historische Vergleiche zur Identifikation von Mustern und Verbesserungsmöglichkeiten\n• Drill-Down-Funktionalitäten für detaillierte Analysen spezifischer Risikobereiche\n• Mobile-optimierte Interfaces für zeitnahen Zugriff auf kritische Informationen\n\n🔧 Datenqualität und Governance:\n• Etablierung robuster Datensammlung- und -validierungsprozesse zur Sicherstellung der Berichtsqualität\n• Definition klarer Datenstandards und -definitionen für konsistente Berichterstattung\n• Implementierung von Datenqualitäts-Kontrollen und Audit-Trails für Nachvollziehbarkeit\n• Regelmäßige Überprüfung und Kalibrierung von KPIs zur Sicherstellung kontinuierlicher Relevanz\n• Integration von Feedback-Mechanismen zur kontinuierlichen Verbesserung der Berichtssysteme"
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
