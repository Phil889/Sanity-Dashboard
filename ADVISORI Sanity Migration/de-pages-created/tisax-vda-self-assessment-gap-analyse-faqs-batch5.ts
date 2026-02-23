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
    console.log('Updating TISAX VDA Self-Assessment Gap Analyse page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'tisax-vda-self-assessment-gap-analyse' })
    
    if (!existingDoc) {
      throw new Error('Document "tisax-vda-self-assessment-gap-analyse" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie unterstützt ADVISORI bei der TISAX Gap Analyse die Bewertung und Integration von Third-Party-Services und Cloud-Providern in die Compliance-Strategie?",
        answer: "Moderne Automotive-Unternehmen sind zunehmend auf Third-Party-Services und Cloud-Provider angewiesen, von Entwicklungstools bis hin zu Produktionssystemen. Diese Abhängigkeiten schaffen komplexe Compliance-Herausforderungen, da TISAX-Verantwortlichkeiten auf externe Partner übertragen werden, ohne dass die direkte Kontrolle besteht. ADVISORI hat spezialisierte Third-Party-Risk-Assessment-Methoden entwickelt, die systematisch externe Dependencies in die TISAX-Compliance-Strategie integrieren.\n\n🔗 Third-Party TISAX-Compliance Komplexitäten:\n• Vendor Due Diligence und Assessment: Systematische Bewertung von Cloud-Providern und Third-Party-Services hinsichtlich ihrer TISAX-Compliance-Fähigkeiten und -Nachweise.\n• Shared Responsibility Model Definition: Klare Abgrenzung von Sicherheitsverantwortlichkeiten zwischen Automotive-Unternehmen und externen Service-Providern entsprechend VDA ISA-Anforderungen.\n• Contract Security Requirements: Integration spezifischer TISAX-Anforderungen in Service-Level-Agreements und Vendor-Verträge mit enforcement-Mechanismen.\n• Continuous Third-Party Monitoring: Etablierung kontinuierlicher Überwachung der TISAX-Compliance von kritischen Third-Party-Services und Reaktionsmechanismen bei Compliance-Abweichungen.\n\n⚖️ ADVISORI's Third-Party Integration Framework:\n• Risk-Based Vendor Categorization: Entwicklung einer systematischen Kategorisierung von Third-Party-Services basierend auf deren Zugang zu kritischen Automotive-Daten und -Systemen.\n• Supplier Security Assessment Program: Implementierung strukturierter Assessment-Programme für die kontinuierliche Bewertung und Verbesserung der TISAX-Compliance von Schlüssellieferanten.\n• Contractual Security Framework: Entwicklung standardisierter vertraglicher Sicherheitsanforderungen, die TISAX-Compliance-Verpflichtungen klar definieren und durchsetzbar machen.\n• Incident Response Coordination: Aufbau koordinierter Incident Response-Prozesse zwischen Automotive-Unternehmen und Third-Party-Providern für effektive Behandlung sicherheitsrelevanter Vorfälle."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Rolle spielt die Integration von ESG (Environmental, Social, Governance) Aspekten in ADVISORI's TISAX Gap Analyse für nachhaltige Automotive-Sicherheit?",
        answer: "ESG-Compliance wird zunehmend zu einem kritischen Erfolgsfaktor für Automotive-Unternehmen, insbesondere bei der Transformation zu Elektromobilität und nachhaltiger Produktion. Informationssicherheit und TISAX-Compliance sind integral mit ESG-Zielen verknüpft, da Cyberrisiken direkte Auswirkungen auf Governance, soziale Verantwortung und Umweltschutz haben können. ADVISORI integriert systematisch ESG-Perspektiven in TISAX-Gap-Analysen für holistische Nachhaltigkeitsstrategien.\n\n🌱 ESG-TISAX Integration Dimensionen:\n• Governance Excellence: Integration von TISAX-Compliance-Governance in übergeordnete ESG-Governance-Strukturen für einheitliche Berichterstattung und Steuerung.\n• Social Responsibility in Security: Berücksichtigung der sozialen Auswirkungen von Cybersecurity-Maßnahmen auf Mitarbeiter, Kunden und Gemeinden in TISAX-Implementierungen.\n• Environmental Impact of Security: Bewertung und Optimierung des Energieverbrauchs und der CO2-Emissionen von TISAX-konformen IT-Sicherheitssystemen.\n• Stakeholder Engagement: Integration von ESG-Stakeholder-Anforderungen in TISAX-Compliance-Strategien für umfassende Stakeholder-Zufriedenheit.\n\n🌍 ADVISORI's ESG-Integrated TISAX Approach:\n• Sustainable Security Architecture: Entwicklung energieeffizienter und umweltfreundlicher TISAX-Compliance-Lösungen, die ESG-Ziele unterstützen ohne Sicherheitseinbußen.\n• ESG-Aligned Risk Assessment: Integration von ESG-Risikofaktoren in TISAX-Risikobewertungen für ganzheitliche Unternehmensrisiko-Perspektiven.\n• Transparent ESG Security Reporting: Entwicklung integrierter Berichterstattungsframeworks, die TISAX-Compliance-Metriken mit ESG-Performance-Indikatoren verknüpfen.\n• Stakeholder-Centric Security Design: Gestaltung von TISAX-Implementierungen, die positive Auswirkungen auf alle ESG-Stakeholder-Gruppen maximieren und negative Effekte minimieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie adressiert ADVISORI in der TISAX Gap Analyse die besonderen Herausforderungen von Start-ups und Scale-ups in der Automotive-Technologie-Landschaft?",
        answer: "Automotive-Start-ups und Scale-ups bringen innovative Technologien in die traditionelle Automobilindustrie, stehen jedoch vor einzigartigen TISAX-Compliance-Herausforderungen. Begrenzte Ressourcen, schnelle Skalierung und evolvierende Geschäftsmodelle erfordern agile und kosteneffiziente TISAX-Implementierungsstrategien. ADVISORI hat spezialisierte Methoden für Start-up-freundliche TISAX-Compliance entwickelt, die Innovation nicht behindern, sondern ermöglichen.\n\n🚀 Start-up-spezifische TISAX-Herausforderungen:\n• Resource-Constrained Implementation: Entwicklung kosteneffizienter TISAX-Compliance-Lösungen für Unternehmen mit begrenzten personellen und finanziellen Ressourcen.\n• Rapid Scaling Security: Gestaltung skalierbarer Sicherheitsarchitekturen, die mit dem schnellen Wachstum von Start-ups mithalten können ohne komplette Neugestaltung.\n• Lean Security Processes: Integration von TISAX-Anforderungen in agile Entwicklungsprozesse und Lean-Start-up-Methoden ohne Verlangsamung der Innovation.\n• Investor Due Diligence Readiness: Vorbereitung auf TISAX-bezogene Due Diligence-Anforderungen von Automotive-OEMs und Investoren für erfolgreiche Partnerschaften und Finanzierungsrunden.\n\n⚡ ADVISORI's Start-up-Optimized TISAX Framework:\n• Minimal Viable Security (MVS): Entwicklung eines Minimal Viable Security-Ansatzes, der kritische TISAX-Anforderungen mit minimalen Ressourcen erfüllt und iterative Verbesserungen ermöglicht.\n• Growth-Ready Architecture: Design flexibler Sicherheitsarchitekturen, die organisches Wachstum unterstützen und bei Bedarf erweitert werden können ohne fundamentale Änderungen.\n• Accelerated Compliance Pathways: Entwicklung beschleunigter TISAX-Implementierungspfade für Start-ups mit klaren Meilensteinen und Quick-Win-Strategien.\n• Ecosystem Integration Support: Unterstützung bei der Integration in das Automotive-Ecosystem durch TISAX-Compliance, einschließlich Vorbereitung auf OEM-Assessments und Partnerschaftsverhandlungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche langfristigen strategischen Vorteile kann die C-Suite durch ADVISORI's systematische TISAX Gap Analyse für die Marktpositionierung und Wettbewerbsdifferenzierung erwarten?",
        answer: "TISAX-Compliance ist mehr als nur eine regulatorische Notwendigkeit – sie ist ein strategisches Differenzierungsinstrument, das nachhaltige Wettbewerbsvorteile in der Automotive-Industrie schaffen kann. Eine systematische Gap-Analyse durch ADVISORI legt das Fundament für eine Sicherheitsexzellenz, die über Compliance hinausgeht und zum Marktführer-Status beiträgt. Diese strategische Dimension von TISAX-Investitionen ist entscheidend für langfristige Unternehmenswertschöpfung.\n\n🏆 Strategische Marktpositionierung durch TISAX-Excellence:\n• Premium Supplier Status: Etablierung als bevorzugter Partner für sicherheitskritische Automotive-Projekte durch überdurchschnittliche TISAX-Maturity und Sicherheitsexpertise.\n• Innovation Partnership Enablement: Zugang zu fortgeschrittenen OEM-Entwicklungsprojekten und strategischen Partnerschaften durch vertrauensvolle Sicherheitsreife.\n• Market Expansion Opportunities: Erschließung neuer Automotive-Märkte und Kunden durch robuste TISAX-Compliance und internationale Sicherheitsstandards.\n• M&A Value Creation: Steigerung des Unternehmenswerts durch nachgewiesene Sicherheitsexzellenz als attraktiver Faktor für Akquisitionen und strategische Investitionen.\n\n🌟 ADVISORI's Strategic Value Creation Framework:\n• Competitive Intelligence Integration: Systematische Analyse der TISAX-Maturity von Wettbewerbern zur Identifikation von Differenzierungsopportunitäten und Marktpositionierungsstrategien.\n• Brand Value Enhancement: Entwicklung von Sicherheitsexzellenz als Markendifferenziator und Vertrauensfaktor für Kunden, Partner und Stakeholder.\n• Innovation Security Leadership: Positionierung als Thought Leader in Automotive-Cybersecurity durch fortgeschrittene TISAX-Implementierungen und Best Practices.\n• Ecosystem Orchestration: Aufbau strategischer Sicherheits-Allianzen und Automotive-Security-Communities zur Stärkung der Marktposition und Einflussnahme auf Industriestandards."
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
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
