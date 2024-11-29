import './App.css';
import {Box, Typography, Dialog, Link} from '@mui/material';
import React from 'react';
import moment from 'moment';
import {backendData} from './data';

function App() {
  const [currentDayInfo, setCurrentDayInfo] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const isDisabled = (id) => {
    const dateToCheck = moment(`2024-12-${id}`);
    const today = moment().startOf('day');
    return !dateToCheck.isSame(today, 'day');
  }

  const handleOpen = (day) => {
    if (isDisabled(day.id)) return;

    setOpen(true);
    setCurrentDayInfo(day);
    localStorage.setItem(`day${day.id}`, day.id);
  }
  const handleClose = () => setOpen(false);

  const isOpen = (id) => localStorage.getItem(`day${id}`);

  return (
    <div>
      <div className='container'>
        {backendData.map(day => 
          <div className={`item ${isOpen(day.id) ? 'isOpen' : ''} ${isDisabled(day.id) ? 'disabled' : ''} item${day.id}`} key={day.id} onClick={() => handleOpen(day)}>
            <div className='itemNumber'>{day.id}</div>
          </div>
        )}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className='modal-content'>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {currentDayInfo.text}
            </Typography>
            <Link href={currentDayInfo.url}>{currentDayInfo.url}</Link>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
