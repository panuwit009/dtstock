import { useShow } from './showcontext';

export default function AlertPTB () {
    const { setShow } = useShow();

    // const styles = {
    //     color: '',
    //     icon: ''
    // };

        // switch (show.detail.status) {
        //     case 'success' :
        //         styles.color = 'emerald-400';
        //         styles.icon = '✔';
        //         break;
        //     case 'error' :
        //         styles.color = 'red-400';
        //         styles.icon = '✖';
        //         break;
        //     default :
        //         styles.color = '';
        //         styles.icon = '!';
        // }
        return (

            <div className="fixed bg-black/40 inset-0 flex justify-center items-center z-10" onClick={()=>setShow(null)}>

                <div className={`bg-white rounded-2xl w-sm relative flex flex-col items-center space-y-7 px-10 py-6 drop-shadow-lg/20 
                                border-t-6 border-emerald-400`}>

                    <div className='text-black absolute top-2 right-3 rounded-full hover:cursor-pointer'
                    onClick={()=>setShow(null)}>
                        ✖
                     </div>

                    <div className={`text-white text-3xl bg-gradient-to-br from-emerald-400 to-green-400 px-6 py-4 rounded-full animate-bounce`}>
                        ✔
                    </div>

                    <div className='text-center space-y-3 hover:cursor-default'>
                        <div className="text-black text-2xl font-semibold">
                            headerMessage
                        </div>

                        <div className="text-gray-500 text-sm">
                            <>show.detail.message<br /></>
                        </div>
                    </div>

                    <div className="w-full text-center bg-gradient-to-br from-emerald-400 to-green-500 text-white rounded-2xl shadow-lg p-4 font-semibold 
                                    translate duration-300 hover:cursor-pointer hover:scale-110 active:scale-95"
                    onClick={()=>setShow(null)}>
                       Confirm
                    </div>

                </div>
            </div>
        );
    }
    