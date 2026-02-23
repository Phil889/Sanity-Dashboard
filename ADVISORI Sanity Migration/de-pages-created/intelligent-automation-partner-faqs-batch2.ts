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
    console.log('Updating Intelligent Automation Partner page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'intelligent-automation-partner' })
    
    if (!existingDoc) {
      throw new Error('Document "intelligent-automation-partner" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie funktioniert Co-Innovation in der Intelligent Automation Partnerschaft mit ADVISORI?',
        answer: "Co-Innovation bildet das Herzstück unserer strategischen Partnerschaft und ermöglicht die gemeinsame Entwicklung bahnbrechender Automatisierungslösungen, die weit über Standard-Implementierungen hinausgehen. Durch kollaborative Forschung, geteilte Ressourcen und gemeinsame Risikobereitschaft entstehen innovative Lösungen, die beiden Partnern nachhaltigen Wettbewerbsvorteil verschaffen.\n\n🔬 Gemeinsame Forschungs- und Entwicklungslabore:\n• Aufbau dedizierter Innovation Labs mit gemeinsamer Finanzierung und Ressourcenallokation für experimentelle Automatisierungsprojekte.\n• Etablierung von Cross-funktionalen Teams aus beiden Organisationen mit komplementären Fähigkeiten und Perspektiven.\n• Implementierung agiler Entwicklungsmethoden für schnelle Prototyping-Zyklen und iterative Verbesserung.\n• Aufbau von Testumgebungen und Sandbox-Systemen für risikofreie Experimente mit emerging Technologies.\n\n💡 Kollaborative Ideenfindung und Bewertung:\n• Durchführung regelmäßiger Innovation Workshops und Hackathons zur Generierung neuer Automatisierungskonzepte.\n• Implementierung von Idea Management Systemen für strukturierte Sammlung, Bewertung und Priorisierung von Innovationsideen.\n• Aufbau von Customer Co-Creation Prozessen zur Integration von Marktfeedback in die Innovationsentwicklung.\n• Etablierung von Technology Scouting Netzwerken für frühzeitige Identifikation disruptiver Technologien.\n\n🚀 Rapid Prototyping und Proof-of-Concept Entwicklung:\n• Aufbau schneller Entwicklungszyklen für die Validierung innovativer Automatisierungsansätze in realen Geschäftsumgebungen.\n• Implementierung von Minimum Viable Product Strategien für kosteneffiziente Innovation Testing.\n• Entwicklung von Skalierungsstrategien für erfolgreiche Prototypen zur Marktreife.\n• Aufbau von Feedback-Loops zwischen Prototyping und strategischer Planung für kontinuierliche Verbesserung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Governance-Strukturen etabliert ADVISORI für eine erfolgreiche Intelligent Automation Partnerschaft?',
        answer: "Erfolgreiche strategische Partnerschaften erfordern robuste Governance-Strukturen, die Transparenz, Accountability und effiziente Entscheidungsfindung gewährleisten. ADVISORI entwickelt maßgeschneiderte Governance-Frameworks, die sowohl strategische Ausrichtung als auch operative Exzellenz sicherstellen und dabei die Flexibilität für Anpassungen an sich ändernde Anforderungen bewahren.\n\n🏛️ Strategische Governance-Ebene:\n• Etablierung eines Joint Steering Committees mit Senior Leadership beider Organisationen für strategische Entscheidungen und Richtungsbestimmung.\n• Implementierung regelmäßiger Strategic Reviews zur Bewertung der Partnerschaftsleistung und Anpassung der langfristigen Roadmap.\n• Aufbau von Escalation Pathways für kritische Entscheidungen und Konfliktresolution auf höchster Ebene.\n• Entwicklung von Partnership Charters mit klaren Zielen, Verantwortlichkeiten und Success Metrics.\n\n⚙️ Operative Governance-Strukturen:\n• Aufbau von Cross-funktionalen Working Groups für spezifische Automatisierungsbereiche mit klaren Mandaten und Deliverables.\n• Implementierung von Project Management Offices für koordinierte Projektausführung und Ressourcenmanagement.\n• Etablierung regelmäßiger Operational Reviews zur Überwachung von KPIs und operativer Performance.\n• Entwicklung von Change Management Prozessen für strukturierte Anpassung an neue Anforderungen.\n\n📊 Performance Management und Accountability:\n• Implementierung umfassender KPI-Dashboards für Echtzeit-Monitoring der Partnerschaftsleistung auf allen Ebenen.\n• Aufbau von Balanced Scorecard Systemen zur ganzheitlichen Bewertung von strategischen, operativen und finanziellen Zielen.\n• Etablierung von Regular Business Reviews mit datengetriebener Analyse und Handlungsempfehlungen.\n• Entwicklung von Continuous Improvement Prozessen basierend auf Performance-Insights und Stakeholder-Feedback."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie unterstützt ADVISORI als Partner den Aufbau interner Automatisierungskompetenzen?',
        answer: "Der systematische Aufbau interner Kompetenzen ist ein zentraler Baustein nachhaltiger Intelligent Automation Partnerschaften, da er langfristige Selbstständigkeit und kontinuierliche Innovation ermöglicht. ADVISORI entwickelt strukturierte Knowledge Transfer Programme, die nicht nur Wissen vermitteln, sondern auch eine Kultur der kontinuierlichen Verbesserung und Innovation etablieren.\n\n🎓 Strukturierte Kompetenzentwicklungsprogramme:\n• Entwicklung maßgeschneiderter Curriculum-Designs basierend auf spezifischen Automatisierungsanforderungen und bestehenden Fähigkeiten.\n• Implementierung von Multi-Level-Learning-Pathways für verschiedene Rollen von technischen Spezialisten bis hin zu strategischen Entscheidern.\n• Aufbau von Hands-on-Training-Umgebungen mit realen Automatisierungsszenarien für praktische Lernerfahrungen.\n• Etablierung von Mentoring-Programmen mit erfahrenen ADVISORI-Experten für individualisierte Kompetenzentwicklung.\n\n🏢 Center of Excellence Aufbau:\n• Unterstützung beim Aufbau interner Centers of Excellence für Intelligent Automation mit klaren Mandaten und Governance-Strukturen.\n• Entwicklung von Best Practice Repositories und Knowledge Management Systemen für organisationsweiten Wissensaustausch.\n• Implementierung von Community of Practice Netzwerken zur Förderung von Peer-to-Peer-Learning und Erfahrungsaustausch.\n• Aufbau von Innovation Incubators für die Entwicklung neuer Automatisierungsideen und -ansätze.\n\n🔄 Kontinuierliche Weiterentwicklung und Zertifizierung:\n• Entwicklung von Continuous Learning Programmen zur Anpassung an neue Technologien und Marktanforderungen.\n• Implementierung von Zertifizierungsprogrammen für verschiedene Automatisierungskompetenzen und Spezialisierungen.\n• Aufbau von Performance Assessment Systemen zur Messung des Kompetenzaufbaus und Identifikation von Entwicklungsbedarfen.\n• Etablierung von Career Development Pathways für Automatisierungsexperten innerhalb der Organisation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Skalierungsstrategien verfolgt ADVISORI für wachsende Intelligent Automation Partnerschaften?',
        answer: "Erfolgreiche Skalierung von Intelligent Automation Partnerschaften erfordert strategische Planung, flexible Architekturen und proaktives Capacity Management. ADVISORI entwickelt mehrdimensionale Skalierungsstrategien, die sowohl technische als auch organisatorische Aspekte berücksichtigen und nachhaltiges Wachstum ohne Qualitätsverlust ermöglichen.\n\n📈 Strategische Skalierungsplanung:\n• Entwicklung von Multi-Horizon-Skalierungsroadmaps, die kurzfristige Kapazitätserweiterungen mit langfristigen strategischen Zielen verbinden.\n• Implementierung von Capacity Planning Modellen zur Vorhersage zukünftiger Ressourcenanforderungen basierend auf Geschäftswachstum und Automatisierungszielen.\n• Aufbau von Szenario-Planning-Fähigkeiten für verschiedene Wachstumspfade und Marktentwicklungen.\n• Etablierung von Investment Planning Prozessen für rechtzeitige Ressourcenallokation und Infrastrukturerweiterungen.\n\n🏗️ Technische Skalierungsarchitekturen:\n• Implementierung von Cloud-native und Microservices-Architekturen für elastische Skalierbarkeit und Ressourcenoptimierung.\n• Aufbau von API-first-Designs für nahtlose Integration neuer Automatisierungskomponenten und Services.\n• Entwicklung von Container-basierten Deployment-Strategien für schnelle und konsistente Skalierung.\n• Implementierung von Auto-Scaling-Mechanismen für dynamische Anpassung an schwankende Workloads.\n\n🌐 Organisatorische Skalierungsmodelle:\n• Entwicklung von Hub-and-Spoke-Modellen für effiziente Verteilung von Automatisierungsservices über verschiedene Geschäftsbereiche.\n• Implementierung von Shared Service Centers für gemeinsame Nutzung von Automatisierungsressourcen und Expertise.\n• Aufbau von Franchise-ähnlichen Modellen für dezentrale Automatisierungsinitiativen mit zentraler Governance.\n• Etablierung von Partner-Ecosystem-Strategien für Erweiterung der Skalierungskapazitäten durch strategische Allianzen."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
