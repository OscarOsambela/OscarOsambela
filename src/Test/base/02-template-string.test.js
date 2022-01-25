import '@testing-library/jest-dom';
import { getSaludo } from "../../Base/02-template-string";

describe('prueba en archivo', ()=>{
    test('prueba en metodo getSaludo', ()=>{
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    })
})