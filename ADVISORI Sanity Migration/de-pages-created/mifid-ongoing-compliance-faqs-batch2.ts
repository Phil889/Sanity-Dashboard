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
    console.log('Updating MiFID Ongoing Compliance page with Business FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-ongoing-compliance" not found')
    }
    
    // Create new Business FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Welche technologischen Innovationen setzt ADVISORI ein, um die kontinuierliche MiFID-Compliance zu automatisieren und welche Effizienzgewinne ergeben sich daraus?",
        answer: "Die komplexen und sich stetig weiterentwickelnden MiFID-Anforderungen erfordern eine grundlegend neue technologische Herangehensweise, die weit über manuelle Prozesse und isolierte Compliance-Tools hinausgeht. ADVISORI integriert Spitzentechnologien in einem ganzheitlichen MiFID-Compliance-Tech-Stack, der nicht nur Compliance-Prozesse automatisiert, sondern auch deren strategische Wertschöpfung maximiert.\n\n🔧 Unsere technologischen MiFID-Innovationen:\n• Intelligent Suitability Engine: KI-gestützte Plattform zur automatisierten Bewertung der Angemessenheit und Geeignetheit von Finanzinstrumenten für individuelle Kundenprofile, die Beratungsqualität und Compliance-Sicherheit gleichermaßen erhöht – mit Reduktion manueller Prüfungen um bis zu 85%.\n• Regulatory Pattern Recognition: Fortschrittliche NLP-Algorithmen (Natural Language Processing), die neue ESMA- und BaFin-Publikationen analysieren, interpretieren und deren Implikationen für bestehende Prozesse automatisch identifizieren – mit einer Genauigkeitsrate von über 92% bei der Erkennung compliance-relevanter Änderungen.\n• MiFID Process Automation Suite: Integrierte Prozessautomatisierungslösung für den gesamten MiFID-Lebenszyklus, von Produktgenehmigungsprozessen über Zielmarktdefinitionen bis zur Kostentransparenz-Dokumentation – mit einer durchschnittlichen Prozessbeschleunigung von 60-70%.\n• Real-time Compliance Monitoring Dashboard: Echtzeit-Überwachungssystem für MiFID-relevante KPIs, das potenzielle Compliance-Lücken proaktiv identifiziert und automatisierte Alerts generiert – mit einer Früherkennungsrate von bis zu 95% für potenzielle Compliance-Verstöße.\n\n📈 Resultierende Effizienzgewinne:\n• Zeitersparnis: Reduktion des manuellen Aufwands für MiFID-Compliance-Prozesse um 65-75%, was jährlich tausende Arbeitsstunden im Vertriebs- und Compliance-Bereich freisetzt und die Kapazität für wertschöpfende Kundeninteraktionen erhöht.\n• Fehlerreduktion: Verringerung menschlicher Fehler in Beratungsprozessen und Produktfreigabeverfahren um 80-90%, was sowohl die Compliance-Sicherheit als auch die Beratungsqualität signifikant verbessert.\n• Skalierbarkeit: Nahtlose Skalierung der MiFID-Compliance-Prozesse bei wachsendem Produktportfolio oder steigenden Kundenzahlen ohne proportional ansteigende Personalkosten – typischerweise können Wachstumsraten von 25-30% ohne zusätzliche Compliance-Ressourcen absorbiert werden.\n• Analytische Einsichten: Generierung umfassender Datenanalysen zur Vertriebsperformance, Produkteignung und Kundensegmentierung, die nicht nur Compliance-Zwecken dienen, sondern auch strategische Geschäftsentscheidungen im Wertpapiergeschäft fundieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie unterstützt ADVISORI Finanzinstitute bei der Bewältigung der spezifischen Herausforderungen im Bereich der MiFID-Produktgenehmigungsprozesse und Zielmarktdefinitionen?",
        answer: "Die MiFID-Anforderungen an Produktgenehmigungsprozesse (Product Governance) und Zielmarktdefinitionen stellen eine besondere Herausforderung dar, da sie komplexe Schnittstellen zwischen Produktentwicklung, Vertrieb und Compliance erfordern. ADVISORI hat einen spezialisierten Ansatz entwickelt, der diese Anforderungen nicht als regulatorische Last, sondern als Chance zur Optimierung des Produktportfolios und der Vertriebseffizienz nutzt.\n\n🔍 Unsere Expertise bei MiFID-Produktgovernance:\n• Ganzheitliche Prozessoptimierung: Entwicklung integrierter Produktgenehmigungsverfahren, die regulatorische Anforderungen mit Geschäftszielen harmonisieren und den gesamten Produktlebenszyklus abdecken – von der Konzeption über die Markteinführung bis zum Monitoring und potenziellen Produktrückzug.\n• Datengestützte Zielmarktmodellierung: Implementation fortschrittlicher Datenanalyse-Methoden zur präzisen Definition und kontinuierlichen Validierung von Produktzielmärkten, die sowohl regulatorische Anforderungen erfüllen als auch Vertriebschancen maximieren – mit nachweislich 35-45% höherer Treffsicherheit bei der Kundenansprache.\n• Automatisierte Kompatibilitätsprüfung: Entwicklung intelligenter Systeme für den automatisierten Abgleich zwischen Kundenmerkmalen und Zielmarktdefinitionen, die sowohl Vertriebsmitarbeiter unterstützen als auch Compliance-Risiken minimieren – mit einer Reduktion von Fehlplatzierungen um bis zu 70%.\n• Evidenzbasiertes Monitoring: Etablierung systematischer Prozesse zur kontinuierlichen Überwachung der Produktperformance und Zielmarktvalidierung, die fundierte Anpassungen ermöglichen und regulatorische Nachweispflichten erfüllen.\n\n💡 Konkrete Unterstützungsleistungen:\n• Assessment & Roadmap: Umfassende Analyse bestehender Produktgenehmigungsprozesse und Zielmarktdefinitionen mit Identifikation von Optimierungspotenzialen und Entwicklung einer strukturierten Transformations-Roadmap.\n• Prozessdesign & Implementation: Konzeption und Implementierung optimierter Produktgovernance-Prozesse und -Tools, die regulatorische Anforderungen nahtlos in bestehende Geschäftsprozesse integrieren.\n• Technologische Enabler: Bereitstellung und Integration spezialisierter Technologielösungen für automatisierte Zielmarktabgleiche, Produktmonitoring und regulatorisches Reporting.\n• Wissenstransfer & Schulung: Maßgeschneiderte Schulungsprogramme für Produktmanager, Vertriebsmitarbeiter und Compliance-Spezialisten, die tiefgreifendes Verständnis der regulatorischen Anforderungen mit praktischer Anwendungskompetenz verbinden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Welche Best Practices empfiehlt ADVISORI für die effektive Integration von MiFID-Transparenzanforderungen in bestehende Kundenberatungs- und Reporting-Prozesse?",
        answer: "Die umfangreichen MiFID-Transparenzanforderungen zu Kosten, Gebühren und Anreizen stellen viele Institute vor die Herausforderung, regulatorische Compliance mit positiver Kundenerfahrung zu vereinen. Basierend auf unserer Erfahrung aus zahlreichen erfolgreichen Implementierungsprojekten hat ADVISORI einen Best-Practice-Katalog entwickelt, der Transparenzanforderungen von einer regulatorischen Pflichtübung zu einem strategischen Differenzierungsmerkmal transformiert.\n\n📋 Best Practices für MiFID-Transparenzintegration:\n• Customer Experience Design: Konzeption von Transparenzinformationen nach Customer-Experience-Prinzipien, die regulatorische Anforderungen nicht nur formal erfüllen, sondern durch Visualisierung, Layering und kontextsensitive Präsentation echten Kundenmehrwert schaffen – mit nachweislicher Steigerung der Kundenzufriedenheit um 20-30%.\n• Omnichannel-Konsistenz: Sicherstellung konsistenter Transparenzinformationen über alle Kundenkanäle (persönliche Beratung, Online-Banking, Mobile Apps, Dokumentation), die ein einheitliches Kundenerlebnis gewährleisten und regulatorische Risiken minimieren.\n• Automatisierte Kostenaggregation: Implementation intelligenter Systeme zur automatisierten Erfassung, Berechnung und Aggregation aller relevanten Kosteninformationen aus verschiedenen Produktsystemen, die manuelle Fehler eliminieren und die Aktualität der Informationen sicherstellen.\n• Kontextualisierte Beratungsintegration: Entwicklung von Beratungsleitfäden und -tools, die Transparenzinformationen nicht isoliert präsentieren, sondern in den Kontext von Kundennutzen, Risiko-Rendite-Profil und Anlagealternativen stellen.\n\n🛠️ Implementierungsempfehlungen:\n• Prozessintegrierter Ansatz: Integration von Transparenzanforderungen in den natürlichen Fluss der Kundenberatung und Produktpräsentation anstelle isolierter Compliance-Checkpoints, was sowohl die Kundenakzeptanz als auch die Beratereffizienz steigert.\n• Digitalisierte Lösungen: Nutzung digitaler Plattformen für interaktive, personalisierte Kostendarstellungen, die komplexe Informationen verständlich visualisieren und gleichzeitig lückenlose Dokumentation gewährleisten.\n• Data Governance Framework: Etablierung eines robusten Data-Governance-Modells für Kosteninformationen, das Datenqualität, -aktualität und -konsistenz über alle Systeme und Kanäle hinweg sicherstellt.\n• Change Management Excellence: Implementation eines umfassenden Change-Management-Ansatzes, der Berater nicht nur technisch befähigt, sondern sie auch motiviert, Transparenzinformationen als Vertrauensanker und Beratungschance zu nutzen – typischerweise resultierend in 40-50% höherer Akzeptanz bei Beratern und Kunden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie gestaltet ADVISORI die Compliance-Schulungs- und Bewusstseinsprogramme für MiFID-Anforderungen, um nachhaltige Verhaltensänderungen bei Vertriebsmitarbeitern zu erreichen?",
        answer: "Selbst die ausgereiftesten MiFID-Compliance-Prozesse und -Systeme können nur dann nachhaltig wirksam sein, wenn die Mitarbeiter – insbesondere in kundennahen Funktionen – die regulatorischen Anforderungen verinnerlichen und in ihrem täglichen Handeln umsetzen. ADVISORI hat einen transformativen Ansatz für MiFID-Awareness- und Schulungsprogramme entwickelt, der über traditionelle Compliance-Trainings hinausgeht und tiefgreifende, nachhaltige Verhaltensänderungen bewirkt.\n\n🎓 Innovatives MiFID-Schulungsdesign:\n• Behavioral Science Approach: Integration verhaltensökonomischer Erkenntnisse in die Gestaltung von Schulungsinhalten und -formaten, die intrinsische Motivation fördern und unbewusste Verhaltensmuster adressieren – mit nachweislich 3-4 mal höherer Umsetzungsrate im Vergleich zu traditionellen Schulungen.\n• Adaptive Learning Pathways: Entwicklung personalisierter, rollenspezifischer Lernpfade, die sich automatisch an das Vorwissen, die Lerngeschwindigkeit und den Anwendungskontext des einzelnen Mitarbeiters anpassen und kontinuierlich optimiert werden.\n• Microlearning & Just-in-Time-Support: Implementation eines Systems aus kurzen, fokussierten Lerneinheiten und kontextsensitiven Unterstützungstools, die genau dann verfügbar sind, wenn Mitarbeiter sie im Kundenberatungsprozess benötigen – mit einer Reduktion von Anwendungsfehlern um 60-70%.\n• Immersive Simulation Techniques: Einsatz fortschrittlicher Simulationstechnologien, die realistische Beratungssituationen und komplexe MiFID-Compliance-Szenarien erlebbar machen und praktisches Handlungswissen statt theoretischem Regelwissen vermitteln.\n\n🌱 Kulturveränderungselemente:\n• Purpose-driven Messaging: Entwicklung einer Kommunikationsstrategie, die den tieferen Sinn der MiFID-Anforderungen (Anlegerschutz, Marktintegrität, Vertrauensbildung) in den Vordergrund stellt und damit persönliche Identifikation statt bloßer Regelbefolgung fördert.\n• Peer Learning Networks: Etablierung strukturierter Peer-Learning-Formate, die erfolgreiche Umsetzungspraktiken sichtbar machen, kollegialen Austausch fördern und positive soziale Dynamiken für die MiFID-Compliance schaffen.\n• Leadership as Multipliers: Spezielle Programme für Führungskräfte, die diese befähigen, als authentische Vorbilder und Multiplikatoren für MiFID-konforme Beratungspraktiken zu wirken und die notwendige Priorisierung im Tagesgeschäft sicherzustellen.\n• Continuous Reinforcement System: Implementation eines systematischen Verstärkungsmechanismus mit regelmäßigem Feedback, Erfolgsanerkennung und gezielten Auffrischungsimpulsen, der langfristige Verhaltensänderungen stabilisiert und einer schleichenden Rückkehr zu alten Mustern vorbeugt."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Business FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Business FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
