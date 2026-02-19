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
    console.log('Updating CRR/CRD Readiness page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Finanzinstitute ihre Mitarbeiter effektiv für die Umsetzung der CRR/CRD-Anforderungen qualifizieren und eine nachhaltige Compliance-Kultur etablieren?",
        answer: "Die erfolgreiche Implementierung der CRR/CRD-Anforderungen hängt entscheidend von den Menschen ab, die sie umsetzen. Selbst die ausgereiftesten Prozesse und Systeme können nur wirksam sein, wenn die Mitarbeiter über das notwendige Wissen, die Fähigkeiten und die richtige Einstellung verfügen. ADVISORI verfolgt einen ganzheitlichen Ansatz zur Qualifizierung und Kulturentwicklung, der über traditionelle Schulungsmaßnahmen hinausgeht und eine nachhaltige Compliance-Kultur im gesamten Institut verankert.\n\n🔄 Integrierter Qualifizierungsansatz:\n• Kompetenzbasiertes Training: Entwicklung eines strukturierten Trainingsansatzes, der auf einem detaillierten CRR/CRD-Kompetenzmodell basiert und zielgruppenspezifische Lernpfade für verschiedene Funktionen (Management, Risikomanagement, IT, Fachbereiche) definiert.\n• Blended Learning: Kombination verschiedener Lernformate (Präsenzschulungen, E-Learning, Microlearning, Coaching) für eine effektive und nachhaltige Wissensvermittlung, die unterschiedliche Lernstile berücksichtigt und flexibel in den Arbeitsalltag integriert werden kann.\n• Praxisorientierte Fallstudien: Entwicklung realitätsnaher Fallstudien und Simulationen, die konkrete Anwendungsfälle der CRR/CRD-Anforderungen abbilden und den Transfer theoretischen Wissens in die praktische Anwendung fördern.\n• Wissensmanagement: Etablierung eines systematischen Ansatzes zur Dokumentation, Teilung und kontinuierlichen Aktualisierung von regulatorischem Wissen, einschließlich Communities of Practice und Expert-Networks.\n\n🛠️ Etablierung einer nachhaltigen Compliance-Kultur:\n• Tone from the Top: Aktive Vorbildfunktion der Führungsebene durch klare Kommunikation der Bedeutung regulatorischer Compliance und Integration in strategische Entscheidungen und Geschäftspraktiken.\n• Anreizsysteme und Performance Management: Verankerung von Compliance-Aspekten in Leistungsbeurteilungen und Vergütungssystemen, um die Bedeutung regulatorischer Verantwortung zu unterstreichen und positives Verhalten zu fördern.\n• Kommunikationskampagnen: Entwicklung zielgerichteter Kommunikationsmaßnahmen, die die Relevanz der CRR/CRD-Anforderungen für verschiedene Stakeholder vermitteln und ein gemeinsames Verständnis schaffen.\n• Kontinuierliches Feedback und Lernen: Etablierung einer offenen Feedback-Kultur und systematischer Lernprozesse, die aus Fehlern und Near-Misses Verbesserungspotenziale identifizieren und umsetzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Was sind die besonderen Herausforderungen bei der Implementierung von CRR/CRD-Anforderungen in internationalen Bankengruppen und wie können diese bewältigt werden?",
        answer: "Internationale Bankengruppen sehen sich bei der Umsetzung der CRR/CRD-Anforderungen mit spezifischen Komplexitäten konfrontiert, die aus unterschiedlichen regulatorischen Regimen, lokalen Interpretationen und grenzüberschreitenden Geschäftsmodellen resultieren. Eine effektive Implementierungsstrategie muss globale Konsistenz mit lokaler Compliance in Einklang bringen und gleichzeitig operative Effizienz gewährleisten. ADVISORI unterstützt internationale Finanzgruppen mit einem spezialisierten Ansatz, der diese Herausforderungen gezielt adressiert.\n\n🌐 Kernherausforderungen internationaler Implementierung:\n• Regulatorische Fragmentierung: Unterschiedliche Umsetzung und Interpretation der Basel-Standards in verschiedenen Jurisdiktionen, mit teilweise divergierenden Anforderungen und Zeitplänen, die eine harmonisierte Gruppenlösung erschweren.\n• Governance-Komplexität: Balancierung zentraler Steuerung und lokaler Verantwortung in einer Matrixorganisation, mit klaren Eskalationswegen und Entscheidungsprozessen für regulatorische Fragestellungen.\n• Daten- und Systemkonsistenz: Sicherstellung konsistenter Datenstandards und Methodologien über verschiedene Rechtseinheiten und Regionen hinweg, bei gleichzeitiger Berücksichtigung lokaler Besonderheiten und Legacy-Systeme.\n• Kulturelle und Sprachbarrieren: Überwindung kultureller Unterschiede und Sprachbarrieren bei der Implementierung komplexer regulatorischer Konzepte und der Förderung einer einheitlichen Compliance-Kultur.\n\n🔍 Strategische Lösungsansätze:\n• Regulatorische Taxonomie und Mapping: Entwicklung einer umfassenden Taxonomie globaler und lokaler Anforderungen mit detailliertem Mapping der Unterschiede und Gemeinsamkeiten als Basis für eine effiziente Implementierung.\n• Hub-and-Spoke Governance: Etablierung eines zentralen Kompetenzzentrums für CRR/CRD, das globale Standards definiert und lokale Implementierungsteams koordiniert, während es ausreichend Flexibilität für lokale Anpassungen bietet.\n• Modulare Compliance-Architektur: Implementierung eines modularen Ansatzes mit einem konsistenten Kernrahmen, der durch lokale Module ergänzt wird, die spezifische regulatorische Anforderungen adressieren.\n• Wissens- und Best-Practice-Sharing: Schaffung formalisierter Mechanismen für den Austausch von Wissen, Erfahrungen und bewährten Praktiken zwischen verschiedenen Rechtseinheiten und Regionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie unterstützt ADVISORI Finanzinstitute bei der Implementierung der erweiterten Offenlegungsanforderungen (Pillar 3) im Rahmen von CRR/CRD?",
        answer: "Die erweiterten Offenlegungsanforderungen (Pillar 3) stellen eine besondere Herausforderung im CRR/CRD-Rahmenwerk dar. Sie erfordern nicht nur die transparente Kommunikation komplexer Risiko- und Kapitalinformationen, sondern bieten auch strategische Chancen zur Stärkung des Marktvertrauens und zur Differenzierung. ADVISORI unterstützt Finanzinstitute mit einem integrierten Ansatz, der Compliance-Anforderungen mit kommunikationsstrategischen Aspekten verbindet.\n\n📊 Kernherausforderungen der Pillar 3-Implementierung:\n• Datenintegration und -qualität: Zusammenführung quantitativer und qualitativer Informationen aus verschiedenen Quellsystemen mit konsistenten Definitionen und hoher Datenqualität für die umfangreichen Offenlegungstabellen.\n• Konsistenz mit anderen Berichtsformaten: Sicherstellung der Konsistenz zwischen Pillar 3-Offenlegungen, regulatorischem Reporting, Finanzberichterstattung und anderen externen Kommunikationskanälen trotz unterschiedlicher Anforderungen und Zeitpläne.\n• Narrative und Kontextualisierung: Entwicklung aussagekräftiger, präziser Erläuterungen zu komplexen Risiko- und Kapitalkennzahlen, die sowohl regulatorischen Anforderungen entsprechen als auch für diverse Stakeholder verständlich sind.\n• Prozesseffizienz und Kontrollen: Etablierung eines effizienten, kontrollierten Prozesses, der die termingerechte und fehlerfreie Veröffentlichung umfangreicher Offenlegungsdokumente gewährleistet.\n\n🛠️ ADVISORIs integrierter Implementierungsansatz:\n• Pillar 3-Readiness-Assessment: Durchführung einer umfassenden Analyse der aktuellen Offenlegungspraxis im Vergleich zu den erweiterten Anforderungen, mit detaillierter Gap-Analyse und priorisiertem Maßnahmenplan.\n• Daten- und Prozessarchitektur: Konzeption und Implementierung einer integrierten Architektur für Offenlegungsdaten, die direkte Verbindungen zu Quellsystemen etabliert und manuelle Interventionen minimiert.\n• Erläuterungsstrategie und Templating: Entwicklung einer kohärenten Strategie für die narrativen Elemente der Offenlegung mit standardisierten Templates und Formulierungen, die konsistente, präzise Erläuterungen sicherstellen.\n• Offenlegungsgovernance und -kontrollen: Etablierung eines robusten Governance-Frameworks mit klaren Verantwortlichkeiten, definierten Review- und Genehmigungsprozessen sowie umfassenden Kontrollen zur Sicherstellung der Datenintegrität und -konsistenz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welchen Mehrwert bietet eine externe CRR/CRD-Readiness-Bewertung durch ADVISORI im Vergleich zu einem rein internen Assessment?",
        answer: "Eine externe CRR/CRD-Readiness-Bewertung durch ADVISORI bietet Finanzinstituten signifikante Vorteile gegenüber einem ausschließlich internen Assessment. Unsere spezialisierte Expertise, unabhängige Perspektive und bewährte Methodik ermöglichen eine objektive, umfassende Evaluation, die blinde Flecken identifiziert und strategische Impulse setzt. Diese externe Perspektive ergänzt die wertvollen internen Kenntnisse optimal und schafft einen ganzheitlichen Bewertungsansatz.\n\n🔍 Kernvorteile einer externen CRR/CRD-Readiness-Bewertung:\n• Unabhängige, objektive Perspektive: Eine externe Bewertung bietet einen unvoreingenommenen Blick auf die Compliance-Situation, frei von internen Betriebsblindheiten, historischen Kompromissen oder organisatorischen Einschränkungen, der auch kritische Bereiche transparent adressiert.\n• Marktübergreifende Benchmarking-Expertise: ADVISORI bringt fundierte Einblicke in Best Practices und Implementierungsstandards verschiedener Finanzinstitute ein, die eine realistische Positionierung im Wettbewerbsumfeld ermöglichen und Optimierungspotenziale aufzeigen.\n• Regulatorische Erwartungsperspektive: Unsere Experten mit aufsichtlichem Hintergrund und enger Verbindung zu regulatorischen Entwicklungen können die Bewertung aus der Perspektive der Aufsicht durchführen und so potenzielle Kritikpunkte frühzeitig identifizieren.\n• Methodische Tiefe und Spezialisierung: ADVISORI nutzt eine hochspezialisierte Assessment-Methodik mit detaillierten Bewertungskriterien und quantifizierbaren Metriken, die auf umfangreicher Erfahrung mit CRR/CRD-Implementierungen basiert.\n\n📋 Komplementärer Mehrwert zum internen Know-how:\n• Katalytische Wirkung: Eine externe Bewertung wirkt oft als Katalysator für interne Veränderungsprozesse, schafft Momentum und Akzeptanz für notwendige Anpassungen und überwindet interne Widerstände durch objektive Faktenbasis.\n• Ressourcenoptimierung: Die Kombination interner und externer Expertise ermöglicht eine effiziente Nutzung von Ressourcen, bei der ADVISORI die spezialisierte Methodenkompetenz einbringt, während interne Teams ihr wertvolles Institutions- und Prozesswissen beisteuern.\n• Wissenstransfer und Capability Building: Durch die enge Zusammenarbeit während des Assessments findet ein substanzieller Wissenstransfer statt, der die regulatorische Kompetenz der internen Teams nachhaltig stärkt.\n• Strategische Priorisierung: Die externe Perspektive unterstützt bei der strategischen Gewichtung identifizierter Handlungsfelder basierend auf aufsichtlicher Relevanz, Implementierungskomplexität und geschäftlichen Auswirkungen."
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
    console.log('✅ FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
