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
    console.log('Updating Standards Frameworks Struktur Baustein Analyse page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-struktur-baustein-analyse' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-struktur-baustein-analyse" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie maximiert ADVISORI die Effektivität der Strukturanalyse durch optimale Stakeholder-Einbindung und Change Management?",
        answer: "Der Erfolg einer IT-Grundschutz Strukturanalyse hängt maßgeblich von der Akzeptanz und aktiven Mitarbeit aller relevanten Stakeholder ab. ADVISORI hat bewährte Change Management-Strategien entwickelt, die technische Exzellenz mit organisatorischer Akzeptanz verbinden und so nachhaltigen Umsetzungserfolg sicherstellen.\n\n👥 Kritische Stakeholder-Dimensionen für die C-Suite:\n• Executive Sponsorship: Sicherstellung sichtbarer und kontinuierlicher Unterstützung durch die Geschäftsleitung für alle Projektphasen.\n• Cross-Functional Alignment: Koordination zwischen IT, Compliance, Risikomanagement, Datenschutz und Fachbereichen zur Vermeidung von Silodenken.\n• User Community Engagement: Frühzeitige Einbindung der Endnutzer zur Sicherstellung praxisnaher und akzeptierfähiger Lösungen.\n• External Stakeholder Management: Berücksichtigung von Kunden, Partnern, Auditoren und Regulatoren in der Analysestrategie.\n\n🎯 ADVISORI's Change Management Excellence:\n• Structured Communication Framework: Entwicklung zielgruppenspezifischer Kommunikationsstrategien, die komplexe technische Inhalte in verständliche Geschäftsterminologie übersetzen.\n• Phased Involvement Strategy: Stufenweise Einbindung verschiedener Stakeholder-Gruppen entsprechend ihrer Relevanz und Expertise für spezifische Analysephasen.\n• Resistance Management: Proaktive Identifikation und Behandlung von Widerständen durch transparente Nutzen-Kommunikation und Befähigungs-Programme.\n• Success Story Development: Aufbau von Quick Wins und Erfolgsgeschichten zur Verstärkung des Projektmomentums und der Stakeholder-Motivation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche spezifischen Vorteile bietet ADVISORI's Strukturanalyse für Start-ups und Scale-ups beim Aufbau einer zukunftsfähigen Sicherheitsarchitektur?",
        answer: "Start-ups und Scale-ups stehen vor der besonderen Herausforderung, mit begrenzten Ressourcen eine skalierbare und professionelle IT-Sicherheitsarchitektur aufzubauen. ADVISORI entwickelt pragmatische, kosteneffiziente Ansätze, die schnelles Wachstum ermöglichen ohne Kompromisse bei Sicherheit und Compliance einzugehen.\n\n🚀 Besondere Herausforderungen für wachsende Unternehmen:\n• Ressourcen-Constraints: Begrenzte personelle und finanzielle Mittel erfordern hocheffiziente und priorisierte Sicherheitsmaßnahmen.\n• Rapid Scaling: Schnelles Wachstum und häufige Änderungen der IT-Landschaft erschweren traditionelle Sicherheitsplanungsansätze.\n• Compliance-Readiness: Vorbereitung auf zukünftige regulatorische Anforderungen ohne aktuelle Überregulierung.\n• Investor Due Diligence: Demonstration professioneller IT-Sicherheitsstandards für Investoren und potenzielle Acquirer.\n\n💡 ADVISORI's Start-up optimierte Analysemethodik:\n• Minimum Viable Security (MVS): Entwicklung eines effizienten Basis-Sicherheitsframeworks, das essenzielle Schutzmaßnahmen mit minimalen Ressourcen umsetzt.\n• Growth-Oriented Architecture: Design skalierbarer Sicherheitsstrukturen, die organisches Wachstum ohne kostspieliges Re-Engineering unterstützen.\n• Agile Security Implementation: Integration von Sicherheitsüberlegungen in agile Entwicklungs- und Geschäftsprozesse ohne Verlangsamung der Innovation.\n• Investor-Ready Documentation: Erstellung professioneller Sicherheitsdokumentation, die Vertrauen bei Investoren und Partnern schafft und Due Diligence-Prozesse beschleunigt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie unterstützt ADVISORI bei der Optimierung der Strukturanalyse für Branchen mit besonderen Compliance-Anforderungen wie Gesundheitswesen oder Finanzdienstleistungen?",
        answer: "Hochregulierte Branchen wie Gesundheitswesen, Finanzdienstleistungen oder kritische Infrastrukturen haben spezifische Compliance-Anforderungen, die über Standard-IT-Grundschutz hinausgehen. ADVISORI kombiniert BSI-Expertise mit branchenspezifischem Know-how, um maßgeschneiderte Strukturanalysen zu entwickeln, die alle relevanten regulatorischen und operativen Anforderungen abdecken.\n\n🏥💰 Branchenspezifische Compliance-Komplexität:\n• Gesundheitswesen: Integration von IT-Grundschutz mit Medizinproduktegesetz (MPG), EU-MDR, GDPR für Gesundheitsdaten und Krankenhaus-IT-Sicherheitsverordnung.\n• Finanzdienstleistungen: Harmonisierung mit BaFin-Anforderungen, DORA, PCI-DSS, Basel III/IV und Anti-Geldwäsche-Bestimmungen.\n• Energieversorgung: Berücksichtigung des IT-Sicherheitsgesetzes, KRITIS-Verordnung und branchenspezifischer Schutzanforderungen für kritische Infrastrukturen.\n• Automotive: Integration von UN-R155 Cybersecurity-Anforderungen und ISO/SAE 21434 für Fahrzeug-Cybersicherheit.\n\n🎯 ADVISORI's Branchenspezifische Expertise:\n• Regulatory Cross-Mapping: Systematische Zuordnung branchenspezifischer Anforderungen zu IT-Grundschutz Bausteinen unter Vermeidung von Redundanzen.\n• Industry Best Practice Integration: Einbindung etablierter Branchenstandards und -verfahren in die Strukturanalyse-Methodik.\n• Sector-Specific Risk Assessment: Berücksichtigung branchentypischer Bedrohungsszenarien und Schwachstellen in der Baustein-Bewertung.\n• Compliance Efficiency Optimization: Entwicklung von Synergien zwischen verschiedenen Compliance-Frameworks zur Minimierung des Gesamtaufwands."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie gewährleistet ADVISORI die Nachhaltigkeit und kontinuierliche Aktualität der Strukturanalyse-Ergebnisse in sich schnell verändernden IT-Umgebungen?",
        answer: "Moderne IT-Umgebungen sind von kontinuierlichem Wandel geprägt - neue Technologien, veränderte Bedrohungslagen und evolvierende Compliance-Anforderungen erfordern adaptive Ansätze. ADVISORI entwickelt selbsterhaltende Analysesysteme, die automatisch auf Veränderungen reagieren und kontinuierlich aktualisierte Strukturbewertungen liefern.\n\n🔄 Herausforderungen dynamischer IT-Landschaften:\n• Technologie-Evolution: Rasante Entwicklung neuer Technologien (Cloud, Edge, IoT, KI) erfordert kontinuierliche Anpassung der Baustein-Zuordnungen.\n• Threat Landscape Changes: Sich entwickelnde Cyber-Bedrohungen und Angriffsmethoden machen regelmäßige Risikoneubewertungen erforderlich.\n• Regulatory Updates: Häufige Änderungen und Ergänzungen von Compliance-Standards erfordern agile Anpassungsfähigkeit.\n• Organizational Evolution: Unternehmenswachstum, Reorganisationen und strategische Änderungen beeinflussen Sicherheitsanforderungen.\n\n⚡ ADVISORI's Adaptive Sustainability Framework:\n• Continuous Monitoring Infrastructure: Implementierung automatisierter Überwachungssysteme, die Änderungen in der IT-Infrastruktur erfassen und deren Auswirkungen auf die Strukturanalyse bewerten.\n• Living Documentation Systems: Entwicklung selbstaktualisierender Dokumentationssysteme, die Änderungen automatisch reflektieren und Stakeholder über relevante Updates informieren.\n• Predictive Change Management: Einsatz von Trend-Analyse und Forecasting zur proaktiven Vorbereitung auf zukünftige Änderungen und deren Auswirkungen.\n• Community-Driven Intelligence: Aufbau von Wissensaustausch-Netzwerken mit anderen Organisationen zur gemeinsamen Bewältigung neuer Herausforderungen und Sharing von Best Practices."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
