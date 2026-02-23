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
    console.log('Updating MiFID Produkt Anlegerschutz page with strategic FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-produkt-anlegerschutz-zielmarkt-geeignetheitspruefung' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-produkt-anlegerschutz-zielmarkt-geeignetheitspruefung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Finanzinstitute die wachsenden regulatorischen Anforderungen im Bereich Anlegerschutz kosteneffizient umsetzen und welche Unterstützung bietet ADVISORI?",
        answer: "Die stetig wachsenden regulatorischen Anforderungen im Bereich Anlegerschutz stellen Finanzinstitute vor die Herausforderung, Compliance sicherzustellen, ohne unverhältnismäßige Kosten zu verursachen. Eine strategische, zukunftsorientierte Implementierung kann nicht nur Compliance-Kosten optimieren, sondern auch geschäftlichen Mehrwert generieren.\n\n💰 Strategien für kosteneffiziente MiFID II-Implementierung:\n• Integrierter Regulierungsansatz: Entwicklung einer ganzheitlichen Strategie, die verschiedene regulatorische Anforderungen (MiFID II, DSGVO, IDD, etc.) gemeinsam betrachtet und Synergien bei der Umsetzung identifiziert und nutzt.\n• Risikoorientierte Priorisierung: Fokussierung der Ressourcen auf Bereiche mit hohem regulatorischem Risiko oder besonderer geschäftlicher Relevanz, während in anderen Bereichen standardisierte Lösungen eingesetzt werden.\n• Digitalisierung und Automatisierung: Strategischer Einsatz digitaler Technologien zur Automatisierung regulatorischer Prozesse, von der Datenerfassung über die Analyse bis zur Dokumentation und Berichterstattung.\n• Modularer Implementierungsansatz: Schrittweise Umsetzung in modularen Bausteinen, die aufeinander aufbauen und sukzessive eine vollständige Compliance-Lösung bilden, ohne das Tagesgeschäft zu beeinträchtigen.\n\n🛠️ Der ADVISORI-Effizienzansatz:\n• Business Case Orientierung: Jede Compliance-Maßnahme wird nicht nur auf regulatorische Notwendigkeit, sondern auch auf potenzielle Geschäftsvorteile und Kosteneffizienz hin bewertet.\n• Technologie-Assessment: Systematische Bewertung von Technologieoptionen für die MiFID II-Implementierung mit klarem Fokus auf langfristige Kosteneffizienz, Skalierbarkeit und Anpassungsfähigkeit.\n• Make-or-Buy-Evaluierung: Strukturierte Analyse, welche Compliance-Funktionen intern entwickelt und welche über externe Lösungen oder Shared Services abgedeckt werden sollten.\n• Schlanke Governance: Entwicklung einer effizienten Governance-Struktur mit klaren Verantwortlichkeiten, die Compliance sicherstellt, ohne übermäßige Bürokratie zu schaffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche typischen Implementierungshürden treten bei der Umsetzung von MiFID II-Anlegerschutzanforderungen auf und wie können sie überwunden werden?",
        answer: "Die Implementierung von MiFID II-Anlegerschutzanforderungen stellt Finanzinstitute vor komplexe Herausforderungen, die sowohl technischer als auch organisatorischer Natur sein können. Ein proaktives Management dieser Hürden ist entscheidend für eine erfolgreiche, termingerechte und kosteneffiziente Umsetzung.\n\n🚧 Typische Implementierungshürden und Lösungsansätze:\n• Datenmanagement-Komplexität: Die Anforderungen an umfassende Kundendaten, Produktinformationen und Transaktionsdokumentationen stellen viele Institute vor erhebliche Datenintegrations- und Qualitätsprobleme.\n  → Lösungsansatz: Entwicklung einer ganzheitlichen Datenstrategie mit klarem Fokus auf Datenqualität, -governance und -integration über Silos hinweg.\n• Silodenken und Abteilungsgrenzen: Die bereichsübergreifende Natur der Anlegerschutzanforderungen kollidiert oft mit traditionellen organisatorischen Strukturen und isolierten Verantwortlichkeiten.\n  → Lösungsansatz: Etablierung cross-funktionaler Teams und Governance-Strukturen mit klaren End-to-End-Verantwortlichkeiten für Anlegerschutzprozesse.\n• IT-Legacy-Systeme: Bestehende Altsysteme sind oft nicht flexibel genug, um die neuen Anforderungen ohne erhebliche Anpassungen zu unterstützen.\n  → Lösungsansatz: Entwicklung einer mehrschichtigen IT-Architektur, die neue Compliance-Funktionalitäten als zusätzliche Schicht über bestehenden Systemen implementiert.\n• Kultureller Widerstand: Die Umstellung von produktorientierten zu kundenorientierten Beratungsprozessen trifft häufig auf Widerstand bei Mitarbeitern, die an etablierte Arbeitsweisen gewöhnt sind.\n  → Lösungsansatz: Umfassendes Change Management mit Fokus auf Kommunikation, Schulung und Einbindung von Schlüsselpersonen als Vorbilder und Multiplikatoren.\n\n🔄 Der ADVISORI-Implementierungsansatz:\n• Pragmatischer Realismus: Wir verfolgen einen pragmatischen Ansatz, der regulatorische Anforderungen erfüllt, ohne unnötige Komplexität zu schaffen, und der die spezifischen Gegebenheiten Ihrer Organisation berücksichtigt.\n• Agile Implementierungsmethodik: Nutzung agiler Methoden für die MiFID II-Implementierung, um schnell sichtbare Fortschritte zu erzielen und flexibel auf Veränderungen oder neue Erkenntnisse reagieren zu können.\n• Starke Projektgovernance: Etablierung einer robusten Projektstruktur mit klaren Entscheidungswegen, regelmäßigem Risikomanagement und transparentem Fortschrittsmonitoring.\n• Frühzeitige Stakeholder-Einbindung: Systematische Einbindung aller relevanten Stakeholder – von Fachabteilungen über IT bis hin zum Management – von Beginn an, um Akzeptanz zu schaffen und wertvolle Inputs zu sichern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Finanzinstitute ihre MiFID II-Produktgovernance und Geeignetheitsprüfungen zukunftssicher gestalten und auf kommende regulatorische Entwicklungen vorbereiten?",
        answer: "Die regulatorische Landschaft im Bereich Anlegerschutz entwickelt sich kontinuierlich weiter, mit regelmäßigen Präzisierungen und Erweiterungen der bestehenden Anforderungen sowie neuen Regulierungsinitiativen. Eine zukunftssichere Gestaltung der Anlegerschutzprozesse erfordert einen vorausschauenden, adaptiven Ansatz, der nicht nur aktuelle, sondern auch potenzielle künftige Anforderungen berücksichtigt.\n\n🔮 Zentrale Aspekte einer zukunftssicheren MiFID II-Implementierung:\n• Regulatorische Weitsicht: Systematische Beobachtung regulatorischer Entwicklungen und frühzeitige Analyse potenzieller Auswirkungen auf bestehende Anlegerschutzprozesse und -systeme.\n• Flexible Prozessarchitektur: Gestaltung von Prozessen mit inhärenter Flexibilität, die Anpassungen an neue regulatorische Anforderungen mit minimalem Aufwand ermöglicht.\n• Zukunftsfähige Technologieplattform: Implementierung einer Technologiearchitektur, die skalierbar, erweiterbar und anpassungsfähig ist, um künftige regulatorische Anforderungen effizient zu integrieren.\n• Datenorientierter Ansatz: Aufbau einer umfassenden, granularen Datenbasis, die über die aktuellen Anforderungen hinausgeht und als Fundament für potenzielle künftige Reporting- und Analysepflichten dienen kann.\n\n🚀 Erwartete regulatorische Entwicklungen und ADVISORI-Ansatz:\n• ESG-Integration: Die Integration von Nachhaltigkeitspräferenzen in Geeignetheitsprüfungen und Produktgovernance wird weiter an Bedeutung gewinnen und detailliertere Anforderungen mit sich bringen.\n  → ADVISORI-Ansatz: Entwicklung eines robusten ESG-Frameworks, das bereits heute über die Mindestanforderungen hinausgeht und flexibel für zukünftige Erweiterungen ist.\n• Digitale Finanzdienstleistungen: Neue Regulierungen für digitale Finanzdienstleistungen und Robo-Advisory werden spezifischere Anforderungen an algorithmusbasierte Beratung und digitale Kundeninteraktionen stellen.\n  → ADVISORI-Ansatz: Konzeption digitaler Anlegerschutzprozesse mit eingebauten Governance- und Transparenzmechanismen, die künftige Anforderungen antizipieren.\n• Erhöhte Transparenzanforderungen: Der Trend zu immer umfassenderer Transparenz gegenüber Kunden und Aufsichtsbehörden wird sich fortsetzen, mit potenziell erweiterten Offenlegungs- und Berichtspflichten.\n  → ADVISORI-Ansatz: Implementierung eines modularen Reporting-Frameworks, das leicht um neue Kennzahlen und Berichtselemente erweitert werden kann."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Erfolgsfaktoren sind entscheidend für eine nachhaltige MiFID II-Compliance im Bereich Produktgovernance und Anlegerschutz?",
        answer: "Eine nachhaltige MiFID II-Compliance im Bereich Produktgovernance und Anlegerschutz erfordert mehr als die einmalige Implementierung regulatorischer Anforderungen. Sie bedingt eine systematische Verankerung in der Organisations- und Prozessstruktur sowie eine kontinuierliche Weiterentwicklung und Optimierung. Die folgenden Erfolgsfaktoren sind entscheidend für eine langfristig erfolgreiche Compliance-Strategie.\n\n🔑 Kritische Erfolgsfaktoren für nachhaltige MiFID II-Compliance:\n• Strategische Verankerung: Integration der Anlegerschutzprinzipien in die Unternehmensstrategie und -kultur, sodass sie nicht als externe Anforderung, sondern als integraler Bestandteil des Geschäftsmodells wahrgenommen werden.\n• Klare Governance-Strukturen: Etablierung eindeutiger Verantwortlichkeiten und Entscheidungsprozesse für alle Aspekte der Produktgovernance und des Anlegerschutzes, mit direkter Anbindung an die Unternehmensführung.\n• Systematisches Monitoring: Implementierung eines umfassenden Überwachungssystems, das sowohl die Einhaltung regulatorischer Anforderungen als auch die Effektivität und Effizienz der Prozesse kontinuierlich überwacht.\n• Kompetenzentwicklung: Kontinuierliche Investition in die Schulung und Entwicklung aller beteiligten Mitarbeiter, um sowohl regulatorisches Wissen als auch Kundenorientierung zu fördern.\n\n🌟 Der ADVISORI-Exzellenzansatz:\n• Compliance Excellence Framework: Entwicklung eines ganzheitlichen Rahmenwerks, das Compliance nicht als isolierte Funktion, sondern als integralen Bestandteil eines exzellenten Kundenmanagements positioniert.\n• Operationelle Exzellenz: Fokus auf die Optimierung der operativen Effizienz von Compliance-Prozessen, um regulatorische Anforderungen mit minimalem Ressourcenaufwand zu erfüllen.\n• Digitale Compliance-Transformation: Strategischer Einsatz digitaler Technologien zur Automatisierung und Verbesserung von Compliance-Prozessen, von der Datenerfassung über die Analyse bis zur Dokumentation.\n• Kontinuierliches Lernen: Etablierung eines systematischen Ansatzes zum Erfahrungsaustausch, zur Erfassung von Lessons Learned und zur kontinuierlichen Verbesserung aller Anlegerschutzprozesse."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new strategic FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Strategic FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
