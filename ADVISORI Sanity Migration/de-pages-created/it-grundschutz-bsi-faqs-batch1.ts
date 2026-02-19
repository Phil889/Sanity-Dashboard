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
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'it-grundschutz-bsi' })
    
    if (!existingDoc) {
      throw new Error('Document "it-grundschutz-bsi" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist IT-Grundschutz BSI für die strategische Unternehmensführung mehr als nur ein Compliance-Instrument und wie positioniert ADVISORI dies als Wettbewerbsvorteil?",
        answer: "IT-Grundschutz des Bundesamts für Sicherheit in der Informationstechnik (BSI) transzendiert die reine Erfüllung regulatorischer Anforderungen und etabliert sich als strategisches Instrument für nachhaltige Unternehmensentwicklung. Für die C-Suite bedeutet dies eine systematische Herangehensweise zur Risikominimierung, die gleichzeitig operative Exzellenz und Vertrauen bei Stakeholdern schafft.\n\n🎯 Strategische Dimensionen von IT-Grundschutz für die Führungsebene:\n• Risikomanagement als Kerndisziplin: Systematische Identifikation und Bewertung von IT-Sicherheitsrisiken ermöglicht fundierte Geschäftsentscheidungen und schützt vor unkalkulierbaren Verlusten.\n• Operative Effizienz durch Standardisierung: Bewährte Sicherheitsmaßnahmen und -prozesse reduzieren Komplexität und schaffen klare Verantwortlichkeiten in der Organisation.\n• Vertrauensbildung bei Kunden und Partnern: Nachweisbare IT-Sicherheit nach BSI-Standards stärkt die Marktposition und eröffnet neue Geschäftsmöglichkeiten.\n• Grundlage für digitale Transformation: Solide Sicherheitsarchitektur ermöglicht die sichere Einführung neuer Technologien und Geschäftsmodelle.\n\n🛡️ ADVISORI's strategischer Ansatz für IT-Grundschutz:\n• Business-orientierte Implementierung: Wir verknüpfen technische Sicherheitsmaßnahmen direkt mit Ihren Geschäftszielen und schaffen so messbaren Mehrwert.\n• Pragmatische Umsetzung: Fokus auf verhältnismäßige und wirtschaftlich sinnvolle Sicherheitsmaßnahmen, die Ihre Ressourcen optimal nutzen.\n• Continuous Improvement: Etablierung eines kontinuierlichen Verbesserungsprozesses, der mit der dynamischen Bedrohungslandschaft Schritt hält.\n• Zertifizierungsunterstützung: Vorbereitung und Begleitung bei ISO 27001-Zertifizierungen auf IT-Grundschutz-Basis für maximale Marktanerkennung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den Return on Investment (ROI) einer IT-Grundschutz-Implementierung und welche direkten Auswirkungen hat dies auf die Unternehmensbewertung?",
        answer: "Die Investition in IT-Grundschutz BSI-konforme Sicherheitsarchitekturen generiert messbaren Mehrwert, der weit über die reine Schadensverhinderung hinausgeht. ADVISORI entwickelt transparente ROI-Modelle, die sowohl quantitative als auch qualitative Werttreiber erfassen und der C-Suite eine fundierte Entscheidungsgrundlage bieten.\n\n💰 Quantifizierbare Wertschöpfung durch IT-Grundschutz:\n• Schadensvermeidung und Kostenreduktion: Systematische Risikobehandlung reduziert die Wahrscheinlichkeit und das Ausmaß von Sicherheitsvorfällen erheblich.\n• Effizienzsteigerung durch Prozessoptimierung: Standardisierte Sicherheitsprozesse eliminieren Redundanzen und beschleunigen operative Abläufe.\n• Compliance-Kostensenkung: Einheitliche Dokumentation und Verfahren reduzieren Aufwände für Audits und regulatorische Nachweise.\n• Versicherungsprämienreduktion: Nachweisbare Sicherheitsmaßnahmen führen häufig zu günstigeren Cyber-Versicherungskonditionen.\n\n📈 Strategische Werttreiber für die Unternehmensbewertung:\n• Enhanced Enterprise Value: Investoren bewerten Unternehmen mit robusten Sicherheitsarchitekturen höher, da das Risikoprofil deutlich verbessert wird.\n• Market Access und Competitive Advantage: IT-Grundschutz-Konformität eröffnet Zugang zu sicherheitssensitiven Märkten und Kunden.\n• Operational Excellence: Systematische Sicherheitsprozesse stärken die operative Resilienz und Vorhersagbarkeit des Geschäfts.\n• Stakeholder Confidence: Externe Validierung durch BSI-Standards stärkt das Vertrauen von Investoren, Kunden und Partnern.\n\n🔍 ADVISORI's ROI-Quantifizierungsansatz:\n• Baseline-Assessment: Detaillierte Erfassung der aktuellen Sicherheitslage und potenzieller Schadenspotentiale.\n• Investitions- und Nutzenmodellierung: Entwicklung spezifischer ROI-Modelle basierend auf Ihrer Branche und Risikolage.\n• Kontinuierliches Monitoring: Laufende Messung und Berichterstattung über die Wertschöpfung der implementierten Maßnahmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die IT-Sicherheitslandschaft entwickelt sich rasant weiter – wie stellt ADVISORI sicher, dass unsere IT-Grundschutz-Implementierung auch zukünftigen Bedrohungen und regulatorischen Entwicklungen gewachsen ist?",
        answer: "In einer Ära exponentiell wachsender Cyber-Bedrohungen und sich verschärfender regulatorischer Anforderungen ist eine statische IT-Grundschutz-Implementierung unzureichend. ADVISORI verfolgt einen evolutionären Ansatz, der Ihre Sicherheitsarchitektur kontinuierlich an neue Herausforderungen anpasst und dabei die bewährten BSI-Prinzipien als stabiles Fundament nutzt.\n\n🔄 Adaptive IT-Grundschutz-Architektur als Antwort auf dynamische Risiken:\n• Threat Intelligence Integration: Kontinuierliche Einbindung aktueller Bedrohungsinformationen in die Risikobewertung und Maßnahmenplanung.\n• Regulatory Monitoring: Proaktive Beobachtung und Analyse neuer regulatorischer Entwicklungen (NIS2, DORA, AI Act) und deren Auswirkungen auf Ihre IT-Grundschutz-Strategie.\n• Technology Evolution Tracking: Bewertung neuer Technologien und deren Sicherheitsimplikationen für kontinuierliche Aktualisierung der Baustein-Modellierung.\n• Flexible Sicherheitsarchitekturen: Design von Sicherheitslösungen, die schnelle Anpassungen an neue Anforderungen ermöglichen.\n\n🚀 ADVISORI's Future-Proof IT-Grundschutz-Strategie:\n• Modular Security Design: Entwicklung modularer Sicherheitsarchitekturen, die sich flexibel erweitern und anpassen lassen.\n• Continuous Assessment: Etablierung regelmäßiger Risikobewertungen und Sicherheitsüberprüfungen zur frühzeitigen Identifikation von Anpassungsbedarfen.\n• Innovation Integration: Systematische Bewertung und Integration neuer Sicherheitstechnologien in bestehende IT-Grundschutz-Strukturen.\n• Cross-Standard Harmonization: Sicherstellung der Kompatibilität mit anderen internationalen Standards (ISO 27001, NIST) für maximale Flexibilität.\n\n🔮 Proaktive Zukunftsvorbereitung:\n• Scenario Planning: Entwicklung von Szenarien für verschiedene regulatorische und technologische Entwicklungen.\n• Skills Development: Kontinuierliche Weiterbildung Ihrer Teams in neuen Sicherheitstechnologien und -methoden.\n• Strategic Partnerships: Aufbau strategischer Partnerschaften mit Technologieanbietern und Forschungseinrichtungen für frühzeitigen Zugang zu Innovationen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI IT-Grundschutz von einer traditionellen Compliance-Aufgabe zu einem strategischen Enabler für Geschäftswachstum und digitale Innovation?",
        answer: "Traditionelle IT-Grundschutz-Implementierungen werden oft als notwendige Compliance-Übung betrachtet, die Ressourcen bindet ohne direkten Geschäftswert zu schaffen. ADVISORI revolutioniert diesen Ansatz, indem wir IT-Grundschutz als strategischen Katalysator für Geschäftswachstum, Innovation und operative Exzellenz positionieren.\n\n🎯 Von Compliance zu Strategic Enablement:\n• Innovation Security Framework: Entwicklung sicherheitsintegrierter Innovationsprozesse, die IT-Grundschutz-Prinzipien von Beginn an in neue Technologien und Geschäftsmodelle einbetten.\n• Secure Digital Transformation: Nutzung der IT-Grundschutz-Strukturen als solide Basis für sichere Cloud-Migration, IoT-Integration und AI-Implementierung.\n• Risk-Informed Decision Making: Transformation der Risikobewertung in ein strategisches Instrument für fundierte Investitionsentscheidungen.\n• Security as Competitive Advantage: Positionierung überlegener Sicherheitsstandards als Differenzierungsmerkmal im Markt.\n\n💡 ADVISORI's Growth-Oriented IT-Grundschutz-Ansatz:\n• Business Process Integration: Nahtlose Integration von Sicherheitsmaßnahmen in bestehende Geschäftsprozesse zur Steigerung der Gesamteffizienz.\n• Agile Security Operations: Implementierung agiler Sicherheitsprozesse, die schnelle Anpassungen an neue Geschäftsanforderungen ermöglichen.\n• Value Stream Optimization: Identifikation und Elimination von Sicherheitshürden, die Geschäftsprozesse verlangsamen.\n• Customer Trust Building: Nutzung zertifizierter IT-Grundschutz-Konformität als Vertrauensbildner für Kunden und Partner.\n\n🚀 Enablement für zukunftsorientierte Geschäftsmodelle:\n• Secure-by-Design Prinzipien: Integration von Sicherheitsüberlegungen bereits in die Konzeptionsphase neuer Produkte und Services.\n• Platform Security: Aufbau sicherer technologischer Plattformen, die schnelle Skalierung und Innovation ermöglichen.\n• Ecosystem Security: Erweiterung der Sicherheitsbetrachtung auf Partner und Lieferanten für resiliente Geschäftsökosysteme.\n• Data-Driven Security: Nutzung von Sicherheitsdaten für strategische Geschäftsentscheidungen und Prozessoptimierung."
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
