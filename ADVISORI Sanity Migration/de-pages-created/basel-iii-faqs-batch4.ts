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
    console.log('Updating Basel III page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir die Governance-Anforderungen von Basel III nutzen, um die strategische Steuerungsfähigkeit unserer Bank zu verbessern?",
        answer: "Die Governance-Anforderungen von Basel III werden oft als zusätzliche Compliance-Last wahrgenommen. In Wirklichkeit bieten sie jedoch die Chance, Ihre Governance-Strukturen so zu transformieren, dass sie nicht nur regulatorische Anforderungen erfüllen, sondern auch die strategische Steuerungsfähigkeit und Entscheidungsqualität Ihrer Bank substantiell verbessern. ADVISORI unterstützt Sie bei dieser wertschöpfenden Transformation.\n\n🏛️ Governance als strategischer Wettbewerbsvorteil:\n• Risikoorientierte Entscheidungsstrukturen: Implementierung von Governance-Prozessen, die Risiken frühzeitig in strategische Entscheidungen integrieren und so bessere, nachhaltigere Geschäftsentscheidungen ermöglichen.\n• Datenbasierte Steuerungsmodelle: Aufbau von Management-Informationssystemen, die regulatorische Kennzahlen mit Geschäfts-KPIs verbinden und eine holistische Steuerung der Bank ermöglichen.\n• Rollenklarheit und Verantwortlichkeit: Präzise Definition von Rollen, Verantwortlichkeiten und Eskalationswegen, die nicht nur regulatorische Anforderungen erfüllen, sondern auch operative Exzellenz fördern.\n• Kulturelle Transformation: Verankerung von Risikobewusstsein und regulatorischem Verständnis in der Unternehmenskultur, um proaktives statt reaktives Handeln zu fördern.\n\n🔄 ADVISORIs integrierter Governance-Ansatz:\n• Strategisches Governance-Design: Entwicklung maßgeschneiderter Governance-Strukturen, die regulatorische Anforderungen mit Ihrem spezifischen Geschäftsmodell und Ihrer Organisationskultur harmonisieren.\n• Integrated Assurance Framework: Implementierung eines ganzheitlichen Prüfungsansatzes, der verschiedene Kontroll- und Überwachungsfunktionen (Compliance, Risiko, Interne Revision) koordiniert und Redundanzen minimiert.\n• Digitale Governance-Tools: Einführung digitaler Plattformen zur Automatisierung von Governance-Prozessen, die Transparenz erhöhen, administrative Belastungen reduzieren und Entscheidungsprozesse beschleunigen.\n• Board Effectiveness Program: Spezielle Schulungs- und Coaching-Programme für Vorstände und Aufsichtsräte, die regulatorisches Wissen mit strategischer Kompetenz verbinden und die Effektivität von Aufsichtsgremien steigern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Ansätze zur Implementierung interner Modelle unter Basel III empfiehlt ADVISORI, und wie können wir diese als strategischen Vorteil nutzen?",
        answer: "Die Entwicklung und Implementierung interner Modelle unter Basel III (IRB, IMA, etc.) ist mit erheblichen Herausforderungen verbunden – von der Modellentwicklung über Validierung bis hin zur aufsichtlichen Anerkennung. Bei strategischer Herangehensweise bieten interne Modelle jedoch weit mehr als regulatorische Kapitaloptimierung: Sie können zu einem fundamentalen Wettbewerbsvorteil werden. ADVISORI unterstützt Sie bei dieser strategischen Transformation.\n\n📊 Strategische Vorteile fortschrittlicher interner Modelle:\n• Über Kapitaloptimierung hinaus: Moderne interne Modelle ermöglichen nicht nur regulatorische Kapitaleffizienz, sondern liefern auch tiefe Einblicke in Risikotreiber und Portfoliodynamiken für strategische Entscheidungen.\n• Präzisere Preisgestaltung und Portfoliosteuerung: Fortschrittliche Risikomodelle ermöglichen eine genauere risikoadjustierte Preisgestaltung, Kundensegmentierung und strategische Portfolioallokation.\n• Wettbewerbsvorteil in Margensegmenten: Banken mit genehmigten internen Modellen können in bestimmten Marktsegmenten niedrigere Kapitalkosten realisieren und so attraktivere Konditionen anbieten als weniger fortgeschrittene Wettbewerber.\n• Innovation und Agilität: Die für interne Modelle notwendigen Daten- und Analysekapazitäten bilden ein Fundament für weitere analytische Innovationen und schnellere Reaktionen auf Marktveränderungen.\n\n🧩 ADVISORIs fortschrittlicher Modellierungsansatz:\n• Integrierte Modellentwicklung: Wir verbinden regulatorische Anforderungen mit ökonomischen Risikoprinzipien und Geschäftsprioritäten in einem kohärenten Modellierungsansatz.\n• Advanced Analytics und Machine Learning: Integration moderner analytischer Methoden in traditionelle statistische Modelle, um nicht-lineare Zusammenhänge zu erfassen und Prognosegenauigkeit zu verbessern.\n• End-to-End-Modellmanagement: Implementierung eines ganzheitlichen Modellmanagement-Frameworks, das den gesamten Lebenszyklus von der Entwicklung über Validierung bis zur Überwachung und Weiterentwicklung abdeckt.\n• Strategische Regulierungskommunikation: Unterstützung bei der Entwicklung einer effektiven Kommunikationsstrategie mit Aufsichtsbehörden, die die Genehmigungswahrscheinlichkeit und -geschwindigkeit maximiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie unterstützt ADVISORI uns dabei, unsere Basel III-Implementierung mit anderen regulatorischen Anforderungen (IFRS 9, BCBS 239, etc.) zu harmonisieren und Synergien zu realisieren?",
        answer: "Die Vielzahl simultaner regulatorischer Anforderungen stellt eine enorme Herausforderung für Banken dar und führt oft zu isolierten, ineffizienten Implementierungsprojekten. Ein strategischer, integrierter Ansatz kann nicht nur erhebliche Kostensynergien generieren, sondern auch zu überlegenen Geschäftsergebnissen führen. ADVISORI unterstützt Sie bei dieser komplexen Harmonisierung.\n\n🔄 Strategische Synergien zwischen regulatorischen Initiativen:\n• Datensynergien: Die Datenanforderungen verschiedener Regularien (Basel III, BCBS 239, IFRS 9, AML) überschneiden sich erheblich – eine integrierte Datenstrategie kann Doppelarbeiten vermeiden und Konsistenz sicherstellen.\n• Methodische Harmonisierung: Koordinierte Entwicklung von Methoden und Modellen für verschiedene regulatorische Anforderungen (z.B. Abstimmung von EL-Konzepten zwischen Basel und IFRS 9) reduziert Komplexität und verbessert Interpretierbarkeit.\n• Governance-Integration: Etablierung eines übergreifenden Regulatory-Governance-Frameworks vermeidet Silos, schafft klare Verantwortlichkeiten und optimiert den Ressourceneinsatz.\n• Technologische Konsolidierung: Entwicklung einer konsolidierten Technologiearchitektur, die verschiedene regulatorische Anforderungen bedient, statt isolierte Lösungen für jede Regulierung zu schaffen.\n\n🧠 ADVISORIs ganzheitlicher Regulierungsansatz:\n• Regulatorische Synergiekartierung: Detaillierte Analyse der Überschneidungen und Interdependenzen zwischen verschiedenen regulatorischen Anforderungen zur Identifikation von Harmonisierungspotentialen.\n• Integrierte Implementierungsroadmap: Entwicklung einer koordinierten, mehrjährigen Umsetzungsstrategie, die regulatorische Projekte optimal sequenziert und Abhängigkeiten berücksichtigt.\n• Regulatory Target Operating Model: Design eines zielgerichteten Betriebsmodells, das die effiziente Erfüllung multipler regulatorischer Anforderungen ermöglicht und Silobildung verhindert.\n• Strategisches Stakeholder-Management: Koordinierte Kommunikation mit verschiedenen Aufsichtsbehörden, um regulatorische Erwartungen zu harmonisieren und mögliche Konflikte frühzeitig zu adressieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie kann unsere Bank die Stresstesting-Anforderungen von Basel III nutzen, um strategische Resilienz aufzubauen und welche innovativen Ansätze bietet ADVISORI?",
        answer: "Die Stresstesting-Anforderungen von Basel III werden oft als rein regulatorische Übung mit geringem Geschäftswert wahrgenommen. Mit dem richtigen strategischen Ansatz können Stresstests jedoch zu einem mächtigen Instrument für die Entwicklung strategischer Resilienz und vorausschauender Unternehmenssteuerung werden. ADVISORI unterstützt Sie bei dieser Transformation vom regulatorischen Pflichtprogramm zum strategischen Wettbewerbsvorteil.\n\n🔬 Strategische Neupositionierung des Stresstestings:\n• Vom regulatorischen Ritual zum strategischen Radar: Transformation des Stresstestings von einer retrospektiven Compliance-Übung zu einem zukunftsgerichteten Frühwarnsystem für strategische Risiken und Chancen.\n• Szenarienbasierte Strategieentwicklung: Nutzung von Stresstest-Methoden und -Infrastrukturen für die systematische Evaluation von Geschäftsstrategien unter verschiedenen ökonomischen und wettbewerblichen Szenarien.\n• Krisenvorbereitung und Resilienzplanung: Entwicklung granularer Aktionspläne und Notfallmaßnahmen basierend auf Stresstest-Ergebnissen, die im Krisenfall schnelles und entschlossenes Handeln ermöglichen.\n• Management der Kapitalflexibilität: Identifikation von Kapitalreserven und -hebeln, die in Stresssituationen aktiviert werden können, um strategische Handlungsfähigkeit auch unter widrigen Bedingungen zu erhalten.\n\n💡 ADVISORIs innovativer Stresstesting-Ansatz:\n• Reverse Stress Testing Plus: Erweiterung traditioneller Reverse-Stresstests um strategische Dimensionen, die nicht nur finanzielle Überlebensfähigkeit, sondern auch Erhalt strategischer Optionen und Wettbewerbspositionen berücksichtigen.\n• Dynamische Stressszenarien: Entwicklung komplexer, mehrstufiger Szenarien, die Feedback-Schleifen, Zweitrundeneffekte und strategische Anpassungsmaßnahmen dynamisch modellieren.\n• Digital Twin für Stresstesting: Aufbau digitaler Zwillinge Ihrer Bank, die komplexe Interdependenzen zwischen verschiedenen Geschäftsbereichen, Risikotypen und externen Faktoren realitätsnah abbilden.\n• AI-gestützte Szenariengenerierung: Einsatz von künstlicher Intelligenz zur Identifikation neuartiger, nicht-offensichtlicher Stressszenarien, die traditionelle Expertenmethoden ergänzen und blinde Flecken aufdecken."
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
