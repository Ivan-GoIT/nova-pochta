import { useSelector } from 'react-redux';
import css from './TtnInfo.module.css';
import { selectTtnInfo, selectTtnResStatus } from 'redux/ttn/ttn.selectors';
import { STATUS } from 'constants/status.constants';
import Loader from 'components/Loader/Loader';

const TtnInfo = () => {
  const ttnInfo = useSelector(selectTtnInfo);
  const status = useSelector(selectTtnResStatus);

  const { statusTtn, sender, recipient, citySender } = ttnInfo || {};
  console.log('statusTtn', statusTtn);

  console.log('ttnInfo', ttnInfo);
  return (
    <>
      {status === STATUS.loading && <Loader />}
      {status === STATUS.success && (
        <div>
          <p>Статус доставки: {statusTtn}</p>
          <p>Відправлено: {citySender && sender}</p>
          <p>Отримано: {recipient}</p>
        </div>
      )}
    </>
  );
};

export default TtnInfo;
