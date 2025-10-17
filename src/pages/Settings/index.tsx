import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export const SettingsPage = () => {
  const { state, dispatch } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement | null>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement | null>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement | null>(null);

  function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formErros = [];

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErros.push("Por favor use apenas numeros para o Foco.");
    }
    if (isNaN(shortBreakTime)) {
      formErros.push("Por favor use apenas numeros para o Descanso Curto.");
    }
    if (isNaN(longBreakTime)) {
      formErros.push("Por favor use apenas numeros para o Descanso Longo.");
    }

    if (workTime < 1 || workTime > 99) {
      formErros.push("Digite valores entre '1' e '99' para o Foco.");
    }
    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErros.push("Digite valores entre '1' e '30' para o Descanso Curto.");
    }
    if (longBreakTime < 1 || longBreakTime > 60) {
      formErros.push("Digite valores entre '1' e '60' para o Descanso Longo.");
    }

    if (formErros.length > 0) {
      formErros.forEach((e) => {
        showMessage.error(e);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      playload: { workTime, shortBreakTime, longBreakTime },
    });
    showMessage.success("Configurações Salvas");
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo de foco, descanso curso e
          descanso longo.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action="" className="form">
          <div className="formRow">
            <DefaultInput
              id="workTime"
              labelText="Foco"
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
            />
          </div>

          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              labelText="Descanso Curto"
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
            />
          </div>

          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              labelText="Descanso Longo"
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
            />
          </div>

          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salva Configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
};
