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
    console.log('Updating FRTB page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie koordinieren wir die FRTB-Implementierung mit anderen regulatorischen Initiativen und wie hilft ADVISORI dabei, Synergien zu maximieren?",
        answer: "Die parallele Implementierung mehrerer regulatorischer Initiativen stellt eine erhebliche Management-Herausforderung dar, bietet aber auch bedeutende Synergiepotenziale. Für die C-Suite ist ein strategischer, koordinierter Ansatz entscheidend, um Ressourceneffizienz zu maximieren und konsistente Lösungen zu entwickeln.\n\n🔄 Synergiepotenziale mit anderen Regulierungsinitiativen:\n• BCBS 239 und Risikodatenaggregation: Die FRTB-Datenanforderungen überschneiden sich erheblich mit BCBS 239-Prinzipien zur Risikodatenaggregation und -berichterstattung, was eine integrierte Datenarchitektur ermöglicht.\n• SA-CCR und andere Marktrisikoregelungen: Methodische und datentechnische Überschneidungen zwischen FRTB und anderen Marktrisikoregelungen wie SA-CCR und CVA-Risikoanforderungen ermöglichen koordinierte Implementierungsansätze.\n• Basel IV / CRR III: Die breiteren Basel IV / CRR III-Reformen, die FRTB beinhalten, erfordern eine ganzheitliche Betrachtung der Kapitalauswirkungen und Implementierungsstrategien.\n• ESG-Risikomanagement: Zunehmende regulatorische Anforderungen an das Management von ESG-Risiken bieten Integrationsmöglichkeiten mit der FRTB-Infrastruktur, insbesondere im Bereich der Szenarioanalyse und Stresstests.\n\n📋 Strategische Koordinationsansätze:\n• Integrierte Regulierungsroadmap: Entwicklung einer umfassenden Roadmap, die alle relevanten regulatorischen Initiativen umfasst, deren Abhängigkeiten identifiziert und eine optimale Sequenzierung ermöglicht.\n• Gemeinsame Governance-Strukturen: Etablierung übergreifender Governance-Mechanismen für regulatorische Programme, die Konsistenz sicherstellen und Redundanzen vermeiden.\n• Technologische Plattformstrategie: Implementierung einer flexiblen, modularen Technologiearchitektur, die verschiedene regulatorische Anforderungen unterstützt und eine zukunftssichere Basis für kommende Regelungen bietet.\n• Zentralisiertes Datenmanagement: Aufbau einer einheitlichen Datenstrategie und -infrastruktur, die als Single Source of Truth für verschiedene regulatorische Berechnungen und Reports dient.\n\n🛠️ ADVISORI's ganzheitlicher Koordinationsansatz:\n• Regulatorische Impactanalyse: Umfassende Bewertung der Wechselwirkungen zwischen FRTB und anderen Regulierungen, Identifikation von Abhängigkeiten und Optimierungspotenzialen.\n• Integriertes Programm-Management: Unterstützung bei der Etablierung eines koordinierten Programm-Management-Offices, das verschiedene regulatorische Projekte orchestriert und Synergien realisiert.\n• Expertise-Netzwerk: Zugang zu unserem spezialisierten Expertennetzwerk, das tiefes Wissen zu verschiedenen Regulierungsbereichen und deren Interdependenzen bietet.\n• Ganzheitliche Lösungsarchitektur: Entwicklung einer integrierten Zielarchitektur, die verschiedene regulatorische Anforderungen effizient und konsistent adressiert und gleichzeitig Flexibilität für zukünftige Anforderungen bietet."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche kritischen Erfolgsfaktoren müssen wir bei der FRTB-Implementierung beachten und wie unterstützt ADVISORI unser Management-Team bei der Überwindung typischer Hindernisse?",
        answer: "Die erfolgreiche Implementierung der FRTB-Anforderungen erfordert mehr als nur technisches Know-how – sie verlangt ein strategisches Management komplexer organisatorischer, technologischer und kultureller Herausforderungen. Für die C-Suite ist das Verständnis der kritischen Erfolgsfaktoren und potenziellen Hindernisse entscheidend, um eine reibungslose und wertschöpfende Umsetzung zu gewährleisten.\n\n🔑 Kritische Erfolgsfaktoren für die FRTB-Implementierung:\n• C-Level Sponsorship und strategische Ausrichtung: Aktive Unterstützung und klare strategische Vorgaben durch die oberste Führungsebene, die FRTB nicht als reine Compliance-Übung, sondern als strategische Transformation positioniert.\n• Cross-funktionale Koordination: Effektive Zusammenarbeit zwischen Handel, Risikomanagement, IT, Finance und Compliance, um konsistente Lösungen zu entwickeln und Silodenken zu überwinden.\n• Robuste Dateninfrastruktur: Etablierung einer leistungsfähigen, flexiblen Datenarchitektur, die die strengen Qualitäts- und Granularitätsanforderungen von FRTB erfüllt und skalierbar für zukünftige Anforderungen ist.\n• Frühzeitiges regulatorisches Engagement: Proaktiver Dialog mit Aufsichtsbehörden, um deren Erwartungen zu verstehen und mögliche Interpretationsspielräume zu klären, insbesondere bei komplexen Modellierungsaspekten.\n\n🚧 Typische Implementierungshindernisse und ihre Überwindung:\n• Ressourcen- und Kompetenzengpässe: Die Komplexität von FRTB erfordert spezialisiertes Know-how, das am Markt begrenzt verfügbar ist, und konkurriert oft mit anderen strategischen Initiativen um Ressourcen.\n• Datenverfügbarkeit und -qualität: Unzureichende historische Daten, insbesondere für Non-Modellable Risk Factors (NMRFs), können die Modellfähigkeit erheblich einschränken und Kapitalanforderungen erhöhen.\n• Systembeschränkungen und Performance-Herausforderungen: Bestehende Risikosysteme sind oft nicht für die rechenintensiven FRTB-Anforderungen ausgelegt, was umfassende Upgrades oder Neuimplementierungen erfordert.\n• Kultureller Widerstand und Veränderungsmanagement: Die tiefgreifenden Änderungen in Prozessen, Systemen und Verantwortlichkeiten können auf organisatorischen Widerstand stoßen und erfordern ein umfassendes Change Management.\n\n🔍 ADVISORI's Management-Support-Ansatz:\n• Executive Advisory Services: Strategische Beratung für die C-Suite zur Positionierung von FRTB im breiteren Kontext der Unternehmenstransformation und zur Sicherstellung der richtigen Priorisierung und Ressourcenallokation.\n• Change Acceleration Program: Strukturierter Ansatz zur Überwindung von Implementierungshürden durch fokussierte Interventionen, beschleunigte Entscheidungsfindung und gezielte Unterstützung bei kritischen Engpässen.\n• Expertise-Injection: Flexible Bereitstellung spezialisierter Fachkräfte für kritische Projektphasen oder -komponenten, um Kompetenzlücken zu schließen und Wissenstransfer zu fördern.\n• Leadership Coaching: Unterstützung von Führungskräften bei der effektiven Steuerung komplexer regulatorischer Programme und der Entwicklung der notwendigen Führungskompetenzen für transformative Initiativen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie gestalten wir eine Datenarchitektur, die sowohl FRTB-Anforderungen erfüllt als auch zukunftssicher für weitere regulatorische Entwicklungen ist?",
        answer: "Eine robuste, zukunftsorientierte Datenarchitektur ist das Fundament für eine erfolgreiche FRTB-Implementierung und eine strategische Investition in die langfristige regulatorische Compliance. Für die C-Suite bedeutet dies, über die unmittelbaren FRTB-Anforderungen hinauszudenken und eine Dateninfrastruktur zu etablieren, die flexibel auf zukünftige regulatorische Veränderungen reagieren kann.\n\n📊 Kernelemente einer FRTB-optimierten Datenarchitektur:\n• Zentrale Marktdaten-Plattform: Etablierung eines einheitlichen Repositories für Marktdaten mit robusten Qualitätskontrollen, umfassender Historisierung und granularer Metadaten-Annotation, um die strengen FRTB-Anforderungen an Datenqualität und -verfügbarkeit zu erfüllen.\n• Flexible Datenmodellierung: Implementierung eines adaptiven Datenmodells, das sowohl die spezifischen FRTB-Anforderungen abdeckt als auch flexibel für künftige regulatorische Änderungen erweitert werden kann.\n• End-to-End-Datenliniage: Durchgängige Nachverfolgbarkeit und Dokumentation des Datenflusses von der Quelle bis zum regulatorischen Report, um Transparenz zu gewährleisten und Audit-Anforderungen zu erfüllen.\n• Performante Berechnungsinfrastruktur: Skalierbare Architektur für rechenintensive FRTB-Kalkulationen, die sowohl On-Premise- als auch Cloud-basierte Ressourcen effizient nutzen kann.\n\n🔮 Zukunftssicherheit und Skalierbarkeit:\n• Modulare Architektur: Aufbau einer komponenten-basierten Architektur, die es ermöglicht, einzelne Elemente zu aktualisieren oder zu ersetzen, ohne das Gesamtsystem zu beeinträchtigen.\n• API-first-Strategie: Implementierung standardisierter Schnittstellen, die eine flexible Integration neuer Datenquellen, Modelle oder regulatorischer Module ermöglichen.\n• Cloud-Readiness: Vorbereitung auf Cloud-Migration oder hybride Architekturen, um Skalierbarkeit, Flexibilität und Kosteneffizienz zu verbessern, insbesondere für rechenintensive FRTB-Prozesse.\n• Machine Learning-Kapazitäten: Integration von Infrastruktur für fortschrittliche Analysen und ML-Modelle, die für Datenqualitätsverbesserung, Proxying und Optimierung eingesetzt werden können.\n\n💡 ADVISORI's Datenarchitektur-Ansatz:\n• Ganzheitliche Datenbedarfsanalyse: Umfassende Bewertung Ihrer aktuellen Datenlandschaft und Identifikation von Lücken hinsichtlich FRTB und potenzieller zukünftiger Anforderungen.\n• Target-Architektur-Design: Entwicklung einer detaillierten Zielarchitektur, die sowohl Ihre spezifischen Geschäftsanforderungen als auch regulatorische Vorgaben berücksichtigt und klare Migrationspfade definiert.\n• Vendor-Evaluierung und Integration: Unterstützung bei der Auswahl und Integration von Technologiepartnern und spezialisierten Lösungen, die optimal in Ihre Gesamtarchitektur passen.\n• Daten-Governance-Framework: Etablierung robuster Governance-Strukturen und -Prozesse für das kontinuierliche Management von Datenqualität, Metadaten und regulatorischen Änderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Phasen und Meilensteine umfasst ein typisches FRTB-Implementierungsprojekt und wie strukturiert ADVISORI den Umsetzungsprozess?",
        answer: "Die Implementierung der FRTB-Anforderungen ist ein komplexes, mehrjähriges Unterfangen, das einen strukturierten, phasenweisen Ansatz erfordert. Für die C-Suite ist ein klares Verständnis der Projektphasen, Meilensteine und kritischen Pfade entscheidend, um die richtige Governance, Ressourcenallokation und strategische Ausrichtung sicherzustellen.\n\n📋 Typische Phasen eines FRTB-Implementierungsprojekts:\n• Phase 1: Strategische Planung und Impact-Analyse (3-6 Monate)\n  - Detaillierte Auswirkungsanalyse auf Kapital, Geschäftsmodell und IT-Infrastruktur\n  - Entwicklung der übergreifenden Implementierungsstrategie und Business Case\n  - Definition der Zielarchitektur und des Betriebsmodells\n  - Grundlegende Entscheidungen zu SA vs. IMA-Ansatz auf Desk-Ebene\n\n• Phase 2: Design und Vorbereitungsphase (6-9 Monate)\n  - Detaillierte Anforderungsanalyse und Lösungsdesign\n  - Datenanalyse und Datenbeschaffungsstrategie, insbesondere für historische Zeitreihen\n  - Definition von Handelsbuch-Bankbuch-Grenzen und Trading Desk-Strukturen\n  - Vorbereitung der IT-Infrastruktur und Vendor-Auswahl\n\n• Phase 3: Implementierung des Standardansatzes (SA) (9-12 Monate)\n  - Umsetzung der SA-Berechnungsmethodik und -Prozesse\n  - Implementierung der Datenflüsse und Reporting-Infrastruktur\n  - Testphase und Validierung der SA-Ergebnisse\n  - Parallel Run und Vergleich mit aktuellen Kapitalanforderungen\n\n• Phase 4: IMA-Vorbereitung und -Implementierung (falls anwendbar) (12-18 Monate)\n  - Entwicklung und Kalibrierung der internen Modelle\n  - Aufbau der P&L-Attribution-Test-Infrastruktur\n  - Implementierung des NMRF-Frameworks\n  - Vorbereitung und Einreichung des Modellgenehmigungsantrags\n\n• Phase 5: Transition und Optimierung (fortlaufend)\n  - Kontinuierliche Verbesserung der Modelle und Prozesse\n  - Anpassung an regulatorische Interpretationen und Marktstandards\n  - Kapital- und Geschäftsoptimierung basierend auf gewonnenen Erkenntnissen\n  - Integration in die strategische Planung und das Risikomanagement\n\n🔄 ADVISORI's strukturierter Implementierungsansatz:\n• Modularer Projektaufbau: Organisation des Gesamtprojekts in klar definierte, überschaubare Module mit spezifischen Deliverables und Abhängigkeiten, die parallel oder sequentiell umgesetzt werden können.\n• Agiles Delivery-Modell: Kombination aus agilen Methoden für iterative Entwicklungskomponenten und klassischem Projektmanagement für regulatorisch kritische Elemente.\n• Integriertes Stage-Gate-Verfahren: Implementierung klarer Qualitätskontrollpunkte und Entscheidungsgates zwischen den Projektphasen, um Risiken frühzeitig zu identifizieren und zu adressieren.\n• Continuous Value Delivery: Fokus auf die frühzeitige Realisierung von Geschäftswerten durch priorisierte Implementierung von Komponenten mit hohem ROI oder strategischer Relevanz.\n\n🎯 Kritische Meilensteine und Entscheidungspunkte:\n• Strategische Modellentscheidung: Festlegung der grundlegenden Strategie bezüglich SA vs. IMA auf Desk-Ebene basierend auf Kosten-Nutzen-Analyse.\n• Handelsbuch-Definition: Finalisierung und Dokumentation der Handelsbuch-Bankbuch-Grenze mit entsprechenden Governance-Strukturen.\n• SA Go-Live-Bereitschaft: Validierung der SA-Implementierung und Bereitschaft für regulatorisches Reporting.\n• IMA-Antragsstellung: Vorbereitung und Einreichung des formellen Antrags auf Modellgenehmigung bei den Aufsichtsbehörden.\n• Full Compliance: Erreichen der vollständigen FRTB-Compliance und Integration in das BAU-Betriebsmodell."
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
