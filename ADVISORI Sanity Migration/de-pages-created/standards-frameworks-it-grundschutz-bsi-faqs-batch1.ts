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
    console.log('Updating IT-Grundschutz BSI page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-it-grundschutz-bsi' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-it-grundschutz-bsi" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist BSI IT-Grundschutz für die C-Suite mehr als nur ein Compliance-Thema und wie positioniert ADVISORI dies als strategischen Wettbewerbsvorteil?",
        answer: "Für C-Level-Führungskräfte repräsentiert BSI IT-Grundschutz weit mehr als nur regulatorische Pflichterfüllung – es ist ein fundamentaler Baustein für nachhaltiges Geschäftswachstum und strategische Marktpositionierung. Als deutscher Goldstandard für Informationssicherheit schafft IT-Grundschutz nicht nur Vertrauen bei Stakeholdern, sondern eröffnet auch neue Geschäftsmöglichkeiten und stärkt die Wettbewerbsfähigkeit erheblich.\n\n🎯 Strategische Geschäftsvorteile für die Führungsebene:\n• Marktdifferenzierung: BSI-Zertifizierung als Qualitätsmerkmal, das Sie von Wettbewerbern abhebt und als vertrauensvoller Partner positioniert.\n• Neue Geschäftschancen: Zugang zu öffentlichen Aufträgen und regulierten Märkten, die IT-Grundschutz voraussetzen.\n• Investoren-Vertrauen: Nachweisbare Cyber-Resilienz steigert die Unternehmensbewertung und reduziert Investitionsrisiken.\n• Operative Exzellenz: Systematische Prozesse reduzieren ungeplante Ausfälle und verbessern die betriebliche Effizienz.\n\n🛡️ Der ADVISORI-Ansatz für geschäftsorientierte IT-Grundschutz Implementierung:\n• Business-Case-Entwicklung: Wir quantifizieren die Geschäftsvorteile und zeigen konkrete ROI-Szenarien für Ihre IT-Grundschutz Investition auf.\n• Strategische Roadmap: Entwicklung einer phasenweisen Umsetzungsstrategie, die mit Ihren Geschäftszielen und Wachstumsplänen synchronisiert ist.\n• Marktpositionierung: Unterstützung bei der Kommunikation Ihrer Sicherheitsexzellenz gegenüber Kunden, Partnern und Investoren.\n• Wettbewerbsanalyse: Bewertung der Sicherheitsstandards Ihrer Konkurrenz und Identifikation von Differenzierungsmöglichkeiten durch überlegene Cyber-Resilienz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie rechtfertigt sich die Investition in BSI IT-Grundschutz aus CFO-Sicht und welche messbaren Kosteneinsparungen und Revenue-Effekte kann ADVISORI demonstrieren?",
        answer: "Aus CFO-Perspektive ist BSI IT-Grundschutz eine strategische Investition mit quantifizierbaren finanziellen Vorteilen, die weit über die Implementierungskosten hinausgehen. ADVISORI hilft dabei, diese Investition nicht als Kostenfaktor, sondern als Wertschöpfungstreiber zu positionieren, der sowohl Risiken minimiert als auch neue Einnahmequellen erschließt.\n\n💰 Direkte Kosteneinsparungen und finanzielle Vorteile:\n• Cyber-Schadensprävention: Vermeidung von durchschnittlich 4,24 Millionen Euro Kosten pro Cybervorfall (IBM Cost of Data Breach Report).\n• Versicherungsprämien-Reduktion: Bis zu 30% niedrigere Cyber-Versicherungskosten durch nachweisbare Sicherheitsstandards.\n• Compliance-Effizienz: Reduzierung der Audit-Kosten um bis zu 40% durch strukturierte Dokumentation und Prozesse.\n• Operational Excellence: Minimierung ungeplanter Ausfallzeiten und damit verbundener Produktivitätsverluste.\n\n📈 Revenue-Generierung und Marktexpansion:\n• Öffentliche Aufträge: Zugang zu Ausschreibungen im Wert von Milliarden Euro, die IT-Grundschutz voraussetzen.\n• Premium-Pricing: Möglichkeit, für sicherheitszertifizierte Services 15-25% höhere Preise zu erzielen.\n• Internationale Expansion: BSI-Standard als Türöffner für deutsche und europäische Märkte.\n• Partnerschaftsqualifizierung: Erfüllung der Sicherheitsanforderungen für Tier-1-Partnerschaften mit Großkonzernen.\n\n🔧 ADVISORI's kostenoptimierte Implementierungsstrategie:\n• Phasenweise Umsetzung: Verteilung der Investition über mehrere Geschäftsjahre zur Budgetoptimierung.\n• ROI-Tracking: Kontinuierliche Messung und Berichterstattung der realisierten Kosteneinsparungen und Umsatzsteigerungen.\n• Ressourcen-Optimierung: Maximale Nutzung vorhandener Systeme und Prozesse zur Minimierung von Zusatzinvestitionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie stellt ADVISORI sicher, dass die BSI IT-Grundschutz Implementierung nicht nur technische Anforderungen erfüllt, sondern auch die operative Agilität und Innovationsfähigkeit des Unternehmens stärkt?",
        answer: "Moderne C-Level-Führung erfordert ein Gleichgewicht zwischen robuster Sicherheit und operativer Agilität. ADVISORI's Ansatz zur BSI IT-Grundschutz Implementierung ist darauf ausgelegt, Sicherheit als Enabler für Innovation zu positionieren, nicht als Hindernis. Wir schaffen einen Rahmen, der sowohl höchste Sicherheitsstandards als auch maximale Geschäftsflexibilität gewährleistet.\n\n🚀 Agilität durch strukturierte Sicherheit:\n• DevSecOps-Integration: Einbettung von IT-Grundschutz Prinzipien in agile Entwicklungsprozesse ohne Geschwindigkeitsverlust.\n• Automatisierung von Sicherheitsprozessen: Reduktion manueller Kontrollen durch intelligente Monitoring- und Compliance-Tools.\n• Risk-based Approach: Fokussierung auf kritische Assets ermöglicht schnellere Entscheidungen bei nicht-kritischen Systemen.\n• Skalierbare Architekturen: Design von Sicherheitsframeworks, die mit dem Unternehmenswachstum mitwachsen können.\n\n💡 Innovation durch Sicherheitsexzellenz:\n• Vertrauensbasis für neue Technologien: Robuste Sicherheitsgrundlage ermöglicht mutigere Experimente mit KI, Cloud und IoT.\n• Kundenvertrauen als Innovationstreiber: Sicherheitszertifizierung eröffnet Möglichkeiten für datenintensive und vertrauenssensitive Geschäftsmodelle.\n• Competitive Intelligence: Sicherheitsmonitoring liefert wertvolle Insights über Markttrends und Bedrohungslandschaften.\n• Digitale Ökosysteme: IT-Grundschutz als Grundlage für sichere API-Ökonomie und Plattform-Geschäftsmodelle.\n\n🎯 ADVISORI's Balanced-Security-Ansatz:\n• Business-Continuity-Design: Sicherheitsmaßnahmen werden so gestaltet, dass sie Geschäftsprozesse unterstützen, nicht behindern.\n• Change-Management-Excellence: Strukturierte Einführung neuer Sicherheitsprozesse mit minimalem Disruption der laufenden Operationen.\n• Innovation-Labs: Sichere Sandbox-Umgebungen für das Testen neuer Technologien und Geschäftsmodelle.\n• Stakeholder-Alignment: Enge Zusammenarbeit zwischen Sicherheits-, IT- und Business-Teams zur Optimierung von Sicherheit und Agilität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie positioniert ADVISORI BSI IT-Grundschutz als Fundament für die digitale Transformation und welche Rolle spielt es bei der Erschließung neuer digitaler Geschäftsmodelle?",
        answer: "Für zukunftsorientierte C-Level-Führungskräfte ist BSI IT-Grundschutz nicht nur ein Sicherheitsframework, sondern das strategische Fundament für erfolgreiche digitale Transformation. ADVISORI positioniert IT-Grundschutz als Enabler für innovative Geschäftsmodelle, der das Vertrauen schafft, das für digitale Innovationen unerlässlich ist.\n\n🔄 Digitale Transformation durch Sicherheitsexzellenz:\n• Cloud-First-Strategien: IT-Grundschutz als Rahmen für sichere Cloud-Migration und Hybrid-Architekturen.\n• Datenmonetarisierung: Sichere Datenverarbeitung als Grundlage für Data-as-a-Service und Analytics-Geschäftsmodelle.\n• IoT und Industry 4.0: Strukturierte Sicherheitsansätze für die Integration vernetzter Produktionsumgebungen.\n• Künstliche Intelligenz: Vertrauensvolle KI-Implementierung durch robuste Daten- und Modellsicherheit.\n\n🌐 Neue Geschäftsmodell-Möglichkeiten:\n• Platform Economy: IT-Grundschutz als Basis für sichere API-Ökosysteme und digitale Marktplätze.\n• As-a-Service-Modelle: Sicherheitszertifizierung als Differenzierungsmerkmal für SaaS-, PaaS- und IaaS-Angebote.\n• Blockchain und Web3: Strukturierte Sicherheitsframeworks für dezentrale Technologien und Kryptowährungen.\n• Digital Health und FinTech: Compliance-fähige Infrastrukturen für regulierte digitale Services.\n\n🎯 ADVISORI's Digital-First IT-Grundschutz Approach:\n• Agile Security Architecture: Design von Sicherheitsframeworks, die digitale Innovation unterstützen statt behindern.\n• Zero-Trust-Integration: Moderne Sicherheitskonzepte, die perfekt zu digitalen, dezentralen Arbeitsmodellen passen.\n• API-Security-Excellence: Spezialisierte Sicherheitskonzepte für API-basierte Geschäftsmodelle und Microservices-Architekturen.\n• Digital Identity Management: Robuste Identitäts- und Zugriffsmanagement-Systeme als Basis für Customer Experience und Employee Experience.\n\n💼 Strategische Marktpositionierung:\n• Digital Trust Leadership: Positionierung als vertrauensvoller Anbieter in einer zunehmend unsicheren digitalen Welt.\n• Regulatory Readiness: Vorbereitung auf kommende EU-Regulierungen (NIS2, Cyber Resilience Act) durch proaktive Compliance.\n• Innovation Partnerships: Sicherheitsexzellenz als Basis für Kooperationen mit Technology Leaders und Startups."
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
