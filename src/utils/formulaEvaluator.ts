import { SheetState } from '../types/sheet';

export function evaluateFormula(formula: string, state: SheetState): string | number {
  if (!formula.startsWith('=')) return formula;

  const cleanFormula = formula.substring(1).toUpperCase();
  
  // Handle basic mathematical functions
  if (cleanFormula.startsWith('SUM(')) {
    return evaluateSum(cleanFormula, state);
  } else if (cleanFormula.startsWith('AVERAGE(')) {
    return evaluateAverage(cleanFormula, state);
  } else if (cleanFormula.startsWith('MAX(')) {
    return evaluateMax(cleanFormula, state);
  } else if (cleanFormula.startsWith('MIN(')) {
    return evaluateMin(cleanFormula, state);
  } else if (cleanFormula.startsWith('COUNT(')) {
    return evaluateCount(cleanFormula, state);
  }

  // Handle data quality functions
  if (cleanFormula.startsWith('TRIM(')) {
    return evaluateTrim(cleanFormula, state);
  } else if (cleanFormula.startsWith('UPPER(')) {
    return evaluateUpper(cleanFormula, state);
  } else if (cleanFormula.startsWith('LOWER(')) {
    return evaluateLower(cleanFormula, state);
  }

  return formula;
}

function getCellValue(cellId: string, state: SheetState): number {
  const cell = state.data[cellId];
  if (!cell) return 0;
  const value = cell.formula ? evaluateFormula(cell.formula, state) : cell.value;
  return Number(value) || 0;
}

function getRangeValues(range: string, state: SheetState): number[] {
  // Implementation for getting values from a range like "A1:B3"
  const values: number[] = [];
  const [start, end] = range.split(':');
  
  // Add range parsing logic here
  
  return values;
}

// Mathematical Functions
function evaluateSum(formula: string, state: SheetState): number {
  const range = extractRange(formula);
  const values = getRangeValues(range, state);
  return values.reduce((sum, val) => sum + val, 0);
}

function evaluateAverage(formula: string, state: SheetState): number {
  const range = extractRange(formula);
  const values = getRangeValues(range, state);
  return values.length ? values.reduce((sum, val) => sum + val, 0) / values.length : 0;
}

function evaluateMax(formula: string, state: SheetState): number {
  const range = extractRange(formula);
  const values = getRangeValues(range, state);
  return values.length ? Math.max(...values) : 0;
}

function evaluateMin(formula: string, state: SheetState): number {
  const range = extractRange(formula);
  const values = getRangeValues(range, state);
  return values.length ? Math.min(...values) : 0;
}

function evaluateCount(formula: string, state: SheetState): number {
  const range = extractRange(formula);
  const values = getRangeValues(range, state);
  return values.filter(val => typeof val === 'number').length;
}

// Data Quality Functions
function evaluateTrim(formula: string, state: SheetState): string {
  const value = extractSingleValue(formula, state);
  return String(value).trim();
}

function evaluateUpper(formula: string, state: SheetState): string {
  const value = extractSingleValue(formula, state);
  return String(value).toUpperCase();
}

function evaluateLower(formula: string, state: SheetState): string {
  const value = extractSingleValue(formula, state);
  return String(value).toLowerCase();
}

// Helper Functions
function extractRange(formula: string): string {
  const match = formula.match(/\((.*?)\)/);
  return match ? match[1] : '';
}

function extractSingleValue(formula: string, state: SheetState): string {
  const cellId = extractRange(formula);
  const cell = state.data[cellId];
  return cell ? cell.value : '';
}