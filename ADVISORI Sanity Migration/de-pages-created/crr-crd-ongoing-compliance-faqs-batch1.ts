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
    console.log('Updating CRR/CRD Ongoing Compliance page with FAQs batch 1...')
    
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
        question: "Wie kann die C-Suite sicherstellen, dass die CRR/CRD-Compliance nicht nur ein Kostenfaktor, sondern ein strategischer Vorteil wird?",
        answer: "Für Führungskräfte ist die kontinuierliche Einhaltung der CRR/CRD-Anforderungen mehr als eine regulatorische Pflicht – es ist eine strategische Chance, die Unternehmensperformance zu stärken und Wettbewerbsvorteile zu generieren. Ein proaktives Compliance-Management kann substantiellen Mehrwert schaffen und zum nachhaltigen Unternehmenserfolg beitragen.\n\n🔑 Strategische Vorteile einer proaktiven CRR/CRD-Compliance:\n• Risikominimierung und Kapitaloptimierung: Effiziente Compliance-Prozesse führen zu präziseren Risikoeinschätzungen, was eine optimale Kapitalallokation ermöglicht und die Kapitalrendite verbessert.\n• Vertrauensgewinn bei Stakeholdern: Nachweislich robuste Compliance-Strukturen stärken das Vertrauen von Investoren, Kunden und Aufsichtsbehörden und können zu besseren Finanzierungskonditionen führen.\n• Beschleunigte Entscheidungsprozesse: Transparente und gut dokumentierte Compliance-Prozesse ermöglichen schnellere und fundierte strategische Entscheidungen auf Basis zuverlässiger Daten.\n• Innovationsbeschleuniger: Anstatt Innovation zu hemmen, kann ein gut konzipiertes Compliance-Framework neue Produkte und Dienstleistungen sicherer und schneller auf den Markt bringen.\n\n💼 Maßnahmen für die C-Suite zur Wertsteigerung durch Compliance:\n• Integration in die Unternehmensstrategie: Verankern Sie Compliance-Ziele direkt in der Geschäftsstrategie und dem Vergütungssystem des Managements.\n• Investition in digitale Compliance-Lösungen: Automatisierung und fortschrittliche Analysetools können sowohl Compliance-Kosten senken als auch die Qualität der Compliance-Prozesse verbessern.\n• Entwicklung einer proaktiven Compliance-Kultur: Fördern Sie eine Unternehmenskultur, in der Compliance nicht als Hindernis, sondern als Enabler für nachhaltiges Wachstum verstanden wird.\n• Regelmäßige Board-Level-Reviews: Etablieren Sie ein systematisches Reporting der Compliance-Performance, das über die reine Erfüllung hinausgeht und den geschaffenen Mehrwert quantifiziert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Hauptrisiken bestehen bei mangelhafter kontinuierlicher CRR/CRD-Compliance und wie können diese effektiv adressiert werden?",
        answer: "Eine unzureichende fortlaufende Compliance mit CRR/CRD-Anforderungen exponiert Finanzinstitute gegenüber einer Vielzahl von Risiken, die weit über direkte regulatorische Sanktionen hinausgehen. Die Folgen können tiefgreifende Auswirkungen auf Kapitalausstattung, Reputation und langfristige Wettbewerbsfähigkeit haben. ADVISORI hat ein umfassendes Framework entwickelt, um diese Risiken systematisch zu identifizieren und zu mitigieren.\n\n⚠️ Kritische Risikodimensionen mangelhafter Ongoing Compliance:\n• Regulatorische Konsequenzen: Neben finanziellen Sanktionen können Auflagen wie erhöhte Eigenmittelanforderungen, eingeschränkte Geschäftstätigkeiten oder sogar der Entzug von Lizenzen drohen.\n• Kapital- und Liquiditätsrisiken: Fehlerhafte RWA-Berechnungen oder ILAAP/ICAAP-Prozesse können zu falschen Kapitalallokationen führen und die finanzielle Stabilität gefährden.\n• Daten- und Reporting-Integritätsrisiken: Unzuverlässige Datenqualität und fehlerhafte Meldewesenprozesse verursachen nicht nur regulatorische Probleme, sondern beeinträchtigen auch die interne Steuerungsfähigkeit.\n• Reputations- und Vertrauensverlust: Compliance-Mängel können das Vertrauen von Kunden, Investoren und Ratingagenturen nachhaltig beschädigen und zu erhöhten Refinanzierungskosten führen.\n\n🛡️ ADVISORI's Ansatz zur effektiven Risikoadressierung:\n• Implementierung eines Continuous Compliance Monitoring Systems: Etablierung automatisierter Kontrollen und KPIs, die Compliance-Lücken frühzeitig identifizieren, bevor sie zu signifikanten Problemen eskalieren.\n• Integriertes Regulatory Change Management: Systematische Verfolgung regulatorischer Änderungen und proaktive Implementierung in bestehende Prozesse und Systeme.\n• Datenqualitätsmanagement-Framework: Entwicklung robuster Datengovernance-Strukturen, die die Genauigkeit, Vollständigkeit und Konsistenz regulatorischer Daten sicherstellen.\n• Compliance-by-Design-Prinzip: Integration von Compliance-Anforderungen bereits in der Konzeptionsphase neuer Produkte, Prozesse und Systeme, um nachträgliche Anpassungen zu minimieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie lässt sich ein nachhaltiges CRR/CRD-Compliance-Programm in bestehende Governance-Strukturen integrieren, um Synergien zu maximieren?",
        answer: "Die erfolgreiche Integration eines nachhaltigen CRR/CRD-Compliance-Programms in bestehende Governance-Strukturen erfordert einen strategischen Ansatz, der regulatorische Anforderungen mit operativer Effizienz verbindet. Anstatt isolierte Compliance-Silos zu schaffen, sollten Finanzinstitute eine holistische Integration anstreben, die Synergien erschließt und den organisatorischen Gesamtwert steigert.\n\n🔄 Strategien für eine synergetische Integration:\n• Governance-Alignment: Synchronisierung der CRR/CRD-Compliance-Governance mit bestehenden Risikomanagement- und internen Kontrollsystemen, um Doppelstrukturen zu vermeiden und klare Verantwortlichkeiten zu schaffen.\n• Prozessintegration: Einbettung von Compliance-Kontrollen in bestehende Geschäftsprozesse, sodass Compliance zu einem natürlichen Bestandteil der täglichen Aktivitäten wird und nicht als separate Zusatzaufgabe wahrgenommen wird.\n• Technologische Konsolidierung: Nutzung bestehender IT-Infrastrukturen und Datenmanagement-Systeme für Compliance-Zwecke, ergänzt durch spezifische Erweiterungen, die den regulatorischen Anforderungen gerecht werden.\n• Kulturelle Verankerung: Entwicklung einer integrierten Compliance- und Risikokultur, die auf allen Organisationsebenen gelebt wird und regulatorische Compliance als Teil der Unternehmens-DNA verankert.\n\n🏗️ Praktische Implementierungsschritte von ADVISORI:\n• Durchführung einer Governance-Gap-Analyse: Identifikation von Überschneidungen, Lücken und Optimierungspotentialen in bestehenden Governance-Strukturen bezüglich CRR/CRD-Anforderungen.\n• Entwicklung eines integrierten Betriebsmodells: Konzeption eines Three-Lines-of-Defense-Modells, das Compliance-Verantwortlichkeiten klar definiert und in bestehende Organisationsstrukturen einbettet.\n• Implementierung eines harmonisierten Kontrollrahmens: Etablierung eines integrierten Kontrollkatalogs, der sowohl CRR/CRD-spezifische als auch allgemeine Governance-Kontrollen umfasst und Doppelprüfungen eliminiert.\n• Entwicklung konsolidierter Reporting-Strukturen: Schaffung eines einheitlichen Berichtswesens, das regulatorische und interne Steuerungsinformationen zusammenführt und eine ganzheitliche Sicht auf die Performance ermöglicht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie kann Technologie eingesetzt werden, um die fortlaufende CRR/CRD-Compliance effizienter und effektiver zu gestalten?",
        answer: "Technologische Innovationen bieten transformative Möglichkeiten, um die kontinuierliche CRR/CRD-Compliance von einem ressourcenintensiven Pflichtprogramm in einen wertschöpfenden, datengetriebenen Prozess zu verwandeln. ADVISORI unterstützt Finanzinstitute dabei, durch den strategischen Einsatz moderner Technologien sowohl die Compliance-Qualität zu verbessern als auch den operativen Aufwand signifikant zu reduzieren.\n\n💻 Schlüsseltechnologien für eine zukunftssichere Compliance:\n• Automatisierte Compliance-Monitoring-Systeme: Implementierung von Echtzeit-Überwachungslösungen, die kontinuierlich regulatorische Kennzahlen tracken und bei Abweichungen automatische Alerts generieren.\n• KI-gestützte Regulatory Intelligence: Einsatz von Natural Language Processing und Machine Learning zur automatischen Analyse und Kategorisierung neuer regulatorischer Anforderungen und deren Auswirkungen auf bestehende Prozesse.\n• Fortschrittliche Datenintegrationsplattformen: Schaffung einer einheitlichen Datenbasis für Compliance-Zwecke, die heterogene Datenquellen konsolidiert und eine Single Source of Truth für regulatorische Berechnungen und Reports etabliert.\n• Workflow-Automatisierung und Kollaborationstools: Digitalisierung manueller Compliance-Prozesse mit integrierten Genehmigungsworkflows, Audit-Trails und zentraler Dokumentenverwaltung.\n\n📊 ADVISORI's technologiegestützter Compliance-Ansatz:\n• Compliance Technology Assessment: Analyse Ihrer bestehenden Systemlandschaft und Identifikation von Optimierungspotentialen für CRR/CRD-Compliance-Prozesse.\n• RegTech-Lösungsarchitektur: Entwicklung einer zukunftssicheren Systemarchitektur, die regulatorische Anforderungen, betriebliche Effizienz und Skalierbarkeit in Einklang bringt.\n• Datenstrategie für regulatorische Zwecke: Konzeption eines Data Governance Frameworks, das die Datenqualität, -konsistenz und -verfügbarkeit für regulatorische Zwecke sicherstellt.\n• Change Impact Analysis Automation: Implementierung von Tools zur automatisierten Analyse der Auswirkungen regulatorischer Änderungen auf bestehende Prozesse, Systeme und Datenmodelle."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
