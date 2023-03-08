export const antibioticFullList = [
  { id: "AMX_CLAV", name: "Amoxicillin/Clavulanate" },
  { id: "AMP", name: "Ampicillin" },
  { id: "GEN", name: "Gentamicin" },
  { id: "COTRI", name: "Co-trimoxazole" },
  { id: "CIP", name: "Ciprofloxacin" },
  { id: "CLOX", name: "Cloxacillin" },
  { id: "CFX", name: "CEFIXIME" },
  { id: "TET", name: "Tetracycline" },
  { id: "LEV", name: "Levofloxacin" },
  { id: "DOXY", name: "Doxycycline" },
  { id: "NOR", name: "Norfloxacin" },
  { id: "PEN", name: "Penicillin" },
  { id: "ERY", name: "Erythromycin" },
  { id: "LIN", name: "Linezolid" },
  { id: "VAN", name: "Vancomycin" },
  { id: "IMP", name: "Imipenem" },
  { id: "MOX", name: "Moxifloxacin" },
  { id: "CTX", name: "Cefotaxime" },
  { id: "CEFIPIME", name: "Cefepime" },
  { id: "AMK", name: "Amikacin" },
  { id: "OF", name: "Ofloxacin" },
  { id: "PIP", name: "Piperacillin" },
  { id: "PIP_TAX", name: "Piperacillin Tazobactam" },
  { id: "CEF_SUB", name: "Cefaperazone Sulbactam" },
  { id: "MEM", name: "Meropenem" },
  { id: "CHL", name: "Chloramphenicol" },
  { id: "TICAR_CALV", name: "Ticarcillin/Clavulanic " },
  { id: "ERTA", name: "Ertapenem" },
  { id: "COL", name: "Colistin" },
  { id: "TGC", name: "Tigecycline" },
  { id: "RIF", name: "Rifampin" },
  { id: "TEICO", name: "Teicoplanin" },
  { id: "TOB", name: "Tobramycin" },
  { id: "AZTERO", name: "Aztreonam" },
  { id: "NF", name: "Nitrofurantoin" },
  { id: "CEFOTAXIME", name: "Cefotaxime" },
  { id: "AZITHRO", name: "Azithromycin" },
  { id: "FLUCO", name: "Fluconazole" },
  { id: "AMPHO", name: "Amphotericin B" },
  { id: "CLINDA", name: "Clindamycin" },
  { id: "MICA", name: "Micafungin" },
  { id: "ANIDUL", name: "Anidulafungin" },
  { id: "CASPO", name: "Caspofungin" },
  { id: "OXAC", name: "Oxacillin" },
  { id: "DAPTO", name: "Daptomycin" },
];

export const specimenList = [
  { id: "BLOOD", name: "Blood", value: "blood" },
  { id: "CSF", name: "CSF", value: "csf" },
  { id: "URINE", name: "Urine", value: "urine" },
  { id: "SPUTUM", name: "Sputum", value: "sputum" },
  { id: "STOOL", name: "Stool", value: "stool" },
  { id: "PUS", name: "Pus", value: "pus" },
  { id: "WOUND", name: "Wound", value: "wound" },
  { id: "PLEURAL_FLUID", name: "Pleural fluid", value: "pleuralFluid" },
  { id: "TISSUE", name: "Tissue", value: "tissue" },
  { id: "ASCETIC_FLUID", name: "Ascetic fluid", value: "asceticFluid" },
  { id: "MINI_BAL", name: "Mini Bal", value: "miniBal" },
  { id: "BAL", name: "Bal", value: "bal" },
  // { id: "OTHER", name: "Other", value:"other" },
];

export const resistanceOrganismList = [
  {
    id: "CRE",
    name: "CRE (Carbapenem resistant enterobactereciae)",
    value: "cre",
  },
  {
    id: "CRAB",
    name: "CRAB (Carbapenem resistant acenetobacter)",
    value: "crab",
  },
  { id: "VRE", name: "VRE (Vancomycin resistant Enterococcus)", value: "vre" },
  { id: "COL_RE", name: "Col Re (colistin Resistant)", value: "colRe" },
  {
    id: "ESBL",
    name: "ESBL (Extended spectrum Beta lactamase)",
    value: "esbl",
  },
  {
    id: "MRSA",
    name: "MRSA (Methicillin resistant Staph Aureus)",
    value: "mrsa",
  },
  { id: "NA", name: "NA- None of the above are applicable", value: "na" },
];

export const clinicalSignsPriority = [
  {
    name: "Procalcitonin (ng/ml)",
    id: "procalcitonin",
    placeholder: "",
  },
  {
    name: "White Blood Cells (K/uL)",
    id: "wbc",
    placeholder: "",
  },
  {
    name: "Neutrophils %",
    id: "neutrophils",
    placeholder: "",
  },
  {
    name: "S.Creatinine(mg/dl)",
    id: "screatinine",
    placeholder: "",
  },
  {
    name: "Cratinine Clearance (mL/min)",
    id: "cratinineClerance",
    placeholder: "",
  },
  {
    name: "Temp(F)",
    id: "temp",
    placeholder: "",
  },
  {
    name: "Blood Pressure(mmHg)",
    id: "bp",
    placeholder: "",
  },
  {
    name: "O2 Saturation (%)",
    id: "o2",
    placeholder: "",
  },
];

export const clinicalSigns = [
  {
    name: "Temp(F)",
    id: "cstempf",
    placeholder: "",
  },
  {
    name: "Blood Pressure(mmHg)",
    id: "csbp",
    placeholder: "BP",
  },
  {
    name: "O2 Saturation (%)",
    id: "csosat",
    placeholder: "",
  },
  {
    name: "White Blood Cells (K/uL)",
    id: "cswbc",
    placeholder: "",
  },
  {
    name: "CRP (mg/L)",
    id: "cscrp",
    placeholder: "",
  },
  {
    name: "Procalcitonin (ng/ml)",
    id: "csprocalc",
    placeholder: "",
  },
  {
    name: "Lactate (mmol/L)",
    id: "cslactate",
    placeholder: "",
  },
  {
    name: "S.Creatinine(mg/dl)",
    id: "cscreatinine",
    placeholder: "",
  },
  {
    name: "Neutrophils %",
    id: "csneutrophils",
    placeholder: "",
  },
  {
    name: "Platelets (109/L)",
    id: "csplatelets",
    placeholder: "",
  },
  {
    name: "Urine analysis",
    id: "csurine",
    placeholder: "",
  },
  {
    name: "CSF study",
    id: "csfstudy",
    placeholder: "",
  },
  {
    name: "Body fluid study",
    id: "csbodyfluid",
    placeholder: "",
  },
];

export const drugAdministeredCheck = [
  {
    name: "isRightDocumentation",
    label: "Right Documentation",
  },
  {
    name: "isRightDrug",
    label: "Right Drug",
  },
  {
    name: "isRightDose",
    label: "Right Dose",
  },
  {
    name: "isRightRoute",
    label: "Right Route",
  },
  {
    name: "isRightFrequency",
    label: "Right Frequency",
  },
  {
    name: "isRightDuration",
    label: "Right Duration",
  },
  {
    name: "isRightIndication",
    label: "Right Indication",
  },
  {
    name: "isAppropriate",
    label: "Appropriate",
  },
];

export const recommendationInitialValue = [
  {
    label: "Indication",
    name: "indication",
    placeholder: "",
    checked: false,
  },
  {
    label: "Drug",
    name: "drug",
    placeholder: "",
    checked: false,
  },
  {
    label: "Frequency",
    name: "frequency",
    placeholder: "",
    checked: false,
  },
  {
    label: "Dose",
    name: "dose",
    placeholder: "",
    checked: false,
  },
  {
    label: "Duration",
    name: "duration",
    placeholder: "",
    checked: false,
  },
  {
    label: "De Escalation",
    name: "deEscalation",
    placeholder: "",
    checked: false,
  },
];


export const complianceList = [
  // {
  //   label: "Serum Creatinine",
  //   name: "serum_creatinine",
  // },
  // {
  //   label: "Procalcitonin",
  //   name: "procalcitonin",
  // },
  {
    label: "Appropriate",
    name: "isAppropriate",
  },
  {
    label: "Right Documentation",
    name: "isRightDocumentation",
  },
  // {
  //   label: "Recommendation Filed",
  //   name: "isRecommendationFiled",
  // },
  {
    label: "Antibiotic Changed",
    name: "isAntibioticChanged",
  },
  {
    label: "Complance",
    name: "isComplance",
  },
  {
    label: "Duration",
    name: "isDuration",
  },
  {
    label: "Antibiotic Dose Changed",
    name: "isAntibiotisDoseChanged",
  },
];
