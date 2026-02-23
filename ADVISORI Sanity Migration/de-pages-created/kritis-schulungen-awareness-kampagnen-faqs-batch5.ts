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
    console.log('Updating KRITIS Schulungen & Awareness-Kampagnen page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-schulungen-awareness-kampagnen' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-schulungen-awareness-kampagnen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie können KRITIS-Schulungsprogramme zur Entwicklung einer organisationsweiten Security-First-Mentalität und proaktiven Risikokultur beitragen?",
        answer: "Die Entwicklung einer organisationsweiten Security-First-Mentalität erfordert mehr als reine Wissensvermittlung – sie verlangt eine fundamentale kulturelle Transformation, die Sicherheit als integrale Komponente aller Geschäftsprozesse verankert. ADVISORI entwickelt umfassende Kulturwandel-Programme, die Sicherheitsbewusstsein vom reaktiven Compliance-Thema zu einem proaktiven Wertschöpfungstreiber transformieren.\n\n🧠 Kulturelle Transformation und Mindset-Entwicklung:\n• Security-as-Value-Driver Positioning: Vermittlung des Verständnisses, dass Sicherheit nicht Kosten verursacht, sondern Geschäftswert schafft und Wettbewerbsvorteile ermöglicht.\n• Proactive Risk Ownership: Entwicklung einer Kultur, in der jeder Mitarbeiter Verantwortung für Risikomanagement übernimmt und proaktiv Sicherheitsverbesserungen vorantreibt.\n• Innovation-Security Integration: Training in der nahtlosen Integration von Sicherheitsaspekten in Innovationsprozesse ohne Behinderung der Kreativität.\n• Psychological Safety für Security Reporting: Schaffung einer Vertrauenskultur, in der Mitarbeiter Sicherheitsvorfälle und -bedenken ohne Angst vor Sanktionen melden.\n\n🎯 Organizational Behavior Change und Habit Formation:\n• Behavioral Science-basierte Interventionen: Einsatz verhaltenswissenschaftlicher Erkenntnisse für nachhaltige Verhaltensänderungen und Gewohnheitsbildung.\n• Positive Reinforcement Systems: Entwicklung von Anreizsystemen, die sicherheitsbewusstes Verhalten belohnen und verstärken.\n• Social Learning und Peer Influence: Nutzung sozialer Lernmechanismen und Peer-Pressure für organisationsweite Verhaltensänderungen.\n• Continuous Feedback Loops: Implementierung kontinuierlicher Feedback-Mechanismen für stetige Verbesserung der Sicherheitskultur.\n\n🚀 Excellence Culture Development:\n• Security Champions Network: Aufbau eines Netzwerks von Security Champions auf allen Organisationsebenen als Multiplikatoren der Sicherheitskultur.\n• Cross-functional Security Integration: Integration von Sicherheitsaspekten in alle Geschäftsprozesse und Entscheidungskriterien.\n• Learning Organization Principles: Etablierung einer lernenden Organisation, die aus Sicherheitsvorfällen systematisch lernt und sich kontinuierlich verbessert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Rolle spielen Simulation und praktische Übungen bei der Effektivitätssteigerung von KRITIS-Schulungsprogrammen?",
        answer: "Simulation und praktische Übungen sind entscheidend für die Transformation theoretischen Wissens in praktische Handlungskompetenz. In kritischen Infrastrukturen kann theoretisches Wissen allein in Stresssituationen versagen – nur durch realistische Simulation und regelmäßige Übungen entwickeln Mitarbeiter die notwendigen Reflexe und Entscheidungsfähigkeiten für effektive Krisenreaktion. ADVISORI entwickelt hochrealistische Übungsszenarien, die echte Handlungskompetenz schaffen.\n\n🎮 Immersive Simulation Technologies und Realistic Scenarios:\n• High-Fidelity Cyber Range Exercises: Einsatz spezialisierter Cyber Ranges für realistische Simulation komplexer Angriffsszenarios ohne reale Risiken für kritische Systeme.\n• Crisis Simulation und Decision-Making unter Stress: Entwicklung hochrealistischer Krisensimulationen, die Entscheidungsfindung unter Zeitdruck und Stress trainieren.\n• Multi-stakeholder Tabletop Exercises: Komplexe Tabletop-Übungen mit verschiedenen internen und externen Stakeholdern für realistische Krisenkoordination.\n• Virtual Reality Incident Response: VR-basierte Incident Response-Simulationen für immersive, risikofreie Praxis kritischer Handlungsabläufe.\n\n⚡ Progressive Skill Building und Competency Development:\n• Graduated Complexity Training: Systematischer Aufbau von Kompetenzen durch progressiv komplexere Übungsszenarien vom Einzelfall zur organisationsweiten Krise.\n• Real-time Performance Analytics: Kontinuierliche Bewertung der Performance während Übungen mit sofortigem Feedback für optimales Lernen.\n• Muscle Memory Development: Wiederholte Übung kritischer Handlungsabläufe bis zur automatischen Reaktion in Stresssituationen.\n• Cross-functional Team Exercises: Interdisziplinäre Übungen zur Stärkung der Zusammenarbeit zwischen verschiedenen Bereichen während Sicherheitsvorfällen.\n\n📊 Assessment und Continuous Improvement:\n• Evidence-based Performance Measurement: Systematische Messung von Übungseffektivität und Lernfortschritten mit datengestützten Verbesserungsempfehlungen.\n• After Action Reviews und Lessons Learned: Strukturierte Nachbesprechungen aller Übungen mit dokumentierten Lessons Learned für kontinuierliche Programm-Verbesserung.\n• Scenario Evolution und Update: Regelmäßige Aktualisierung der Übungsszenarien basierend auf neuen Bedrohungen und gelernten Lektionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie kann ADVISORI die Nachhaltigkeit und langfristige Wirksamkeit von KRITIS-Schulungsinvestitionen sicherstellen?",
        answer: "Die Sicherstellung nachhaltiger Wirksamkeit von KRITIS-Schulungsinvestitionen erfordert systematische Ansätze zur Lerntransfer-Optimierung, kontinuierlichen Verstärkung und organisatorischen Verankerung. Viele Schulungsprogramme scheitern nicht an der Qualität der Inhalte, sondern an unzureichender Integration in den Arbeitsalltag und fehlender langfristiger Verstärkung. ADVISORI entwickelt Sustainability-Frameworks, die dauerhaften Erfolg gewährleisten.\n\n🔄 Sustainability Framework und Long-term Impact:\n• Learning Transfer Optimization: Systematische Gestaltung der Schulungsprogramme für maximalen Transfer vom Lernumfeld in die tägliche Arbeitspraxis mit strukturierten Follow-up-Aktivitäten.\n• Spaced Repetition und Reinforcement: Wissenschaftlich fundierte Wiederholungszyklen und Verstärkungsmaßnahmen für langfristige Wissensretention und Verhaltensänderung.\n• Integration in Performance Management: Verankerung von Sicherheitskompetenzen in Leistungsbeurteilungen, Karriereentwicklung und Incentive-Systemen.\n• Organizational Memory Systems: Aufbau systematischer Organisationsgedächtnisse, die Wissen und Erfahrungen über Personalwechsel hinweg bewahren.\n\n📈 Continuous Learning Ecosystem Development:\n• Self-sustaining Learning Communities: Entwicklung interner Lerngemeinschaften, die sich selbstständig weiterentwickeln und gegenseitig unterstützen.\n• Knowledge Management Integration: Verknüpfung der Schulungsinhalte mit organisatorischen Knowledge Management-Systemen für kontinuierliche Verfügbarkeit und Aktualisierung.\n• Mentoring und Peer Learning Networks: Aufbau nachhaltiger Mentoring-Strukturen und Peer-Learning-Netzwerke für kontinuierlichen Wissensaustausch.\n• Innovation Labs für Security Learning: Etablierung interner Innovation Labs, die kontinuierlich neue Lernformate und -methoden entwickeln und testen.\n\n🎯 ROI Maximization und Value Creation:\n• Multi-year Impact Tracking: Langfristige Verfolgung von Schulungseffekten über mehrere Jahre mit Korrelation zu Geschäftsergebnissen und Sicherheitsmetriken.\n• Continuous Value Assessment: Regelmäßige Bewertung und Optimierung des Wertbeitrags von Schulungsinvestitionen mit datengestützten Anpassungen.\n• Scalability und Replicability: Entwicklung skalierbarer, replizierabler Schulungsmodelle, die organisationsweite Verbreitung und kontinuierliche Effizienzsteigerung ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche zukunftsweisenden Trends und Entwicklungen sollten bei der strategischen Planung von KRITIS-Schulungsprogrammen berücksichtigt werden?",
        answer: "Die strategische Planung von KRITIS-Schulungsprogrammen muss zukunftsweisende Trends und Entwicklungen antizipieren, um langfristig relevant und effektiv zu bleiben. Die Cyber-Bedrohungslandschaft, Technologien und regulatorischen Anforderungen entwickeln sich exponentiell, und Schulungsprogramme müssen agil und vorausschauend konzipiert werden. ADVISORI integriert Trend-Analyse und Future-Readiness systematisch in alle Schulungsstrategien.\n\n🚀 Technology Evolution und Future Learning Modalities:\n• Artificial Intelligence Integration: Einsatz von AI für personalisierte Lernpfade, adaptive Inhalte und predictive Learning Analytics zur Optimierung von Schulungseffektivität.\n• Quantum Computing Implications: Vorausschauende Schulungen zu Quantum-Threats, Post-Quantum-Cryptography und den Auswirkungen von Quantum Computing auf KRITIS-Sicherheit.\n• Extended Reality (XR) Learning Environments: Integration von AR, VR und Mixed Reality für immersive, hochrealistische Trainingsumgebungen der nächsten Generation.\n• Blockchain-based Certification und Credentialing: Nutzung von Blockchain-Technologie für fälschungssichere Zertifizierung und Skill Verification.\n\n🌐 Regulatory Evolution und Compliance Future:\n• AI Act und Algorithmic Accountability: Vorbereitung auf neue regulatorische Anforderungen für AI-Systeme in kritischen Infrastrukturen.\n• Climate Security Integration: Berücksichtigung klimabedingter Sicherheitsrisiken und Resilienz-Anforderungen in Schulungsprogrammen.\n• Global Regulatory Harmonization: Antizipation zunehmender internationaler Koordination und Harmonisierung von KRITIS-Standards.\n• ESG Integration und Sustainable Security: Verknüpfung von Sicherheitsschulungen mit ESG-Zielen und nachhaltiger Entwicklung.\n\n🔮 Organizational Future und Workforce Evolution:\n• Remote und Hybrid Work Security: Entwicklung spezialisierter Schulungsmodule für dezentrale Arbeitsmodelle und deren spezifische Sicherheitsherausforderungen.\n• Generational Change Management: Anpassung der Schulungsansätze an verschiedene Generationen mit unterschiedlichen Lernpräferenzen und digitalen Kompetenzen.\n• Skills-based Organization Models: Vorbereitung auf organisatorische Modelle, die auf Kompetenzen statt auf traditionellen Hierarchien basieren.\n• Continuous Learning Culture Evolution: Entwicklung von Schulungsprogrammen, die lebenslange Lerngewohnheiten und Anpassungsfähigkeit fördern."
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
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
