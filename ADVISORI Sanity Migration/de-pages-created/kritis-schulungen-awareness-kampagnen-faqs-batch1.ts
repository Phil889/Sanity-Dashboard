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
    console.log('Updating KRITIS Schulungen & Awareness-Kampagnen page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-schulungen-awareness-kampagnen' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-schulungen-awareness-kampagnen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können KRITIS-spezifische Schulungen und Awareness-Kampagnen als strategisches Instrument zur Risikominimierung und Wertschöpfung für die C-Suite fungieren?",
        answer: "KRITIS-Schulungen und Awareness-Kampagnen sind fundamentale Investitionen in die menschliche Sicherheitsinfrastruktur und strategische Instrumente zur nachhaltigen Risikominimierung. Für die C-Suite bedeuten diese Programme nicht nur Compliance-Erfüllung, sondern eine systematische Stärkung der organisatorischen Resilienz und eine messbare Reduktion sicherheitsbezogener Geschäftsrisiken.\n\n🎯 Strategische Werttreiber für die Führungsebene:\n• Risikominimierung durch Human Factor: Bis zu 95% aller erfolgreichen Cyberangriffe auf kritische Infrastrukturen beginnen mit menschlichem Versagen – professionelle Schulungen können diese Vulnerabilität um bis zu 70% reduzieren.\n• Operative Exzellenz und Incident Response: Geschulte Mitarbeiter erkennen Bedrohungen früher, reagieren angemessener und verkürzen Incident-Response-Zeiten erheblich, was direkte Kostenvorteile generiert.\n• Compliance-Effizienz und Audit-Readiness: Systematische Awareness-Programme erleichtern Compliance-Nachweise und reduzieren Aufwand und Kosten bei regulatorischen Prüfungen.\n• Reputationsschutz und Stakeholder-Vertrauen: Nachweisbare Investitionen in Mitarbeiterschulungen signalisieren Verantwortungsbewusstsein und stärken das Vertrauen von Kunden, Partnern und Regulatoren.\n\n🛡️ ADVISORIs integrierter Mehrwert-Ansatz:\n• ROI-orientierte Schulungskonzepte: Unsere Programme sind darauf ausgelegt, messbare Geschäftsvorteile zu generieren, nicht nur Wissen zu vermitteln – jede Schulungsinvestition zahlt sich durch reduzierte Incident-Kosten aus.\n• Executive-Dashboard für Führungskräfte: Kontinuierliche Messung und Berichterstattung der Awareness-Effektivität mit KPIs, die direkt mit Geschäftszielen verknüpft sind.\n• Integrierte Change-Management-Strategien: Schulungen werden als Teil größerer Organizational Excellence-Initiativen positioniert, die kulturelle Transformation und operative Verbesserungen bewirken.\n• Competitive Intelligence Integration: Unsere Awareness-Programme berücksichtigen branchenspezifische Bedrohungslandschaften und verschaffen Ihnen Vorsprung gegenüber weniger vorbereiteten Wettbewerbern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten ROI-Metriken und Kostenvorteile können durch professionelle KRITIS-Schulungen und Awareness-Kampagnen realisiert werden?",
        answer: "Professionelle KRITIS-Schulungen und Awareness-Kampagnen generieren messbare, quantifizierbare ROI-Erträge, die weit über die Schulungskosten hinausgehen. Diese Investitionen zahlen sich durch direkte Kosteneinsparungen, Effizienzsteigerungen und Risikominimierung aus und schaffen nachhaltigen Geschäftswert.\n\n💰 Quantifizierbare Kostenvorteile:\n• Incident-Kostenreduktion: Unternehmen mit umfassenden Awareness-Programmen verzeichnen durchschnittlich 65% weniger erfolgreiche Cyberangriffe und 40% niedrigere Incident-Response-Kosten pro Vorfall.\n• Versicherungsprämien-Optimierung: Nachweisbare Schulungsprogramme können Cyber-Versicherungsprämien um bis zu 25% reduzieren, da Versicherer das reduzierte Risikoprofil anerkennen.\n• Compliance-Effizienz: Systematische Awareness-Programme verkürzen Audit-Zyklen um durchschnittlich 30% und reduzieren externe Beratungskosten bei Compliance-Prüfungen.\n• Produktivitätssteigerung: Geschulte Mitarbeiter arbeiten sicherheitsbewusster und effizienter, was zu messbaren Produktivitätssteigerungen von 15-20% in sicherheitskritischen Prozessen führt.\n\n📈 Strategische ROI-Dimensionen:\n• Business Continuity Value: Jeder vermiedene Tag kritischer Systemausfälle durch präventive Awareness kann je nach Branche Millionenwerte darstellen.\n• Talent Retention und Employer Branding: Investitionen in Mitarbeiterentwicklung steigern die Mitarbeiterbindung und reduzieren Rekrutierungs- und Onboarding-Kosten.\n• Innovation Enablement: Eine sicherheitsbewusste Belegschaft ermöglicht risikoärmere Digitalisierung und Innovation, die neue Geschäftsmöglichkeiten eröffnet.\n• Market Differentiation: Nachweisbare Security Excellence kann als Wettbewerbsvorteil bei Ausschreibungen und Kundengewinnung eingesetzt werden und Premium-Pricing rechtfertigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann ADVISORI dabei unterstützen, KRITIS-Schulungen als Katalysator für Organizational Excellence und kulturelle Transformation zu nutzen?",
        answer: "KRITIS-Schulungen und Awareness-Kampagnen bieten eine einzigartige Gelegenheit, nicht nur Sicherheitsziele zu erreichen, sondern gleichzeitig umfassende organisatorische Verbesserungen und kulturelle Transformation zu bewirken. ADVISORI nutzt Sicherheitsschulungen als Hebel für breitere Excellence-Initiativen, die nachhaltige Verhaltensänderungen und operative Verbesserungen in der gesamten Organisation schaffen.\n\n🚀 Transformation durch strategische Schulungsintegration:\n• Führungskultur-Entwicklung: Unsere Executive-Schulungen stärken nicht nur Sicherheitsbewusstsein, sondern entwickeln gleichzeitig Führungskompetenzen in Risikomanagement, Krisenführung und Change Management.\n• Prozessoptimierung und operative Exzellenz: Sicherheitsschulungen werden genutzt, um gleichzeitig operative Prozesse zu hinterfragen, zu optimieren und zu standardisieren.\n• Innovation und Agilität: Security-Awareness wird mit Innovationsmethoden und agilen Arbeitsweisen verknüpft, um eine lernende, anpassungsfähige Organisation zu schaffen.\n• Collaboration und Team Excellence: Interdisziplinäre Sicherheitsübungen fördern abteilungsübergreifende Zusammenarbeit und stärken die Teamdynamik.\n\n🔧 ADVISORIs integrierter Transformationsansatz:\n• Cultural Assessment und Change Roadmap: Systematische Analyse der aktuellen Organisationskultur und Entwicklung einer integrierten Roadmap für Sicherheits- und Kulturtransformation.\n• Leadership Engagement Programme: Spezielle Programme für Führungskräfte, die sie zu Sicherheits-Champions und Change Agents entwickeln.\n• Cross-functional Excellence Teams: Aufbau interdisziplinärer Teams, die Sicherheit mit anderen Excellence-Dimensionen wie Qualität, Effizienz und Innovation verknüpfen.\n• Continuous Learning Ecosystems: Etablierung selbstlernender Systeme, die kontinuierliche Verbesserung in Sicherheit und anderen Geschäftsbereichen fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche kritischen Erfolgsfaktoren und Risiken müssen bei der Implementierung von KRITIS-Schulungsprogrammen aus C-Level-Perspektive berücksichtigt werden?",
        answer: "Die erfolgreiche Implementierung von KRITIS-Schulungsprogrammen erfordert strategische Planung, systematisches Change Management und kontinuierliche Erfolgsmessung. Für die C-Suite ist es essentiell, sowohl die kritischen Erfolgsfaktoren zu verstehen als auch potenzielle Risiken proaktiv zu managen, um nachhaltige Verhaltensänderungen und messbare Geschäftsvorteile zu erzielen.\n\n✅ Kritische Erfolgsfaktoren für nachhaltigen Impact:\n• Leadership Commitment und Vorbildfunktion: Sichtbare, kontinuierliche Unterstützung durch die Geschäftsleitung ist der wichtigste Prädiktor für Schulungserfolg – Führungskräfte müssen als Security Champions vorangehen.\n• Kulturelle Integration und Change Management: Erfolgreiche Programme adressieren nicht nur Wissenslücken, sondern schaffen kulturelle Veränderungen durch gezielte Change-Management-Strategien und Anreizsysteme.\n• Messung und kontinuierliche Optimierung: Etablierung aussagekräftiger KPIs und regelmäßiger Erfolgsmessung, um Programme datengetrieben zu optimieren und ROI nachzuweisen.\n• Praxisrelevanz und Engagement: Schulungsinhalte müssen direkt mit täglichen Arbeitsabläufen verknüpft sein und interaktive, engagierende Formate nutzen, um nachhaltige Lerneffekte zu erzielen.\n\n⚠️ Strategische Risiken und Mitigation:\n• Schulungsmüdigkeit und Engagement-Verlust: Risiko durch repetitive, theoretische Programme – Mitigation durch innovative Formate, Gamification und kontinuierliche Aktualisierung der Inhalte.\n• Compliance-Theater ohne echte Wirkung: Gefahr oberflächlicher Programme ohne Verhaltensänderung – Mitigation durch Fokus auf praktische Anwendung und regelmäßige Wirksamkeitsmessung.\n• Ressourcenvergeudung durch unkoordinierte Ansätze: Risiko paralleler, inkonsistenter Schulungsinitiativen – Mitigation durch zentrale Koordination und integrierte Strategien.\n• Reaktivität statt strategischer Ausrichtung: Gefahr kurzfristiger, reaktiver Programme – Mitigation durch langfristige Roadmaps und strategische Integration in Geschäftsziele."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
