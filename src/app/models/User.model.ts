type professional = 'Médico'
    | 'Enfermero'
    | 'Administrativo';
type issurance = 'salud'
    | 'familiar'
    | 'dental';
interface Issurance {
    cardNumber: number;
    name: string;
    type: issurance;

}
interface Address {
    street: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
}

export interface User {
    _id: string;
    NHC?: string;
    medicalBoardNumber?: string;
    firstName: string;
    lastName: string;
    secondLastName?: string;
    gender?: string;
    birthdate?: string;
    identityNumber?: string;
    address: Address;
    professionalType?: professional;
    issuranceList?: Issurance[];
}