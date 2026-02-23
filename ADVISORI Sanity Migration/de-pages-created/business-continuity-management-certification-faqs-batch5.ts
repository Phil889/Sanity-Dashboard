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
    console.log('Updating Business Continuity Management Certification page with FAQ batch 5...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-certification' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-certification" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche Rolle spielen Soft Skills und Leadership-Kompetenzen bei BCM-Zertifizierungen?',
        answer: "Während technische BCM-Kenntnisse fundamental sind, spielen Soft Skills und Leadership-Kompetenzen eine zunehmend wichtige Rolle für den Erfolg zertifizierter BCM-Professionals. Diese Fähigkeiten sind entscheidend für die effektive Implementierung und das Management von BCM-Programmen in komplexen Organisationsumgebungen.\n\n🗣️ Kommunikation und Stakeholder-Management:\n• Fähigkeit zur Übersetzung technischer BCM-Konzepte in Geschäftssprache für verschiedene Zielgruppen\n• Präsentationsfähigkeiten für Board-Level und Executive-Kommunikation\n• Verhandlungsgeschick bei der Durchsetzung von BCM-Investitionen und Prioritäten\n• Krisenkommunikation und Media Relations während Störungsereignissen\n• Cross-kulturelle Kommunikation in internationalen Organisationen\n\n👥 Change Management und Organisationsentwicklung:\n• Führung von BCM-Transformationsprojekten und kulturellem Wandel\n• Überwindung von Widerständen gegen BCM-Implementierungen\n• Aufbau von Resilienz-Kultur und Risikobewusstsein in Organisationen\n• Coaching und Mentoring von BCM-Teams und Stakeholdern\n• Facilitation von Workshops und Trainingsveranstaltungen\n\n🎯 Strategisches Denken und Problemlösung:\n• Entwicklung von BCM-Strategien im Kontext von Geschäftszielen\n• Analytische Fähigkeiten für komplexe Risikobewertungen\n• Creative Problem-Solving für unkonventionelle BCM-Herausforderungen\n• Systems Thinking für ganzheitliche BCM-Ansätze\n• Innovation und kontinuierliche Verbesserung von BCM-Programmen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie kann ich meine BCM-Zertifizierung für Consulting und Selbstständigkeit nutzen?',
        answer: "BCM-Zertifizierungen bieten eine solide Grundlage für eine erfolgreiche Consulting-Karriere oder Selbstständigkeit. Der wachsende Markt für BCM-Dienstleistungen und die zunehmende Regulierung schaffen attraktive Geschäftsmöglichkeiten für qualifizierte Professionals.\n\n💼 Consulting-Geschäftsmodelle:\n• Spezialisierte BCM-Beratung für spezifische Branchen oder Regulierungsumgebungen\n• Implementierungsunterstützung für BCM-Systeme und Standards\n• Audit und Assessment Services für Compliance-Bewertungen\n• Training und Schulungsdienstleistungen für Organisationen\n• Interim Management für BCM-Projekte und Transformationen\n\n🎯 Marktpositionierung und Differenzierung:\n• Entwicklung einer Nischen-Expertise in emerging BCM-Bereichen\n• Aufbau einer starken Personal Brand und Thought Leadership\n• Kombination von BCM mit komplementären Fähigkeiten wie IT oder Legal\n• Fokus auf spezifische Zielgruppen wie KMU oder multinationale Konzerne\n• Innovation durch neue Methodologien oder Technologie-Integration\n\n📈 Geschäftsentwicklung und Kundenakquise:\n• Networking durch professionelle Verbände und Branchenveranstaltungen\n• Content Marketing durch Publikationen und Vorträge\n• Referenzen und Testimonials von erfolgreichen Projekten\n• Partnerschaften mit anderen Beratern und Dienstleistern\n• Digitale Präsenz und Online-Marketing für Sichtbarkeit\n\n🔧 Operative Aspekte der Selbstständigkeit:\n• Rechtliche und steuerliche Überlegungen für Consulting-Geschäfte\n• Pricing-Strategien und Vertragsgestaltung\n• Qualitätsmanagement und professionelle Haftpflicht\n• Kontinuierliche Weiterbildung und Zertifizierungserhaltung\n• Work-Life-Balance und nachhaltiges Geschäftswachstum"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Bedeutung haben BCM-Zertifizierungen für verschiedene Branchen und Sektoren?',
        answer: "BCM-Zertifizierungen haben je nach Branche und Sektor unterschiedliche Bedeutung und Anforderungen. Das Verständnis branchenspezifischer Besonderheiten ist entscheidend für die strategische Karriereplanung und erfolgreiche BCM-Implementierung.\n\n🏦 Finanzdienstleistungen:\n• Hohe regulatorische Anforderungen durch Basel III, DORA und nationale Aufsichtsbehörden\n• Fokus auf operationelle Resilienz und systemische Risiken\n• Integration mit Risikomanagement und Compliance-Funktionen\n• Spezialisierte Zertifikate für Finanzmarkt-spezifische BCM-Anforderungen\n• Internationale Standards für grenzüberschreitende Finanzdienstleister\n\n🏥 Healthcare und kritische Infrastrukturen:\n• Lebenskritische Kontinuitätsanforderungen und Patientensicherheit\n• Spezialisierte Standards für medizinische Geräte und Notfallversorgung\n• Integration mit Disaster Management und Emergency Response\n• Compliance mit sektorspezifischen Regulierungen und Akkreditierungen\n• Fokus auf Supply Chain Resilience für kritische Medikamente und Ausrüstung\n\n🏭 Produktion und Supply Chain:\n• Just-in-Time Produktion und komplexe Lieferketten-Abhängigkeiten\n• Integration von BCM mit Lean Manufacturing und Operational Excellence\n• Fokus auf Supplier Risk Management und alternative Beschaffungsstrategien\n• Umwelt- und Nachhaltigkeitsaspekte in BCM-Programmen\n• Digitalisierung und Industry 4.0 Auswirkungen auf BCM-Anforderungen\n\n💻 Technologie und IT-Services:\n• Cyber-Resilienz und IT-Disaster Recovery als Kernkompetenzen\n• Cloud-basierte BCM-Lösungen und Service-Continuity\n• Agile und DevOps-Integration in BCM-Prozesse\n• Data Protection und Privacy-Aspekte in BCM-Strategien\n• Emerging Technologies wie KI und IoT in BCM-Kontexten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie entwickelt sich die Zukunft der BCM-Zertifizierungen und welche neuen Trends sind zu erwarten?',
        answer: "Die Zukunft der BCM-Zertifizierungen wird von technologischen Innovationen, veränderten Risikoprofilen und neuen Arbeitsmodellen geprägt. Diese Entwicklungen schaffen sowohl Herausforderungen als auch Chancen für BCM-Professionals und Zertifizierungsanbieter.\n\n🌐 Technologische Transformation:\n• KI-gestützte BCM-Tools und automatisierte Risikobewertungen\n• Blockchain-basierte Supply Chain Transparency und Verification\n• IoT und Real-time Monitoring für proaktive BCM-Maßnahmen\n• Virtual und Augmented Reality für immersive BCM-Trainings\n• Quantum Computing Auswirkungen auf Cyber-Security und BCM\n\n🔮 Emerging Risk Landscapes:\n• Klimawandel und Extreme Weather Events als BCM-Prioritäten\n• Geopolitische Instabilität und Supply Chain Nationalism\n• Pandemie-Preparedness und Public Health Emergency Management\n• Space Weather und kritische Infrastruktur-Vulnerabilitäten\n• Social Media und Reputational Risk Management\n\n📱 Neue Lern- und Zertifizierungsformate:\n• Micro-Credentials und Skill-based Zertifizierungen\n• Continuous Assessment und Real-time Competency Validation\n• Peer-to-Peer Learning und Community-driven Zertifizierungen\n• Gamification und Interactive Learning Experiences\n• Cross-disciplinary Zertifikate für Hybrid-Kompetenzen\n\n🚀 Future Skills und Kompetenzen:\n• Data Analytics und Predictive Modeling für BCM\n• Sustainability und ESG Integration in BCM-Strategien\n• Digital Leadership und Remote Team Management\n• Ethical Decision Making und Stakeholder Capitalism\n• Innovation Management und Adaptive Capacity Building\n\n🔄 Regulatorische Entwicklungen:\n• Harmonisierung internationaler BCM-Standards\n• Mandatory BCM-Zertifizierungen für kritische Sektoren\n• Integration von BCM in Corporate Governance Frameworks\n• Standardisierung von BCM-Metriken und Reporting\n• Cross-border Cooperation für globale Resilienz-Initiativen"
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
