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
    console.log('Updating ESG Training page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-training' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-training" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie integriert ADVISORI cutting-edge digitale Lernmethoden und KI-gestützte Personalisierung in ESG Training-Programme für maximale Lerneffizienz?",
        answer: "Die Digitalisierung der Bildungslandschaft revolutioniert ESG Training durch personalisierte, adaptive und datengestützte Lernansätze. ADVISORI nutzt fortschrittliche EdTech-Lösungen und KI-gestützte Personalisierung, um individualisierte Lernerfahrungen zu schaffen, die sowohl die Effizienz als auch die Nachhaltigkeit der Kompetenzentwicklung maximieren.\n\n🚀 Innovative Digital Learning Technologies:\n• AI-powered Learning Path Optimization: Nutzung von Machine Learning-Algorithmen zur kontinuierlichen Anpassung der Lernpfade basierend auf individuellen Lernfortschritten, Präferenzen und Performance-Daten.\n• Immersive VR/AR ESG Simulations: Entwicklung virtueller Realitätserfahrungen für komplexe ESG-Szenarien, die praktische Entscheidungsfindung in risikofreien Umgebungen ermöglichen.\n• Adaptive Microlearning Modules: Bereitstellung bite-sized Learning-Einheiten, die sich automatisch an verfügbare Zeitfenster und Aufmerksamkeitsspannen anpassen.\n• Gamification und Social Learning: Integration spielerischer Elemente und sozialer Lernkomponenten zur Steigerung von Engagement und kollaborativem Wissensaufbau.\n\n🎯 ADVISORI's Personalized Learning Ecosystem:\n• Individual Learning Analytics: Umfassende Datenanalyse individueller Lernmuster, Stärken und Entwicklungsbereiche zur Optimierung der Trainingseffektivität.\n• Dynamic Content Curation: Automatisierte Zusammenstellung relevanter ESG-Inhalte basierend auf Rolle, Branche, aktuellen Trends und individuellen Interessensgebieten.\n• Real-time Performance Feedback: Kontinuierliche Bewertung und Feedback-Zyklen durch KI-gestützte Assessment-Tools und Peer-Review-Systeme.\n• Predictive Learning Recommendations: Proaktive Empfehlungen für zusätzliche Lernmodule und Weiterbildungsmöglichkeiten basierend auf Karrierezielen und Marktentwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie gewährleistet ADVISORI die Aktualität und Relevanz von ESG Training-Inhalten angesichts der rasanten Entwicklung regulatorischer Anforderungen und Marktstandards?",
        answer: "Die ESG-Landschaft entwickelt sich mit beispielloser Geschwindigkeit - neue Regulatorik, evolvierende Standards und sich wandelnde Stakeholder-Erwartungen erfordern kontinuierlich aktualisierte Training-Inhalte. ADVISORI etabliert dynamische Content-Management-Systeme und Echtzeit-Update-Prozesse, die sicherstellen, dass alle Training-Programme stets den neuesten Entwicklungen entsprechen.\n\n📡 Continuous Content Intelligence System:\n• Real-time Regulatory Monitoring: Automatisierte Überwachung globaler ESG-Regulatorik durch spezialisierte Legal-Tech-Tools und Expertennetzwerke zur sofortigen Identifikation relevanter Änderungen.\n• Market Intelligence Integration: Kontinuierliche Einbindung von Marktforschung, Branchen-Trends und Best Practice-Entwicklungen in die Training-Curricula.\n• Expert Advisory Network: Zugang zu einem globalen Netzwerk von ESG-Experten, Regulatoren und Praktikern für zeitnahe Insights und Validierung neuer Inhalte.\n• Agile Content Development Cycles: Implementierung agiler Entwicklungsprozesse für die schnelle Erstellung und Bereitstellung aktualisierter Training-Module.\n\n🔄 ADVISORI's Dynamic Update Framework:\n• Modular Content Architecture: Entwicklung modularer Training-Strukturen, die einzelne Komponenten ohne Disruption des Gesamtprogramms aktualisieren können.\n• Version Control und Change Management: Systematische Versionierung aller Training-Inhalte mit transparenten Change-Logs und Impact-Assessments für Teilnehmer.\n• Just-in-Time Learning Alerts: Proaktive Benachrichtigungen über kritische ESG-Entwicklungen mit sofortigen Micro-Learning-Modulen zur Wissensaktualisierung.\n• Crowdsourced Content Validation: Einbindung der Trainer- und Teilnehmer-Community zur kollektiven Validierung und Verbesserung der Training-Inhalte."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie entwickelt ADVISORI branchenspezifische ESG Training-Programme, die den einzigartigen Herausforderungen verschiedener Sektoren gerecht werden?",
        answer: "ESG-Herausforderungen manifestieren sich unterschiedlich je nach Branche - von klimabezogenen Risiken in der Energiewirtschaft bis zu sozialen Auswirkungen in der Textilbranche. ADVISORI entwickelt hochspezialisierte, branchenspezifische Training-Programme, die die einzigartigen ESG-Herausforderungen, Regulatorik und Stakeholder-Erwartungen verschiedener Sektoren adressieren.\n\n🏭 Sector-specific ESG Training Excellence:\n• Financial Services Focus: Spezialisierte Programme für Banken, Versicherungen und Asset Manager mit Schwerpunkt auf Sustainable Finance, Climate Risk Assessment und ESG Integration in Investmentprozesse.\n• Manufacturing und Industrial Sector: Training für produzierende Unternehmen mit Fokus auf Circular Economy, Supply Chain Sustainability und Environmental Impact Management.\n• Healthcare und Life Sciences: Branchenspezifische Module zu Patient Safety, Access to Healthcare, Ethical Research Practices und Pharmaceutical Supply Chain Responsibility.\n• Technology und Digital Services: ESG-Programme für Tech-Unternehmen mit Schwerpunkt auf Digital Ethics, Data Privacy, Algorithmic Bias und Technology for Good Initiatives.\n\n🎯 ADVISORI's Industry-Immersive Learning Approach:\n• Sector Expert Faculty: Zusammenstellung von Trainer-Teams mit tiefgreifender Branchenexpertise und praktischer ESG-Umsetzungserfahrung in spezifischen Sektoren.\n• Real Case Study Libraries: Entwicklung umfangreicher Bibliotheken branchenspezifischer Fallstudien, die authentische ESG-Herausforderungen und -Lösungen aus der jeweiligen Industrie präsentieren.\n• Regulatory Landscape Mapping: Detaillierte Aufbereitung branchenspezifischer ESG-Regulatorik und deren praktische Implementierungsanforderungen.\n• Peer Learning Networks: Etablierung branchenspezifischer Peer-Learning-Gruppen für den Erfahrungsaustausch zwischen Unternehmen ähnlicher Sektoren und Herausforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie unterstützt ADVISORI die Integration von ESG Training-Erkenntnissen in konkrete Geschäftsprozesse und operative Entscheidungen?",
        answer: "Die wahre Wertschöpfung von ESG Training liegt nicht im reinen Wissenserwerb, sondern in der praktischen Anwendung und Integration in alltägliche Geschäftsprozesse. ADVISORI entwickelt Action-Learning-Ansätze und Implementation-Support-Systeme, die sicherstellen, dass Training-Erkenntnisse zu messbaren Verbesserungen in der operativen ESG-Performance führen.\n\n⚡ From Learning to Implementation Excellence:\n• Action Learning Projects: Integration realer Geschäftsprojekte in Training-Programme, wodurch Teilnehmer ESG-Prinzipien direkt an aktuellen Herausforderungen ihrer Organisation anwenden.\n• Process Integration Workshops: Spezialisierte Sessions zur systematischen Integration von ESG-Kriterien in bestehende Geschäftsprozesse wie Produktentwicklung, Risikomanagement und Supplier Selection.\n• Decision-Making Framework Development: Entwicklung praktischer ESG-Entscheidungsrahmen und -Tools, die Mitarbeiter in alltäglichen Situationen anwenden können.\n• Performance Metric Implementation: Unterstützung bei der Entwicklung und Implementierung ESG-spezifischer KPIs und Monitoring-Systeme.\n\n🔄 ADVISORI's Implementation Acceleration Framework:\n• Post-Training Action Planning: Strukturierte Nachbetreuung mit individuellen Aktionsplänen und Umsetzungsroadmaps für jeden Teilnehmer.\n• Change Management Integration: Einbindung von Change Management-Prinzipien zur Überwindung organisationaler Widerstände gegen ESG-bezogene Prozessänderungen.\n• Executive Sponsorship Programs: Entwicklung von Executive Sponsorship-Strukturen zur Sicherstellung organisationaler Unterstützung für Training-basierte Veränderungsinitiativen.\n• Continuous Improvement Cycles: Etablierung kontinuierlicher Verbesserungszyklen mit regelmäßigen Follow-up-Sessions zur Optimierung der ESG-Integration und Problemlösung."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
