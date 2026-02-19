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
    console.log('Updating Business Continuity Management Certification page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-certification' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-certification" not found')
    }
    
    // Create new FAQs for BCM Certification fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche BCM-Zertifizierungen sind international anerkannt und welche Karrierevorteile bieten sie?',
        answer: "Die Landschaft der Business Continuity Management Zertifizierungen bietet verschiedene international anerkannte Qualifikationswege, die jeweils spezifische Karrierevorteile und Spezialisierungsmöglichkeiten eröffnen. Diese Zertifizierungen validieren nicht nur fachliche Kompetenz, sondern positionieren Professionals als Experten in einem kritischen Geschäftsbereich mit wachsender strategischer Bedeutung.\n\n🏆 ISO 22301 Zertifizierungspfade:\n• Foundation Level bietet grundlegende Kenntnisse der internationalen BCM-Standards und Prinzipien\n• Practitioner Level entwickelt praktische Implementierungsfähigkeiten für BCM-Systeme in Organisationen\n• Lead Implementer Qualifikation befähigt zur Führung von BCM-Implementierungsprojekten\n• Lead Auditor Zertifizierung ermöglicht die Durchführung von BCM-Audits und Compliance-Bewertungen\n• Diese ISO-basierten Zertifikate genießen globale Anerkennung und öffnen Türen zu internationalen Karrieremöglichkeiten\n\n🎓 BCI Professional Certifications:\n• Certificate Level (CBCI) etabliert fundamentale BCM-Kompetenz nach Good Practice Guidelines\n• Specialist Level (SBCI) vertieft Expertise in spezifischen BCM-Bereichen und Branchen\n• Fellowship (FBCI) repräsentiert die höchste Stufe professioneller BCM-Anerkennung\n• Membership im Business Continuity Institute bietet Zugang zu globalen Netzwerken und Ressourcen\n• BCI-Zertifikate sind besonders in angelsächsischen Märkten hoch angesehen\n\n💼 Karrierevorteile und Marktpositionierung:\n• Zertifizierte BCM-Professionals erzielen durchschnittlich höhere Gehälter als nicht-zertifizierte Kollegen\n• Internationale Mobilität durch global anerkannte Qualifikationen und Standards\n• Bevorzugte Behandlung bei Stellenausschreibungen und Beförderungsentscheidungen\n• Zugang zu spezialisierten Rollen in Risikomanagement, Compliance und strategischer Planung\n• Möglichkeit zur Selbstständigkeit als BCM-Berater oder Auditor\n\n🌐 Branchenspezifische Zertifizierungen:\n• Finanzdienstleistungen erfordern oft zusätzliche regulatorische BCM-Qualifikationen\n• Healthcare und kritische Infrastrukturen haben spezifische Zertifizierungsanforderungen\n• IT und Cyber-Resilienz Zertifikate ergänzen traditionelle BCM-Qualifikationen\n• Supply Chain und Logistik-spezifische BCM-Zertifizierungen gewinnen an Bedeutung\n• Emerging Technologies wie KI und IoT schaffen neue Zertifizierungsnischen\n\n📈 Kontinuierliche Entwicklung:\n• Continuing Professional Development (CPD) Anforderungen sichern Aktualität der Qualifikationen\n• Recertification Prozesse gewährleisten kontinuierliche Kompetenzentwicklung\n• Spezialisierungsmöglichkeiten in Cyber-Resilienz, Klimarisiken und digitaler Transformation\n• Mentoring und Leadership-Programme für Senior-Level Professionals\n• Integration von ESG und Nachhaltigkeitsaspekten in moderne BCM-Zertifizierungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie bereite ich mich optimal auf BCM-Zertifizierungsprüfungen vor und welche Lernressourcen sind empfehlenswert?',
        answer: "Eine erfolgreiche Vorbereitung auf BCM-Zertifizierungsprüfungen erfordert einen strukturierten Ansatz, der theoretisches Wissen mit praktischer Anwendung verbindet. Die Komplexität moderner BCM-Standards und die Vielfalt der Prüfungsformate machen eine strategische Herangehensweise unerlässlich für nachhaltigen Erfolg.\n\n📚 Strukturierte Lernpfade:\n• Beginnen Sie mit einer gründlichen Analyse der Prüfungsanforderungen und Lernziele\n• Entwickeln Sie einen realistischen Zeitplan, der ausreichend Zeit für Vertiefung und Wiederholung einplant\n• Kombinieren Sie verschiedene Lernmethoden wie Selbststudium, Präsenzschulungen und Online-Kurse\n• Nutzen Sie offizielle Curricula und Syllabi als Grundlage für Ihre Vorbereitung\n• Integrieren Sie regelmäßige Selbstbewertungen und Fortschrittskontrollen in Ihren Lernplan\n\n🎯 Empfohlene Lernressourcen:\n• Offizielle Standards-Dokumente (ISO 22301, BCI Good Practice Guidelines) als Primärquellen\n• Akkreditierte Schulungsanbieter mit erfahrenen Trainern und bewährten Curricula\n• Fachbücher von anerkannten BCM-Experten und Praktikern\n• Online-Lernplattformen mit interaktiven Modulen und Selbsttests\n• Professionelle Netzwerke und Studiengruppen für Erfahrungsaustausch\n\n💡 Praktische Übungen und Fallstudien:\n• Arbeiten Sie mit realen BCM-Szenarien und Implementierungsbeispielen\n• Entwickeln Sie eigene Business Impact Analysen und Risikobewertungen\n• Üben Sie die Erstellung von BCM-Dokumentation und Verfahren\n• Simulieren Sie Krisensituationen und Entscheidungsfindungsprozesse\n• Analysieren Sie Best Practices und Lessons Learned aus verschiedenen Branchen\n\n🔍 Prüfungsvorbereitung und Mock-Exams:\n• Nutzen Sie offizielle Übungsprüfungen und Beispielfragen zur Selbsteinschätzung\n• Zeitmanagement-Training für effiziente Bearbeitung unter Prüfungsbedingungen\n• Fokussieren Sie auf häufige Prüfungsthemen und kritische Wissensbereiche\n• Entwickeln Sie Strategien für verschiedene Fragetypen (Multiple Choice, Fallstudien, Essays)\n• Peer-Learning und Diskussionsgruppen für gemeinsame Problemlösung\n\n🎓 Mentoring und professionelle Unterstützung:\n• Suchen Sie Mentoren mit relevanter Zertifizierungserfahrung und Branchenkenntnis\n• Nutzen Sie Coaching-Services für personalisierte Lernunterstützung\n• Teilnahme an Fachkonferenzen und Workshops für praktische Einblicke\n• Engagement in professionellen Verbänden für Networking und Wissensaustausch\n• Kontinuierliche Reflexion und Anpassung der Lernstrategie basierend auf Fortschritten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielen BCM-Zertifizierungen bei der Karriereentwicklung und wie positioniere ich mich als Experte?',
        answer: "BCM-Zertifizierungen fungieren als strategische Karriereinstrumente, die nicht nur fachliche Kompetenz validieren, sondern auch als Differenzierungsmerkmale in einem zunehmend kompetitiven Markt dienen. Die richtige Positionierung als BCM-Experte erfordert eine durchdachte Kombination aus Zertifizierungen, praktischer Erfahrung und kontinuierlicher Weiterentwicklung.\n\n🚀 Strategische Karriereplanung:\n• Definieren Sie klare Karriereziele und identifizieren Sie relevante Zertifizierungspfade\n• Entwickeln Sie eine langfristige Qualifikationsstrategie, die verschiedene Spezialisierungen berücksichtigt\n• Kombinieren Sie BCM-Zertifikate mit komplementären Qualifikationen in Risikomanagement oder IT-Sicherheit\n• Nutzen Sie Zertifizierungen als Sprungbrett für Führungspositionen und strategische Rollen\n• Planen Sie internationale Karrieremöglichkeiten durch global anerkannte Zertifikate\n\n💼 Marktpositionierung und Personal Branding:\n• Entwickeln Sie ein professionelles Profil, das Ihre Zertifizierungen und Expertise hervorhebt\n• Nutzen Sie LinkedIn und andere Plattformen für Thought Leadership und Wissensaustausch\n• Publizieren Sie Fachartikel und Beiträge zu aktuellen BCM-Themen und Trends\n• Sprechen Sie auf Konferenzen und Fachveranstaltungen über Ihre Expertise\n• Bauen Sie ein Netzwerk von Branchenkontakten und Mentoren auf\n\n🎯 Spezialisierung und Nischenfokus:\n• Identifizieren Sie Wachstumsbereiche wie Cyber-Resilienz oder Klimarisiken\n• Entwickeln Sie Expertise in spezifischen Branchen oder Regulierungsumgebungen\n• Kombinieren Sie technische BCM-Fähigkeiten mit Geschäfts- und Führungskompetenzen\n• Positionieren Sie sich als Experte für emerging challenges wie digitale Transformation\n• Nutzen Sie Zertifizierungen als Basis für Beratungs- oder Trainingstätigkeiten\n\n📈 Kontinuierliche Weiterentwicklung:\n• Bleiben Sie durch CPD-Programme und Weiterbildung auf dem neuesten Stand\n• Erweitern Sie Ihr Qualifikationsspektrum durch zusätzliche Zertifizierungen\n• Engagieren Sie sich in professionellen Verbänden und Arbeitsgruppen\n• Mentoring von Nachwuchskräften als Weg zur Etablierung als Thought Leader\n• Integration von Innovation und neuen Technologien in Ihre BCM-Praxis\n\n🌟 Führungsrollen und Executive Positioning:\n• Nutzen Sie Zertifizierungen als Qualifikationsnachweis für C-Level Positionen\n• Entwickeln Sie strategische Denkweise und Business-orientierte BCM-Ansätze\n• Kommunizieren Sie BCM-Wert in Geschäftssprache für Board-Level Präsentationen\n• Führen Sie organisationsweite BCM-Transformationen und Change-Management\n• Etablieren Sie sich als vertrauensvoller Berater für Senior Management und Stakeholder"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie unterscheiden sich die verschiedenen BCM-Zertifizierungsanbieter und welcher ist für meine Ziele am besten geeignet?',
        answer: "Die Auswahl des richtigen BCM-Zertifizierungsanbieters ist eine strategische Entscheidung, die Ihre Karriereentwicklung maßgeblich beeinflussen kann. Verschiedene Anbieter haben unterschiedliche Schwerpunkte, Anerkennungsgrade und Zielgruppen, was eine sorgfältige Analyse Ihrer individuellen Ziele und Marktanforderungen erfordert.\n\n🏛️ ISO-basierte Zertifizierungsanbieter:\n• PECB, BSI, IRCA und andere akkreditierte Organisationen bieten ISO 22301 Zertifizierungen\n• Fokus auf internationale Standards und globale Anerkennung\n• Strukturierte Lernpfade von Foundation bis Lead Auditor Level\n• Besonders geeignet für Karrieren in multinationalen Unternehmen und Beratung\n• Starke technische Orientierung und Compliance-Fokus\n\n🎓 Business Continuity Institute (BCI):\n• Weltweit führende professionelle BCM-Organisation mit umfassenden Zertifizierungsprogrammen\n• Good Practice Guidelines als Basis für praxisorientierte Qualifikationen\n• Starkes globales Netzwerk und kontinuierliche professionelle Entwicklung\n• Besonders anerkannt in UK, Australien und anderen Commonwealth-Ländern\n• Fokus auf praktische Anwendung und Branchenrelevanz\n\n🔧 Disaster Recovery Institute International (DRII):\n• Spezialisierung auf Disaster Recovery und IT-Kontinuitätsmanagement\n• Technisch orientierte Zertifikate für IT-Professionals und DR-Spezialisten\n• Starke Präsenz in Nordamerika und technologieorientierten Branchen\n• Fokus auf operative Aspekte und technische Implementierung\n• Ideal für Karrieren in IT-Abteilungen und Technologieunternehmen\n\n🏢 Branchenspezifische Anbieter:\n• Finanzdienstleistungen haben oft eigene oder spezialisierte Zertifizierungsprogramme\n• Healthcare und kritische Infrastrukturen erfordern sektorspezifische Qualifikationen\n• Regulatorische Körperschaften bieten compliance-orientierte Zertifizierungen\n• Consulting-Firmen entwickeln proprietäre Methodologien und Zertifikate\n• Akademische Institutionen bieten universitäre BCM-Programme und Abschlüsse\n\n🎯 Auswahlkriterien und Entscheidungsfaktoren:\n• Karriereziele und angestrebte Positionen bestimmen die Relevanz verschiedener Anbieter\n• Geografische Präsenz und regionale Anerkennung beeinflussen Marktchancen\n• Branchenfokus und Spezialisierungsmöglichkeiten sollten zu Ihren Interessen passen\n• Kosten-Nutzen-Verhältnis und Investitionsrendite für verschiedene Zertifikate\n• Continuing Education Anforderungen und langfristige Entwicklungsmöglichkeiten\n\n🔄 Kombinationsstrategien:\n• Multi-Anbieter-Ansatz für umfassende Qualifikation und Marktabdeckung\n• Sequenzielle Zertifizierung beginnend mit Foundation-Level verschiedener Anbieter\n• Spezialisierung durch Kombination von BCM mit komplementären Zertifikaten\n• Internationale Portabilität durch Fokus auf global anerkannte Standards\n• Kontinuierliche Bewertung und Anpassung der Zertifizierungsstrategie basierend auf Marktentwicklungen"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
