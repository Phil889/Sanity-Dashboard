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
    console.log('Updating MaRisk Schulungen und Sensibilisierung page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-schulungen-sensibilisierung' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-schulungen-sensibilisierung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Rolle spielt eine kontinuierliche Schulungs- und Sensibilisierungsstrategie bei der Vorbereitung auf MaRisk-Prüfungen?",
        answer: "Eine kontinuierliche Schulungs- und Sensibilisierungsstrategie spielt eine fundamentale Rolle bei der erfolgreichen Vorbereitung auf MaRisk-Prüfungen und geht weit über punktuelle Maßnahmen im unmittelbaren Vorfeld einer Prüfung hinaus. Sie bildet das Fundament für eine nachhaltige Compliance-Kultur, die nicht nur formale Anforderungen erfüllt, sondern diese auch im täglichen Handeln aller Mitarbeiter verankert und dadurch die Prüfungsresilienz des Instituts substantiell stärkt.\n\n📋 Strategische Bedeutung für die Prüfungsvorbereitung:\n• Kontinuierliche Kompetenzentwicklung statt Last-Minute-Aktionismus: Systematischer und langfristiger Aufbau von Compliance-Kompetenzen, der ein tiefes Verständnis regulatorischer Anforderungen fördert, anstatt kurzfristiger \"Crash-Kurse\" vor Prüfungen, die oft nur oberflächliches Wissen vermitteln.\n• Praxisverankerung von Compliance-Anforderungen: Kontinuierliche Übersetzung abstrakter MaRisk-Vorgaben in konkrete Handlungsmuster und ihre Integration in alltägliche Prozesse, wodurch sie zu selbstverständlichen Verhaltensweisen werden, die auch in Prüfungssituationen authentisch dargestellt werden können.\n• Frühzeitige Identifikation von Wissenslücken: Regelmäßige Lernformate und Wissens-Checks ermöglichen die rechtzeitige Erkennung von Verständnis- und Umsetzungsdefiziten, die proaktiv adressiert werden können, bevor sie in Prüfungen zu Feststellungen führen.\n• Förderung einer selbstreflexiven Compliance-Kultur: Entwicklung einer organisationalen Lernkultur, die kontinuierliche Selbstreflexion und eigenverantwortliche Verbesserung fördert und dadurch die Abhängigkeit von externen Kontrollen reduziert.\n\n🛠️ Praktische Implementierungsansätze für prüfungsorientierte Schulungskonzepte:\n• Prüfungserfahrungsbasierte Lernmodule: Entwicklung spezifischer Schulungsformate, die reale Prüfungserfahrungen und typische Feststellungen aus vergangenen Prüfungen reflektieren und daraus konkrete Lernimpulse und Verbesserungsmaßnahmen ableiten.\n• Simulierte Prüfungsinterviews und Mock Audits: Durchführung praxisnaher Simulationen von Prüfungssituationen, die Mitarbeiter auf die spezifischen Anforderungen von Interviews und Dokumentenprüfungen vorbereiten und typische Herausforderungen adressieren.\n• Interaktive Feststellungsworkshops: Kollaborative Analyse realer oder hypothetischer Prüfungsfeststellungen mit dem Ziel, ein tieferes Verständnis für die zugrundeliegenden regulatorischen Erwartungen zu entwickeln und präventive Maßnahmen abzuleiten.\n• Kontinuierliche Sensibilisierung für aufsichtliche Schwerpunkte: Systematisches Monitoring aktueller aufsichtlicher Fokusthemen und zeitnahe Integration dieser Schwerpunkte in Schulungs- und Kommunikationsmaßnahmen, um proaktiv auf potenzielle Prüfungsschwerpunkte vorbereitet zu sein."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Schulungen zur kontinuierlichen und nachhaltigen Verbesserung des MaRisk-Compliance-Managementsystems beitragen?",
        answer: "Strategisch konzipierte Schulungsmaßnahmen fungieren als zentraler Katalysator für die kontinuierliche Verbesserung des MaRisk-Compliance-Managementsystems, indem sie nicht nur Wissen vermitteln, sondern auch systemische Lernprozesse initiieren, Feedback-Schleifen etablieren und eine institutionsweite Kultur der proaktiven Compliance-Entwicklung fördern. Ein zukunftsorientierter Schulungsansatz transformiert Qualifizierungsmaßnahmen von einem reinen Wissensvermittlungsinstrument zu einem integrierten Bestandteil des kontinuierlichen Verbesserungsprozesses.\n\n🔄 Schulungen als Treiber kontinuierlicher Verbesserungsprozesse:\n• Bidirektionale Lernschleifen: Implementierung von Schulungsformaten, die nicht nur Wissen vermitteln, sondern gleichzeitig systematisch Feedback, Verbesserungsvorschläge und Praxiserfahrungen aus der Organisation sammeln und in die Weiterentwicklung des Compliance-Systems einspeisen.\n• Evolutionäre Kompetenzentwicklung: Gestaltung aufeinander aufbauender Lernpfade, die kontinuierlich das Compliance-Verständnis vertiefen und an die sich weiterentwickelnden regulatorischen Anforderungen und organisatorischen Rahmenbedingungen anpassen.\n• Kollektive Intelligenz nutzen: Förderung kollaborativer Lernformate, die das verteilte Wissen und die vielfältigen Perspektiven in der Organisation mobilisieren, um systemische Schwachstellen zu identifizieren und innovative Lösungsansätze zu entwickeln.\n• Systemisches Lernen aus Praxiserfahrungen: Systematische Reflexion und Aufarbeitung realer Compliance-Herausforderungen und -Vorfälle in geschützten Lernumgebungen, um tieferliegende Ursachen zu verstehen und strukturelle Verbesserungen abzuleiten.\n\n📈 Praktische Implementierungsstrategien für verbesserungsorientierte Schulungskonzepte:\n• Integrierte Lessons-Learned-Workshops: Regelmäßige, moderierte Sessions, in denen Implementierungserfahrungen, Prüfungsfeststellungen oder Near Misses systematisch analysiert und in konkrete Verbesserungsmaßnahmen sowohl für das Compliance-System als auch für zukünftige Schulungsmaßnahmen übersetzt werden.\n• Kontinuierliche Feedback-Mechanismen: Integration niedrigschwelliger Feedback-Kanäle in alle Schulungsformate, die es Teilnehmern ermöglichen, Umsetzungshindernisse, Unklarheiten oder Verbesserungsideen unmittelbar und strukturiert zu kommunizieren.\n• Cross-funktionale Innovation Labs: Etablierung temporärer, bereichsübergreifender Teams, die spezifische Compliance-Herausforderungen analysieren und innovative Lösungsansätze entwickeln, die sowohl praktische Umsetzbarkeit als auch regulatorische Konformität gewährleisten.\n• Metriken-basierte Schulungsoptimierung: Implementierung eines systematischen Monitoring- und Evaluationssystems, das die Wirksamkeit von Schulungsmaßnahmen anhand definierter KPIs misst und datenbasierte Optimierungen ermöglicht, z.B. durch A/B-Testing verschiedener didaktischer Ansätze."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Rolle spielen fachspezifische Schulungen für unterschiedliche MaRisk-Themenbereiche wie Risikomanagement, Outsourcing oder Neue Produkte?",
        answer: "Fachspezifische Schulungen für unterschiedliche MaRisk-Themenbereiche spielen eine zentrale Rolle für die effektive Implementierung regulatorischer Anforderungen, da sie die abstrakte Regulatorik in kontextspezifische Handlungsanweisungen übersetzen und die besonderen Herausforderungen und Risikobereiche der jeweiligen Fachdomäne adressieren. Ein differenzierter Schulungsansatz, der die Spezifika unterschiedlicher MaRisk-Themenkomplexe berücksichtigt, ermöglicht eine wesentlich präzisere und praxisnähere Wissensvermittlung als generische Compliance-Schulungen.\n\n🔍 Strategische Bedeutung domänenspezifischer Schulungsansätze:\n• Kontextualisierung abstrakter Anforderungen: Präzise Übersetzung generischer MaRisk-Vorgaben in fachspezifische Implikationen und konkrete Handlungsanleitungen für den jeweiligen Themenbereich und die spezifischen Geschäftsprozesse des Instituts.\n• Risikosensitivität für fachspezifische Compliance-Risiken: Schärfung des Bewusstseins für die besonderen Risikopotenziale und typischen Fallstricke im jeweiligen Fachbereich, basierend auf aufsichtlichen Schwerpunkten und Prüfungserfahrungen.\n• Funktionsgerechte Verantwortungsklärung: Präzise Definition der spezifischen Verantwortlichkeiten und Erwartungen an verschiedene Funktionen und Rollen im jeweiligen MaRisk-Themenbereich, inklusive Schnittstellen und Zusammenarbeit mit anderen Bereichen.\n• Domänenspezifische Best Practices: Vermittlung bewährter Implementierungsansätze und Methodenkompetenzen, die speziell auf die Herausforderungen des jeweiligen Themenbereichs zugeschnitten sind und praktische Handlungssicherheit bieten.\n\n📋 Spezifische Fokusthemen für ausgewählte MaRisk-Bereiche:\n• Risikomanagement-Schulungen: Fokus auf methodische Kompetenzen zur Risikoidentifikation, -messung und -steuerung, Risikotragfähigkeitskonzepte und ICAAP/ILAAP-Anforderungen, angepasst an das spezifische Risikoprofil und Geschäftsmodell des Instituts.\n• Outsourcing-Management-Schulungen: Schwerpunkt auf dem gesamten Lebenszyklus ausgelagerter Aktivitäten, von der Risikoanalyse und Vertragsgestaltung bis zum kontinuierlichen Monitoring und Exit-Management, mit besonderem Fokus auf Governance-Aspekte und Kontrollmechanismen.\n• Neue Produkte-Prozess-Schulungen: Vermittlung methodischer Kompetenzen zur ganzheitlichen Risikobewertung neuer Produkte und wesentlicher Änderungen, mit Fokus auf interdisziplinäre Zusammenarbeit, Dokumentationsanforderungen und Post-Implementation-Reviews."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Inwiefern sollten regulatorische Änderungen und neue aufsichtliche Erwartungen in bestehende Schulungsprogramme integriert werden?",
        answer: "Die systematische Integration regulatorischer Änderungen und neuer aufsichtlicher Erwartungen in bestehende Schulungsprogramme ist ein kritischer Erfolgsfaktor für die Aufrechterhaltung einer effektiven MaRisk-Compliance. Sie erfordert einen proaktiven, strukturierten Ansatz, der über reaktive Ad-hoc-Informationen hinausgeht und sicherstellt, dass neue Anforderungen nicht nur formell kommuniziert, sondern auch inhaltlich durchdrungen und praktisch verankert werden.\n\n🔄 Strategische Ansätze für die Integration regulatorischer Updates:\n• Kontinuierliches Regulatory Monitoring und Impact Assessment: Systematische Verfolgung regulatorischer Entwicklungen mit strukturierter Analyse ihrer Auswirkungen auf bestehende Prozesse, Systeme und Schulungsinhalte, um Schulungsbedarf präzise zu identifizieren und zu priorisieren.\n• Mehrstufiges Update-Konzept: Differenzierte Kommunikations- und Schulungsstrategie, die zwischen kurzfristigen Awareness-Maßnahmen für unmittelbar relevante Änderungen und tiefergehenden Anpassungen der Kern-Schulungscurricula unterscheidet.\n• Integration in bestehende Lernpfade: Systematische Überarbeitung bestehender Schulungsmodule, um neue Anforderungen organisch zu integrieren, statt isolierter Update-Schulungen, die den Gesamtzusammenhang nicht ausreichend berücksichtigen.\n• Verschränkung mit Change-Management-Prozessen: Koordinierte Abstimmung zwischen Schulungsverantwortlichen und den für die praktische Implementierung zuständigen Fachbereichen, um Kohärenz zwischen Schulungsinhalten und tatsächlichen Umsetzungsmaßnahmen sicherzustellen.\n\n📋 Praktische Implementierungsstrategien für agilere Schulungsanpassungen:\n• Modulare Schulungsarchitektur: Gestaltung bestehender Schulungsprogramme in flexiblen, unabhängig aktualisierbaren Modulen, die schnelle Anpassungen an regulatorische Änderungen ermöglichen, ohne das gesamte Programm überarbeiten zu müssen.\n• Digitale Update-Mechanismen: Nutzung digitaler Lernplattformen für agile Aktualisierungen und automatisierte Benachrichtigungen an relevante Zielgruppen über neue oder geänderte Inhalte, gekoppelt mit obligatorischen Bestätigungsmechanismen.\n• Differenzierte Gap-Schulungen: Entwicklung zielgruppenspezifischer Schulungsformate, die gezielt die Delta-Anforderungen zwischen bestehenden und neuen regulatorischen Vorgaben adressieren und dabei an vorhandenes Wissen anknüpfen.\n• Experten-Onboarding für komplexe Änderungen: Frühzeitige tiefgehende Qualifizierung interner Experten und Multiplikatoren bei umfassenden regulatorischen Änderungen, die diese befähigt, als kompetente Ansprechpartner und Change Agents in ihren Bereichen zu fungieren."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
