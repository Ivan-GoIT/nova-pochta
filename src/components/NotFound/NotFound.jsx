const NotFound = () => {
  return (
    <div class="tracking__error">
      <img
        class="tracking__error-icon"
        src="https://preprod.novaposhtaglobal.com/wp-content/uploads/2022/07/errorpackage.svg"
      alt='Not found icon'/>
      <div class="tracking__error-text">
        Ми не знайшли посилку за таким номером. Можливо, вона ще не передана для
        відправлення, або номер некоректний. Перевірте, чи відповідає вказаний
        номер можливому формату: 59500000031324 або AENM0002497278NPI.
      </div>
    </div>
  );
};

export default NotFound
