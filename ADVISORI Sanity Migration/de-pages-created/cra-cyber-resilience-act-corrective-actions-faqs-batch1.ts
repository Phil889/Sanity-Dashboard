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
    console.log('Updating CRA Corrective Actions page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-corrective-actions' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-corrective-actions" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie kann ADVISORI die C-Suite bei der strategischen Bewältigung von CRA-Compliance-Verstößen unterstützen und welche unmittelbaren Handlungsschritte sind erforderlich?",
        answer: "CRA-Compliance-Verstöße stellen für die Unternehmensführung nicht nur rechtliche, sondern auch erhebliche geschäftliche Risiken dar. Die schnelle und strategisch durchdachte Reaktion auf Marktüberwachungsmaßnahmen entscheidet über die Zukunft Ihrer Marktpräsenz in der EU. ADVISORI unterstützt Sie dabei, diese kritische Phase professionell und nachhaltig zu bewältigen.\n\n🚨 Kritische Sofortmaßnahmen für die C-Suite:\n• Schadensbegrenzung und Risikominimierung: Sofortige Bewertung der identifizierten Verstöße und ihrer potenziellen Auswirkungen auf Geschäftstätigkeit, Reputation und Marktposition.\n• Rechtliche Verpflichtungen verstehen: Klare Definition der gesetzlichen Anforderungen, Fristen und möglichen Sanktionen, um fundierte Entscheidungen treffen zu können.\n• Kommunikationsstrategie entwickeln: Koordinierte interne und externe Kommunikation mit Stakeholdern, Kunden und Marktüberwachungsbehörden.\n• Ressourcenallokation planen: Schnelle Bereitstellung der erforderlichen personellen und finanziellen Mittel für effektive Korrekturmaßnahmen.\n\n⚡ Der ADVISORI-Notfallansatz:\n• Express-Compliance-Assessment: Binnen 48 Stunden führen wir eine umfassende Bewertung der CRA-Verstöße durch und identifizieren kritische Handlungsfelder.\n• Strategische Remediation-Roadmap: Entwicklung eines priorisierten Aktionsplans, der sowohl unmittelbare Compliance-Wiederherstellung als auch langfristige Risikoprävention adressiert.\n• Behördenkommunikation und -koordination: Professionelle Vertretung gegenüber Marktüberwachungsbehörden und strukturierte Nachweisführung der Korrekturmaßnahmen.\n• Executive Reporting und Governance: Regelmäßige, C-Level-gerechte Fortschrittsberichte und Entscheidungsvorlagen für eine transparente Steuerung des Remediation-Prozesses."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche finanziellen und operativen Auswirkungen haben CRA-Verstöße auf unser Unternehmen und wie kalkuliert ADVISORI die Kosten für effektive Korrekturmaßnahmen?",
        answer: "CRA-Verstöße können erhebliche finanzielle Konsequenzen haben, die weit über die direkten Bußgelder hinausgehen. Eine professionelle Kostenbewertung und strategische Planung der Korrekturmaßnahmen ist entscheidend für eine wirtschaftlich optimale Lösung. ADVISORI bietet transparente Kostenanalysen und ROI-optimierte Remediation-Strategien.\n\n💰 Direkte und indirekte Kostenauswirkungen:\n• Regulatorische Sanktionen: CRA-Bußgelder können bis zu 15 Millionen Euro oder 2,5% des weltweiten Jahresumsatzes betragen, je nachdem, welcher Betrag höher ist.\n• Marktaussperrung und Umsatzverluste: Temporärer oder dauerhafter Verlust der EU-Marktberechtigung kann zu erheblichen Umsatzeinbußen führen.\n• Reputationsschäden: Langfristige Auswirkungen auf Markenvertrauen und Kundenbeziehungen können den Unternehmenswert nachhaltig beeinträchtigen.\n• Produktrückrufe und Nachbesserungen: Kosten für die Modifikation oder den Rückruf bereits vertriebener Produkte können in die Millionen gehen.\n\n📊 ADVISORI's Kostenoptimierungsansatz:\n• Präzise Kostenschätzung: Detaillierte Bewertung der erforderlichen Korrekturmaßnahmen und ihrer Implementierungskosten, um Budgetplanungssicherheit zu schaffen.\n• ROI-optimierte Lösungen: Entwicklung von Korrekturstrategien, die das beste Verhältnis zwischen Compliance-Sicherstellung und Investitionsaufwand bieten.\n• Phasenweise Umsetzung: Strukturierte Implementierung nach Prioritäten, um Cashflow-Belastungen zu minimieren und schnelle Teilerfolge zu erzielen.\n• Langfristige Wertschöpfung: Integration von Compliance-Verbesserungen in bestehende Digitalisierungs- und Modernisierungsinitiativen für zusätzlichen Geschäftswert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie stellt ADVISORI sicher, dass unsere CRA-Korrekturmaßnahmen nicht nur kurzfristige Compliance herstellen, sondern auch langfristige Wettbewerbsvorteile schaffen?",
        answer: "Effektive CRA-Korrekturmaßnahmen sollten über die reine Compliance-Wiederherstellung hinausgehen und strategische Geschäftschancen schaffen. ADVISORI verfolgt einen ganzheitlichen Ansatz, der Remediation als Investition in Ihre digitale Zukunftsfähigkeit und Marktführerschaft positioniert.\n\n🎯 Transformation von Compliance-Pflicht zu Wettbewerbsvorteil:\n• Enhanced Security Posture: Korrekturmaßnahmen werden genutzt, um die gesamte Cybersecurity-Architektur zu modernisieren und über CRA-Mindestanforderungen hinaus zu verbessern.\n• Marktdifferenzierung: Demonstrierte CRA-Excellence als Verkaufsargument und Vertrauensbildner gegenüber sicherheitsbewussten Kunden und Partnern.\n• Operational Excellence: Integration von Sicherheits- und Compliance-Prozessen in Ihre bestehenden Betriebsabläufe für erhöhte Effizienz und Qualität.\n• Innovation Enablement: Schaffung einer sicheren Basis für die Entwicklung und Markteinführung neuer digitaler Produkte und Services.\n\n🚀 ADVISORI's strategischer Mehrwertansatz:\n• Future-Ready Architecture: Entwicklung von Sicherheitslösungen, die nicht nur aktuelle CRA-Anforderungen erfüllen, sondern auch für zukünftige regulatorische Entwicklungen gerüstet sind.\n• Process Integration und Automatisierung: Implementierung von automatisierten Compliance-Monitoring- und Reporting-Systemen, die kontinuierliche Überwachung und proaktive Risikoerkennung ermöglichen.\n• Organizational Capability Building: Aufbau interner Kompetenzen und Governance-Strukturen, die Ihr Unternehmen befähigen, Cybersecurity als strategischen Geschäftsvorteil zu nutzen.\n• Ecosystem Partnerships: Vernetzung mit führenden Technology-Providern und Compliance-Experten für Zugang zu innovativen Lösungen und Best Practices."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Rolle spielt Stakeholder-Management bei CRA-Korrekturmaßnahmen und wie unterstützt ADVISORI bei der Kommunikation mit Behörden, Kunden und Investoren?",
        answer: "CRA-Compliance-Vorfälle erfordern ein professionelles Stakeholder-Management, das Vertrauen erhält und Reputationsschäden minimiert. Die Art und Weise, wie Sie mit Behörden, Kunden und Investoren kommunizieren, kann entscheidend für den langfristigen Geschäftserfolg sein. ADVISORI bietet umfassende Kommunikationsunterstützung für alle kritischen Stakeholder-Gruppen.\n\n🤝 Strategische Stakeholder-Kommunikation:\n• Marktüberwachungsbehörden: Professionelle, kooperative und transparente Kommunikation mit regulatorischen Autoritäten zur Demonstration Ihrer Compliance-Verpflichtung und Seriosität.\n• Kunden und Partner: Proaktive Information über Korrekturmaßnahmen zur Aufrechterhaltung des Vertrauens und zur Demonstration Ihrer Sicherheitsexzellenz.\n• Investoren und Finanzmarkt: Transparente Darstellung der Situation, der Korrekturmaßnahmen und der langfristigen strategischen Auswirkungen auf die Unternehmensentwicklung.\n• Interne Teams: Klare Kommunikation der Bedeutung, Ziele und Fortschritte zur Sicherstellung der organisationsweiten Unterstützung und Motivation.\n\n📢 ADVISORI's Kommunikationsexpertise:\n• Regulatory Affairs Management: Erfahrene Koordination mit EU-Marktüberwachungsbehörden, inklusive Vorbereitung von Dokumentationen, Nachweisen und Fortschrittsberichten.\n• Crisis Communication Strategy: Entwicklung maßgeschneiderter Kommunikationsstrategien, die Ihre Reputation schützen und gleichzeitig Transparenz und Verantwortlichkeit demonstrieren.\n• Technical Documentation: Erstellung professioneller technischer Dokumentationen und Compliance-Nachweise, die regulatorische Anforderungen vollständig erfüllen.\n• Executive Coaching: Vorbereitung der C-Suite auf Behördengespräche, Medienanfragen und Stakeholder-Meetings zur selbstbewussten und kompetenten Repräsentation Ihres Unternehmens."
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
