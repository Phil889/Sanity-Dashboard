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
    console.log('Updating EU CRA Regulation page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-cra-regulation' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-cra-regulation" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche technischen Implementierungsherausforderungen bringt die CRA mit sich und wie können wir diese effizient bewältigen?',
        answer: "Die technische Implementierung der CRA-Anforderungen stellt Unternehmen vor komplexe Herausforderungen, die eine strategische Herangehensweise und innovative Lösungsansätze erfordern. Die Verordnung verlangt nicht nur die Implementierung spezifischer Sicherheitsmaßnahmen, sondern auch deren kontinuierliche Überwachung, Dokumentation und Anpassung an sich entwickelnde Bedrohungslagen.\n\n🔧 Kernherausforderungen der technischen Implementierung:\n• Security-by-Design Integration erfordert eine fundamentale Neugestaltung bestehender Entwicklungsprozesse und die Implementierung von Sicherheitskontrollen in jeder Phase des Produktlebenszyklus.\n• Schwachstellenmanagement-Systeme müssen etabliert werden, die nicht nur interne Schwachstellen identifizieren, sondern auch externe Bedrohungsinformationen integrieren und automatisierte Response-Mechanismen bereitstellen.\n• Kontinuierliche Überwachung und Logging-Mechanismen müssen implementiert werden, die sowohl technische als auch geschäftliche Anforderungen erfüllen und dabei Datenschutzbestimmungen einhalten.\n• Interoperabilität zwischen verschiedenen Systemen und Komponenten muss gewährleistet werden, während gleichzeitig Sicherheitsgrenzen und Isolation aufrechterhalten werden.\n• Legacy-Systeme müssen modernisiert oder durch sichere Schnittstellen abgesichert werden, ohne die Geschäftskontinuität zu gefährden.\n\n⚡ Effiziente Lösungsstrategien und Best Practices:\n• Adoption von DevSecOps-Praktiken zur nahtlosen Integration von Sicherheitsmaßnahmen in bestehende Entwicklungs- und Deployment-Pipelines.\n• Implementierung von Infrastructure-as-Code Ansätzen zur konsistenten und wiederholbaren Bereitstellung sicherer Systemkonfigurationen.\n• Nutzung von Container-Technologien und Microservices-Architekturen zur Verbesserung der Isolation und Skalierbarkeit von Sicherheitsmaßnahmen.\n• Einsatz von KI-gestützten Sicherheitstools zur Automatisierung von Bedrohungserkennung und Incident Response.\n• Etablierung von Continuous Compliance Monitoring durch automatisierte Audit-Tools und Real-time Dashboards.\n\n🛠️ Praktische Implementierungsansätze:\n• Phasenweise Einführung beginnend mit kritischen Systemen und schrittweise Ausweitung auf alle betroffenen Produkte.\n• Aufbau interner Kompetenzen durch gezielte Schulungen und Partnerschaften mit Technologieanbietern.\n• Implementierung von Test-Driven Security Development zur frühzeitigen Identifikation und Behebung von Sicherheitslücken.\n• Etablierung von Security Champions Programmen zur Förderung einer sicherheitsbewussten Entwicklungskultur.\n• Nutzung von Open-Source-Tools und Standards zur Kostenoptimierung und Interoperabilität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie gestalten wir die Lieferantenbeziehungen und Supply Chain Management unter CRA-Gesichtspunkten neu?',
        answer: "Die CRA transformiert das Supply Chain Management grundlegend, da Hersteller nun für die Cybersicherheit ihrer gesamten Lieferkette verantwortlich sind. Dies erfordert eine strategische Neuausrichtung der Lieferantenbeziehungen, die über traditionelle Qualitäts- und Kostenkriterien hinausgeht und Cybersicherheit als zentralen Bewertungsfaktor etabliert.\n\n🔗 Transformation der Lieferantenbeziehungen:\n• Cybersicherheit wird zu einem primären Auswahlkriterium für Lieferanten, gleichberechtigt mit Qualität, Kosten und Lieferzuverlässigkeit.\n• Etablierung von Cybersecurity Due Diligence Prozessen für alle neuen und bestehenden Lieferanten, die deren Sicherheitsreifegrad systematisch bewerten.\n• Implementierung von kontinuierlichen Monitoring-Mechanismen zur Überwachung der Cybersicherheitsleistung von Lieferanten über die gesamte Vertragslaufzeit.\n• Entwicklung von Cybersecurity Service Level Agreements (SLAs), die spezifische Sicherheitsanforderungen, Incident Response Zeiten und Compliance-Verpflichtungen definieren.\n• Aufbau strategischer Partnerschaften mit Schlüssellieferanten zur gemeinsamen Entwicklung und Implementierung von Sicherheitsstandards.\n\n🛡️ Risikomanagement in der Lieferkette:\n• Implementierung von Supplier Risk Assessment Frameworks, die sowohl technische als auch organisatorische Sicherheitsaspekte bewerten.\n• Entwicklung von Contingency-Plänen für kritische Lieferanten, einschließlich alternativer Beschaffungsquellen und Notfallprozeduren.\n• Etablierung von Threat Intelligence Sharing Mechanismen zwischen Unternehmen und Lieferanten zur gemeinsamen Bedrohungsabwehr.\n• Implementierung von Zero-Trust-Prinzipien in der Lieferantenintegration, bei denen jeder Zugriff verifiziert und überwacht wird.\n• Regelmäßige Penetrationstests und Sicherheitsaudits bei kritischen Lieferanten zur Validierung der Sicherheitsmaßnahmen.\n\n📋 Vertragliche und operative Anpassungen:\n• Integration spezifischer CRA-Compliance-Klauseln in alle Lieferantenverträge, einschließlich Audit-Rechten und Sanktionsmechanismen.\n• Entwicklung von Supplier Onboarding Prozessen, die Cybersicherheitsschulungen und Zertifizierungsanforderungen umfassen.\n• Etablierung gemeinsamer Incident Response Prozeduren und Kommunikationsprotokolle für sicherheitsrelevante Vorfälle.\n• Implementierung von Supplier Performance Dashboards, die Cybersicherheitsmetriken in Echtzeit verfolgen und bewerten.\n• Aufbau von Supplier Development Programmen zur kontinuierlichen Verbesserung der Cybersicherheitsfähigkeiten in der Lieferkette."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Auswirkungen hat die CRA auf unsere Produkthaftung und Versicherungsstrategie?',
        answer: "Die CRA führt zu einer signifikanten Erweiterung der Produkthaftung im Bereich Cybersicherheit und erfordert eine grundlegende Überarbeitung der Versicherungsstrategie. Unternehmen müssen sich auf neue Haftungsrisiken einstellen und ihre Versicherungsdeckung entsprechend anpassen, um umfassenden Schutz vor CRA-bedingten Risiken zu gewährleisten.\n\n⚖️ Erweiterte Produkthaftung unter der CRA:\n• Hersteller werden für Schäden haftbar gemacht, die durch unzureichende Cybersicherheitsmaßnahmen in ihren Produkten entstehen, einschließlich Datenverluste, Betriebsunterbrechungen und Folgeschäden.\n• Die Haftung erstreckt sich über den gesamten Produktlebenszyklus, von der Entwicklung über die Markteinführung bis hin zur End-of-Life-Phase.\n• Beweislastumkehr in bestimmten Fällen bedeutet, dass Hersteller nachweisen müssen, dass sie alle erforderlichen Sicherheitsmaßnahmen implementiert haben.\n• Kollektive Haftung bei Supply Chain Vorfällen kann dazu führen, dass mehrere Akteure in der Lieferkette gemeinsam für Schäden verantwortlich gemacht werden.\n• Verschärfte Sorgfaltspflichten erfordern kontinuierliche Überwachung und proaktive Maßnahmen zur Risikominimierung.\n\n🛡️ Strategische Versicherungsanpassungen:\n• Cyber-Liability-Versicherungen müssen erweitert werden, um spezifische CRA-Risiken abzudecken, einschließlich regulatorischer Strafen und Compliance-Kosten.\n• Product Liability Versicherungen benötigen Zusatzklauseln für Cybersicherheitsrisiken und deren Folgeschäden.\n• Directors & Officers (D&O) Versicherungen sollten erweitert werden, um persönliche Haftungsrisiken der Geschäftsführung bei CRA-Verstößen abzudecken.\n• Business Interruption Versicherungen müssen Cyber-bedingte Betriebsunterbrechungen und deren Auswirkungen auf die Lieferkette berücksichtigen.\n• Errors & Omissions (E&O) Versicherungen für professionelle Dienstleistungen im Cybersicherheitsbereich werden zunehmend wichtiger.\n\n📊 Risikobewertung und Prämienkalkulation:\n• Versicherer werden detaillierte CRA-Compliance-Nachweise als Grundlage für Risikobewertung und Prämienkalkulation verwenden.\n• Implementierung robuster Cybersicherheitsmaßnahmen kann zu signifikanten Prämienreduktionen führen.\n• Regelmäßige Sicherheitsaudits und Penetrationstests werden zu Voraussetzungen für Versicherungsschutz.\n• Incident Response Pläne und deren regelmäßige Tests werden zu wichtigen Bewertungskriterien für Versicherer.\n• Kontinuierliche Dokumentation und Nachweis der CRA-Compliance werden für Schadensfälle und Prämienerneuerungen erforderlich."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie entwickeln wir eine effektive Incident Response Strategie, die den CRA-Anforderungen entspricht?',
        answer: "Eine CRA-konforme Incident Response Strategie erfordert mehr als traditionelle IT-Sicherheitsmaßnahmen. Sie muss regulatorische Meldepflichten, Stakeholder-Kommunikation, forensische Untersuchungen und kontinuierliche Verbesserungsprozesse integrieren. Die Strategie sollte proaktiv, skalierbar und an die spezifischen Risiken digitaler Produkte angepasst sein.\n\n🚨 CRA-spezifische Incident Response Anforderungen:\n• Schnelle Identifikation und Klassifizierung von Sicherheitsvorfällen mit besonderem Fokus auf Auswirkungen auf digitale Produkte und deren Nutzer.\n• Automatisierte Meldeprozesse an relevante Behörden innerhalb der vorgeschriebenen Fristen, typischerweise 24 Stunden für schwerwiegende Vorfälle.\n• Koordinierte Kommunikation mit betroffenen Kunden, Partnern und der Öffentlichkeit unter Berücksichtigung rechtlicher und reputationsbezogener Aspekte.\n• Forensische Untersuchungsfähigkeiten zur Ursachenanalyse und Nachweis der Compliance-Bemühungen.\n• Kontinuierliche Überwachung und Nachverfolgung von Vorfällen bis zur vollständigen Behebung und Lessons Learned Integration.\n\n⚡ Aufbau einer robusten Incident Response Organisation:\n• Etablierung eines Computer Security Incident Response Teams (CSIRT) mit klar definierten Rollen, Verantwortlichkeiten und Eskalationspfaden.\n• Integration von rechtlichen, kommunikativen und technischen Experten in das Response-Team zur ganzheitlichen Vorfallsbearbeitung.\n• Entwicklung von Incident Response Playbooks für verschiedene Vorfallstypen, von Malware-Infektionen bis hin zu Supply Chain Kompromittierungen.\n• Implementierung von 24/7 Monitoring und Alerting Systemen zur frühzeitigen Erkennung von Sicherheitsvorfällen.\n• Aufbau von Partnerschaften mit externen Forensik-Experten und Incident Response Dienstleistern für komplexe Vorfälle.\n\n🔄 Kontinuierliche Verbesserung und Preparedness:\n• Regelmäßige Tabletop-Übungen und Simulation von Sicherheitsvorfällen zur Validierung und Verbesserung der Response-Prozesse.\n• Post-Incident Reviews zur systematischen Analyse von Vorfällen und Ableitung von Verbesserungsmaßnahmen.\n• Integration von Threat Intelligence zur proaktiven Anpassung der Incident Response Strategien an neue Bedrohungen.\n• Entwicklung von Metriken und KPIs zur Messung der Effektivität der Incident Response Fähigkeiten.\n• Kontinuierliche Schulung und Zertifizierung des Incident Response Teams zur Aufrechterhaltung hoher Kompetenzstandards."
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
