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
    console.log('Updating Managed PKI page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'managed-pki' })
    
    if (!existingDoc) {
      throw new Error('Document "managed-pki" not found')
    }
    
    // Create new FAQs for Managed PKI fundamentals and service models
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist Managed PKI und welche Vorteile bietet PKI-as-a-Service gegenüber einer eigenen PKI-Infrastruktur?',
        answer: "Managed PKI ist ein umfassender Outsourcing-Service, bei dem ein spezialisierter Anbieter die vollständige Verantwortung für den Betrieb, die Wartung und das Management einer PKI-Infrastruktur übernimmt. Anders als bei traditionellen PKI-Implementierungen müssen Unternehmen keine eigenen PKI-Experten beschäftigen, keine Hardware-Investitionen tätigen oder komplexe operative Prozesse verwalten.\n\n🏢 Strategische Geschäftsvorteile:\n• Fokussierung auf Kerngeschäft durch Auslagerung komplexer PKI-Operations an Spezialisten\n• Signifikante Kostenreduktion durch Wegfall von Hardware-Investitionen, Lizenzkosten und internem Personal\n• Schnellere Time-to-Market für sicherheitskritische Projekte ohne langwierige PKI-Implementierungsphasen\n• Skalierbare Kostenstruktur mit bedarfsgerechter Abrechnung statt hoher Fixkosten\n• Reduzierung von Compliance-Risiken durch professionelle PKI-Governance und kontinuierliche Überwachung\n\n🔧 Operative Exzellenz und Verfügbarkeit:\n• Professionelle PKI-Operations mit garantierten Service Level Agreements und Verfügbarkeitszeiten\n• Proaktives Monitoring und Incident Management durch spezialisierte Security Operations Centers\n• Automatisierte Certificate Lifecycle Management Prozesse reduzieren manuelle Fehlerquellen\n• Hochverfügbare Infrastrukturen mit Disaster Recovery und Business Continuity Mechanismen\n• Kontinuierliche Updates und Patches ohne Unterbrechung der Geschäftsprozesse\n\n🛡️ Erweiterte Sicherheit und Compliance:\n• Zugang zu Enterprise-grade Sicherheitstechnologien wie FIPS-zertifizierten HSMs ohne eigene Investitionen\n• Kontinuierliche Compliance-Überwachung und automatische Anpassung an neue regulatorische Anforderungen\n• Professionelle Threat Intelligence und Security Monitoring durch PKI-Sicherheitsexperten\n• Regelmäßige Sicherheitsaudits und Penetrationstests durch unabhängige Drittanbieter\n• Implementierung von Best Practices und aktuellen Sicherheitsstandards ohne interne Expertise\n\n⚡ Technologische Innovation und Flexibilität:\n• Zugang zu modernsten PKI-Technologien und -Innovationen ohne eigene Forschung und Entwicklung\n• Flexible Integration in bestehende IT-Landschaften durch standardisierte APIs und Protokolle\n• Unterstützung für moderne Anwendungsfälle wie Cloud-native Architekturen, Container und IoT\n• Automatische Skalierung bei wachsenden Zertifikatsanforderungen ohne Kapazitätsplanung\n• Kontinuierliche Optimierung der PKI-Services basierend auf aktuellen Technologietrends\n\n📊 Messbare Geschäftsergebnisse:\n• Reduzierung der Total Cost of Ownership um bis zu siebzig Prozent gegenüber eigenen PKI-Implementierungen\n• Verkürzung der Implementierungszeit von Monaten auf Wochen durch vorkonfigurierte Service-Angebote\n• Erhöhung der operativen Effizienz durch Automatisierung und Standardisierung von PKI-Prozessen\n• Verbesserung der Sicherheitsposture durch professionelle PKI-Governance und kontinuierliche Überwachung\n• Steigerung der Agilität bei der Einführung neuer digitaler Services und Geschäftsmodelle"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche verschiedenen Managed PKI Service-Modelle gibt es und wie wählt man das richtige für sein Unternehmen?',
        answer: "Managed PKI Services bieten verschiedene Service-Modelle, die sich in Umfang, Kontrolle und Integration unterscheiden. Die Wahl des richtigen Modells hängt von spezifischen Unternehmensanforderungen, Sicherheitsrichtlinien, Compliance-Vorgaben und strategischen Zielen ab.\n\n🌐 Fully Managed PKI Services:\n• Komplette Übernahme aller PKI-Operationen durch den Service Provider ohne interne PKI-Ressourcen\n• Ideal für Unternehmen ohne PKI-Expertise oder mit begrenzten IT-Ressourcen\n• Maximale Kosteneffizienz durch vollständige Auslagerung aller PKI-bezogenen Aktivitäten\n• Schnellste Implementierung mit sofortiger Verfügbarkeit von PKI-Services\n• Geeignet für standardisierte Anwendungsfälle mit geringen Anpassungsanforderungen\n\n🔄 Hybrid Managed PKI Modelle:\n• Kombination aus verwalteten Services und internen PKI-Komponenten für optimale Flexibilität\n• Root CA Management durch Service Provider mit internen Intermediate CAs für spezielle Anforderungen\n• Ermöglicht Kontrolle über kritische PKI-Komponenten bei gleichzeitiger Nutzung professioneller Services\n• Ideal für Unternehmen mit spezifischen Compliance-Anforderungen oder besonderen Sicherheitsrichtlinien\n• Schrittweise Migration bestehender PKI-Infrastrukturen zu Managed Services möglich\n\n☁️ Cloud-native PKI-as-a-Service:\n• Multi-Tenant PKI-Plattformen mit Self-Service-Funktionalitäten und API-basierter Integration\n• Optimiert für moderne Cloud-Architekturen, DevOps-Prozesse und agile Entwicklungszyklen\n• Elastische Skalierung und Usage-basierte Abrechnung für variable Workloads\n• Integrierte Automation für Certificate Lifecycle Management und DevSecOps-Workflows\n• Besonders geeignet für Cloud-first Unternehmen und digitale Transformation Initiativen\n\n🏢 Enterprise Managed PKI Services:\n• Dedizierte PKI-Infrastrukturen mit kundenspezifischen Anpassungen und Service Level Agreements\n• Umfassende Integration in bestehende Enterprise-Systeme und Governance-Prozesse\n• Erweiterte Compliance-Unterstützung für regulierte Industrien und internationale Standards\n• Dedicated Support Teams und Account Management für strategische Partnerschaft\n• Geeignet für große Unternehmen mit komplexen PKI-Anforderungen und hohen Sicherheitsstandards\n\n🔍 Auswahlkriterien für das optimale Service-Modell:\n• Bewertung interner PKI-Expertise und verfügbarer IT-Ressourcen für PKI-Management\n• Analyse spezifischer Compliance-Anforderungen und regulatorischer Vorgaben\n• Evaluierung bestehender IT-Infrastrukturen und Integrationsmöglichkeiten\n• Berücksichtigung von Skalierungsanforderungen und zukünftigem Wachstum\n• Assessment von Sicherheitsrichtlinien und Kontrollanforderungen\n\n💼 Implementierungsstrategien:\n• Proof of Concept Projekte zur Evaluierung verschiedener Service-Modelle\n• Phasenweise Migration bestehender PKI-Komponenten zu Managed Services\n• Parallel-Betrieb während Übergangszeiten zur Risikominimierung\n• Change Management Programme für organisatorische Anpassungen\n• Kontinuierliche Optimierung basierend auf operativen Erfahrungen und Geschäftsanforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie funktioniert die Migration bestehender PKI-Infrastrukturen zu Managed PKI Services?',
        answer: "Die Migration bestehender PKI-Infrastrukturen zu Managed Services erfordert eine sorgfältige Planung und schrittweise Umsetzung, um Geschäftskontinuität zu gewährleisten und Sicherheitsrisiken zu minimieren. Ein strukturierter Migrationsprozess berücksichtigt technische, operative und organisatorische Aspekte.\n\n📋 Umfassende PKI-Assessment und Bestandsaufnahme:\n• Vollständige Inventarisierung aller bestehenden PKI-Komponenten, Zertifikate und Abhängigkeiten\n• Analyse aktueller PKI-Architekturen, Trust-Hierarchien und Certificate Policies\n• Bewertung operativer Prozesse, Workflows und Verantwortlichkeiten\n• Identifikation kritischer Anwendungen und Services mit PKI-Abhängigkeiten\n• Assessment von Compliance-Anforderungen und Sicherheitsrichtlinien\n\n🗺️ Strategische Migrationsplanung:\n• Entwicklung einer detaillierten Migrationsstrategie mit Phasenplanung und Meilensteinen\n• Priorisierung von PKI-Komponenten basierend auf Kritikalität und Komplexität\n• Definition von Rollback-Szenarien und Contingency-Plänen für kritische Situationen\n• Festlegung von Success Criteria und Key Performance Indicators für jede Migrationsphase\n• Koordination mit Stakeholdern und Entwicklung eines Change Management Plans\n\n🔄 Schrittweise Migrationsumsetzung:\n• Parallel-Betrieb neuer Managed PKI Services neben bestehenden Systemen während Übergangszeit\n• Graduelle Migration von Zertifikaten und Anwendungen zu neuen PKI-Services\n• Kontinuierliche Validierung der Funktionalität und Performance während der Migration\n• Anpassung von Anwendungen und Systemen für Integration mit Managed PKI APIs\n• Schulung von IT-Teams für neue Prozesse und Service-Interfaces\n\n🛡️ Sicherheit und Kontinuität während der Migration:\n• Aufrechterhaltung aller Sicherheitskontrollen und Compliance-Anforderungen während des Übergangs\n• Sichere Übertragung von Schlüsselmaterial und kritischen PKI-Komponenten\n• Kontinuierliche Überwachung und Monitoring aller PKI-Services während der Migration\n• Regelmäßige Sicherheitstests und Validierung der migrierten Komponenten\n• Dokumentation aller Änderungen für Audit-Zwecke und Compliance-Nachweise\n\n⚡ Optimierung und Modernisierung:\n• Nutzung der Migration als Gelegenheit zur Modernisierung veralteter PKI-Komponenten\n• Implementierung von Automation und Self-Service-Funktionalitäten\n• Integration moderner Certificate Lifecycle Management Prozesse\n• Einführung von DevSecOps-Workflows und API-basierter PKI-Integration\n• Optimierung von Certificate Policies und Trust-Architekturen\n\n📊 Post-Migration Aktivitäten:\n• Umfassende Tests aller migrierten PKI-Services und abhängigen Anwendungen\n• Performance-Monitoring und Optimierung der neuen Managed PKI Services\n• Dekommissionierung alter PKI-Infrastrukturen nach erfolgreicher Migration\n• Dokumentation der neuen PKI-Architektur und operativen Prozesse\n• Kontinuierliche Überwachung und Optimierung basierend auf operativen Erfahrungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Sicherheitsstandards und Compliance-Anforderungen erfüllen professionelle Managed PKI Services?',
        answer: "Professionelle Managed PKI Services implementieren umfassende Sicherheitsstandards und Compliance-Frameworks, die weit über die Möglichkeiten typischer interner PKI-Implementierungen hinausgehen. Diese Standards gewährleisten höchste Sicherheit und erfüllen strenge regulatorische Anforderungen.\n\n🏛️ Internationale PKI-Standards und Zertifizierungen:\n• Common Criteria Evaluationen für PKI-Komponenten und Sicherheitsmodule\n• WebTrust for Certificate Authorities Audits für öffentlich vertrauenswürdige Zertifikate\n• ETSI Standards für qualifizierte elektronische Signaturen und Zeitstempel\n• RFC-konforme Implementierungen für X.509 Zertifikate und PKI-Protokolle\n• CA/Browser Forum Baseline Requirements für SSL/TLS Zertifikate\n\n🔒 Hardware Security Module (HSM) Sicherheit:\n• FIPS 140-2 Level 3 und Level 4 zertifizierte HSMs für Root Key Protection\n• Common Criteria EAL4+ evaluierte Hardware Security Modules\n• Tamper-resistant und tamper-evident Hardware für physischen Schutz\n• Multi-Person Control und Dual Control für kritische kryptographische Operationen\n• Sichere Key Generation mit echten Zufallszahlengeneratoren\n\n📋 Compliance und regulatorische Anforderungen:\n• eIDAS Verordnung Compliance für qualifizierte Vertrauensdienste in der EU\n• DSGVO konforme Datenverarbeitung und Privacy-by-Design Implementierung\n• SOC 2 Type II Audits für Service Organization Controls\n• ISO 27001 zertifizierte Informationssicherheits-Management-Systeme\n• PCI DSS Compliance für Zahlungskartenindustrie-Anforderungen\n\n🛡️ Operative Sicherheitsmaßnahmen:\n• Security Operations Centers mit kontinuierlicher Überwachung und Incident Response\n• Multi-Faktor-Authentifizierung für alle administrativen Zugriffe\n• Segregation of Duties und Least Privilege Prinzipien für Rollentrennung\n• Umfassende Audit Trails und Logging für alle PKI-Operationen\n• Regelmäßige Penetrationstests und Vulnerability Assessments\n\n🌐 Infrastruktur und Betriebssicherheit:\n• Geografisch verteilte Rechenzentren mit Tier III/IV Zertifizierungen\n• Redundante Systeme und Hochverfügbarkeits-Architekturen\n• Disaster Recovery und Business Continuity Pläne mit definierten RTOs und RPOs\n• Sichere Netzwerksegmentierung und Firewall-Schutz\n• Physische Sicherheit mit biometrischen Zugangskontrollen und Überwachung\n\n🔍 Kontinuierliche Compliance-Überwachung:\n• Automatisierte Compliance-Monitoring und Alerting-Systeme\n• Regelmäßige interne und externe Audits durch akkreditierte Prüforganisationen\n• Kontinuierliche Anpassung an neue regulatorische Anforderungen\n• Compliance Dashboards und Reporting für Transparenz und Nachverfolgung\n• Risk Assessment und Management Prozesse für proaktive Compliance-Sicherstellung\n\n📊 Transparenz und Governance:\n• Detaillierte Certificate Practice Statements und Certificate Policies\n• Regelmäßige Compliance-Reports und Audit-Ergebnisse für Kunden\n• Service Level Agreements mit definierten Sicherheits- und Verfügbarkeitsmetriken\n• Incident Response Prozesse mit definierten Eskalationswegen\n• Kontinuierliche Verbesserung basierend auf Audit-Ergebnissen und Best Practices"
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
