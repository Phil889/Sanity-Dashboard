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
    console.log('Updating Datenschutzkoordinator Schulung Grundlagen DSGVO/BDSG page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutzkoordinator-schulung-grundlagen-dsgvo-bdsg' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutzkoordinator-schulung-grundlagen-dsgvo-bdsg" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie können Datenschutzkoordinatoren eine datenschutzkonforme Unternehmenskultur nachhaltig etablieren und aufrechterhalten?",
        answer: "Die Etablierung einer nachhaltigen Datenschutzkultur ist eine der anspruchsvollsten, aber wichtigsten Aufgaben von Datenschutzkoordinatoren. Echte Datenschutzkultur geht weit über Compliance hinaus und macht Datenschutz zu einem intrinsischen Wert der Organisation, der sich in allen Geschäftsentscheidungen widerspiegelt.\n\n🏛️ Dimensionen einer datenschutzkonformen Unternehmenskultur:\n• Werteintegration: Verankerung von Datenschutz als Kernwert in Unternehmensleitbild und strategischen Entscheidungen.\n• Verhaltensänderung: Transformation von Datenschutz von externem Zwang zu intrinsischer Motivation bei allen Mitarbeitern.\n• Leadership Commitment: Sichtbare und authentische Unterstützung durch die Führungsebene als Vorbild für datenschutzbewusstes Verhalten.\n• Kontinuierliche Verstärkung: Systematische Belohnung und Anerkennung datenschutzkonformen Verhaltens.\n\n🌱 ADVISORIs kultureller Transformationsansatz:\n• Culture Assessment: Systematische Analyse der bestehenden Organisationskultur und Identifikation kultureller Hebel für Datenschutz.\n• Storytelling und Kommunikation: Entwicklung überzeugender Narrative, die Datenschutz emotional verankern und Sinnstiftung schaffen.\n• Behavioral Design: Gestaltung von Systemen und Prozessen, die datenschutzkonformes Verhalten natürlich und einfach machen.\n• Measurement und Evolution: Kontinuierliche Messung kultureller Veränderungen und adaptive Weiterentwicklung der Kulturinitiativen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche strategischen Karrierewege eröffnen sich für Datenschutzkoordinatoren nach einer fundierten DSGVO/BDSG-Grundausbildung?",
        answer: "Eine fundierte DSGVO/BDSG-Grundausbildung öffnet vielfältige Karrierewege für Datenschutzkoordinatoren in einer zunehmend datengetriebenen Geschäftswelt. Die erworbenen Kompetenzen sind nicht nur in klassischen Compliance-Rollen gefragt, sondern in allen Bereichen, wo Daten und Technologie Geschäftswert schaffen.\n\n🚀 Strategische Karriereoptionen für Datenschutzkoordinatoren:\n• Chief Privacy Officer (CPO): Führung der gesamten Datenschutzstrategie auf C-Level mit direkter Berichtslinie zum CEO oder Vorstand.\n• Privacy Engineering Manager: Leitung technischer Teams zur Implementierung von Privacy by Design in Produktentwicklung und Systemarchitektur.\n• Regulatory Affairs Director: Übernahme der gesamten regulatorischen Agenda in stark regulierten Branchen wie Finanzwesen oder Gesundheitswesen.\n• Digital Trust Consultant: Spezialisierung auf die Beratung von Unternehmen bei der Entwicklung vertrauensvoller digitaler Geschäftsmodelle.\n\n📈 ADVISORIs Karriereentwicklungsbegleitung:\n• Career Path Planning: Individuelle Beratung zur strategischen Karriereplanung basierend auf persönlichen Stärken und Marktchancen.\n• Skill Gap Analysis: Systematische Bewertung vorhandener Kompetenzen und gezielte Weiterbildungsempfehlungen für angestrebte Rollen.\n• Network Building: Aufbau professioneller Netzwerke und Mentoring-Beziehungen für beschleunigte Karriereentwicklung.\n• Market Intelligence: Kontinuierliche Information über Markttrends und neue Berufsfelder im Datenschutz- und Privacy-Bereich."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie können Datenschutzkoordinatoren die Herausforderungen der Multi-Cloud-Umgebungen und hybriden IT-Landschaften meistern?",
        answer: "Multi-Cloud-Umgebungen und hybride IT-Landschaften stellen Datenschutzkoordinatoren vor komplexe Herausforderungen, da Daten über verschiedene Systeme, Anbieter und Jurisdiktionen verteilt sind. Diese technologische Komplexität erfordert neue Ansätze für Transparenz, Kontrolle und Compliance.\n\n☁️ Datenschutzherausforderungen in Multi-Cloud-Umgebungen:\n• Data Governance Complexity: Aufbau durchgängiger Governance über verschiedene Cloud-Anbieter und On-Premise-Systeme hinweg.\n• Jurisdiktionale Risiken: Navigation zwischen verschiedenen nationalen Datenschutzgesetzen bei grenzüberschreitenden Cloud-Deployments.\n• Vendor Lock-In vs. Compliance: Balance zwischen technischer Effizienz und datenschutzrechtlicher Flexibilität.\n• Audit und Monitoring: Etablierung einheitlicher Überwachungs- und Auditprozesse über heterogene Systemlandschaften.\n\n🔧 ADVISORIs Multi-Cloud-Datenschutzstrategie:\n• Cloud Privacy Framework: Entwicklung standardisierter Governance-Frameworks für einheitliche Datenschutzstandards über alle Cloud-Umgebungen.\n• Data Discovery und Classification: Implementierung automatisierter Tools zur kontinuierlichen Identifikation und Klassifizierung personenbezogener Daten.\n• Zero Trust Privacy: Anwendung von Zero-Trust-Prinzipien auf Datenschutz mit kontinuierlicher Verifikation und minimalen Zugriffsrechten.\n• Compliance Automation: Einsatz von Policy-as-Code-Ansätzen zur automatisierten Durchsetzung von Datenschutzrichtlinien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche Zukunftstrends prägen die Rolle von Datenschutzkoordinatoren und wie bereitet ADVISORI darauf vor?",
        answer: "Die Rolle von Datenschutzkoordinatoren entwickelt sich rasant weiter, getrieben von technologischen Innovationen, sich verändernden regulatorischen Landschaften und steigenden gesellschaftlichen Erwartungen an Datenschutz. Erfolgreiche Datenschutzkoordinatoren müssen diese Trends antizipieren und sich proaktiv darauf vorbereiten.\n\n🔮 Prägende Zukunftstrends für Datenschutzkoordinatoren:\n• AI-First Privacy: Integration von Künstlicher Intelligenz in Datenschutzprozesse für Automatisierung und prädiktive Compliance.\n• Stakeholder Capitalism: Erweiterte Verantwortung für gesellschaftliche Auswirkungen von Datennutzung über rechtliche Compliance hinaus.\n• Privacy Engineering: Technische Spezialisierung auf die Entwicklung datenschutzfreundlicher Systeme und Architekturen.\n• Global Harmonization: Navigation zwischen sich annähernden, aber unterschiedlichen internationalen Datenschutzstandards.\n\n🎯 ADVISORIs zukunftsorientierte Vorbereitung:\n• Trend Monitoring: Kontinuierliche Beobachtung technologischer, regulatorischer und gesellschaftlicher Entwicklungen mit Relevanz für Datenschutz.\n• Future Skills Development: Identifikation und Vermittlung von Zukunftskompetenzen, die für die Evolution der Datenschutzrolle erforderlich sind.\n• Innovation Lab: Experimenteller Raum für die Erprobung neuer Datenschutzansätze und -technologien.\n• Thought Leadership: Aktive Mitgestaltung der Diskussion über die Zukunft des Datenschutzes durch Forschung und Publikationen."
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
    console.log('✅ FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
