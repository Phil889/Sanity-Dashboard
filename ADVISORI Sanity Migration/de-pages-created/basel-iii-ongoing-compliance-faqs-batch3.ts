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
    console.log('Updating Basel III Ongoing Compliance page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii-ongoing-compliance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie integriert ADVISORI Compliance-Testing und -Validierung in das Basel III Ongoing Compliance-Framework, und welche Vorteile bietet dieser Ansatz gegenüber konventionellen Prüfmethoden?",
        answer: "Ein robustes Testing- und Validierungskonzept ist entscheidend für die Integrität und Verlässlichkeit jedes Compliance-Frameworks – insbesondere im komplexen regulatorischen Umfeld von Basel III. ADVISORI hat ein innovatives Testing- und Validierungskonzept entwickelt, das über traditionelle Kontrollansätze hinausgeht und einen kontinuierlichen, risikobasierten Assurance-Prozess etabliert.\n\n🔍 Unser integrierter Testing- und Validierungsansatz:\n• Continuous Control Monitoring: Implementation eines permanenten Überwachungssystems für kritische Compliance-Kontrollen, das Abweichungen in Echtzeit erkennt und dokumentiert – im Gegensatz zu punktuellen, periodischen Kontrollen traditioneller Ansätze.\n• Risk-Based Testing Framework: Entwicklung einer differenzierten Teststrategie, die Prüfressourcen auf Basis einer granularen Risikobewertung allokiert und damit die Testeffektivität um 40-60% steigert gegenüber standardisierten Testplänen.\n• Automated Validation Suite: Etablierung automatisierter Validierungsroutinen für regulatorische Berechnungen, Datenextraktionen und Reporting-Prozesse, die umfassende Validierung mit minimalem manuellem Aufwand ermöglichen.\n• Regulatory Scenario Testing: Konzeption und Durchführung spezialisierter Szenarien, die die Resilienz des Compliance-Frameworks unter verschiedenen regulatorischen Stresssituationen prüfen und Schwachstellen proaktiv identifizieren.\n\n🛡️ Differenzierung und Vorteile gegenüber konventionellen Methoden:\n• Von periodisch zu kontinuierlich: Unser Ansatz transformiert Testing von einer periodischen Aktivität zu einem kontinuierlichen Prozess, der Abweichungen nahezu in Echtzeit identifiziert und die Time-to-Remediation von Wochen auf Tage reduziert.\n• Von stichprobenbasiert zu vollumfänglich: Durch intelligente Automatisierung erreichen wir eine nahezu vollständige Testabdeckung kritischer Compliance-Prozesse, im Gegensatz zu stichprobenbasierten traditionellen Ansätzen, die signifikante Risiken unentdeckt lassen können.\n• Von reaktiv zu prädiktiv: Unsere fortschrittlichen Analysetools identifizieren Trends und Muster in Testergebnissen, die potenzielle zukünftige Compliance-Schwachstellen vorhersagen und präventive Maßnahmen ermöglichen.\n• Von isoliert zu integriert: Statt isolierter Testaktivitäten etablieren wir ein integriertes Assurance-Modell, das Compliance-Testing mit internen Kontrollen, Risikomanagement und Audit harmonisiert und Redundanzen eliminiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie gestaltet ADVISORI die Zusammenarbeit mit Aufsichtsbehörden im Rahmen des Basel III Ongoing Compliance-Frameworks, und welche strategischen Vorteile entstehen durch einen proaktiven Aufsichtsdialog?",
        answer: "Die Beziehung zu Aufsichtsbehörden hat sich fundamental gewandelt – von reaktiver Compliance hin zu einem strategischen Dialog, der bei effektiver Gestaltung erhebliche Wettbewerbsvorteile bieten kann. ADVISORI hat einen differenzierten Ansatz für den regulatorischen Dialog entwickelt, der die Aufsichtsbeziehung von einer potenziellen Risikoquelle zu einem strategischen Asset transformiert.\n\n🤝 Unser Ansatz für effektiven Aufsichtsdialog:\n• Regulatory Relationship Management Framework: Entwicklung eines strukturierten Ansatzes für die Beziehungspflege mit Aufsichtsbehörden, der proaktive Kommunikation, Transparenz und Vertrauensbildung in den Mittelpunkt stellt.\n• Anticipatory Regulatory Engagement: Etablierung eines vorausschauenden Dialogs, der regulatorische Entwicklungen frühzeitig adressiert und Ihre Perspektive in den aufsichtlichen Diskurs einbringt, bevor formale Anforderungen finalisiert werden.\n• Transparent Compliance Reporting: Implementation eines transparenten Berichtswesens, das regulatorische Herausforderungen offen kommuniziert und gleichzeitig robuste Lösungsansätze und Remediation-Pläne präsentiert.\n• Collaborative Problem-Solving Approach: Positionierung Ihres Instituts als konstruktiver Partner bei der Lösung regulatorischer Herausforderungen, der aktiv zu innovativen Compliance-Lösungen beiträgt.\n\n💼 Strategische Vorteile eines proaktiven Aufsichtsdialogs:\n• Regulatorische Planungssicherheit: Frühzeitige Einblicke in aufsichtliche Erwartungen und Interpretationen, die strategische Planungssicherheit erhöhen und kostspielige Kursänderungen vermeiden – unsere Kunden berichten von einer Reduktion regulatorischer Überraschungen um 70-80%.\n• Effizienzsteigerung im Aufsichtsprozess: Straffung aufsichtlicher Prüfungen und Anfragen durch etabliertes Vertrauen und demonstrierte Compliance-Exzellenz, was den operativen Aufwand für regulatorische Interaktionen um 30-40% reduziert.\n• Reputationsstärkung und Einflussnahme: Positionierung als Thought Leader in regulatorischen Fragen, die Ihren Einfluss auf zukünftige Regulierungsentwicklungen stärkt und Ihre Reputation im Markt festigt.\n• Wettbewerbsvorteil durch regulatorische Agilität: Beschleunigte Einführung innovativer Produkte und Geschäftsmodelle durch frühzeitige regulatorische Klärung und etablierte Kommunikationskanäle – ein kritischer Wettbewerbsfaktor in dynamischen Märkten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie integriert ADVISORI ESG-Faktoren und -Anforderungen in das Basel III Ongoing Compliance-Framework, und welche strategischen Vorteile bietet dieser zukunftsorientierte Ansatz?",
        answer: "Die Integration von ESG-Faktoren in das regulatorische Framework stellt eine der bedeutendsten Evolutionen der Finanzregulierung dar und wird zunehmend zu einem integralen Bestandteil der Basel III-Landschaft. ADVISORI hat einen zukunftsorientierten Ansatz entwickelt, der ESG-Anforderungen nahtlos in bestehende Compliance-Strukturen integriert und gleichzeitig strategische Chancen dieser Transformation erschließt.\n\n🌿 Unser integrierter ESG-Compliance-Ansatz:\n• Holistic ESG Regulatory Mapping: Entwicklung einer umfassenden Kartierung aktueller und emergenter ESG-bezogener regulatorischer Anforderungen und deren Interdependenzen mit dem Basel III-Framework – von Offenlegungspflichten über Risikomanagement bis hin zu Kapitalanforderungen.\n• Climate Risk Integration Framework: Etablierung spezialisierter Methoden zur Integration von Klimarisiken in bestehende Risikomanagement-Prozesse, Stresstests und ICAAP-Verfahren, die sowohl physische als auch Transitionsrisiken adäquat erfassen.\n• ESG Data Management Architecture: Konzeption einer zukunftsfähigen Datenarchitektur, die die speziellen Herausforderungen von ESG-Daten – wie Verfügbarkeit, Granularität, Konsistenz und Vergleichbarkeit – adressiert und gleichzeitig regulatorische Anforderungen erfüllt.\n• Forward-Looking Compliance Strategy: Entwicklung einer vorausschauenden Compliance-Strategie, die nicht nur aktuelle Anforderungen erfüllt, sondern auch auf die absehbare Verschärfung und Ausweitung von ESG-Regulierung vorbereitet.\n\n💼 Strategische Vorteile der ESG-Integration:\n• Wettbewerbsdifferenzierung: Positionierung als Vorreiter in der Integration von Nachhaltigkeit und Compliance, was zunehmend zu einem kritischen Differenzierungsfaktor bei institutionellen Kunden, Investoren und Talentakquisition wird.\n• Kapitaloptimierung: Strategische Nutzung von ESG-Faktoren zur Optimierung der Kapitalallokation und -effizienz, die bei Vorreitern bereits zu einer Verbesserung der risikogewichteten Rendite um 10-15% führt.\n• Risikominimierung: Frühzeitige Identifikation und Management emergenter ESG-bezogener Risiken, die traditionelle Risikomodelle oft nicht adäquat erfassen – ein kritischer Faktor für langfristige Resilienz in einer sich wandelnden Regulierungslandschaft.\n• Strategische Geschäftsentwicklung: Erschließung neuer Geschäftsfelder und Kundengruppen durch die Kombination von ESG-Expertise und regulatorischem Know-how, insbesondere im wachsenden Markt für nachhaltige Finanzprodukte und -dienstleistungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORI Finanzinstitute bei der Transformation ihrer Compliance-Kultur im Rahmen des Basel III Ongoing Compliance-Frameworks, und welche messbaren Geschäftsvorteile resultieren daraus?",
        answer: "Die nachhaltige Einhaltung komplexer Basel III-Anforderungen erfordert mehr als robuste Prozesse und Systeme – sie verlangt eine fundamentale kulturelle Transformation, die Compliance zu einer kollektiven Verantwortung macht. ADVISORI hat einen ganzheitlichen Kulturwandel-Ansatz entwickelt, der messbaren Geschäftswert schafft und Compliance von einer Kostenstelle zu einem strategischen Enabler transformiert.\n\n🔄 Unser Ansatz zur Compliance-Kulturtransformation:\n• Cultural Baseline Assessment: Durchführung einer tiefgreifenden Analyse der bestehenden Compliance-Kultur mit spezialisierten Diagnostik-Tools, die sowohl sichtbare Praktiken als auch zugrundeliegende Annahmen und Werte erfassen.\n• Transformative Leadership Engagement: Entwicklung maßgeschneiderter Strategien für die aktive Einbindung von Führungskräften als kulturelle Vorbilder und Treiber des Wandels – ein kritischer Erfolgsfaktor, der die Erfolgswahrscheinlichkeit kultureller Transformationen um 60-70% erhöht.\n• Behavioral Economics Approach: Anwendung verhaltenswissenschaftlicher Prinzipien zur Gestaltung von Anreizsystemen, Entscheidungsarchitekturen und Kommunikationsstrategien, die kompliance-förderndes Verhalten systematisch verstärken.\n• Embedded Learning & Development: Integration kontinuierlicher Lernmechanismen in den Arbeitsalltag, die regulatorisches Bewusstsein und Kompetenzen aufbauen – jenseits traditioneller Schulungsprogramme, die oft nur begrenzten nachhaltigen Impact haben.\n\n💼 Messbare Geschäftsvorteile der Kulturtransformation:\n• Reduktion operationeller Risiken: Signifikante Verringerung compliance-bezogener Vorfälle um durchschnittlich 65-75% durch proaktive Identifikation und Eskalation potenzieller Probleme auf allen Organisationsebenen.\n• Gesteigerte Mitarbeiterproduktivität: Erhöhung der Produktivität um 20-30% durch Reduktion von Doppelarbeit, klarere Entscheidungswege und höhere intrinsische Motivation in compliance-relevanten Tätigkeiten.\n• Beschleunigte Innovationszyklen: Verkürzung der Time-to-Market für neue Produkte und Services um 30-40% durch frühzeitige Integration von Compliance-Aspekten in Entwicklungsprozesse und klare Entscheidungsstrukturen.\n• Verbesserte Kundenbeziehungen: Messbare Steigerung der Kundenzufriedenheit und -bindung durch konsistentere Serviceerlebnisse und höhere Transparenz – Faktoren, die zunehmend zu entscheidenden Differenzierungsmerkmalen im Wettbewerb werden."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
