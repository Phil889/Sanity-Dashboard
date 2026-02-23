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
    console.log('Updating CRR/CRD Implementation page with FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-implementation' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-implementation" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Rolle spielen Datenmanagement und IT-Infrastruktur bei der erfolgreichen Implementierung der CRR/CRD-Anforderungen?",
        answer: "Datenmanagement und IT-Infrastruktur sind nicht nur unterstützende Komponenten, sondern fundamentale Erfolgsfaktoren bei der CRR/CRD-Implementierung. Die regulatorischen Anforderungen stellen hohe Ansprüche an Datenqualität, -granularität und -verfügbarkeit sowie an die Flexibilität und Leistungsfähigkeit der IT-Systeme. Eine durchdachte Datenstrategie und eine zukunftsfähige IT-Architektur bilden das Rückgrat einer erfolgreichen und nachhaltigen Implementierung.\n\n🔢 Kritische Aspekte des regulatorischen Datenmanagements:\n• Datenqualität und -konsistenz: Die CRR/CRD-Anforderungen verlangen präzise, vollständige und konsistente Daten über alle Risikobereiche hinweg. Inkonsistenzen können zu falschen Kapitalberechnungen, Compliance-Verstößen und aufsichtlichen Maßnahmen führen.\n• Datengranularität und -historisierung: Die Verfügbarkeit granularer Daten auf Einzelgeschäftsebene sowie ausreichender Historien für Modellentwicklung und Stresstests ist essentiell für fortschrittliche regulatorische Ansätze.\n• Datenintegration und -konsolidierung: Die Zusammenführung von Daten aus verschiedenen Quellsystemen unter Wahrung der Datenintegrität und Nachvollziehbarkeit ist eine komplexe, aber unverzichtbare Aufgabe.\n• Datengovernance und -lineage: Klare Verantwortlichkeiten, dokumentierte Datenflüsse und nachvollziehbare Transformationsregeln sind unerlässlich für ein auditfähiges regulatorisches Reporting.\n\n💻 Anforderungen an die IT-Infrastruktur:\n• Flexibilität und Skalierbarkeit: Die IT-Architektur muss mit regulatorischen Änderungen und wachsenden Datenanforderungen mithalten können, ohne grundlegende Umbauten zu erfordern.\n• Automatisierung und Prozesseffizienz: Automatisierte Prozesse für Datenextraktion, -transformation und -validierung reduzieren manuelle Fehler und ermöglichen die Einhaltung knapper regulatorischer Fristen.\n• Transparenz und Nachvollziehbarkeit: Systeme müssen Berechnungswege dokumentieren und Prüfpfade bereitstellen, um regulatorische Anforderungen an Transparenz und Auditierbarkeit zu erfüllen.\n• Performanz und Zuverlässigkeit: Die IT-Infrastruktur muss komplexe Berechnungen für große Datenmengen in angemessener Zeit durchführen können und gleichzeitig eine hohe Verfügbarkeit gewährleisten.\n\n🛠️ ADVISORI's integrierter Ansatz für Daten und IT:\n• Ganzheitliche Daten- und IT-Strategie: Wir entwickeln eine integrierte Strategie, die sowohl aktuelle regulatorische Anforderungen erfüllt als auch für zukünftige Anforderungen gerüstet ist.\n• Data Governance Framework: Etablierung klarer Verantwortlichkeiten, Prozesse und Standards für das regulatorische Datenmanagement über den gesamten Datenlebenszyklus.\n• IT-Architekturkonzept mit Zukunftsvision: Design einer modularen, flexiblen IT-Architektur, die regulatorische Anforderungen effizient unterstützt und gleichzeitig Anpassungsfähigkeit gewährleistet.\n• Pragmatische Umsetzungsplanung: Entwicklung eines stufenweisen Implementierungsplans, der kurzfristige Compliance-Anforderungen mit langfristigen Architekturzielen in Einklang bringt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie lassen sich interne Modelle im Rahmen der CRR/CRD-Implementierung optimal entwickeln und validieren?",
        answer: "Die Entwicklung und Validierung interner Modelle stellt einen besonders anspruchsvollen Aspekt der CRR/CRD-Implementierung dar. Diese Modelle – sei es für Kreditrisiko (IRBA), Marktrisiko (IMA) oder operationelles Risiko – bieten Instituten die Möglichkeit, ihre Risiken präziser zu messen und Kapitalanforderungen zu optimieren. Gleichzeitig unterliegen sie strengen aufsichtlichen Anforderungen und einer kontinuierlichen Überprüfung, was einen strukturierten Entwicklungs- und Validierungsprozess unerlässlich macht.\n\n📊 Schlüsselelemente erfolgreicher Modellentwicklung:\n• Klare Modellstrategie und Governance: Festlegung einer übergreifenden Modellstrategie, die Geschäftsanforderungen, regulatorische Vorgaben und verfügbare Ressourcen berücksichtigt und in einen strukturierten Governance-Rahmen einbettet.\n• Robuste Datengrundlage: Sicherstellung einer ausreichenden Menge qualitativ hochwertiger Daten mit angemessener Historisierung, die alle relevanten Risikofaktoren und Portfoliosegmente abdeckt.\n• Methodische Fundierung: Entwicklung methodisch solider Modelle auf Basis anerkannter statistischer und finanzmathematischer Konzepte unter Berücksichtigung der spezifischen regulatorischen Anforderungen.\n• Transparenz und Nachvollziehbarkeit: Gewährleistung vollständiger Transparenz der Modellentwicklung durch umfassende Dokumentation aller Entscheidungen, Annahmen und Methodiken.\n\n🔍 Anforderungen an die Modellvalidierung:\n• Unabhängigkeit und kritische Perspektive: Etablierung einer organisatorisch unabhängigen Validierungsfunktion, die Modelle kritisch und objektiv überprüft und potenzielle Schwachstellen identifiziert.\n• Mehrdimensionale Validierung: Durchführung quantitativer Analysen (Backtesting, Benchmarking) und qualitativer Bewertungen (Prozessreview, Dokumentationsanalyse) für eine ganzheitliche Modellvalidierung.\n• Regelmäßige Überprüfung: Implementation eines kontinuierlichen Validierungszyklus, der sowohl turnusmäßige Überprüfungen als auch anlassbezogene Validierungen bei signifikanten Änderungen umfasst.\n• Nachvollziehbare Ergebniskommunikation: Transparente Kommunikation der Validierungsergebnisse an Management und Aufsicht mit klaren Handlungsempfehlungen für identifizierte Schwachstellen.\n\n💼 ADVISORI's umfassender Modellierungsansatz:\n• End-to-End-Unterstützung: Wir begleiten Sie durch den gesamten Lebenszyklus Ihrer internen Modelle – von der initialen Konzeption über die Entwicklung und Validierung bis hin zur kontinuierlichen Weiterentwicklung.\n• Regulatorische Expertise: Unsere Spezialisten verfügen über tiefgreifendes Verständnis der aufsichtlichen Anforderungen und Erwartungen an interne Modelle und halten Sie über regulatorische Entwicklungen auf dem Laufenden.\n• Praxiserprobte Methoden: Wir bringen bewährte Methoden und Tools für Modellentwicklung und -validierung ein, die in zahlreichen Implementierungsprojekten erfolgreich eingesetzt wurden.\n• Aufsichtlicher Dialog: Wir unterstützen Sie bei der Vorbereitung und Begleitung des aufsichtlichen Dialogs zu Ihren internen Modellen, von der Vorprüfung bis zum formalen Genehmigungsverfahren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann die CRR/CRD-Implementierung mit anderen regulatorischen Initiativen harmonisiert werden, um Synergien zu nutzen?",
        answer: "Finanzinstitute sehen sich mit einer stetig wachsenden Anzahl regulatorischer Anforderungen konfrontiert, die häufig parallele Implementierungsprojekte erfordern. Eine isolierte Betrachtung der CRR/CRD-Implementierung würde zu Ineffizienzen, Doppelarbeiten und potenziellen Inkonsistenzen führen. Ein integrierter Ansatz, der Überschneidungen und Wechselwirkungen zwischen verschiedenen regulatorischen Initiativen berücksichtigt, ermöglicht die Realisierung erheblicher Synergien und eine nachhaltigere Compliance-Architektur.\n\n🔄 Wesentliche regulatorische Überschneidungen mit CRR/CRD:\n• BCBS 239 und Risikodatenaggregation: Die Anforderungen an Datenqualität, Datenaggregation und Reporting-Prozesse weisen signifikante Überschneidungen auf und sollten harmonisiert betrachtet werden.\n• MaRisk und internes Kontrollsystem: Die qualitativen Anforderungen der CRR/CRD an Governance, Risikomanagement und interne Kontrollen haben starke Berührungspunkte mit den MaRisk und können in einem integrierten Compliance-Framework abgebildet werden.\n• SREP und aufsichtlicher Dialog: Der Supervisory Review and Evaluation Process (SREP) basiert wesentlich auf der Bewertung der CRR/CRD-Compliance und sollte bei der Implementierung strategisch mitgedacht werden.\n• Offenlegungspflichten (Säule 3): Die Anforderungen an die regulatorische Offenlegung sind eng mit den quantitativen Meldewesen-Anforderungen verbunden und sollten aus einer gemeinsamen Datenbasis gespeist werden.\n\n🛠️ Strategien zur Nutzung regulatorischer Synergien:\n• Integrierte Compliance-Architektur: Entwicklung einer übergreifenden Compliance-Architektur, die verschiedene regulatorische Anforderungen in einem kohärenten Framework zusammenführt und Doppelstrukturen vermeidet.\n• Gemeinsame Datengrundlage: Etablierung einer einheitlichen regulatorischen Datenbasis, die verschiedene Reporting- und Compliance-Anforderungen aus einer konsistenten Quelle bedient.\n• Harmonisierte Prozesse und Kontrollen: Abstimmung von Prozessen, Kontrollen und Verantwortlichkeiten über verschiedene regulatorische Bereiche hinweg, um Effizienz zu steigern und Inkonsistenzen zu vermeiden.\n• Übergreifendes Anforderungsmanagement: Implementierung eines zentralen Managements regulatorischer Anforderungen, das Überschneidungen identifiziert und eine koordinierte Umsetzung ermöglicht.\n\n🌐 ADVISORI's ganzheitlicher Regulierungsansatz:\n• Regulatorische Landkarte: Wir erstellen eine umfassende Übersicht aller relevanten regulatorischen Anforderungen und ihrer Wechselwirkungen, um Synergien systematisch zu identifizieren.\n• Integrierte Implementierungsplanung: Entwicklung einer koordinierten Roadmap, die verschiedene regulatorische Initiativen synchronisiert und Abhängigkeiten berücksichtigt.\n• Übergreifende Governance-Strukturen: Konzeption von Governance-Modellen, die eine konsistente Steuerung verschiedener regulatorischer Projekte ermöglichen und Silodenken überwinden.\n• Synergetische Lösungsarchitekturen: Design von IT- und Prozesslösungen, die flexibel an verschiedene regulatorische Anforderungen anpassbar sind und eine gemeinsame Infrastruktur nutzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Rolle spielen Change Management und Mitarbeiterqualifikation bei der erfolgreichen CRR/CRD-Implementierung?",
        answer: "Die erfolgreiche Implementierung der CRR/CRD-Anforderungen ist nicht nur eine technische und methodische Herausforderung, sondern in hohem Maße auch eine organisatorische und kulturelle. Selbst die ausgefeiltesten Methoden und Systeme können nur wirksam sein, wenn sie von den Mitarbeitern verstanden, akzeptiert und korrekt angewendet werden. Professionelles Change Management und systematische Kompetenzentwicklung sind daher entscheidende Erfolgsfaktoren, die oft unterschätzt werden.\n\n🔄 Dimensionen des Change Managements bei der CRR/CRD-Implementierung:\n• Stakeholder-Management: Frühzeitige Identifikation und Einbindung aller relevanten Stakeholder, von der Geschäftsleitung über Fachbereiche bis hin zu IT und Controlling, um Akzeptanz und Unterstützung für die Implementierung zu sichern.\n• Kommunikationsstrategie: Entwicklung einer transparenten, zielgruppengerechten Kommunikation, die Verständnis für die Notwendigkeit und den Nutzen der Veränderungen schafft und kontinuierlich über den Implementierungsfortschritt informiert.\n• Organisationsentwicklung: Anpassung von Organisationsstrukturen, Prozessen und Verantwortlichkeiten, um die neuen regulatorischen Anforderungen effektiv in die Betriebsabläufe zu integrieren und klare Zuständigkeiten zu schaffen.\n• Kulturwandel: Förderung einer Compliance-Kultur, die regulatorische Anforderungen nicht als lästige Pflicht, sondern als integralen Bestandteil einer soliden Geschäftsführung begreift und in alltägliche Entscheidungsprozesse einbezieht.\n\n🎓 Systematische Kompetenzentwicklung als Erfolgsfaktor:\n• Bedarfsgerechte Qualifizierung: Analyse der benötigten Kompetenzen und gezielter Aufbau von Fachwissen in allen relevanten Bereichen, von regulatorischen Grundlagen über methodisches Know-how bis hin zu technischen Fähigkeiten.\n• Differenzierte Schulungskonzepte: Entwicklung maßgeschneiderter Schulungsprogramme für verschiedene Zielgruppen – von der Awareness-Schulung für die Geschäftsleitung bis zum Detailtraining für Fachspezialisten.\n• Kontinuierlicher Wissenstransfer: Etablierung von Mechanismen für den fortlaufenden Austausch von Wissen und Erfahrungen, sowohl innerhalb des Instituts als auch mit externen Experten und anderen Marktteilnehmern.\n• Praktische Anwendung: Förderung des Learning-by-Doing durch begleitete Praxisphasen, in denen theoretisches Wissen in konkreten Anwendungssituationen vertieft und gefestigt wird.\n\n🤝 ADVISORI's integrierter Change-Ansatz:\n• Ganzheitliche Transformationsbegleitung: Wir unterstützen Sie bei allen Aspekten des Change Managements – von der Stakeholder-Analyse über die Kommunikationsplanung bis zur Verankerung der Veränderungen in der Organisation.\n• Maßgeschneiderte Wissenstransferkonzepte: Entwicklung und Durchführung bedarfsgerechter Schulungs- und Coaching-Programme, die auf die spezifischen Anforderungen und Vorkenntnisse Ihrer Mitarbeiter zugeschnitten sind.\n• Kollaborative Implementierungsansätze: Förderung der aktiven Einbindung Ihrer Mitarbeiter in die Implementierung, um Ownership zu schaffen und gleichzeitig praktische Kompetenzen aufzubauen.\n• Nachhaltige Verankerung: Unterstützung bei der Etablierung von Strukturen und Prozessen, die einen kontinuierlichen Kompetenzaufbau und Wissensaustausch auch nach Abschluss der initialen Implementierung sicherstellen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
