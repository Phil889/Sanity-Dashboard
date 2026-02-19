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
    console.log('Updating ESG Umweltmanagement page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-umweltmanagement-dekarbonisierung-klimaschutzprogramme-energieeffizienz-co2-bilanzierung-scope-1-3' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-umweltmanagement-dekarbonisierung-klimaschutzprogramme-energieeffizienz-co2-bilanzierung-scope-1-3" not found')
    }
    
    // Create new C-Level FAQs in German for ESG Environmental Management
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine strategische Dekarbonisierungsstrategie für die C-Suite mehr als nur eine Compliance-Anforderung und wie transformiert ADVISORI dies zu einem Wettbewerbsvorteil?",
        answer: "Für die C-Suite stellt die Dekarbonisierung eine fundamentale Geschäftstransformation dar, die weit über regulatorische Compliance hinausgeht. Sie ist ein strategischer Hebel zur Wertsteigerung, Risikominimierung und zur Erschließung neuer Marktchancen. ADVISORI versteht Dekarbonisierung als integralen Bestandteil der Unternehmensstrategie, der operative Exzellenz mit nachhaltiger Wertschöpfung verbindet.\n\n🎯 Strategische Business-Imperative für die Führungsebene:\n• Wertsteigerung und Investorenzugang: ESG-konforme Unternehmen erhalten bessere Finanzierungskonditionen und höhere Bewertungen, da institutionelle Investoren zunehmend ESG-Kriterien in ihre Anlageentscheidungen integrieren.\n• Operative Kostenoptimierung: Energieeffizienz-Maßnahmen und der Übergang zu erneuerbaren Energien reduzieren langfristig die Betriebskosten und schaffen Planungssicherheit bei volatilen Energiepreisen.\n• Marktdifferenzierung und Kundenbindung: Nachhaltige Geschäftsmodelle und klimaneutrale Produkte erschließen neue Kundensegmente und stärken die Markenloyalität bei umweltbewussten Verbrauchern.\n• Regulatorische Vorausschau: Proaktive Dekarbonisierung minimiert das Risiko künftiger Regulierungskosten und schafft Flexibilität bei sich verschärfenden Klimavorschriften.\n\n🛡️ Der ADVISORI-Ansatz für strategische Dekarbonisierung:\n• Integrierte Geschäftsstrategie: Wir entwickeln Dekarbonisierungspfade, die nahtlos in Ihre Geschäftsstrategie integriert sind und sowohl kurzfristige Rentabilität als auch langfristige Nachhaltigkeit sicherstellen.\n• Datengetriebene Entscheidungsfindung: Präzise CO2-Bilanzierung und Szenarioanalysen ermöglichen es der C-Suite, fundierte Investitionsentscheidungen zu treffen und Klimarisiken zu quantifizieren.\n• Stakeholder-Value-Optimierung: Wir helfen dabei, die Dekarbonisierungsstrategie so zu kommunizieren, dass sie das Vertrauen aller Stakeholder – von Investoren über Kunden bis hin zu Mitarbeitern – stärkt.\n• Innovation als Treiber: Dekarbonisierung wird als Katalysator für Innovationen genutzt, um neue Geschäftsmodelle zu entwickeln und Technologieführerschaft zu etablieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Die CO2-Bilanzierung nach Scope 1-3 wird immer komplexer, besonders bei globalen Lieferketten. Wie stellt ADVISORI sicher, dass unsere Emissionsdaten präzise, auditfähig und strategisch verwertbar sind?",
        answer: "Die präzise CO2-Bilanzierung nach dem GHG Protocol (Scope 1-3) ist das Fundament jeder erfolgreichen Dekarbonisierungsstrategie. Für die C-Suite ist es entscheidend, dass diese Daten nicht nur regulatorische Standards erfüllen, sondern auch als strategisches Steuerungsinstrument dienen. ADVISORI kombiniert technische Expertise mit strategischem Business-Verständnis, um CO2-Daten zu einem wertvollen Asset für die Unternehmensführung zu machen.\n\n🔍 Herausforderungen bei der Scope 3-Erfassung und unsere Lösungsansätze:\n• Komplexe Lieferketten-Transparenz: Wir entwickeln systematische Ansätze zur Erfassung von Scope 3-Emissionen durch Lieferanten-Engagement, Datenstandards und digitale Tracking-Systeme, die auch bei globalen, vielstufigen Lieferketten funktionieren.\n• Datenqualität und -validierung: Implementierung robuster Datenerfassungsprozesse mit automatisierten Validierungsroutinen, um die Genauigkeit und Konsistenz der CO2-Daten sicherzustellen.\n• Auditfähigkeit und Compliance: Aufbau von Dokumentations- und Governance-Strukturen, die externen Audits standhalten und regulatorische Anforderungen (CSRD, EU-Taxonomie) erfüllen.\n• Benchmark-Integration: Vergleich Ihrer Emissionsintensität mit Branchenstandards und Best-Practice-Unternehmen, um Verbesserungspotenziale zu identifizieren.\n\n📊 Strategische Nutzung der CO2-Daten durch ADVISORI:\n• Hotspot-Analyse für Prioritätensetzung: Identifikation der emissionsintensivsten Bereiche zur gezielten Allokation von Dekarbonisierungsressourcen und Maximierung des ROI von Klimainvestitionen.\n• Szenario-Modellierung für Strategieentwicklung: Nutzung der CO2-Daten für Szenarioanalysen, die verschiedene Dekarbonisierungspfade und deren finanzielle Auswirkungen aufzeigen.\n• KPI-Integration in Unternehmenssteuerung: Entwicklung von CO2-basierten Key Performance Indicators, die in Management-Dashboards und Vergütungssysteme integriert werden können.\n• Supply Chain-Optimierung: Verwendung der Scope 3-Daten zur strategischen Lieferantenbewertung und zur Entwicklung nachhaltiger Beschaffungsstrategien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Energieeffizienz-Investitionen konkurrieren oft mit anderen Capex-Prioritäten. Wie hilft ADVISORI der C-Suite dabei, den Business Case für Energieeffizienz-Programme zu optimieren und Quick Wins zu identifizieren?",
        answer: "Energieeffizienz-Investitionen sind oft die kostengünstigsten Hebel für Dekarbonisierung und bieten gleichzeitig direkte operative Kosteneinsparungen. Für die C-Suite ist es entscheidend, diese Investitionen strategisch zu priorisieren und den ROI zu maximieren. ADVISORI entwickelt datengetriebene Business Cases, die Energieeffizienz als profitables Investment positionieren und gleichzeitig Klimaziele vorantreiben.\n\n💰 Optimierung des Business Case für Energieeffizienz:\n• ROI-Maximierung durch Prioritätsmatrix: Entwicklung einer strukturierten Bewertungsmatrix, die Investitionskosten, Energieeinsparungen, CO2-Reduktion und strategische Vorteile integriert, um die rentabelsten Projekte zu identifizieren.\n• Ganzheitliche Kostenbewertung: Berücksichtigung aller Kostenkomponenten einschließlich vermiedener CO2-Kosten, reduzierter Wartungskosten und verbesserter Produktivität durch optimierte Arbeitsumgebungen.\n• Finanzierungsoptimierung: Erschließung von Fördermitteln, Green Bonds und steuerlichen Anreizen, um die Eigenkapitalbelastung zu reduzieren und die Projektrentabilität zu steigern.\n• Risikominimierung: Quantifizierung der Absicherung gegen volatile Energiepreise und künftige CO2-Bepreisung als zusätzliche Wertkomponente.\n\n⚡ Quick Win-Identifikation und Umsetzungsunterstützung:\n• Low-hanging Fruits Analysis: Systematische Identifikation von Maßnahmen mit kurzen Amortisationszeiten (unter 2 Jahren) wie LED-Umrüstung, Gebäudeautomation und Prozessoptimierungen.\n• Pilotprojekt-Entwicklung: Design schnell umsetzbarer Demonstrationsprojekte, die als Proof-of-Concept für größere Energieeffizienz-Programme dienen und interne Akzeptanz schaffen.\n• Technologie-Scouting: Bewertung innovativer Energieeffizienz-Technologien und deren Anwendbarkeit in Ihrem spezifischen Geschäftskontext.\n• Performance-Monitoring: Implementierung von Monitoring-Systemen, die die Wirksamkeit der Maßnahmen transparent machen und kontinuierliche Optimierung ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Klimaschutzprogramme müssen über das eigene Unternehmen hinausgehen, um glaubwürdig zu sein. Wie entwickelt ADVISORI ganzheitliche Programme, die Scope 3-Emissionen adressieren und gleichzeitig Lieferanten und Partner einbinden?",
        answer: "Echte Klimawirkung entsteht nur durch ganzheitliche Programme, die die gesamte Wertschöpfungskette umfassen. Für die C-Suite bedeutet dies, dass Klimaschutzprogramme strategische Partnerschaften stärken, Lieferkettenresilienz verbessern und neue Geschäftschancen schaffen können. ADVISORI entwickelt Klimaschutzprogramme, die über Compliance hinausgehen und zu einem strategischen Differenzierungsfaktor werden.\n\n🤝 Strategische Lieferanten- und Partner-Integration:\n• Supplier Engagement Programme: Entwicklung strukturierter Programme zur Einbindung von Lieferanten in Dekarbonisierungsziele, einschließlich Zielvereinbarungen, Capacity Building und gemeinsamer Innovationsprojekte.\n• Wertschöpfungsketten-Transformation: Design von Initiativen, die gesamte Branchen-Ökosysteme transformieren und Ihr Unternehmen als Nachhaltigkeitsführer positionieren.\n• Technologie-Transfer und Innovation: Förderung des Austauschs von Best Practices und nachhaltigen Technologien innerhalb der Lieferkette zur gemeinsamen Emissionsreduktion.\n• Langfristige Partnerschaftsmodelle: Entwicklung von Vertragsstrukturen, die nachhaltige Praktiken incentivieren und gleichzeitig Kosteneinsparungen für alle Beteiligten schaffen.\n\n🌍 Ganzheitliche Klimaschutzprogramm-Gestaltung:\n• Science-Based Targets Integration: Entwicklung von Klimaschutzprogrammen, die wissenschaftsbasierte Ziele (SBTi) umfassen und sowohl direkte als auch indirekte Emissionen adressieren.\n• Circular Economy-Ansätze: Integration von Kreislaufwirtschaftsprinzipien in Klimaschutzprogramme zur Maximierung der Ressourceneffizienz und Emissionsreduktion.\n• Biodiversitäts- und Naturkapital-Integration: Verbindung von Klimaschutz mit Biodiversitätsschutz und Ökosystemdienstleistungen für ganzheitliche Umweltwirkung.\n• Stakeholder-Kommunikation und Transparenz: Entwicklung authentischer Kommunikationsstrategien, die die Klimaschutzanstrengungen glaubwürdig vermitteln und Stakeholder-Vertrauen stärken."
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
