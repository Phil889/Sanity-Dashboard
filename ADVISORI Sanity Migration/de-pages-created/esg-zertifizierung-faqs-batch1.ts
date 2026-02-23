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
    console.log('Updating ESG-Zertifizierung page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-zertifizierung' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-zertifizierung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine ESG-Zertifizierung für die C-Suite mehr als nur ein Compliance-Instrument und wie kann ADVISORI dies als strategischen Wettbewerbsvorteil positionieren?",
        answer: "Für die Unternehmensführung repräsentiert eine ESG-Zertifizierung weit mehr als die Erfüllung regulatorischer Mindestanforderungen – sie ist ein strategisches Instrument zur Wertsteigerung, Risikominimierung und Marktdifferenzierung. In einer zunehmend nachhaltigkeitsorientierten Wirtschaftslandschaft wird die glaubwürdige Demonstration von ESG-Exzellenz zu einem entscheidenden Faktor für langfristigen Unternehmenserfolg und Investorenzugang.\n\n💼 Strategische Werttreiber für die Geschäftsleitung:\n• Kapitalmarktzugang und Finanzierungsvorteile: Zertifizierte ESG-Performance öffnet Türen zu nachhaltigen Finanzierungsinstrumenten (Green Bonds, ESG-linked Loans) mit oft günstigeren Konditionen und erweitert den Investorenkreis.\n• Marktdifferenzierung und Kundengewinnung: Glaubwürdige ESG-Zertifizierungen schaffen einen nachweisbaren Competitive Advantage bei umweltbewussten Kunden und in Ausschreibungen, die ESG-Kriterien berücksichtigen.\n• Risikomanagement und Compliance-Sicherheit: Proaktive ESG-Zertifizierung minimiert regulatorische Risiken und bereitet das Unternehmen auf verschärfende Nachhaltigkeitsregulierung vor.\n• Talentgewinnung und -bindung: Zertifizierte Nachhaltigkeit ist ein starker Magnet für qualifizierte Fachkräfte, insbesondere der jüngeren Generationen, und reduziert Personalfluktuation.\n\n🎯 ADVISORI's strategischer Zertifizierungsansatz:\n• Materiality-basierte Standardauswahl: Wir identifizieren die für Ihre Branche und Stakeholder relevantesten Zertifizierungsstandards (B Corp, ISO 14001, EMAS, GRI-Assurance) und entwickeln eine kohärente Multi-Standard-Strategie.\n• Business Case Quantifizierung: Detaillierte ROI-Analysen zeigen messbare Vorteile wie Kosteneinsparungen durch Ressourceneffizienz, Umsatzsteigerungen durch ESG-Premium und Risikoreduktion auf.\n• Stakeholder-zentrierte Kommunikationsstrategie: Wir entwickeln maßgeschneiderte Botschaften für verschiedene Stakeholder-Gruppen (Investoren, Kunden, Mitarbeiter, Regulatoren) basierend auf Ihrer Zertifizierung.\n• Continuous Improvement Framework: Integration der Zertifizierungsanforderungen in Ihre bestehenden Managementsysteme für nachhaltige Performance-Steigerung über die reine Compliance hinaus."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir den ROI einer ESG-Zertifizierung quantifizieren und welchen direkten Impact hat dies auf unsere Unternehmensbewertung und EBITDA-Marge?",
        answer: "Die Investition in ESG-Zertifizierungen generiert messbare finanzielle Returns durch multiple Kanäle – von direkten Kosteneinsparungen über Umsatzprämien bis hin zu Bewertungsaufschlägen. ADVISORI hilft Ihnen, diese Wertschöpfung systematisch zu identifizieren, zu messen und gegenüber der C-Suite und Investoren zu kommunizieren.\n\n💰 Direkte finanzielle Werttreiber:\n• Operational Excellence und Kostensenkung: ESG-zertifizierte Unternehmen erzielen durchschnittlich 15-25% Kosteneinsparungen durch Energieeffizienz, Abfallreduzierung und optimierte Ressourcennutzung, die sich direkt in der EBITDA-Marge niederschlagen.\n• Premium Pricing und Marktanteile: Kunden zahlen nachweislich 5-15% Aufschläge für zertifiziert nachhaltige Produkte und Dienstleistungen, während sich gleichzeitig neue Marktsegmente erschließen lassen.\n• Finanzierungsvorteile: ESG-zertifizierte Unternehmen können Finanzierungskosten um 0,1-0,5 Basispunkte reduzieren und erhalten verbesserten Zugang zu nachhaltigkeitsorientierten Kapitalquellen.\n• Risikoreduktion: Niedrigere Versicherungskosten, reduzierte regulatorische Strafrisiken und verbesserte Business Continuity durch proaktives Nachhaltigkeitsmanagement.\n\n📈 Bewertungsimpact und Kapitalmarktvorteile:\n• ESG-Premium Multiples: Studien zeigen, dass ESG-führende Unternehmen 10-20% höhere Bewertungsmultiples erzielen als Vergleichsunternehmen, was sich direkt im Unternehmenswert widerspiegelt.\n• Investorenzugang: Zugang zu dem schnell wachsenden Sustainable Investment Markt (über 35 Billionen USD Assets under Management) erschließt neue Kapitalquellen.\n• Cost of Capital Reduktion: Verbesserte ESG-Ratings führen zu niedrigeren Kapitalkosten durch reduzierten Risiko-Spread bei Fremd- und Eigenkapitalfinanzierung.\n\n🔍 ADVISORI's ROI-Quantifizierungsansatz:\n• Business Case Modellierung: Entwicklung detaillierter Finanzmodelle, die sowohl direkte als auch indirekte Wertschöpfung aus ESG-Zertifizierungen quantifizieren.\n• Benchmarking und KPI-Tracking: Etablierung von Mess- und Vergleichssystemen zur kontinuierlichen Überwachung des ESG-ROI.\n• Investor Relations Support: Professionelle Aufbereitung der ESG-Value Story für Kapitalmarktkommunikation und Due Diligence Prozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die ESG-Regulatorik entwickelt sich rasant – von der EU-Taxonomie bis zur CSRD. Wie stellt ADVISORI sicher, dass unsere Zertifizierungsstrategie zukunftsfähig ist und regulatorische Compliance gewährleistet?",
        answer: "In der dynamischen Regulatory Landscape der ESG-Gesetzgebung ist eine zukunftsorientierte und adaptive Zertifizierungsstrategie entscheidend für nachhaltigen Compliance-Erfolg. ADVISORI entwickelt ESG-Zertifizierungsansätze, die nicht nur aktuelle Standards erfüllen, sondern auch proaktiv auf kommende regulatorische Entwicklungen vorbereiten und so langfristige Investitionssicherheit schaffen.\n\n📋 Regulatory Roadmap und Compliance-Integration:\n• EU-Taxonomie Alignment: Systematische Bewertung Ihrer Wirtschaftsaktivitäten gegen EU-Taxonomie-Kriterien und Integration in Zertifizierungsstrategien, um sowohl CSRD-Compliance als auch Nachhaltigkeitsfinanzierung zu ermöglichen.\n• CSRD-konforme Berichterstattung: Vorbereitung auf die Corporate Sustainability Reporting Directive durch Aufbau von Datenmanagement-Systemen und Prozessen, die gleichzeitig Zertifizierungsanforderungen erfüllen.\n• Multi-jurisdiktionale Vorbereitung: Berücksichtigung internationaler ESG-Regulierung (SEC Climate Rules, UK TCFD, Singapore Green Finance) für global agierende Unternehmen.\n• Lieferkettengesetz-Integration: Einbettung von Due Diligence Anforderungen in ESG-Zertifizierungsprozesse zur simultanen Erfüllung mehrerer Compliance-Verpflichtungen.\n\n🔮 Zukunftsorientierte Strategieentwicklung:\n• Regulatory Horizon Scanning: Kontinuierliche Überwachung der Gesetzgebungspipeline und frühzeitige Integration erwarteter Anforderungen in die Zertifizierungsplanung.\n• Modularer Zertifizierungsaufbau: Entwicklung flexibler ESG-Management-Systeme, die sich schnell an neue Standards und Anforderungen anpassen lassen ohne Grundlagenarbeit zu wiederholen.\n• Digital-First Approach: Implementierung digitaler ESG-Datenmanagement-Plattformen, die automatisierte Compliance-Überwachung und flexible Berichterstattung für verschiedene Standards ermöglichen.\n• Stakeholder Integration: Systematische Einbindung von Regulatoren, Branchenverbänden und Standardsettern in die strategische Planung für frühzeitige Orientierung.\n\n⚡ ADVISORI's Adaptive Excellence Methodologie:\n• Living Standards Monitoring: Entwicklung von Monitoring-Systemen für kontinuierliche Überwachung von Änderungen in ESG-Standards und regulatorischen Anforderungen.\n• Agile Implementation: Einsatz agiler Projektmanagement-Methoden für schnelle Anpassung an sich ändernde Anforderungen ohne Verlust bereits erreichter Fortschritte.\n• Cross-Standard Synergies: Identifikation und Nutzung von Überschneidungen zwischen verschiedenen ESG-Standards zur Effizienzsteigerung und Kostenoptimierung.\n• Future-Proofing Assessment: Regelmäßige Bewertung der Zukunftsfähigkeit Ihrer ESG-Infrastruktur und proaktive Empfehlungen für strategische Anpassungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie kann ADVISORI ESG-Zertifizierungen als Katalysator für organisatorische Transformation und Innovation nutzen, anstatt sie als reinen Compliance-Overhead zu betrachten?",
        answer: "ESG-Zertifizierungen bieten einzigartige Opportunitäten, organisatorische Exzellenz zu treiben und Innovationspotenziale zu erschließen, die weit über die reine Erfüllung von Standards hinausgehen. ADVISORI transformiert den Zertifizierungsprozess zu einem strategischen Change Management Katalysator, der Operational Excellence, Mitarbeiterengagement und Innovationskultur nachhaltig stärkt.\n\n🚀 Organisatorische Transformation durch ESG-Excellence:\n• Cultural Change Leadership: ESG-Zertifizierungsprozesse schaffen natürliche Anlässe für kulturelle Transformation, indem sie gemeinsame Werte und Ziele etablieren, die über traditionelle Profit-Maximierung hinausgehen.\n• Cross-funktionale Kollaboration: Implementierung von ESG-Managementsystemen bricht Silos auf und fördert abteilungsübergreifende Zusammenarbeit bei der Lösung komplexer Nachhaltigkeitsherausforderungen.\n• Leadership Development: ESG-Governance-Anforderungen schaffen Entwicklungsmöglichkeiten für Führungskräfte in den Bereichen Stakeholder Management, strategisches Denken und Purpose-driven Leadership.\n• Operational Excellence Integration: ESG-KPIs und -Prozesse ergänzen bestehende Performance Management Systeme und treiben kontinuierliche Verbesserung in allen Unternehmensbereichen.\n\n💡 Innovation und Geschäftsmodell-Evolution:\n• Sustainable Innovation Pipeline: ESG-Zertifizierungsanforderungen stimulieren die Entwicklung nachhaltiger Produkte, Services und Geschäftsmodelle durch systematische Identifikation von Verbesserungspotenzialen.\n• Circular Economy Opportunities: Zertifizierungsstandards fördern das Denken in Kreisläufen und erschließen neue Umsatzquellen durch Waste-to-Value Transformation und Resource Efficiency.\n• Digital Transformation Acceleration: ESG-Datenmanagement-Anforderungen treiben die Digitalisierung von Geschäftsprozessen und schaffen Grundlagen für datengetriebene Entscheidungsfindung.\n• Stakeholder Co-Innovation: ESG-Engagement-Prozesse mit Kunden, Lieferanten und Communities erschließen externe Innovationsquellen und neue Partnerschaftsmodelle.\n\n🎯 ADVISORI's Transformation-orientierter Ansatz:\n• Change Management Integration: Systematische Integration von Change Management Prinzipien in ESG-Implementierungsprojekte für nachhaltige organisatorische Veränderung.\n• Innovation Workshop-Serien: Strukturierte Kreativitätsprozesse, die ESG-Herausforderungen als Ausgangspunkt für Geschäftsinnovationen nutzen.\n• Leadership Coaching: Entwicklung von ESG Leadership Capabilities bei Führungskräften als Multiplikatoren für kulturelle Transformation.\n• Employee Engagement Programs: Design und Implementierung von Mitarbeiterprogrammen, die ESG-Ziele mit persönlicher und beruflicher Entwicklung verknüpfen und Ownership für Nachhaltigkeitsziele schaffen."
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
