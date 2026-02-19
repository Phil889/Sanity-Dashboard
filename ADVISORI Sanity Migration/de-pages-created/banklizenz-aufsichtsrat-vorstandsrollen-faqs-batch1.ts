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
    console.log('Updating Banklizenz Aufsichtsrat & Vorstandsrollen page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-aufsichtsrat-vorstandsrollen' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-aufsichtsrat-vorstandsrollen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist die strategische Besetzung von Aufsichtsrat und Vorstand für die C-Suite mehr als nur eine BaFin-Anforderung und wie transformiert ADVISORI dies zu einem nachhaltigen Wettbewerbsvorteil?",
        answer: "Für C-Level-Führungskräfte stellt die Qualität von Aufsichtsrat und Vorstand weit mehr dar als die bloße Erfüllung von Fit & Proper Kriterien - sie ist das Fundament für strategische Führungsexzellenz, operative Effizienz und nachhaltigen Unternehmenserfolg. ADVISORI positioniert Board-Excellence als strategischen Enabler, der nicht nur regulatorische Compliance sicherstellt, sondern auch die Grundlage für Superior Governance und Marktführerschaft schafft.\n\n🎯 Strategische Leadership-Dimensionen für die Führungsebene:\n• Governance-Excellence als Competitive Advantage: Erstklassige Board-Strukturen signalisieren institutionelle Reife und schaffen Vertrauen bei Investoren, Partnern und Aufsichtsbehörden für erweiterte Geschäftserlaubnisse.\n• Decision-Making-Velocity und operative Effizienz: Professionell besetzte Gremien eliminieren Entscheidungsengpässe, optimieren strategische Planung und beschleunigen Market Response-Zeiten.\n• Risk Management-Integration: Erfahrene Führungskräfte mit Banking-Expertise integrieren Risikomanagement nahtlos in strategische Entscheidungen und minimieren Operational Risk.\n• Stakeholder Confidence und Reputation Management: Board-Qualität beeinflusst direkt Unternehmensbewertungen, Kapitalkosten und strategische Partnerschaften mit Premium-Institutionen.\n\n🏛️ Der ADVISORI Board-Excellence-Ansatz:\n• Strategic Board Architecture: Wir entwickeln Board-Strukturen, die nicht nur BaFin-konform sind, sondern optimal auf Ihre Geschäftsstrategie, Wachstumsziele und operative Anforderungen ausgerichtet sind.\n• Executive Excellence Sourcing: Zugang zu einem kuratierten Netzwerk von Top-Tier Banking-Führungskräften mit bewährter Track Record in erfolgreichen Lizenzierungen und Geschäftsentwicklung.\n• Governance-as-a-Service: Kontinuierliche Board-Effectiveness-Optimierung durch Best-Practice-Integration, Performance-Monitoring und strategische Advisory-Services.\n• Regulatory Capital Efficiency: Board-Qualität, die bei der BaFin Vertrauen aufbaut und zu günstigeren Kapitalanforderungen, erweiterten Erlaubnissen und reduzierten Audit-Intensitäten führt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie optimiert ADVISORI den Fit & Proper Assessment-Prozess, um C-Level-Führungskräften nicht nur BaFin-Compliance zu gewährleisten, sondern auch strategische Führungskompetenzen zu maximieren?",
        answer: "Der Fit & Proper Assessment-Prozess ist weit mehr als eine regulatorische Hürde - er ist eine strategische Opportunity zur Demonstration von Leadership Excellence und zur Positionierung als Premium-Institution. ADVISORI hat einen innovativen Assessment-Ansatz entwickelt, der nicht nur alle BaFin-Kriterien übertrifft, sondern auch die strategischen Führungskompetenzen und Marktpositionierung der Kandidaten optimiert.\n\n🔍 Advanced Fit & Proper Excellence-Framework:\n• Comprehensive Leadership Assessment: Über BaFin-Mindestanforderungen hinausgehende Bewertung von strategischer Vision, Change Management-Kompetenz und Digital Banking-Expertise.\n• Track Record Validation: Systematische Analyse und Dokumentation von Erfolgsgeschichten, Turnaround-Erfahrungen und Wertschöpfungs-Nachweisen in vergleichbaren Banking-Kontexten.\n• Regulatory Readiness Optimization: Intensive Vorbereitung auf BaFin-Interviews durch Simulation typischer Fragestellungen und Entwicklung überzeugender Narrative.\n• Stakeholder Confidence Building: Aufbau von Kandidaten-Profilen, die nicht nur regulatorische Standards erfüllen, sondern auch Investor- und Partner-Vertrauen maximieren.\n\n🎖️ ADVISORI's Strategic Assessment-Methodology:\n• 360-Degree Leadership Evaluation: Umfassende Bewertung von fachlicher Kompetenz, persönlicher Integrität, Strategic Thinking und Execution-Fähigkeiten durch bewährte Assessment-Tools.\n• Industry Intelligence Integration: Nutzung von Markt-Insights und regulatorischen Trends zur Positionierung von Kandidaten als Forward-Thinking Leaders mit zukunftsorientierter Vision.\n• BaFin Interface Optimization: Strategische Preparation und Coaching für regulatorische Interactions zur Maximierung von First Impressions und Vertrauensaufbau.\n• Continuous Excellence Development: Ongoing Leadership Development und Board-Effectiveness-Programme zur kontinuierlichen Steigerung der Governance-Qualität post-Lizenzierung.\n• Risk Mitigation Framework: Proaktive Identifikation und Mitigation potentieller Fit & Proper Risiken durch comprehensive Due Diligence und Alternative Scenario Planning."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In welcher Weise strukturiert ADVISORI Board-Kompetenzen und Governance-Prozesse, um C-Suite-Entscheidungen zu beschleunigen und gleichzeitig BaFin-Compliance und Risikomanagement zu optimieren?",
        answer: "Moderne Banking-Governance erfordert die perfekte Balance zwischen Decision Speed und Risk Control. ADVISORI entwickelt innovative Board-Strukturen, die nicht nur alle BaFin-Anforderungen erfüllen, sondern auch C-Level-Führungskräften maximale strategische Agilität bei optimaler Risikokontrolle ermöglichen. Unser Ansatz verbindet Regulatory Excellence mit Operational Efficiency.\n\n⚡ High-Performance Governance Architecture:\n• Smart Decision Delegation: Entwicklung intelligenter Entscheidungsmatrizen, die Routine-Entscheidungen auf operative Ebenen delegieren und C-Level-Kapazitäten für strategische Priorities freisetzen.\n• Risk-Calibrated Authority Limits: Dynamische Befugnisstrukturen, die bei Low-Risk-Aktivitäten maximale Agilität ermöglichen, aber bei Material-Risks angemessene Board-Oversight aktivieren.\n• Digital Governance Integration: Implementierung digitaler Board-Tools für Real-time-Information, beschleunigte Entscheidungsprozesse und automatisierte Compliance-Dokumentation.\n• Committee Excellence Design: Optimierte Ausschussstrukturen mit klaren Mandaten, die Expertise bündeln und Entscheidungsqualität bei minimiertem Zeitaufwand maximieren.\n\n🎯 ADVISORI's Agile Governance Framework:\n• Lean Meeting Architecture: Strukturierung effizienter Board-Meetings mit fokussierten Agendas, Pre-Read-Optimierung und Action-oriented Decision-Making-Prozessen.\n• Exception-Based Reporting: Entwicklung intelligenter Management Information Systems, die nur bei Abweichungen oder kritischen Entwicklungen Board-Attention erfordern.\n• Scenario-Based Pre-Approvals: Etablierung von Pre-Approved Operating Windows für vorhersehbare Geschäftssituationen zur Eliminierung von Delay-Risiken.\n• Cross-Functional Integration: Board-Strukturen, die nahtlose Koordination zwischen Risk-, Audit-, Strategy- und Operations-Funktionen ermöglichen ohne Silos oder Redundanzen.\n• Performance-Driven Optimization: Kontinuierliche Board-Effectiveness-Messung und -Optimierung durch KPIs wie Decision Speed, Implementation Quality und Stakeholder Satisfaction."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie positioniert ADVISORI Board-Excellence als Werttreiber für Unternehmensbewertungen und strategische Partnerschaften, um C-Level-Investitionen in Governance zu ROI-positiven Assets zu transformieren?",
        answer: "Erstklassige Board-Strukturen und Führungsqualität sind mächtige, aber oft unterschätzte Werttreiber, die direkt Unternehmensbewertungen steigern und strategische Opportunities erschließen. ADVISORI transformiert Governance-Investitionen in messbare Business Assets, die Kapitalkosten senken, Premium-Partnerschaften ermöglichen und Competitive Advantages schaffen.\n\n💎 Board-Excellence als Strategic Asset:\n• Valuation Premium durch Governance-Quality: Institutionelle Investoren bewerten Unternehmen mit Superior Governance mit 20-30% höheren Multiples, da sie Lower Execution Risk und Higher Predictability signalisieren.\n• Capital Efficiency Optimization: Exzellente Board-Strukturen reduzieren Risikoprämien bei Finanzierungen, senken Cost of Capital und verbessern Zugang zu Premium-Investor-Segmenten.\n• Strategic Partnership Enablement: Top-Tier Governance öffnet Türen zu strategischen Allianzen mit führenden Finanzinstituten, die nur mit Governance-exzellenten Partnern kooperieren.\n• M&A Attractiveness: Professionelle Board-Strukturen sind ein Key Value Driver bei Akquisitionsverhandlungen und können Deal-Valuations signifikant steigern.\n\n🏆 Der ADVISORI Value-Creation-Ansatz:\n• Governance ROI Measurement: Entwicklung quantifizierbarer Metriken zur Demonstration des Financial Impact von Board-Excellence auf Unternehmenswert und operative Performance.\n• Investor Relations Excellence: Board-Narratives und Governance-Stories, die in Investor Presentations, Due Diligence-Prozessen und Strategic Communications überzeugen.\n• Regulatory Capital Optimization: Board-Qualität, die bei Aufsichtsbehörden Premium-Treatment ermöglicht und zu günstigeren Kapitalanforderungen und erweiterten Geschäftserlaubnissen führt.\n• Market Positioning Strategy: Governance-Excellence als Differentiator in Competitive Situations, Tender-Prozessen und Partnership-Negotiations.\n• Succession Planning Value: Aufbau von Leadership Pipelines und Board-Strukturen, die Long-term Value Creation und Sustainable Growth ermöglichen."
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
