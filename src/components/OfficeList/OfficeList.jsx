import { useDispatch, useSelector } from 'react-redux';
import css from './OfficeList.module.css';
import { selectOfficesAtCity } from 'redux/root.selectors';
import { nanoid } from 'nanoid';

const OfficeList = () => {
  const dispatch = useDispatch();
  const { offices,city} = useSelector(selectOfficesAtCity);

  return (

    offices && 
      <>
        <h2>{city}</h2>(
        <div className={css.offise_list}>
          <ul>{offices.map(({place,address,schedule})=>{
            <li
              key={nanoid()}
              className={`${css.item}`}
              // onClick={}
            >
              <p>
                <span>{place}</span>
                {address}
              </p>
            </li>
          })}</ul>
        </div>
        )
      </>
    )
 
};

export default OfficeList;
