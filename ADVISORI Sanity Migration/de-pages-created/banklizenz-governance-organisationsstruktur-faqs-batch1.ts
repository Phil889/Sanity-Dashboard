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
    console.log('Updating Banklizenz Governance & Organisationsstruktur page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-governance-organisationsstruktur' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-governance-organisationsstruktur" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine strategisch konzipierte Governance-Struktur für die C-Suite mehr als nur eine BaFin-Anforderung und wie transformiert ADVISORI dies zu einem Wettbewerbsvorteil?",
        answer: "Für die C-Suite stellt eine exzellente Governance-Struktur weit mehr dar als die bloße Erfüllung von BaFin-Mindestanforderungen - sie ist das Fundament für operative Exzellenz, Risikominimierung und nachhaltigen Geschäftserfolg. ADVISORI positioniert Governance als strategischen Enabler, der nicht nur regulatorische Compliance sicherstellt, sondern auch die Grundlage für skalierbare Geschäftsmodelle und Investor Confidence schafft.\n\n🎯 Strategische Governance-Dimensionen für die Führungsebene:\n• Operative Effizienz und Entscheidungsgeschwindigkeit: Klare Governance-Strukturen eliminieren Entscheidungsengpässe, reduzieren Time-to-Market und optimieren die Allokation von Führungsressourcen auf wertschöpfende Aktivitäten.\n• Risikomanagement und Compliance-Integration: Proaktive Governance-Frameworks minimieren regulatorische Risiken, reduzieren Audit-Findings und schaffen Vertrauen bei Aufsichtsbehörden für zukünftige Geschäftserweiterungen.\n• Investor Relations und Kapitaleffizienz: Institutionelle Governance-Qualität signalisiert professionelles Management und reduziert Risikoprämien bei Finanzierungen, M&A-Transaktionen und Partnerschaften.\n• Skalierbarkeit und Organisationsentwicklung: Durchdachte Strukturen schaffen die Basis für nachhaltiges Wachstum ohne strukturelle Reorganisationen, die Kosten und Disruption verursachen.\n\n🏛️ Der ADVISORI Governance-Excellence-Ansatz:\n• Business-Aligned Design: Wir entwickeln Governance-Strukturen, die nicht nur BaFin-konform sind, sondern optimal auf Ihre Geschäftsstrategie, Wachstumspläne und operative Anforderungen ausgerichtet sind.\n• Future-Proof Architecture: Berücksichtigung zukünftiger regulatorischer Entwicklungen und Geschäftsmodell-Evolutionen zur Vermeidung kostspieliger Restructuring-Prozesse.\n• Stakeholder-Value Creation: Positionierung der Governance als Werttreiber für alle Stakeholder - von Investoren über Aufsichtsbehörden bis hin zu operativen Teams.\n• Competitive Intelligence Integration: Nutzung von Best Practices führender Finanzinstitute zur Schaffung von Governance-Strukturen, die Marktstandards übertreffen und Competitive Advantage generieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie optimiert ADVISORI die Balance zwischen regulatorischer Compliance und operativer Agilität in der Governance-Struktur, um C-Level-Führungskräften maximale strategische Flexibilität zu erhalten?",
        answer: "Die größte Herausforderung moderner Banking-Governance liegt in der Balance zwischen strenger regulatorischer Compliance und der für Wettbewerbsfähigkeit essentiellen operativen Agilität. ADVISORI hat einen innovativen Ansatz entwickelt, der diese scheinbar widersprüchlichen Anforderungen harmonisiert und C-Level-Führungskräften maximale strategische Handlungsfreiheit bei vollständiger regulatorischer Compliance ermöglicht.\n\n⚖️ Smart Governance Design für operative Exzellenz:\n• Lean Compliance Architecture: Entwicklung schlanker Governance-Prozesse, die alle BaFin-Anforderungen erfüllen, aber Bürokratie minimieren und Entscheidungsgeschwindigkeit maximieren.\n• Dynamic Authority Matrices: Flexible Entscheidungsbefugnisse, die bei Standard-Geschäftstransaktionen Agilität ermöglichen, aber bei kritischen Risiken angemessene Kontrollen aktivieren.\n• Technology-Enabled Governance: Integration digitaler Tools für automatisierte Compliance-Monitoring, Real-time-Reporting und KI-gestützte Risikoerkennung zur Reduzierung manueller Oversight-Prozesse.\n• Escalation-Optimierung: Intelligente Escalation-Mechanismen, die nur bei materiellen Risiken C-Level-Intervention erfordern und Routine-Entscheidungen auf operativer Ebene ermöglichen.\n\n🚀 ADVISORI's Agile Governance Framework:\n• Modular Governance Design: Aufbau flexibler Governance-Module, die bei Geschäftsmodell-Änderungen oder regulatorischen Updates schnell angepasst werden können, ohne Gesamtstrukturen zu destabilisieren.\n• Pre-Approved Operating Windows: Entwicklung von pre-genehmigten Handlungskorridoren für Standard-Geschäftsaktivitäten, die operative Teams ohne zusätzliche Genehmigungen nutzen können.\n• Risk-Based Oversight: Implementierung risikobasierter Governance-Intensität, die bei Low-Risk-Aktivitäten minimale Kontrollen und bei High-Risk-Bereichen intensive Oversight vorsieht.\n• Continuous Optimization: Etablierung von Feedback-Loops und Performance-Metrics zur kontinuierlichen Optimierung der Governance-Effizienz ohne Kompromisse bei der Compliance-Qualität.\n• Strategic Flexibility Preservation: Schutz der strategischen Entscheidungsfreiheit der C-Suite durch Governance-Designs, die Innovation und Marktreaktion ermöglichen, während sie regulatorische Boundaries respektieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In welcher Weise entwickelt ADVISORI Governance-Strukturen, die nicht nur aktuelle BaFin-Anforderungen erfüllen, sondern auch zukünftige regulatorische Entwicklungen antizipieren und C-Suite-Investitionen zukunftssicher machen?",
        answer: "Moderne Banking-Governance muss über die Erfüllung aktueller BaFin-Anforderungen hinausgehen und proaktiv zukünftige regulatorische Entwicklungen antizipieren. ADVISORI entwickelt zukunftssichere Governance-Architekturen, die nicht nur heutige Compliance-Standards übertreffen, sondern auch als flexible Plattform für emerging Regulatory Requirements und Geschäftsmodell-Innovationen dienen.\n\n🔮 Future-Proofing Governance Architecture:\n• Regulatory Horizon Scanning: Kontinuierliche Analyse von EU-weiten regulatorischen Trends, EBA-Guidelines und internationalen Basel-Entwicklungen zur proaktiven Integration in Governance-Designs.\n• Adaptive Compliance Framework: Entwicklung von Governance-Strukturen mit built-in Flexibilität für regulatorische Updates, ohne dass strukturelle Reorganisationen erforderlich werden.\n• Digital Governance Readiness: Vorbereitung auf digitale Regulatory Requirements wie automatisierte Reporting, Real-time-Compliance-Monitoring und AI-basierte Risikomanagement-Integration.\n• ESG and Sustainability Integration: Antizipation wachsender Nachhaltigkeits-Governance-Anforderungen und Integration in Organisationsstrukturen und Entscheidungsprozesse.\n\n🏗️ ADVISORI's Forward-Looking Governance Design:\n• Modular Architecture Development: Aufbau von Governance-Systemen mit modularen Komponenten, die bei neuen regulatorischen Anforderungen erweitert oder angepasst werden können, ohne Kernsysteme zu disruption.\n• Technology-Native Governance: Integration von RegTech-Lösungen und digitalen Governance-Tools, die für zukünftige Automatisierungs- und Digitalisierungsanforderungen vorbereitet sind.\n• Cross-Jurisdictional Scalability: Entwicklung von Governance-Frameworks, die bei internationaler Expansion oder Passport-Nutzung in andere EU-Märkte skalierbar sind.\n• Innovation-Compatible Structures: Governance-Designs, die Fintech-Partnerschaften, digitale Asset-Integration und neue Geschäftsmodelle unterstützen, während sie regulatorische Compliance aufrechterhalten.\n• Stress-Test Governance: Aufbau von Governance-Systemen, die auch bei regulatorischen Stress-Szenarien, Marktturbulenzen oder Geschäftsmodell-Pivots robust und effektiv bleiben."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie maximiert ADVISORI durch strategische Governance-Excellence die Attraktivität für Investoren, Partner und Akquisitionsziele und transformiert Compliance-Kosten in strategische Vermögenswerte?",
        answer: "Erstklassige Governance-Strukturen sind ein mächtiger, aber oft unterschätzter Werttreiber, der weit über Compliance-Erfüllung hinausgeht. ADVISORI transformiert Governance-Investitionen in strategische Assets, die Unternehmensbewertungen steigern, Kapitalkosten senken und neue Geschäftsmöglichkeiten erschließen. Unsere Governance-Excellence-Strategie positioniert Ihr Institut als Premium-Player im Markt.\n\n💎 Governance als Werttreiber und Competitive Advantage:\n• Valuation Premium durch Governance-Excellence: Institutionelle Investoren bewerten Unternehmen mit überlegenen Governance-Strukturen mit 15-25% höheren Multiples, da sie geringere Regulatory Risk und höhere Operational Predictability signalisieren.\n• Reduced Cost of Capital: Exzellente Governance reduziert Risikoprämien bei Debt-Financing, Equity-Raises und strategischen Partnerschaften, was direkt die Kapitalkosten optimiert.\n• M&A Attractiveness: Professionelle Governance-Strukturen sind ein Key Success Factor bei Akquisitionsverhandlungen und können Deal-Valuations um 10-20% steigern.\n• Partnership Premium: Erstklassige Governance öffnet Türen zu strategischen Allianzen mit Top-Tier-Institutionen, die nur mit compliance-exzellenten Partnern kooperieren.\n\n🏆 Der ADVISORI Governance-to-Value-Ansatz:\n• Investor Relations Optimization: Entwicklung von Governance-Narratives und -Demonstrationen, die in Investor Presentations, Due Diligence-Prozessen und Board-Communications überzeugen.\n• Regulatory Capital Efficiency: Governance-Strukturen, die bei Aufsichtsbehörden Vertrauen aufbauen und zu günstigeren Kapitalanforderungen, erweiterten Geschäftserlaubnissen und reduzierten Audit-Intensitäten führen.\n• Operational Excellence Signaling: Governance-Prozesse, die operative Kompetenz demonstrieren und bei Kunden, Partnern und Stakeholdern Vertrauen in die Institutionskompetenz schaffen.\n• IP and Methodology Development: Transformation von Governance-Best-Practices in proprietary Methodologien, die als Consulting-Services, White-Label-Lösungen oder Lizenz-Revenue monetarisiert werden können.\n• Strategic Optionality Creation: Governance-Strukturen, die neue Geschäftsfelder ermöglichen, internationale Expansion erleichtern und als Plattform für Fintech-Innovationen dienen."
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
