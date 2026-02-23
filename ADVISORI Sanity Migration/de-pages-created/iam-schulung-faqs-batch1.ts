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
    console.log('Updating IAM Schulung page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-schulung" not found')
    }
    
    // Create new FAQs for IAM Schulung fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum sind professionelle IAM-Schulungen entscheidend für moderne Unternehmen und wie unterscheiden sie sich von traditionellen IT-Trainings?',
        answer: "Professionelle IAM-Schulungen sind das strategische Fundament für erfolgreiche Cybersecurity-Strategien und digitale Transformation in modernen Unternehmen. Anders als traditionelle IT-Trainings, die oft technische Fertigkeiten isoliert vermitteln, entwickeln IAM-Schulungen ganzheitliche Kompetenzen, die Sicherheit, Compliance und Business-Enablement miteinander verbinden. In einer Zeit zunehmender Cyber-Bedrohungen und komplexer regulatorischer Anforderungen ist fundiertes IAM-Expertenwissen unverzichtbar für den Schutz kritischer Unternehmensassets.\n\n🎯 Strategische Notwendigkeit und Business-Impact:\n• Skill-Gap-Schließung in einem kritischen Sicherheitsbereich mit akutem Fachkräftemangel\n• Befähigung zur Implementierung moderner Zero-Trust-Architekturen und adaptiver Sicherheitsstrategien\n• Entwicklung interner Expertise für herstellerunabhängige Technologie-Bewertung und -Auswahl\n• Aufbau von Kompetenzen für komplexe Cloud-Migration und Hybrid-Integration\n• Vorbereitung auf künftige Sicherheitsanforderungen und Technologie-Evolution\n\n🛡️ Moderne IAM-Herausforderungen und Lösungsansätze:\n• Zero-Trust-Implementation erfordert fundamentales Umdenken von perimeter-basierter zu identitätszentrierter Sicherheit\n• Privileged Access Management wird zur kritischen Verteidigungslinie gegen Advanced Persistent Threats\n• Cloud-native IAM-Architekturen benötigen neue Kompetenzen für API-Integration und Microservices-Security\n• Behavioral Analytics und KI-gestützte Anomaly Detection erfordern Verständnis für moderne Technologien\n• Compliance-Automation wird zur Notwendigkeit für effiziente regulatorische Exzellenz\n\n📚 Ganzheitlicher Lernansatz und Kompetenzentwicklung:\n• Theoretisches Fundament kombiniert mit praktischer Anwendung in realen Umgebungen\n• Modulare Lernpfade für verschiedene Rollen und Erfahrungslevel\n• Hands-on Labs mit modernsten IAM-Tools und -Plattformen\n• Kontinuierliche Weiterbildung für sich wandelnde Technologie-Landschaften\n• Zertifizierungsvorbereitung für führende IAM-Technologien und -Standards\n\n🚀 Competitive Advantage und ROI-Maximierung:\n• Reduzierte Abhängigkeit von externen Beratern durch interne Expertise\n• Beschleunigte Projektrealisierung durch qualifizierte Teams\n• Verbesserte Sicherheitsposture durch fundiertes Verständnis moderner Bedrohungen\n• Optimierte Technologie-Investitionen durch objektive Bewertungskompetenz\n• Zukunftssicherheit durch kontinuierliche Kompetenzentwicklung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche spezifischen Kompetenzen und Fähigkeiten entwickeln Teilnehmer in professionellen IAM-Schulungsprogrammen?',
        answer: "Professionelle IAM-Schulungsprogramme entwickeln ein breites Spektrum strategischer und technischer Kompetenzen, die Teilnehmer befähigen, komplexe Identitätsverwaltung zu verstehen, zu planen und erfolgreich umzusetzen. Diese Kompetenzen reichen von fundamentalen IAM-Konzepten bis hin zu fortgeschrittenen Spezialisierungen in Zero-Trust-Architekturen, Privileged Access Management und Cloud-nativen Lösungen.\n\n🏗️ Fundamentale IAM-Architektur und Design-Prinzipien:\n• Verständnis für Identity Lifecycle Management von der Erstellung bis zur Deaktivierung\n• Beherrschung von Authentifizierungs- und Autorisierungskonzepten für verschiedene Anwendungsszenarien\n• Expertise in Role-Based und Attribute-Based Access Control Modellen\n• Fähigkeit zur Entwicklung skalierarer IAM-Architekturen für Enterprise-Umgebungen\n• Kompetenz in Identity Federation und Single Sign-On Implementierung\n\n🔐 Advanced Security und Zero-Trust-Implementation:\n• Praktische Fähigkeiten in Zero-Trust-Architektur-Design und -Implementierung\n• Expertise in adaptiver Authentifizierung und Risk-based Access Controls\n• Verständnis für Behavioral Analytics und Machine Learning in IAM-Kontexten\n• Kompetenz in Threat Detection und Incident Response für Identitäts-bezogene Angriffe\n• Fähigkeit zur Integration von Threat Intelligence in IAM-Entscheidungsprozesse\n\n⚡ Privileged Access Management und Critical Asset Protection:\n• Spezialisierte Kenntnisse in PAM-Strategien und -Architekturen\n• Praktische Erfahrung mit Credential Management und Password Vaulting\n• Expertise in Session Monitoring und Privileged Activity Analytics\n• Fähigkeit zur Implementierung von Just-in-Time Access und Elevation-on-Demand\n• Kompetenz in Insider Threat Detection und Forensic Analysis\n\n☁️ Cloud-native IAM und moderne Technologie-Integration:\n• Verständnis für Cloud-IAM-Services und Multi-Cloud-Strategien\n• Praktische Fähigkeiten in API-Gateway-Integration und Microservices-Security\n• Expertise in Container Security und DevOps-Integration\n• Kompetenz in Infrastructure as Code und Automation-Frameworks\n• Fähigkeit zur Hybrid-Cloud-Integration und Legacy-System-Anbindung\n\n📊 Governance, Compliance und Analytics:\n• Expertise in Identity Governance Frameworks und Policy-Management\n• Praktische Fähigkeiten in Compliance-Automation und Audit-Vorbereitung\n• Verständnis für Risk Assessment und Access Analytics\n• Kompetenz in Regulatory Mapping und Reporting-Automatisierung\n• Fähigkeit zur Entwicklung von KPIs und Metriken für IAM-Performance\n\n🎓 Strategische und kommunikative Kompetenzen:\n• Business-Case-Entwicklung für IAM-Investitionen und ROI-Berechnung\n• Change Management und User-Adoption-Strategien\n• Vendor-Management und Technologie-Evaluierung\n• Stakeholder-Kommunikation und Executive-Reporting\n• Kontinuierliche Lernfähigkeit für sich wandelnde Technologie-Landschaften"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie sind moderne IAM-Schulungsprogramme strukturiert und welche Lernmethoden gewährleisten nachhaltigen Wissenstransfer?',
        answer: "Moderne IAM-Schulungsprogramme folgen einem strukturierten, modularen Ansatz, der theoretisches Fundament mit praktischer Anwendung verbindet und dabei verschiedene Lerntypen und Erfahrungslevel berücksichtigt. Diese Programme nutzen innovative Lernmethoden und Technologien, um nachhaltigen Wissenstransfer und kontinuierliche Kompetenzentwicklung zu gewährleisten.\n\n📚 Modularer Aufbau und Lernpfad-Struktur:\n• Grundlagen-Module für IAM-Einsteiger mit fundamentalen Konzepten und Terminologie\n• Intermediate-Level für IT-Professionals mit bestehender Sicherheitserfahrung\n• Advanced-Spezialisierungen für erfahrene Experten in spezifischen IAM-Bereichen\n• Executive-Programme für Führungskräfte mit Fokus auf strategische Aspekte\n• Flexible Kombinationsmöglichkeiten für individualisierte Lernpfade\n\n🛠️ Hands-on Learning und praktische Anwendung:\n• Dedicated Lab-Umgebungen mit realen IAM-Tools und -Plattformen\n• Simulation komplexer Enterprise-Szenarien und Angriffsvektoren\n• Praktische Übungen mit führenden IAM-Technologien verschiedener Hersteller\n• Case-Study-basiertes Lernen mit realen Implementierungsherausforderungen\n• Projekt-basierte Ansätze für ganzheitliche Problemlösung\n\n🎯 Adaptive Lernmethoden und Personalisierung:\n• Initial Skill-Assessment für individualisierte Lernpfad-Entwicklung\n• Adaptive Learning-Technologien für personalisierte Lerngeschwindigkeit\n• Micro-Learning-Module für kontinuierliche Kompetenzentwicklung\n• Gamification-Elemente für erhöhte Motivation und Engagement\n• Peer-Learning und Collaborative-Problem-Solving-Ansätze\n\n💻 Blended Learning und flexible Delivery-Formate:\n• Kombination aus Präsenz-Workshops und Online-Modulen\n• Virtual Reality und Augmented Reality für immersive Lernerfahrungen\n• Mobile Learning-Apps für kontinuierliche Weiterbildung\n• Synchrone und asynchrone Lernkomponenten für maximale Flexibilität\n• Inhouse-Trainings und maßgeschneiderte Unternehmensprogramme\n\n📊 Kontinuierliche Bewertung und Kompetenz-Validierung:\n• Regelmäßige Assessments und praktische Evaluierungen\n• Portfolio-basierte Bewertung mit realen Projektergebnissen\n• Peer-Review und Expert-Feedback für qualitative Bewertung\n• Zertifizierungsprüfungen für formale Kompetenz-Anerkennung\n• Kontinuierliche Performance-Tracking und Lernfortschritt-Monitoring\n\n🔄 Post-Training-Support und kontinuierliche Entwicklung:\n• Mentoring-Programme mit erfahrenen IAM-Experten\n• Alumni-Netzwerke für kontinuierlichen Wissensaustausch\n• Regelmäßige Update-Sessions für neue Technologien und Trends\n• Access zu aktuellen Ressourcen und Best-Practice-Dokumentationen\n• Career-Development-Beratung und Spezialisierungs-Empfehlungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Zertifizierungsmöglichkeiten und Karrierewege eröffnen sich durch professionelle IAM-Weiterbildung?',
        answer: "Professionelle IAM-Weiterbildung eröffnet vielfältige Zertifizierungsmöglichkeiten und attraktive Karrierewege in einem der am schnellsten wachsenden Bereiche der Cybersecurity. Diese Qualifikationen sind nicht nur für individuelle Karriereentwicklung wertvoll, sondern auch für Unternehmen, die interne Expertise aufbauen und ihre Sicherheitsposture stärken möchten.\n\n🏆 Führende IAM-Zertifizierungen und Spezialisierungen:\n• Herstellerspezifische Zertifizierungen für Microsoft Azure AD, AWS IAM, Okta, SailPoint und andere führende Plattformen\n• Vendor-neutrale Zertifizierungen wie CISSP, CISM, CISA mit IAM-Fokus\n• Spezialisierte PAM-Zertifizierungen für CyberArk, BeyondTrust und andere PAM-Lösungen\n• Cloud-Security-Zertifizierungen mit starkem IAM-Komponenten\n• Emerging Technology-Zertifizierungen für Zero-Trust und Identity Analytics\n\n💼 Vielfältige Karrierewege und Spezialisierungsrichtungen:\n• IAM Architect für strategische Architektur-Entwicklung und Enterprise-Design\n• Identity Security Engineer für technische Implementation und System-Integration\n• PAM Specialist für Privileged Access Management und Critical Asset Protection\n• Cloud Identity Consultant für Cloud-Migration und Hybrid-Integration\n• IAM Governance Analyst für Compliance und Risk Management\n\n📈 Marktchancen und Gehaltsentwicklung:\n• Überdurchschnittliche Gehaltsentwicklung in einem Bereich mit akutem Fachkräftemangel\n• Hohe Nachfrage nach qualifizierten IAM-Experten in allen Branchen\n• Möglichkeiten für Consulting und freiberufliche Tätigkeit\n• Internationale Karrierechancen durch standardisierte Zertifizierungen\n• Führungspositionen in Cybersecurity und IT-Management\n\n🎯 Strategische Karriereentwicklung und Progression:\n• Junior-Level: IAM Administrator und Technical Support Rollen\n• Mid-Level: IAM Engineer und Solution Architect Positionen\n• Senior-Level: Principal Architect und Practice Lead Rollen\n• Executive-Level: CISO, Security Director und VP-Positionen\n• Spezialist-Track: Subject Matter Expert und Technical Evangelist\n\n🌐 Branchenübergreifende Anwendungsmöglichkeiten:\n• Finanzdienstleistungen mit strengen Compliance-Anforderungen\n• Healthcare für Schutz sensibler Patientendaten\n• Government und Public Sector für nationale Sicherheitsanforderungen\n• Technology und Software-Entwicklung für innovative Sicherheitslösungen\n• Manufacturing und Critical Infrastructure für Operational Technology Security\n\n🔮 Zukunftsperspektiven und Emerging Opportunities:\n• Künstliche Intelligenz und Machine Learning in IAM-Kontexten\n• Internet of Things und Edge Computing Security\n• Quantum Computing und Post-Quantum Cryptography\n• Decentralized Identity und Blockchain-basierte Lösungen\n• Privacy Engineering und Data Protection by Design"
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
