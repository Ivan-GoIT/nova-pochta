import css from './TtnInfo.module.css';
import Loader from 'components/Loader/Loader';

import { selectTtnInfo, selectTtnResStatus } from 'redux/ttn/ttn.selectors';
import { STATUS } from 'constants/status.constants';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ttnInfoClearAction } from 'redux/ttn/ttn.slice';

const TtnInfo = () => {
  const dispatch = useDispatch();
  const ttnInfo = useSelector(selectTtnInfo);
  const status = useSelector(selectTtnResStatus);

  useEffect(() => {
    return () => {
      dispatch(ttnInfoClearAction());
    };
  }, [dispatch]);

  let { ttnNumber,statusTtn, sender, recipient, citySender } = ttnInfo || {};
  return (
    <>
      {status === STATUS.loading && <Loader />}
      {status === STATUS.success && (
        <div>
          {ttnNumber && <p>Номер ТТН: {ttnNumber}</p>}
          {statusTtn && <p>Статус доставки: {statusTtn}</p>}
          {citySender && <p>Відправлено: {citySender && sender}</p>}
          {recipient && <p>Отримано: {recipient}</p>}
        </div>
      )}
    </>
  );
};

export default TtnInfo;
