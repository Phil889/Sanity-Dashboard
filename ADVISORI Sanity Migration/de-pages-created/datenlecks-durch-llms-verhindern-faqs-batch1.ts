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
    console.log('Updating Datenlecks durch LLMs verhindern page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenlecks-durch-llms-verhindern' })
    
    if (!existingDoc) {
      throw new Error('Document "datenlecks-durch-llms-verhindern" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sind Datenlecks durch LLMs eine strategische Bedrohung für die C-Suite und wie positioniert ADVISORI LLM-Sicherheit als Wettbewerbsvorteil?",
        answer: "Für C-Level-Führungskräfte stellen Datenlecks durch Large Language Models eine existenzielle Bedrohung dar, die weit über technische Sicherheitsprobleme hinausgeht. LLMs können unbeabsichtigt sensible Unternehmensdaten, geistiges Eigentum oder personenbezogene Informationen preisgeben, was zu schwerwiegenden regulatorischen Verstößen, Reputationsschäden und Wettbewerbsnachteilen führen kann. ADVISORI versteht LLM-Sicherheit als strategischen Enabler für sichere AI-Innovation.\n\n🎯 Strategische Risiken für die Führungsebene:\n• Geistiges Eigentum und Geschäftsgeheimnisse: LLMs können versehentlich proprietäre Informationen, Geschäftsstrategien oder technische Spezifikationen in ihren Antworten preisgeben, was Wettbewerbsvorteile gefährdet.\n• Regulatorische Compliance-Risiken: Datenlecks durch LLMs können zu DSGVO-Verstößen, Bußgeldern und rechtlichen Konsequenzen führen, die das Unternehmen finanziell und reputativ schädigen.\n• Vertrauensverlust bei Stakeholdern: Sicherheitsvorfälle können das Vertrauen von Kunden, Investoren und Partnern nachhaltig beschädigen und den Unternehmenswert mindern.\n• Operative Unterbrechungen: Sicherheitsvorfälle können zu Betriebsunterbrechungen, Systemausfällen und kostspieligen Wiederherstellungsmaßnahmen führen.\n\n🛡️ Der ADVISORI-Ansatz für strategische LLM-Sicherheit:\n• Proaktive Risikominimierung: Wir entwickeln umfassende Sicherheitsstrategien, die Datenlecks verhindern, bevor sie auftreten, und schaffen so eine solide Grundlage für sichere AI-Innovation.\n• DSGVO-First-Implementierung: Unsere LLM-Sicherheitslösungen sind von Grund auf DSGVO-konform konzipiert und gewährleisten vollständigen Datenschutz ohne Kompromisse bei der Funktionalität.\n• Wettbewerbsvorteile durch Sicherheit: Sichere LLM-Implementierungen ermöglichen es Ihnen, AI-Technologien vertrauensvoll zu nutzen und sich als vertrauenswürdiger Marktführer zu positionieren.\n• Strategische Governance-Integration: Wir integrieren LLM-Sicherheit in Ihre bestehenden Governance-Strukturen und schaffen nachhaltige Sicherheitskultur auf allen Unternehmensebenen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifizieren wir die finanziellen Auswirkungen von LLM-Datenlecks und welchen ROI bietet ADVISORI's präventive Sicherheitsstrategie?",
        answer: "Die finanziellen Auswirkungen von LLM-Datenlecks können verheerend sein und sich in direkten Kosten, regulatorischen Strafen, Reputationsschäden und langfristigen Wettbewerbsnachteilen manifestieren. ADVISORI's präventive Sicherheitsstrategie transformiert diese Risiken in strategische Vorteile durch proaktive Schadensvermeidung und die Schaffung vertrauensvoller AI-Umgebungen.\n\n💰 Direkte finanzielle Auswirkungen von LLM-Datenlecks:\n• Regulatorische Bußgelder und Strafen: DSGVO-Verstöße können Bußgelder von bis zu vier Prozent des weltweiten Jahresumsatzes zur Folge haben, was für große Unternehmen Millionenbeträge bedeuten kann.\n• Incident Response und Wiederherstellungskosten: Forensische Untersuchungen, Systemwiederherstellung, externe Beratung und Kommunikationsmaßnahmen können erhebliche Kosten verursachen.\n• Rechtsstreitigkeiten und Haftungsansprüche: Betroffene Personen oder Geschäftspartner können Schadensersatzansprüche geltend machen, die zu langwierigen und kostspieligen Rechtsverfahren führen.\n• Geschäftsverluste und Umsatzeinbußen: Vertrauensverlust kann zu Kundenabwanderung, Vertragskündigungen und reduzierten Neugeschäften führen.\n\n📈 ROI der ADVISORI-Präventionsstrategie:\n• Schadensvermeidung als Wertschöpfung: Jeder verhinderte Sicherheitsvorfall spart nicht nur direkte Kosten, sondern erhält auch den Unternehmenswert und die Marktposition.\n• Wettbewerbsvorteile durch Vertrauen: Unternehmen mit nachweislich sicheren LLM-Implementierungen können sich als vertrauenswürdige Partner positionieren und Premium-Preise durchsetzen.\n• Operative Effizienz: Sichere LLM-Systeme ermöglichen es Mitarbeitern, AI-Tools vertrauensvoll zu nutzen, was Produktivitätssteigerungen und Innovationsvorsprünge schafft.\n• Regulatorische Compliance als Enabler: Proaktive Compliance-Maßnahmen reduzieren nicht nur Risiken, sondern ermöglichen auch den Zugang zu regulierten Märkten und Geschäftsmöglichkeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie navigiert ADVISORI die komplexe Regulierungslandschaft für LLM-Sicherheit und stellt sicher, dass unsere AI-Strategie zukunftssicher ist?",
        answer: "Die Regulierungslandschaft für LLM-Sicherheit entwickelt sich rasant, von der EU-AI-Verordnung über DSGVO-Anforderungen bis hin zu branchenspezifischen Compliance-Standards. ADVISORI verfolgt einen vorausschauenden Ansatz, der nicht nur aktuelle Regulierungsanforderungen erfüllt, sondern auch zukünftige Entwicklungen antizipiert und Ihr Unternehmen für eine sich wandelnde Rechtslandschaft positioniert.\n\n🔄 Adaptive Compliance-Strategie für LLM-Sicherheit:\n• Kontinuierliche Regulierungs-Überwachung: Wir verfolgen aktiv die Entwicklung der EU-AI-Verordnung, DSGVO-Updates, branchenspezifische Standards und internationale Regulierungstrends, um Ihre LLM-Systeme stets compliant zu halten.\n• Zukunftssichere Sicherheitsarchitekturen: Unsere LLM-Sicherheitslösungen basieren auf flexiblen, modularen Architekturen, die sich schnell an neue regulatorische Anforderungen anpassen lassen, ohne grundlegende Systemänderungen zu erfordern.\n• Proaktive Governance-Frameworks: Wir etablieren robuste LLM-Governance-Strukturen, die über Mindestanforderungen hinausgehen und als Best-Practice-Standard für verantwortungsvolle AI-Nutzung fungieren.\n• Dokumentation und Audit-Bereitschaft: Umfassende Dokumentation aller LLM-Sicherheitsentscheidungen und -Prozesse gewährleistet Transparenz und Audit-Compliance für regulatorische Prüfungen.\n\n🔍 ADVISORI's Regulatory Excellence für LLMs:\n• Regulatorische Früherkennung: Wir analysieren regulatorische Trends, Konsultationspapiere und Branchenentwicklungen, um Ihnen einen Vorsprung bei der Compliance-Vorbereitung zu verschaffen.\n• Branchenspezifische LLM-Expertise: Tiefes Verständnis für sektorspezifische Anforderungen in Finanzdienstleistungen, Gesundheitswesen, Automobilindustrie und anderen regulierten Branchen.\n• Internationale Compliance-Koordination: Unterstützung bei der Navigation komplexer internationaler Regulierungslandschaften für global agierende Unternehmen mit LLM-Implementierungen.\n• Stakeholder-Engagement: Aufbau von Beziehungen zu Regulierungsbehörden, Branchenverbänden und Standardisierungsorganisationen für frühzeitige Einblicke in LLM-Regulierungsentwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI LLM-Sicherheit von einem Kostenfaktor zu einem strategischen Wachstumstreiber und welche Geschäftsmodell-Innovationen ermöglicht sichere LLM-Implementierung?",
        answer: "ADVISORI positioniert LLM-Sicherheit nicht als isolierte Schutzmaßnahme, sondern als fundamentalen Geschäftstransformations-Katalysator. Unser Ansatz verwandelt Sicherheitsinvestitionen in strategische Wachstumsmotoren, die neue Geschäftsmodelle ermöglichen, Marktchancen erschließen und nachhaltigen Wettbewerbsvorteile schaffen, während gleichzeitig Risiken minimiert und Vertrauen maximiert wird.\n\n🚀 Von Sicherheit zu Geschäftsinnovation:\n• Vertrauensbasierte Geschäftsmodelle: Sichere LLM-Implementierungen ermöglichen die Entwicklung vertrauensbasierter Services, die ohne robuste Sicherheitsgarantien nicht realisierbar wären, wie personalisierte AI-Beratung oder datengetriebene Insights.\n• Premium-Positionierung durch Sicherheit: Unternehmen mit nachweislich sicheren LLM-Systemen können sich als Premium-Anbieter positionieren und höhere Preise für ihre AI-gestützten Services durchsetzen.\n• Neue Markterschließung: Sichere LLM-Technologien ermöglichen den Zugang zu regulierten Märkten und sicherheitskritischen Branchen, die zuvor unzugänglich waren.\n• Ökosystem-Orchestrierung: Vertrauensvolle LLM-Plattformen ermöglichen die Schaffung von Geschäftsökosystemen, in denen Partner und Kunden sicher zusammenarbeiten können.\n\n💡 ADVISORI's Geschäftsmodell-Innovation durch LLM-Sicherheit:\n• Sicherheit als Differenzierungsmerkmal: Wir helfen Ihnen dabei, LLM-Sicherheit als einzigartiges Wertversprechen zu positionieren, das Sie von Wettbewerbern unterscheidet und Kundenloyalität schafft.\n• Datenmonetarisierung mit Vertrauen: Sichere LLM-Architekturen ermöglichen die vertrauensvolle Monetarisierung von Datenbeständen durch AI-gestützte Insights und Services, ohne Datenschutz zu kompromittieren.\n• Partnerschafts- und Allianzen-Strategien: Sichere LLM-Implementierungen schaffen die Grundlage für strategische Partnerschaften und Datenallianzen, die neue Geschäftsmöglichkeiten eröffnen.\n• Kontinuierliche Innovation-Pipelines: Etablierung von Prozessen für die kontinuierliche Identifikation und Entwicklung neuer sicherheitsbasierter Geschäftsmöglichkeiten im LLM-Bereich."
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
