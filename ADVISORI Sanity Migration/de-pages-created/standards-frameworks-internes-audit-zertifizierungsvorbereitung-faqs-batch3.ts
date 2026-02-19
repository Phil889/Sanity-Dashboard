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
    console.log('Updating ISO 27001 Internal Audit & Certification Preparation page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-internes-audit-zertifizierungsvorbereitung' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-internes-audit-zertifizierungsvorbereitung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie adressiert ADVISORI die besonderen Herausforderungen bei der Zertifizierungsvorbereitung in regulierten Branchen wie Finanzdienstleistungen und Gesundheitswesen?",
        answer: "Regulierte Branchen stehen vor einzigartigen Herausforderungen bei der ISO 27001-Zertifizierung, da sie zusätzliche branchenspezifische Compliance-Anforderungen erfüllen müssen. ADVISORI verfügt über tiefgreifende Expertise in hochregulierten Sektoren und entwickelt integrierte Compliance-Strategien, die ISO 27001 nahtlos mit branchenspezifischen Regulierungen harmonisieren.\n\n🏦 Branchenspezifische Regulierungs-Komplexität:\n• Finanzdienstleistungen: Integration mit DORA, BAIT, MaRisk, PCI-DSS und anderen Finanzregulierungen mit überlappenden aber nicht identischen Anforderungen an Informationssicherheit.\n• Gesundheitswesen: Harmonisierung mit HIPAA, MDR, FDA-Vorschriften und anderen medizinischen Datenschutz- und Sicherheitsstandards bei gleichzeitiger Wahrung der Patientensicherheit.\n• Kritische Infrastrukturen: Berücksichtigung von NIS2, BSI-KritisV und sektor-spezifischen Sicherheitsanforderungen für Energie-, Transport- und Telekommunikationsunternehmen.\n• Luft- und Raumfahrt: Integration mit DO-178C, ARP4754A und anderen sicherheitskritischen Standards für software-intensive Systeme.\n\n🛡️ ADVISORIs sektorspezifischer Compliance-Ansatz:\n• Regulierungs-Mapping und -Harmonisierung: Systematische Analyse und Integration aller relevanten Compliance-Anforderungen in ein kohärentes, effizientes ISMS-Framework.\n• Branchen-Best-Practices: Anwendung bewährter Praktiken und Lessons Learned aus umfangreichen Branchenerfahrungen zur Beschleunigung der Implementierung.\n• Aufsichtsbehörden-Liaison: Proaktive Kommunikation und Abstimmung mit relevanten Aufsichtsbehörden zur Sicherstellung der Compliance-Konformität.\n• Integrierte Audit-Strategien: Entwicklung von Multi-Standard-Audit-Programmen, die gleichzeitig ISO 27001 und branchenspezifische Anforderungen abdecken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie entwickelt ADVISORI eine Kultur der kontinuierlichen Verbesserung, die über die ISO 27001-Zertifizierung hinaus nachhaltigen Wert schafft?",
        answer: "Die Schaffung einer nachhaltigen Kultur der kontinuierlichen Verbesserung ist entscheidend für den langfristigen Erfolg von ISO 27001-Implementierungen. ADVISORI entwickelt transformative Kulturprogramme, die Informationssicherheit von einer Compliance-Verpflichtung zu einem strategischen Wettbewerbsvorteil und einer intrinsischen Organisationskompetenz transformieren.\n\n🌱 Kulturelle Transformation für nachhaltige Excellence:\n• Mindset-Wandel: Transformation von einer reaktiven 'Compliance-Mentalität' zu einer proaktiven 'Security-by-Design'-Kultur, die Sicherheit als Geschäftsfaktor versteht.\n• Ownership und Accountability: Entwicklung eines dezentralen Verantwortungsmodells, bei dem jeder Mitarbeiter sich als aktiver Stakeholder der Informationssicherheit versteht.\n• Innovation und Experimentierfreude: Förderung einer Lernkultur, die intelligente Risiken eingehen kann und aus Fehlern systematisch lernt.\n• Cross-funktionale Kollaboration: Aufbau von Netzwerken und Communities of Practice, die Sicherheitswissen organisationsweit teilen und weiterentwickeln.\n\n💡 ADVISORIs Kultur-Entwicklungsframework:\n• Leadership Development: Ausbildung von Sicherheits-Champions auf allen Organisationsebenen, die als Multiplikatoren und Change Agents fungieren.\n• Gamification und Incentivierung: Implementierung spielerischer Elemente und Belohnungssysteme, die sicherheitsbewusstes Verhalten fördern und verstärken.\n• Kontinuierliches Lernen: Etablierung von strukturierten Lernprogrammen, die technische Kompetenzen mit Sicherheitsbewusstsein verbinden.\n• Feedback-Ökosystem: Aufbau robuster Mechanismen für kontinuierliches Feedback, Ideenaustausch und Verbesserungsvorschläge aus der gesamten Organisation.\n• Messbare Kulturindikatoren: Entwicklung von KPIs zur Messung kultureller Veränderungen und deren Impact auf Geschäftsergebnisse und Sicherheitsperformance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Welche strategischen Risiken birgt eine mangelhafte interne Audit-Qualität und wie kann ADVISORI diese durch systematische Qualitätssicherung eliminieren?",
        answer: "Die Qualität interner Audits ist entscheidend für die Effektivität des gesamten ISMS und hat direkten Einfluss auf Geschäftsrisiken, Compliance-Status und strategische Entscheidungsfindung. Mangelhafte Audit-Qualität kann zu falschen Sicherheitsgefühlen, unentdeckten Risiken und regulatorischen Problemen führen. ADVISORI implementiert rigorose Qualitätssicherungssysteme, die konsistent hochwertige Audit-Ergebnisse gewährleisten.\n\n⚠️ Kritische Risiken mangelhafter Audit-Qualität:\n• Falsche Compliance-Sicherheit: Oberflächliche oder unvollständige Audits können kritische Sicherheitslücken übersehen und ein falsches Gefühl der Compliance-Sicherheit vermitteln.\n• Regulatorische Exposition: Mangelhafte Dokumentation oder fehlende Audit-Evidenzen können bei externen Prüfungen zu regulatorischen Sanktionen oder Zertifizierungsverlusten führen.\n• Strategische Fehlentscheidungen: Ungenaue oder unvollständige Audit-Erkenntnisse können zu fehlgeleiteten Investitions- und Prioritätsentscheidungen bei Sicherheitsmaßnahmen führen.\n• Vertrauensverlust: Wiederholte Audit-Mängel können das Vertrauen des Managements und externer Stakeholder in die Audit-Funktion und das gesamte ISMS untergraben.\n• Ineffiziente Ressourcenallokation: Schlechte Audit-Qualität kann zu Über- oder Unterinvestition in bestimmte Sicherheitsbereiche führen.\n\n🎯 ADVISORIs systematische Qualitätssicherung:\n• Strukturierte Auditor-Qualifikation: Implementierung rigoroser Ausbildungs- und Zertifizierungsprogramme für interne Auditoren mit kontinuierlicher Kompetenzentwicklung.\n• Peer Review und Supervision: Etablierung von Mentor-Systemen und Peer-Review-Prozessen zur kontinuierlichen Qualitätskontrolle und Wissenstransfer.\n• Standardisierte Methodiken: Entwicklung und Implementierung konsistenter Audit-Methodiken, Checklisten und Dokumentationsstandards.\n• Kontinuierliche Qualitätsmessung: Implementierung von Qualitätsindikatoren und Feedback-Mechanismen zur systematischen Überwachung und Verbesserung der Audit-Performance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie nutzt ADVISORI moderne Change Management-Prinzipien, um Widerstand gegen ISO 27001-Implementierungen zu überwinden und nachhaltige Akzeptanz zu schaffen?",
        answer: "Widerstand gegen ISO 27001-Implementierungen ist eine der häufigsten Ursachen für Projektverzögerungen und suboptimale Ergebnisse. ADVISORI wendet bewährte Change Management-Prinzipien an, um organisatorische Barrieren systematisch zu überwinden und nachhaltige Akzeptanz und Engagement für Informationssicherheit zu schaffen.\n\n🔄 Psychologische und organisatorische Widerstände:\n• Perceived Complexity: Mitarbeiter empfinden ISO 27001 oft als überkomplex und bürokratisch, was zu Vermeidungsverhalten und passivem Widerstand führt.\n• Resource Competition: Teams befürchten zusätzliche Arbeitslasten und Ressourcenkonflikte mit bestehenden Prioritäten und Geschäftszielen.\n• Cultural Misalignment: Bestehende Unternehmenskultur und informelle Praktiken können im Konflikt mit formalen Sicherheitsanforderungen stehen.\n• Lack of Ownership: Fehlende Beteiligung an der Gestaltung von Sicherheitsprozessen führt zu mangelnder Identifikation und Eigenverantwortung.\n• Fear of Control: Befürchtungen vor übermäßiger Überwachung und Kontrollverlust können defensives Verhalten auslösen.\n\n🚀 ADVISORIs Change Management-Approach:\n• Stakeholder-zentrierte Kommunikation: Entwicklung zielgruppenspezifischer Kommunikationsstrategien, die persönliche und berufliche Vorteile von ISO 27001 klar kommunizieren.\n• Partizipative Gestaltung: Aktive Einbindung von Mitarbeitern in Design und Implementierung von Sicherheitsprozessen zur Förderung von Ownership und Buy-in.\n• Quick Wins und Erfolgsgeschichten: Strategische Identifikation und Kommunikation früher Erfolge zur Aufbau von Momentum und Vertrauen.\n• Capability Building: Systematische Kompetenzentwicklung und Empowerment von Mitarbeitern zur selbstständigen Gestaltung sicherheitsbewusster Arbeitsweisen.\n• Feedback-Integration: Etablierung kontinuierlicher Feedback-Schleifen zur Anpassung der Implementierungsstrategien basierend auf Mitarbeitererfahrungen und -bedürfnissen."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
