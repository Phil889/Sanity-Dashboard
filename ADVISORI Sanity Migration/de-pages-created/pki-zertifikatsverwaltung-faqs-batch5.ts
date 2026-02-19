import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating PKI Zertifikatsverwaltung page with FAQ batch 5...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'pki-zertifikatsverwaltung' })
    
    if (!existingDoc) {
      throw new Error('Document "pki-zertifikatsverwaltung" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Wie unterstützt PKI Incident Response Management schnelle Reaktion auf Certificate-bezogene Sicherheitsvorfälle?',
        answer: "PKI Incident Response Management etabliert strukturierte Prozesse für schnelle, effektive Reaktion auf Certificate-bezogene Sicherheitsvorfälle. Es entwickelt spezialisierte Response-Capabilities, die PKI-spezifische Bedrohungen adressieren und Business Continuity gewährleisten.\n\n🚨 Incident Detection und Classification:\n• Automated Threat Detection überwacht PKI-Verwaltungsumgebungen kontinuierlich auf Anomalien und potenzielle Sicherheitsvorfälle\n• Certificate-specific Incident Classification kategorisiert Vorfälle nach Schweregrad und erforderlichen Response-Maßnahmen\n• Real-time Alert Systems benachrichtigen Response-Teams sofort über kritische PKI-Sicherheitsereignisse\n• Threat Intelligence Integration korreliert PKI-Vorfälle mit bekannten Bedrohungsmustern\n• Impact Assessment bewertet potenzielle Auswirkungen von Certificate-Kompromittierungen auf Geschäftsprozesse\n\n⚡ Rapid Response Execution:\n• Emergency Response Procedures definieren sofortige Maßnahmen für verschiedene PKI-Incident-Szenarien\n• Automated Response Actions implementieren vordefinierte Gegenmaßnahmen ohne manuelle Verzögerungen\n• Certificate Revocation Automation ermöglicht sofortige Sperrung kompromittierter Zertifikate\n• Communication Protocols gewährleisten schnelle Information aller betroffenen Stakeholder\n• Recovery Planning initiiert strukturierte Wiederherstellungsprozesse nach Incident-Containment"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Rolle spielt PKI Business Continuity Planning in der Aufrechterhaltung kritischer Geschäftsprozesse?',
        answer: "PKI Business Continuity Planning gewährleistet kontinuierliche Verfügbarkeit kritischer Certificate-Services auch unter widrigen Umständen. Es entwickelt umfassende Kontinuitätsstrategien, die PKI-Verwaltung als geschäftskritische Infrastruktur behandeln.\n\n🏢 Business Impact Analysis:\n• Critical Process Identification analysiert alle geschäftskritischen Prozesse, die von PKI-Verwaltung abhängen\n• Dependency Mapping dokumentiert komplexe Abhängigkeiten zwischen PKI-Services und Geschäftsoperationen\n• Recovery Time Objectives definieren akzeptable Ausfallzeiten für verschiedene PKI-Services\n• Recovery Point Objectives bestimmen maximale Datenverluste bei PKI-Verwaltungsausfällen\n• Business Impact Quantification bewertet finanzielle und operative Auswirkungen von PKI-Ausfällen\n\n🔄 Continuity Strategy Development:\n• Redundancy Planning implementiert mehrschichtige Backup-Systeme für kritische PKI-Komponenten\n• Geographic Distribution etabliert PKI-Services an mehreren Standorten für Disaster Recovery\n• Alternative Processing Sites bereiten sekundäre PKI-Verwaltungsstandorte für Notfälle vor\n• Vendor Continuity Management gewährleistet kontinuierliche Unterstützung durch PKI-Anbieter\n• Staff Continuity Planning bereitet Teams auf Notfall-PKI-Operationen vor"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie gewährleistet PKI Performance Benchmarking kontinuierliche Optimierung und Wettbewerbsfähigkeit?',
        answer: "PKI Performance Benchmarking etabliert systematische Leistungsmessung und -vergleich für kontinuierliche PKI-Verwaltungsoptimierung. Es entwickelt umfassende Benchmarking-Frameworks, die interne Performance-Verbesserung und externe Wettbewerbsfähigkeit fördern.\n\n📊 Comprehensive Performance Metrics:\n• Multi-dimensional Performance Measurement erfasst alle Aspekte der PKI-Verwaltungsleistung von technischen Metriken bis Business-Impact\n• Industry Benchmark Comparison vergleicht PKI-Performance mit Branchenstandards und Best Practices\n• Historical Trend Analysis identifiziert Performance-Entwicklungen und Verbesserungspotenziale über Zeit\n• Peer Group Benchmarking vergleicht PKI-Leistung mit ähnlichen Organisationen\n• Custom KPI Development entwickelt organisationsspezifische Performance-Indikatoren\n\n🎯 Continuous Improvement Framework:\n• Performance Gap Analysis identifiziert Bereiche mit Verbesserungspotenzial durch systematischen Vergleich\n• Optimization Roadmap Development priorisiert Performance-Verbesserungsmaßnahmen basierend auf Business Impact\n• Best Practice Adoption implementiert bewährte Praktiken aus Benchmark-Analysen\n• Innovation Opportunities identifiziert Möglichkeiten für Performance-Durchbrüche\n• ROI Measurement quantifiziert den Wert von Performance-Verbesserungsinvestitionen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie unterstützt PKI Transformation Management erfolgreiche Organisationsveränderung und Modernisierung?',
        answer: "PKI Transformation Management orchestriert umfassende Organisationsveränderungen für moderne, zukunftsfähige PKI-Verwaltung. Es entwickelt strukturierte Transformationsansätze, die technische Modernisierung mit organisatorischem Wandel verbinden.\n\n🔄 Transformation Strategy Development:\n• Holistic Transformation Vision entwickelt umfassende Zielbilder für moderne PKI-Verwaltungsorganisationen\n• Change Readiness Assessment bewertet Organisationsbereitschaft für PKI-Transformationsinitiativen\n• Stakeholder Alignment gewährleistet einheitliche Unterstützung für Transformationsziele\n• Risk Mitigation Planning identifiziert und adressiert Transformationsrisiken proaktiv\n• Success Metrics Definition etabliert messbare Ziele für Transformationserfolg\n\n🚀 Implementation Excellence:\n• Phased Implementation Planning strukturiert Transformation in manageable, erfolgsorientierte Phasen\n• Quick Wins Identification demonstriert frühe Transformationserfolge für Momentum-Aufbau\n• Cultural Change Management adressiert organisatorische Widerstände und fördert Transformationsakzeptanz\n• Capability Building entwickelt erforderliche Fähigkeiten für transformierte PKI-Verwaltung\n• Sustainability Planning gewährleistet langfristige Aufrechterhaltung von Transformationsergebnissen"
      }
    ]
    
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
