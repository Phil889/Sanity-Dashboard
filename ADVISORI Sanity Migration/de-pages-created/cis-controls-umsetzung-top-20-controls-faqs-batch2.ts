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
    console.log('Updating CIS Controls Top 20 Implementation page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls-umsetzung-top-20-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls-umsetzung-top-20-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie adressiert ADVISORI die kritische Herausforderung der Asset Inventory und Configuration Management bei der CIS Controls Implementation, um vollständige Visibility und Control über die digitale Infrastruktur zu gewährleisten?",
        answer: "Asset Inventory und Configuration Management bilden das Fundament jeder effektiven Cybersicherheitsstrategie – ohne vollständige Kenntnis der digitalen Assets kann keine Sicherheitsmaßnahme ihre volle Wirkung entfalten. ADVISORI transformiert die traditionell manuellen und fehleranfälligen Inventory-Prozesse in eine automatisierte, kontinuierliche Discovery- und Management-Plattform, die nicht nur Compliance sicherstellt, sondern auch als Business Intelligence Tool für IT-Optimierung dient.\n\n📋 Comprehensive Asset Discovery und Classification:\n• Automated Discovery Engines: Einsatz von Network-Scanning, Agent-based Discovery und Cloud-API-Integration für lückenlose Identifikation aller Hardware-, Software- und Cloud-Assets.\n• Asset Lifecycle Management: Kontinuierliche Überwachung von Asset-Änderungen, Patch-Status und End-of-Life-Zyklen für proaktive Risikominimierung.\n• Business Impact Classification: Kategorisierung aller Assets nach Geschäftskritikalität, Datenklassifikation und Compliance-Anforderungen für risikogerechte Schutzmaßnahmen.\n• Shadow IT Detection: Proaktive Identifikation unauthorized software und cloud services durch Deep Packet Inspection und User Behavior Analytics.\n\n🔧 Intelligent Configuration Management:\n• Baseline Configuration Standards: Entwicklung und Durchsetzung sicherer Configuration-Baselines für alle Asset-Kategorien basierend auf CIS Benchmarks und Industry Best Practices.\n• Automated Compliance Monitoring: Kontinuierliche Überwachung von Configuration Drift mit automatisierter Remediation für kritische Sicherheitsabweichungen.\n• Change Management Integration: Nahtlose Integration in bestehende Change-Management-Prozesse mit automated impact analysis und risk scoring.\n• Version Control für Configurations: Git-basiertes Configuration Management für Infrastructure-as-Code und rollback-fähige Änderungen.\n\n🎯 Business Value durch Enhanced Visibility:\n• IT Asset Optimization: Identifikation unused software licenses, redundanter Systeme und optimization opportunities für Cost Reduction.\n• Compliance Automation: Automatisierte Generation von Compliance-Reports für Audits und regulatorische Anforderungen.\n• Risk-based Patching: Priorisierung von Security-Updates basierend auf Asset-Kritikalität und Exploit-Verfügbarkeit.\n• Digital Transformation Enablement: Vollständige Asset-Transparenz als Grundlage für Cloud-Migration und Modernisierungsinitiativen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Die Implementation von CIS Controls 4 und 5 (Secure Configuration und Account Management) erfordert tiefgreifende Änderungen in bestehenden IT-Prozessen. Wie minimiert ADVISORI Business Disruption während dieser kritischen Transformation?",
        answer: "Secure Configuration und Account Management sind die operationalen Grundpfeiler der Cybersicherheit, deren Implementierung traditionell mit erheblichen Geschäftsunterbrechungen verbunden ist. ADVISORI hat eine proprietary methodology entwickelt, die diese fundamentalen Änderungen through gradual, risk-aware transformation implementiert, wobei business continuity und security enhancement simultan erreicht werden.\n\n🔐 Strategic Account Management Transformation:\n• Privileged Access Management (PAM) Implementation: Stufenweise Einführung von PAM-Lösungen beginnend mit kritischsten Accounts und schrittweise Ausweitung auf alle privilegierten Zugriffe.\n• Identity Lifecycle Automation: Automatisierung von Account-Provisioning und Deprovisioning durch Integration mit HR-Systemen und Role-based Access Control (RBAC).\n• Multi-Factor Authentication (MFA) Rollout: Risikobasierte MFA-Implementierung mit adaptive authentication basierend auf User Behavior und Context.\n• Regular Access Reviews: Etablierung automatisierter Access-Review-Prozesse mit Manager-Attestation und automated removal von unused permissions.\n\n⚙️ Non-Disruptive Configuration Hardening:\n• Baseline Configuration Development: Entwicklung sicherer Configuration-Standards durch collaborative workshops mit business stakeholders zur Minimierung operationaler Impacts.\n• Phased Hardening Approach: Graduelle Implementation von Security-Configurations mit extensive testing und rollback-capabilities für every change.\n• Exception Management Framework: Strukturierte Processes für justified security exceptions mit compensating controls und regular reviews.\n• Automated Configuration Monitoring: Continuous monitoring für configuration compliance mit intelligent alerting und automated remediation where possible.\n\n🛡️ Risk-Aware Implementation Strategy:\n• Business Impact Assessment: Detaillierte Analyse der business implications jeder Configuration-Änderung mit Stakeholder-Alignment vor Implementation.\n• Pilot Group Strategy: Implementation neuer Controls in controlled pilot groups zur Validierung vor enterprise-wide rollout.\n• Emergency Access Procedures: Etablierung secure emergency access procedures für business-critical situations während der Transformation.\n• User Experience Optimization: Design aller Security-Maßnahmen für minimal user friction durch Single Sign-On (SSO) und seamless authentication flows.\n\n📊 Continuous Monitoring und Optimization:\n• Security Metrics Dashboard: Real-time monitoring von Account-Management-KPIs und Configuration-Compliance für continuous improvement.\n• Behavioral Analytics Integration: Einsatz von User and Entity Behavior Analytics (UEBA) zur Erkennung anomaler Account-Aktivitäten.\n• Automated Incident Response: Integration von Account-Management-Events in SIEM-Systeme für automated incident response und forensic capabilities.\n• Regular Effectiveness Reviews: Quartalsweise Bewertung der implementierten Controls mit business stakeholders für optimization opportunities."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie stellt ADVISORI sicher, dass die Implementation der CIS Controls 6-10 (Maintenance, Monitoring und Analysis) nicht nur technische Excellence erreicht, sondern auch actionable intelligence für strategic business decisions liefert?",
        answer: "Die CIS Controls 6-10 transformieren raw security data in strategic business intelligence und bilden das operative Herzstück einer datengestützten Cybersicherheitsstrategie. ADVISORI entwickelt nicht nur technische Monitoring-Capabilities, sondern schafft eine comprehensive intelligence platform, die C-Level-Entscheidungen mit präzisen, actionable insights unterstützt und cybersecurity von einem reactive cost center zu einem proactive business enabler transformiert.\n\n🔍 Advanced Log Management und SIEM Integration:\n• Centralized Log Collection: Implementierung von comprehensive log aggregation von allen critical systems mit intelligent parsing und enrichment für maximale analytical value.\n• Threat Intelligence Integration: Automatische Correlation von internal events mit global threat intelligence feeds für contextual risk assessment.\n• Machine Learning-Enhanced Detection: Deployment von ML-Algorithmen für anomaly detection und prediction von potential security incidents.\n• Automated Incident Classification: Intelligent categorization und prioritization von security events basierend auf business impact und threat severity.\n\n📊 Business-Driven Security Analytics:\n• Risk Quantification Models: Development von financial risk models, die technical vulnerabilities in business-relevant monetary impact übersetzen.\n• Operational Intelligence Dashboard: C-Level-Dashboards, die security metrics mit business KPIs korrelieren und strategic insights liefern.\n• Predictive Risk Analytics: Einsatz von Advanced Analytics zur Vorhersage von security trends und proactive risk mitigation.\n• Compliance Automation: Automated generation von compliance reports und regulatory documentation durch intelligent data analysis.\n\n🛠️ Proactive Maintenance und Vulnerability Management:\n• Risk-Based Patch Management: Prioritization von security updates basierend auf exploit availability, asset criticality und business impact.\n• Automated Vulnerability Assessment: Continuous vulnerability scanning mit intelligent remediation recommendations und automated patching für non-critical systems.\n• Asset Health Monitoring: Comprehensive monitoring von system health, performance impacts und security posture changes.\n• Change Impact Analysis: Automated assessment von security implications für alle system changes und configuration modifications.\n\n🎯 Strategic Decision Support:\n• Investment ROI Analysis: Quantification des return on investment für security initiatives durch measurable risk reduction.\n• Threat Landscape Intelligence: Regular briefings für executive leadership über emerging threats und recommended strategic responses.\n• Business Continuity Insights: Analysis von security events für business continuity planning und disaster recovery optimization.\n• Digital Transformation Security Guidance: Security intelligence zur Unterstützung von cloud adoption, digital initiatives und technology modernization decisions."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Die CIS Controls 11-15 adressieren Network Security und Wireless Access Control – wie transformiert ADVISORI diese traditionell perimeter-fokussierten Controls für moderne Zero Trust und Cloud-First Architekturen?",
        answer: "Die Evolution zu Cloud-First und Zero Trust Architekturen erfordert eine fundamentale Neukonzeption traditioneller Network Security Controls. ADVISORI modernisiert die CIS Controls 11-15 zu einer adaptive, context-aware security architecture, die den Realitäten hybrider IT-Landschaften gerecht wird und gleichzeitig die Grundprinzipien effektiver Network Security in cloud-native Umgebungen implementiert.\n\n🌐 Zero Trust Network Architecture Implementation:\n• Micro-Segmentation Strategy: Implementierung granularer Network-Segmentierung mit software-defined perimeters für jeden Workload und jede Application.\n• Identity-Centric Access Control: Transformation von traditional network access controls zu identity-based, context-aware authentication und authorization.\n• Continuous Network Verification: Deployment von continuous monitoring und verification mechanisms für every network connection und data flow.\n• East-West Traffic Inspection: Comprehensive monitoring und analysis von lateral traffic movement durch advanced network detection und response capabilities.\n\n☁️ Cloud-Native Security Integration:\n• Multi-Cloud Network Security: Harmonisierung von security policies across AWS, Azure, Google Cloud und private cloud environments durch unified management platforms.\n• Software-Defined Perimeter (SDP): Implementation von SDP-Technologien für secure remote access ohne traditional VPN limitations.\n• Cloud Security Posture Management (CSPM): Automated monitoring und compliance checking für cloud network configurations und security policies.\n• Container Network Security: Specialized security controls für Kubernetes environments und containerized applications mit service mesh integration.\n\n📱 Modern Wireless und Mobile Security:\n• Enterprise Mobility Management (EMM): Comprehensive mobile device management mit zero trust principles für BYOD und corporate devices.\n• Wireless Intrusion Detection: Advanced monitoring für rogue access points, evil twin attacks und wireless-specific threats.\n• IoT Device Security: Specialized controls für Internet of Things devices mit automated device discovery, profiling und micro-segmentation.\n• 5G Security Readiness: Preparation für 5G network security requirements mit edge computing considerations.\n\n🔧 Intelligent Network Automation:\n• Security Orchestration: Automated response capabilities für network security incidents mit playbook-driven remediation.\n• Dynamic Policy Enforcement: Context-aware security policy enforcement basierend auf user behavior, device trust level und data sensitivity.\n• Network AI/ML Integration: Machine learning-enhanced network anomaly detection für sophisticated attack identification.\n• API Security Integration: Comprehensive API security monitoring und protection als integral component der network security strategy."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
