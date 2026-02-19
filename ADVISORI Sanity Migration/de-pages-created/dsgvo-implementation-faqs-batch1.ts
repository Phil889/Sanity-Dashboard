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
    console.log('Updating DSGVO Implementation page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo-implementation' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo-implementation" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie transformiert ADVISORI die DSGVO-Implementierung von einer regulatorischen Belastung zu einem strategischen Wettbewerbsvorteil für die C-Suite?",
        answer: "Für die C-Suite bedeutet DSGVO-Compliance weit mehr als die reine Erfüllung gesetzlicher Mindestanforderungen. ADVISORI positioniert die Datenschutz-Grundverordnung als strategischen Hebel zur Stärkung der Unternehmensresilienz, des Kundenvertrauens und der Marktposition. Eine professionelle DSGVO-Implementierung wird zum Fundament für nachhaltige Digitalisierung und Geschäftswachstum.\n\n🎯 Strategische Transformation der DSGVO-Compliance:\n• Vertrauensaufbau als Marktdifferenzierung: Nachweisbare Datenschutz-Excellence wird zum USP gegenüber Wettbewerbern und schafft Vertrauen bei Kunden, Partnern und Investoren.\n• Datenschutz als Enabler für Innovation: Privacy by Design ermöglicht es, neue digitale Geschäftsmodelle und Technologien (KI, IoT, Cloud) rechtskonform und zukunftssicher zu entwickeln.\n• Operational Excellence durch strukturierte Datengovernance: DSGVO-konforme Prozesse verbessern die Datenqualität, reduzieren Redundanzen und steigern die Effizienz der Datennutzung.\n• Risikominimierung und Wertsicherung: Proaktive Compliance verhindert nicht nur Bußgelder, sondern schützt auch vor Reputationsschäden und Geschäftsunterbrechungen.\n\n💼 Der ADVISORI-Ansatz für strategische DSGVO-Implementierung:\n• Business-orientierte Compliance-Strategie: Wir entwickeln Datenschutz-Lösungen, die Ihre Geschäftsziele unterstützen und operative Abläufe optimieren, anstatt sie zu behindern.\n• ROI-fokussierte Implementierung: Unsere Beratung zeigt konkrete Mehrwerte auf – von Kosteneinsparungen durch effiziente Prozesse bis zu Umsatzsteigerungen durch gestärktes Kundenvertrauen.\n• Change Management für nachhaltige Transformation: Wir begleiten den kulturellen Wandel hin zu einer datenschutzbewussten Organisation, die Compliance als Qualitätsmerkmal versteht.\n• Kontinuierliche Wertsteigerung: Unsere Datenschutz-Management-Systeme sind darauf ausgelegt, sich kontinuierlich weiterzuentwickeln und neue Geschäftschancen zu erschließen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten finanziellen Auswirkungen hat eine professionelle DSGVO-Implementierung durch ADVISORI auf EBITDA und Unternehmensbewertung?",
        answer: "Eine strategisch durchgeführte DSGVO-Implementierung generiert messbare finanzielle Mehrwerte, die sich direkt in der EBITDA-Entwicklung und Unternehmensbewertung niederschlagen. ADVISORI quantifiziert diese Effekte und macht sie für die C-Suite transparent nachvollziehbar.\n\n💰 Direkte Auswirkungen auf die Profitabilität:\n• Vermeidung von Bußgeldern und Strafen: DSGVO-Verstöße können Bußgelder von bis zu 4% des weltweiten Jahresumsatzes zur Folge haben. Professionelle Compliance eliminiert dieses existenzielle Risiko vollständig.\n• Reduzierung von Datenschutz-Vorfallkosten: Durchschnittlich kostet ein Datenschutzvorfall Unternehmen 4,35 Millionen Euro. Präventive Maßnahmen reduzieren sowohl die Wahrscheinlichkeit als auch die Schwere solcher Vorfälle erheblich.\n• Operational Efficiency durch Prozessoptimierung: Strukturierte Datengovernance reduziert den Aufwand für Datenmanagement um 15-25% und verbessert die Datenqualität für bessere Geschäftsentscheidungen.\n• Kostenoptimierung bei Datenspeicherung: DSGVO-konforme Datenminimierung und -löschung können Speicher- und Verwaltungskosten um 20-30% senken.\n\n📈 Positive Auswirkungen auf Umsatz und Marktpositionierung:\n• Premium-Positioning durch Datenschutz-Excellence: Unternehmen mit nachweisbar hohen Datenschutzstandards können Premium-Preise durchsetzen und neue Kundensegmente erschließen.\n• Erschließung neuer Märkte: DSGVO-Compliance ist Voraussetzung für Geschäfte mit datenschutzsensiblen Branchen (Gesundheitswesen, Finanzdienstleistungen, öffentlicher Sektor).\n• Stärkung der Kundenbeziehungen: 86% der Verbraucher sind bereit, mehr für Produkte von Unternehmen zu zahlen, denen sie in Bezug auf Datenschutz vertrauen.\n• Verbesserung der Unternehmensbewertung: ESG-konforme Unternehmen erzielen im Durchschnitt 10-15% höhere Bewertungsmultiplikatoren bei M&A-Transaktionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie gewährleistet ADVISORI eine zukunftssichere DSGVO-Implementierung, die auch kommende regulatorische Entwicklungen wie den EU AI Act und NIS2 antizipiert?",
        answer: "Die regulatorische Landschaft im Bereich Datenschutz und Cybersicherheit entwickelt sich rasant weiter. ADVISORI implementiert DSGVO-Systeme mit einer Forward-Looking-Perspektive, die nicht nur aktuelle Anforderungen erfüllt, sondern auch für zukünftige Regelwerke wie den EU AI Act, NIS2 und weitere Privacy-Gesetzgebungen gerüstet ist.\n\n🔮 Anticipatory Compliance Strategy:\n• Regulatorische Roadmap-Entwicklung: Wir analysieren kommende Gesetzgebungen und deren Auswirkungen auf Ihre Branche, um Implementierungsstrategien zu entwickeln, die mehrere Compliance-Zyklen abdecken.\n• Technologie-Agnostische Frameworks: Unsere Datenschutz-Architekturen sind so konzipiert, dass sie flexibel an neue technologische Anforderungen (KI-Governance, IoT-Security, Quantum-Safe Cryptography) angepasst werden können.\n• Scalable Privacy Infrastructure: Implementation von Systemen, die mit steigenden Datenvolumen und neuen Verarbeitungsformen wachsen können, ohne grundlegende Neugestaltung zu erfordern.\n• Cross-Border Compliance Readiness: Vorbereitung auf internationale Datentransfers und Compliance mit verschiedenen nationalen Datenschutzgesetzen (UK GDPR, California CCPA, etc.).\n\n⚡ Integrierte Compliance-Ökosysteme:\n• AI Act Readiness: Entwicklung von Governance-Strukturen für KI-Systeme, die sowohl DSGVO-Anforderungen als auch AI Act-Bestimmungen erfüllen.\n• NIS2-Integration: Aufbau von Cybersicherheits-Frameworks, die Datenschutz und IT-Sicherheit ganzheitlich adressieren.\n• Automated Compliance Monitoring: Implementation von KI-gestützten Systemen zur kontinuierlichen Überwachung der Compliance mit sich ändernden Anforderungen.\n• Regular Regulatory Health Checks: Etablierung von Prozessen zur regelmäßigen Überprüfung und Anpassung Ihrer Compliance-Strategie an neue regulatorische Entwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORI die C-Suite dabei, DSGVO-Compliance als Teil der ESG-Strategie zu positionieren und welche Auswirkungen hat dies auf Investor Relations und Nachhaltigkeitsberichterstattung?",
        answer: "DSGVO-Compliance ist ein essentieller Baustein der ESG-Strategie (Environmental, Social, Governance) moderner Unternehmen. ADVISORI hilft der C-Suite dabei, Datenschutz als strategisches ESG-Asset zu positionieren, das sowohl regulatorische Anforderungen erfüllt als auch Stakeholder-Value schafft und die Nachhaltigkeitsperformance des Unternehmens stärkt.\n\n🌍 DSGVO als ESG-Differenzierungsfaktor:\n• Governance Excellence: Robuste Datenschutz-Governance demonstriert Führungsqualität und Risikomanagement-Kompetenz, die von Investoren und Rating-Agenturen hoch bewertet wird.\n• Social Responsibility: Schutz der Privatsphäre von Kunden und Mitarbeitern als Ausdruck sozialer Verantwortung und ethischer Unternehmensführung.\n• Stakeholder Trust Building: Transparent kommunizierte Datenschutz-Standards stärken das Vertrauen aller Stakeholder-Gruppen und verbessern die Unternehmensreputation.\n• Digital Ethics Leadership: Positionierung als verantwortungsvolles Unternehmen im digitalen Zeitalter, das ethische Standards über Mindestanforderungen hinaus umsetzt.\n\n📊 Integration in Nachhaltigkeitsberichterstattung und Investor Relations:\n• ESG-konforme KPI-Entwicklung: Definition und Messung von datenschutzbezogenen ESG-Kennzahlen (Privacy-by-Design-Umsetzung, Datenschutz-Schulungsquoten, Incident Response Times).\n• Transparent Reporting für Stakeholder: Entwicklung von Berichterstattungsformaten, die Datenschutz-Performance für verschiedene Zielgruppen (Investoren, Kunden, Regulatoren) verständlich darstellen.\n• Integration in ESG-Ratings: Vorbereitung für ESG-Rating-Prozesse durch dokumentierte Datenschutz-Excellence und nachweisbare Compliance-Performance.\n• Strategic Communication: Entwicklung von Kommunikationsstrategien, die DSGVO-Compliance als Wettbewerbsvorteil und Ausdruck der Unternehmenskultur positionieren."
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
