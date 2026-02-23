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
    console.log('Updating MiFID Anpassung Vertriebssteuerung & Prozessabläufe page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-anpassung-vertriebssteuerung-prozessablaeufe' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-anpassung-vertriebssteuerung-prozessablaeufe" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir die MiFID-Anforderungen zur Telefonaufzeichnung und elektronischen Kommunikation effizient in unsere Vertriebsprozesse integrieren?",
        answer: "Die MiFID II-Anforderungen zur Aufzeichnung von Telefongesprächen und elektronischer Kommunikation stellen viele Finanzinstitute vor erhebliche operative und technische Herausforderungen. Eine strategische Herangehensweise kann jedoch nicht nur die Compliance sicherstellen, sondern auch zu einer verbesserten Kundenkommunikation und Prozessqualität beitragen.\n\n📞 Strategischer Ansatz zur Kommunikationsaufzeichnung:\n• Prozessintegrierte Aufzeichnungslösung: Implementieren Sie Aufzeichnungssysteme, die nahtlos in die bestehenden Kommunikationskanäle und CRM-Systeme integriert sind, um eine einheitliche Kundensicht zu gewährleisten und Medienbrüche zu vermeiden.\n• Kanalübergreifende Aufzeichnungsstrategie: Entwickeln Sie eine konsistente Strategie für alle Kommunikationskanäle (Telefon, E-Mail, Chat, Video, Social Media), die sowohl den spezifischen regulatorischen Anforderungen jedes Kanals als auch den Nutzergewohnheiten Ihrer Mitarbeiter und Kunden Rechnung trägt.\n• Selektiver Aufzeichnungsansatz: Etablieren Sie präzise Regelwerke zur Identifikation aufzeichnungspflichtiger Kommunikation, um unnötige Aufzeichnungen zu vermeiden und den Fokus auf tatsächlich relevante Gespräche zu legen, die im Zusammenhang mit Anlageberatung und Orderannahme stehen.\n• Datenschutzkonforme Implementierung: Gestalten Sie Ihre Aufzeichnungsprozesse so, dass sie nicht nur MiFID-konform, sondern auch vollständig mit der DSGVO vereinbar sind, insbesondere in Bezug auf Informationspflichten, Speicherfristen und Zugriffsrechte.\n\n💾 Technologische Lösungsansätze mit Mehrwert:\n• Cloud-basierte Aufzeichnungslösungen: Nutzen Sie moderne Cloud-Technologien für die sichere und skalierbare Speicherung und Verwaltung von Kommunikationsaufzeichnungen, die gleichzeitig flexible Zugriffsmöglichkeiten und robuste Sicherheitsmechanismen bieten.\n• KI-gestützte Analyse: Implementieren Sie fortschrittliche Analysewerkzeuge, die aufgezeichnete Kommunikation automatisch nach relevanten Inhalten, potenziellen Compliance-Risiken oder Qualitätsproblemen durchsuchen und kategorisieren können.\n• Integration in Wissensmanagement: Nutzen Sie die aufgezeichnete Kommunikation als Quelle für Wissensmanagement und Training, indem Sie Best-Practice-Beispiele für Kundeninteraktionen identifizieren und für Schulungszwecke aufbereiten.\n• Mobile Compliance-Lösungen: Berücksichtigen Sie die zunehmende Nutzung mobiler Geräte durch Mitarbeiter und implementieren Sie Lösungen, die auch die mobile Kommunikation MiFID-konform aufzeichnen können, ohne die Flexibilität und Benutzerfreundlichkeit einzuschränken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Prozessanpassungen empfiehlt ADVISORI für ein effizientes Management der jährlichen Geeignetheitsüberprüfung von Kundenportfolios?",
        answer: "Die jährliche Geeignetheitsüberprüfung von Kundenportfolios gemäß MiFID II stellt Finanzinstitute vor die Herausforderung, einen potenziell ressourcenintensiven Prozess effizient zu gestalten und gleichzeitig einen echten Mehrwert für Kunden zu schaffen. Mit einem strategischen Ansatz kann dieser regulatorische Prozess in einen wertschöpfenden Kundenkontaktpunkt transformiert werden.\n\n🔍 Strategische Prozessgestaltung für die jährliche Überprüfung:\n• Kundensegmentspezifische Überprüfungsintensität: Entwickeln Sie einen differenzierten Ansatz für verschiedene Kundensegmente, der die Tiefe und Intensität der Überprüfung an das Anlagevolumen, die Portfoliokomplexität und das Risikoprofil des Kunden anpasst, ohne regulatorische Mindeststandards zu unterschreiten.\n• Integration in bestehende Kundentermine: Verknüpfen Sie die jährliche Geeignetheitsüberprüfung mit anderen wertstiftenden Kundenterminen wie Jahresgesprächen oder Portfolioreviews, um den zusätzlichen Aufwand zu minimieren und den Prozess in einen natürlichen Gesprächsanlass zu transformieren.\n• Proaktives Lifecycle-Management: Implementieren Sie ein System, das wichtige Lebensereignisse oder signifikante Marktveränderungen identifiziert und diese als Trigger für eine vorzeitige oder intensivere Überprüfung nutzt, anstatt sich ausschließlich auf starre jährliche Zyklen zu verlassen.\n• Value-Add durch personalisierte Insights: Gestalten Sie den Überprüfungsprozess so, dass er dem Kunden wertvolle Erkenntnisse über sein Portfolio, seine Anlagestrategie und potenzielle Optimierungsmöglichkeiten liefert, die über die reine Compliance-Anforderung hinausgehen.\n\n⚙️ Operative Effizienzsteigerung durch Prozessoptimierung:\n• Vorausgefüllte digitale Fragebögen: Nutzen Sie die vorhandenen Kundendaten, um personalisierte, vorausgefüllte Fragebögen zu erstellen, die der Kunde nur auf Aktualität prüfen und bei Bedarf anpassen muss, anstatt jedes Jahr bei Null zu beginnen.\n• Automatisierte Portfolio-Analyse: Implementieren Sie algorithmusbasierte Analysetools, die automatisch Abweichungen zwischen aktuellem Portfolio und Kundenprofil identifizieren und priorisierte Handlungsempfehlungen für Berater generieren.\n• Digitale Selbstaktualisierungsmöglichkeiten: Bieten Sie Kunden benutzerfreundliche digitale Kanäle zur selbstständigen Aktualisierung ihrer Profilinformationen, mit intelligenten Validierungsregeln und automatischen Benachrichtigungen bei signifikanten Änderungen.\n• Zentrale Koordination mit dezentraler Durchführung: Etablieren Sie ein zentrales Steuerungssystem für die Planung und Überwachung der jährlichen Überprüfungen, das gleichzeitig den Beratern ausreichend Flexibilität in der konkreten Durchführung und Terminplanung mit ihren Kunden lässt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir unsere Mitarbeiter für die MiFID-konformen Vertriebsprozesse effektiv schulen und motivieren?",
        answer: "Die erfolgreiche Implementierung MiFID-konformer Vertriebsprozesse hängt maßgeblich von der Kompetenz, dem Verständnis und der Motivation Ihrer Mitarbeiter ab. Ein strategischer Ansatz für Training und Change Management kann den Unterschied zwischen einer oberflächlichen Compliance-Übung und einer nachhaltig verankerten Verhaltensänderung ausmachen.\n\n🎓 Strategischer Ansatz für effektive MiFID-Schulungen:\n• Kompetenzbasiertes Trainingskonzept: Entwickeln Sie ein mehrstufiges Schulungsprogramm, das nicht nur Wissen vermittelt, sondern gezielt die Kompetenzen aufbaut, die für die erfolgreiche Umsetzung MiFID-konformer Vertriebsprozesse erforderlich sind. Differenzieren Sie dabei nach verschiedenen Rollen und Vorkenntnissen.\n• Blended Learning mit Praxistransfer: Kombinieren Sie verschiedene Lernformate wie E-Learning, Präsenztrainings und Coaching am Arbeitsplatz, um sowohl theoretisches Verständnis als auch praktische Anwendungskompetenz zu fördern. Integrieren Sie realistische Fallstudien und Simulationen, die die MiFID-Anforderungen in konkreten Beratungssituationen erlebbar machen.\n• Mikro-Learning für kontinuierliche Kompetenzentwicklung: Implementieren Sie ein System aus kurzen, fokussierten Lerneinheiten, die regelmäßig neue Aspekte der MiFID-Anforderungen adressieren oder bekannte Inhalte auffrischen. Diese können leicht in den Arbeitsalltag integriert werden und unterstützen kontinuierliches Lernen.\n• Expertengemeinschaften fördern: Etablieren Sie Communities of Practice, in denen Mitarbeiter sich über Herausforderungen und Best Practices bei der Umsetzung MiFID-konformer Vertriebsprozesse austauschen können. Fördern Sie aktiv das Teilen von Erfahrungen und erfolgreichen Lösungsansätzen.\n\n🔄 Change Management und Motivationsstrategien:\n• Purpose-orientierte Kommunikation: Vermitteln Sie nicht nur die formalen Anforderungen der MiFID-Regularien, sondern auch deren tieferen Sinn und Zweck für den Anlegerschutz. Verknüpfen Sie dies mit den Werten und der Mission Ihres Unternehmens, um intrinsische Motivation zu fördern.\n• Partizipative Prozessgestaltung: Beziehen Sie ausgewählte Mitarbeiter frühzeitig in die Gestaltung der neuen Prozesse ein, um deren Praxistauglichkeit sicherzustellen und gleichzeitig Botschafter für die Veränderung zu gewinnen, die den Sinn und Nutzen der neuen Prozesse authentisch vermitteln können.\n• Erfolgsgeschichten teilen: Identifizieren und kommunizieren Sie aktiv positive Beispiele, wie die MiFID-konformen Prozesse zu besseren Kundenergebnissen, höherer Beratungsqualität oder effizienteren Arbeitsabläufen geführt haben. Machen Sie den Mehrwert für Mitarbeiter und Kunden konkret erlebbar.\n• Führungskräfte als Vorbilder: Stellen Sie sicher, dass Führungskräfte die neuen Prozesse nicht nur verbal unterstützen, sondern selbst vorleben und in ihren Steuerungsinstrumenten konsequent verankern. Schulen Sie Führungskräfte speziell darin, ihre Teams durch den Veränderungsprozess zu begleiten und individuelles Coaching anzubieten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir MiFID-konforme Beratungsprozesse in unserer digitalen Kundeninteraktion implementieren?",
        answer: "Die Integration MiFID-konformer Beratungsprozesse in digitale Kundeninteraktionen bietet sowohl Herausforderungen als auch erhebliche Chancen. Eine durchdachte Implementierung kann nicht nur die Compliance sicherstellen, sondern auch zu einem überlegenen digitalen Kundenerlebnis führen, das traditionelle Beratungsprozesse in vielen Aspekten übertrifft.\n\n💻 Strategischer Ansatz für digitale MiFID-Compliance:\n• Omnichannel-Compliance-Architektur: Entwickeln Sie eine konsistente Compliance-Architektur über alle digitalen Kanäle hinweg, die sicherstellt, dass unabhängig vom genutzten Kanal (Website, Mobile App, Video-Beratung, Chat) dieselben MiFID-Standards eingehalten werden, während gleichzeitig die kanalspezifischen Besonderheiten optimal genutzt werden.\n• Digital-First Prozessdesign: Gestalten Sie Ihre Beratungsprozesse von Grund auf digital, anstatt analoge Prozesse einfach zu digitalisieren. Nutzen Sie die Möglichkeiten digitaler Interaktion für eine intuitivere Kundenführung, präzisere Risikoprofilierung und transparentere Produktinformation.\n• Hybrid-Beratungsmodelle: Implementieren Sie flexible Modelle, die nahtlose Übergänge zwischen Selbstbedienung, digitaler Beratung und persönlicher Beratung ermöglichen, je nach Komplexität der Anlageentscheidung und Präferenz des Kunden. Stellen Sie dabei sicher, dass alle MiFID-relevanten Informationen kanalübergreifend konsistent bleiben.\n• Kundengesteuerte Personalisierung: Geben Sie Kunden die Kontrolle über den Detaillierungsgrad und die Art der MiFID-relevanten Informationen, die sie erhalten möchten, innerhalb der regulatorischen Mindestanforderungen. Dies erhöht die Akzeptanz und reduziert Abbruchraten in digitalen Prozessen.\n\n📱 Technologische Lösungsansätze für digitale MiFID-Compliance:\n• Interaktive Risikoprofilierung: Entwickeln Sie visuell ansprechende, spielerische Ansätze zur Erfassung der Risikoneigung und Anlageziele, die die Kundenengagement steigern und gleichzeitig präzisere Ergebnisse liefern als traditionelle Fragebögen. Nutzen Sie Visualisierungen und Simulationen, um abstrakte Risikobegriffe greifbar zu machen.\n• Algorithmusbasierte Geeignetheitsprüfung: Implementieren Sie fortschrittliche Algorithmen, die Kundenprofile mit Produkteigenschaften abgleichen und in Echtzeit MiFID-konforme Geeignetheitsbewertungen durchführen können. Stellen Sie dabei maximale Transparenz über die Entscheidungslogik sicher.\n• Kontextbezogene Produktinformationen: Integrieren Sie KID-Dokumente und andere regulatorisch erforderliche Informationen so in den digitalen Prozess, dass sie genau dann angezeigt werden, wenn sie für die Entscheidungsfindung des Kunden relevant sind, anstatt sie gesammelt am Anfang oder Ende zu präsentieren.\n• Digitale Nachweisführung: Entwickeln Sie robuste Systeme zur digitalen Dokumentation aller beratungsrelevanten Interaktionen, die sowohl den MiFID-Anforderungen als auch höchsten Sicherheits- und Datenschutzstandards entsprechen. Integrieren Sie zeitgemäße Authentifizierungsverfahren, die gleichzeitig sicher und benutzerfreundlich sind."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
