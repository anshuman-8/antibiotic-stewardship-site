export interface CultureReportType {
  report: number;
  sentBeforeAntibiotics: boolean;
  dateTimeSent: string;
  dateTimeReported: string;
  specimen: string;
  organism: string;
  siteOfCollection: string;
  antibioticSensitivity: string[];
  multiDrugResistance: string;
  resistance: string;
  isXRay: boolean;
  isUltrasound: boolean;
  isCTScan: boolean;
  isMRI: boolean;
  isPETScan: boolean;
  impression: string;
}

export interface AntibioticsUsedType {
  id: string;
  initDate: string;
  antibiotic: string;
  loadingDose: string;
  maintenanceDose: string;
  route: string;
  frequency: string;
  daysDuration: string;
  endDate: string;
}

export interface ClinicalSignType {
  date: Date;
  neutrophil: string;
  bloodPressure : string;
  o2Saturation : string;
  procalcitonin : string;
  whiteBloodCell : string;
  sCreatinine : string;
  cratinineClearance : string;
  temperature : string;
}
