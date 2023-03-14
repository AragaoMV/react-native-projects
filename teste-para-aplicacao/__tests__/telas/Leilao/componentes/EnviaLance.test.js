import React from "react";
import { render } from "@testing-library/react-native";
import EnviaLance from "../../../../src/telas/Leilao/componentes/EnviaLance";
import { ENVIADO } from "../../../../src/negocio/constantes/estadosLance";


describe('teals/Leilao/componentes/EnviaLance', () => {
    it('deve enviar o lance  quando o botao for seleciionado', () => {
        const enviaLance = jest.fn(() => new Promisse(resolve => resolve(ENVIADO)))
        const { toJSON } = render(
            <EnviaLance
                enviaLance={enviaLance}
                cor="blue"
            />
        );
        console.log(toJSON())
    });
});