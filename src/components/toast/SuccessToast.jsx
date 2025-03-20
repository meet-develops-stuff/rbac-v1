import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SuccessToast({ message, open, onClose }) {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // Set to bottom-right
            open={open}
            autoHideDuration={3000}
            onClose={onClose}
        >
            <Alert
                onClose={onClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}