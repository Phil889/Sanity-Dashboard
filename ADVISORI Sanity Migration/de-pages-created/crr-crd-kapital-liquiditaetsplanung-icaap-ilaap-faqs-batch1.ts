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
    console.log('Updating CRR/CRD Kapital- und Liquiditätsplanung (ICAAP/ILAAP) page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-kapital-liquiditaetsplanung-icaap-ilaap' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-kapital-liquiditaetsplanung-icaap-ilaap" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie unterscheiden sich die aufsichtsrechtlichen Anforderungen an ICAAP und ILAAP und wie können Finanzinstitute beide Prozesse optimal integrieren?",
        answer: "ICAAP (Internal Capital Adequacy Assessment Process) und ILAAP (Internal Liquidity Adequacy Assessment Process) stellen komplementäre Säulen im aufsichtsrechtlichen Rahmenwerk dar, die trotz ihrer konzeptionellen Unterschiede zahlreiche Synergien bieten. Eine integrative Betrachtung ermöglicht nicht nur regulatorische Effizienz, sondern schafft auch einen ganzheitlichen Steuerungsansatz für Kapital- und Liquiditätsrisiken.\n\n🏛️ Regulatorische Unterschiede zwischen ICAAP und ILAAP:\n• Risikofokus: ICAAP konzentriert sich primär auf die Solvenz und adressiert alle Risikoarten, die das Eigenkapital beeinflussen können (Kredit-, Markt-, operationelle Risiken, etc.). ILAAP hingegen fokussiert auf die Zahlungsfähigkeit und betrachtet Liquiditäts- und Refinanzierungsrisiken über verschiedene Zeithorizonte.\n• Zeithorizonte: ICAAP erfordert typischerweise einen längerfristigen Betrachtungszeitraum (oft 3-5 Jahre), während ILAAP sowohl kurzfristige (intraday bis 30 Tage) als auch mittel- bis langfristige Liquiditätsrisiken (>1 Jahr) adressieren muss.\n• Stress-Szenarien: ICAAP-Stresstests fokussieren auf Kapitalverzehr durch Verluste, während ILAAP-Stresstests auf Liquiditätsabflüsse und die Fähigkeit zur Refinanzierung unter erschwerten Marktbedingungen abzielen.\n• Metriken und Limits: ICAAP basiert primär auf Risikotragfähigkeit und Kapitalquoten, ILAAP nutzt spezifische Liquiditätskennzahlen wie LCR, NSFR und Survival Period-Analysen.\n\n🔄 Integrationsansätze für optimale Synergie:\n• Konsistentes Risk Appetite Framework: Entwicklung eines übergreifenden Risikoappetit-Rahmenwerks, das sowohl Kapital- als auch Liquiditätsrisiken berücksichtigt und deren Wechselwirkungen adressiert.\n• Harmonisierte Governance-Strukturen: Etablierung einheitlicher Governance-Prozesse mit klaren Verantwortlichkeiten, die sowohl ICAAP als auch ILAAP abdecken, ergänzt durch spezialisierte Expertise in den jeweiligen Bereichen.\n• Integrierte Stresstest-Architektur: Aufbau einer kohärenten Stresstesting-Infrastruktur mit konsistenten Szenarien, die sowohl Kapital- als auch Liquiditätsaspekte berücksichtigt und deren Interdependenzen analysiert.\n• Gemeinsame Datenarchitektur: Implementierung einer einheitlichen Datenbasis, die für beide Prozesse genutzt wird und eine konsistente Grundlage für alle regulatorischen und internen Berechnungen bietet.\n\n💼 Strategische Erfolgsfaktoren für die Integration:\n• Verzahnung von Treasury und Risikomanagement: Enge Zusammenarbeit dieser Schlüsselfunktionen zur Sicherstellung einer ganzheitlichen Betrachtung von Kapital- und Liquiditätsrisiken.\n• Integrierte Planungs- und Allokationsprozesse: Entwicklung konsistenter Planungs- und Allokationsmechanismen für Kapital und Liquidität, die deren Wechselwirkungen berücksichtigen.\n• Ganzheitliches Limitmanagement: Etablierung eines übergreifenden Limitsystems, das Kapital- und Liquiditätslimits in Einklang bringt und deren Interdependenzen adressiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Best Practices für ICAAP-Stresstests empfiehlt ADVISORI und wie können die Ergebnisse strategisch für die Geschäftssteuerung genutzt werden?",
        answer: "Ein fortschrittliches ICAAP-Stresstesting-Framework geht weit über die regulatorische Compliance hinaus und etabliert sich als strategisches Instrument für fundierte Geschäftsentscheidungen und proaktives Risikomanagement. ADVISORI fördert einen holistischen Ansatz, der quantitative Rigorosität mit qualitativer Geschäftsrelevanz verbindet und die Perspektiven verschiedener Stakeholder integriert.\n\n🔬 Methodische Excellence im ICAAP-Stresstesting:\n• Multi-Layer-Szenarioarchitektur: Entwicklung einer gestaffelten Szenarioarchitektur mit makroökonomischen Szenarien als Basis, die durch portfoliospezifische Stressfaktoren und idiosynkratische Ereignisse ergänzt werden.\n• Reverse Stresstests: Implementation von Reverse-Engineering-Ansätzen, die kritische Szenarien identifizieren, welche die Kapitalposition des Instituts bis zu einem definierten Schwellenwert belasten würden.\n• Dynamische Bilanzmodellierung: Überwindung statischer Bilanzannahmen durch dynamische Modelle, die Managementreaktionen, Bilanzentwicklung und Zeitreiheneffekte über mehrere Jahre abbilden.\n• Korrelationsanalysen unter Stress: Berücksichtigung veränderlicher Korrelationen zwischen Risikofaktoren in Stressperioden, die konventionelle historische Muster überschreiten können.\n\n📊 Prozessuale Best Practices für nachhaltigen Mehrwert:\n• Iterativer Challenge-Prozess: Etablierung eines strukturierten Validierungsprozesses mit multiplen Challenge-Runden, die Modelle, Annahmen und Ergebnisse kritisch hinterfragen und kontinuierlich verbessern.\n• Cross-funktionale Szenario-Workshops: Durchführung interdisziplinärer Workshops mit Experten aus Risikomanagement, Treasury, Business und Economics zur Entwicklung plausibler und relevanter Szenarien.\n• Automatisierte Stresstesting-Plattform: Implementation einer flexiblen technologischen Plattform, die schnelle What-if-Analysen ermöglicht und die Durchführung von Ad-hoc-Stresstests vereinfacht.\n• Audittrail und Dokumentation: Implementierung eines lückenlosen Dokumentationssystems, das alle Annahmen, Methodenentscheidungen und Modellanpassungen nachvollziehbar festhält.\n\n🧠 Strategische Anwendungen für Geschäftsentscheidungen:\n• Kapitalallokation und Limitfestlegung: Nutzung von Stresstest-Ergebnissen zur risikobasierten Kapitalallokation auf Geschäftsbereiche und zur Kalibrierung differenzierter Limitsysteme.\n• Produktentwicklung und Pricing: Integration von Stresstest-Erkenntnissen in Produktentwicklungsprozesse und risikoadjustierte Preismodelle.\n• Strategische Akquisitions- und Desinvestitionsentscheidungen: Bewertung potenzieller M&A-Aktivitäten hinsichtlich ihrer Auswirkungen auf die Stressresilienz des Gesamtinstituts.\n• Executive Dashboards für Entscheidungsträger: Entwicklung aussagekräftiger Visualisierungen und Kennzahlen, die Stresstest-Ergebnisse in entscheidungsrelevante Informationen für die Geschäftsleitung transformieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Banken einen risikosensitiven Kapitalallokationsprozess im Rahmen des ICAAP etablieren, der regulatorische Anforderungen erfüllt und gleichzeitig Wertschöpfung maximiert?",
        answer: "Eine strategische Kapitalallokation repräsentiert die Schnittstelle zwischen regulatorischer Compliance und wertorientierter Unternehmenssteuerung. Sie transformiert abstrakte Kapitalanforderungen in konkrete Steuerungsimpulse und schafft die Grundlage für eine risikoadäquate Ressourcenverteilung, die sowohl aufsichtsrechtliche Vorgaben erfüllt als auch die Wertschöpfung des Instituts maximiert.\n\n🎯 Grundprinzipien einer effektiven Kapitalallokation:\n• Risikosensitivität: Berücksichtigung des differenzierten Risikoprofils verschiedener Geschäftssegmente, Produkte und Kundengruppen bei der Kapitalzuweisung.\n• Anreizkonsistenz: Etablierung von Anreizstrukturen, die risikobewusste Entscheidungen auf allen Ebenen fördern und mit der Risikostrategie des Gesamtinstituts in Einklang stehen.\n• Methodische Robustheit: Verwendung statistisch fundierter Methoden zur Risikomessung unter Berücksichtigung von Korrelationen, Konzentrationen und Tail-Risiken.\n• Steuerungsrelevanz: Integration der Kapitalallokation in zentrale Management-Prozesse wie strategische Planung, Budgetierung und Performancemessung.\n\n⚙️ Methodische Komponenten eines fortschrittlichen Allokationsrahmens:\n• Dual-Perspektiv-Ansatz: Parallele Betrachtung regulatorischer (CRR/CRD) und ökonomischer Kapitalanforderungen mit klarem Mapping zwischen beiden Perspektiven.\n• Granulare Risikotreiber-Analyse: Identifikation und Messung spezifischer Risikotreiber auf Geschäftsfeld- und Portfolioebene als Basis für eine differenzierte Kapitalzuweisung.\n• Top-down/Bottom-up-Abstimmung: Rekursiver Prozess zur Harmonisierung von Top-down-Kapitalzielen mit Bottom-up-Kapitalbedarfen der Geschäftsbereiche.\n• Dynamische Allokationsmechanismen: Implementierung flexibler Allokationsmechanismen, die auf Veränderungen im Geschäftsumfeld, Risikoprofil oder regulatorischen Umfeld reagieren können.\n\n📈 Implementierungsschritte für wertorientierte Kapitalallokation:\n• Entwicklung eines klaren Kapitalallokationskonzepts: Definition des methodischen Rahmens, der Governance-Strukturen und der technischen Implementierung.\n• Aufbau einer granularen Dateninfrastruktur: Etablierung einer konsistenten Datenbasis, die alle relevanten Risiko- und Performanceparameter auf adäquater Granularitätsebene abbildet.\n• Integration in Performancemessung: Implementierung risikoadjustierter Performancekennzahlen (RAROC, EVA, etc.) auf Basis der allozierten Kapitalbeträge.\n• Etablierung transparenter Governance-Prozesse: Klare Definition von Rollen und Verantwortlichkeiten im Kapitalallokationsprozess mit adäquaten Eskalations- und Entscheidungswegen.\n\n🚀 Strategische Hebel zur Wertsteigerung durch Kapitalallokation:\n• Portfolio-Optimierung: Identifikation von Geschäftsfeldern mit suboptimalem Risiko-Rendite-Verhältnis und Entwicklung gezielter Optimierungsmaßnahmen.\n• Risikoadjustierte Preismodelle: Entwicklung von Pricing-Frameworks, die Kapitalkosten explizit berücksichtigen und risikoadäquate Margen sicherstellen.\n• Strategische Ressourcenallokation: Fokussierung von Wachstumsinvestitionen auf kapitaleffiziente Geschäftsfelder mit überdurchschnittlichem Wertschöpfungspotenzial."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche technologischen Lösungen empfiehlt ADVISORI für eine effiziente ILAAP-Implementierung, und wie können diese mit bestehenden Risikomanagement-Systemen integriert werden?",
        answer: "Die Technologiedimension spielt eine entscheidende Rolle für die Effizienz und Effektivität des ILAAP-Prozesses. Moderne technologische Lösungen ermöglichen nicht nur eine zuverlässige Erfüllung regulatorischer Anforderungen, sondern schaffen auch strategischen Mehrwert durch Echtzeitanalysen, automatisierte Workflows und datengestützte Prognosen. ADVISORI verfolgt einen integrativen Technologieansatz, der bestehende Systeme optimal nutzt und gezielt durch innovative Komponenten ergänzt.\n\n💻 Kerntechnologien für eine zukunftssichere ILAAP-Architektur:\n• Cash Flow Engine mit granularer Modellierung: Implementierung einer präzisen Cash-Flow-Modellierungsplattform, die kontraktuelle und verhaltensbezogene Cash Flows auf Einzelgeschäftsebene abbildet und verschiedene Verhaltensannahmen flexibel modellieren kann.\n• Dynamische Liquiditätssimulation: Einsatz fortschrittlicher Simulationstechnologien, die Liquiditätsentwicklungen unter verschiedensten Szenarien über multiple Zeithorizonte projizieren können.\n• Real-time Liquiditätsüberwachung: Implementation von Echtzeit-Monitoring-Systemen, die kontinuierlich die aktuelle Liquiditätsposition überwachen und bei Annäherung an kritische Schwellenwerte automatisierte Alerts auslösen.\n• Integrierte Stress-Testing-Plattform: Etablierung einer flexiblen Stresstesting-Umgebung, die historische, hypothetische und reverse Stressszenarien effizient modellieren und deren Auswirkungen analysieren kann.\n\n🔄 Integrationsstrategien für bestehende Systemlandschaften:\n• API-basierte Middleware-Architektur: Implementierung einer flexiblen API-Schicht, die verschiedene Datenquellen und Systeme nahtlos verbindet und eine konsistente Datenbasis für ILAAP-Prozesse schafft.\n• Data Lake Konzept für Liquiditätsmanagement: Etablierung einer zentralen Datenplattform, die strukturierte und unstrukturierte Daten aus verschiedenen Quellen integriert und für ILAAP-Analysen zugänglich macht.\n• Modularisierung bestehender Systeme: Aufbrechen monolithischer Altsysteme in flexiblere Module, die gezielt erweitert oder ausgetauscht werden können, ohne die Gesamtarchitektur zu kompromittieren.\n• Gradueller Transformationsansatz: Schrittweise Modernisierung der Systemlandschaft mit klarer Priorisierung von Komponenten mit hohem regulatorischen Risiko oder signifikantem Effizienzpotenzial.\n\n📱 Innovative Technologieansätze für fortschrittliches Liquiditätsmanagement:\n• Machine Learning für Verhaltensmodellierung: Einsatz von KI-Algorithmen zur präziseren Modellierung von Kundenverhalten unter verschiedenen Marktbedingungen, insbesondere für nicht-kontraktuelle Produkte wie Sichteinlagen oder Kreditlinien.\n• Predictive Analytics für Frühwarnindikatoren: Nutzung prädiktiver Analyseverfahren zur Identifikation frühzeitiger Signale für potenzielle Liquiditätsengpässe.\n• Natural Language Processing für regulatorisches Scanning: Automatisierte Analyse regulatorischer Publikationen und Leitlinien zur frühzeitigen Erkennung relevanter Änderungen für den ILAAP-Prozess.\n• Distributed Ledger Technology für Intraday Liquidity: Exploration von Blockchain-basierten Lösungen für ein präziseres und effizienteres Management der Intraday-Liquidität."
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
