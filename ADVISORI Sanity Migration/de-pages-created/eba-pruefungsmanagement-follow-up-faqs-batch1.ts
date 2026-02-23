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
    console.log('Updating EBA Prüfungsmanagement & Follow-up page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-pruefungsmanagement-follow-up' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-pruefungsmanagement-follow-up" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir als Vorstand unsere Prüfungsprozesse strategisch optimieren, um über die reine Compliance-Erfüllung hinaus einen Mehrwert für unser Institut zu schaffen?",
        answer: "Ein strategischer Ansatz zum Prüfungsmanagement transformiert den EBA-Prüfungsprozess von einer reaktiven Compliance-Übung zu einem wertschöpfenden Instrument der kontinuierlichen Verbesserung. Diese Perspektive erkennt Prüfungen nicht als unvermeidbare Belastung, sondern als strategische Chance zur Organisationsentwicklung und Wettbewerbsdifferenzierung.\n\n🔄 Paradigmenwechsel im Prüfungsmanagement:\n• Proaktive Grundhaltung: Entwicklung einer vorausschauenden Prüfungskultur, die potenzielle Schwachstellen bereits vor den Prüfern identifiziert und adressiert, statt reaktiv auf Feststellungen zu warten.\n• Wissensintegration: Systematische Erfassung und organisationsweite Verbreitung von Prüfungserkenntnissen, um Silodenken zu überwinden und kollektives Lernen zu fördern.\n• Strategische Ressourcenallokation: Priorisierung von Maßnahmen nicht nur nach aufsichtsrechtlicher Dringlichkeit, sondern auch nach strategischem Mehrwert und Synergiepotenzial mit anderen Unternehmenszielen.\n• Governance-Optimierung: Nutzung des Prüfungsprozesses zur Verfeinerung von Entscheidungs- und Kontrollstrukturen, die die organisatorische Resilienz insgesamt stärken.\n\n💼 ADVISORIs strategischer Ansatz zum Prüfungsmanagement:\n• Integrierte Prüfungslandkarte: Entwicklung einer ganzheitlichen Übersicht aller regulatorischen Anforderungen und ihrer Interdependenzen, um Synergien zu identifizieren und Doppelarbeit zu vermeiden.\n• Digitalisierte Prüfungsprozesse: Implementation moderner Kollaborations- und Workflow-Technologien, die manuelle Aufwände minimieren und transparente Echtzeit-Einblicke in den Prüfungsstatus ermöglichen.\n• Wissensmanagement-System: Aufbau einer strukturierten Wissensdatenbank, die Prüfungserfahrungen, Best Practices und Lösungsansätze unternehmensweit verfügbar macht.\n• Change Management: Begleitung des kulturellen Wandels von einer defensiven zu einer konstruktiven Prüfungshaltung auf allen Organisationsebenen.\n\nDurch diesen strategischen Ansatz werden Prüfungen von einem notwendigen Übel zu einem Katalysator für organisatorische Exzellenz, der Wettbewerbsvorteile schafft und die langfristige Resilienz Ihres Instituts stärkt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche kritischen Erfolgsfaktoren sind für ein effektives Management des EBA-Prüfungsprozesses entscheidend und wie unterstützt ADVISORI uns dabei, diese zu implementieren?",
        answer: "Der Erfolg eines EBA-Prüfungsprozesses wird durch mehrere kritische Faktoren determiniert, die weit über die reine Bereitstellung von Dokumentation hinausgehen. Ein durchdachtes Management dieser Schlüsselelemente kann den Unterschied zwischen einer belastenden Prüfungserfahrung und einem wertstiftenden Organisationsentwicklungsprozess ausmachen.\n\n🔑 Kritische Erfolgsfaktoren für EBA-Prüfungen:\n• Governance und klare Verantwortlichkeiten: Etablierung einer unmissverständlichen Prüfungsgovernance mit direkten Berichtslinien zur Geschäftsleitung und klar definierten Rollen und Verantwortlichkeiten für alle Beteiligten.\n• Ressourcenmanagement und Priorisierung: Strategische Allokation von Ressourcen und Fachexpertise, um kritische Prüfungsbereiche angemessen abzudecken, ohne das Tagesgeschäft zu beeinträchtigen.\n• Kommunikationsstrategie: Entwicklung einer durchdachten internen und externen Kommunikationsstrategie, die konsistente Botschaften sicherstellt und die Erwartungen der Prüfer proaktiv managt.\n• Informationsmanagement: Implementierung eines zentralen Informationsmanagements, das die Konsistenz und Qualität aller an die Prüfer übergebenen Dokumente und Auskünfte gewährleistet.\n\n🛡️ ADVISORIs Unterstützungsansatz:\n• Prüfungsbüro als Kompetenzzentrum: Wir etablieren ein zentrales Prüfungsbüro, das als Knotenpunkt für alle prüfungsrelevanten Aktivitäten fungiert und konsistente Qualitätsstandards sicherstellt.\n• Digitale Kollaborationsplattformen: Implementierung spezialisierter Tools zur effizienten Koordination von Dokumentenanforderungen, Interviewvorbereitungen und Maßnahmenverfolgung mit Echtzeit-Statusübersichten.\n• Methodische Interviewvorbereitung: Systematische Vorbereitung von Interviewteilnehmern durch Mock-Interviews, Q&A-Sessions und maßgeschneiderte Briefing-Materialien zu erwarteten Prüfungsschwerpunkten.\n• Eskalationsmanagement: Etablierung klarer Eskalationswege und Entscheidungsprozesse für kritische Situationen während der Prüfung, um schnelle und fundierte Reaktionen zu ermöglichen.\n\nDurch die systematische Adressierung dieser kritischen Erfolgsfaktoren transformiert ADVISORI den Prüfungsprozess von einem reaktiven Compliance-Projekt zu einem strategischen Instrument der kontinuierlichen Organisationsverbesserung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir sicherstellen, dass die aus EBA-Prüfungen resultierenden Maßnahmen nachhaltig implementiert werden und nicht nur oberflächliche Symptombehandlungen darstellen?",
        answer: "Die nachhaltige Implementation von Maßnahmen aus EBA-Prüfungen erfordert einen holistischen Ansatz, der über punktuelle Korrekturen hinausgeht und auf strukturelle Verbesserungen abzielt. Die Herausforderung besteht darin, von einer Symptombekämpfung zu einer tiefgreifenden Ursachenbehandlung überzugehen, die langfristige Wirksamkeit garantiert und zukünftige Feststellungen präventiv verhindert.\n\n📊 Schlüsselelemente eines nachhaltigen Maßnahmenmanagements:\n• Ursachenanalyse statt Symptombehandlung: Durchführung systematischer Root-Cause-Analysen, die über die unmittelbaren Feststellungen hinausgehen und grundlegende strukturelle, prozessuale oder kulturelle Ursachen identifizieren.\n• Systemischer Implementierungsansatz: Betrachtung von Maßnahmen nicht isoliert, sondern als Teil eines integrierten Gesamtsystems mit Berücksichtigung aller Wechselwirkungen und Abhängigkeiten.\n• Change Management und Kulturwandel: Integration der technischen Lösungen mit notwendigen Verhaltens- und Kulturänderungen durch gezielte Kommunikation, Training und Anreizsysteme.\n• Nachhaltigkeitsmessung: Etablierung objektiver KPIs und Messgrößen, die über die bloße Maßnahmenumsetzung hinaus die tatsächliche Wirksamkeit und Nachhaltigkeit der Veränderungen quantifizieren.\n\n🔄 ADVISORIs Framework für nachhaltige Maßnahmenumsetzung:\n• Integriertes Maßnahmenmanagement: Wir implementieren ein ganzheitliches Management-System, das jede Maßnahme von der initialen Konzeption bis zur finalen Wirksamkeitsprüfung durchgängig begleitet.\n• Priorisierung und Clusterung: Methodische Gruppierung und Priorisierung von Maßnahmen nach strategischer Bedeutung, Risikorelevanz und systemischen Abhängigkeiten, um Synergien zu maximieren.\n• Continuous Monitoring: Etablierung eines fortlaufenden Überwachungssystems, das frühzeitig Abweichungen oder Implementierungsschwächen identifiziert und Nachsteuerung ermöglicht.\n• Wissenstransfer und Standardisierung: Systematische Überführung erfolgreicher Maßnahmen in Standards und Best Practices, die unternehmensweit ausgerollt und in reguläre Prozesse integriert werden.\n\nDurch diesen umfassenden Ansatz stellen wir sicher, dass Prüfungsfeststellungen nicht nur formal abgearbeitet werden, sondern zu tatsächlichen Verbesserungen führen, die langfristig Bestand haben und die Resilienz Ihrer Organisation nachhaltig stärken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Technologien und digitalen Lösungen empfiehlt ADVISORI, um unser EBA-Prüfungsmanagement und Follow-up-Prozesse effizienter zu gestalten?",
        answer: "Die Digitalisierung des EBA-Prüfungsmanagements bietet erhebliche Potenziale zur Effizienzsteigerung, Risikominimierung und strategischen Wertschöpfung. Moderne Technologielösungen können manuelle Prozesse automatisieren, Transparenz erhöhen und die Qualität des gesamten Prüfungszyklus signifikant verbessern – von der Vorbereitung bis zur nachhaltigen Maßnahmenumsetzung.\n\n🔧 Schlüsseltechnologien für modernes Prüfungsmanagement:\n• Integrierte Prüfungsmanagement-Plattformen: Spezialisierte End-to-End-Lösungen, die den gesamten Prüfungszyklus abdecken – von der Planung über Dokumentenmanagement bis zur Maßnahmenverfolgung mit automatisierten Workflows und Echtzeit-Dashboard-Funktionalitäten.\n• Dokumentenmanagementsysteme mit KI-Funktionen: Intelligente Systeme, die prüfungsrelevante Dokumente automatisch kategorisieren, versionieren und mit kontextuellen Metadaten anreichern sowie mittels Natural Language Processing relevante Inhalte für Prüfungsanfragen identifizieren können.\n• Kollaborative Workflow-Tools: Cloud-basierte Lösungen, die standortübergreifende Zusammenarbeit in Echtzeit ermöglichen, Verantwortlichkeiten transparent zuweisen und den Status von Aufgaben automatisch nachverfolgen.\n• Predictive Analytics für Prüfungsvorbereitung: Datenanalytische Methoden, die auf Basis historischer Prüfungsdaten potenzielle Schwerpunkte und Risikobereiche künftiger Prüfungen antizipieren und präventive Maßnahmen ermöglichen.\n\n💻 ADVISORIs digitaler Lösungsansatz:\n• Technologieunabhängige Beratung: Wir evaluieren objektiv die für Ihre spezifische Situation optimale Technologielösung – ob Implementierung kommerzieller Spezialsoftware, Anpassung bestehender Systeme oder Entwicklung maßgeschneiderter Lösungen.\n• Integrationsarchitektur: Entwicklung einer durchdachten Integrationsarchitektur, die neue Prüfungsmanagement-Tools nahtlos mit Ihren bestehenden GRC-Systemen, Dokumentenmanagementsystemen und Unternehmensanwendungen verbindet.\n• Agile Implementierung: Stufenweise Einführung digitaler Lösungen mit schnellen Feedback-Zyklen und kontinuierlicher Anpassung, um unmittelbare Mehrwerte zu schaffen und gleichzeitig langfristige Transformationsziele zu verfolgen.\n• Change Management und Nutzerakzeptanz: Begleitung des digitalen Wandels durch maßgeschneiderte Schulungen, Support-Konzepte und Kommunikationsstrategien, die eine hohe Nutzerakzeptanz und effektive Anwendung der neuen Technologien sicherstellen.\n\nDurch den strategischen Einsatz dieser Technologien unterstützt ADVISORI Sie dabei, Ihr Prüfungsmanagement von einem ressourcenintensiven, manuellen Prozess zu einem effizienten, datengetriebenen strategischen Asset zu transformieren, das sowohl regulatorische Anforderungen erfüllt als auch organisatorischen Mehrwert generiert."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
