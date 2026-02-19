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
    console.log('Updating EBA Guidelines Implementation page with C-Level FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-guidelines-implementation' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-guidelines-implementation" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir als C-Level-Führungskräfte sicherstellen, dass die Implementierung von EBA-Richtlinien einen strategischen Mehrwert für unser Institut schafft und nicht nur Compliance-Kosten verursacht?",
        answer: "Die Implementierung von EBA-Richtlinien wird häufig primär als regulatorische Pflichtübung betrachtet, kann jedoch bei strategischer Herangehensweise signifikanten Mehrwert generieren und zum Wettbewerbsvorteil werden. Die entscheidende Weichenstellung erfolgt durch die C-Suite, die den Implementierungsprozess nicht als isoliertes Compliance-Projekt, sondern als strategische Transformation positionieren sollte.\n\n🔄 Strategische Integration in die Unternehmensarchitektur:\n• Alignment mit Geschäftsstrategie: Implementieren Sie EBA-Anforderungen synchron mit strategischen Geschäftsinitiativen, um Synergien zu nutzen und doppelte Transformationskosten zu vermeiden.\n• Prozessoptimierung: Nutzen Sie die Richtlinienimplementierung als Katalysator für die Modernisierung veralteter Prozesse, die Beseitigung von Ineffizienzen und die Einführung von Best Practices.\n• Datenarchitektur-Transformation: Integrieren Sie regulatorische Datenanforderungen in eine übergeordnete Datenstrategie, die gleichzeitig geschäftliche Insights liefert und Entscheidungsprozesse verbessert.\n• Technologie-Konsolidierung: Nutzen Sie Compliance-Initiativen zur Rationalisierung Ihrer IT-Landschaft und zur Beseitigung technischer Altlasten, statt Insellösungen zu schaffen.\n\n💼 Governance als Werttreiber:\n• Risikomanagement: Eine fortschrittliche Governance-Struktur verbessert nicht nur die Compliance, sondern reduziert auch operative Risiken und stärkt die Widerstandsfähigkeit des Instituts.\n• Entscheidungsqualität: Transparente Entscheidungsprozesse und klare Verantwortlichkeiten beschleunigen Innovationen und ermöglichen agilere Anpassungen an Marktveränderungen.\n• Organisatorische Effektivität: Die Klärung von Rollen und Verantwortlichkeiten im Rahmen der Richtlinienimplementierung beseitigt organisatorische Reibungsverluste und steigert die Effizienz.\n• Kulturwandel: Nutzen Sie den Implementierungsprozess, um eine Risiko- und Compliance-Kultur zu etablieren, die nicht auf Kontrolle, sondern auf Empowerment und Verantwortungsbewusstsein basiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche kritischen Erfolgsfaktoren müssen bei der Implementierung neuer EBA-Richtlinien beachtet werden, um regulatorische Risiken zu minimieren und gleichzeitig die Effizienz zu maximieren?",
        answer: "Die erfolgreiche Implementierung von EBA-Richtlinien erfordert einen strategischen Ansatz, der weit über die reine technische Compliance hinausgeht. Für die C-Suite ist es entscheidend, die kritischen Erfolgsfaktoren zu kennen, die sowohl Compliance-Risiken minimieren als auch den Ressourceneinsatz optimieren.\n\n🎯 Strategische Erfolgsfaktoren für die EBA-Implementierung:\n• Frühzeitige Einbindung in regulatorische Diskussionen: Finanzinstitute, die sich aktiv in Konsultationsprozesse der EBA einbringen, können Implementierungsrisiken reduzieren und Wettbewerbsvorteile durch Informationsvorsprung erzielen.\n• Integration in die Geschäftsstrategie: Die Ausrichtung regulatorischer Initiativen an übergeordneten Geschäftszielen verhindert isolierte Compliance-Projekte und schafft nachhaltigeren Mehrwert.\n• Angemessenes Change-Management: Die Unterschätzung der kulturellen und organisatorischen Implikationen neuer Regularien ist eine Hauptursache für gescheiterte Implementierungen.\n• Datenarchitektur als Fundament: Eine konsistente, qualitätsgesicherte Datenbasis ist für regulatorische Compliance unerlässlich und gleichzeitig Voraussetzung für datengestützte Geschäftsentscheidungen.\n\n🛡️ Governance und Projektstruktur:\n• C-Level Sponsorship: Die aktive Unterstützung und sichtbare Führung durch die Geschäftsleitung ist entscheidend für die Priorisierung und Ressourcenallokation im Implementierungsprozess.\n• Cross-funktionale Implementierungsteams: Die Zusammenarbeit von Compliance, Business, IT und Risikomanagement in integrierten Teams überwindet Silodenken und sichert praxistaugliche Lösungen.\n• Agile Implementierungsmethodik: Ein flexibler, iterativer Ansatz ermöglicht schnellere Anpassungen an regulatorische Klarstellungen und reduziert Implementierungsrisiken.\n• Unabhängige Qualitätssicherung: Die frühzeitige Einbindung von Qualitätssicherungs- und Auditfunktionen identifiziert potenzielle Compliance-Lücken, bevor sie zu regulatorischen Problemen werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie sollte die C-Suite den ROI einer EBA-Guidelines-Implementierung bewerten und welche langfristigen Vorteile können über die reine Compliance hinaus erzielt werden?",
        answer: "Die Bewertung des ROI einer EBA-Richtlinien-Implementierung stellt für viele Führungskräfte eine Herausforderung dar, da traditionelle Investitionsbewertungsmodelle oft nicht die vollen Auswirkungen regulatorischer Projekte erfassen. Ein erweiterter ROI-Rahmen, der sowohl quantitative als auch qualitative Dimensionen berücksichtigt, ermöglicht eine umfassendere Bewertung des Geschäftswerts.\n\n💹 Erweiterte ROI-Bewertung für regulatorische Implementierungen:\n• Vermiedene Kosten durch Compliance: Quantifizierung potenzieller Bußgelder, aufsichtsrechtlicher Maßnahmen und erhöhter Kapitalanforderungen, die durch proaktive Compliance vermieden werden.\n• Prozesseffizienzgewinne: Messung der Produktivitätssteigerungen durch optimierte, automatisierte Compliance-Prozesse im Vergleich zu manuellen, reaktiven Ansätzen.\n• Reduzierte Risikokosten: Bewertung der Risikominderung durch verbesserte Kontrollen, die zu niedrigeren operativen Verlusten und Kapitalkosten führen.\n• Datenwertschöpfung: Quantifizierung des Geschäftswerts, der durch die verbesserte Datenqualität, -integration und -analytik entsteht, die im Rahmen von Compliance-Projekten entwickelt werden.\n\n🌱 Langfristige strategische Vorteile:\n• Erhöhte strategische Agilität: Finanzinstitute mit robusten Compliance-Frameworks können schneller auf regulatorische Änderungen reagieren und neue Marktchancen früher nutzen.\n• Verbesserte Stakeholder-Beziehungen: Eine nachweisliche regulatorische Exzellenz stärkt das Vertrauen von Investoren, Kunden und Aufsichtsbehörden und kann zu günstigeren Finanzierungsbedingungen führen.\n• Beschleunigte digitale Transformation: Die durch regulatorische Anforderungen getriebene Modernisierung von Systemen und Prozessen schafft eine zukunftssichere technologische Basis für weitere Innovationen.\n• Wettbewerbsdifferenzierung: Die Fähigkeit, regulatorische Anforderungen effizienter zu erfüllen als Wettbewerber, kann zu signifikanten Kostenvorteilen und höherer Profitabilität führen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Governance-Strukturen sind für eine erfolgreiche Implementierung von EBA-Richtlinien erforderlich und wie sollten Verantwortlichkeiten in der Organisation verteilt werden?",
        answer: "Eine effektive Governance-Struktur ist das Fundament für eine erfolgreiche Implementierung von EBA-Richtlinien und entscheidet maßgeblich über Effizienz, Compliance-Qualität und Nachhaltigkeit der Umsetzung. Für die C-Suite ist es essentiell, nicht nur formale Governance-Strukturen zu etablieren, sondern auch eine Kultur der regulatorischen Exzellenz zu fördern.\n\n🏛️ Optimale Governance-Architektur für EBA-Implementierungen:\n• Board-Level Oversight: Der Aufsichtsrat/Verwaltungsrat sollte regulatorische Compliance als integralen Bestandteil der Unternehmensführung betrachten und regelmäßig die Implementierungsfortschritte und Risiken überwachen.\n• C-Suite Steuerungskomitee: Ein dediziertes Executive Committee mit Vertretern aller relevanten Geschäftsbereiche sollte strategische Entscheidungen treffen und Ressourcen priorisieren.\n• Programm Management Office (PMO): Eine zentrale Koordinationsstelle für alle Implementierungsaktivitäten gewährleistet Konsistenz, Qualität und Termintreue über verschiedene Workstreams hinweg.\n• Regulatory Subject Matter Experts: Ein Netzwerk von Fachexperten, die regulatorische Anforderungen interpretieren und in geschäftskontextspezifische Umsetzungsanforderungen übersetzen.\n\n🔄 Verteilung von Verantwortlichkeiten nach dem Three-Lines-Modell:\n• First Line (Business & Operations): Operative Verantwortung für die Implementierung regulatorischer Anforderungen in Geschäftsprozesse und Systeme, einschließlich Selbstkontrolle und Dokumentation.\n• Second Line (Risk & Compliance): Unabhängige Überwachung der Implementierung, Beratung der First Line, Entwicklung von Standards und Frameworks, Risikoberichterstattung an die Führungsebene.\n• Third Line (Internal Audit): Unabhängige Prüfung der Implementierungseffektivität, Identifikation systemischer Schwachstellen und Validierung der Compliance-Ergebnisse.\n• Technologie & Daten: Querschnittsfunktion zur Sicherstellung, dass technologische Lösungen und Datenarchitekturen die regulatorischen Anforderungen effizient und nachhaltig unterstützen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ EBA Guidelines Implementation C-Level FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
