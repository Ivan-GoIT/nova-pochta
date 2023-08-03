import checkTTN from "../../helpers/checkTTN"
import Button from "../Button/Button"

const AppControls = () => { 
    return (
              <div>
        <Button title='Перевірити ТТН' onClickHandler={ checkTTN} />
        <Button title='Список відділень' />
      </div>

    )
}

export default AppControls