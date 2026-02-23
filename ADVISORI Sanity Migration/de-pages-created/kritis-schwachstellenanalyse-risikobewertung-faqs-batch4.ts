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
    console.log('Updating KRITIS Schwachstellenanalyse & Risikobewertung page with C-Level FAQs batch 4 (German)...')
    
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
        _key: generateKey('faq', 13),
        question: "Wie unterstützt ADVISORI bei der Quantifizierung von Cyber-Risiken für Versicherungsverträge und wie kann dies unsere Versicherungskosten optimieren?",
        answer: "Die präzise Quantifizierung von Cyber-Risiken wird zunehmend entscheidend für die Verhandlung günstiger Cyber-Versicherungskonditionen. ADVISORI unterstützt Sie dabei, Ihre Risikoprofile so zu dokumentieren und zu kommunizieren, dass Versicherer Ihre tatsächliche Risikolage verstehen und entsprechend faire Prämien anbieten können.\n\n💰 Versicherungsoptimierung durch präzise Risikoquantifizierung:\n• Actuarial-Grade-Risk-Assessment: Entwicklung von Risikobewertungen, die den Standards von Versicherungsmathematikern entsprechen und detaillierte Wahrscheinlichkeitsmodelle für verschiedene Schadensszenarien bereitstellen.\n• Loss-Expectancy-Modeling: Präzise Berechnung von Single-Loss-Expectancy (SLE) und Annual-Loss-Expectancy (ALE) für verschiedene Bedrohungsszenarien basierend auf Ihrer spezifischen Infrastruktur.\n• Control-Effectiveness-Quantification: Messbare Bewertung der Wirksamkeit implementierter Sicherheitskontrollen und deren Auswirkungen auf die Schadenswahrscheinlichkeit.\n• Residual-Risk-Documentation: Klare Dokumentation verbleibender Risiken nach Implementierung von Schutzmaßnahmen für präzise Versicherungsdeckung.\n\n📋 Insurance-Ready-Dokumentation und Verhandlungsunterstützung:\n• Insurance-Application-Support: Unterstützung bei der Beantwortung detaillierter Versicherungsfragebögen mit präzisen, nachvollziehbaren Risikodaten.\n• Claims-Prevention-Evidence: Dokumentation proaktiver Maßnahmen zur Schadensprävention, die Versicherern das reduzierte Risiko von Claims demonstrieren.\n• Incident-Response-Capability-Assessment: Bewertung und Dokumentation Ihrer Fähigkeiten zur schnellen Incident-Response, die Schadenshöhen reduzieren können.\n• Business-Continuity-Quantification: Quantifizierung Ihrer Business-Continuity-Fähigkeiten und deren Auswirkungen auf potenzielle Betriebsunterbrechungsschäden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt die Schwachstellenanalyse bei M&A-Transaktionen in kritischen Infrastrukturen und wie unterstützt ADVISORI bei Due-Diligence-Prozessen?",
        answer: "Bei M&A-Transaktionen in kritischen Infrastrukturen sind Cyber-Risiken oft entscheidende Wertfaktoren, die den Deal-Wert erheblich beeinflussen können. ADVISORI unterstützt sowohl Käufer als auch Verkäufer dabei, Cyber-Risiken transparent zu bewerten und in Transaktionsentscheidungen zu integrieren.\n\n🔍 M&A-fokussierte Cyber-Due-Diligence:\n• Asset-Valuation-Impact-Analysis: Bewertung, wie identifizierte Schwachstellen den Unternehmenswert beeinflussen und welche Investitionen für Remediation erforderlich sind.\n• Integration-Risk-Assessment: Analyse der Cyber-Risiken bei der Integration von IT-Systemen und Geschäftsprozessen nach einer Akquisition.\n• Regulatory-Compliance-Transfer: Bewertung der Übertragbarkeit von Compliance-Status und regulatorischen Genehmigungen bei Eigentümerwechseln.\n• Hidden-Liability-Identification: Identifikation potenzieller versteckter Cyber-Liabilities, die sich auf die Transaktionsbewertung auswirken könnten.\n\n💼 Strategic Transaction Support:\n• Deal-Structure-Optimization: Beratung zur optimalen Strukturierung von Transaktionen unter Berücksichtigung von Cyber-Risiken und Compliance-Anforderungen.\n• Warranty-and-Indemnity-Support: Unterstützung bei der Formulierung angemessener Cyber-Security-Warranties und Indemnities in Kaufverträgen.\n• Post-Merger-Integration-Planning: Entwicklung von Integrationsplänen, die Cyber-Sicherheit von Anfang an berücksichtigen und Risiken minimieren.\n• Synergy-Realization-Security: Bewertung, wie Cyber-Security-Verbesserungen zur Realisierung von Transaktionssynergien beitragen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie adressiert ADVISORI die besonderen Herausforderungen der Schwachstellenanalyse in Cloud-Hybrid-Umgebungen kritischer Infrastrukturen?",
        answer: "Die Migration kritischer Infrastrukturen in Cloud-Hybrid-Umgebungen schafft neue Komplexitäten im Schwachstellenmanagement. ADVISORI verfügt über spezialisierte Expertise in der Bewertung von Multi-Cloud- und Hybrid-Architekturen unter Berücksichtigung der besonderen Anforderungen kritischer Infrastrukturen.\n\n☁️ Cloud-Hybrid-Sicherheitsarchitektur-Bewertung:\n• Multi-Cloud-Security-Posture-Assessment: Umfassende Bewertung der Sicherheitslage über verschiedene Cloud-Provider hinweg mit Fokus auf konsistente Sicherheitsstandards.\n• Shared-Responsibility-Model-Analysis: Klare Abgrenzung und Bewertung der Sicherheitsverantwortlichkeiten zwischen Cloud-Providern und Ihrem Unternehmen.\n• Data-Sovereignty-Risk-Assessment: Bewertung von Risiken bezüglich Datenhoheit und regulatorischer Compliance in verschiedenen Cloud-Jurisdiktionen.\n• Cloud-Native-Security-Integration: Analyse der Integration von Cloud-nativen Sicherheitstools mit bestehenden On-Premise-Sicherheitsarchitekturen.\n\n🔗 Hybrid-Connectivity-und-Integration-Security:\n• Network-Segmentation-Effectiveness: Bewertung der Wirksamkeit von Netzwerksegmentierung zwischen Cloud- und On-Premise-Umgebungen.\n• Identity-and-Access-Management-Kontinuität: Analyse der nahtlosen und sicheren Integration von IAM-Systemen über Hybrid-Umgebungen hinweg.\n• Data-Flow-Security-Analysis: Detaillierte Bewertung der Sicherheit von Datenflüssen zwischen verschiedenen Umgebungen und deren Verschlüsselung.\n• Disaster-Recovery-Cloud-Integration: Bewertung der Integration von Cloud-basierten Disaster-Recovery-Lösungen mit kritischen On-Premise-Systemen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche innovativen Technologien und Methoden setzt ADVISORI ein, um auch schwer erkennbare und latente Schwachstellen in komplexen Infrastrukturen zu identifizieren?",
        answer: "Die Identifikation latenter und schwer erkennbarer Schwachstellen erfordert fortschrittliche Technologien und innovative Ansätze. ADVISORI kombiniert cutting-edge Tools mit bewährten Methoden, um auch versteckte Risiken in komplexen Infrastrukturen aufzudecken.\n\n🤖 Advanced Technology Integration:\n• AI-Enhanced-Vulnerability-Discovery: Einsatz von Machine-Learning-Algorithmen zur Identifikation anomaler Verhaltensmuster und potenzieller Zero-Day-Schwachstellen.\n• Behavioral-Analysis-Systems: Implementierung von User- und Entity-Behavior-Analytics (UEBA) zur Erkennung subtiler Kompromittierungszeichen.\n• Graph-Based-Attack-Path-Analysis: Verwendung von Graph-Algorithmen zur Visualisierung komplexer Angriffspfade und Identifikation nicht-offensichtlicher Schwachstellenkombinationen.\n• Quantum-Resilience-Assessment: Proaktive Bewertung der Resistenz gegen zukünftige Quantum-Computing-Bedrohungen.\n\n🔬 Innovative Assessment-Methodologien:\n• Purple-Team-Continuous-Assessment: Integration von Red-Team-Angriffssimulationen mit Blue-Team-Defense-Analytics für kontinuierliche Schwachstellenentdeckung.\n• Digital-Twin-Security-Modeling: Verwendung digitaler Zwillinge Ihrer Infrastruktur für sichere Schwachstellentests ohne Produktionsbeeinträchtigung.\n• Chaos-Engineering-Security: Anwendung von Chaos-Engineering-Prinzipien zur Identifikation von Sicherheitsschwächen unter Stress-Bedingungen.\n• Supply-Chain-Deep-Dive-Analysis: Tiefgreifende Analyse von Software- und Hardware-Lieferketten bis auf Komponenten- und Code-Ebene."
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
