export type LegalDocType =
  | 'terms'
  | 'privacy'
  | 'subscription'
  | 'cookies'
  | null;

export type PaymentMethod = 'mcx' | 'reference' | 'iban';

export interface QuizState {
  step: number;
  exposures: string[];
  childrenCount: string;
  childSex: 'Masculino' | 'Feminino' | '';
  dewormedLast6Months: string;
  symptoms: string[];
  concentration: string;
  noticedBefore: string;
  knowsNaturalDifference: string;
  dislikedFoods: string[];
  dietaryRestriction: string;
  agreesDecision: string;
  believesChange: string;
  parentName: string;
  whatsappNumber: string;
  paymentMethod: PaymentMethod;
  mcxPhone: string;
  orderCompleted: boolean;
  orderCode: string;
}

export const INITIAL_QUIZ_STATE: QuizState = {
  step: 1,
  exposures: [],
  childrenCount: '',
  childSex: '',
  dewormedLast6Months: '',
  symptoms: [],
  concentration: '',
  noticedBefore: '',
  knowsNaturalDifference: '',
  dislikedFoods: [],
  dietaryRestriction: '',
  agreesDecision: '',
  believesChange: '',
  parentName: '',
  whatsappNumber: '',
  paymentMethod: 'mcx',
  mcxPhone: '',
  orderCompleted: false,
  orderCode: '',
};
