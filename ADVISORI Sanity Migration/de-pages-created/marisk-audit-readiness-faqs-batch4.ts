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
    console.log('Updating MaRisk Audit Readiness page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-audit-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-audit-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Institute die Kosten und den Ressourceneinsatz für MaRisk-Prüfungen optimieren, ohne die Prüfungsqualität zu beeinträchtigen?",
        answer: "Die Optimierung des Ressourceneinsatzes für MaRisk-Prüfungen bei gleichzeitiger Aufrechterhaltung hoher Qualitätsstandards ist eine zentrale Herausforderung für Finanzinstitute. Eine durchdachte Effizienzstrategie ermöglicht signifikante Kosteneinsparungen, ohne die regulatorische Compliance zu gefährden oder Prüfungsrisiken zu erhöhen.\n\n📊 Strategische Optimierungsansätze:\n• Risikoorientierte Ressourcenallokation: Konsequente Priorisierung des Ressourceneinsatzes entlang der tatsächlichen regulatorischen Risiken und aufsichtlichen Schwerpunkte, anstatt alle Prüfungsbereiche mit gleicher Intensität zu behandeln.\n• Integrierte Prüfungsplanung: Koordination verschiedener regulatorischer Prüfungen (MaRisk, BAIT, ZAIT, etc.) mit überlappenden Themenbereichen, um Doppelarbeit zu vermeiden und Synergien zu nutzen.\n• Kontinuierliches statt ereignisgetriebenes Compliance-Management: Etablierung eines laufenden MaRisk-Compliance-Programms anstelle punktueller Prüfungsvorbereitungen, um die Baseline-Compliance konstant hochzuhalten und Vorbereitungsspitzen zu vermeiden.\n• Digitalisierung und Automatisierung: Gezielte Investition in Technologien, die wiederkehrende, manuelle Prüfungsvorbereitungsaktivitäten automatisieren und den manuellen Aufwand auf wertschöpfende Tätigkeiten konzentrieren.\n\n🛠️ Praktische Effizienzmaßnahmen:\n• Standardisierte Dokumentenvorlagen und Nachweisformate: Entwicklung und konsequente Nutzung einheitlicher Vorlagen für Strategien, Konzepte und Nachweise, die den aufsichtlichen Anforderungen entsprechen und bei Prüfungen wiederverwendet werden können.\n• Zentrales Evidenzmanagement: Implementierung eines Systems zur kontinuierlichen Sammlung und Aufbereitung von Compliance-Nachweisen im Tagesgeschäft, statt aufwändiger Ad-hoc-Erhebungen bei Prüfungsankündigungen.\n• Skill-basierte Teamzusammensetzung: Einsatz gemischter Teams aus erfahrenen Prüfungsexperten und Junior-Mitarbeitern, wobei erstere sich auf komplexe Risikobereiche konzentrieren und letztere standardisierte Vorbereitungsaktivitäten übernehmen.\n• Self-Service-Informationsbereitstellung: Aufbau intuitiver Portale und Wissensdatenbanken, die Prüfern den direkten Zugriff auf Standardinformationen ermöglichen, ohne individuelle Anfragen und manuelle Zusammenstellungen zu erfordern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielt die Unternehmenskultur bei der MaRisk-Prüfungsbereitschaft und wie kann sie positiv beeinflusst werden?",
        answer: "Die Unternehmenskultur ist ein fundamentaler, oft unterschätzter Einflussfaktor für die MaRisk-Prüfungsbereitschaft. Eine unterstützende Compliance-Kultur kann die Effektivität technischer und prozessualer Prüfungsvorbereitungen erheblich verstärken, während eine dysfunktionale Kultur selbst die ausgefeiltesten formalen Vorkehrungen untergraben kann. Die gezielte kulturelle Entwicklung stellt daher einen strategischen Hebel zur Verbesserung der Prüfungsperformance dar.\n\n🌱 Kulturelle Schlüsselfaktoren für erfolgreiche Prüfungen:\n• Offene Kommunikation und Transparenz: Förderung einer Kultur, in der Schwachstellen und potenzielle Compliance-Risiken offen angesprochen werden können, ohne Angst vor negativen Konsequenzen oder Schuldzuweisungen.\n• Proaktive Ownership-Mentalität: Entwicklung eines Selbstverständnisses, bei dem Compliance-Verantwortung als integraler Bestandteil jeder Rolle betrachtet wird, nicht als separater Aufgabenbereich spezialisierter Funktionen.\n• Kontinuierliches Lernen und Verbesserung: Etablierung einer Haltung, die Prüfungsfeststellungen nicht defensiv als Kritik, sondern konstruktiv als Chance zur systematischen Weiterentwicklung begreift.\n• Wertschätzung für Compliance-Beiträge: Anerkennung und Würdigung von Mitarbeitern, die aktiv zur Compliance-Verbesserung beitragen, um die Bedeutung des Themas im Unternehmensalltag zu verankern.\n\n🔄 Strategien zur positiven kulturellen Einflussnahme:\n• Tone from the Top: Konsequente Vorbildfunktion der Führungsebene durch sichtbares Commitment zu Compliance-Themen, persönliches Engagement in Prüfungsvorbereitungen und klare Priorisierung regulatorischer Anforderungen.\n• Integration in Anreizsysteme: Verankerung von Compliance-Aspekten in Leistungsbeurteilungen und Vergütungsstrukturen auf allen Hierarchieebenen, um die strategische Bedeutung des Themas zu unterstreichen.\n• Narrative und Storytelling: Entwicklung überzeugender interner Kommunikationsnarrative, die den Wert guter Compliance-Praxis für den nachhaltigen Unternehmenserfolg verdeutlichen und mit konkreten Beispielen illustrieren.\n• Kulturwirksame Rituale und Praktiken: Etablierung regelmäßiger Events und Formate, die Compliance-Themen positiv in den Fokus rücken, wie Lessons-Learned-Workshops, Compliance-Champions oder thematische Communitys."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Finanzinstitute Audit-Ready Prozesse entwickeln, die bereits in ihrer Grundkonzeption prüfungsfest gestaltet sind?",
        answer: "Audit-Ready Prozesse, die von Grund auf prüfungsfest konzipiert sind, stellen einen Paradigmenwechsel vom reaktiven zum proaktiven Compliance-Management dar. Die Integration von Prüfungsfestigkeit in die DNA der Geschäftsprozesse reduziert nicht nur den Vorbereitungsaufwand für Audits erheblich, sondern steigert auch die operative Effizienz und Compliance-Qualität im Tagesgeschäft.\n\n🏗️ Designprinzipien für prüfungsfeste Prozesse:\n• Compliance by Design: Systematische Berücksichtigung regulatorischer Anforderungen und aufsichtlicher Erwartungen bereits in der Konzeptionsphase neuer oder zu überarbeitender Prozesse, anstatt nachträglicher Anpassungen.\n• Integrierte Nachweisführung: Verankerung automatisierter Protokollierungs- und Dokumentationsmechanismen als inhärenter Bestandteil des Prozessdesigns, die kontrollrelevante Aktivitäten und Entscheidungen lückenlos und revisionssicher festhalten.\n• Transparente Kontrollpunkte: Klare Definition und Visualisierung regulatorisch relevanter Kontrollen innerhalb des Prozessflusses mit eindeutiger Zuordnung von Verantwortlichkeiten und Qualitätssicherungsschritten.\n• Audit Trails by Default: Implementierung durchgängiger Nachvollziehbarkeit für alle prüfungsrelevanten Prozessschritte, -inputs und -entscheidungen, die ohne zusätzlichen Aufwand für Prüfungszwecke genutzt werden kann.\n\n🔄 Implementierungsstrategien für Audit-Ready Prozessgestaltung:\n• Regulatorisches Process Mining: Systematische Analyse bestehender Prozesse auf Prüfungsrelevanz und -festigkeit hin, um gezielt Verbesserungspotenziale zu identifizieren und bei Neugestaltungen zu berücksichtigen.\n• Integrierte Compliance-Checks: Etablierung von Compliance-Gates an strategischen Punkten des Prozesslebenszyklus, von der initialen Konzeption über die Implementierung bis hin zu periodischen Reviews und Änderungen.\n• Prozessbezogene Kontrollmatrizen: Entwicklung klarer Zuordnungen zwischen Prozessschritten, relevanten regulatorischen Anforderungen und implementierten Kontrollen als Basis für transparente Nachweisführung und gezieltes Kontrollmonitoring.\n• User-Experience-orientierte Compliance: Gestaltung von Compliance-Elementen mit Fokus auf Benutzerfreundlichkeit und nahtlose Integration in den operativen Workflow, um hohe Akzeptanz und konsistente Anwendung zu gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie verändert sich die Rolle der internen Revision in Bezug auf MaRisk-Prüfungen und wie können Synergien optimal genutzt werden?",
        answer: "Die Rolle der internen Revision im Kontext von MaRisk-Prüfungen unterliegt einem dynamischen Wandel. Als dritte Verteidigungslinie nimmt sie eine Doppelfunktion wahr: Einerseits führt sie selbst interne MaRisk-Prüfungen durch, andererseits wird sie bei externen aufsichtlichen Prüfungen oft als Schnittstelle und unterstützende Instanz eingebunden. Diese Position bietet einzigartige Möglichkeiten zur Synergienutzung und zum Wissenstransfer zwischen internen und externen Prüfungsperspektiven.\n\n🔄 Evolutionstendenz der Revisionsrolle:\n• Vom klassischen Auditor zum strategischen Partner: Entwicklung von einer primär kontrollierenden und feststellenden Funktion hin zu einem proaktiven Berater, der neben der Feststellung von Schwachstellen auch Lösungsansätze und Best Practices vermittelt.\n• Stärkung der Unabhängigkeit bei gleichzeitiger Kollaboration: Aufrechterhaltung der notwendigen Unabhängigkeit als dritte Verteidigungslinie bei gleichzeitiger konstruktiver Zusammenarbeit mit den Fachbereichen zur nachhaltigen Verbesserung der Compliance-Situation.\n• Kontinuierliches statt punktuelles Monitoring: Ergänzung traditioneller periodischer Prüfungen durch kontinuierliche Überwachungsansätze, die frühzeitige Interventionen bei Compliance-Risiken ermöglichen.\n• Methodische Annäherung an externe Prüfer: Zunehmende Orientierung interner Prüfungsansätze an aufsichtlichen Methoden und Erwartungen, um Konsistenz zwischen interner und externer Prüfungsperspektive zu fördern.\n\n🤝 Strategien zur optimalen Synergienutzung:\n• Koordinierte Prüfungsplanung: Abstimmung interner Revisionsprüfungen mit bekannten oder erwarteten externen Prüfungsschwerpunkten, um Doppelprüfungen zu vermeiden und eine kontinuierliche Abdeckung aller relevanten Bereiche zu gewährleisten.\n• Wissenstransfer und Perspektivenaustausch: Systematische Auswertung externer Prüfungserfahrungen und -ergebnisse für die Weiterentwicklung interner Prüfungsansätze und umgekehrt, um von beiden Perspektiven zu profitieren.\n• Pre-Audit-Kooperation: Gezielte Durchführung von Vorprüfungen in Bereichen mit bevorstehenden externen Audits, um Schwachstellen frühzeitig zu identifizieren und zu adressieren, ohne die Unabhängigkeit der Revision zu kompromittieren.\n• Gemeinsame Methodenentwicklung: Kollaborative Erarbeitung und Verfeinerung von Prüfungsmethoden, -kriterien und -maßstäben zwischen interner Revision und zweiter Verteidigungslinie, um Konsistenz und Effizienz im gesamten Prüfungsökosystem zu fördern."
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
