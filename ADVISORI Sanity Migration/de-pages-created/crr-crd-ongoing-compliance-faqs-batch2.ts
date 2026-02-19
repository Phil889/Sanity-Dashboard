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
    console.log('Updating CRR/CRD Ongoing Compliance page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-ongoing-compliance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie kann ein Finanzinstitut seine CRR/CRD-Compliance-Prozesse durch KPIs effektiv steuern und überwachen?",
        answer: "Eine datengetriebene Steuerung der CRR/CRD-Compliance ist für moderne Finanzinstitute unverzichtbar, um Compliance-Risiken frühzeitig zu erkennen und proaktiv zu adressieren. Durch die Implementierung eines umfassenden KPI-Systems für die Ongoing Compliance erhalten Entscheidungsträger nicht nur eine Risikotransparenz, sondern auch quantifizierbare Grundlagen für strategische Entscheidungen.\n\n📊 Kernelemente eines effektiven Compliance-KPI-Frameworks:\n• Compliance-Status-Indikatoren: Kennzahlen, die den aktuellen Erfüllungsgrad regulatorischer Anforderungen messen und Compliance-Lücken identifizieren.\n• Prozesseffizienz-Metriken: KPIs zur Messung der Geschwindigkeit, Qualität und Ressourceneffizienz von Compliance-Prozessen wie Datenerfassung, Validierung und Berichterstattung.\n• Risiko-Frühindikatoren: Prädiktive Kennzahlen, die potenzielle Compliance-Verstöße signalisieren, bevor sie eintreten, z.B. steigende Datenqualitätsprobleme oder Verzögerungen bei Anpassungen an regulatorische Änderungen.\n• Impact-Metriken: Kennzahlen, die die Auswirkungen der Compliance-Maßnahmen auf Geschäftsprozesse, Kapitaleffizienz und strategische Ziele messen.\n\n🔍 ADVISORI's Ansatz zur Entwicklung eines maßgeschneiderten KPI-Systems:\n• Mehrstufige KPI-Hierarchie: Entwicklung einer KPI-Pyramide mit granularen operativen Kennzahlen an der Basis und aggregierten Management-KPIs an der Spitze, die für verschiedene Stakeholder-Gruppen relevant sind.\n• Integration in das Governance-Framework: Einbettung der Compliance-KPIs in bestehende Steuerungsinstrumente wie Risikodashboards, Management-Berichte und Leistungsbewertungssysteme.\n• Automatisierte KPI-Erhebung: Implementierung von Systemen zur automatischen Messung und Berichterstattung kritischer Compliance-Kennzahlen, um Ressourcenaufwand zu minimieren und Aktualität zu gewährleisten.\n• Kontinuierliche Kalibrierung: Regelmäßige Überprüfung und Anpassung der KPIs und Schwellenwerte basierend auf Veränderungen des regulatorischen Umfelds, der Risikotoleranz und strategischer Prioritäten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welchen Einfluss haben aktuelle regulatorische Entwicklungen auf die kontinuierliche CRR/CRD-Compliance, und wie können sich Institute darauf vorbereiten?",
        answer: "Die regulatorische Landschaft im Finanzsektor unterliegt einer kontinuierlichen Evolution, die durch Faktoren wie Digitalisierung, Nachhaltigkeitsanforderungen und geopolitische Entwicklungen geprägt ist. Für eine erfolgreiche Ongoing Compliance ist es essentiell, diese Entwicklungen nicht nur zu verfolgen, sondern proaktiv in die strategische Planung zu integrieren. ADVISORI unterstützt Finanzinstitute dabei, sich frühzeitig und effizient auf kommende regulatorische Herausforderungen einzustellen.\n\n🔄 Aktuelle Schlüsseltrends mit Auswirkungen auf die CRR/CRD-Compliance:\n• ESG-Integration: Zunehmende Einbindung von Nachhaltigkeitsrisiken in die Eigenkapitalanforderungen und Offenlegungspflichten, was eine Erweiterung traditioneller Risikomodelle und Dateninfrastrukturen erfordert.\n• Digitale Resilienz: Verschärfte Anforderungen an die operationelle Widerstandsfähigkeit von IT-Systemen und Prozessen, insbesondere im Kontext von Cloud-Computing und komplexen Lieferketten.\n• Advanced Analytics und KI: Regulatorische Erwartungen an die Transparenz, Nachvollziehbarkeit und Governance von fortschrittlichen Analysetechniken und künstlicher Intelligenz in Compliance-Prozessen.\n• Proportionalität und Verhältnismäßigkeit: Differenziertere regulatorische Ansätze, die die Größe, Komplexität und das Risikoprofil von Instituten stärker berücksichtigen.\n\n🚀 ADVISORI's proaktiver Vorbereitungsansatz:\n• Regulatory Horizon Scanning: Systematische Beobachtung und Analyse regulatorischer Entwicklungen, einschließlich Konsultationsdokumenten, Diskussionspapieren und internationalen Trends.\n• Impact Assessment Framework: Strukturierte Bewertung der potenziellen Auswirkungen neuer Anforderungen auf Geschäftsmodelle, Prozesse, Systeme und Datenarchitekturen.\n• Regulatorische Roadmap: Entwicklung eines mehrjährigen Plans zur Integration bevorstehender regulatorischer Änderungen, der Synergien zwischen verschiedenen Initiativen identifiziert und Ressourcenkonflikte minimiert.\n• Adaptive Compliance-Architektur: Konzeption von Compliance-Strukturen, die flexibel auf regulatorische Änderungen reagieren können, ohne grundlegende Systemanpassungen zu erfordern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie lässt sich der ROI von Investitionen in die Ongoing CRR/CRD-Compliance quantifizieren und maximieren?",
        answer: "Die Quantifizierung des Return on Investment (ROI) für Ongoing Compliance-Maßnahmen stellt viele Finanzinstitute vor Herausforderungen, da der Wertbeitrag oft indirekt und präventiver Natur ist. Dennoch ist eine fundierte ROI-Betrachtung entscheidend, um Compliance-Investitionen nicht nur als Kostenfaktor, sondern als strategischen Werttreiber zu positionieren. ADVISORI hat eine differenzierte Methodik entwickelt, um den vielschichtigen Wertbeitrag von Compliance-Investitionen transparent zu machen.\n\n💹 Mehrdimensionale ROI-Betrachtung für Compliance-Investitionen:\n• Kostenreduktion durch Prozesseffizienz: Quantifizierung von Einsparungen durch automatisierte Compliance-Prozesse, reduzierte manuelle Nacharbeiten und optimierte Ressourcenallokation.\n• Vermiedene Kosten: Bewertung potenzieller regulatorischer Sanktionen, Reputationsschäden und Kapitalaufschläge, die durch verbesserte Compliance-Prozesse verhindert werden.\n• Kapitaleffizienzgewinne: Berechnung der Optimierung von Eigenkapitalanforderungen durch präzisere Risikobewertungen und verbesserte Datenqualität.\n• Strategische Optionswerte: Monetarisierung der erhöhten strategischen Flexibilität und schnelleren Time-to-Market für neue Produkte durch robuste Compliance-Frameworks.\n\n📈 ADVISORI's Ansatz zur ROI-Maximierung:\n• Value-Based Compliance Priorisierung: Fokussierung von Investitionen auf Bereiche mit dem höchsten Risiko-Rendite-Verhältnis, basierend auf regulatorischen Anforderungen, Geschäftsrelevanz und Effizienzpotenzialen.\n• Shared Services und Plattformansatz: Entwicklung zentralisierter Compliance-Capabilities, die von verschiedenen Geschäftsbereichen und für multiple regulatorische Anforderungen genutzt werden können.\n• Skalierbare Technologieinvestitionen: Implementierung modularer und skalierbarer Compliance-Technologien, die flexibel an veränderte regulatorische Anforderungen angepasst werden können, ohne umfangreiche Neuinvestitionen zu erfordern.\n• Kompetenzaufbau und Wissensmanagement: Systematische Entwicklung interner Expertise und effektiver Wissenstransfer, um die Abhängigkeit von externen Beratern zu reduzieren und nachhaltigen Wertbeitrag zu sichern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können CRO und CFO bei der CRR/CRD-Compliance effektiv zusammenarbeiten, um Silodenken zu überwinden?",
        answer: "Die erfolgreiche Umsetzung und kontinuierliche Einhaltung der CRR/CRD-Anforderungen erfordert eine enge und effektive Zusammenarbeit zwischen den Bereichen Risikomanagement (CRO) und Finanzen (CFO). Historisch gewachsene Silostrukturen und unterschiedliche Perspektiven führen jedoch häufig zu Ineffizienzen, Dateninkonsistenzen und suboptimalen Compliance-Ergebnissen. ADVISORI unterstützt Finanzinstitute dabei, diese Barrieren zu überwinden und eine synergetische Zusammenarbeit zu etablieren.\n\n🤝 Schlüsselbereiche für eine verbesserte CRO-CFO-Kollaboration:\n• Integrierte Datenarchitektur: Entwicklung einer gemeinsamen Datenbasis für Risiko- und Finanzdaten, die Konsistenz zwischen regulatorischem Reporting, Risikomanagement und Finanzberichterstattung sicherstellt.\n• Harmonisierte Planungs- und Steuerungsprozesse: Abstimmung von ICAAP/ILAAP, Kapitalplanung, Budgetierung und strategischer Planung zu einem kohärenten Gesamtprozess.\n• Gemeinsame Governance-Strukturen: Etablierung cross-funktionaler Steuerungsgremien und Arbeitsgruppen, die eine abgestimmte Interpretation und Umsetzung regulatorischer Anforderungen gewährleisten.\n• Integriertes Reporting: Entwicklung konsolidierter Management-Informationen, die sowohl Risiko- als auch Finanzperspektiven umfassen und eine ganzheitliche Entscheidungsfindung unterstützen.\n\n🔄 ADVISORI's Framework für nachhaltige Zusammenarbeit:\n• Cultural Alignment: Förderung eines gemeinsamen Verständnisses der Wertschöpfungsbeiträge von Risiko- und Finanzbereichen sowie Entwicklung einer kollaborativen Compliance-Kultur.\n• Prozessintegration: Identifikation und Optimierung von Schnittstellen zwischen Risiko- und Finanzprozessen, mit besonderem Fokus auf End-to-End-Prozesseffizienz und Vermeidung von Redundanzen.\n• Technologische Brücken: Implementierung von Systemen und Tools, die nahtlosen Datenaustausch und Workflows zwischen Risiko- und Finanzbereichen ermöglichen.\n• Kompetenzentwicklung: Förderung von Mitarbeitern mit Cross-Domain-Expertise, die sowohl Risiko- als auch Finanzperspektiven verstehen und als Brückenbauer zwischen den Bereichen fungieren können."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
