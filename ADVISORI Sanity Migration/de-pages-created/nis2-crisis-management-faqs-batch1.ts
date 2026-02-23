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
    console.log('Updating NIS2 Crisis Management page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-crisis-management' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-crisis-management" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist NIS2-konformes Krisenmanagement für die C-Suite mehr als nur eine Compliance-Anforderung und wie transformiert ADVISORI dies zu einem strategischen Wettbewerbsvorteil?",
        answer: "Für C-Level-Führungskräfte stellt NIS2-konformes Krisenmanagement weit mehr dar als die bloße Erfüllung regulatorischer Vorgaben - es ist ein fundamentaler Baustein für operative Exzellenz, Stakeholder-Vertrauen und nachhaltige Wettbewerbsfähigkeit. ADVISORI positioniert Crisis Management als strategischen Enabler, der nicht nur regulatorische Compliance sicherstellt, sondern auch die organisationale Resilienz und Marktpositionierung stärkt.\n\n🎯 Strategische Crisis Management-Dimensionen für die Führungsebene:\n• Business Continuity Excellence: Professionelle Krisenmanagement-Kapazitäten minimieren Ausfallzeiten, schützen kritische Geschäftsprozesse und sichern Umsatzströme auch in Krisensituationen.\n• Stakeholder Confidence Protection: Effektive Crisis Response demonstriert institutionelle Reife und schafft Vertrauen bei Investoren, Kunden und Partnern für nachhaltige Geschäftsbeziehungen.\n• Competitive Advantage Creation: Überlegene Krisenmanagement-Fähigkeiten ermöglichen es, in volatilen Marktphasen Marktanteile zu gewinnen, während Wettbewerber mit Betriebsstörungen kämpfen.\n• Regulatory Capital Efficiency: Exzellente Crisis Management-Frameworks reduzieren regulatorische Prüfungsintensität und schaffen Raum für Geschäftsfokus statt Compliance-Aufwand.\n\n🛡️ Der ADVISORI Crisis Excellence-Ansatz:\n• Strategic Resilience Architecture: Wir entwickeln Crisis Management-Systeme, die nicht nur NIS2-konform sind, sondern auch optimal auf Ihre Geschäftsstrategie und operative Anforderungen ausgerichtet sind.\n• Proactive Risk Intelligence: Integration von Threat Intelligence und Predictive Analytics zur Früherkennung von Krisen und proaktiven Schadensbegrenzung.\n• Cross-Functional Integration: Crisis Management-Frameworks, die nahtlos in bestehende Governance-Strukturen integriert sind und C-Level-Entscheidungen in Echtzeit unterstützen.\n• Value-Driven Implementation: Crisis Management-Investitionen, die messbare ROI durch reduzierte Ausfallzeiten, verbesserte Operational Efficiency und gestärkte Marktposition generieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie optimiert ADVISORI Incident Response-Prozesse, um C-Level-Führungskräften nicht nur NIS2-Compliance zu gewährleisten, sondern auch strategische Entscheidungsgeschwindigkeit und operative Kontinuität zu maximieren?",
        answer: "Moderne Incident Response erfordert die perfekte Balance zwischen regulatorischer Compliance und operativer Agilität. ADVISORI hat innovative Response-Frameworks entwickelt, die nicht nur alle NIS2-Anforderungen übertreffen, sondern auch C-Level-Führungskräften maximale strategische Handlungsfähigkeit bei minimalen Betriebsunterbrechungen ermöglichen. Unser Ansatz verbindet Regulatory Excellence mit Business Continuity.\n\n⚡ Advanced Incident Response Excellence-Framework:\n• Intelligent Escalation Matrices: Automatisierte Eskalationsprozesse, die kritische Incidents sofort an C-Level-Ebene weiterleiten, während Routine-Incidents auf operativer Ebene gelöst werden.\n• Real-time Executive Dashboards: Live-Monitoring-Systeme, die Führungskräften kontinuierlichen Überblick über Incident-Status, Business Impact und Recovery-Fortschritt liefern.\n• Decision Support Integration: KI-gestützte Impact-Analyse und Recovery-Empfehlungen, die C-Level-Entscheidungen durch datenbasierte Insights beschleunigen.\n• Stakeholder Communication Automation: Vorkonfigurierte Kommunikationskanäle für automatisierte Benachrichtigung von Kunden, Partnern und Aufsichtsbehörden gemäß NIS2-Meldepflichten.\n\n🚀 ADVISORI's Strategic Response-Methodology:\n• Business-Centric Incident Classification: Incident-Kategorisierung basierend auf Business Impact statt technischer Severity für prioritätenorientierte C-Level-Aufmerksamkeit.\n• Parallel Recovery Orchestration: Gleichzeitige Wiederherstellung kritischer Systeme und Backup-Aktivierung zur Minimierung von Downtime und Umsatzausfall.\n• Regulatory Compliance Automation: Automatisierte NIS2-Meldungen und Dokumentation zur Entlastung der Führungsebene von Compliance-Overhead.\n• Crisis Leadership Protocols: Klare Command & Control-Strukturen, die C-Level-Führungskräften strategische Oversight ermöglichen ohne operative Mikromanagement-Notwendigkeit.\n• Post-Incident Value Creation: Systematische Lessons Learned-Integration zur kontinuierlichen Stärkung der organisationalen Resilienz und Competitive Advantage-Entwicklung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In welcher Weise strukturiert ADVISORI Business Continuity Planning, um C-Suite-Entscheidungen während Krisen zu unterstützen und gleichzeitig NIS2-Compliance und operative Exzellenz zu gewährleisten?",
        answer: "Strategisches Business Continuity Planning ist der Schlüssel zur Aufrechterhaltung der Geschäftsfähigkeit während Krisenzeiten. ADVISORI entwickelt innovative Continuity-Frameworks, die nicht nur alle NIS2-Anforderungen erfüllen, sondern auch C-Level-Führungskräften maximale strategische Flexibilität und operative Kontrolle in kritischen Situationen ermöglichen. Unser Ansatz verbindet Regulatory Compliance mit Business Excellence.\n\n📈 Strategic Business Continuity Architecture:\n• Executive Crisis Command Centers: Speziell ausgestattete Führungszentren mit Real-time-Analytics, Secure Communications und Decision Support-Tools für optimale C-Level-Krisensteuerung.\n• Alternative Business Models: Vorkonfigurierte operative Szenarien für verschiedene Krisentypen, die schnelle Umstellung auf alternative Geschäftsmodelle ohne Strategieverlust ermöglichen.\n• Supply Chain Resilience Networks: Diversifizierte Lieferanten- und Partnerstrukturen mit automatisierten Failover-Mechanismen zur Aufrechterhaltung kritischer Geschäftsbeziehungen.\n• Revenue Protection Strategies: Integrierte Ansätze zur Sicherung von Cashflow und Kundenbindung während Betriebsstörungen durch alternative Service Delivery-Modelle.\n\n🎯 ADVISORI's Continuity Excellence Framework:\n• Risk-Weighted Prioritization: Business Impact Analysis mit C-Level-Input zur Fokussierung auf umsatzkritische Prozesse und strategische Prioritäten während der Recovery.\n• Stakeholder-Centric Communication: Maßgeschneiderte Kommunikationsstrategien für verschiedene Stakeholder-Gruppen zur Aufrechterhaltung von Vertrauen und Geschäftsbeziehungen.\n• Regulatory Compliance Integration: Seamless Integration von NIS2-Meldepflichten in Business Continuity-Prozesse ohne Ablenkung von operativen Recovery-Prioritäten.\n• Performance Monitoring Excellence: Kontinuierliche Überwachung von Recovery-Metriken und Business Performance-Indikatoren für datenbasierte C-Level-Entscheidungen.\n• Competitive Advantage Preservation: Strategien zur Nutzung von Krisenzeiten für Marktanteilsgewinne durch überlegene Continuity-Kapazitäten gegenüber Wettbewerbern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie positioniert ADVISORI Crisis Management-Excellence als Werttreiber für Unternehmensbewertungen und strategische Partnerschaften, um C-Level-Investitionen in Resilienz zu ROI-positiven Assets zu transformieren?",
        answer: "Erstklassige Crisis Management-Kapazitäten sind mächtige, aber oft unterschätzte Werttreiber, die direkt Unternehmensbewertungen steigern und strategische Opportunities erschließen. ADVISORI transformiert Resilienz-Investitionen in messbare Business Assets, die Risikoprämien senken, Premium-Partnerschaften ermöglichen und Competitive Advantages schaffen.\n\n💎 Crisis Management als Strategic Asset:\n• Valuation Premium durch Resilienz-Quality: Institutionelle Investoren bewerten Unternehmen mit Superior Crisis Management mit 15-25% höheren Multiples aufgrund reduzierter Volatilität und höherer Planungssicherheit.\n• Insurance Premium Optimization: Exzellente Crisis Management-Frameworks reduzieren Cyber-Versicherungsprämien um bis zu 40% und verbessern Deckungsumfang bei kritischen Risiken.\n• Strategic Partnership Enablement: Überlegene Resilienz-Kapazitäten öffnen Türen zu strategischen Allianzen mit führenden Unternehmen, die nur mit robusten Partnern kooperieren.\n• M&A Attractiveness Enhancement: Professionelle Crisis Management-Systeme sind ein Key Value Driver bei Akquisitionsverhandlungen und können Deal-Valuations signifikant steigern.\n\n🏆 Der ADVISORI Value-Creation-Ansatz:\n• Resilienz ROI Measurement: Entwicklung quantifizierbarer Metriken zur Demonstration des Financial Impact von Crisis Management Excellence auf Unternehmenswert und operative Performance.\n• Stakeholder Confidence Building: Crisis Management-Narratives und Resilienz-Stories, die in Investor Relations, Due Diligence-Prozessen und Strategic Communications überzeugen.\n• Regulatory Capital Optimization: Crisis Management-Excellence, die bei Aufsichtsbehörden Premium-Treatment ermöglicht und zu günstigeren Compliance-Auflagen führt.\n• Market Positioning Strategy: Crisis Management-Kapazitäten als Differentiator in Competitive Situations, Tender-Prozessen und Partnership-Negotiations für Premium-Positionierung.\n• Operational Excellence Integration: Crisis Management-Systeme, die nicht nur Risiken minimieren, sondern auch operative Effizienz steigern und Prozessoptimierung vorantreiben."
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
