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
    console.log('Updating ESG Strategie & Governance page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-strategie-governance-leitbildentwicklung-stakeholder-dialog-verankerung-in-unternehmenszielen' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-strategie-governance-leitbildentwicklung-stakeholder-dialog-verankerung-in-unternehmenszielen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine strategische ESG-Governance für die C-Suite mehr als nur Compliance und wie transformiert ADVISORI dies zu einem Wertschöpfungsinstrument?",
        answer: "Für die Führungsebene ist ESG-Governance längst kein peripheres Compliance-Thema mehr, sondern ein zentraler Baustein der Unternehmenssteuerung mit direkten Auswirkungen auf Wertschöpfung, Risikomanagement und langfristige Wettbewerbsfähigkeit. Eine strategisch ausgerichtete ESG-Governance transzendiert die reine Erfüllung regulatorischer Anforderungen und wird zum Katalysator für Innovation, Effizienz und nachhaltiges Wachstum.\n\n🎯 Strategische Imperative für die C-Suite:\n• Wertschöpfung durch Nachhaltigkeit: ESG-Integration kann signifikante Kosteneinsparungen durch Ressourceneffizienz, neue Marktchancen durch nachhaltige Produkte und verbesserte Mitarbeiterbindung generieren.\n• Risikomanagement und Resilienz: Proaktive ESG-Governance identifiziert und mitigiert klimatische, soziale und governance-bezogene Risiken, bevor sie sich auf das Geschäft auswirken können.\n• Kapitalmarktzugang und -kosten: Institutionelle Investoren bevorzugen zunehmend ESG-konforme Unternehmen, was zu besseren Finanzierungskonditionen und höheren Unternehmensbewertungen führt.\n• Talent-Akquisition und -Retention: Eine authentische ESG-Strategie wird zum entscheidenden Faktor bei der Gewinnung und Bindung von Top-Talenten.\n\n🛠️ Der ADVISORI-Ansatz zur ESG-Wertschöpfung:\n• Strategische Integration: Wir verankern ESG-Aspekte direkt in Geschäftsmodell, Strategie und operative Prozesse, statt sie als separate Initiative zu behandeln.\n• Materialitätsbasierte Priorisierung: Identifikation der ESG-Themen mit dem größten Einfluss auf Ihr Geschäft und die höchste Relevanz für Ihre Stakeholder.\n• Governance-Architektur: Aufbau effektiver Entscheidungsstrukturen, die ESG-Belange systematisch in Vorstandsentscheidungen einbeziehen und Verantwortlichkeiten klar definieren.\n• Performance-Management: Entwicklung von ESG-KPIs, die in Management-Incentivierung und Unternehmenssteuerung integriert werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir einen authentischen und wirkungsvollen Stakeholder-Dialog entwickeln, der über Marketing hinausgeht und echte Geschäftswerte generiert?",
        answer: "Ein strategischer Stakeholder-Dialog ist weit mehr als eine Kommunikationsmaßnahme – er ist ein zentrales Instrument der Geschäftsentwicklung, das neue Marktchancen erschließt, Risiken frühzeitig identifiziert und Innovation vorantreibt. Authentizität und Wirkungsorientierung sind dabei entscheidend für langfristigen Erfolg und Glaubwürdigkeit bei allen Anspruchsgruppen.\n\n🔍 Strategische Dimensionen des Stakeholder-Engagements:\n• Marktintelligenz und Innovation: Systematisches Stakeholder-Feedback liefert wertvolle Insights für Produktentwicklung, Markttrends und Kundenbedarfe, die traditionelle Marktforschung nicht erfassen kann.\n• Risiko-Früherkennung: Stakeholder fungieren als Frühwarnsystem für emerging Risks, regulatorische Änderungen und gesellschaftliche Trends, die das Geschäft beeinflussen können.\n• Legitimität und Social License to Operate: Echter Dialog baut Vertrauen auf und sichert die gesellschaftliche Akzeptanz für Geschäftstätigkeiten, was besonders in sensiblen Branchen kritisch ist.\n• Kooperationspartnerschaften: Stakeholder-Engagement identifiziert potenzielle Partner für Innovation, Nachhaltigkeit und Markterschließung.\n\n💡 ADVISORIs Ansatz für strategisches Stakeholder-Engagement:\n• Stakeholder-Mapping und -Priorisierung: Systematische Analyse und Kategorisierung aller relevanten Anspruchsgruppen nach Einfluss, Interesse und strategischer Bedeutung für das Unternehmen.\n• Multi-Channel-Engagement-Strategie: Entwicklung differenzierter Kommunikations- und Interaktionsformate, die den spezifischen Bedürfnissen und Präferenzen verschiedener Stakeholder-Gruppen entsprechen.\n• Feedback-Integration in Geschäftsprozesse: Aufbau systematischer Prozesse zur Sammlung, Analyse und Integration von Stakeholder-Input in Entscheidungsfindung und Strategieentwicklung.\n• Transparenz und Rechenschaftslegung: Implementierung regelmäßiger Berichterstattung über Fortschritte, Herausforderungen und Learnings aus dem Stakeholder-Dialog."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir ESG-Ziele authentisch in unsere Unternehmensstrategie und KPIs integrieren, ohne Greenwashing-Risiken einzugehen?",
        answer: "Die Integration von ESG-Zielen in Unternehmensstrategie und Performance-Management erfordert einen systematischen Ansatz, der Authentizität, Messbarkeit und strategische Relevanz miteinander verbindet. Erfolgreiche ESG-Integration geht über symbolische Gesten hinaus und verankert Nachhaltigkeit als integralen Bestandteil der Wertschöpfung und Unternehmensführung.\n\n⚖️ Prinzipien authentischer ESG-Integration:\n• Materialitätsfokus: Konzentration auf ESG-Themen, die sowohl für das Geschäft als auch für Stakeholder von substantieller Bedeutung sind, statt oberflächlicher Behandlung vieler Bereiche.\n• Science-based Targets: Verwendung wissenschaftlich fundierter Zielsetzungen, besonders bei Klimazielen, die glaubwürdig und ambitioniert sind.\n• Operationalisierung: Übersetzung strategischer ESG-Ziele in konkrete, messbare Aktionspläne mit klaren Verantwortlichkeiten und Timelines.\n• Transparenz und Ehrlichkeit: Offene Kommunikation über Fortschritte, aber auch Herausforderungen und Rückschläge bei der ESG-Umsetzung.\n\n📊 ADVISORIs Framework für strategische ESG-Integration:\n• ESG-Materialitätsanalyse: Systematische Bewertung der Relevanz verschiedener ESG-Themen für Ihr Geschäftsmodell und Ihre Stakeholder durch quantitative und qualitative Methoden.\n• Strategic Fit Assessment: Analyse der Synergien zwischen ESG-Zielen und bestehenden Geschäftszielen zur Identifikation von Win-Win-Opportunitäten.\n• KPI-Integration und -Kaskadierung: Entwicklung von ESG-KPIs, die in bestehende Management-Dashboards integriert und auf verschiedene Organisationsebenen heruntergebrochen werden.\n• Incentive Alignment: Verknüpfung von ESG-Performance mit Management-Vergütung und Mitarbeiter-Anreizsystemen zur Sicherstellung konsequenter Umsetzung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Governance-Strukturen benötigen wir, um ESG-Transformation effektiv zu steuern und gleichzeitig Geschäftsagilität zu erhalten?",
        answer: "Effektive ESG-Governance erfordert ein ausgewogenes System aus Struktur und Flexibilität, das strategische Führung mit operativer Agilität verbindet. Die Herausforderung liegt darin, robuste Kontroll- und Steuerungsmechanismen zu implementieren, ohne die Innovationskraft und Reaktionsfähigkeit des Unternehmens zu beeinträchtigen.\n\n🏗️ Architekturelement einer agilen ESG-Governance:\n• Board-Level Oversight: Etablierung eines ESG-Komitees auf Vorstandsebene mit definierten Kompetenzen, regelmäßigen Reviews und direkter Anbindung an die Geschäftsführung.\n• Executive Sponsorship: Benennung eines C-Level Sponsors für ESG-Themen mit klarem Mandat, ausreichenden Ressourcen und direkter Berichtslinie an CEO oder Board.\n• Cross-funktionale ESG-Teams: Aufbau interdisziplinärer Teams, die verschiedene Geschäftsbereiche repräsentieren und ESG-Integration in alle Unternehmensfunktionen sicherstellen.\n• Agile Decision-Making: Implementierung schneller Entscheidungsprozesse für ESG-relevante Themen durch klare Eskalationswege und Entscheidungskompetenzen.\n\n⚡ ADVISORIs Ansatz für agile ESG-Governance:\n• Governance-Design: Entwicklung maßgeschneiderter Governance-Strukturen, die zu Ihrer Unternehmenskultur, -größe und -komplexität passen.\n• Role & Responsibility Matrix: Klare Definition von Rollen, Verantwortlichkeiten und Berichtslinien für alle ESG-relevanten Positionen und Gremien.\n• Prozess-Optimierung: Gestaltung effizienter ESG-Entscheidungsprozesse, die Qualität mit Geschwindigkeit verbinden.\n• Technology Enablement: Implementierung digitaler ESG-Management-Plattformen, die Datensammlung, -analyse und -berichterstattung automatisieren und Echtzeit-Steuerung ermöglichen."
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
