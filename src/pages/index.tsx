import { Button, CircularProgress, Container, Typography } from "@mui/material";
import {
  FormElementContainer,
  ProfissionaisContainer,
  ProfissionaisPaper,
} from "@styles/Pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";
import type { NextPage } from "next";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";

const Home: NextPage = () => {
  const {
    cep,
    cepValido,
    erro,
    diaristas,
    diaristasRestantes,
    buscaFeita,
    carregando,
    buscarProfissionais,
    setCep,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <Container>
        <FormElementContainer>
          <TextFieldMask
            variant={"outlined"}
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          {erro && <Typography color={"error"}> {erro}</Typography>}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementContainer>

        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((diarista, index) => {
                  return (
                    <UserInformation
                      key={index}
                      picture={diarista.foto_usuario}
                      name={diarista.nome_completo}
                      rating={diarista.reputacao}
                      description={diarista.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>
              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ... e mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                      ? "prosisionais atendem"
                      : "profissional atende"}{" "}
                    ao seu endereço
                  </Typography>
                )}
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar um profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhum profissional disponivel em sua regiao
            </Typography>
          ))}
      </Container>
    </div>
  );
};

export default Home;
