import { Contianer } from "../../components/Container"
import { CountDown } from "../../components/Countdown"
import { MainForm } from "../../components/MainForm"
import { MainTemplate } from "../../templates/MainTemplate"

export const HomePage = () => {
    return (
        <MainTemplate>
            <Contianer>
                <CountDown />
            </Contianer>

            <Contianer>
                <MainForm />
            </Contianer>
        </MainTemplate>
    )
}