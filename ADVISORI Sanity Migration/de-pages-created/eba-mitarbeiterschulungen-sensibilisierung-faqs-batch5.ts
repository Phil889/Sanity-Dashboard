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
    console.log('Updating EBA Mitarbeiterschulungen & Sensibilisierung page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-mitarbeiterschulungen-sensibilisierung' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-mitarbeiterschulungen-sensibilisierung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie können wir innovative Technologien wie Virtual Reality und Augmented Reality für EBA-Compliance-Schulungen nutzen?",
        answer: "Immersive Technologien wie Virtual Reality (VR) und Augmented Reality (AR) revolutionieren die Art, wie komplexe EBA-Compliance-Inhalte vermittelt werden können. Diese Technologien ermöglichen erfahrungsbasiertes Lernen in einer bisher unerreichten Tiefe und Authentizität, wodurch sie insbesondere für die Entwicklung situativer Entscheidungskompetenz in anspruchsvollen Compliance-Szenarien wertvolle Dienste leisten können.\n\n🔮 Transformative Potenziale immersiver Technologien:\n• Experiential Learning: Schaffung immersiver Erfahrungsräume, in denen komplexe regulatorische Szenarien erlebt und durchgespielt werden können, was die Gedächtnisleistung und den Praxistransfer signifikant verbessert.\n• Konsequenzfreies Scheitern: Ermöglichung eines sicheren Experimentierraums, in dem Fehler ohne reale Konsequenzen gemacht und aus ihnen gelernt werden kann – besonders wertvoll für hochriskante Compliance-Entscheidungen.\n• Emotionale Aktivierung: Erzeugung authentischer emotionaler Reaktionen in simulierten Compliance-Situationen, die tiefere neuronale Vernetzungen schaffen und dadurch nachhaltigere Lernerfolge ermöglichen.\n• Personalisierte Szenarien: Anpassung von Simulationen an branchenspezifische, abteilungsspezifische oder sogar personenspezifische Compliance-Herausforderungen für maximale Relevanz und Transferleistung.\n\n💻 Praxiserprobte Implementierungsstrategien:\n• VR Compliance Decision Labs: Entwicklung virtueller Umgebungen, in denen Mitarbeiter komplexe Compliance-Entscheidungen unter realistischen Bedingungen treffen und unmittelbares Feedback erhalten.\n• AR Performance Support: Integration von Augmented-Reality-Elementen in die reale Arbeitsumgebung, die kontextsensitive Compliance-Hinweise und Entscheidungshilfen in Echtzeit einblenden.\n• Multi-User Compliance Simulations: Implementierung kollaborativer VR-Szenarien, in denen Teams gemeinsam komplexe regulatorische Herausforderungen bewältigen und dabei Kommunikations- und Entscheidungsprozesse optimieren.\n• Digital Twins für Prozesssimulation: Erstellung digitaler Zwillinge von Compliance-Prozessen, die in VR/AR visualisiert, analysiert und optimiert werden können, um potenzielle Schwachstellen zu identifizieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Wie können wir die Wirksamkeit unserer EBA-Schulungen in einer zunehmend virtuellen und hybriden Arbeitsumgebung sicherstellen?",
        answer: "Die Transformation zu virtuellen und hybriden Arbeitsmodellen stellt Compliance-Schulungsprogramme vor fundamentale Herausforderungen, bietet jedoch gleichzeitig einzigartige Chancen für innovative Lernansätze. Eine erfolgreiche Adaptation erfordert mehr als die bloße Digitalisierung bestehender Formate – sie verlangt eine grundlegende Neukonzeption, die die Besonderheiten verteilter Teams und virtueller Zusammenarbeit systematisch berücksichtigt.\n\n🌐 Strategische Dimensionen für virtuelle Compliance-Excellence:\n• Asynchrone Kohärenz: Entwicklung von Schulungsarchitekturen, die sowohl zeitversetzte individuelle Lernpfade als auch synchrone kollaborative Elemente integrieren und dadurch zeitliche und räumliche Flexibilität mit sozialer Lernverankerung verbinden.\n• Digitale Psychologie: Berücksichtigung der spezifischen psychologischen Effekte virtueller Lernumgebungen, wie verkürzte Aufmerksamkeitsspannen, reduzierte soziale Präsenz und erhöhte kognitive Belastung durch kontinuierliche Bildschirmarbeit.\n• Technologische Demokratisierung: Sicherstellung der technischen Zugänglichkeit und Nutzbarkeit von Schulungslösungen für alle Mitarbeiter unabhängig von technischer Ausstattung, digitaler Kompetenz oder spezifischen Beeinträchtigungen.\n• Hybride Integration: Nahtlose Verbindung von Präsenz- und virtuellen Elementen in hybriden Schulungskonzepten, die die Stärken beider Welten kombinieren und inklusive Teilhabe für alle Arbeitsmodelle gewährleisten.\n\n🔄 Implementierungsstrategien für die virtuelle Compliance-Ära:\n• Micro-Format Revolution: Umstellung auf kurze, fokussierte Lerneinheiten (5-15 Minuten), die optimal für digitale Aufmerksamkeitsspannen konzipiert sind und flexibel in den virtuellen Arbeitsalltag integriert werden können.\n• Social Learning Hubs: Etablierung digitaler Räume für kontinuierlichen Peer-to-Peer-Austausch zu Compliance-Themen, die informelles Lernen und kollegiale Unterstützung auch in verteilten Teams fördern.\n• Virtual Coaching Networks: Aufbau virtueller Coaching-Strukturen mit regelmäßigen 1:1-Sitzungen, die individuelles Feedback und persönliche Lernbegleitung auch in Remote-Kontexten sicherstellen.\n• Hybrid Event Design: Entwicklung spezieller Formate für hybride Schulungsveranstaltungen, die gleichberechtigte Teilnahme und Interaktion für Remote- und Präsenzteilnehmer ermöglichen und Exklusionseffekte vermeiden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie können wir ein nachhaltiges System zur kontinuierlichen Aktualisierung und Verbesserung unserer EBA-Schulungsprogramme etablieren?",
        answer: "Ein nachhaltiges System zur kontinuierlichen Verbesserung von EBA-Schulungsprogrammen erfordert eine systematische Governance-Struktur, die agile Anpassungsfähigkeit mit strategischer Ausrichtung verbindet. Es geht nicht nur um reaktive Aktualisierung bei regulatorischen Änderungen, sondern um einen proaktiven, datengesteuerten Evolutionsprozess, der kontinuierlich Lernerfahrungen, Compliance-Effizienz und organisationale Wertschöpfung optimiert.\n\n🔄 Framework für nachhaltige Schulungsexzellenz:\n• Integriertes Governance-Modell: Etablierung einer klaren Verantwortungsstruktur mit definierten Rollen und Entscheidungsprozessen für die kontinuierliche Steuerung und Weiterentwicklung des Schulungsprogramms.\n• Mehrdimensionales Feedback-System: Implementation systematischer Feedbackschleifen auf verschiedenen Ebenen – von unmittelbaren Teilnehmerreaktionen über mittelfristige Anwendungserfolge bis zu langfristigen Compliance-Indikatoren.\n• Regulatory Intelligence Integration: Verknüpfung des Schulungssystems mit einem strukturierten Prozess zur frühzeitigen Identifikation und Analyse regulatorischer Änderungen und deren Implikationen für Schulungsinhalte.\n• Continuous Innovation Pipeline: Etablierung eines systematischen Prozesses zur Identifikation, Evaluation und Implementation innovativer Schulungsansätze und -technologien.\n\n📊 Operationalisierungsstrategien für kontinuierliche Evolution:\n• Learning Experience Council: Etablierung eines interdisziplinären Gremiums aus Compliance-Experten, L&D-Spezialisten und Business-Vertretern, das regelmäßig Schulungsergebnisse analysiert und Optimierungspotenziale identifiziert.\n• Data-Driven Decision Matrix: Entwicklung eines Kennzahlensystems, das Schulungseffektivität mehrdimensional erfasst und evidenzbasierte Entscheidungen über Ressourcenallokation und inhaltliche Anpassungen ermöglicht.\n• Agile Learning Sprints: Implementation eines agilen Entwicklungsmodells mit kurzen Iterationszyklen, regelmäßigen Reviews und kontinuierlichen inkrementellen Verbesserungen statt umfassender periodischer Überarbeitungen.\n• Ecosystem Partnership Strategy: Aufbau strategischer Partnerschaften mit Regulierungsbehörden, Bildungseinrichtungen und Technologieanbietern, die frühzeitigen Zugang zu neuen regulatorischen Entwicklungen und innovativen Lernlösungen sicherstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie lassen sich EBA-Compliance-Schulungen optimal mit anderen regulatorischen Schulungsprogrammen (wie DSGVO, MiFID II, etc.) integrieren?",
        answer: "Die strategische Integration verschiedener regulatorischer Schulungsprogramme bietet erhebliche Potenziale für Synergien, Effizienzgewinne und ein kohärentes Compliance-Verständnis. Statt isolierter Compliance-Silos ermöglicht ein integrierter Ansatz die Entwicklung eines ganzheitlichen regulatorischen Bewusstseins, das Zusammenhänge erschließt und die praktische Anwendung im komplexen regulatorischen Umfeld erleichtert.\n\n🔄 Strategische Dimensionen einer integrierten Schulungsarchitektur:\n• Gemeinsame Prinzipien herausarbeiten: Identifikation und Vermittlung übergreifender regulatorischer Grundprinzipien, die verschiedenen Regulierungsbereichen zugrunde liegen, wie Transparenz, Risikoorientierung oder Verbraucherschutz.\n• Schnittstellen visualisieren: Systematische Darstellung der Zusammenhänge und Wechselwirkungen zwischen verschiedenen Regulierungsbereichen, um ein vernetztes Verständnis statt isolierter Wissensinseln zu fördern.\n• Kompetenzorientierte Integration: Fokus auf gemeinsame Kernkompetenzen, die für die Einhaltung verschiedener Regulierungen erforderlich sind, wie analytische Fähigkeiten, ethisches Urteilsvermögen oder Dokumentationskompetenz.\n• Praxisrelevante Anwendungsszenarien: Entwicklung integrierter Fallbeispiele und Szenarien, die realistische Situationen abbilden, in denen verschiedene regulatorische Anforderungen gleichzeitig berücksichtigt werden müssen.\n\n🛠️ Praxiserprobte Implementierungsstrategien:\n• Modulares Baukastensystem: Entwicklung eines flexiblen Schulungssystems mit gemeinsamen Grundlagenmodulen und spezifischen Erweiterungsmodulen für verschiedene Regulierungsbereiche, die je nach Rolle und Funktion kombiniert werden können.\n• Integrierte Compliance Map: Erstellung einer visuellen Navigationshilfe, die den gesamten regulatorischen Rahmen abbildet und Mitarbeitern hilft, die Zusammenhänge zwischen verschiedenen Vorschriften zu verstehen und ihren individuellen Lernbedarf zu identifizieren.\n• Cross-Regulatory Learning Paths: Definition integrierter Lernpfade, die relevante Inhalte aus verschiedenen Regulierungsbereichen thematisch und prozessorientiert bündeln und aufeinander aufbauen.\n• Ganzheitliches Compliance Curriculum: Entwicklung eines umfassenden, strategisch ausgerichteten Compliance-Curriculums, das eine langfristige, koordinierte Entwicklung regulatorischer Kompetenzen über verschiedene Themengebiete hinweg ermöglicht."
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
