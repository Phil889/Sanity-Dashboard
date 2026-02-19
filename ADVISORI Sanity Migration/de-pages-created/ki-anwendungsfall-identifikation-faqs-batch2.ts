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
    console.log('Updating KI-Anwendungsfall-Identifikation page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-anwendungsfall-identifikation' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-anwendungsfall-identifikation" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Rolle spielt die Datenqualität bei der Identifikation von KI-Anwendungsfällen und wie bewertet ADVISORI die Datenbereitschaft eines Unternehmens?',
        answer: "Die Datenqualität ist ein kritischer Erfolgsfaktor für KI-Anwendungsfälle, da selbst die fortschrittlichsten Algorithmen nur so gut sind wie die Daten, mit denen sie trainiert werden. ADVISORI führt umfassende Datenbereitschaftsanalysen durch, um realistische Use Cases zu identifizieren und Unternehmen bei der Optimierung ihrer Datenlandschaft zu unterstützen.\n\n📊 Dimensionen der Datenqualitätsbewertung:\n• Vollständigkeit und Verfügbarkeit: Analyse der Datenvollständigkeit, Identifikation von Datenlücken und Bewertung der kontinuierlichen Datenverfügbarkeit für KI-Training und -Betrieb.\n• Genauigkeit und Konsistenz: Bewertung der Datengenauigkeit, Identifikation von Inkonsistenzen und Entwicklung von Datenbereinigungsstrategien.\n• Aktualität und Relevanz: Prüfung der Datenaktualität und Relevanz für identifizierte Use Cases sowie Bewertung der Datenaktualisierungszyklen.\n• Strukturierung und Zugänglichkeit: Analyse der Datenstrukturierung, Bewertung der Datenintegrationsmöglichkeiten und Identifikation von Datensilos.\n\n🔍 ADVISORIs Datenbereitschafts-Assessment:\n• Datenlandschafts-Mapping: Umfassende Kartierung der vorhandenen Datenquellen, Datenflüsse und Datenqualitätsmetriken im Unternehmen.\n• Use Case-spezifische Datenanforderungen: Detaillierte Analyse der Datenanforderungen für jeden identifizierten KI-Anwendungsfall und Abgleich mit vorhandenen Datenbeständen.\n• Datenoptimierungs-Roadmap: Entwicklung strategischer Empfehlungen zur Verbesserung der Datenqualität und -verfügbarkeit für priorisierte Use Cases.\n• Compliance-Integration: Sicherstellung, dass alle Datenoptimierungsmaßnahmen DSGVO-konform sind und Datenschutzanforderungen erfüllen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie identifiziert ADVISORI branchenspezifische KI-Anwendungsfälle und welche besonderen Herausforderungen entstehen in regulierten Industrien?',
        answer: "Branchenspezifische KI-Anwendungsfälle erfordern tiefes Verständnis für sektorale Besonderheiten, regulatorische Anforderungen und spezifische Geschäftsprozesse. ADVISORI kombiniert Branchenexpertise mit KI-Kompetenz, um Use Cases zu identifizieren, die sowohl technisch machbar als auch regulatorisch compliant sind.\n\n🏭 Branchenspezifische Use Case Identifikation:\n• Finanzdienstleistungen: Identifikation von KI-Anwendungsfällen in Bereichen wie Risikomanagement, Fraud Detection, Algorithmic Trading und Customer Analytics unter Berücksichtigung von MiFID II, Basel III und anderen Finanzregulierungen.\n• Gesundheitswesen: Entwicklung von KI-Use Cases für Diagnostik, Behandlungsoptimierung und Patientenmanagement unter strikter Einhaltung von Datenschutz und Medizinprodukterecht.\n• Automobilindustrie: Identifikation von Anwendungsfällen in Bereichen wie autonomes Fahren, Predictive Maintenance und Supply Chain Optimization unter Berücksichtigung von Sicherheitsstandards.\n• Energie und Utilities: Use Cases für Smart Grid Management, Predictive Maintenance und Energieoptimierung unter Beachtung kritischer Infrastruktur-Anforderungen.\n\n⚖️ Regulatorische Herausforderungen in regulierten Industrien:\n• Compliance-Integration: Sicherstellung, dass alle identifizierten Use Cases bestehende Branchenregulierungen erfüllen und zukünftige regulatorische Entwicklungen antizipieren.\n• Audit-Fähigkeit: Entwicklung von Use Cases mit eingebauter Nachvollziehbarkeit und Dokumentation für regulatorische Audits und Compliance-Nachweise.\n• Risikomanagement: Spezielle Bewertung von regulatorischen Risiken und Entwicklung von Mitigation-Strategien für jeden Use Case.\n• Stakeholder-Management: Einbindung von Compliance-Teams, Regulierungsbehörden und anderen relevanten Stakeholdern in den Use Case Identifikationsprozess."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Methoden verwendet ADVISORI zur Bewertung der technischen Machbarkeit von KI-Anwendungsfällen und wie wird das Verhältnis zwischen Innovation und Risiko optimiert?',
        answer: "Die Bewertung der technischen Machbarkeit ist ein kritischer Schritt bei der Use Case Identifikation, der über den Erfolg oder Misserfolg von KI-Projekten entscheidet. ADVISORI verwendet einen systematischen Ansatz, der technische Möglichkeiten mit Geschäftsanforderungen und Risikotoleranz in Einklang bringt.\n\n🔧 Technische Machbarkeitsbewertung:\n• Algorithmus-Eignung: Bewertung der Verfügbarkeit und Eignung verschiedener KI-Algorithmen für spezifische Use Cases, einschließlich Machine Learning, Deep Learning und spezialisierter AI-Techniken.\n• Infrastruktur-Anforderungen: Analyse der erforderlichen Computing-Ressourcen, Speicherkapazitäten und Netzwerk-Infrastruktur für jeden Use Case.\n• Datenarchitektur-Kompatibilität: Bewertung der Kompatibilität vorhandener Datenarchitekturen mit KI-Anforderungen und Identifikation notwendiger Anpassungen.\n• Skalierbarkeits-Assessment: Analyse der Skalierungsmöglichkeiten von Proof-of-Concept zu produktiven Systemen und Bewertung der Performance-Anforderungen.\n\n⚖️ Innovation-Risiko-Optimierung:\n• Risiko-adjustierte Bewertung: Entwicklung von Bewertungsmodellen, die technische Machbarkeit mit Implementierungsrisiken und Geschäftswert balancieren.\n• Prototyping-Strategien: Empfehlung von Proof-of-Concept-Ansätzen zur Risikominimierung und Validierung technischer Annahmen vor Vollimplementierung.\n• Technologie-Roadmap: Entwicklung von Technologie-Roadmaps, die schrittweise Komplexitätssteigerung und kontinuierliches Lernen ermöglichen.\n• Fallback-Strategien: Definition von Alternativansätzen und Exit-Strategien für den Fall technischer Herausforderungen oder unerwarteter Komplexitäten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie stellt ADVISORI sicher, dass identifizierte KI-Anwendungsfälle mit der langfristigen Unternehmensstrategie und digitalen Transformation harmonieren?',
        answer: "Die Alignment von KI-Anwendungsfällen mit der langfristigen Unternehmensstrategie ist entscheidend für nachhaltigen Erfolg und maximale Wertschöpfung. ADVISORI entwickelt Use Cases nicht isoliert, sondern als integralen Bestandteil der digitalen Transformation und strategischen Unternehmensentwicklung.\n\n🎯 Strategische Alignment-Methodik:\n• Vision-Integration: Sicherstellung, dass alle identifizierten Use Cases zur Unternehmensvision und langfristigen strategischen Zielen beitragen und diese unterstützen.\n• Digitale Transformation-Synergien: Identifikation von Synergien zwischen KI-Initiativen und anderen digitalen Transformationsprojekten für maximale Wertschöpfung.\n• Wettbewerbspositionierung: Bewertung, wie KI-Use Cases zur Stärkung der Marktposition und Differenzierung von Wettbewerbern beitragen können.\n• Zukunftsfähigkeit: Analyse der langfristigen Relevanz und Anpassungsfähigkeit identifizierter Use Cases an sich ändernde Marktbedingungen.\n\n🔄 Kontinuierliche Strategische Bewertung:\n• Strategische Roadmap-Integration: Einbettung von KI-Use Cases in die übergeordnete Unternehmens-Roadmap mit klaren Meilensteinen und Abhängigkeiten.\n• Portfolio-Management: Entwicklung eines ausgewogenen KI-Use Case Portfolios, das Quick Wins mit langfristigen strategischen Initiativen kombiniert.\n• Stakeholder-Alignment: Sicherstellung der Unterstützung durch alle relevanten Stakeholder und Integration in Change Management-Prozesse.\n• Adaptive Planung: Etablierung von Mechanismen zur regelmäßigen Überprüfung und Anpassung der Use Case Roadmap basierend auf strategischen Entwicklungen und Lernerfahrungen."
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
