/**
 * Scopo principale del definire interfaccie:
 * 1.L'interfaccia definisce esattamente quali proprietà deve avere un oggetto Patient in questo caso.
 * 2.Quando dichiari una variabile di tipo Patient, TypeScript controlla che tutte le proprietà richieste 
 *   siano presenti e del tipo corretto. Se manca una proprietà o se il tipo è sbagliato, riceverai un errore durante la compilazione.
 * 3.L'interfaccia funge da documentazione, rendendo chiaro agli altri sviluppatori (o a te stesso in futuro) 
 *   quale struttura hanno i dati che rappresentano un paziente.
 */
export interface Patient {
    id: Number,
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    email: String,
    phone: String,
    address: String
}
