import { UserShortInterface } from "data/@types/UserInterface";
import { ApiService } from "data/services/ApiService";
import { ValidationService } from "data/services/ValidationService";
import { useMemo, useState } from "react";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);

      setBuscaFeita(true);
      setCarregando(false);
    } catch (error) {
      setErro("Cep Não encontrado");
      setCarregando(false);
    }
  }

  return {
    cep,
    cepValido,
    erro,
    diaristas,
    diaristasRestantes,
    buscaFeita,
    carregando,
    buscarProfissionais,
    setCep,
  };
}
