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
    console.log('Updating PKI Zertifikatsverwaltung page with FAQ batch 4...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'pki-zertifikatsverwaltung' })
    
    if (!existingDoc) {
      throw new Error('Document "pki-zertifikatsverwaltung" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie unterstützt PKI Training und Change Management erfolgreiche Organisationstransformation?',
        answer: "PKI Training und Change Management transformieren technische PKI-Implementierungen in nachhaltige Organisationsveränderungen. Es entwickelt umfassende Bildungsstrategien und Change-Prozesse, die Mitarbeiter befähigen, PKI-Verwaltung effektiv zu nutzen und zu unterstützen.\n\n🎓 Comprehensive Training Program Development:\n• Role-based Training Programs entwickeln spezifische Bildungsinhalte für verschiedene Organisationsebenen von Executives bis zu technischen Implementierern\n• Hands-on Learning Experiences kombinieren theoretisches Wissen mit praktischen PKI-Verwaltungsübungen\n• Certification Pathways etablieren strukturierte Qualifizierungswege für PKI-Verwaltungsexpertise\n• Continuous Learning Frameworks gewährleisten kontinuierliche Weiterbildung bei sich entwickelnden PKI-Technologien\n• Knowledge Transfer Mechanisms dokumentieren und teilen PKI-Verwaltungsbest-practices organisationsweit\n\n🔄 Change Management Strategy:\n• Stakeholder Engagement Programs identifizieren und involvieren alle von PKI-Verwaltungsänderungen betroffenen Gruppen\n• Communication Strategies entwickeln klare, konsistente Botschaften über PKI-Verwaltungsvorteile und -änderungen\n• Resistance Management identifiziert und adressiert Widerstände gegen neue PKI-Verwaltungsprozesse proaktiv\n• Success Metrics definieren messbare Ziele für PKI-Verwaltungsadoption und -erfolg\n• Feedback Loops etablieren kontinuierliche Verbesserungsmechanismen basierend auf Nutzererfahrungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Rolle spielt PKI Vendor Management in der strategischen Lieferantenoptimierung?',
        answer: "PKI Vendor Management optimiert strategische Lieferantenbeziehungen für maximale PKI-Verwaltungseffizienz und -innovation. Es entwickelt strukturierte Ansätze für Vendor-Auswahl, -bewertung und -entwicklung, die langfristige Geschäftsziele unterstützen.\n\n🤝 Strategic Vendor Partnership Development:\n• Vendor Assessment Frameworks bewerten PKI-Anbieter basierend auf technischen Fähigkeiten, Geschäftsstabilität und strategischer Ausrichtung\n• Partnership Strategy Development etabliert langfristige, strategische Beziehungen mit Schlüssel-PKI-Anbietern\n• Innovation Collaboration Programme nutzen Vendor-Expertise für PKI-Verwaltungsinnovationen\n• Risk Diversification Strategies minimieren Abhängigkeiten durch ausgewogene Vendor-Portfolios\n• Performance Management Systems überwachen und optimieren Vendor-Performance kontinuierlich\n\n💰 Cost Optimization und Value Engineering:\n• Total Cost of Ownership Analysis quantifiziert alle Kosten verschiedener PKI-Vendor-Optionen\n• Value Engineering identifiziert Möglichkeiten zur Kostensenkung ohne Qualitätseinbußen\n• Contract Optimization verhandelt günstige Bedingungen und Service Level Agreements\n• Benchmarking vergleicht Vendor-Performance mit Industry Standards\n• ROI Measurement demonstriert quantifizierbaren Wert von Vendor-Investitionen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie gewährleistet PKI Documentation Management umfassende Wissenssicherung und Compliance-Unterstützung?',
        answer: "PKI Documentation Management transformiert fragmentierte Dokumentation in strukturierte Wissensbasen, die operative Effizienz steigern und Compliance-Anforderungen erfüllen. Es etabliert systematische Ansätze für Dokumentenerstellung, -verwaltung und -nutzung.\n\n📚 Comprehensive Documentation Framework:\n• Structured Documentation Architecture organisiert PKI-Verwaltungsdokumentation in logischen, durchsuchbaren Hierarchien\n• Template Standardization gewährleistet konsistente Dokumentenformate und -qualität\n• Version Control Systems verwalten Dokumentenversionen und -änderungen systematisch\n• Access Control Management steuert Dokumentenzugriff basierend auf Rollen und Berechtigungen\n• Automated Documentation Generation erstellt Dokumentation automatisch aus PKI-Verwaltungssystemen\n\n🔍 Knowledge Management Integration:\n• Searchable Knowledge Base ermöglicht schnelle Informationssuche und -abruf\n• Expert Knowledge Capture dokumentiert Expertenwissen für Organisationserhalt\n• Best Practice Documentation sammelt und teilt bewährte PKI-Verwaltungspraktiken\n• Lessons Learned Systems dokumentieren Erfahrungen für zukünftige Projekte\n• Training Material Integration verbindet Dokumentation mit Bildungsprogrammen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie unterstützt PKI Innovation Management kontinuierliche Technologieentwicklung und Wettbewerbsvorteile?',
        answer: "PKI Innovation Management positioniert PKI-Verwaltung als Innovationstreiber und Wettbewerbsvorteil. Es entwickelt strukturierte Ansätze für Technologie-Scouting, Innovation-Bewertung und strategische Implementierung neuer PKI-Verwaltungskapazitäten.\n\n🚀 Innovation Strategy Development:\n• Technology Roadmap Planning identifiziert emerging PKI-Technologien und deren strategisches Potenzial\n• Innovation Portfolio Management balanciert kurzfristige Verbesserungen mit langfristigen Durchbrüchen\n• Competitive Intelligence analysiert Markttrends und Wettbewerberstrategien für strategische Positionierung\n• Innovation Metrics definieren messbare Ziele für PKI-Verwaltungsinnovation\n• Strategic Partnership Development nutzt externe Innovation-Ökosysteme für beschleunigte Entwicklung\n\n🔬 Research und Development Integration:\n• Proof of Concept Development testet neue PKI-Verwaltungstechnologien in kontrollierten Umgebungen\n• Pilot Program Management implementiert innovative Lösungen in begrenzten Bereichen für Validierung\n• Innovation Lab Establishment schafft dedizierte Räume für PKI-Verwaltungsexperimentation\n• Cross-functional Innovation Teams verbinden verschiedene Expertisen für holistische Innovation\n• Intellectual Property Management schützt und monetarisiert PKI-Verwaltungsinnovationen"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
