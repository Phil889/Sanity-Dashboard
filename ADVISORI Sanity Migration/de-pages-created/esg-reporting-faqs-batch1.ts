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
    console.log('Updating ESG-Reporting page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-reporting' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-reporting" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ESG-Reporting für die C-Suite weit mehr als eine Compliance-Übung und wie transformiert ADVISORI dies zu einem strategischen Wettbewerbsvorteil?",
        answer: "Für die C-Suite repräsentiert ESG-Reporting das zentrale Instrument zur Kommunikation der Unternehmensstrategie und Werteorientierung gegenüber allen relevanten Stakeholdern. Es ist die Brücke zwischen interner Nachhaltigkeitsstrategie und externer Marktwahrnehmung, die direkten Einfluss auf Unternehmensbewertung, Kapitalzugang und Wettbewerbsposition hat. ADVISORI versteht ESG-Reporting als strategischen Werttreiber, der über die reine Compliance hinausgeht.\n\n📊 Strategische Dimensionen für die Führungsebene:\n• Kapitalmarktzugang und Finanzierungskonditionen: Hochwertige ESG-Berichte verbessern ESG-Ratings und reduzieren Kapitalkosten um bis zu 100 Basispunkte.\n• Reputationsmanagement und Brand Value: Transparente Nachhaltigkeitskommunikation stärkt das Vertrauen von Kunden, Partnern und Talenten.\n• Risikomanagement und Compliance: Proaktive Berichterstattung minimiert regulatorische Risiken und positioniert das Unternehmen als Vorreiter.\n• Stakeholder-Engagement und Legitimacy: Fundierte ESG-Kommunikation schafft Vertrauen bei Investoren, Kunden und der Gesellschaft.\n\n🎯 Der ADVISORI-Ansatz für strategisches ESG-Reporting:\n• Value Creation Narrative: Wir entwickeln ESG-Berichte, die nicht nur über Leistungen informieren, sondern eine überzeugende Geschichte der Wertschöpfung durch Nachhaltigkeit erzählen.\n• Integrated Reporting Approach: Integration von ESG-Metriken in die Gesamtunternehmensstrategie und -kommunikation für ein kohärentes Narrativ.\n• Forward-Looking Statements: Fokus auf Zukunftsstrategie und Roadmap statt reiner Vergangenheitsbetrachtung.\n• Stakeholder-Specific Communication: Zielgruppengerechte Aufbereitung für Investoren, Kunden, Regulatoren und andere Stakeholder-Gruppen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den konkreten Business Case für investitionsintensive ESG-Reporting-Programme und welchen direkten ROI können wir erwarten?",
        answer: "Investitionen in professionelles ESG-Reporting generieren messbare finanzielle Renditen durch verbesserte Kapitalmarktzugänge, niedrigere Finanzierungskosten und erhöhte Unternehmensbewertungen. ADVISORI entwickelt datengetriebene Business Cases, die sowohl direkte als auch indirekte Werttreiber quantifizieren und dem Management klare ROI-Metriken für ESG-Reporting-Investitionen liefern.\n\n💰 Direkte finanzielle Werttreiber:\n• Reduzierte Kapitalkosten: Unternehmen mit führender ESG-Berichterstattung erzielen 15-25% niedrigere Finanzierungskosten bei Green Bonds und ESG-linked Loans.\n• Verbesserte Unternehmensbewertung: Premium-ESG-Ratings führen zu 10-15% höheren Unternehmensbewertungen in vergleichbaren Transaktionen.\n• Erweiterte Investorenbasis: Zugang zu über 35 Billionen USD an ESG-fokussierten Assets under Management.\n• Risikominimierung: Vermeidung von Strafen und Reputationsschäden durch proaktive Compliance mit sich verschärfenden Regulierungen.\n\n📈 Indirekte Werttreiber und strategische Vorteile:\n• Operational Excellence: ESG-Reporting-Prozesse decken oft Ineffizienzen auf und führen zu 5-12% Kosteneinsparungen in relevanten Bereichen.\n• Talent Acquisition und Retention: 75% der Millennials sind bereit, Gehaltseinbußen für nachhaltige Arbeitgeber hinzunehmen.\n• Customer Loyalty und Premium Pricing: B2B-Kunden zahlen durchschnittlich 15% Premium für Lieferanten mit nachweislicher ESG-Excellence.\n• Supply Chain Optimization: ESG-Transparenz ermöglicht bessere Lieferantenauswahl und Risikomanagement.\n\n🔍 ADVISORI's ROI-Quantifizierung:\n• Baseline Assessment: Detaillierte Analyse der aktuellen Position und Identifikation konkreter Verbesserungspotenziale.\n• Financial Impact Modeling: Quantifizierung der erwarteten finanziellen Auswirkungen basierend auf Branchenbenchmarks und Peer-Analysen.\n• KPI-Framework: Entwicklung messbarer Erfolgsindikatoren für kontinuierliches ROI-Tracking.\n• Progressive Enhancement: Stufenweise Implementierung mit regelmäßiger ROI-Validierung und Anpassung der Strategie."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die regulatorische Landschaft entwickelt sich rasant – von CSRD bis zu branchenspezifischen Standards. Wie stellt ADVISORI sicher, dass unser ESG-Reporting zukunftssicher und adaptiv gestaltet ist?",
        answer: "Die dynamische Entwicklung der ESG-Regulatorik – von der EU Corporate Sustainability Reporting Directive (CSRD) über lokale Taxonomien bis hin zu branchenspezifischen Standards – erfordert einen proaktiven und adaptiven Ansatz. ADVISORI entwickelt ESG-Reporting-Frameworks, die nicht nur aktuelle Anforderungen erfüllen, sondern auch flexibel genug sind, um sich schnell an neue regulatorische Entwicklungen anzupassen.\n\n🔄 Adaptive Compliance-Architektur:\n• Multi-Standard Framework: Design von Reporting-Systemen, die mehrere Standards (GRI, SASB, TCFD, EU-Taxonomie) gleichzeitig bedienen können.\n• Modular Data Architecture: Aufbau flexibler Datenstrukturen, die neue KPIs und Metriken ohne Systemumbau integrieren können.\n• Forward-Looking Compliance: Antizipation kommender Regelungen durch kontinuierliches Regulatory Monitoring und frühzeitige Implementierung.\n• Stakeholder-Agnostic Design: Entwicklung von Berichten, die verschiedene Zielgruppen und deren evolvierende Anforderungen bedienen.\n\n🌍 Regulatorische Trends und ADVISORI's Antwort:\n• CSRD und ESRS: Vollständige Implementierung der European Sustainability Reporting Standards mit detaillierter Double Materiality Assessment.\n• Taxonomie-Alignment: Systematische Bewertung und Reporting von Taxonomie-eligiblen und -aligned Aktivitäten mit robuster Dokumentation.\n• Climate Risk Disclosure: Integration von TCFD-konformen Klimarisikoanalysen und Szenario-Planning in die Berichterstattung.\n• Sector-Specific Requirements: Branchenspezifische Anpassungen für Finanzdienstleister (EBA Guidelines), Energie (EU ETS) und andere regulierte Sektoren.\n\n⚡ Proaktive Zukunftssicherung:\n• Regulatory Intelligence: Kontinuierliches Monitoring von Entwicklungen in EU, USA, APAC und anderen relevanten Jurisdiktionen.\n• Technology Integration: Einsatz von AI und Automation für effiziente Datensammlung und -verarbeitung bei sich ändernden Anforderungen.\n• Stakeholder Network: Enger Austausch mit Regulatoren, Standard-Settern und Peer-Unternehmen für frühzeitige Trendidentifikation.\n• Scalable Infrastructure: Aufbau von Reporting-Infrastrukturen, die mit dem Wachstum regulatorischer Komplexität skalieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI ESG-Reporting von einer reinen Kommunikationsmaßnahme zu einem integrierten Managementinstrument, das operative Entscheidungen der C-Suite fundiert?",
        answer: "Traditionelles ESG-Reporting war oft ein retrospektiver Kommunikationsakt ohne direkten Bezug zur strategischen Entscheidungsfindung. ADVISORI verfolgt einen revolutionären Ansatz, der ESG-Reporting als integriertes Managementinstrument positioniert. Dies ermöglicht der C-Suite, ESG-Daten nicht nur zu kommunizieren, sondern aktiv für strategische Entscheidungen, Risikosteuerung und Wertschöpfung zu nutzen.\n\n🎯 Von Reporting zu Strategic Intelligence:\n• Real-Time ESG Dashboard: Entwicklung von Executive Dashboards, die ESG-KPIs mit finanziellen Metriken und operativen Kennzahlen verknüpfen.\n• Predictive Analytics: Einsatz von Datenanalyse zur Vorhersage von ESG-Trends und deren Auswirkungen auf Geschäftsergebnisse.\n• Decision Support Systems: Integration von ESG-Faktoren in alle strategischen Entscheidungsprozesse von M&A bis Kapitalallokation.\n• Performance Management Integration: Verknüpfung von ESG-Zielen mit Managementanreizsystemen und Vergütungsstrukturen.\n\n🔗 Operative Integration und Business Alignment:\n• Strategic Planning Integration: ESG-Metriken werden integraler Bestandteil der Unternehmensplanung und Budget-Allokation.\n• Risk Management Enhancement: ESG-Daten fließen direkt in Enterprise Risk Management und Compliance-Monitoring ein.\n• Innovation Pipeline: ESG-Insights treiben Produktentwicklung und neue Geschäftsmodelle in nachhaltigen Märkten.\n• Stakeholder Value Creation: Nutzung von ESG-Performance zur Optimierung von Kunden-, Mitarbeiter- und Investoren-Beziehungen.\n\n📊 ADVISORI's Integrated Management Approach:\n• C-Suite ESG Cockpit: Maßgeschneiderte Executive Information Systems mit ESG-KPIs, Trendanalysen und Handlungsempfehlungen.\n• Scenario Planning Tools: ESG-basierte Szenarioanalysen für strategische Planungsprozesse und Risikobewertung.\n• Competitive Intelligence: Benchmarking und Peer-Analyse für strategische Positionierung im ESG-Kontext.\n• Value Driver Analysis: Quantifizierung des Zusammenhangs zwischen ESG-Performance und finanziellen Ergebnissen für datengetriebene Entscheidungen."
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
