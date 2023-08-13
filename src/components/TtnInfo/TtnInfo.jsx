import { useSelector } from 'react-redux';
import css from './TtnInfo.module.css';
import { selectTtnInfo, selectTtnResStatus } from 'redux/ttn/ttn.selectors';
import { STATUS } from 'constants/status.constants';
import Loader from 'components/Loader/Loader';

const TtnInfo = () => {
  const ttnInfo = useSelector(selectTtnInfo);
  const status = useSelector(selectTtnResStatus);

  let { statusTtn, sender, recipient, citySender } = ttnInfo || {};
  return (
    <>
      {status === STATUS.loading && <Loader />}
      {status === STATUS.success && (
        <div>
          {statusTtn && <p>Статус доставки: {statusTtn}</p>}
          {citySender && <p>Відправлено: {citySender && sender}</p>}
          {recipient && <p>Отримано: {recipient}</p>}
        </div>
      )}
    </>
  );
};

export default TtnInfo;
