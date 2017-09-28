/**
 * Created by Pavel on 13.09.2017.
 */
import React from 'react';


const Example = React.createClass({
    createNotification: function(type, textMessage){
        return () => {
            switch (type) {
                case 'success':
                    NotificationManager.success('Success message', textMessage, 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', textMessage, 3000);
                    break;
            }
        };
    },

    render: function() {
        return (
            <div>
            <button className='btn btn-info'
        onClick={()=>NotificationManager.success('Success message', "OK", 3000)}>Info
        </button>
        <hr/>
        <button className='btn btn-success'
        onClick={()=>NotificationManager.error('Error message', "Err", 3000)}>Success
        </button>
        <NotificationContainer/>
        </div>
        );
    }
})

export default Example;