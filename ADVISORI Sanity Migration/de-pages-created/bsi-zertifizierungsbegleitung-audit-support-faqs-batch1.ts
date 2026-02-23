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
    console.log('Updating BSI Zertifizierungsbegleitung & Audit Support page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bsi-zertifizierungsbegleitung-audit-support' })
    
    if (!existingDoc) {
      throw new Error('Document "bsi-zertifizierungsbegleitung-audit-support" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine BSI-Zertifizierung für unsere digitale Transformation und Geschäftsstrategie von strategischer Bedeutung und wie optimiert ADVISORI diesen Prozess?",
        answer: "Eine BSI-Zertifizierung nach IT-Grundschutz ist für C-Level-Führungskräfte weit mehr als ein regulatorischer Compliance-Nachweis – sie ist ein strategisches Instrument zur Vertrauensbildung, Risikominimierung und Marktdifferenzierung. In einer zunehmend digitalisierten Wirtschaft wird Informationssicherheit zu einem entscheidenden Wettbewerbsfaktor, der direkten Einfluss auf Geschäftserfolg, Kundenvertrauen und Unternehmensbewertung hat.\n\n🎯 Strategische Dimensionen einer BSI-Zertifizierung:\n• Vertrauensbildung und Marktpositionierung: BSI-Zertifizierungen schaffen einen nachweisbaren Wettbewerbsvorteil bei Ausschreibungen, Kundengewinnung und Partnerschaften, insbesondere bei sicherheitskritischen Branchen und öffentlichen Auftraggebern.\n• Risikomanagement und Schadensprävention: Strukturierte IT-Sicherheit reduziert das Risiko kostspieliger Cyber-Incidents, die durchschnittlich mehrere Millionen Euro Schäden verursachen und erhebliche Reputationsrisiken bergen.\n• Digitale Transformation als Enabler: Eine robuste Sicherheitsarchitektur ermöglicht sichere Digitalisierungsinitiativen und innovative Geschäftsmodelle ohne Kompromisse bei der Sicherheit.\n• Regulatorische Compliance: Erfüllung wachsender Anforderungen aus NIS2, DORA und anderen EU-Regulierungen zur Cybersicherheit.\n\n🛡️ ADVISORIs strategischer Zertifizierungsansatz:\n• Executive-orientierte Begleitung: Wir strukturieren den Zertifizierungsprozess so, dass er minimale Disruption für das operative Geschäft verursacht und maximalen strategischen Nutzen generiert.\n• Business-Case-Integration: Entwicklung einer ROI-fokussierten Argumentationsstrategie, die die Zertifizierung als Investition in Wachstum und Risikomanagement positioniert.\n• Accelerated Certification Program: Nutzung bewährter Methodiken und Templates zur Beschleunigung des Zertifizierungsprozesses ohne Qualitätsverluste.\n• Nachhaltige Implementierung: Aufbau interner Kompetenzen zur eigenständigen Aufrechterhaltung und kontinuierlichen Verbesserung der Zertifizierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten Geschäftsrisiken entstehen durch eine unzureichende Vorbereitung auf BSI-Audits und wie kann ADVISORI diese in messbare Wettbewerbsvorteile transformieren?",
        answer: "Eine unzureichende Audit-Vorbereitung kann schwerwiegende Geschäftskonsequenzen haben, die weit über die Kosten einer gescheiterten Zertifizierung hinausgehen. Für Führungskräfte ist es entscheidend zu verstehen, dass Audit-Risiken direkte Auswirkungen auf Geschäftsergebnisse, Marktreputation und strategische Optionen haben können.\n\n⚠️ Kritische Geschäftsrisiken bei unzureichender Audit-Vorbereitung:\n• Reputationsschäden und Vertrauensverlust: Gescheiterte Zertifizierungsversuche werden in der Branche bekannt und können zu Kundenverlusten, erschwerten Partnerschaften und reduzierten Marktchancen führen.\n• Projektkosten-Explosion: Nachaudits, erweiterte Korrekturmaßnahmen und verzögerte Geschäftsinitiativen können die ursprünglich geplanten Zertifizierungskosten um 200-400% überschreiten.\n• Geschäftsstillstand-Risiko: Unvorbereitete Audits führen häufig zu umfangreichen Nacharbeiten, die kritische Geschäftsprozesse beeinträchtigen und wichtige Digitalisierungsprojekte verzögern können.\n• Compliance-Verstöße: Fehlgeschlagene BSI-Audits können regulatorische Konsequenzen nach sich ziehen und die Erfüllung von Kundenanforderungen oder Branchenstandards gefährden.\n• Strategische Einschränkungen: Ohne gültige Zertifizierung bleiben profitable Geschäftsbereiche und Marktchancen unzugänglich.\n\n🚀 ADVISORIs Transformationsansatz – von Risiken zu Wettbewerbsvorteilen:\n• Proaktive Risikominimierung: Unser strukturiertes Pre-Audit Assessment identifiziert und behebt kritische Schwachstellen, bevor sie zu Audit-Problemen werden, und reduziert das Risiko von Nachaudits um über 90%.\n• Accelerated Value Realization: Durch optimierte Vorbereitungsprozesse verkürzen wir die Time-to-Certification erheblich und ermöglichen frühere Markteintritte und schnellere ROI-Realisierung.\n• Competitive Intelligence Integration: Wir positionieren Ihre Zertifizierung strategisch gegenüber Wettbewerbern und entwickeln differenzierende Sicherheitsargumente für Vertrieb und Marketing.\n• Operative Exzellenz als Nebeneffekt: Der Zertifizierungsprozess optimiert gleichzeitig interne Prozesse und schafft operative Effizienzgewinne, die über die reine Compliance hinausgehen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die BSI-Zertifizierung strategisch nutzen, um unsere Marktposition zu stärken und neue Geschäftschancen zu erschließen?",
        answer: "Eine BSI-Zertifizierung sollte nicht isoliert als IT-Projekt betrachtet werden, sondern als strategisches Instrument zur Marktdifferenzierung und Geschäftsentwicklung. Für vorausschauende Führungskräfte bietet die Zertifizierung erhebliche Möglichkeiten zur Stärkung der Wettbewerbsposition und Erschließung neuer Wertschöpfungspotenziale.\n\n💰 Marktbasierte Wertschöpfung durch BSI-Zertifizierung:\n• Premium-Positionierung: BSI-zertifizierte Unternehmen können durchschnittlich 15-25% höhere Preise für sicherheitskritische Dienstleistungen durchsetzen und sich als Premiumanbieter positionieren.\n• Marktexpansion: Zugang zu regulierten Märkten und sicherheitssensiblen Branchen (Finanzwesen, Gesundheitswesen, kritische Infrastrukturen), die ohne Zertifizierung unzugänglich bleiben.\n• Partnerschaftsqualität: Bevorzugte Partnerschaft mit anderen zertifizierten Unternehmen und multinationalen Konzernen, die strenge Sicherheitsanforderungen an ihre Lieferkette stellen.\n• Akquisitionsvorteile: Höhere Unternehmensbewertungen bei M&A-Transaktionen durch nachweislich niedrigere Risikoexposition und robuste Governance-Strukturen.\n\n🎯 ADVISORIs strategischer Marktansatz:\n• Business Development Integration: Wir entwickeln zertifizierungsbasierte Go-to-Market-Strategien, die Ihre Sicherheitsexzellenz als zentrales Verkaufsargument positionieren und neue Marktsegmente erschließen.\n• Competitive Intelligence: Analyse der Zertifizierungslandschaft Ihrer Branche zur Identifikation von White-Space-Opportunitäten und strategischen Differenzierungsmöglichkeiten.\n• Thought Leadership Positioning: Unterstützung beim Aufbau einer Thought-Leadership-Position im Bereich Cybersicherheit durch strategische Kommunikation und Branchenpräsenz.\n• Revenue Stream Development: Identifikation und Entwicklung neuer Geschäftsmodelle, die auf Ihrer Sicherheitsexpertise und Zertifizierung basieren, wie z.B. Sicherheitsberatung für Kunden oder White-Label-Sicherheitslösungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche langfristigen organisatorischen Fähigkeiten entwickelt unser Unternehmen durch eine professionell begleitete BSI-Zertifizierung und wie beeinflusst dies unsere digitale Resilienz?",
        answer: "Eine strategisch durchgeführte BSI-Zertifizierung entwickelt nachhaltige organisatorische Fähigkeiten, die weit über die reine Informationssicherheit hinausgehen und fundamentale Auswirkungen auf Ihre digitale Resilienz, Innovationsfähigkeit und Wettbewerbsposition haben. Diese Kompetenzentwicklung stellt eine langfristige Investition in die strategische Handlungsfähigkeit Ihres Unternehmens dar.\n\n🏗️ Nachhaltige organisatorische Entwicklung:\n• Risikomanagement-Excellence: Entwicklung einer systematischen, datengetriebenen Herangehensweise an Risikobewertung und -steuerung, die auf alle Geschäftsbereiche übertragen werden kann.\n• Prozessoptimierung und Governance: Implementierung strukturierter Verfahren für kontinuierliche Verbesserung, Change Management und Compliance, die operative Exzellenz fördern.\n• Digitale Sicherheitskultur: Aufbau einer organisationsweiten Sicherheitskompetenz, die innovative Digitalisierungsvorhaben ermöglicht ohne Sicherheitsrisiken einzugehen.\n• Vendor- und Partner-Management: Entwicklung fortschrittlicher Fähigkeiten zur Bewertung und Steuerung von Drittanbieterrisiken in komplexen Ökosystemen.\n\n💡 Digitale Resilienz als strategischer Vorteil:\n• Adaptive Cyber-Defense: Aufbau dynamischer Sicherheitsarchitekturen, die sich automatisch an neue Bedrohungslagen anpassen und kontinuierlich optimieren.\n• Business Continuity Excellence: Entwicklung robuster Geschäftskontinuitätspläne, die auch bei schwerwiegenden Cyber-Incidents die Handlungsfähigkeit gewährleisten.\n• Innovation Enablement: Schaffung sicherer Innovationsräume, in denen neue Technologien und Geschäftsmodelle risikokontrolliert entwickelt und getestet werden können.\n• Stakeholder Confidence: Aufbau von Vertrauen bei Investoren, Kunden und Partnern durch nachweislich robuste Risikosteuerung und Transparenz.\n\n🚀 ADVISORIs Kompetenzentwicklungsansatz:\n• Skill Transfer Program: Systematischer Wissenstransfer zur Entwicklung interner BSI- und Cybersecurity-Expertise für nachhaltige Eigenständigkeit.\n• Leadership Development: Schulung der Führungsebene in sicherheitsstrategischen Entscheidungen und Risikokommunikation.\n• Center of Excellence Aufbau: Etablierung interner Kompetenzzentren für kontinuierliche Sicherheitsoptimierung und Innovation.\n• Continuous Improvement Framework: Implementierung von Feedback-Mechanismen und KPIs zur kontinuierlichen Steigerung der Sicherheitsreife und digitalen Resilienz."
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
