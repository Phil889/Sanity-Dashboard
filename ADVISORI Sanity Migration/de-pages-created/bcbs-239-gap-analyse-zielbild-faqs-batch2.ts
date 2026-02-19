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
    console.log('Updating BCBS-239 Gap-Analyse & Zielbild page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-gap-analyse-zielbild' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-gap-analyse-zielbild" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie unterscheidet sich die BCBS-239 Gap-Analyse und Zielbild-Entwicklung für verschiedene Institutsgrößen und Komplexitätsgrade?",
        answer: "Die BCBS-239 Gap-Analyse und Zielbild-Entwicklung muss zwingend an die spezifische Größe, Komplexität und das Geschäftsmodell Ihres Instituts angepasst werden. Eine Universallösung existiert nicht, da die regulatorischen Anforderungen proportional zur Systemrelevanz und Komplexität Ihrer Organisation interpretiert werden müssen. ADVISORI bietet einen maßgeschneiderten Ansatz, der diese Faktoren berücksichtigt.\n\n🏦 Skalierung nach Institutsgröße und Systemrelevanz:\n• Global systemrelevante Institute (G-SIBs): Komplexe, mehrschichtige Analyse mit besonderem Fokus auf grenzüberschreitende Datenflüsse, Aggregation über Jurisdiktionen hinweg und höchste Datenqualitätsstandards. Besondere Aufmerksamkeit gilt der Datenaggregation in Stresssituationen.\n• National bedeutende Institute: Tiefgreifende Analyse mit starkem Fokus auf nationale regulatorische Spezifika und die Integration unterschiedlicher Geschäftsbereiche. Besonderer Schwerpunkt auf der zeitnahen Aggregation von Risikodaten für kritische Entscheidungsprozesse.\n• Mittelgroße und regionale Institute: Pragmatischer Ansatz, der die wesentlichen BCBS-239 Anforderungen adressiert, aber die Implementierungskomplexität auf das notwendige Maß reduziert. Fokus auf kosteneffiziente Lösungen mit angemessener Abdeckung der regulatorischen Erwartungen.\n• Kleinere Institute: Proportionaler Ansatz, der die grundlegenden Prinzipien berücksichtigt, aber mit reduzierten Anforderungen an Automatisierung und Komplexität der Governance-Strukturen.\n\n🔄 Anpassung an unterschiedliche Geschäftsmodelle:\n• Universalbanken: Umfassende Analyse aller Risikotypen mit besonderem Augenmerk auf die Integration heterogener Datenquellen aus verschiedenen Geschäftsbereichen.\n• Spezialinstitute: Fokussierte Analyse der für das spezifische Geschäftsmodell relevanten Risikotypen und Datenquellen (z.B. besondere Betrachtung von Marktpreisrisiken bei Wertpapierinstituten).\n• International tätige Institute: Besondere Berücksichtigung unterschiedlicher regulatorischer Anforderungen in verschiedenen Jurisdiktionen und Herausforderungen bei der Datenaggregation über Ländergrenzen hinweg.\n• Digital-fokussierte Institute: Spezifische Betrachtung der Chancen und Herausforderungen moderner Technologieplattformen und datengetriebener Geschäftsmodelle.\n\n📈 Methodik-Anpassung nach Komplexitätsgrad:\n• Hohe Komplexität: Tiefgehende, mehrschichtige Analyse mit umfangreichen Stakeholder-Interviews, detaillierter Systemanalyse und umfassender Dokumentenprüfung.\n• Mittlere Komplexität: Strukturierte Analyse mit fokussierten Interviews und gezielter Systemanalyse, ergänzt durch Best-Practice-Vergleiche.\n• Geringe Komplexität: Streamlined Assessment mit Schwerpunkt auf den kritischen Datenprozessen und einer beschleunigten, aber gründlichen Analyse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie integriert ADVISORI neue Technologien und Datenmanagement-Trends in das BCBS-239 Zielbild, um eine zukunftssichere Lösung zu gewährleisten?",
        answer: "Bei der Entwicklung eines BCBS-239 Zielbilds geht es nicht nur um aktuelle Compliance, sondern entscheidend um die Zukunftsfähigkeit Ihrer Risikodaten-Architektur. ADVISORI integriert proaktiv moderne Technologien und zukunftsweisende Datenmanagement-Konzepte, um eine nachhaltige und skalierbare Lösung zu schaffen, die weit über die Mindestanforderungen hinausgeht.\n\n🌐 Integration innovativer Technologien:\n• Cloud-basierte Risikodaten-Plattformen: Wir konzipieren flexible Cloud-Architekturen, die Skalierbarkeit, verbesserte Datenverfügbarkeit und kosteneffiziente Speicherlösungen bieten, während regulatorische Anforderungen an Datensicherheit und Lokalisierung erfüllt werden.\n• API-getriebene Datenintegration: Implementierung moderner API-Schnittstellen für flexible, echtzeit-nahe Datenintegration anstelle starrer, batch-orientierter Legacy-Prozesse.\n• KI und Machine Learning: Integration von KI-gestützten Lösungen für automatisierte Datenqualitätsprüfungen, Anomaliedetektion und prädiktive Analyse potenzieller Datenprobleme.\n• Advanced Analytics: Konzeption einer Datenarchitektur, die komplexe Analysen und Stresstests ermöglicht und dabei regulatorische Flexibilität für dynamische Szenarien bietet.\n\n🔍 Berücksichtigung zukunftsweisender Datenmanagement-Ansätze:\n• Data Mesh-Architektur: Dezentraler, domänenorientierter Ansatz, der Dateneigentümerschaft in die Fachabteilungen verlagert und gleichzeitig zentrale Governance-Standards sicherstellt.\n• Data Fabric-Konzept: Integration einer übergreifenden Datenschicht, die konsistenten Zugriff und Governance über heterogene Systeme und Plattformen hinweg ermöglicht.\n• Semantische Datenmodellierung: Implementation von Business Glossaries, Metadatenmanagement und Datenlineage-Tracking für konsistente Interpretation von Risikodaten.\n• Self-Service-Capabilities: Befähigung von Risikomanagern und Analysten, selbstständig auf qualitätsgesicherte Daten zuzugreifen und ad-hoc Analysen durchzuführen.\n\n⚡ Balancierung von Innovation und Compliance:\n• Regulatorische Sandbox: Schaffung definierter Bereiche für die sichere Erprobung innovativer Ansätze ohne Gefährdung der Compliance-Anforderungen.\n• Modulare Architektur: Entwicklung eines Zielbilds mit klar definierten Komponenten, die unabhängig voneinander aktualisiert und modernisiert werden können.\n• Bimodale IT-Strategie: Integration eines zweispurigen Ansatzes, der stabile Kernsysteme mit agilen, innovativen Komponenten kombiniert.\n• Continuous Compliance Monitoring: Integration von Mechanismen zur fortlaufenden Überwachung der Compliance-Anforderungen auch bei technologischen Veränderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie adressiert die ADVISORI Gap-Analyse spezifisch die Governance-Aspekte von BCBS-239 und welche Best Practices empfehlen Sie für eine effektive Datengovernance?",
        answer: "Die Governance-Dimensionen sind ein zentraler und oft unterschätzter Aspekt der BCBS-239 Compliance. Unsere Gap-Analyse widmet diesem Bereich besondere Aufmerksamkeit, da eine robuste Datengovernance das Fundament für nachhaltige Compliance bildet und weit über technische Lösungen hinausgeht. ADVISORI kombiniert regulatorische Anforderungen mit praxiserprobten Best Practices.\n\n🔄 Umfassende Governance-Assessment Methodik:\n• Mehrdimensionale Analyse: Bewertung der Governance-Strukturen entlang der Dimensionen Organisationsstruktur, Rollen und Verantwortlichkeiten, Richtlinien und Standards, Prozesse und Kontrollen sowie Kultur und Bewusstsein.\n• Reifegradmodell: Nutzung eines fünfstufigen Reifegradmodells zur Bewertung jeder Governance-Komponente von \"Initial/Ad-hoc\" bis \"Optimiert/Proaktiv\".\n• Stakeholder-Mapping: Identifikation aller relevanten Akteure im Risikodaten-Ökosystem und Analyse ihrer aktuellen vs. erforderlichen Rollen.\n• Prozess-Durchleuchtung: Analyse der Entscheidungsprozesse, Eskalationswege und Kontrollmechanismen für das Risikodatenmanagement.\n\n📊 Kernbereiche der Governance-Assessment:\n• Dateneigentümerschaft: Bewertung der Klarheit und Effektivität der Dateneigentümerschaft über den gesamten Lebenszyklus von Risikodaten.\n• Datenqualitätsmanagement: Analyse der bestehenden Standards, Kontrollen und Prozesse zur Sicherstellung der Datenqualität.\n• Metadatenmanagement: Bewertung der Mechanismen zur Dokumentation und Verwaltung von Metadaten für Risikoinformationen.\n• Richtlinien und Standards: Prüfung der Vollständigkeit, Aktualität und Durchsetzung relevanter Richtlinien für Risikodaten.\n• Risikodatenkomitee-Struktur: Analyse der Effektivität der bestehenden Komitee-Strukturen für die Risikodaten-Governance.\n\n🌟 ADVISORI Best Practices für effektive Datengovernance:\n• Three Lines of Defense: Implementierung eines klaren 3-Linien-Modells mit spezifischen Verantwortlichkeiten für Risikodaten in jeder Verteidigungslinie.\n• Chief Data Officer (CDO) Funktion: Etablierung einer CDO-Rolle mit klarem Mandat und angemessener Positionierung in der Organisationsstruktur.\n• Cascading Ownership Model: Strukturiertes Modell der Dateneigentümerschaft von der strategischen Ebene (Senior Executive) über die taktische Ebene (Data Stewards) bis zur operativen Ebene (Data Custodians).\n• Datenqualitätsrahmenwerk: Implementierung eines umfassenden Frameworks mit klaren Metriken, Schwellenwerten und Eskalationswegen für Datenqualitätsprobleme.\n• Integriertes Metadatenmanagement: Zentrales Repository für technische und geschäftliche Metadaten mit automatisierter Datenlineage-Verfolgung.\n\n🛠️ Governance im Target Operating Model:\n• Dedizierte Governance-Gremien: Einrichtung eines übergreifenden Data Governance Boards und spezifischer Working Groups für Risikodaten.\n• Klare RACI-Matrizen: Detaillierte Verantwortlichkeitszuordnung für alle Schlüsselprozesse im Risikodatenmanagement.\n• Integrierte Controls: Kombination aus systembasierten und prozessorientierten Kontrollen für alle kritischen Risikodatenprozesse.\n• Kultur und Change Management: Entwicklung einer datengetriebenen Unternehmenskultur durch Schulungen, Kommunikation und Anreizsysteme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie gestaltet ADVISORI die Implementierungs-Roadmap nach der Gap-Analyse und welche Faktoren beeinflussen die Priorisierung der identifizierten Maßnahmen?",
        answer: "Die Entwicklung einer effektiven Implementierungs-Roadmap ist ein kritischer Erfolgsfaktor nach Abschluss der Gap-Analyse. Sie transformiert die analytischen Erkenntnisse in einen strukturierten, praxisorientierten Aktionsplan. ADVISORI gestaltet diese Roadmap nicht als generische Vorlage, sondern als maßgeschneiderte Transformationsstrategie, die organisatorische, technische und regulatorische Faktoren ausbalanciert.\n\n📝 Methodischer Ansatz zur Roadmap-Entwicklung:\n• Systematische Gap-Konsolidierung: Zusammenführung und Kategorisierung aller identifizierten Lücken nach Themenbereichen (Governance, Architektur, Prozesse, Datenqualität, Reporting).\n• Abhängigkeitsanalyse: Identifikation kritischer Pfade und Abhängigkeiten zwischen einzelnen Maßnahmen durch strukturierte Dependency-Mapping-Workshops.\n• Ressourcen-Mapping: Abgleich der erforderlichen Fähigkeiten und Kapazitäten mit den verfügbaren Ressourcen in Ihrer Organisation.\n• End-to-End Validierung: Überprüfung der Vollständigkeit der Roadmap durch Mapping gegen alle 14 BCBS-239 Prinzipien und identifizierten Gaps.\n• Stakeholder-Alignment: Iterative Abstimmung mit allen relevanten Stakeholdern zur Sicherstellung von Akzeptanz und realistischer Umsetzbarkeit.\n\n⚖️ Multi-faktorielle Priorisierungskriterien:\n• Regulatorische Kritikalität: Bewertung der Compliance-Relevanz und potenzieller aufsichtsrechtlicher Konsequenzen bei Nicht-Adressierung.\n• Business Impact: Analyse des Einflusses auf kritische Geschäftsprozesse, Risikoentscheidungen und strategische Initiativen.\n• Implementierungskomplexität: Bewertung des technischen und organisatorischen Schwierigkeitsgrads sowie der erforderlichen Ressourcen.\n• Abhängigkeiten: Berücksichtigung logischer und technischer Vorbedingungen zwischen Maßnahmen.\n• Quick Wins vs. strukturelle Verbesserungen: Ausgewogene Mischung aus schnell realisierbaren Erfolgen und fundamentalen, längerfristigen Veränderungen.\n\n📊 Strukturierung der Roadmap in Implementierungswellen:\n• Foundation Phase (Welle 1): Etablierung grundlegender Governance-Strukturen, Klärung von Verantwortlichkeiten und Definition von Standards und Metriken.\n• Enhancement Phase (Welle 2): Implementierung technischer Grundlagen, Optimierung von Datenprozessen und Aufbau von Datenqualitätskontrollen.\n• Optimization Phase (Welle 3): Weiterentwicklung zu automatisierten Prozessen, fortgeschrittener Analytik und integrierten Reporting-Lösungen.\n• Excellence Phase (Welle 4): Kontinuierliche Verbesserung, Nutzung fortschrittlicher Technologien und Optimierung für zukünftige regulatorische Anforderungen.\n\n🛠️ Praktische Roadmap-Komponenten:\n• Detaillierte Arbeitspakete: Klar definierte Maßnahmen mit Umfang, Zielen, Deliverables und Erfolgskriterien.\n• Realistische Zeitplanung: Berücksichtigung von Ressourcenverfügbarkeit, parallelen Initiativen und organisatorischen Veränderungsprozessen.\n• Governance-Mechanismen: Definition von Steuerungsstrukturen, Reporting-Prozessen und Eskalationswegen für die Implementierungsphase.\n• Risikomanagement: Proaktive Identifikation von Implementierungsrisiken und Entwicklung von Mitigationsstrategien.\n• Flexible Anpassungsmechanismen: Definierte Prozesse zur regelmäßigen Überprüfung und Anpassung der Roadmap basierend auf Fortschritt, neuen Erkenntnissen und veränderten Rahmenbedingungen."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
