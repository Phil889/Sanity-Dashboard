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
    console.log('Updating Standards Frameworks Zertifizierungsbegleitung Audit Support page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-zertifizierungsbegleitung-audit-support' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-zertifizierungsbegleitung-audit-support" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie adressiert ADVISORI branchenspezifische Anforderungen und Besonderheiten bei BSI-Zertifizierungen in regulierten Sektoren wie Banken, Versicherungen oder Gesundheitswesen?",
        answer: "Regulierte Branchen stehen vor besonderen Herausforderungen bei BSI-Zertifizierungen, da sie zusätzliche sektorspezifische Compliance-Anforderungen erfüllen müssen. ADVISORI verfügt über tiefgreifende Branchenexpertise und versteht die komplexen Wechselwirkungen zwischen BSI IT-Grundschutz und branchenspezifischen Regulierungen. Unser spezialisierter Ansatz gewährleistet, dass Ihre Zertifizierung alle relevanten Anforderungen optimal integriert.\n\n🏦 Branchenspezifische Compliance-Komplexität:\n• Finanzdienstleistungen: Integration von BSI-Anforderungen mit BAIT, MaRisk, DORA und EBA-Leitlinien für eine ganzheitliche Risiko- und Compliance-Architektur.\n• Gesundheitswesen: Harmonisierung von IT-Grundschutz mit Medizinprodukterecht, Patientendatenschutz und FDA-Regulierungen für sichere Gesundheitstechnologien.\n• Energiewirtschaft: Verbindung von BSI-Standards mit IT-Sicherheitskatalog, KRITIS-Verordnung und EU-NIS2-Direktive für kritische Infrastrukturen.\n• Telekommunikation: Integration von IT-Grundschutz mit TKG, TTDSG und sektorspezifischen Sicherheitsanforderungen für Kommunikationsnetze.\n\n🎯 ADVISORI's branchenspezifische Zertifizierungsexpertise:\n• Regulatory Intelligence: Umfassende Kenntnis aktueller und kommender branchenspezifischer Regulierungen und deren Auswirkungen auf BSI-Zertifizierungsanforderungen.\n• Sector-Specific Risk Assessment: Spezialisierte Risikobewertung, die branchentypische Bedrohungen und Compliance-Anforderungen in die BSI-Implementierung integriert.\n• Integrated Compliance Strategy: Entwicklung ganzheitlicher Compliance-Strategien, die BSI IT-Grundschutz nahtlos mit branchenspezifischen Anforderungen verbinden.\n• Industry Best Practices: Anwendung bewährter branchenspezifischer Praktiken und Lessons Learned aus vergleichbaren Zertifizierungsprojekten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Unterstützung bietet ADVISORI bei der Bewältigung von Audit-Findings und Non-Conformities während des BSI-Zertifizierungsprozesses?",
        answer: "Audit-Findings und Non-Conformities sind ein natürlicher Bestandteil komplexer Zertifizierungsprozesse und erfordern schnelle, kompetente Reaktionen um Verzögerungen zu vermeiden. ADVISORI hat bewährte Methoden zur effizienten Behandlung von Audit-Befunden entwickelt, die nicht nur Probleme lösen, sondern auch organisatorisches Lernen und kontinuierliche Verbesserung fördern.\n\n⚠️ Herausforderungen bei Audit-Findings:\n• Zeitdruck: Schnelle Korrektur von Befunden unter Einhaltung strenger Audit-Zeitpläne ohne Qualitätsverluste.\n• Root Cause Analysis: Identifikation der zugrundeliegenden Ursachen statt oberflächlicher Symptombehandlung für nachhaltige Lösungen.\n• Resource Allocation: Effiziente Verteilung knapper Ressourcen auf die wichtigsten Korrekturmaßnahmen für maximale Wirkung.\n• Stakeholder Communication: Transparente Kommunikation von Problemen und Lösungsfortschritten an alle relevanten Entscheidungsträger.\n\n🛠️ ADVISORI's systematische Finding-Resolution:\n• Rapid Response Framework: Strukturierte Prozesse zur sofortigen Bewertung und Priorisierung von Audit-Findings für effiziente Ressourcenallokation.\n• Root Cause Methodology: Systematische Ursachenanalyse mit bewährten Techniken wie 5-Why-Analysis und Fishbone-Diagrammen für nachhaltige Problemlösung.\n• Corrective Action Planning: Entwicklung umfassender Korrekturpläne mit klaren Meilensteinen, Verantwortlichkeiten und Erfolgsmetriken.\n• Preventive Improvement: Implementierung präventiver Maßnahmen zur Verhinderung ähnlicher Probleme in der Zukunft und Stärkung der Gesamtsysteme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie unterstützt ADVISORI bei der Entwicklung eines Business Cases und der ROI-Rechtfertigung für BSI-Zertifizierungsinvestitionen gegenüber Stakeholdern?",
        answer: "Für die C-Suite ist es essentiell, BSI-Zertifizierungsinvestitionen mit einem überzeugenden Business Case zu rechtfertigen, der sowohl Kosten als auch quantifizierbare Vorteile transparent darstellt. ADVISORI entwickelt datengetriebene Business Cases, die es Führungskräften ermöglichen, fundierte Investitionsentscheidungen zu treffen und Stakeholder von der strategischen Bedeutung der Zertifizierung zu überzeugen.\n\n💼 Herausforderungen der ROI-Rechtfertigung:\n• Quantifizierung weicher Faktoren: Bewertung schwer messbarer Vorteile wie Vertrauensgewinn, Reputationsverbesserung und Risikoreduktion.\n• Zeitrahmen-Komplexität: Darstellung von Investitionen mit sofortigen Kosten aber langfristigen, gestaffelten Vorteilen.\n• Stakeholder-Perspektiven: Berücksichtigung unterschiedlicher Bewertungskriterien von CFO, CRO, CIO und anderen Entscheidungsträgern.\n• Uncertainty Management: Umgang mit Unsicherheiten und Variablen in Kosten-Nutzen-Projektionen für realistische Erwartungen.\n\n📊 ADVISORI's datengetriebener Business Case Ansatz:\n• Multi-Dimensional Value Assessment: Umfassende Bewertung aller Wertdimensionen von direkten Kosteneinsparungen bis zu strategischen Marktvorteilen mit quantifizierten Metriken.\n• Risk-Adjusted ROI Modeling: Entwicklung realistischer ROI-Modelle, die Risikofaktoren und Unsicherheiten transparent berücksichtigen für fundierte Entscheidungen.\n• Stakeholder-Specific Argumentation: Anpassung der Business Case Präsentation an die spezifischen Prioritäten und Entscheidungskriterien verschiedener Stakeholder-Gruppen.\n• Benchmark Analysis: Vergleichende Analyse mit Branchenstandards und Wettbewerbern zur Einordnung der Investition in den Marktkontext."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Rolle spielt ADVISORI bei der Krisenunterstützung, falls während des Zertifizierungsprozesses unerwartete Probleme oder Sicherheitsvorfälle auftreten?",
        answer: "Unerwartete Ereignisse wie Sicherheitsvorfälle, Systemausfälle oder organisatorische Krisen können BSI-Zertifizierungsprojekte erheblich beeinträchtigen. ADVISORI bietet spezialisierte Krisenunterstützung, die nicht nur akute Probleme löst, sondern auch sicherstellt, dass Zertifizierungsziele trotz widriger Umstände erreicht werden und die Organisation gestärkt aus der Krise hervorgeht.\n\n🚨 Krisenszenarien im Zertifizierungskontext:\n• Cybersecurity Incidents: Sicherheitsvorfälle während des Audit-Prozesses, die Zweifel an der Implementierungsqualität aufwerfen könnten.\n• System Outages: Kritische Systemausfälle, die Audit-Aktivitäten behindern oder die Wirksamkeit von Sicherheitsmaßnahmen in Frage stellen.\n• Organizational Changes: Unerwartete Umstrukturierungen, Personalwechsel oder strategische Änderungen, die Zertifizierungsscope beeinflussen.\n• Regulatory Changes: Kurzfristige Änderungen regulatorischer Anforderungen, die Anpassungen der Zertifizierungsstrategie erfordern.\n\n🆘 ADVISORI's spezialisierte Krisenintervention:\n• Emergency Response Team: Sofortige Mobilisierung erfahrener Krisenspezialisten für schnelle Situationsbewertung und Stabilisierung der Zertifizierungsaktivitäten.\n• Crisis Impact Assessment: Systematische Bewertung der Auswirkungen auf Zertifizierungsziele mit Entwicklung alternativer Strategien und Anpassungsplänen.\n• Stakeholder Crisis Communication: Professionelle Kommunikation mit Auditoren, Zertifizierungsstellen und internen Stakeholdern zur Aufrechterhaltung des Vertrauens.\n• Recovery Strategy Implementation: Entwicklung und Umsetzung strukturierter Wiederherstellungspläne, die Zertifizierungsziele trotz Krisensituation sicherstellen."
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
