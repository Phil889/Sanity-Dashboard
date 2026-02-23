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
    console.log('Updating Datenschutzkoordinator Schulung Grundlagen DSGVO/BDSG page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutzkoordinator-schulung-grundlagen-dsgvo-bdsg' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutzkoordinator-schulung-grundlagen-dsgvo-bdsg" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine strukturierte DSGVO/BDSG-Grundlagenschulung für Datenschutzkoordinatoren mehr als nur Compliance und wie positioniert ADVISORI dies strategisch?",
        answer: "Die Rolle des Datenschutzkoordinators hat sich von einer rein administrativen Compliance-Funktion zu einer strategischen Position entwickelt, die maßgeblich zum Unternehmenserfolg beiträgt. Eine fundierte DSGVO/BDSG-Grundausbildung bildet das Fundament für diese strategische Transformation und schafft erheblichen Mehrwert für das gesamte Unternehmen.\n\n🎯 Strategische Dimensionen der Datenschutzkoordination:\n• Vertrauensbildung als Wettbewerbsvorteil: Professioneller Datenschutz stärkt das Kundenvertrauen und wird zunehmend zum Differenzierungsmerkmal in digitalen Geschäftsmodellen.\n• Risikominimierung und Schadensprävention: Systematische Datenschutz-Compliance vermeidet nicht nur Bußgelder, sondern auch Reputationsschäden und Geschäftsunterbrechungen.\n• Innovationsermöglichung: Fundiertes Datenschutzwissen ermöglicht datengetriebene Innovationen unter Einhaltung rechtlicher Rahmenbedingungen.\n• Operative Effizienz: Strukturierte Datenschutzprozesse reduzieren administrativen Aufwand und schaffen Klarheit für alle Geschäftsbereiche.\n\n🛡️ ADVISORIs ganzheitlicher Schulungsansatz:\n• Praxisintegration: Wir verbinden juristische Theorie mit konkreten Anwendungsfällen aus der Geschäftspraxis, damit Datenschutzkoordinatoren als kompetente Berater agieren können.\n• Strategische Positionierung: Unsere Schulung vermittelt nicht nur Regelkenntnisse, sondern auch die Fähigkeit, Datenschutz als Business Enabler zu kommunizieren und zu implementieren.\n• Technologieverständnis: Integration aktueller technologischer Entwicklungen und deren datenschutzrechtlicher Implikationen für zukunftssichere Compliance.\n• Change Management: Vermittlung von Kompetenzen zur erfolgreichen Einführung und Verankerung von Datenschutzkultur im Unternehmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Herausforderungen entstehen durch das Zusammenspiel von DSGVO und BDSG und wie bereitet ADVISORI Datenschutzkoordinatoren optimal darauf vor?",
        answer: "Das Zusammenspiel zwischen der europäischen DSGVO und dem nationalen BDSG schafft einen komplexen rechtlichen Rahmen, der von Datenschutzkoordinatoren ein tiefgreifendes Verständnis beider Regelwerke und ihrer Interaktion erfordert. Diese Komplexität birgt sowohl Risiken als auch Chancen für eine differenzierte Datenschutzstrategie.\n\n⚖️ Komplexitäten des DSGVO-BDSG-Zusammenspiels:\n• Öffnungsklauseln: Das BDSG nutzt die von der DSGVO bereitgestellten Öffnungsklauseln, um spezifische nationale Regelungen zu schaffen, die parallel angewendet werden müssen.\n• Verschiedene Rechtsgrundlagen: Koordinatoren müssen entscheiden, wann EU-Recht direkt anwendbar ist und wann nationale Sonderregelungen greifen.\n• Sektorspezifische Besonderheiten: Verschiedene Branchen unterliegen unterschiedlichen nationalen Sonderregelungen, die zusätzlich zur DSGVO beachtet werden müssen.\n• Aufsichtsbehörden-Zuständigkeiten: Die Aufgabenteilung zwischen Bundes- und Landesbehörden erfordert präzise Kenntnisse der jeweiligen Zuständigkeiten.\n\n🔧 ADVISORIs strukturierter Lösungsansatz:\n• Systematische Rechtsquellenanalyse: Wir vermitteln Methoden zur strukturierten Analyse komplexer Rechtsfragen unter Berücksichtigung aller relevanten Normen.\n• Praxisorientierte Fallstudien: Realitätsnahe Szenarien trainieren die Anwendung beider Regelwerke in typischen Geschäftssituationen.\n• Entscheidungsbäume und Checklisten: Entwicklung praktischer Arbeitshilfen für die tägliche Anwendung komplexer Rechtsnormen.\n• Kontinuierliche Rechtsprechungsanalyse: Integration aktueller Gerichtsentscheidungen und Behördeninterpretationen in die praktische Anwendung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann eine Grundlagenschulung Datenschutzkoordinatoren dabei unterstützen, von reaktiver Compliance zu proaktiver Datenschutzgestaltung überzugehen?",
        answer: "Der Wandel von reaktiver Compliance zu proaktiver Datenschutzgestaltung ist essentiell für moderne Datenschutzkoordinatoren. Diese Transformation erfordert nicht nur rechtliches Wissen, sondern auch strategisches Denken und die Fähigkeit, Datenschutz als integralen Bestandteil der Geschäftsstrategie zu positionieren.\n\n🔄 Von Reaktion zu Proaktion - Der Paradigmenwechsel:\n• Privacy by Design Integration: Einbettung von Datenschutzprinzipien bereits in der Planungsphase neuer Projekte und Geschäftsprozesse.\n• Risikoantizipation: Entwicklung der Fähigkeit, potenzielle Datenschutzrisiken frühzeitig zu identifizieren und präventive Maßnahmen zu implementieren.\n• Stakeholder-Beratung: Transformation der Rolle von einer kontrollierenden zu einer beratenden Funktion, die Geschäftsbereiche bei datenschutzkonformer Innovation unterstützt.\n• Kontinuierliche Verbesserung: Etablierung systematischer Verbesserungsprozesse statt punktueller Korrekturen.\n\n🚀 ADVISORIs Befähigungsansatz für proaktive Datenschutzgestaltung:\n• Strategisches Denken entwickeln: Vermittlung von Methoden zur Integration von Datenschutzüberlegungen in Geschäftsentscheidungen und Innovationsprozesse.\n• Kommunikationskompetenz aufbauen: Training effektiver Kommunikationstechniken zur Übersetzung komplexer rechtlicher Anforderungen in verständliche Geschäftssprache.\n• Prozessdesign-Kompetenzen: Schulung in der Entwicklung datenschutzkonformer Geschäftsprozesse, die Compliance und Effizienz optimal verbinden.\n• Monitoring und Messung: Implementierung von KPI-Systemen zur kontinuierlichen Überwachung und Verbesserung der Datenschutzperformance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche kritischen Erfolgsfaktoren sollten Datenschutzkoordinatoren bei der praktischen Umsetzung von DSGVO/BDSG-Anforderungen beachten?",
        answer: "Die erfolgreiche Umsetzung von DSGVO/BDSG-Anforderungen hängt von einer Vielzahl kritischer Erfolgsfaktoren ab, die über reine Rechtskenntnis hinausgehen. Datenschutzkoordinatoren müssen eine ausgewogene Balance zwischen juristischer Präzision, organisatorischer Effizienz und strategischer Weitsicht entwickeln.\n\n🎯 Kritische Erfolgsfaktoren für nachhaltige Datenschutz-Compliance:\n• Organisatorische Verankerung: Schaffen von klaren Verantwortlichkeiten und Berichtswegen, die Datenschutz als Führungsaufgabe etablieren.\n• Kulturelle Integration: Entwicklung einer Datenschutzkultur, die über formale Compliance hinausgeht und Datenschutz als Wert verankert.\n• Technische Unterstützung: Implementierung geeigneter Tools und Systeme zur Automatisierung und Überwachung datenschutzrelevanter Prozesse.\n• Kontinuierliche Weiterbildung: Etablierung systematischer Schulungs- und Awareness-Programme für alle Mitarbeiterebenen.\n\n⚡ ADVISORIs praxisorientierter Umsetzungsansatz:\n• Maturity Assessment: Systematische Bewertung der organisatorischen Datenschutzreife und Ableitung gezielter Entwicklungsmaßnahmen.\n• Governance-Framework: Entwicklung maßgeschneiderter Governance-Strukturen, die rechtliche Anforderungen mit organisatorischen Realitäten verbinden.\n• Quick Wins identifizieren: Priorisierung von Maßnahmen nach Umsetzbarkeit und Wirkung für schnelle erste Erfolge und Akzeptanzaufbau.\n• Nachhaltigkeitskonzept: Entwicklung langfristiger Strategien zur kontinuierlichen Anpassung an sich ändernde rechtliche und technologische Rahmenbedingungen."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
