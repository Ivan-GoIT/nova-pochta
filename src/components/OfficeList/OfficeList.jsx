import { useSelector } from 'react-redux';
import css from './OfficeList.module.css';
import { selectOfficesAtCity } from 'redux/root.selectors';
import { nanoid } from 'nanoid';
import { memo } from 'react';

const scheduleElFromObj = obj =>
  Object.entries(obj).map(item => (
    <p>
      {item[0]}:{item[1]}
    </p>
  ));

const OfficeList = () => {
  const { offices, city } = useSelector(selectOfficesAtCity);
  console.log('OfficeList Reload');
    console.log('OfficeList city', city);


  return (
    !!offices.length && (
      <>
        <h2 className={css.city}>{city}</h2>
        <div className={css.offises_list}>
          <ul>
            {offices.map(({ place, address, schedule }) => (
              <li key={nanoid()} className={css.item}>
                <h3 className={css.info}>{place} :</h3>
                <p className={css.address}>{address}</p>
                <div className={css.tooltip}>{scheduleElFromObj(schedule)}</div>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  );
};

export default memo(OfficeList);
