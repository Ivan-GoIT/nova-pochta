import OfficeList from "components/OfficeList/OfficeList";
import SearchForm from "components/SearchForm/SearchForm";
import formProperties from "helpers/formProperties";


const OfficeListPage = () => {
  return (
    <section>
      <SearchForm {...formProperties.office} />

      <OfficeList />
    </section>
  );
};

export default OfficeListPage;