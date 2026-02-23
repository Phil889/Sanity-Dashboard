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
    console.log('Updating DORA Informationsregister page with FAQ batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-informationsregister' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-informationsregister" not found')
    }
    
    // Create new FAQs for DORA information register governance and strategic considerations
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Wie stelle ich sicher, dass mein DORA-Informationsregister auch bei organisatorischen Veränderungen und Fusionen aktuell bleibt?',
        answer: "Organisatorische Veränderungen wie Fusionen, Akquisitionen oder Umstrukturierungen stellen besondere Herausforderungen für die Kontinuität und Genauigkeit von DORA-Informationsregistern dar. Diese Ereignisse können zu erheblichen Änderungen in der IKT-Landschaft führen und erfordern proaktive Planung und systematische Anpassungsprozesse.\n\n🔄 Change-Management-Integration und Governance:\n• Etablierung von Change-Management-Prozessen mit automatischen Register-Updates bei organisatorischen Änderungen\n• Integration des Informationsregisters in Due-Diligence-Prozesse bei Fusionen und Akquisitionen\n• Entwicklung von Standard-Operating-Procedures für Register-Anpassungen bei Umstrukturierungen\n• Cross-functional Teams mit Vertretern aus IT, Risk, Compliance und Business für koordinierte Änderungsumsetzung\n• Executive Sponsorship für Sicherstellung angemessener Ressourcen und Priorität bei Transformationsprojekten\n\n📊 Datenkonsolidierung und Harmonisierung:\n• Systematic Asset Mapping zwischen verschiedenen Organisationseinheiten vor und nach Veränderungen\n• Data Reconciliation Processes für Identifikation und Auflösung von Duplikaten oder Inkonsistenzen\n• Standardization von Klassifizierungsschemata und Naming Conventions über alle Organisationseinheiten hinweg\n• Master Data Management für einheitliche Referenzdaten und Taxonomien\n• Legacy System Integration für nahtlose Überführung historischer Daten\n\n🎯 Stakeholder-Management und Kommunikation:\n• Stakeholder Mapping für Identifikation aller betroffenen Parteien und deren Informationsbedürfnisse\n• Communication Plans mit regelmäßigen Updates über Register-Änderungen und deren Auswirkungen\n• Training und Onboarding für neue Mitarbeiter oder Teams aus übernommenen Organisationen\n• Change Champions Network für Unterstützung der Transformation auf operativer Ebene\n• Feedback Mechanisms für kontinuierliche Verbesserung der Change-Prozesse\n\n⚡ Technische Integration und System-Konsolidierung:\n• API-based Integration für nahtlose Verbindung verschiedener Register-Systeme\n• Data Migration Strategies für sichere Überführung von Assets aus Legacy-Systemen\n• System Rationalization für Konsolidierung redundanter Tools und Plattformen\n• Security and Compliance Alignment für einheitliche Standards über alle Systeme hinweg\n• Performance Optimization für Sicherstellung der System-Performance während Integrationsphasen\n\n📋 Compliance und Regulatory Continuity:\n• Regulatory Impact Assessment für Bewertung der Auswirkungen organisatorischer Änderungen auf Compliance-Anforderungen\n• Continuous Compliance Monitoring während Transformationsphasen\n• Documentation Management für lückenlose Nachverfolgbarkeit aller Änderungen\n• Audit Trail Preservation für regulatorische Nachweisführung\n• Regulator Communication für proaktive Information über wesentliche Änderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Governance-Strukturen benötige ich für die effektive Verwaltung eines unternehmensweiten DORA-Informationsregisters?',
        answer: "Die Governance eines unternehmensweiten DORA-Informationsregisters erfordert klare Strukturen, definierte Rollen und etablierte Prozesse, die sowohl operative Effizienz als auch strategische Ausrichtung gewährleisten. Effektive Governance stellt sicher, dass das Register nicht nur technische Anforderungen erfüllt, sondern auch als strategisches Asset für Risikomanagement und Compliance fungiert.\n\n👥 Organisationsstruktur und Rollen-Definition:\n• Data Governance Committee mit Senior-Level-Vertretern aus IT, Risk, Compliance und Business-Bereichen\n• Chief Data Officer oder Register-Owner mit ultimativer Verantwortung für Qualität und strategische Ausrichtung\n• Data Stewards für verschiedene Asset-Kategorien mit spezifischer Fachexpertise und Verantwortung\n• Technical Administrators für System-Maintenance und technische Optimierung\n• Business Liaisons für Verbindung zwischen Register-Team und operativen Geschäftsbereichen\n\n📋 Policy-Framework und Standards:\n• Data Governance Policy mit klaren Prinzipien und Standards für Register-Management\n• Data Quality Standards mit messbaren Kriterien und Acceptance-Levels\n• Access Control Policies mit rollenbasierten Berechtigungen und Approval-Workflows\n• Change Management Procedures für kontrollierte Anpassungen und Updates\n• Incident Response Procedures für Behandlung von Datenqualitätsproblemen oder System-Ausfällen\n\n🔄 Prozess-Design und Workflow-Management:\n• Regular Review Cycles für systematische Überprüfung und Aktualisierung der Register-Inhalte\n• Exception Management Processes für Behandlung von Datenqualitätsproblemen oder Compliance-Abweichungen\n• Escalation Procedures für zeitnahe Lösung kritischer Issues\n• Performance Monitoring mit regelmäßiger Bewertung von KPIs und Service-Levels\n• Continuous Improvement Processes für systematische Optimierung basierend auf Lessons Learned\n\n📊 Oversight und Reporting-Mechanismen:\n• Executive Dashboards für High-Level-Visibility der Register-Performance und Compliance-Status\n• Regular Governance Reviews mit strukturierter Bewertung der Governance-Effektivität\n• Audit and Assurance Programs für unabhängige Validierung der Register-Qualität\n• Stakeholder Reporting mit regelmäßigen Updates für verschiedene Interessensgruppen\n• Regulatory Reporting Integration für nahtlose Erfüllung aufsichtsrechtlicher Anforderungen\n\n🎯 Strategic Alignment und Value Realization:\n• Business Case Management für kontinuierliche Bewertung des Register-Werts\n• Strategic Planning Integration für Alignment mit Unternehmenszielen\n• Investment Governance für optimale Ressourcenallokation\n• Innovation Management für Integration neuer Technologien und Capabilities\n• Stakeholder Engagement für kontinuierliche Abstimmung mit Geschäftsanforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie kann ich mein DORA-Informationsregister als strategisches Asset für Geschäftsentscheidungen und Risikomanagement nutzen?',
        answer: "Ein DORA-Informationsregister kann weit über Compliance-Anforderungen hinaus als strategisches Asset für fundierte Geschäftsentscheidungen und proaktives Risikomanagement genutzt werden. Die systematische Nutzung der Register-Daten ermöglicht datengetriebene Entscheidungen und schafft Wettbewerbsvorteile durch überlegene Transparenz und Risikointelligenz.\n\n📈 Strategic Business Intelligence und Analytics:\n• Asset Portfolio Analysis für optimale Allokation von IT-Investitionen und Ressourcen\n• Cost-Benefit-Analysen für Technologie-Entscheidungen basierend auf vollständiger Asset-Transparenz\n• Capacity Planning mit datengetriebenen Prognosen für zukünftige Infrastruktur-Bedarfe\n• Vendor Performance Analytics für strategische Lieferantenentscheidungen\n• Digital Transformation Roadmapping basierend auf aktueller IKT-Landschaft und Zielarchitektur\n\n🎯 Risikomanagement und Predictive Analytics:\n• Risk Heat Mapping für Visualisierung und Priorisierung von IKT-Risiken\n• Scenario Analysis für Bewertung potenzieller Auswirkungen verschiedener Risikoszenarien\n• Early Warning Systems mit proaktiver Identifikation sich entwickelnder Risiken\n• Stress Testing für Bewertung der Resilienz unter verschiedenen Belastungsszenarien\n• Risk Appetite Monitoring für kontinuierliche Überwachung der Risikotoleranz\n\n💡 Innovation und Competitive Intelligence:\n• Technology Trend Analysis für frühzeitige Identifikation relevanter Innovationen\n• Competitive Benchmarking basierend auf IKT-Capabilities und Resilienz-Metriken\n• Innovation Pipeline Management für strategische Technologie-Adoption\n• Digital Maturity Assessment für Bewertung der digitalen Wettbewerbsfähigkeit\n• Emerging Risk Identification für proaktive Anpassung an neue Bedrohungen\n\n🔍 Operational Excellence und Optimization:\n• Process Optimization durch Identifikation von Ineffizienzen und Verbesserungspotenzialen\n• Resource Utilization Analysis für optimale Nutzung vorhandener Assets\n• Service Level Optimization basierend auf Business-Impact und Kritikalitätsbewertungen\n• Automation Opportunities Identification für Effizienzsteigerungen\n• Performance Benchmarking für kontinuierliche Verbesserung operativer Kennzahlen\n\n🌐 Strategic Planning und Governance:\n• Strategic Asset Planning für langfristige IKT-Strategie-Entwicklung\n• Investment Prioritization basierend auf Risiko-Rendite-Bewertungen\n• Merger and Acquisition Support durch detaillierte IKT-Due-Diligence\n• Regulatory Strategy Development für proaktive Compliance-Planung\n• Stakeholder Value Creation durch transparente Kommunikation von Resilienz-Capabilities"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Welche Lessons Learned und Best Practices haben sich bei der Implementierung von DORA-Informationsregistern in der Praxis bewährt?',
        answer: "Die praktische Implementierung von DORA-Informationsregistern hat wertvolle Erkenntnisse und bewährte Praktiken hervorgebracht, die zukünftige Projekte erheblich beschleunigen und deren Erfolgswahrscheinlichkeit steigern können. Diese Lessons Learned basieren auf realen Erfahrungen und helfen dabei, häufige Fallstricke zu vermeiden.\n\n🎯 Strategische Erfolgsfaktoren und Projektansatz:\n• Start Small, Scale Fast mit Pilotprojekten in begrenzten Bereichen vor unternehmensweiter Ausrollung\n• Executive Sponsorship als kritischer Erfolgsfaktor für Ressourcensicherung und organisatorische Akzeptanz\n• Cross-functional Teams von Beginn an für ganzheitliche Perspektive und Stakeholder-Buy-in\n• Business Value Focus statt rein technischer Implementierung für nachhaltige Unterstützung\n• Agile Methodology mit iterativen Verbesserungen basierend auf Nutzerfeedback\n\n📊 Datenqualität und Governance-Learnings:\n• Data Quality First Prinzip mit Fokus auf Genauigkeit vor Vollständigkeit in frühen Phasen\n• Automated Validation als Grundvoraussetzung für skalierbare Datenqualität\n• Clear Ownership Assignment für jede Datenkategorie zur Vermeidung von Verantwortungslücken\n• Regular Data Cleansing Cycles als kontinuierlicher Prozess statt einmaliger Aktivität\n• User Training Investment als kritischer Faktor für nachhaltige Datenqualität\n\n🛠️ Technische Implementierungs-Best-Practices:\n• API-First Design für maximale Flexibilität und Integrationsfähigkeit\n• Cloud-Native Architecture für Skalierbarkeit und Kosteneffizienz\n• Security-by-Design statt nachträglicher Sicherheitsmaßnahmen\n• Performance Testing von Beginn an für Vermeidung späterer Skalierungsprobleme\n• Disaster Recovery Planning als integraler Bestandteil der Architektur\n\n👥 Change Management und Adoption-Strategien:\n• User-Centric Design mit früher und kontinuierlicher Einbindung der Endnutzer\n• Champion Network als Multiplikatoren für organisatorische Akzeptanz\n• Comprehensive Training Programs mit verschiedenen Lernformaten für unterschiedliche Nutzergruppen\n• Quick Wins Communication für Aufbau von Momentum und Vertrauen\n• Feedback Loop Integration für kontinuierliche Verbesserung der Nutzererfahrung\n\n🔄 Kontinuierliche Verbesserung und Lessons Learned:\n• Regular Retrospectives für systematische Erfassung und Anwendung von Learnings\n• Metrics-Driven Improvement mit klaren KPIs für Erfolg und Verbesserungsbereiche\n• External Benchmarking für Vergleich mit Industry Best Practices\n• Innovation Culture Förderung für kontinuierliche Evolution der Register-Capabilities\n• Knowledge Management für Dokumentation und Transfer von Erfahrungen"
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
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
