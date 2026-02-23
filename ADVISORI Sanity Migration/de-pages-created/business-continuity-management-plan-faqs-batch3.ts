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
    console.log('Updating Business Continuity Management Plan page with FAQ batch 3...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-plan' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-plan" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche Herausforderungen entstehen bei der globalen Koordination von BCM-Plänen?',
        answer: "Die globale Koordination von BCM-Plänen bringt komplexe Herausforderungen mit sich, die kulturelle, rechtliche, technische und operative Dimensionen umfassen. Erfolgreiche internationale BCM-Strategien erfordern adaptive Ansätze, die lokale Besonderheiten mit globaler Konsistenz verbinden.\n\n🌍 Kulturelle und sprachliche Herausforderungen:\n• Unterschiedliche Geschäftskulturen beeinflussen Risikowahrnehmung und Krisenreaktion\n• Sprachbarrieren erschweren effektive Kommunikation während Notfallsituationen\n• Verschiedene Arbeitszeiten und Feiertage komplizieren koordinierte Reaktionen\n• Lokale Führungsstile und Entscheidungsprozesse variieren erheblich\n• Kulturelle Sensitivitäten bei Krisenkommunikation und Stakeholder-Engagement\n\n⚖️ Rechtliche und regulatorische Komplexität:\n• Unterschiedliche nationale Gesetze und Compliance-Anforderungen\n• Varying Data Protection Laws erschweren grenzüberschreitenden Datentransfer\n• Lokale Arbeitsgesetze beeinflussen Notfall-Arbeitsregelungen\n• Verschiedene Haftungsregelungen und Versicherungsanforderungen\n• Regulatorische Berichtspflichten variieren zwischen Jurisdiktionen\n\n🕐 Zeitzone und Koordinationsherausforderungen:\n• Follow-the-Sun-Modelle für kontinuierliche BCM-Überwachung\n• Koordination von Krisenstäben über verschiedene Zeitzonen\n• Herausforderungen bei zeitkritischen Entscheidungen\n• Staffing von Notfall-Teams rund um die Uhr\n• Synchronisation von Übungen und Tests global\n\n💻 Technische Infrastruktur-Unterschiede:\n• Varying IT Infrastructure Standards zwischen Standorten\n• Unterschiedliche Kommunikationstechnologien und -präferenzen\n• Network Connectivity Issues in verschiedenen Regionen\n• Cybersecurity Standards variieren zwischen Ländern\n• Legacy Systems Integration über verschiedene Standorte\n\n🏢 Organisatorische Struktur-Komplexität:\n• Matrix-Organisationen mit geteilten Verantwortlichkeiten\n• Lokale vs. zentrale Entscheidungsbefugnisse\n• Resource Allocation zwischen verschiedenen Regionen\n• Performance Measurement über verschiedene Märkte\n• Change Management in diversen organisationalen Kontexten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie werden BCM-Pläne für kritische Infrastrukturen und systemrelevante Organisationen entwickelt?',
        answer: "BCM-Pläne für kritische Infrastrukturen erfordern besondere Sorgfalt aufgrund ihrer gesellschaftlichen Bedeutung und komplexen Interdependenzen. Diese Organisationen müssen höchste Resilienz-Standards erfüllen und koordinierte Ansätze mit anderen kritischen Sektoren entwickeln.\n\n🏛️ Regulatorische Anforderungen und Standards:\n• Compliance mit nationalen Kritische-Infrastruktur-Schutzgesetzen\n• Sektorspezifische Regulierungen und Aufsichtsbehörden\n• Internationale Standards für kritische Infrastrukturen\n• Regelmäßige Berichterstattung an Behörden und Regulatoren\n• Koordination mit nationalen Sicherheitsbehörden\n\n🔗 Interdependenz-Management:\n• Mapping von Abhängigkeiten zwischen kritischen Sektoren\n• Cascade Failure Analysis für systemische Risiken\n• Cross-Sector Coordination Mechanisms\n• Shared Infrastructure Protection Strategies\n• Joint Contingency Planning mit anderen kritischen Organisationen\n\n🛡️ Erhöhte Sicherheitsanforderungen:\n• Physical Security Measures für kritische Anlagen\n• Cybersecurity Resilience gegen staatliche und kriminelle Akteure\n• Personnel Security Screening und Insider Threat Management\n• Supply Chain Security für kritische Komponenten\n• Information Sharing mit Sicherheitsbehörden\n\n📊 Gesellschaftliche Verantwortung:\n• Public Communication Strategies während Störungen\n• Stakeholder Management mit Bürgern und Medien\n• Social Impact Assessment von Geschäftsunterbrechungen\n• Community Engagement und Transparenz\n• Corporate Social Responsibility in Krisensituationen\n\n⚡ Höhere Verfügbarkeitsanforderungen:\n• Near-Zero Downtime Requirements für kritische Services\n• Redundante Systeme und Backup-Infrastrukturen\n• Rapid Recovery Capabilities für systemkritische Funktionen\n• Stress Testing unter extremen Bedingungen\n• Continuous Monitoring und Predictive Maintenance"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Rolle spielen externe Dienstleister und Partner in BCM-Plänen?',
        answer: "Externe Dienstleister und Partner sind integrale Bestandteile moderner BCM-Pläne, da Organisationen zunehmend auf spezialisierte Services und komplexe Lieferketten angewiesen sind. Ihre erfolgreiche Integration erfordert strukturierte Ansätze für Risikomanagement, Koordination und gemeinsame Kontinuitätsplanung.\n\n🤝 Strategische Partnerschaft-Integration:\n• Joint Business Continuity Planning mit kritischen Partnern\n• Shared Risk Assessment und gemeinsame Bedrohungsanalyse\n• Coordinated Response Strategies für gemeinsame Kunden\n• Mutual Support Agreements für Notfallsituationen\n• Regular Partnership Reviews und Kontinuitäts-Audits\n\n📋 Lieferanten-BCM-Management:\n• Supplier BCM Requirements in Verträgen und SLAs\n• Regular Supplier BCM Assessments und Audits\n• Tiered Supplier Approach basierend auf Kritikalität\n• Alternative Supplier Strategies und Backup-Optionen\n• Supplier Development Programs für BCM-Capabilities\n\n🔄 Outsourcing-Kontinuitätsplanung:\n• Service Provider BCM Due Diligence\n• Contractual BCM Obligations und Performance Standards\n• Regular Testing von Outsourcing-Kontinuitätsplänen\n• Transition Planning für Provider-Wechsel\n• Hybrid Delivery Models für kritische Services\n\n📞 Koordinierte Kommunikation:\n• Joint Communication Protocols während Störungen\n• Shared Stakeholder Management und Messaging\n• Coordinated Media Relations und Public Communications\n• Real-time Information Sharing Mechanisms\n• Escalation Procedures zwischen Organisationen\n\n🎯 Performance Management:\n• Joint KPIs und Service Level Agreements\n• Shared Metrics für Kontinuitäts-Performance\n• Regular Performance Reviews und Improvement Planning\n• Incentive Alignment für BCM-Excellence\n• Continuous Improvement durch Partner-Feedback"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie werden BCM-Pläne an sich verändernde Bedrohungslandschaften angepasst?',
        answer: "Die kontinuierliche Anpassung von BCM-Plänen an evolvierende Bedrohungslandschaften ist entscheidend für nachhaltige Resilienz. Moderne BCM-Ansätze integrieren Threat Intelligence, adaptive Planungszyklen und proaktive Risikobewertung für dynamische Kontinuitätsstrategien.\n\n🔍 Threat Intelligence Integration:\n• Continuous Threat Monitoring durch spezialisierte Intelligence Services\n• Emerging Risk Assessment für neue Bedrohungstypen\n• Sector-specific Threat Analysis und Peer-Intelligence\n• Geopolitical Risk Monitoring für internationale Operationen\n• Technology Threat Tracking für Cyber- und digitale Risiken\n\n📊 Adaptive Risikobewertung:\n• Dynamic Risk Modeling mit Machine Learning Algorithmen\n• Scenario Planning für emerging Threats\n• Regular Risk Landscape Reviews und Updates\n• Quantitative Risk Analysis für neue Bedrohungen\n• Cross-functional Risk Assessment Teams\n\n🔄 Agile Plan-Updates:\n• Rapid Plan Modification Processes\n• Version Control und Change Management für Plan-Updates\n• Stakeholder Communication über Plan-Änderungen\n• Testing neuer Plan-Komponenten vor Implementierung\n• Rollback-Mechanismen für problematische Updates\n\n🎯 Proaktive Anpassungsstrategien:\n• Horizon Scanning für zukünftige Bedrohungen\n• Innovation Integration in BCM-Strategien\n• Regulatory Change Monitoring und Compliance-Updates\n• Technology Evolution Tracking und Adoption\n• Best Practice Integration aus anderen Organisationen\n\n📈 Kontinuierliche Verbesserung:\n• Lessons Learned Integration aus realen Ereignissen\n• Regular Plan Effectiveness Reviews\n• Benchmark Comparison mit Industry Standards\n• Feedback Integration von Stakeholdern und Experten\n• Performance Metrics für Anpassungsfähigkeit"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
