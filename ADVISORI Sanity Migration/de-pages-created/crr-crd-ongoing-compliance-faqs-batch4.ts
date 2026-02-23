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
    console.log('Updating CRR/CRD Ongoing Compliance page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-ongoing-compliance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie kann die digitale Transformation genutzt werden, um die CRR/CRD-Compliance effizienter und effektiver zu gestalten?",
        answer: "Die digitale Transformation bietet Finanzinstituten enorme Chancen, ihre CRR/CRD-Compliance grundlegend zu modernisieren und von einem reaktiven, ressourcenintensiven Prozess zu einem proaktiven, strategischen Wertbeitrag zu entwickeln. ADVISORI unterstützt Finanzinstitute dabei, digitale Technologien gezielt für eine nachhaltige Verbesserung ihrer Compliance-Prozesse einzusetzen und regulatorische Anforderungen als Katalysator für die digitale Transformation zu nutzen.\n\n🔄 Digitale Hebel für eine transformierte CRR/CRD-Compliance:\n• Prozessautomatisierung (RPA): Automatisierung repetitiver, regelbasierter Compliance-Aktivitäten wie Datenextraktion, Validierungschecks und Reportgenerierung, um manuelle Fehler zu reduzieren und Ressourcen für wertschöpfende Tätigkeiten freizusetzen.\n• Advanced Analytics: Einsatz von Predictive Analytics und Machine Learning zur frühzeitigen Identifikation von Compliance-Risiken, Erkennung von Anomalien in regulatorischen Kennzahlen und Optimierung von Kapitalallokationen.\n• Regulatory Technology (RegTech): Implementierung spezialisierter RegTech-Lösungen für Regulatory Change Management, automatisierte Compliance-Überwachung und regelbasierte Entscheidungsfindung.\n• API-basierte Architekturen: Entwicklung flexibler, modularer Systeme, die über APIs kommunizieren und eine schnelle Anpassung an regulatorische Änderungen ermöglichen, ohne monolithische Legacy-Systeme vollständig ersetzen zu müssen.\n\n🚀 ADVISORI's Ansatz für eine digitale Compliance-Transformation:\n• Digital Maturity Assessment: Bewertung des digitalen Reifegrads der Compliance-Prozesse und Identifikation von Optimierungspotentialen durch neue Technologien.\n• Use Case Priorisierung: Strukturierte Bewertung und Priorisierung digitaler Use Cases basierend auf Business Value, Implementierungsaufwand und Compliance-Risiken.\n• Proof of Concept (PoC): Agile Entwicklung und Pilotierung ausgewählter digitaler Lösungen, um deren Wertbeitrag schnell zu validieren und Implementierungsrisiken zu minimieren.\n• Skalierungsstrategie: Entwicklung einer Roadmap zur unternehmensweiten Skalierung erfolgreicher digitaler Compliance-Lösungen, einschließlich notwendiger Governance-Anpassungen und Kulturwandel-Maßnahmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können sich Finanzinstitute optimal auf regulatorische Prüfungen und Audits im Bereich CRR/CRD vorbereiten?",
        answer: "Regulatorische Prüfungen und Audits sind kritische Momente, in denen die Effektivität der CRR/CRD-Compliance auf den Prüfstand gestellt wird. Eine strukturierte und proaktive Vorbereitung ist entscheidend, um nicht nur erfolgreiche Prüfungsergebnisse zu erzielen, sondern auch wertvolle Erkenntnisse für die kontinuierliche Verbesserung der Compliance-Prozesse zu gewinnen. ADVISORI unterstützt Finanzinstitute mit einem ganzheitlichen Ansatz zur optimalen Audit-Vorbereitung und -Durchführung.\n\n🔍 Schlüsselelemente einer erfolgreichen Audit-Vorbereitung:\n• Continuous Readiness: Etablierung einer kontinuierlichen Prüfungsbereitschaft durch regelmäßige interne Reviews, Selbstassessments und Kontrollen, anstatt reaktiver Ad-hoc-Maßnahmen vor anstehenden Prüfungen.\n• Dokumentationsmanagement: Entwicklung einer strukturierten Dokumentationsstrategie, die Vollständigkeit, Aktualität und schnelle Verfügbarkeit aller prüfungsrelevanten Unterlagen sicherstellt.\n• Stakeholder-Vorbereitung: Gezielte Vorbereitung aller involvierten Mitarbeiter durch Mock-Interviews, Q&A-Sessions und klare Kommunikation von Rollen und Verantwortlichkeiten während der Prüfung.\n• Issue Management: Proaktive Identifikation und Adressierung potenzieller Schwachstellen und Prüfungsfeststellungen, einschließlich dokumentierter Maßnahmenpläne und Umsetzungsfortschritte.\n\n🏆 ADVISORI's Audit Excellence Framework:\n• Pre-Audit Assessment: Durchführung eines umfassenden Pre-Audits zur Identifikation von Compliance-Lücken und Schwachstellen, basierend auf aktuellen regulatorischen Fokusthemen und früheren Prüfungsergebnissen.\n• Audit Command Center: Etablierung einer zentralen Koordinationsstelle für die Prüfung, die als Single Point of Contact fungiert, Anfragen steuert und konsistente Antworten sicherstellt.\n• Evidence Repository: Aufbau eines strukturierten, auditfähigen Nachweisarchivs, das alle relevanten Dokumente, Prozessbeschreibungen, Kontrollergebnisse und Governance-Entscheidungen systematisch erfasst.\n• Post-Audit Learning: Systematische Aufarbeitung von Prüfungsergebnissen und Entwicklung nachhaltiger Verbesserungsmaßnahmen, die über die reine Behebung von Feststellungen hinausgehen und zu strukturellen Verbesserungen führen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Kompetenzen und Fähigkeiten benötigen Mitarbeiter, um eine nachhaltige CRR/CRD-Compliance zu gewährleisten?",
        answer: "Der Erfolg einer nachhaltigen CRR/CRD-Compliance hängt maßgeblich von den Kompetenzen und Fähigkeiten der involvierten Mitarbeiter ab. Die zunehmende Komplexität regulatorischer Anforderungen und die Integration neuer Technologien erfordern ein kontinuierlich weiterentwickeltes Skillset, das fachliche, methodische und persönliche Kompetenzen umfasst. ADVISORI unterstützt Finanzinstitute dabei, die notwendigen Compliance-Kompetenzen zu identifizieren, zu entwickeln und strategisch einzusetzen.\n\n🧠 Kritische Kompetenzfelder für eine zukunftsfähige CRR/CRD-Compliance:\n• Regulatorisches Fachwissen: Tiefgreifendes Verständnis der CRR/CRD-Regularien und ihrer praktischen Implikationen, kombiniert mit der Fähigkeit, regulatorische Änderungen zu interpretieren und in konkrete Handlungsanforderungen zu übersetzen.\n• Daten- und Analysekompetenzen: Fähigkeit, große Datenmengen zu analysieren, Muster zu erkennen und datenbasierte Entscheidungen zu treffen, unterstützt durch Kenntnisse in Data Mining, Statistik und modernen Analysetools.\n• Technologieverständnis: Grundlegendes Verständnis von IT-Architekturen, Datenmodellen und digitalen Technologien wie KI, RPA und Cloud Computing, um die Schnittstelle zwischen Compliance und Technologie effektiv zu gestalten.\n• Cross-funktionale Zusammenarbeit: Vermögen, bereichsübergreifend zu arbeiten, komplexe Sachverhalte verständlich zu kommunizieren und unterschiedliche Perspektiven zu integrieren.\n\n🌱 ADVISORI's Ansatz zur Kompetenzentwicklung:\n• Kompetenzmodellierung: Entwicklung eines maßgeschneiderten Kompetenzmodells für CRR/CRD-relevante Rollen, das aktuelle und zukünftige Anforderungen berücksichtigt und als Basis für gezielte Entwicklungsmaßnahmen dient.\n• Blended Learning: Konzeption und Implementierung eines multidimensionalen Lernansatzes, der formale Schulungen, On-the-Job-Training, Coaching und digitale Lernformate kombiniert.\n• Knowledge Management: Etablierung systematischer Prozesse zur Erfassung, Teilung und Weiterentwicklung von Compliance-Wissen, um organisationales Lernen zu fördern und Abhängigkeiten von Schlüsselpersonen zu reduzieren.\n• Talent Strategy: Entwicklung einer strategischen Herangehensweise zur Gewinnung, Entwicklung und Bindung von Compliance-Talenten, die sowohl interne Karrierepfade als auch externe Rekrutierungsstrategien umfasst."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können international tätige Finanzinstitute eine konsistente CRR/CRD-Compliance über verschiedene Jurisdiktionen hinweg sicherstellen?",
        answer: "Für international tätige Finanzinstitute stellt die konsistente Umsetzung der CRR/CRD-Anforderungen über verschiedene Jurisdiktionen hinweg eine besondere Herausforderung dar. Unterschiedliche nationale Interpretationen, abweichende Umsetzungszeitpläne und lokale Zusatzanforderungen erzeugen ein komplexes regulatorisches Umfeld, das einen strategischen Ansatz erfordert. ADVISORI unterstützt globale Finanzinstitute dabei, eine harmonisierte, aber lokal angepasste Compliance-Strategie zu entwickeln und umzusetzen.\n\n🌍 Schlüsselherausforderungen grenzüberschreitender CRR/CRD-Compliance:\n• Regulatorische Fragmentierung: Nationale Abweichungen in der Umsetzung und Interpretation der CRR/CRD-Richtlinien, die zu unterschiedlichen Compliance-Anforderungen führen.\n• Governance-Komplexität: Notwendigkeit einer Balance zwischen zentraler Steuerung und lokaler Verantwortung in der Compliance-Governance.\n• Datenkonsistenz: Sicherstellung konsistenter Datenstandards und -definitionen über verschiedene Rechtssysteme, IT-Systeme und Geschäftseinheiten hinweg.\n• Kulturelle Unterschiede: Berücksichtigung unterschiedlicher Geschäftskulturen und Compliance-Verständnisse in verschiedenen Ländern und Regionen.\n\n🔄 ADVISORI's globaler Compliance-Integrationsansatz:\n• Regulatory Mapping: Systematische Analyse und Gegenüberstellung der CRR/CRD-Umsetzung in relevanten Jurisdiktionen, um Gemeinsamkeiten, Unterschiede und potenzielle Konflikte zu identifizieren.\n• Federative Governance: Entwicklung eines ausbalancierten Governance-Modells, das zentrale Standards und Kontrollen mit notwendiger lokaler Flexibilität verbindet.\n• Global Policy Framework: Etablierung eines hierarchischen Regelwerks mit gruppenweiten Mindeststandards und lokalisierten Umsetzungsrichtlinien, die nationale Besonderheiten berücksichtigen.\n• Integrierte Compliance-Technologie: Implementierung einer flexiblen, skalierbaren Technologieplattform, die zentrale Steuerung ermöglicht, aber lokale Anpassungen unterstützt."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
