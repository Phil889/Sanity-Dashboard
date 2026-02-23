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
    console.log('Updating KRITIS Schwachstellenanalyse & Risikobewertung page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-schwachstellenanalyse-risikobewertung' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-schwachstellenanalyse-risikobewertung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie stellt ADVISORI sicher, dass unsere Schwachstellenanalyse die komplexen Interdependenzen zwischen IT- und OT-Systemen in kritischen Infrastrukturen vollständig erfasst?",
        answer: "Die Konvergenz von IT- und OT-Systemen in kritischen Infrastrukturen schafft einzigartige Sicherheitsherausforderungen, die traditionelle Schwachstellenanalysen oft übersehen. ADVISORI verfügt über spezialisierte Expertise in der ganzheitlichen Analyse dieser hybriden Umgebungen und versteht die komplexen Wechselwirkungen zwischen klassischen IT-Systemen und industriellen Steuerungsanlagen.\n\n⚙️ Ganzheitliche IT/OT-Konvergenz-Analyse:\n• Cross-Domain-Asset-Mapping: Vollständige Kartierung aller IT- und OT-Assets mit Dokumentation ihrer Abhängigkeiten und Kommunikationspfade.\n• Protokoll-spezifische Sicherheitsanalyse: Expertise in industriellen Protokollen (Modbus, DNP3, IEC 61850) und deren spezifischen Schwachstellen und Sicherheitsimplikationen.\n• Air-Gap-Analyse: Bewertung der Effektivität von Netzwerksegmentierung und Identifikation unbeabsichtigter Brücken zwischen IT- und OT-Netzwerken.\n• Legacy-System-Integration: Spezielle Berücksichtigung alter industrieller Systeme, die nicht für Cyber-Sicherheit konzipiert wurden, aber kritische Funktionen erfüllen.\n\n🔬 Spezialisierte ADVISORI-Methoden für kritische Infrastrukturen:\n• Operational Impact Assessment: Analyse der potenziellen Auswirkungen von IT-Sicherheitsvorfällen auf kritische betriebliche Prozesse und Servicebereitstellung.\n• Safety-Security-Konvergenz: Integration von Safety- und Security-Aspekten, da Cyber-Angriffe in kritischen Infrastrukturen physische Gefahren verursachen können.\n• Supply-Chain-Resilienz: Bewertung der Sicherheit von Drittanbieter-Komponenten und deren Integration in die Gesamtarchitektur.\n• Incident-Response-Planung: Entwicklung spezifischer Reaktionspläne für Szenarien, in denen IT-Sicherheitsvorfälle betriebliche Kontinuität gefährden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "In welchem Umfang kann ADVISORI die Schwachstellenanalyse mit strategischen Geschäftszielen verknüpfen und welche KPIs demonstrieren den Erfolg unserer Investitionen?",
        answer: "ADVISORI transformiert traditionelle Schwachstellenanalysen von technischen Berichten zu strategischen Business-Intelligence-Tools, die direkt mit Ihren Geschäftszielen verknüpft sind. Wir entwickeln maßgeschneiderte KPI-Frameworks, die den Erfolg Ihrer Sicherheitsinvestitionen messbar und für die C-Suite nachvollziehbar machen.\n\n📊 Strategische KPI-Integration und Geschäftswert-Messung:\n• Business-Impact-Quantifizierung: Direkte Verknüpfung identifizierter Schwachstellen mit potenziellen Geschäftsausfällen, Umsatzverlusten und Reputationsschäden.\n• Service-Level-Korrelation: Analyse der Auswirkungen von Sicherheitsschwachstellen auf kritische Service-Level-Agreements und Kundenzufriedenheit.\n• Compliance-ROI-Tracking: Messung der Effizienz von Compliance-Investitionen durch Reduzierung von Audit-Findings und regulatorischen Risiken.\n• Operational-Efficiency-Metrics: Quantifizierung der Verbesserung operativer Effizienz durch systematische Schwachstellenbehebung.\n\n💼 C-Level-Dashboard und strategische Berichterstattung:\n• Executive Risk Scorecards: Entwicklung verständlicher Risiko-Dashboards mit klaren Trend-Indikatoren und Handlungsempfehlungen für die Geschäftsleitung.\n• Investment-Prioritization-Matrix: Bereitstellung datengestützter Entscheidungsgrundlagen für die Priorisierung von Sicherheitsinvestitionen basierend auf Geschäftsimpact.\n• Competitive-Advantage-Tracking: Messung, wie Sicherheitsverbesserungen die Marktposition stärken und neue Geschäftschancen eröffnen.\n• Stakeholder-Confidence-Indices: Entwicklung von Metriken zur Messung des Vertrauens von Kunden, Partnern und Aufsichtsbehörden in Ihre Sicherheitsfähigkeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie gewährleistet ADVISORI, dass unsere Schwachstellenanalyse auch emerging Technologies und deren Sicherheitsimplikationen für kritische Infrastrukturen berücksichtigt?",
        answer: "Die rapide Entwicklung emerging Technologies wie IoT, AI/ML, 5G und Edge Computing verändert die Bedrohungslandschaft für kritische Infrastrukturen fundamental. ADVISORI kombiniert tiefgreifende Expertise in traditionellen Infrastrukturen mit cutting-edge Wissen über neue Technologien, um Ihnen einen zukunftssicheren Sicherheitsansatz zu bieten.\n\n🚀 Future-Ready-Technologie-Assessment:\n• IoT/IIoT-Sicherheitsanalyse: Umfassende Bewertung der Sicherheitsimplikationen vernetzter Sensoren und Geräte in kritischen Infrastrukturen, einschließlich Device-Management und Patch-Strategien.\n• AI/ML-Sicherheitsbewertung: Analyse der Risiken und Chancen von KI-Systemen in kritischen Anwendungen, einschließlich Adversarial-Attack-Resistenz und Explainability.\n• 5G-Network-Security: Spezialisierte Bewertung der Sicherheitsimplikationen von 5G-Implementierungen, Network Slicing und Edge Computing in kritischen Infrastrukturen.\n• Cloud-Edge-Hybrid-Architekturen: Analyse der Sicherheitsherausforderungen bei der Integration von Cloud-Services mit Edge-Computing in sicherheitskritischen Umgebungen.\n\n🔮 Proaktive Technologie-Roadmap-Integration:\n• Technology-Radar-Integration: Kontinuierliche Überwachung emerging Technologies und deren potenzielle Sicherheitsimplikationen für Ihre spezifische Infrastruktur.\n• Future-Threat-Modeling: Entwicklung von Bedrohungsmodellen für geplante Technologie-Implementierungen, bevor diese produktiv eingesetzt werden.\n• Innovation-Security-Framework: Aufbau von Prozessen zur sicheren Integration neuer Technologien ohne Kompromittierung der bestehenden Sicherheitsarchitektur.\n• Standards-Evolution-Tracking: Proaktive Überwachung sich entwickelnder Sicherheitsstandards und deren Auswirkungen auf Ihre Technologie-Roadmap."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Rolle spielt die Schwachstellenanalyse bei der Vorbereitung auf regulatorische Inspektionen und wie unterstützt ADVISORI bei der Kommunikation mit Aufsichtsbehörden?",
        answer: "Regulatorische Inspektionen in kritischen Infrastrukturen erfordern nicht nur technische Compliance, sondern auch die Fähigkeit, Sicherheitsmaßnahmen und -prozesse gegenüber Aufsichtsbehörden klar zu kommunizieren. ADVISORI bereitet Sie umfassend auf Inspektionen vor und unterstützt bei der professionellen Darstellung Ihrer Sicherheitslage gegenüber Regulatoren.\n\n📋 Inspection-Ready-Dokumentation und Compliance-Vorbereitung:\n• Audit-Trail-Dokumentation: Vollständige, nachvollziehbare Dokumentation aller Schwachstellenanalyse-Aktivitäten mit klaren Zeitstempeln und Verantwortlichkeiten.\n• Compliance-Gap-Mapping: Systematische Zuordnung identifizierter Schwachstellen zu relevanten regulatorischen Anforderungen (KRITIS-V, IT-SiG 2.0, NIS2).\n• Evidence-Collection-Framework: Strukturierte Sammlung und Aufbereitung von Nachweisen für implementierte Sicherheitsmaßnahmen und deren Wirksamkeit.\n• Remediation-Tracking: Detaillierte Verfolgung und Dokumentation von Schwachstellenbehebungsmaßnahmen mit Status-Updates und Zeitleisten.\n\n🏛️ Behördenkommunikation und Stakeholder-Management:\n• Regulator-Ready-Reports: Aufbereitung technischer Schwachstellenanalyse-Ergebnisse in verständliche, regulatorisch relevante Berichte für Aufsichtsbehörden.\n• Expert-Witness-Support: Bereitstellung von Fachexperten für direkte Kommunikation mit Aufsichtsbehörden während Inspektionen und Nachfragen.\n• Continuous-Compliance-Demonstration: Entwicklung von Prozessen zur kontinuierlichen Demonstration der Compliance über reguläre Reporting-Zyklen hinaus.\n• Incident-Communication-Preparedness: Vorbereitung von Kommunikationsstrategien für den Fall, dass Schwachstellen zu meldepflichtigen Vorfällen führen."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
