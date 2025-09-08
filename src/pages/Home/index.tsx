import { Container } from "../../components/Container"
import { CountDown } from "../../components/Countdown"
import { MainForm } from "../../components/MainForm"
import { MainTemplate } from "../../templates/MainTemplate"

export const HomePage = () => {
    return (
        <MainTemplate>
            <Container>
                <CountDown />
            </Container>

            <Container>
                <MainForm />
            </Container>
        </MainTemplate>
    )
}