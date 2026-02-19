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
    console.log('Updating SIEM Analyse page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-analyse' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-analyse" not found')
    }
    
    // Create new FAQs for SIEM Analyse advanced analytics and forensic investigation
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Wie entwickelt man ein Advanced Analytics Framework für SIEM, das komplexe Bedrohungsmuster erkennt und gleichzeitig False Positives minimiert?',
        answer: "Die Entwicklung eines Advanced Analytics Frameworks für SIEM erfordert eine wissenschaftlich fundierte Herangehensweise, die statistische Methoden, Machine Learning und Domain-Expertise kombiniert. Ein effektives Framework muss sowohl bekannte als auch unbekannte Bedrohungsmuster erkennen und dabei die Balance zwischen Sensitivität und Spezifität optimieren.\n\n🔬 Statistical Foundation und Baseline Establishment:\n• Comprehensive Baseline Analysis aller normalen Systemaktivitäten und User-Verhaltensweisen über repräsentative Zeiträume\n• Statistical Process Control Implementation für kontinuierliche Überwachung von Abweichungen und Anomalien\n• Multi-dimensional Statistical Modeling für verschiedene Datentypen und Aktivitätsmuster\n• Dynamic Threshold Adjustment basierend auf zeitlichen Mustern und organisatorischen Veränderungen\n• Confidence Interval Calculation für probabilistische Anomalie-Bewertung und Risk Scoring\n\n🤖 Machine Learning Integration und Model Development:\n• Supervised Learning Models für bekannte Attack Patterns mit kontinuierlicher Training Data Enhancement\n• Unsupervised Learning Algorithms für Discovery neuer und unbekannter Bedrohungsmuster\n• Ensemble Methods zur Kombination verschiedener Algorithmen für robuste Detection Performance\n• Feature Engineering und Dimensionality Reduction für optimale Model Performance\n• Cross-validation und Model Testing für Generalization Capability und Overfitting Prevention\n\n📊 Multi-layered Analytics Architecture:\n• Real-time Stream Analytics für zeitkritische Threat Detection und Immediate Response\n• Batch Processing Analytics für Deep Analysis und Historical Pattern Recognition\n• Graph Analytics für Relationship Analysis und Attack Path Visualization\n• Time Series Analysis für Temporal Pattern Recognition und Trend Identification\n• Natural Language Processing für Log Analysis und Threat Intelligence Integration\n\n🎯 False Positive Reduction Strategies:\n• Contextual Enrichment mit Asset Information, User Roles und Business Process Context\n• Multi-stage Validation durch verschiedene Analytics Engines und Correlation Rules\n• Feedback Loop Implementation für Continuous Learning und Rule Refinement\n• Whitelist Management und Known-Good Behavior Modeling für Legitimate Activity Recognition\n• Risk-based Scoring für Intelligent Alert Prioritization und Analyst Efficiency\n\n⚡ Performance Optimization und Scalability:\n• Distributed Computing Architecture für High-volume Data Processing und Real-time Analytics\n• Index Optimization und Query Performance Tuning für Fast Data Retrieval\n• Memory Management und Caching Strategies für Optimal Resource Utilization\n• Load Balancing und Horizontal Scaling für Growing Data Volumes\n• Continuous Performance Monitoring und Bottleneck Identification für Sustained Excellence"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche forensischen Untersuchungstechniken sind bei SIEM-basierten Incident Investigations am effektivsten und wie dokumentiert man diese rechtssicher?',
        answer: "Forensische SIEM-Untersuchungen erfordern systematische Methodiken, die sowohl technische Präzision als auch rechtliche Anforderungen erfüllen. Effektive forensische Techniken kombinieren Digital Evidence Standards mit Advanced Analytics für comprehensive Incident Reconstruction und Court-ready Documentation.\n\n🔍 Digital Evidence Acquisition und Preservation:\n• Chain of Custody Establishment für alle relevanten Log-Daten und System-Artefakte mit lückenloser Dokumentation\n• Forensic Imaging von kritischen Systemen und Datenquellen für Integrity Preservation\n• Hash Verification und Digital Signatures für Evidence Authenticity und Tamper Detection\n• Time Synchronization Verification für Accurate Timeline Reconstruction\n• Legal Hold Implementation für Preservation relevanter Daten während Investigation Period\n\n📅 Timeline Reconstruction und Attack Path Analysis:\n• Chronological Event Sequencing basierend auf präzisen Timestamps und Log Correlation\n• Attack Vector Identification durch Backward und Forward Chaining Analysis\n• Lateral Movement Tracking durch Network Flow Analysis und System Access Patterns\n• Persistence Mechanism Discovery durch Registry Analysis und System Configuration Review\n• Impact Assessment durch Data Access Patterns und System Modification Analysis\n\n🧬 Advanced Forensic Analytics Techniques:\n• Behavioral Pattern Analysis für Attacker Profiling und Modus Operandi Identification\n• Statistical Anomaly Detection für Subtle Attack Indicators und Covert Activities\n• Graph Analysis für Complex Relationship Mapping zwischen Entities und Events\n• Machine Learning Forensics für Pattern Recognition in Large Dataset Analysis\n• Memory Forensics Integration für Volatile Evidence Recovery und Analysis\n\n📋 Legal Documentation Standards:\n• Comprehensive Investigation Reports mit Executive Summary und Technical Details\n• Evidence Documentation mit Chain of Custody Forms und Integrity Verification\n• Methodology Documentation für Reproducible Analysis und Peer Review\n• Expert Witness Preparation mit Clear Technical Explanations und Visual Aids\n• Regulatory Compliance Documentation für Industry-specific Requirements\n\n🛡️ Investigation Quality Assurance:\n• Peer Review Processes für Investigation Findings und Methodology Validation\n• Independent Verification von Critical Findings durch Secondary Analysis\n• Documentation Review für Completeness und Legal Sufficiency\n• Expert Consultation für Complex Technical Issues und Legal Implications\n• Continuous Training für Forensic Investigators und Legal Standards Updates\n\n⚖️ Court Readiness und Expert Testimony:\n• Technical Explanation Preparation für Non-technical Audiences und Legal Proceedings\n• Visual Evidence Presentation mit Clear Diagrams und Timeline Visualizations\n• Cross-examination Preparation für Technical Accuracy und Methodology Defense\n• Alternative Hypothesis Consideration für Comprehensive Analysis und Objectivity\n• Professional Certification Maintenance für Expert Witness Credibility"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie implementiert man Behavioral Analytics in SIEM-Systemen für effektive Insider Threat Detection und User Entity Behavior Analysis?',
        answer: "Behavioral Analytics in SIEM-Systemen erfordert sophisticated Modeling-Techniken, die normale User- und Entity-Verhaltensweisen lernen und Abweichungen präzise identifizieren. Effektive Implementation kombiniert statistische Methoden mit Machine Learning für comprehensive Insider Threat Detection und Advanced Persistent Threat Identification.\n\n👤 User Behavior Baseline Establishment:\n• Comprehensive User Activity Profiling über verschiedene Systeme und Anwendungen mit detaillierter Aktivitätsmuster-Analyse\n• Role-based Behavior Modeling für verschiedene Job Functions und Access Patterns\n• Temporal Behavior Analysis für Time-of-day und Day-of-week Activity Patterns\n• Geographic Behavior Profiling für Location-based Access Patterns und Travel Behavior\n• Application Usage Patterns für Software-specific Behavior und Workflow Analysis\n\n🏢 Entity Behavior Analysis und Network Modeling:\n• Device Behavior Profiling für Endpoint Activity Patterns und Communication Behavior\n• Network Communication Analysis für Traffic Patterns und Protocol Usage\n• Service Account Monitoring für Automated Process Behavior und Privilege Usage\n• Asset Interaction Patterns für Data Access Behavior und Resource Utilization\n• Inter-entity Relationship Mapping für Collaboration Patterns und Access Chains\n\n📈 Advanced Analytics Implementation:\n• Statistical Process Control für Behavior Deviation Detection und Anomaly Scoring\n• Machine Learning Models für Adaptive Behavior Recognition und Pattern Evolution\n• Clustering Algorithms für Peer Group Analysis und Comparative Behavior Assessment\n• Time Series Analysis für Behavior Trend Identification und Seasonal Pattern Recognition\n• Graph Analytics für Complex Relationship Analysis und Influence Pattern Detection\n\n🚨 Insider Threat Detection Strategies:\n• Privilege Escalation Detection durch Access Pattern Analysis und Permission Changes\n• Data Exfiltration Indicators durch Volume Analysis und Transfer Pattern Monitoring\n• After-hours Activity Monitoring für Unusual Time-based Access Patterns\n• Emotional State Indicators durch Communication Analysis und Behavior Changes\n• Collaboration Pattern Changes für Social Engineering Detection und Influence Analysis\n\n🔄 Continuous Learning und Model Adaptation:\n• Feedback Loop Integration für False Positive Reduction und Model Refinement\n• Seasonal Adjustment für Business Cycle Adaptation und Holiday Pattern Recognition\n• Role Change Adaptation für Job Function Updates und Responsibility Shifts\n• Organizational Change Integration für Merger, Acquisition und Restructuring Impact\n• Threat Intelligence Integration für External Threat Context und Attack Pattern Updates\n\n⚡ Real-time Processing und Alert Generation:\n• Stream Processing für Immediate Behavior Analysis und Real-time Anomaly Detection\n• Risk Scoring Algorithms für Behavior-based Threat Prioritization\n• Multi-factor Risk Assessment für Comprehensive Threat Evaluation\n• Automated Response Triggers für High-risk Behavior Patterns\n• Investigation Workflow Integration für Efficient Analyst Response und Case Management"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Threat Hunting Methodiken sind in SIEM-Umgebungen am erfolgreichsten und wie strukturiert man proaktive Investigation Workflows?',
        answer: "Effektive Threat Hunting in SIEM-Umgebungen erfordert strukturierte Methodiken, die Hypothesis-driven Investigation mit Advanced Analytics und Threat Intelligence kombinieren. Erfolgreiche Hunting-Programme nutzen systematische Ansätze für Proactive Threat Discovery und Continuous Security Improvement.\n\n🎯 Hypothesis-driven Hunting Methodology:\n• MITRE ATT&CK Framework Integration für Systematic Technique Coverage und Threat Modeling\n• Threat Intelligence-based Hypothesis Development für Current Threat Landscape Alignment\n• Risk-based Hunting Prioritization für High-value Asset Focus und Critical Business Process Protection\n• Adversary Behavior Modeling für Realistic Attack Scenario Development\n• Historical Incident Analysis für Pattern Recognition und Recurring Threat Identification\n\n🔍 Advanced Hunting Techniques und Analytics:\n• Statistical Hunting für Anomaly-based Threat Discovery und Baseline Deviation Analysis\n• Behavioral Hunting für User und Entity Behavior Analysis und Insider Threat Detection\n• Network Hunting für Communication Pattern Analysis und Command-and-Control Detection\n• Endpoint Hunting für Host-based Artifact Analysis und Malware Discovery\n• Data Hunting für Information Access Pattern Analysis und Data Exfiltration Detection\n\n📊 Hunting Data Sources und Integration:\n• Multi-source Data Correlation für Comprehensive Threat Visibility und Cross-platform Analysis\n• Threat Intelligence Integration für IOC Matching und Attribution Analysis\n• External Data Enrichment für Geolocation, Reputation und Context Information\n• Historical Data Analysis für Long-term Pattern Recognition und Campaign Tracking\n• Real-time Data Streaming für Immediate Threat Discovery und Response\n\n🛠️ Hunting Tools und Technology Stack:\n• Query Language Mastery für Efficient Data Exploration und Pattern Discovery\n• Visualization Tools für Pattern Recognition und Anomaly Identification\n• Statistical Analysis Tools für Quantitative Hunting und Hypothesis Testing\n• Machine Learning Integration für Automated Pattern Discovery und Anomaly Detection\n• Custom Tool Development für Specialized Hunting Requirements und Workflow Optimization\n\n📋 Structured Investigation Workflows:\n• Hunting Campaign Planning mit Clear Objectives und Success Metrics\n• Investigation Documentation für Knowledge Sharing und Lesson Learned Capture\n• Evidence Collection Procedures für Forensic Readiness und Legal Compliance\n• Escalation Procedures für Threat Discovery und Incident Response Integration\n• Continuous Improvement Processes für Hunting Technique Refinement und Effectiveness Measurement\n\n🔄 Hunting Program Maturity und Evolution:\n• Hunting Metrics und KPI Tracking für Program Effectiveness Measurement\n• Hunter Skill Development für Continuous Capability Enhancement\n• Threat Landscape Adaptation für Emerging Threat Coverage und Technique Evolution\n• Automation Integration für Routine Task Elimination und Efficiency Improvement\n• Community Engagement für Threat Intelligence Sharing und Collaborative Hunting"
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
