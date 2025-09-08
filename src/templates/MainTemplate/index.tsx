import { Contianer } from "../../components/Container"
import { Footer } from "../../components/Footer"
import { Logo } from "../../components/Logo"
import { Menu } from "../../components/Menu"

type MainTemplateProps = {
    children: React.ReactNode;
}

export const MainTemplate = ({children}: MainTemplateProps) => {

  return (
    <>
      <Contianer>
        <Logo />
      </Contianer>

      <Contianer>
        <Menu />
      </Contianer>

      {children}

      <Contianer>
        <Footer />
      </Contianer>
    </>
  )
}
