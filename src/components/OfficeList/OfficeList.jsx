import { useDispatch } from 'react-redux';
import css from './OfficeList.module.css'

const OfficeList = () => {
const dispatch=useDispatch()



  return (
    <div className={css.offise_list}>
      <p>OfficeList</p>
    </div>
  );
};

export default OfficeList;
