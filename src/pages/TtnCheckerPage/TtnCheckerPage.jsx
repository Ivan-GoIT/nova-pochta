import TtnHistory from "components/TtnHistory/TtnHistory";
import TtnInfo from "components/TtnInfo/TtnInfo";

const { default: SearchForm } = require("components/SearchForm/SearchForm");
const { default: formProperties } = require("helpers/formProperties");

const TtnCheckerPage=()=>{
    return (
      <section>
        <SearchForm {...formProperties.ttn} />

        <div>
            <TtnInfo/>
            <TtnHistory/>
        </div>
      </section>
    );
}

export default TtnCheckerPage;